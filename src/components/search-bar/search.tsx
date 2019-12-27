import * as React from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';

import {Palette} from '../theme';
import {Unit} from '../../data/units/core';
import {unitRegistry, UnitInfo} from '../../data/units/registry';

import {SearchInput} from './search_input';
import {SearchResults} from './search_results';

const FuseSearch = new Fuse(unitRegistry, {
  keys: ['searchName', 'name'],
  includeScore: true,
  threshold: 0.3,
});

function computeNewIndex(
  currentIndex: number | undefined,
  resultsCount: number | undefined,
  delta: number
): number | undefined {
  if (resultsCount === undefined || resultsCount === 0) {
    return undefined;
  }
  let newIndex = currentIndex === undefined ? 0 : currentIndex;
  newIndex = (newIndex + delta + resultsCount) % resultsCount;
  return newIndex;
}

export function Search(): JSX.Element {
  const [searchValue, setSearchValue] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState<number | undefined>(undefined);
  const [searchResults, setSearchResults] = React.useState<UnitInfo[] | undefined>(undefined);

  const hasBackdrop = searchResults !== undefined && searchResults.length > 0;

  function handleSearchChange(newValue: string): void {
    if (newValue.length === 0) {
      setSearchResults(undefined);
      setSelectedIndex(undefined);
    } else {
      const results = FuseSearch.search(newValue);
      setSelectedIndex(computeNewIndex(selectedIndex, results.length, 0));
      setSearchResults(results.map(r => r.item));
    }
    setSearchValue(newValue);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'ArrowDown') {
      setSelectedIndex(computeNewIndex(selectedIndex, searchResults && searchResults.length, 1));
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex(computeNewIndex(selectedIndex, searchResults && searchResults.length, -1));
    } else if (e.key === 'Enter') {
      handleSelect(selectedIndex === undefined ? 0 : selectedIndex);
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  }

  function handleCancel(): void {
    setSearchValue('');
    setSearchResults(undefined);
    setSelectedIndex(undefined);
  }

  function handleSelect(index: number): void {
    const selected = searchResults && searchResults[index];
    handleCancel();
  }

  return (
    <div onKeyDown={handleKeyDown}>
      <Backdrop style={{display: hasBackdrop ? 'block' : 'none'}} onClick={handleCancel} />
      <InputWrapper>
        <SearchInput
          value={searchValue}
          onChange={handleSearchChange}
          resCount={searchResults && searchResults.length}
        />
      </InputWrapper>
      <ResultsWrapper>
        <SearchResults
          results={searchResults}
          onSelect={handleSelect}
          selectedIndex={selectedIndex}
        />
      </ResultsWrapper>
    </div>
  );
}
SearchInput.displayName = 'SearchInput';

const InputWrapper = styled.div``;

const ResultsWrapper = styled.div``;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #00000033;
`;
