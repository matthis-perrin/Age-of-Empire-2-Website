import React from 'react';

import {CSSReset} from './css_reset';
import {UnitTable} from './units/unit_table';

export function App(): JSX.Element {
  return (
    <React.Fragment>
      <CSSReset />
      <UnitTable />
      {/* <Search /> */}
      {/* <CivilizationPage /> */}
    </React.Fragment>
  );
}

App.displayName = 'App';
