import React from 'react';
import styled from 'styled-components';

import {CivilizationBonus, Bonus, InterpolationVariableType} from '../../data/core';
import {Technology} from '../../data/technologies/core';
import {FontWeight} from '../theme';
import {Unit, UnitCarac} from '../../data/units/core';
import {InterpolationStringView} from '../core/interpolation_string_view';
import {TechnologyName} from '../core/technology_name';

import {UnitCaracColumn} from './unit_carac_columns';

export function UnitCaracDetails<CaracBonus>(props: {
  unit: Unit;
  column: UnitCaracColumn<CaracBonus>;
  civilizationBonuses: {value: CaracBonus; source: CivilizationBonus}[];
  alliesCivilizationBonuses: {value: CaracBonus; source: CivilizationBonus}[];
  technologyBonuses: {value: CaracBonus; source: Technology}[];
  alliesTechnologyBonuses: {value: CaracBonus; source: Technology}[];
}): JSX.Element {
  return (
    <Wrapper>
      <tbody>
        <TechnologyBonusGroup
          unit={props.unit}
          column={props.column}
          bonuses={props.technologyBonuses}
        />
        <AlliesTechnologyBonusGroup
          unit={props.unit}
          column={props.column}
          bonuses={props.alliesTechnologyBonuses}
        />
        <CivilizationBonusGroup
          unit={props.unit}
          column={props.column}
          bonuses={props.civilizationBonuses}
        />
        <AlliesCivilizationBonusGroup
          unit={props.unit}
          column={props.column}
          bonuses={props.alliesCivilizationBonuses}
        />
      </tbody>
    </Wrapper>
  );
}
UnitCaracDetails.displayName = 'UnitCaracDetails';

const Wrapper = styled.table``;

function CivilizationBonusGroup<CaracBonus>(props: {
  unit: Unit;
  column: UnitCaracColumn<CaracBonus>;
  bonuses: {value: CaracBonus; source: CivilizationBonus}[];
}): JSX.Element {
  if (props.bonuses.length === 0) {
    return <React.Fragment />;
  }
  return (
    <React.Fragment>
      <tr>
        <GroupTitle colSpan={2}>Bonus de civilization</GroupTitle>
      </tr>
      {props.bonuses.map((g, i) => (
        <UnitCaracBonus
          key={i}
          unit={props.unit}
          column={props.column}
          caracBonus={g.value}
          name={
            <InterpolationStringView
              interpolationString={{
                template: `(Bonus des %1)`,
                variables: [
                  {
                    type: InterpolationVariableType.Civilization,
                    civilizationId: g.source.civilization,
                  },
                ],
              }}
            />
          }
          source={g.source.bonus}
        />
      ))}
    </React.Fragment>
  );
}
CivilizationBonusGroup.displayName = 'CivilizationBonusGroup';

function AlliesCivilizationBonusGroup<CaracBonus>(props: {
  unit: Unit;
  column: UnitCaracColumn<CaracBonus>;
  bonuses: {value: CaracBonus; source: CivilizationBonus}[];
}): JSX.Element {
  if (props.bonuses.length === 0) {
    return <React.Fragment />;
  }
  return (
    <React.Fragment>
      <tr>
        <GroupTitle colSpan={2}>Bonus de civilization des alliés</GroupTitle>
      </tr>
      {props.bonuses.map((g, i) => (
        <UnitCaracBonus
          key={i}
          unit={props.unit}
          column={props.column}
          caracBonus={g.value}
          name={
            <InterpolationStringView
              interpolationString={{
                template: `(Bonus d'équipe des %1)`,
                variables: [
                  {
                    type: InterpolationVariableType.Civilization,
                    civilizationId: g.source.civilization,
                  },
                ],
              }}
            />
          }
          source={g.source.bonus}
        />
      ))}
    </React.Fragment>
  );
}
AlliesCivilizationBonusGroup.displayName = 'AlliesCivilizationBonusGroup';

function TechnologyBonusGroup<CaracBonus>(props: {
  unit: Unit;
  column: UnitCaracColumn<CaracBonus>;
  bonuses: {value: CaracBonus; source: Technology}[];
}): JSX.Element {
  if (props.bonuses.length === 0) {
    return <React.Fragment />;
  }
  return (
    <React.Fragment>
      <tr>
        <GroupTitle colSpan={2}>Technologies</GroupTitle>
      </tr>
      {props.bonuses.map((g, i) => (
        <UnitCaracBonus
          key={i}
          unit={props.unit}
          column={props.column}
          caracBonus={g.value}
          name={
            <InterpolationStringView
              interpolationString={{
                template: `(%1)`,
                variables: [
                  {
                    type: InterpolationVariableType.Technology,
                    technology: g.source,
                  },
                ],
              }}
            />
          }
          source={g.source.bonus}
        />
      ))}
    </React.Fragment>
  );
}
TechnologyBonusGroup.displayName = 'TechnologyBonusGroup';

function AlliesTechnologyBonusGroup<CaracBonus>(props: {
  unit: Unit;
  column: UnitCaracColumn<CaracBonus>;
  bonuses: {value: CaracBonus; source: Technology}[];
}): JSX.Element {
  if (props.bonuses.length === 0) {
    return <React.Fragment />;
  }
  return (
    <React.Fragment>
      <tr>
        <GroupTitle colSpan={2}>Technologies des alliés</GroupTitle>
      </tr>
      {props.bonuses.map((g, i) => (
        <UnitCaracBonus
          key={i}
          unit={props.unit}
          column={props.column}
          caracBonus={g.value}
          name={
            <InterpolationStringView
              interpolationString={{
                template: `(%1)`,
                variables: [
                  {
                    type: InterpolationVariableType.Technology,
                    technology: g.source,
                  },
                ],
              }}
            />
          }
          source={g.source.bonus}
        />
      ))}
    </React.Fragment>
  );
}
AlliesTechnologyBonusGroup.displayName = 'AlliesTechnologyBonusGroup';

const GroupTitle = styled.td`
  font-weight: ${FontWeight.SemiBold};
  padding: 4px 0 2px 0;
`;

function UnitCaracBonus<CaracBonus>(props: {
  unit: Unit;
  column: UnitCaracColumn<CaracBonus>;
  caracBonus: CaracBonus;
  name: JSX.Element;
  source: Bonus;
}): JSX.Element {
  const {unit, column, caracBonus, name, source} = props;
  const {caracModifier, getCaracValues, digits} = column;
  const newCaracs = caracModifier(unit as UnitCarac, caracBonus);
  const oldValues = getCaracValues(props.unit);
  const newValues = getCaracValues(newCaracs);

  const caracChange = newValues
    .map((newValue, i) => {
      const oldValue = oldValues[i];
      const diff = Math.abs(newValue - oldValue);
      const operator = newValue > oldValue ? '+' : '-';
      const formatNumber = (value: number) =>
        value.toLocaleString(undefined, {minimumIntegerDigits: 1, maximumFractionDigits: digits});
      return `${operator}${formatNumber(diff)}`;
    })
    .join(', ');

  return (
    <GroupLine>
      <Cell>{caracChange}</Cell>
      <Cell>
        <InterpolationStringView
          interpolationString={source.description}
        />
        <CellSeparator />
        {name}
      </Cell>
    </GroupLine>
  );
}
UnitCaracBonus.displayName = 'UnitCaracBonus';

const GroupLine = styled.tr``;

const Cell = styled.td`
  padding: 2px 4px;
`;

const CellSeparator = styled.div`
  width: 4px;
  display: inline-block;
`;
