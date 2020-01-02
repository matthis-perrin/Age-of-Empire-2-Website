import * as React from 'react';
import styled from 'styled-components';

import {Resource} from '../../data/resource';

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
  return <Wrapper>{`${props.quantity} ${label}`}</Wrapper>;
}
ResourceView.displayName = 'ResourceView';

const Wrapper = styled.span`
  padding: 0 4px;
`;
