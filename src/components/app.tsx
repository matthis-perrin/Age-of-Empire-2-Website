import React from 'react';

import {CSSReset} from './css_reset';
import {CivilizationPage} from './civilization_page';

export function App(): JSX.Element {
  return (
    <React.Fragment>
      <CSSReset />
      <CivilizationPage />
    </React.Fragment>
  );
}

App.displayName = 'App';
