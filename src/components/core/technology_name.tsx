import * as React from 'react';
import styled from 'styled-components';

import {Technology} from '../../data/technologies/core';

export function TechnologyName(props: {technology: Technology}): JSX.Element {
  return <Wrapper>{props.technology.frenchName}</Wrapper>;
}
TechnologyName.displayName = 'TechnologyName';

const Wrapper = styled.a`
  color: blue;
  padding: 0 4px;
`;
