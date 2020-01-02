import {uniq} from 'lodash-es';

import {UnitWithBonuses, AggregatedUnitWithBonus, getUnitWithBonusesHash} from './core';

export function aggregateByCivilization(
  unitWithBonuses: UnitWithBonuses[]
): AggregatedUnitWithBonus[] {
  const byHash = new Map<string, UnitWithBonuses[]>();
  unitWithBonuses.forEach(u => {
    const hash = getUnitWithBonusesHash(u);
    const similar = byHash.get(hash);
    if (similar === undefined) {
      byHash.set(hash, [u]);
    } else {
      similar.push(u);
    }
  });

  return Array.from(byHash.values()).map(unitArr => ({
    unit: unitArr[0].unit,
    allies: uniq(
      unitArr[0].alliesCivilizationBonuses
        .map(b => b.ally)
        .concat(unitArr[0].alliesTechnologies.map(b => b.ally))
    ),
    civilizations: unitArr.map(unit => unit.civilization),
    civilizationBonuses: unitArr[0].civilizationBonuses,
    alliesCivilizationBonuses: unitArr[0].alliesCivilizationBonuses,
    technologies: unitArr[0].technologies,
    alliesTechnologies: unitArr[0].alliesTechnologies,
  }));
}
