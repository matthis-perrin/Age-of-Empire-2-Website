import {BonusEffect, mergeAgeable2, Ageable, mergeAgeable3} from '../../data/core';
import {UnitCarac} from '../../data/units/core';
import {Cost, Resource} from '../../data/resource';
import {AttackType} from '../../data/damage';

export interface UnitCaracColumn<CaracBonus> {
  id: string;
  name: string;
  digits: number;
  effectExtractor(effect: BonusEffect): Ageable<CaracBonus> | undefined;
  caracModifier(carac: UnitCarac, bonus: CaracBonus): UnitCarac;
  getCaracValues(carac: UnitCarac): number[];
}

export const HealthCarac: UnitCaracColumn<{
  fixed: number | undefined;
  percent: number | undefined;
}> = {
  id: 'Health',
  name: 'PDV',
  digits: 0,
  effectExtractor: e =>
    e.healthFixedBonus === undefined && e.healthBonus === undefined
      ? undefined
      : mergeAgeable2(e.healthFixedBonus, e.healthBonus, (fixed, percent) => ({fixed, percent})),
  caracModifier: (carac, bonus) => ({
    ...carac,
    health: carac.health * (1 + (bonus.percent || 0)) + (bonus.fixed || 0),
  }),
  getCaracValues: carac => [carac.health],
};

export const TrainingSpeedCarac: UnitCaracColumn<number> = {
  id: 'TrainingSpeed',
  name: 'Temps de construction',
  digits: 1,
  effectExtractor: e => e.trainingSpeedBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    training: carac.training.map(t => ({...t, time: t.time * (1 - bonus)})),
  }),
  getCaracValues: carac => carac.training.map(t => t.time),
};

function makeCostCarac(
  resource: keyof Cost,
  id: string,
  name: string
): UnitCaracColumn<{fixed: number; percent: number}> {
  const percent = (effect: BonusEffect) => {
    if (resource === Resource.Wood) {
      return effect.woodCostBonus;
    } else if (resource === Resource.Food) {
      return effect.foodCostBonus;
    } else if (resource === Resource.Gold) {
      return effect.goldCostBonus;
    }
    return undefined;
  };
  const fixed = (effect: BonusEffect) => {
    if (resource === Resource.Wood) {
      return effect.woodCostFixedBonus;
    } else if (resource === Resource.Food) {
      return effect.foodCostFixedBonus;
    }
    return undefined;
  };
  return {
    id,
    name,
    digits: 0,
    effectExtractor: e =>
      percent(e) === undefined && fixed(e) === undefined && e.costBonus === undefined
        ? undefined
        : mergeAgeable3(percent(e), fixed(e), e.costBonus, (perc, fix, allPerc) => ({
            fixed: fix || 0,
            percent: (perc || 0) + (allPerc || 0),
          })),
    caracModifier: (carac, bonus) => ({
      ...carac,
      cost: {
        ...carac.cost,
        [resource]: (carac.cost[resource] || 0) * (1 - bonus.percent) - bonus.fixed,
      },
    }),
    getCaracValues: carac => [carac.cost[resource] || 0],
  };
}

export const WoodCostCarac = makeCostCarac(Resource.Wood, 'WoodCost', 'Bois');
export const FoodCostCarac = makeCostCarac(Resource.Food, 'FoodCost', 'Nourriture');
export const GoldCostCarac = makeCostCarac(Resource.Gold, 'GoldCost', 'Or');
export const StoneCostCarac = makeCostCarac(Resource.Stone, 'StoneCost', 'Pierre');

export const RateOfFireCarac: UnitCaracColumn<number> = {
  id: 'RateOfFire',
  name: 'Délais entre 2 attaques',
  digits: 0,
  effectExtractor: e => e.rateOfFireBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    attack:
      carac.attack.type !== AttackType.None
        ? {
            ...carac.attack,
            rateOfFire: carac.attack.rateOfFire * (1 - bonus),
          }
        : carac.attack,
  }),
  getCaracValues: carac => [carac.attack.type !== AttackType.None ? carac.attack.rateOfFire : 0],
};

