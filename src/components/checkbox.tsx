import * as React from 'react';
import styled from 'styled-components';

import {Palette, Colors} from './theme';
import {SVGIcon} from './svg_icons';

export function Checkbox(props: {checked: boolean}): JSX.Element {
  const {checked} = props;
  const backgroundColor = checked ? Colors.SecondaryDark : Palette.Asbestos;
  const color = checked ? Colors.TextOnSecondary : 'transparent';
  return (
    <Wrapper style={{backgroundColor}}>
      <SVGIcon name="check" width={10} height={10} color={color} />
    </Wrapper>
  );
}
Checkbox.displayName = 'Checkbox';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: ${Palette.Asbestos};
  border-radius: 3px;
`;
