import {Unit} from '../../data/units/core';
import {Civilization} from '../../data/civilizations/registry';
import {CivilizationBonus} from '../../data/core';
import {Technology} from '../../data/technologies/core';

export interface UnitBonuses {
  civilizationBonuses: CivilizationBonus[];
  alliesCivilizationBonuses: CivilizationBonus[];
  technologies: Technology[];
  alliesTechnologies: Technology[];
}

export interface UnitWithBonuses extends UnitBonuses {
  unit: Unit;
  civilization: Civilization;
  allies: Civilization[];
}

export interface AggregatedUnitWithBonus extends UnitBonuses {
  unit: Unit;
  civilizations: Civilization[];
  allies: Civilization[];
}
