import {BonusEffect, Ageable} from '../../data/core';
import {removeUndefined} from '../utils/type_utils';
import {Unit} from '../../data/units/core';
import {Age} from '../../data/ages/core';

export function extractBonusEffects<T>(
  unit: Unit,
  age: Age,
  bonusEffects: BonusEffect[],
  getValue: (bonusEffect: BonusEffect) => Ageable<T> | undefined,
  shouldBeTeam: boolean
): T[] {
  return removeUndefined(
    bonusEffects.map(bonusEffect => {
      if ((shouldBeTeam && !bonusEffect.teamBonus) || !bonusEffect.units(unit)) {
        return undefined;
      }
      const ageableValue = getValue(bonusEffect);
      return ageableValue && ageableValue[age];
    })
  );
}