export const FrameDelayCarac: UnitCaracColumn<undefined> = {
  id: 'FrameDelay',
  name: 'Délais entre 2 cibles',
  digits: 2,
  effectExtractor: () => undefined,
  caracModifier: carac => carac,
  getCaracValues: carac => [
    carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
      ? carac.attack.frameDelay || 0
      : 0,
  ],
};

export const AreaOfDamageCarac: UnitCaracColumn<number> = {
  id: 'AreaOfDamage',
  name: 'Zone de dégats',
  digits: 0,
  effectExtractor: e => e.areaOfDamageBonus,
  caracModifier: (carac, bonus) => ({
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
  }),
  getCaracValues: carac => [
    carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
      ? carac.attack.areaOfDamage || 0
      : 0,
  ],
};

export const MeleeDommageCarac: UnitCaracColumn<number> = {
  id: 'MeleeDommage',
  name: 'Dommages de mélée',
  digits: 0,
  effectExtractor: e => e.attackBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    attack:
      carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
        ? {
            ...carac.attack,
            dommage: {...carac.attack.dommage, melee: carac.attack.dommage.melee + bonus},
          }
        : carac.attack,
  }),
  getCaracValues: carac => [
    carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
      ? carac.attack.dommage.melee
      : 0,
  ],
};

export const PierceDommageCarac: UnitCaracColumn<number> = {
  id: 'PierceDommage',
  name: 'Dommages de percée',
  digits: 0,
  effectExtractor: e => e.attackBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    attack:
      carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
        ? {
            ...carac.attack,
            dommage: {...carac.attack.dommage, pierce: carac.attack.dommage.pierce + bonus},
          }
        : carac.attack,
  }),
  getCaracValues: carac => [
    carac.attack.type === AttackType.Range || carac.attack.type === AttackType.CaC
      ? carac.attack.dommage.pierce
      : 0,
  ],
};

export const MinimumRangeCarac: UnitCaracColumn<{
  bonus: number | undefined;
  removed: boolean | undefined;
}> = {
  id: 'MinimumRange',
  name: 'Portée minimum',
  digits: 0,
  effectExtractor: e =>
    e.minimumRangeBonus === undefined && e.removeMinimumRange === undefined
      ? undefined
      : mergeAgeable2(e.minimumRangeBonus, e.removeMinimumRange, (bonus, removed) => ({
          bonus,
          removed,
        })),
  caracModifier: (carac, bonus) => ({
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
  }),
  getCaracValues: carac => [
    carac.attack.type === AttackType.Range && carac.attack.minimumRange
      ? carac.attack.minimumRange || 0
      : 0,
  ],
};

export const MaximumRangeCarac: UnitCaracColumn<number> = {
  id: 'MaximumRange',
  name: 'Portée',
  digits: 0,
  effectExtractor: e => e.rangeBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    attack:
      carac.attack.type === AttackType.Range
        ? {
            ...carac.attack,
            range: carac.attack.range + bonus,
          }
        : carac.attack,
  }),
  getCaracValues: carac => [carac.attack.type === AttackType.Range ? carac.attack.range : 0],
};

export const AccuracyCarac: UnitCaracColumn<boolean> = {
  id: 'Accuracy',
  name: 'Précision',
  digits: 2,
  effectExtractor: e => e.fullAccuracyBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    attack:
      carac.attack.type === AttackType.Range
        ? {
            ...carac.attack,
            accuracy: bonus ? 1 : carac.attack.accuracy,
          }
        : carac.attack,
  }),
  getCaracValues: carac => [carac.attack.type === AttackType.Range ? carac.attack.accuracy : 0],
};

export const ProjectileSpeedCarac: UnitCaracColumn<number> = {
  id: 'ProjectileSpeed',
  name: 'Vitesse des projectiles',
  digits: 0,
  effectExtractor: e => e.projectileSpeedBonus,
  caracModifier: (carac, bonus) => ({
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
  }),
  getCaracValues: carac => [
    carac.attack.type === AttackType.Range ? carac.attack.projectileSpeed || 0 : 0,
  ],
};

