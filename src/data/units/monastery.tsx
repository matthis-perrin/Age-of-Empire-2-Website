/* eslint-disable no-magic-numbers */
import {Age} from '../ages/core';
import {Monastery} from '../buildings';
import {ArmorType, AttackType} from '../damage';
import {InterpolationVariableType} from '../core';
import {onlyCivilizations, allCivilizations, Ids} from '../civilizations/ids';

import {Unit, UnitType, UnitAbility} from './core';
import {BatteringRam} from './siege_workshop';
import {TrebuchetPacked, TrebuchetUnpacked} from './castle';

export const Monk: Unit = {
  id: 'monk',
  name: 'Moine',
  type: [UnitType.Monk, UnitType.Healer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Monk_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.CastleAge,
  abilities: [UnitAbility.HealUnits, UnitAbility.ConvertUnits, UnitAbility.CarryRelics],
  training: [{building: Monastery, time: 51}],
  cost: {
    gold: 100,
  },
  health: 30,
  attack: {
    type: AttackType.Conversion,
    rateOfFire: 62,
    conversionRange: 7,
    healingRange: 4,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Monk]},
  speed: 0.7,
  lineOfSight: 11,
  comments: [
    {
      template: 'Conversion range is 0 against buildings, %1, %2 et %3',
      variables: [
        {type: InterpolationVariableType.Unit, unit: TrebuchetPacked},
        {type: InterpolationVariableType.Unit, unit: TrebuchetUnpacked},
        {type: InterpolationVariableType.Unit, unit: BatteringRam},
      ],
    },
  ],
};

export const Missionary: Unit = {
  id: 'missionary',
  name: 'Missionnaire',
  type: [UnitType.Cavalry, UnitType.Monk, UnitType.Healer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Missionary_(Age_of_Empires_II)',
  civilizations: onlyCivilizations([Ids.SpanishId]),
  age: Age.CastleAge,
  abilities: [UnitAbility.HealUnits, UnitAbility.ConvertUnits],
  training: [{building: Monastery, time: 51}],
  cost: {
    gold: 100,
  },
  health: 30,
  attack: {
    type: AttackType.Conversion,
    rateOfFire: 62,
    conversionRange: 9,
    healingRange: 4,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Cavalry, ArmorType.Monk, ArmorType.UniqueUnit]},
  speed: 1.1,
  lineOfSight: 9,
  comments: [
    {
      template: 'Conversion range is 0 against buildings, %1, %2 et %3',
      variables: [
        {type: InterpolationVariableType.Unit, unit: TrebuchetPacked},
        {type: InterpolationVariableType.Unit, unit: TrebuchetUnpacked},
        {type: InterpolationVariableType.Unit, unit: BatteringRam},
      ],
    },
  ],
};
