import * as React from 'react';

import {Technology} from '../../data/technologies/core';

import {Linky} from './linky';

export function TechnologyName(props: {technology: Technology}): JSX.Element {
  return <Linky text={props.technology.frenchName} />;
}
TechnologyName.displayName = 'TechnologyName';
