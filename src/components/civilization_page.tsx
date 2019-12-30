import React, {useState} from 'react';
import styled from 'styled-components';
import {every} from 'lodash-es';

import {civilizationRegistry} from '../data/civilizations/registry';
import {CivilizationStrength} from '../data/civilizations/strength';

import {CivilizationTile} from './civilization_tile';
import {CivilizationStrengthFilter} from './civilization_filters';

export function CivilizationPage(): JSX.Element {
  const [selectedStrengths, setSelectedStrengths] = useState<CivilizationStrength[]>([]);

  const visibleCivilizations =
    selectedStrengths.length === 0
      ? civilizationRegistry
      : civilizationRegistry.filter(
          c => !every(c.strengths, s => selectedStrengths.indexOf(s) === -1)
        );

  return (
    <Wrapper>
      <FilterWrapper>
        <CivilizationStrengthFilter
          all={civilizationRegistry}
          selectedStrengths={selectedStrengths}
          onChange={setSelectedStrengths}
        />
      </FilterWrapper>
      <CivilizationsWrapper>
        {visibleCivilizations.map(c => (
          <CivilizationTile key={c.id} data={c} />
        ))}
      </CivilizationsWrapper>
    </Wrapper>
  );
}

CivilizationPage.displayName = 'CivilizationPage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 192px;
  flex-shrink: 0;
`;

const CivilizationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
