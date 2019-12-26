import * as React from 'react';
import styled from 'styled-components';

import {UnitInfo} from '../../data/units/registry';
import {Palette} from '../theme';

export function SearchResults(props: {
  results: undefined | UnitInfo[];
  onSelect(index: number): void;
  selectedIndex?: number;
}): JSX.Element {
  const {results, onSelect, selectedIndex} = props;
  console.log(results);

  if (results === undefined || results.length === 0) {
    return <React.Fragment />;
  }

  return (
    <Wrapper>
      {results.map((r, i) => {
        const LineClass = i === selectedIndex ? SelectedResultLine : ResultLine;
        return <LineClass onClick={() => onSelect(i)}>{r.name}</LineClass>;
      })}
    </Wrapper>
  );
}
SearchResults.displayName = 'SearchResults';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80vh;
  overflow: auto;
  background-color: white;
`;

const ResultLine = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  &:hover {
    background-color: ${Palette.Clouds};
  }
`;

const SelectedResultLine = styled(ResultLine)`
  &,
  &:hover {
    background-color: ${Palette.Asbestos};
    color: ${Palette.White};
  }
`;