export const ConversionRangeCarac: UnitCaracColumn<number> = {
  id: 'ConversionRange',
  name: 'Portée de conversion',
  digits: 0,
  effectExtractor: e => e.conversionRangeBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    attack:
      carac.attack.type === AttackType.Conversion
        ? {
            ...carac.attack,
            conversionRange: carac.attack.conversionRange + bonus,
          }
        : carac.attack,
  }),
  getCaracValues: carac => [
    carac.attack.type === AttackType.Conversion ? carac.attack.conversionRange : 0,
  ],
};

export const HealingRangeCarac: UnitCaracColumn<number> = {
  id: 'HealingRange',
  name: 'Portée de soin',
  digits: 0,
  effectExtractor: e => e.healingRangeBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    attack:
      carac.attack.type === AttackType.Conversion
        ? {
            ...carac.attack,
            healingRange: carac.attack.healingRange + bonus,
          }
        : carac.attack,
  }),
  getCaracValues: carac => [
    carac.attack.type === AttackType.Conversion ? carac.attack.healingRange : 0,
  ],
};

export const MeleeArmorCarac: UnitCaracColumn<{melee: number; pierce: number}> = {
  id: 'MeleeArmor',
  name: 'Armure de mélée',
  digits: 0,
  effectExtractor: e => e.armorBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    armor: {...carac.armor, melee: bonus.melee},
  }),
  getCaracValues: carac => [carac.armor.melee],
};

export const PierceArmorCarac: UnitCaracColumn<{melee: number; pierce: number}> = {
  id: 'PierceArmor',
  name: 'Armure de percée',
  digits: 0,
  effectExtractor: e => e.armorBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    armor: {...carac.armor, pierce: bonus.pierce},
  }),
  getCaracValues: carac => [carac.armor.pierce],
};

export const SpeedCarac: UnitCaracColumn<number> = {
  id: 'Speed',
  name: 'Vitesse',
  digits: 1,
  effectExtractor: e => e.speedBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    speed: carac.speed * (1 + bonus),
  }),
  getCaracValues: carac => [carac.speed],
};

export const LineOfSightCarac: UnitCaracColumn<{
  fixed: number | undefined;
  percent: number | undefined;
}> = {
  id: 'LineOfSight',
  name: 'Ligne de vue',
  digits: 0,
  effectExtractor: e =>
    e.lineOfSightPercentBonus === undefined && e.lineOfSightBonus === undefined
      ? undefined
      : mergeAgeable2(e.lineOfSightPercentBonus, e.lineOfSightBonus, (fixed, percent) => ({
          fixed,
          percent,
        })),
  caracModifier: (carac, bonus) => ({
    ...carac,
    lineOfSight: carac.lineOfSight * (1 + (bonus.percent || 0)) + (bonus.fixed || 0),
  }),
  getCaracValues: carac => [carac.lineOfSight],
};

export const GarrisonCarac: UnitCaracColumn<number> = {
  id: 'Garrison',
  name: 'Garnison',
  digits: 0,
  effectExtractor: e => e.garrisonBonus,
  caracModifier: (carac, bonus) => ({
    ...carac,
    garrison: (carac.garrison || 0) * (1 + bonus),
  }),
  getCaracValues: carac => [carac.garrison || 0],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const allUnitCaracColumns: UnitCaracColumn<any>[] = [
  HealthCarac,
  TrainingSpeedCarac,
  WoodCostCarac,
  FoodCostCarac,
  GoldCostCarac,
  StoneCostCarac,
  RateOfFireCarac,
  FrameDelayCarac,
  AreaOfDamageCarac,
  MeleeDommageCarac,
  PierceDommageCarac,
  MinimumRangeCarac,
  MaximumRangeCarac,
  AccuracyCarac,
  ProjectileSpeedCarac,
  ConversionRangeCarac,
  HealingRangeCarac,
  MeleeArmorCarac,
  PierceArmorCarac,
  SpeedCarac,
  LineOfSightCarac,
  GarrisonCarac,
];
