import * as React from 'react';
import styled from 'styled-components';

import {Age} from '../../data/ages/core';
import {filterUnitsWithBonusesForAge} from '../../lib/unit_with_bonuses/filtering';
import {aggregateByCivilization} from '../../lib/unit_with_bonuses/aggregation';
import {FontWeight} from '../theme';
import {generateUnitsWithBonuses} from '../../lib/unit_with_bonuses/generation';

import {allUnitCaracColumns} from './unit_carac_columns';
import {UnitCaracView, getColumnBonuses} from './unit_carac_view';
import {arrayJoin} from '../../lib/utils/array_utils';
import {CivilizationName} from '../core/civilization_name';
import {UnitName} from '../core/unit_name';
import {UnitCarac} from '../../data/units/core';
import {SVGIcon} from '../svg_icons';

interface SortColumn {
  id: string;
  reversed: boolean;
}

const nameColumnId = 'name';

export function UnitTable(): JSX.Element {
  const [sortColumn, setSortColumn] = React.useState<SortColumn>({
    id: nameColumnId,
    reversed: false,
  });

  const unitWithBonuses = generateUnitsWithBonuses({
    alliesCount: 4,
    includeTechnologies: true,
  }).slice(0, 300);
  const age = Age.ImperialAge;
  const filtered = filterUnitsWithBonusesForAge(unitWithBonuses, age);
  const aggregated = aggregateByCivilization(filtered);
  const sorted = aggregated.sort((a1, a2) => {
    if (sortColumn.id === nameColumnId) {
      if (sortColumn.reversed) {
        return a2.unit.name.localeCompare(a1.unit.name);
      }
      return a1.unit.name.localeCompare(a2.unit.name);
    }
    const column = allUnitCaracColumns.filter(c => c.id === sortColumn.id)[0];

    const a1Bonuses = getColumnBonuses(column, a1, age);
    const a1Carac = a1Bonuses.allCaracBonuses.reduce(column.caracModifier, a1.unit as UnitCarac);
    const a1Values = column.getCaracValues(a1Carac);

    const a2Bonuses = getColumnBonuses(column, a2, age);
    const a2Carac = a2Bonuses.allCaracBonuses.reduce(column.caracModifier, a2.unit as UnitCarac);
    const a2Values = column.getCaracValues(a2Carac);

    return sortColumn.reversed ? a2Values[0] - a1Values[0] : a1Values[0] - a2Values[0];
  });

  function handleColumnClick(columnId: string): void {
    const reversed = sortColumn.id === columnId ? !sortColumn.reversed : false;
    setSortColumn({id: columnId, reversed});
  }

  return (
    <Table>
      <THead>
        <Line>
          <HeaderCell>Civilizations</HeaderCell>
          <HeaderCell>Alliés</HeaderCell>
          <SortableHeaderCell onClick={() => handleColumnClick(nameColumnId)}>
            Unité
            <SortIcon displayed={sortColumn.id === nameColumnId} reversed={sortColumn.reversed} />
          </SortableHeaderCell>
          <React.Fragment>
            {allUnitCaracColumns.map(column => (
              <SortableHeaderCell onClick={() => handleColumnClick(column.id)} key={column.id}>
                {column.name}
                <SortIcon displayed={sortColumn.id === column.id} reversed={sortColumn.reversed} />
              </SortableHeaderCell>
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
              {u.civilizations.length > 3
                ? `${u.civilizations.length} civilizations`
                : arrayJoin(
                    u.civilizations.map(c => <CivilizationName civilizationId={c.id} />),
                    <span>, </span>
                  )}
            </Cell>
            <Cell>
              {arrayJoin(
                u.allies.map(c => <CivilizationName civilizationId={c.id} />),
                <span>, </span>
              )}
            </Cell>
            <Cell>
              <UnitName unit={u.unit} />
            </Cell>
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

function SortIcon(props: {displayed: boolean; reversed: boolean}): JSX.Element {
  const {displayed, reversed} = props;
  if (!displayed) {
    return <React.Fragment />;
  }
  return (
    <SVGIcon name={reversed ? 'caret-down' : 'caret-up'} color="white" width={12} height={12} />
  );
}

const Table = styled.table`
  min-height: 100vh;
`;
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
  white-space: nowrap;
`;
const HeaderCell = styled.th`
  padding: 4px 8px;
  position: sticky;
  top: 0;
  background-color: black;
  color: white;
  font-weight: ${FontWeight.SemiBold};
`;
const SortableHeaderCell = styled(HeaderCell)`
  cursor: pointer;
`;
