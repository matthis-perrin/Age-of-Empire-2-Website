import React from 'react';

import {AggregatedUnitWithBonus} from '../../lib/unit_with_bonuses/core';
import {CivilizationBonus} from '../../data/core';
import {UnitCarac} from '../../data/units/core';
import {Technology} from '../../data/technologies/core';
import {Age} from '../../data/ages/core';
import {extractBonusEffects} from '../../lib/unit_with_bonuses/effects';
import {FontWeight} from '../theme';

import {UnitCaracColumn} from './unit_carac_columns';

export function UnitCaracView<CaracBonus>(props: {
  column: UnitCaracColumn<CaracBonus>;
  unit: AggregatedUnitWithBonus;
  age: Age;
}): JSX.Element {
  const {effectExtractor, caracModifier, getCaracValues, digits} = props.column;
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
