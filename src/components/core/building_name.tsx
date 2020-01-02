import * as React from 'react';

import {Building} from '../../data/buildings';

import {Linky} from './linky';

export function BuildingName(props: {building: Building}): JSX.Element {
  return <Linky text={props.building.name} />;
}
BuildingName.displayName = 'BuildingName';
