import React from 'react';
import styled from 'styled-components';

import {Civilization} from '../data/civilizations';
import {CivilizationStrength, getStrengthLabel} from '../data/civilization_strength';

import {Palette} from './theme';
import {Checkbox} from './checkbox';

export type CivilizationFilter = (Civilization: Civilization) => boolean;
export const noopFilter: CivilizationFilter = () => true;

export function CivilizationStrengthFilter(props: {
  all: Civilization[];
  selectedStrengths: CivilizationStrength[];
  onChange(newSelectedStrengths: CivilizationStrength[]): void;
}): JSX.Element {
  const strengths = new Map<CivilizationStrength, number>();
  props.all.forEach(c =>
    c.strengths.forEach(s => {
      const count = strengths.get(s);
      if (count === undefined) {
        strengths.set(s, 1);
      } else {
        strengths.set(s, count + 1);
      }
    })
  );

  function toggleStrength(strength: CivilizationStrength): void {
    const strengthIndex = props.selectedStrengths.indexOf(strength);
    const newSelectedStrengths =
      strengthIndex === -1
        ? props.selectedStrengths.concat(strength)
        : props.selectedStrengths.filter(s => s !== strength);
    props.onChange(newSelectedStrengths);
  }

  return (
    <Wrapper>
      {Array.from(strengths.entries())
        .sort((e1, e2) => e2[1] - e1[1])
        .map(([strength, count]) => (
          <CheckboxLine onClick={() => toggleStrength(strength)}>
            <CheckboxWrapper>
              <Checkbox checked={props.selectedStrengths.indexOf(strength) !== -1} />
            </CheckboxWrapper>
            <Label>{getStrengthLabel(strength)}</Label>
            <Count>{count}</Count>
          </CheckboxLine>
        ))}
    </Wrapper>
  );
}
CivilizationStrengthFilter.displayName = 'CivilizationStrengthFilter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const CheckboxLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    background-color: ${Palette.Clouds};
  }
`;

const CheckboxWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 4px;
`;
const Label = styled.div`
  flex-grow: 1;
`;
const Count = styled.div`
  flex-shrink: 0;
  border-radius: 50%;
  padding: 3px 6px;
  background-color: ${Palette.Clouds};
`;
