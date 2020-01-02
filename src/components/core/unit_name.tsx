import * as React from 'react';

import {Unit} from '../../data/units/core';

import {Linky} from './linky';

export function UnitName(props: {unit: Unit}): JSX.Element {
  return <Linky text={props.unit.name} />;
}
UnitName.displayName = 'UnitName';
