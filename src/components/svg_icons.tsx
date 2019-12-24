import {omit} from 'lodash-es';
import * as React from 'react';

const DEFAULT_ICON_WIDTH = 24;
const DEFAULT_ICON_HEIGHT = 24;

const ICONS = {
  check: {
    viewBox: '0 0 26 26',
    element: (
      <path d="m0.3 14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4 0l0.1 0.1 5.5 5.9c0.2 0.2 0.5 0.2 0.7 0l13.4-13.9h0.1v0c0.4-0.4 1-0.4 1.4 0l1.4 1.4c0.4 0.4 0.4 1 0 1.4l0 0-16 16.6c-0.2 0.2-0.4 0.3-0.7 0.3-0.3 0-0.5-0.1-0.7-0.3l-7.8-8.4-0.2-0.3z" />
    ),
  },
};

export type SVGIconName = keyof typeof ICONS;

interface SVGIconProps {
  name: SVGIconName;
  width?: number;
  height?: number;
  color?: string;
}

export function SVGIcon(props: SVGIconProps): JSX.Element {
  const {name, width = DEFAULT_ICON_WIDTH, height = DEFAULT_ICON_HEIGHT, color} = props;
  const {viewBox, element} = ICONS[name];
  const extendedProps = omit(props, ['name', 'width', 'height', 'children']);
  return (
    <svg {...extendedProps} viewBox={viewBox} width={width} height={height} style={{fill: color}}>
      {element}
    </svg>
  );
}
SVGIcon.displayName = 'SVGIcon';
