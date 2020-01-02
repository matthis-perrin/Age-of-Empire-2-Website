import * as React from 'react';
import styled from 'styled-components';

import {UnitWithBonuses} from '../../lib/unit_with_bonuses/core';
import {Age} from '../../data/ages/core';
import {filterUnitsWithBonusesForAge} from '../../lib/unit_with_bonuses/filtering';
import {aggregateByCivilization} from '../../lib/unit_with_bonuses/aggregation';
import {FontWeight} from '../theme';

import {allUnitCaracColumns} from './unit_carac_columns';
import {UnitCaracView} from './unit_carac_view';

export function UnitTable(props: {unitWithBonuses: UnitWithBonuses[]; age: Age}): JSX.Element {
  const {unitWithBonuses, age} = props;
  const filtered = filterUnitsWithBonusesForAge(unitWithBonuses, age);
  const aggregated = aggregateByCivilization(filtered);
  const sorted = aggregated.sort((a1, a2) => a1.unit.name.localeCompare(a2.unit.name));

  // headers

  return (
    <Table>
      <THead>
        <Line>
          <HeaderCell>Civilizations</HeaderCell>
          <HeaderCell>Alliés</HeaderCell>
          <HeaderCell>Unité</HeaderCell>
          <React.Fragment>
            {allUnitCaracColumns.map(column => (
              <HeaderCell key={column.id}>{column.name}</HeaderCell>
            ))}
          </React.Fragment>
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
            <React.Fragment>
              {allUnitCaracColumns.map(column => (
                <Cell key={column.id}>
                  <UnitCaracView age={age} unit={u} column={column} />
                </Cell>
              ))}
            </React.Fragment>
          </Line>
        ))}
      </TBody>
    </Table>
  );
}
UnitTable.displayName = 'UnitTable';

const Table = styled.table``;
const TBody = styled.tbody``;
const THead = styled.thead``;
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
