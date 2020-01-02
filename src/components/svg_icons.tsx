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
  'caret-down': {
    viewBox: '0 0 292.4 292.4',
    element: (
      <g>
        <path d="M286.9 69.4c-3.6-3.6-7.9-5.4-12.8-5.4H18.3c-5 0-9.2 1.8-12.8 5.4C1.8 73 0 77.3 0 82.2c0 4.9 1.8 9.2 5.4 12.8l127.9 127.9c3.6 3.6 7.9 5.4 12.9 5.4s9.2-1.8 12.8-5.4L286.9 95.1c3.6-3.6 5.4-7.9 5.4-12.8C292.4 77.3 290.5 73 286.9 69.4z" />
      </g>
    ),
  },
  'caret-left': {
    viewBox: '0 0 292.4 292.4',
    element: (
      <path
        transform="rotate(180 146.2 146.2)"
        d="M223 133.3L95.1 5.4C91.5 1.8 87.2 0 82.2 0c-5 0-9.2 1.8-12.8 5.4 -3.6 3.6-5.4 7.9-5.4 12.8v255.8c0 4.9 1.8 9.2 5.4 12.8 3.6 3.6 7.9 5.4 12.9 5.4 4.9 0 9.2-1.8 12.8-5.4l127.9-127.9c3.6-3.6 5.4-7.9 5.4-12.8C228.4 141.2 226.6 136.9 223 133.3z"
      />
    ),
  },
  'caret-right': {
    viewBox: '0 0 292.4 292.4',
    element: (
      <path d="M223 133.3L95.1 5.4C91.5 1.8 87.2 0 82.2 0c-5 0-9.2 1.8-12.8 5.4 -3.6 3.6-5.4 7.9-5.4 12.8v255.8c0 4.9 1.8 9.2 5.4 12.8 3.6 3.6 7.9 5.4 12.9 5.4 4.9 0 9.2-1.8 12.8-5.4l127.9-127.9c3.6-3.6 5.4-7.9 5.4-12.8C228.4 141.2 226.6 136.9 223 133.3z" />
    ),
  },
  'caret-up': {
    viewBox: '0 0 292.4 292.4',
    element: (
      <g>
        <path d="M286.9 197.3L159 69.4c-3.6-3.6-7.9-5.4-12.8-5.4s-9.2 1.8-12.8 5.4L5.4 197.3C1.8 200.9 0 205.2 0 210.1s1.8 9.2 5.4 12.8c3.6 3.6 7.9 5.4 12.9 5.4h255.8c4.9 0 9.2-1.8 12.8-5.4 3.6-3.6 5.4-7.9 5.4-12.8S290.5 200.9 286.9 197.3z" />
      </g>
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
