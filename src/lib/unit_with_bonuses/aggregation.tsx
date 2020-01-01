import {UnitWithBonuses, AggregatedUnitWithBonus} from './core';

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
    civilizations: unitArr.map(unit => unit.civilization),
    allies: unitArr[0].allies,
    civilizationBonuses: unitArr[0].civilizationBonuses,
    alliesCivilizationBonuses: unitArr[0].alliesCivilizationBonuses,
    technologies: unitArr[0].technologies,
    alliesTechnologies: unitArr[0].alliesTechnologies,
  }));
}

function getUnitWithBonusesHash(unitWithBonuses: UnitWithBonuses): string {
  return unitWithBonuses.civilizationBonuses
    .map(b => b.id)
    .concat(unitWithBonuses.alliesCivilizationBonuses.map(b => b.id))
    .concat(unitWithBonuses.technologies.map(t => t.id))
    .concat(unitWithBonuses.alliesTechnologies.map(t => t.id))
    .join('');
}
