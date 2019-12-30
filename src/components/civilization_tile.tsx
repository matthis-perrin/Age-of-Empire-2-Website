import React from 'react';
import styled from 'styled-components';

import {Civilization} from '../data/civilizations/registry';
import {getStrengthLabel} from '../data/civilizations/strength';

import {Palette} from './theme';

export function CivilizationTile(props: {data: Civilization}): JSX.Element {
  return (
    <Wrapper>
      <Image style={{backgroundImage: `url('${props.data.baseImg}')`}}></Image>
      <Title>{props.data.name}</Title>
      <Strengths>
        Forces:
        {props.data.strengths.map(s => (
          <Strength>{getStrengthLabel(s)}</Strength>
        ))}
      </Strengths>
    </Wrapper>
  );
}
CivilizationTile.displayName = 'CivilizationTile';

const Wrapper = styled.div``;
const Image = styled.div`
  width: 52px;
  height: 52px;
  background-size: contain;
`;
const Title = styled.div``;
const Strengths = styled.div`
  display: flex;
  align-items: center;
`;

const Strength = styled.div`
  padding: 4px 6px;
  margin-left: 4px;
  border-radius: 3px;
  background-color: ${Palette.Clouds};
`;
