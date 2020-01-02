import React, {useState} from 'react';
import {Manager, Reference, Popper} from 'react-popper';

import {AggregatedUnitWithBonus} from '../../lib/unit_with_bonuses/core';
import {CivilizationBonus} from '../../data/core';
import {UnitCarac} from '../../data/units/core';
import {Technology} from '../../data/technologies/core';
import {Age} from '../../data/ages/core';
import {extractBonusEffects} from '../../lib/unit_with_bonuses/effects';
import {FontWeight} from '../theme';

import {UnitCaracColumn} from './unit_carac_columns';
import {UnitCaracDetails} from './unit_carac_details';
import styled from 'styled-components';

export function UnitCaracView<CaracBonus>(props: {
  column: UnitCaracColumn<CaracBonus>;
  unit: AggregatedUnitWithBonus;
  age: Age;
}): JSX.Element {
  const [popoverShown, setPopoverShown] = useState(false);

  const {effectExtractor, caracModifier, getCaracValues, digits} = props.column;
  const unitWithBonuses = props.unit;
  const unit = unitWithBonuses.unit;

  let civilizationBonuses: {value: CaracBonus; source: CivilizationBonus}[] = [];
  let alliesCivilizationBonuses: {value: CaracBonus; source: CivilizationBonus}[] = [];
  let technologyBonuses: {value: CaracBonus; source: Technology}[] = [];
  let alliesTechnologyBonuses: {value: CaracBonus; source: Technology}[] = [];

  let allCaracBonuses: CaracBonus[] = [];

  for (const source of unitWithBonuses.alliesTechnologies) {
    const effects = source.value.bonus.effects;
    const caracBonuses = extractBonusEffects<CaracBonus>(
      unit,
      props.age,
      effects,
      effectExtractor,
      true
    );
    allCaracBonuses = allCaracBonuses.concat(caracBonuses);
    alliesTechnologyBonuses = alliesTechnologyBonuses.concat(
      caracBonuses.map(value => ({
        value,
        source: source.value,
      }))
    );
  }
  for (const source of unitWithBonuses.technologies) {
    const effects = source.bonus.effects;
    const caracBonuses = extractBonusEffects<CaracBonus>(
      unit,
      props.age,
      effects,
      effectExtractor,
      false
    );
    allCaracBonuses = allCaracBonuses.concat(caracBonuses);
    technologyBonuses = technologyBonuses.concat(
      caracBonuses.map(value => ({
        value,
        source,
      }))
    );
  }
  for (const source of unitWithBonuses.alliesCivilizationBonuses) {
    const effects = source.value.bonus.effects;
    const caracBonuses = extractBonusEffects<CaracBonus>(
      unit,
      props.age,
      effects,
      effectExtractor,
      true
    );
    allCaracBonuses = allCaracBonuses.concat(caracBonuses);
    alliesCivilizationBonuses = alliesCivilizationBonuses.concat(
      caracBonuses.map(value => ({
        value,
        source: source.value,
      }))
    );
  }
  for (const source of unitWithBonuses.civilizationBonuses) {
    const effects = source.bonus.effects;
    const caracBonuses = extractBonusEffects<CaracBonus>(
      unit,
      props.age,
      effects,
      effectExtractor,
      false
    );
    allCaracBonuses = allCaracBonuses.concat(caracBonuses);
    civilizationBonuses = civilizationBonuses.concat(
      caracBonuses.map(value => ({
        value,
        source,
      }))
    );
  }

  const newCaracs = allCaracBonuses.reduce(caracModifier, unit as UnitCarac);
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
            <Manager>
              <Reference>
                {({ref}) => (
                  <span
                    onMouseEnter={() => setPopoverShown(true)}
                    onMouseLeave={() => setPopoverShown(false)}
                    ref={ref}
                    style={{color: 'blue', fontWeight: FontWeight.SemiBold}}
                  >{`${formatNumber(newValue)} (${operator}${formatNumber(diff)})`}</span>
                )}
              </Reference>
              {popoverShown ? (
                <Popper placement="top">
                  {({ref, style, placement, arrowProps}) => (
                    <PopperContent ref={ref} style={style} data-placement={placement}>
                      <UnitCaracDetails
                      unit={unit}
                        column={props.column}
                        civilizationBonuses={civilizationBonuses}
                        alliesCivilizationBonuses={alliesCivilizationBonuses}
                        technologyBonuses={technologyBonuses}
                        alliesTechnologyBonuses={alliesTechnologyBonuses}
                      />
                    </PopperContent>
                  )}
                </Popper>
              ) : (
                <React.Fragment />
              )}
            </Manager>
          );
        }
        return <React.Fragment>{newValue}</React.Fragment>;
      })}
    </React.Fragment>
  );
}
UnitCaracView.displayName = 'UnitCaracView';

const PopperContent = styled.div`
  background-color: white;
  padding: 8px;
  border: solid 2px black;
  border-radius: 3px;
  text-align: left;
`;