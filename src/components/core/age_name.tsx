import * as React from 'react';
import styled from 'styled-components';

import {Age} from '../../data/ages/core';

import {Linky} from './linky';

export function AgeName(props: {age: Age}): JSX.Element {
  let label = 'Inconnu';
  if (props.age === Age.DarkAge) {
    label = 'Age sombre';
  } else if (props.age === Age.FeudalAge) {
    label = 'Age féodal';
  } else if (props.age === Age.CastleAge) {
    label = 'Age des chateaux';
  } else if (props.age === Age.ImperialAge) {
    label = 'Age impérial';
  }
  return <Linky text={label} />;
}
AgeName.displayName = 'AgeName';
