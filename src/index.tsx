import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app';
import {generateUnitsWithBonuses} from './lib/unit_with_bonuses/generation';
import {Age} from './data/ages/core';
import {aggregateByCivilization} from './lib/unit_with_bonuses/aggregation';

ReactDOM.render(<App />, document.getElementById('root'));

const t1 = Date.now();
const unitWithBonuses = generateUnitsWithBonuses({
  alliesCount: 2,
  includeTechnologies: true,
});
const t2 = Date.now();
console.log(t2 - t1);
(window as any).unitWithBonuses = unitWithBonuses;

const aggregated = aggregateByCivilization(unitWithBonuses);
const t3 = Date.now();
console.log(t3 - t2);
(window as any).aggregated = aggregated;
