import * as React from 'react';
import styled from 'styled-components';

import {Resource, Cost} from '../../data/resource';
import {removeUndefined} from '../../lib/utils/type_utils';
import {arrayJoin} from '../../lib/utils/array_utils';

import {ResourceView} from './resource_view';

export function CostView(props: {cost: Cost}): JSX.Element {
  return (
    <Wrapper>
      {arrayJoin(
        removeUndefined(
          [Resource.Wood, Resource.Food, Resource.Gold, Resource.Stone].map(r => {
            const quantity = props.cost[r];
            if (quantity === undefined || quantity === 0) {
              return undefined;
            }
            return <ResourceView key={r} quantity={quantity} resource={r} />;
          })
        ),
        <Separator />
      )}
    </Wrapper>
  );
}
CostView.displayName = 'CostView';

const Wrapper = styled.span``;

const Separator = styled.span``;
