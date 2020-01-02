import React from 'react';

import {AggregatedUnitWithBonus} from '../../lib/unit_with_bonuses/core';
import {Age} from '../../data/ages/core';
import {
  BonusEffect,
  CivilizationBonus,
  mergeAgeable2,
  Ageable,
  mergeAgeable3,
} from '../../data/core';
import {UnitCarac} from '../../data/units/core';
import {Technology} from '../../data/technologies/core';
import {extractBonusEffects} from '../../lib/unit_with_bonuses/effects';
import {Cost} from '../../data/resource';
import {AttackType} from '../../data/damage';
import {FontWeight} from '../theme';

function UnitCaracView<CaracBonus>(props: {
  unit: AggregatedUnitWithBonus;
  age: Age;
  digits: number;
  effectExtractor(effect: BonusEffect): Ageable<CaracBonus> | undefined;
  caracModifier(carac: UnitCarac, bonus: CaracBonus): UnitCarac;
  getCaracValues(carac: UnitCarac): number[];
}): JSX.Element {
  const {effectExtractor, caracModifier, getCaracValues, digits} = props;
  const unitWithBonuses = props.unit;
  const unit = unitWithBonuses.unit;

  let bonuses: {value: CaracBonus; source: CivilizationBonus | Technology}[] = [];
  for (const source of unitWithBonuses.alliesTechnologies) {
    const effects = source.value.bonus.effects;
    bonuses = bonuses.concat(
      extractBonusEffects<CaracBonus>(unit, props.age, effects, effectExtractor, true).map(
        value => ({
          value,
          source: source.value,
        })
      )
    );
  }
  for (const source of unitWithBonuses.technologies) {
    const effects = source.bonus.effects;
    bonuses = bonuses.concat(
      extractBonusEffects<CaracBonus>(unit, props.age, effects, effectExtractor, false).map(
        value => ({
          value,
          source,
        })
      )
    );
  }
  for (const source of unitWithBonuses.alliesCivilizationBonuses) {
    const effects = source.value.bonus.effects;
    bonuses = bonuses.concat(
      extractBonusEffects<CaracBonus>(unit, props.age, effects, effectExtractor, true).map(
        value => ({
          value,
          source: source.value,
        })
      )
    );
  }
  for (const source of unitWithBonuses.civilizationBonuses) {
    const effects = source.bonus.effects;
    bonuses = bonuses.concat(
      extractBonusEffects<CaracBonus>(unit, props.age, effects, effectExtractor, false).map(
        value => ({
          value,
          source,
        })
      )
    );
  }

  const newCaracs = bonuses.map(b => b.value).reduce(caracModifier, unit as UnitCarac);
  const oldValues = getCaracValues(unit);
  const newValues = getCaracValues(newCaracs);
  return (
    <React.Fragment>
      {newValues.map((newValue, i) => {
        const oldValue = oldValues[i];
        const diff = Math.abs(newValue - oldValue);
        const operator = newValue > oldValue ? '+' : '-';
        const formatNumber = (value: number) =>
          value.toLocaleString(undefined, {minimumIntegerDigits: 1, maximumFractionDigits: digits});
        if (oldValue !== newValue) {
          return (
            <span style={{color: 'blue', fontWeight: FontWeight.SemiBold}}>{`${formatNumber(
              oldValue
            )} ${operator} ${formatNumber(diff)}`}</span>
          );
        }
        return <React.Fragment>{newValue}</React.Fragment>;
      })}
    </React.Fragment>
  );
}
UnitCaracView.displayName = 'UnitCaracView';

export const HealthCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<{fixed: number | undefined; percent: number | undefined}>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e =>
      e.healthFixedBonus === undefined && e.healthBonus === undefined
        ? undefined
        : mergeAgeable2(e.healthFixedBonus, e.healthBonus, (fixed, percent) => ({fixed, percent}))
    }
    caracModifier={(carac, bonus) => ({
      ...carac,
      health: carac.health * (1 + (bonus.percent || 0)) + (bonus.fixed || 0),
    })}
    getCaracValues={carac => [carac.health]}
  />
);
HealthCarac.displayName = 'HealthCarac';

export const TrainingSpeedCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={1}
    effectExtractor={e => e.trainingSpeedBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      training: carac.training.map(t => ({...t, time: t.time * (1 - bonus)})),
    })}
    getCaracValues={carac => carac.training.map(t => t.time)}
  />
);
TrainingSpeedCarac.displayName = 'TrainingSpeedCarac';

