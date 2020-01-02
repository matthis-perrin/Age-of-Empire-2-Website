import React from 'react';
import styled from 'styled-components';

import {CivilizationBonus, Bonus} from '../../data/core';
import {Technology} from '../../data/technologies/core';

import {UnitCaracColumn} from './unit_carac_columns';
import {FontWeight} from '../theme';
import {AggregatedUnitWithBonus} from '../../lib/unit_with_bonuses/core';
import {Unit, UnitCarac} from '../../data/units/core';
import { getById } from '../../data/civilizations/registry';

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
    </Wrapper>
  );
}
UnitCaracDetails.displayName = 'UnitCaracDetails';

const Wrapper = styled.div``;

function CivilizationBonusGroup<CaracBonus>(props: {
  unit: Unit;
  column: UnitCaracColumn<CaracBonus>;
  bonuses: {value: CaracBonus; source: CivilizationBonus}[];
}): JSX.Element {
  if (props.bonuses.length === 0) {
    return <React.Fragment />;
  }
  return (
    <Group>
      <GroupTitle>Bonus de civilization</GroupTitle>
      {props.bonuses.map(g => (
        <UnitCaracBonus
          unit={props.unit}
          column={props.column}
          caracBonus={g.value}
          name={`Bonus de civilization des ${getById(g.source.civilization).name}`}
          source={g.source.bonus}
        />
      ))}
    </Group>
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
    <Group>
      <GroupTitle>Bonus de civilization des alliés</GroupTitle>
      {props.bonuses.map(g => (
        <UnitCaracBonus
          unit={props.unit}
          column={props.column}
          caracBonus={g.value}
          name={`Bonus de civilization d'équipe des ${getById(g.source.civilization).name}`}
          source={g.source.bonus}
        />
      ))}
    </Group>
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
    <Group>
      <GroupTitle>Technologies</GroupTitle>
      {props.bonuses.map(g => (
        <UnitCaracBonus
          unit={props.unit}
          column={props.column}
          caracBonus={g.value}
          name={g.source.frenchName}
          source={g.source.bonus}
        />
      ))}
    </Group>
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
    <Group>
      <GroupTitle>Technologies des alliés</GroupTitle>
      {props.bonuses.map(g => (
        <UnitCaracBonus
          unit={props.unit}
          column={props.column}
          caracBonus={g.value}
          name={g.source.frenchName}
          source={g.source.bonus}
        />
      ))}
    </Group>
  );
}
AlliesTechnologyBonusGroup.displayName = 'AlliesTechnologyBonusGroup';

const Group = styled.div`
  display: flex;
  flex-direction: column;
`;
const GroupTitle = styled.div`
  font-weight: ${FontWeight.SemiBold};
`;

function UnitCaracBonus<CaracBonus>(props: {
  unit: Unit;
  column: UnitCaracColumn<CaracBonus>;
  caracBonus: CaracBonus;
  name: string;
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
      {caracChange}
      {name}
      {source.description.template}
    </GroupLine>
  );
}
UnitCaracBonus.displayName = 'UnitCaracBonus';

const GroupLine = styled.div``;
