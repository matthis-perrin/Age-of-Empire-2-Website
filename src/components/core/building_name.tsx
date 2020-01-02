import * as React from 'react';
import styled from 'styled-components';

import {Building} from '../../data/buildings';

export function BuildingName(props: {building: Building}): JSX.Element {
  return <Wrapper>{props.building.name}</Wrapper>;
}
BuildingName.displayName = 'BuildingName';

const Wrapper = styled.a`
  color: blue;
  padding: 0 4px;
`;