export const CostCarac = (props: {
  unit: AggregatedUnitWithBonus;
  age: Age;
  resource: keyof Cost;
}) => {
  const percent = (effect: BonusEffect) => {
    if (props.resource === 'wood') {
      return effect.woodCostBonus;
    } else if (props.resource === 'food') {
      return effect.foodCostBonus;
    } else if (props.resource === 'gold') {
      return effect.goldCostBonus;
    }
    return undefined;
  };
  const fixed = (effect: BonusEffect) => {
    if (props.resource === 'wood') {
      return effect.woodCostFixedBonus;
    } else if (props.resource === 'food') {
      return effect.foodCostFixedBonus;
    }
    return undefined;
  };
  return (
    <UnitCaracView<{fixed: number; percent: number}>
      unit={props.unit}
      age={props.age}
      digits={0}
      effectExtractor={e =>
        percent(e) === undefined && fixed(e) === undefined && e.costBonus === undefined
          ? undefined
          : mergeAgeable3(percent(e), fixed(e), e.costBonus, (perc, fix, allPerc) => ({
              fixed: fix || 0,
              percent: (perc || 0) + (allPerc || 0),
            }))
      }
      caracModifier={(carac, bonus) => ({
        ...carac,
        cost: {
          ...carac.cost,
          [props.resource]: (carac.cost[props.resource] || 0) * (1 - bonus.percent) - bonus.fixed,
        },
      })}
      getCaracValues={carac => [carac.cost[props.resource] || 0]}
    />
  );
};
CostCarac.displayName = 'CostCarac';

export const RateOfFireCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.rateOfFireBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      attack:
        carac.attack.type !== AttackType.None
          ? {
              ...carac.attack,
              rateOfFire: carac.attack.rateOfFire * (1 - bonus),
            }
          : carac.attack,
    })}
    getCaracValues={carac => [carac.attack.type !== AttackType.None ? carac.attack.rateOfFire : 0]}
  />
);
RateOfFireCarac.displayName = 'RateOfFireCarac';

export const FrameDelayCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<undefined>
    unit={props.unit}
    age={props.age}
    digits={2}
    effectExtractor={() => undefined}
    caracModifier={carac => carac}
    getCaracValues={carac => [
      carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
        ? carac.attack.frameDelay || 0
        : 0,
    ]}
  />
);
FrameDelayCarac.displayName = 'FrameDelayCarac';

export const AreaOfDamageCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.areaOfDamageBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      attack:
        carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
          ? {
              ...carac.attack,
              areaOfDamage:
                carac.attack.areaOfDamage === undefined
                  ? undefined
                  : carac.attack.areaOfDamage + bonus,
            }
          : carac.attack,
    })}
    getCaracValues={carac => [
      carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
        ? carac.attack.areaOfDamage || 0
        : 0,
    ]}
  />
);
AreaOfDamageCarac.displayName = 'AreaOfDamageCarac';

export const MeleeDommageCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.attackBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      attack:
        carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
          ? {
              ...carac.attack,
              dommage: {...carac.attack.dommage, melee: carac.attack.dommage.melee + bonus},
            }
          : carac.attack,
    })}
    getCaracValues={carac => [
      carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
        ? carac.attack.dommage.melee
        : 0,
    ]}
  />
);
MeleeDommageCarac.displayName = 'MeleeDommageCarac';

export const PierceDommageCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.attackBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      attack:
        carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
          ? {
              ...carac.attack,
              dommage: {...carac.attack.dommage, pierce: carac.attack.dommage.pierce + bonus},
            }
          : carac.attack,
    })}
    getCaracValues={carac => [
      carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
        ? carac.attack.dommage.pierce
        : 0,
    ]}
  />
);
PierceDommageCarac.displayName = 'PierceDommageCarac';

export const MinimumRangeCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<{bonus: number | undefined; removed: boolean | undefined}>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e =>
      e.minimumRangeBonus === undefined && e.removeMinimumRange === undefined
        ? undefined
        : mergeAgeable2(e.minimumRangeBonus, e.removeMinimumRange, (bonus, removed) => ({
            bonus,
            removed,
          }))
    }
    caracModifier={(carac, bonus) => ({
      ...carac,
      attack:
        carac.attack.type === AttackType.Range
          ? {
              ...carac.attack,
              minimumRange:
                carac.attack.minimumRange === undefined
                  ? undefined
                  : bonus.removed === true
                  ? 0
                  : carac.attack.minimumRange - (bonus.bonus || 0),
            }
          : carac.attack,
    })}
    getCaracValues={carac => [
      carac.attack.type === AttackType.Range && carac.attack.minimumRange
        ? carac.attack.minimumRange || 0
        : 0,
    ]}
  />
);
MinimumRangeCarac.displayName = 'MinimumRangeCarac';

