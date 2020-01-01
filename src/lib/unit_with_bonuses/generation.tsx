import Combinatorics from 'js-combinatorics';

import {Unit} from '../../data/units/core';
import {Civilization, civilizationRegistry} from '../../data/civilizations/registry';
import {Bonus} from '../../data/core';
import {Technology} from '../../data/technologies/core';
import {technologyRegistry} from '../../data/technologies/registry';
import {civilizationToTechnologies} from '../../data/technologies/availability';
import {unitRegistry} from '../../data/units/registry';
import {CivilizationRangeType} from '../../data/civilizations/ids';

import {UnitWithBonuses} from './core';

interface UnitWithBonusesGenerationOptions {
  includeTechnologies: boolean;
  alliesCount: number;
}

export function generateUnitsWithBonuses(
  options: UnitWithBonusesGenerationOptions
): UnitWithBonuses[] {
  let unitWithBonuses: UnitWithBonuses[] = [];
  for (const unit of unitRegistry) {
    unitWithBonuses = unitWithBonuses.concat(generateUnitWithBonuses(unit, options));
  }
  return unitWithBonuses;
}

function generateUnitWithBonuses(
  unit: Unit,
  options: UnitWithBonusesGenerationOptions
): UnitWithBonuses[] {
  const civilizations = getCivilizationsWithUnit(unit);
  const civilizationsWithTeamCivilizationBonus = getCivilizationsWithTeamCivilizationBonusForUnit(
    unit
  );
  const civilizationsWithTeamTechnologieBonus = getCivilizationsWithTeamTechnologyBonusForUnit(
    unit
  );
  const civilizationsWithTeamBonus = civilizationsWithTeamCivilizationBonus.concat(
    civilizationsWithTeamTechnologieBonus.filter(
      c => civilizationsWithTeamCivilizationBonus.indexOf(c) === -1
    )
  );

  const unitWithBonuses: UnitWithBonuses[] = [];
  for (const c of civilizations) {
    const possibleAllies = civilizationsWithTeamBonus.filter(ally => ally !== c);
    unitWithBonuses.push(computeBonuses(unit, c, []));
    if (possibleAllies.length > 0 && options.alliesCount > 0) {
      const alliesCombinaisons = Combinatorics.combination(
        possibleAllies,
        Math.min(options.alliesCount, possibleAllies.length)
      );
      alliesCombinaisons.forEach(alliesCombi =>
        unitWithBonuses.push(computeBonuses(unit, c, alliesCombi))
      );
    }
  }
  return unitWithBonuses;
}

function computeBonuses(
  unit: Unit,
  civilization: Civilization,
  allies: Civilization[]
): UnitWithBonuses {
  return {
    unit,
    civilization,
    allies,

    civilizationBonuses: civilization.bonuses.filter(cb =>
      bonusAppliesToUnit(cb.bonus, unit, false)
    ),
    alliesCivilizationBonuses: allies
      .map(ally => ally.bonuses.filter(cb => bonusAppliesToUnit(cb.bonus, unit, true)))
      .reduce((acc, curr) => acc.concat(curr), []),
    technologies: getCivilizationTechnologies(civilization).filter(t =>
      bonusAppliesToUnit(t.bonus, unit, false)
    ),
    alliesTechnologies: allies
      .map(ally =>
        getCivilizationTechnologies(ally).filter(cb => bonusAppliesToUnit(cb.bonus, unit, true))
      )
      .reduce((acc, curr) => acc.concat(curr), []),
  };
}

function getCivilizationsWithUnit(unit: Unit): Civilization[] {
  if (unit.civilizations.type === CivilizationRangeType.All) {
    return civilizationRegistry;
  }
  if (unit.civilizations.type === CivilizationRangeType.Only) {
    const only = unit.civilizations.only;
    return civilizationRegistry.filter(c => only.indexOf(c.id) !== -1);
  }
  if (unit.civilizations.type === CivilizationRangeType.AllWithout) {
    const without = unit.civilizations.without;
    return civilizationRegistry.filter(c => without.indexOf(c.id) === -1);
  }
  return [];
}

function getCivilizationsWithTeamCivilizationBonusForUnit(unit: Unit): Civilization[] {
  return civilizationRegistry.filter(civilization => {
    for (const cb of civilization.bonuses) {
      if (bonusAppliesToUnit(cb.bonus, unit, true)) {
        return true;
      }
    }
    return false;
  });
}

function getCivilizationsWithTeamTechnologyBonusForUnit(unit: Unit): Civilization[] {
  return civilizationRegistry.filter(civilization => {
    for (const techno of civilization.uniqueTechnologies) {
      if (bonusAppliesToUnit(techno.bonus, unit, true)) {
        return true;
      }
    }
    return false;
  });
}

function getCivilizationTechnologies(civilization: Civilization): Technology[] {
  const techno = civilizationToTechnologies.get(civilization);
  if (techno === undefined) {
    throw new Error(`No tech tree for civilization ${civilization.id}`);
  }
  return technologyRegistry
    .filter(t => {
      const isAvailable = techno.get(t);
      if (isAvailable === undefined) {
        throw new Error(
          `Can not determine if the technology ${t.id} is available for ${civilization.id}`
        );
      }
      return isAvailable;
    })
    .concat(civilization.uniqueTechnologies);
}

function bonusAppliesToUnit(bonus: Bonus, unit: Unit, shouldBeTeamBonus: boolean): boolean {
  for (const effect of bonus.effects) {
    if ((!shouldBeTeamBonus || effect.teamBonus) && effect.units(unit)) {
      return true;
    }
  }
  return false;
}
