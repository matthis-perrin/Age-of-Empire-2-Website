import {InterpolationVariableType, AllAge} from '../core';
import {UnitType} from '../units/core';
import {isInfantry} from '../lib/unit_groups';

import {AgeBonus, Age} from './core';

export const bonuses: AgeBonus[] = [
  {
    age: Age.FeudalAge,
    bonus: {
      description: {
        template: "L'%1 à +2 de ligne de vue.",
        variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
      },
      effects: [{teamBonus: false, units: isInfantry, lineOfSightBonus: AllAge(2)}],
    },
  },
];
