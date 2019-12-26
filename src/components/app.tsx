import React from 'react';

import {CSSReset} from './css_reset';
import {CivilizationPage} from './civilization_page';
import {Search} from './search-bar/search';

export function App(): JSX.Element {
  return (
    <React.Fragment>
      <CSSReset />
      <Search />
      {/* <CivilizationPage /> */}
    </React.Fragment>
  );
}

App.displayName = 'App';
