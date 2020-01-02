import * as React from 'react';
import styled from 'styled-components';

import {UnitWithBonuses} from '../../lib/unit_with_bonuses/core';
import {Age} from '../../data/ages/core';
import {filterUnitsWithBonusesForAge} from '../../lib/unit_with_bonuses/filtering';
import {aggregateByCivilization} from '../../lib/unit_with_bonuses/aggregation';

import {
  HealthCarac,
  TrainingSpeedCarac,
  CostCarac,
  RateOfFireCarac,
  FrameDelayCarac,
  AreaOfDamageCarac,
  MeleeDommageCarac,
  PierceDommageCarac,
  MinimumRangeCarac,
  MaximumRangeCarac,
  AccuracyCarac,
  ProjectileSpeedCarac,
  HealingRangeCarac,
  ConversionRangeCarac,
  MeleeArmorCarac,
  PierceArmorCarac,
  LineOfSightCarac,
  SpeedCarac,
  GarrisonCarac,
} from './unit_carac';
import {FontWeight} from '../theme';

export function UnitTable(props: {unitWithBonuses: UnitWithBonuses[]; age: Age}): JSX.Element {
  const {unitWithBonuses, age} = props;
  const filtered = filterUnitsWithBonusesForAge(unitWithBonuses, age);
  const aggregated = aggregateByCivilization(filtered);
  const sorted = aggregated.sort((a1, a2) => a1.unit.name.localeCompare(a2.unit.name));
  return (
    <Table>
      <THead>
        <Line>
          <HeaderCell>Civilizations</HeaderCell>
          <HeaderCell>Alliés</HeaderCell>
          <HeaderCell>Unité</HeaderCell>
          <HeaderCell>PDV</HeaderCell>
          <HeaderCell>Temps de construction</HeaderCell>
          <HeaderCell>Bois</HeaderCell>
          <HeaderCell>Nourriture</HeaderCell>
          <HeaderCell>Or</HeaderCell>
          <HeaderCell>Pierre</HeaderCell>
          <HeaderCell>Délais entre 2 attaques</HeaderCell>
          <HeaderCell>Délais entre 2 cibles</HeaderCell>
          <HeaderCell>Zone de dégats</HeaderCell>
          <HeaderCell>Dommages de mélée</HeaderCell>
          <HeaderCell>Dommages de percée</HeaderCell>
          <HeaderCell>Portée minimum</HeaderCell>
          <HeaderCell>Portée</HeaderCell>
          <HeaderCell>Précision</HeaderCell>
          <HeaderCell>Vitesse des projectiles</HeaderCell>
          <HeaderCell>Portée de conversion</HeaderCell>
          <HeaderCell>Portée de soin</HeaderCell>
          <HeaderCell>Armure de mélée</HeaderCell>
          <HeaderCell>Armure de percée</HeaderCell>
          <HeaderCell>Vitesse</HeaderCell>
          <HeaderCell>Ligne de vue</HeaderCell>
          <HeaderCell>Garnison</HeaderCell>
        </Line>
      </THead>
      <TBody>
        {sorted.map(u => (
          <Line
            onClick={() => console.log(u)}
            key={`${u.unit.id}-${u.civilizations
              .concat(u.allies)
              .map(c => c.id)
              .join('-')}`}
          >
            <Cell>
              {u.civilizations.length > 4
                ? `${u.civilizations.length} civilizations`
                : u.civilizations.map(c => c.name).join(', ')}
            </Cell>
            <Cell>{u.allies.map(c => c.name).join(', ')}</Cell>
            <Cell>{u.unit.name}</Cell>
            <Cell>
              <HealthCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <TrainingSpeedCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <CostCarac unit={u} age={age} resource="wood" />
            </Cell>
            <Cell>
              <CostCarac unit={u} age={age} resource="food" />
            </Cell>
            <Cell>
              <CostCarac unit={u} age={age} resource="gold" />
            </Cell>
            <Cell>
              <CostCarac unit={u} age={age} resource="stone" />
            </Cell>
            <Cell>
              <RateOfFireCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <FrameDelayCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <AreaOfDamageCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <MeleeDommageCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <PierceDommageCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <MinimumRangeCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <MaximumRangeCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <AccuracyCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <ProjectileSpeedCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <ConversionRangeCarac unit={u} age={age} />
            </Cell>
            <Cell>
              <HealingRangeCarac unit={u} age={age} />
            </Cell>
            <Cell><MeleeArmorCarac unit={u} age={age} /></Cell>
            <Cell><PierceArmorCarac unit={u} age={age} /></Cell>
            <Cell><SpeedCarac unit={u} age={age} /></Cell>
            <Cell><LineOfSightCarac unit={u} age={age} /></Cell>
            <Cell><GarrisonCarac unit={u} age={age} /></Cell>
          </Line>
        ))}
      </TBody>
    </Table>
  );
}
UnitTable.displayName = 'UnitTable';

const Table = styled.table``;
const TBody = styled.tbody`
`;
const THead = styled.thead`
`;
const Line = styled.tr`
  &:hover {
    background-color: #f0f0f0;
  }
`;
const Cell = styled.td`
  padding: 4px 8px;
  border-left: solid 1px black;
  text-align: center;
`;
const HeaderCell = styled.th`
padding: 4px 8px;
position: sticky;
top: 0;
background-color: black;
color: white;
font-weight: ${FontWeight.SemiBold};
`;
