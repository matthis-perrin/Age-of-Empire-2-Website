import * as React from 'react';

import {Resource} from '../../data/resource';

import {Linky} from './linky';

export function ResourceView(props: {quantity: number; resource: Resource}): JSX.Element {
  let label = 'inconnu';
  if (props.resource === Resource.Wood) {
    label = 'bois';
  } else if (props.resource === Resource.Food) {
    label = 'nourriture';
  } else if (props.resource === Resource.Gold) {
    label = 'or';
  } else if (props.resource === Resource.Stone) {
    label = 'pierre';
  }
  return <Linky text={`${props.quantity} ${label}`} />;
}
ResourceView.displayName = 'ResourceView';
