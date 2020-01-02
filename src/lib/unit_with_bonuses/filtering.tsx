import {Age} from '../../data/ages/core';
import {Bonus} from '../../data/core';
import {Unit} from '../../data/units/core';

import {UnitWithBonuses, getUnitWithBonusesHash} from './core';

export function filterUnitsWithBonusesForAge(
  unitsWithBonuses: UnitWithBonuses[],
  maxAge: Age
): UnitWithBonuses[] {
  const byHashAndCivilization = new Map<string, UnitWithBonuses>();
  unitsWithBonuses.forEach(u => {
    const unit = u.unit;
    if (unit.age > maxAge) {
      return;
    }
    const civilizationBonuses = u.civilizationBonuses.filter(cb =>
      isBonusRelevant(cb.bonus, unit, maxAge, false)
    );
    const alliesCivilizationBonuses = u.alliesCivilizationBonuses.filter(cb =>
      isBonusRelevant(cb.value.bonus, unit, maxAge, true)
    );
    const technologies = u.technologies.filter(
      t => t.age <= maxAge && isBonusRelevant(t.bonus, unit, maxAge, false)
    );
    const alliesTechnologies = u.alliesTechnologies.filter(
      t => t.value.age <= maxAge && isBonusRelevant(t.value.bonus, unit, maxAge, true)
    );
    const filtered: UnitWithBonuses = {
      unit: u.unit,
      civilization: u.civilization,
      civilizationBonuses,
      alliesCivilizationBonuses,
      technologies,
      alliesTechnologies,
    };
    const hash = getUnitWithBonusesHash(filtered);
    const hashAndCivilization = `${hash}-${u.civilization.id}`;
    byHashAndCivilization.set(hashAndCivilization, filtered);
  });
  return Array.from(byHashAndCivilization.values());
}

function isBonusRelevant(bonus: Bonus, unit: Unit, maxAge: Age, shouldBeTeam: boolean): boolean {
  for (const e of bonus.effects) {
    if (
      (!shouldBeTeam || e.teamBonus) &&
      e.units(unit) &&
      ((e.rangeBonus !== undefined && e.rangeBonus[maxAge] !== undefined) ||
        (e.trainingSpeedBonus !== undefined && e.trainingSpeedBonus[maxAge] !== undefined) ||
        (e.costBonus !== undefined && e.costBonus[maxAge] !== undefined) ||
        (e.goldCostBonus !== undefined && e.goldCostBonus[maxAge] !== undefined) ||
        (e.woodCostBonus !== undefined && e.woodCostBonus[maxAge] !== undefined) ||
        (e.foodCostBonus !== undefined && e.foodCostBonus[maxAge] !== undefined) ||
        (e.woodCostFixedBonus !== undefined && e.woodCostFixedBonus[maxAge] !== undefined) ||
        (e.foodCostFixedBonus !== undefined && e.foodCostFixedBonus[maxAge] !== undefined) ||
        (e.rateOfFireBonus !== undefined && e.rateOfFireBonus[maxAge] !== undefined) ||
        (e.speedBonus !== undefined && e.speedBonus[maxAge] !== undefined) ||
        (e.healthBonus !== undefined && e.healthBonus[maxAge] !== undefined) ||
        (e.healthFixedBonus !== undefined && e.healthFixedBonus[maxAge] !== undefined) ||
        (e.lineOfSightBonus !== undefined && e.lineOfSightBonus[maxAge] !== undefined) ||
        (e.lineOfSightPercentBonus !== undefined &&
          e.lineOfSightPercentBonus[maxAge] !== undefined) ||
        (e.attackBonus !== undefined && e.attackBonus[maxAge] !== undefined) ||
        (e.attackBonusBonus !== undefined && e.attackBonusBonus[maxAge] !== undefined) ||
        (e.armorBonus !== undefined && e.armorBonus[maxAge] !== undefined) ||
        (e.garrisonBonus !== undefined && e.garrisonBonus[maxAge] !== undefined) ||
        (e.healingRangeBonus !== undefined && e.healingRangeBonus[maxAge] !== undefined) ||
        (e.minimumRangeBonus !== undefined && e.minimumRangeBonus[maxAge] !== undefined) ||
        (e.removeMinimumRange !== undefined && e.removeMinimumRange[maxAge] !== undefined) ||
        (e.conversionRangeBonus !== undefined && e.conversionRangeBonus[maxAge] !== undefined) ||
        (e.areaOfDamageBonus !== undefined && e.areaOfDamageBonus[maxAge] !== undefined) ||
        (e.projectileSpeedBonus !== undefined && e.projectileSpeedBonus[maxAge] !== undefined) ||
        (e.fullAccuracyBonus !== undefined && e.fullAccuracyBonus[maxAge] !== undefined) ||
        (e.ageAvailability !== undefined && e.ageAvailability <= maxAge))
    ) {
      return true;
    }
  }
  return false;
}
