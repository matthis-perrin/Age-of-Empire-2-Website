import React from 'react';

import {generateUnitsWithBonuses} from '../lib/unit_with_bonuses/generation';
import {aggregateByCivilization} from '../lib/unit_with_bonuses/aggregation';
import {Age} from '../data/ages/core';

import {CSSReset} from './css_reset';
import {CivilizationPage} from './civilization_page';
import {Search} from './search-bar/search';
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
