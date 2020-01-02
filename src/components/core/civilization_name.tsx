import * as React from 'react';

import {CivilizationId} from '../../data/civilizations/ids';
import {getById} from '../../data/civilizations/registry';

import {Linky} from './linky';

export function CivilizationName(props: {civilizationId: CivilizationId}): JSX.Element {
  return <Linky text={getById(props.civilizationId).name} />;
}
CivilizationName.displayName = 'CivilizationName';
