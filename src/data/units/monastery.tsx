/* eslint-disable no-magic-numbers */
import {
  allCivilizations,
  allCivilizationsWithout,
  Ethiopians,
  Huns,
  Malay,
  Mayans,
  Bulgarians,
  Tatars,
  Turks,
  Aztecs,
  Berbers,
  Italians,
  Malians,
  Mongols,
  Saracens,
  Vikings,
  onlyCivilizations,
  Incas,
  Goths,
  Britons,
  Burmese,
  Franks,
  Indians,
  Japanese,
  Koreans,
  Magyars,
  Portuguese,
  Teutons,
  Vietnamese,
  Byzantines,
  Chinese,
  Celts,
  Cumans,
  Slavs,
  Lithuanians,
  Spanish,
} from '../civilizations';
import {Age} from '../age';
import {Barrack, Castle, SiegeWorkshop, Monastery} from '../buildings';
import {ArmorType, AttackType, DommageType} from '../damage';
import {InterpolationVariableType} from '../core';

import {Unit, UnitType, UnitAbility} from './core';
import {BatteringRam} from './siege_workshop';

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
    conversion: 9,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Monk]},
  speed: 0.7,
  lineOfSight: 11,
  comments: [
    {
      template: 'Conversion range is 0 against buildings, %1 et %2',
      variables: [
        // {type: InterpolationVariableType.Unit, unit: Trebuchet},
        {type: InterpolationVariableType.Unit, unit: BatteringRam},
      ],
    },
  ],
};
