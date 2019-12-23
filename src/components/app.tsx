import React from 'react';

import {CSSReset} from './css_reset';

export function App(): JSX.Element {
  return (
    <React.Fragment>
      <CSSReset />
      <div>Hello</div>
    </React.Fragment>
  );
}

App.displayName = 'App';