export const MaximumRangeCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.rangeBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      attack:
        carac.attack.type === AttackType.Range
          ? {
              ...carac.attack,
              range: carac.attack.range + bonus,
            }
          : carac.attack,
    })}
    getCaracValues={carac => [carac.attack.type === AttackType.Range ? carac.attack.range : 0]}
  />
);
MaximumRangeCarac.displayName = 'MaximumRangeCarac';

export const AccuracyCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<boolean>
    unit={props.unit}
    age={props.age}
    digits={2}
    effectExtractor={e => e.fullAccuracyBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      attack:
        carac.attack.type === AttackType.Range
          ? {
              ...carac.attack,
              accuracy: bonus ? 1 : carac.attack.accuracy,
            }
          : carac.attack,
    })}
    getCaracValues={carac => [carac.attack.type === AttackType.Range ? carac.attack.accuracy : 0]}
  />
);
AccuracyCarac.displayName = 'AccuracyCarac';

export const ProjectileSpeedCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.projectileSpeedBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      attack:
        carac.attack.type === AttackType.Range
          ? {
              ...carac.attack,
              projectileSpeed:
                carac.attack.projectileSpeed === undefined
                  ? undefined
                  : carac.attack.projectileSpeed + bonus,
            }
          : carac.attack,
    })}
    getCaracValues={carac => [
      carac.attack.type === AttackType.Range ? carac.attack.projectileSpeed || 0 : 0,
    ]}
  />
);
ProjectileSpeedCarac.displayName = 'ProjectileSpeedCarac';

export const ConversionRangeCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.conversionRangeBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      attack:
        carac.attack.type === AttackType.Conversion
          ? {
              ...carac.attack,
              conversionRange: carac.attack.conversionRange + bonus,
            }
          : carac.attack,
    })}
    getCaracValues={carac => [
      carac.attack.type === AttackType.Conversion ? carac.attack.conversionRange : 0,
    ]}
  />
);
ConversionRangeCarac.displayName = 'ConversionRangeCarac';

export const HealingRangeCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.healingRangeBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      attack:
        carac.attack.type === AttackType.Conversion
          ? {
              ...carac.attack,
              healingRange: carac.attack.healingRange + bonus,
            }
          : carac.attack,
    })}
    getCaracValues={carac => [
      carac.attack.type === AttackType.Conversion ? carac.attack.healingRange : 0,
    ]}
  />
);
HealingRangeCarac.displayName = 'HealingRangeCarac';

export const MeleeArmorCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<{melee: number; pierce: number}>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.armorBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      armor: {...carac.armor, melee: bonus.melee},
    })}
    getCaracValues={carac => [carac.armor.melee]}
  />
);
MeleeArmorCarac.displayName = 'MeleeArmorCarac';

export const PierceArmorCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<{melee: number; pierce: number}>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.armorBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      armor: {...carac.armor, pierce: bonus.pierce},
    })}
    getCaracValues={carac => [carac.armor.pierce]}
  />
);
PierceArmorCarac.displayName = 'PierceArmorCarac';

export const SpeedCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={1}
    effectExtractor={e => e.speedBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      speed: carac.speed * (1 + bonus),
    })}
    getCaracValues={carac => [carac.speed]}
  />
);
SpeedCarac.displayName = 'SpeedCarac';

export const LineOfSightCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<{fixed: number | undefined; percent: number | undefined}>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e =>
      e.lineOfSightPercentBonus === undefined && e.lineOfSightBonus === undefined
        ? undefined
        : mergeAgeable2(e.lineOfSightPercentBonus, e.lineOfSightBonus, (fixed, percent) => ({
            fixed,
            percent,
          }))
    }
    caracModifier={(carac, bonus) => ({
      ...carac,
      lineOfSight: carac.lineOfSight * (1 + (bonus.percent || 0)) + (bonus.fixed || 0),
    })}
    getCaracValues={carac => [carac.lineOfSight]}
  />
);
LineOfSightCarac.displayName = 'LineOfSightCarac';

export const GarrisonCarac = (props: {unit: AggregatedUnitWithBonus; age: Age}) => (
  <UnitCaracView<number>
    unit={props.unit}
    age={props.age}
    digits={0}
    effectExtractor={e => e.garrisonBonus}
    caracModifier={(carac, bonus) => ({
      ...carac,
      garrison: (carac.garrison || 0) * (1 + bonus),
    })}
    getCaracValues={carac => [carac.garrison || 0]}
  />
);
SpeedCarac.displayName = 'SpeedCarac';

// comments: InterpolationString[];

// extraConstraint?: BonusConstraint;
// attackBonusBonus?: Ageable<[ArmorType, number]>;
// ageAvailability?: Age;
