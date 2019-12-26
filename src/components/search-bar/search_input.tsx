import * as React from 'react';
import styled from 'styled-components';

import {Palette, Colors} from '../theme';
import {SVGIcon} from '../svg_icons';

function getResultCountLabel(resCount: number | undefined): string {
  if (resCount === undefined) {
    return '';
  }
  if (resCount === 0) {
    return 'Aucun résultats';
  }
  const pluralSuffix = resCount === 1 ? '' : 's';
  return `${resCount} resultat${pluralSuffix}`;
}

export function SearchInput(props: {
  value: string;
  onChange(newValue: string): void;
  resCount?: number;
}): JSX.Element {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const {value, onChange, resCount} = props;
  const result = getResultCountLabel(resCount);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Wrapper>
      <Icon>
        <SVGIcon name="search" width={24} height={24} color={Palette.Asbestos} />
      </Icon>
      <Input ref={inputRef} value={value} onChange={e => onChange(e.target.value)} />
      <Result>{result}</Result>
    </Wrapper>
  );
}
SearchInput.displayName = 'SearchInput';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${Palette.White};
  border-radius: 3px;
`;

const Icon = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0;
  margin: 0;
  font-size: 24px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${Palette.Asbestos};
`;

const Result = styled.div`
  flex-shrink: 0;
  margin-left: 8px;
  color: ${Palette.Asbestos};
  font-size: 18px;
`;
