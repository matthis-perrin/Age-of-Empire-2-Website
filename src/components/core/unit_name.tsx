import * as React from 'react';
import styled from 'styled-components';

import {Unit} from '../../data/units/core';

export function UnitName(props: {unit: Unit}): JSX.Element {
  return <Wrapper>{props.unit.name}</Wrapper>;
}
UnitName.displayName = 'UnitName';

const Wrapper = styled.a`
  color: blue;
  padding: 0 4px;
`;
