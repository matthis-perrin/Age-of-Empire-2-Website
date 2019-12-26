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

export const Petard: Unit = {
  id: 'petard',
  name: 'Bombardier',
  type: [UnitType.SiegeUnit, UnitType.SuicideUnit],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Petard_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Castle, time: 25}],
  cost: {
    food: 65,
    gold: 20,
  },
  health: 50,
  attack: {
    type: AttackType.CaC,
    rateOfFire: 0,
    dommage: {melee: 25, pierce: 0},
    bonuses: new Map([
      [ArmorType.WallAndGate, 900],
      [ArmorType.Building, 500],
      [ArmorType.Castle, 100],
      [ArmorType.SiegeWeapon, 60],
    ]),
    areaOfDamage: 0.5,
  },
  armor: {melee: 0, pierce: 2, types: []},
  speed: 0.8,
  lineOfSight: 4,
  comments: [],
};

export const TrebuchetPacked: Unit = {
  id: 'trebuchet-packed',
  name: 'Trébuchet Plié',
  type: [UnitType.SiegeUnit],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Trebuchet',
  civilizations: allCivilizations(),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Castle, time: 50}],
  cost: {
    wood: 100,
    gold: 100,
  },
  health: 150,
  attack: {
    type: AttackType.None,
  },
  armor: {melee: 2, pierce: 8, types: [ArmorType.SiegeWeapon]},
  speed: 0.8,
  lineOfSight: 19,
  comments: [],
};

export const TrebuchetUnpacked: Unit = {
  id: 'trebuchet-unpacked',
  name: 'Trébuchet Déployé',
  type: [UnitType.SiegeUnit],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Trebuchet',
  civilizations: allCivilizations(),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Castle, time: 50}],
  cost: {
    wood: 100,
    gold: 100,
  },
  health: 150,
  attack: {
    type: AttackType.Range,
    dommage: {
      melee: 0,
      pierce: 200,
    },
    bonuses: new Map([[ArmorType.Building, 250]]),
    rateOfFire: 10,
    frameDelay: 6,
    range: 16,
    minimumRange: 4,
    accuracy: 0.8,
    projectileSpeed: 3.5,
  },
  armor: {melee: 1, pierce: 150, types: [ArmorType.SiegeWeapon, ArmorType.Ram]},
  speed: 0.8,
  lineOfSight: 19,
  comments: [{template: 'La précision de tir est de 15% contre les unités.', variables: []}],
};
