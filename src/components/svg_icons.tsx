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
  search: {
    viewBox: '0 0 451 451',
    element: (
      <path
        d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
		s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
		C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
		s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"
      />
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
