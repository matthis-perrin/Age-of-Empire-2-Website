import {Unit} from '../../data/units/core';
import {Civilization} from '../../data/civilizations/registry';
import {CivilizationBonus} from '../../data/core';
import {Technology} from '../../data/technologies/core';

export interface UnitBonuses {
  civilizationBonuses: CivilizationBonus[];
  alliesCivilizationBonuses: {ally: Civilization; value: CivilizationBonus}[];
  technologies: Technology[];
  alliesTechnologies: {ally: Civilization; value: Technology}[];
}

export interface UnitWithBonuses extends UnitBonuses {
  unit: Unit;
  civilization: Civilization;
}

export interface AggregatedUnitWithBonus extends UnitBonuses {
  unit: Unit;
  civilizations: Civilization[];
  allies: Civilization[];
}

export function getUnitWithBonusesHash(unitWithBonuses: UnitWithBonuses): string {
  return [unitWithBonuses.unit.id]
    .concat(unitWithBonuses.civilizationBonuses.map(b => b.id))
    .concat(unitWithBonuses.alliesCivilizationBonuses.map(b => b.value.id))
    .concat(unitWithBonuses.technologies.map(t => t.id))
    .concat(unitWithBonuses.alliesTechnologies.map(t => t.value.id))
    .join('_');
}
