/* eslint-disable no-magic-numbers */
import {Age} from '../ages/core';
import {Archery} from '../buildings';
import {AttackType, ArmorType} from '../damage';
import {
  Ids,
  allCivilizations,
  allCivilizationsWithout,
  onlyCivilizations,
} from '../civilizations/ids';

import {Unit, UnitType} from './core';
import { Resource } from '../resource';

export const Archer: Unit = {
  id: 'archer',
  name: 'Archer',
  type: [UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Archer_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.FeudalAge,
  abilities: [],
  training: [{building: Archery, time: 35}],
  cost: {
    [Resource.Wood]: 25,
    [Resource.Gold]: 45,
  },
  health: 30,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 4},
    bonuses: new Map([[ArmorType.Spearman, 3]]),
    rateOfFire: 2.03,
    frameDelay: 5,
    range: 4,
    accuracy: 0.8,
    projectileSpeed: 7,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Archer]},
  speed: 0.96,
  lineOfSight: 6,
  comments: [],
};

export const Crossbowman: Unit = {
  id: 'crossbowman',
  name: 'Arbalétrier',
  type: [UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Crossbowman_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([Ids.BulgariansId, Ids.SpanishId]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Archery, time: 27}],
  cost: {
    [Resource.Wood]: 25,
    [Resource.Gold]: 45,
  },
  health: 35,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 5},
    bonuses: new Map([[ArmorType.Spearman, 3]]),
    rateOfFire: 2.03,
    frameDelay: 5,
    range: 5,
    accuracy: 0.85,
    projectileSpeed: 7,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Archer]},
  speed: 0.96,
  lineOfSight: 7,
  comments: [],
};

export const Arbalester: Unit = {
  id: 'arbalester',
  name: 'Fantassin à arc lourd',
  type: [UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Arbalester',
  civilizations: allCivilizationsWithout([
    Ids.BerbersId,
    Ids.BulgariansId,
    Ids.BurmeseId,
    Ids.CeltsId,
    Ids.CumansId,
    Ids.FranksId,
    Ids.GothsId,
    Ids.HunsId,
    Ids.IndiansId,
    Ids.LithuaniansId,
    Ids.PersiansId,
    Ids.SlavsId,
    Ids.SpanishId,
    Ids.TatarsId,
    Ids.TeutonsId,
    Ids.TurksId,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Archery, time: 27}],
  cost: {
    [Resource.Wood]: 25,
    [Resource.Gold]: 45,
  },
  health: 40,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 6},
    bonuses: new Map([[ArmorType.Spearman, 3]]),
    rateOfFire: 2,
    frameDelay: 20,
    range: 5,
    accuracy: 0.9,
    projectileSpeed: 7,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Archer]},
  speed: 0.96,
  lineOfSight: 7,
  comments: [],
};

export const Skirmisher: Unit = {
  id: 'skirmisher',
  name: 'Tirailleur',
  type: [UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Skirmisher_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.FeudalAge,
  abilities: [],
  training: [{building: Archery, time: 22}],
  cost: {
    [Resource.Food]: 25,
    [Resource.Wood]: 35,
  },
  health: 30,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 2},
    bonuses: new Map([
      [ArmorType.Archer, 3],
      [ArmorType.Spearman, 3],
    ]),
    rateOfFire: 3.05,
    frameDelay: 5,
    range: 4,
    accuracy: 0.9,
    projectileSpeed: 7,
  },
  armor: {melee: 0, pierce: 3, types: [ArmorType.Archer]},
  speed: 0.96,
  lineOfSight: 6,
  comments: [],
};

export const EliteSkirmisher: Unit = {
  id: 'elite-skirmisher',
  name: "Tirailleur d'élite",
  type: [UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Elite_Skirmisher',
  civilizations: allCivilizationsWithout([Ids.TurksId]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Archery, time: 22}],
  cost: {
    [Resource.Food]: 25,
    [Resource.Wood]: 35,
  },
  health: 35,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 3},
    bonuses: new Map([
      [ArmorType.Archer, 4],
      [ArmorType.Spearman, 3],
      [ArmorType.CavalryArcher, 2],
    ]),
    rateOfFire: 3.05,
    frameDelay: 5,
    range: 5,
    minimumRange: 1,
    accuracy: 0.9,
    projectileSpeed: 7,
  },
  armor: {melee: 0, pierce: 4, types: [ArmorType.Archer]},
  speed: 0.96,
  lineOfSight: 7,
  comments: [],
};

export const ImperialSkirmisher: Unit = {
  id: 'imperial-skirmisher',
  name: 'Tirailleur impérial',
  type: [UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Imperial_Skirmisher',
  civilizations: onlyCivilizations([Ids.VietnameseId]),
  sharedUnit: true,
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Archery, time: 22}],
  cost: {
    [Resource.Food]: 25,
    [Resource.Wood]: 35,
  },
  health: 35,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 4},
    bonuses: new Map([
      [ArmorType.Archer, 5],
      [ArmorType.Spearman, 3],
      [ArmorType.CavalryArcher, 3],
    ]),
    rateOfFire: 3.05,
    frameDelay: 5,
    range: 5,
    minimumRange: 1,
    accuracy: 0.95,
    projectileSpeed: 7,
  },
  armor: {melee: 0, pierce: 5, types: [ArmorType.Archer]},
  speed: 0.96,
  lineOfSight: 7,
  comments: [],
};

export const CavalryArcher: Unit = {
  id: 'cavalry-archer',
  name: 'Archer de cavalerie',
  type: [UnitType.Cavalry, UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Cavalry_Archer_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([Ids.AztecsId, Ids.IncasId, Ids.MayansId]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Archery, time: 34}],
  cost: {
    [Resource.Wood]: 40,
    [Resource.Gold]: 60,
  },
  health: 50,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 6},
    bonuses: new Map([[ArmorType.Spearman, 2]]),
    rateOfFire: 2.03,
    frameDelay: 10,
    range: 4,
    accuracy: 0.5,
    projectileSpeed: 7,
  },
  armor: {
    melee: 0,
    pierce: 0,
    types: [ArmorType.Archer, ArmorType.CavalryArcher, ArmorType.Cavalry],
  },
  speed: 1.4,
  lineOfSight: 5,
  comments: [],
};

export const HeavyCavalryArcher: Unit = {
  id: 'heavy-cavalry-archer',
  name: 'Archer de cavalerie lourde',
  type: [UnitType.Cavalry, UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Heavy_Cavalry_Archer',
  civilizations: allCivilizationsWithout([
    Ids.AztecsId,
    Ids.IncasId,
    Ids.ItaliansId,
    Ids.MalayId,
    Ids.MayansId,
    Ids.PortugueseId,
    Ids.TeutonsId,
    Ids.VikingsId,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Archery, time: 27}],
  cost: {
    [Resource.Wood]: 40,
    [Resource.Gold]: 60,
  },
  health: 60,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 7},
    bonuses: new Map([[ArmorType.Spearman, 2]]),
    rateOfFire: 2.03,
    frameDelay: 10,
    range: 4,
    accuracy: 0.5,
    projectileSpeed: 7,
  },
  armor: {
    melee: 1,
    pierce: 0,
    types: [ArmorType.Archer, ArmorType.CavalryArcher, ArmorType.Cavalry],
  },
  speed: 1.4,
  lineOfSight: 6,
  comments: [],
};

export const HandCannoneer: Unit = {
  id: 'hand-cannoneer',
  name: 'Canonnier à main',
  type: [UnitType.GunpowderUnit],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Hand_Cannoneer',
  civilizations: allCivilizationsWithout([
    Ids.AztecsId,
    Ids.BritonsId,
    Ids.BulgariansId,
    Ids.BurmeseId,
    Ids.CeltsId,
    Ids.CumansId,
    Ids.ChineseId,
    Ids.EthiopiansId,
    Ids.HunsId,
    Ids.IncasId,
    Ids.MagyarsId,
    Ids.MalayId,
    Ids.MayansId,
    Ids.MongolsId,
    Ids.SlavsId,
    Ids.VietnameseId,
    Ids.VikingsId,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Archery, time: 34}],
  cost: {
    [Resource.Food]: 45,
    [Resource.Gold]: 50,
  },
  health: 35,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 17},
    bonuses: new Map([
      [ArmorType.Infantry, 10],
      [ArmorType.Ram, 2],
      [ArmorType.Spearman, 1],
    ]),
    rateOfFire: 3.45,
    frameDelay: 15,
    range: 7,
    accuracy: 0.65,
    projectileSpeed: 5.5,
  },
  armor: {
    melee: 1,
    pierce: 0,
    types: [ArmorType.Archer, ArmorType.GunPowderUnit],
  },
  speed: 0.96,
  lineOfSight: 9,
  comments: [],
};

export const Slinger: Unit = {
  id: 'slinger',
  name: 'Frondeur',
  type: [UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Slinger_(Age_of_Empires_II)',
  civilizations: onlyCivilizations([Ids.IncasId]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Archery, time: 25}],
  cost: {
    [Resource.Food]: 30,
    [Resource.Gold]: 40,
  },
  health: 40,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 4},
    bonuses: new Map([
      [ArmorType.Infantry, 10],
      [ArmorType.Condottiero, 10],
      [ArmorType.Ram, 3],
      [ArmorType.Spearman, 1],
    ]),
    rateOfFire: 2.03,
    frameDelay: 5,
    range: 5,
    minimumRange: 1,
    accuracy: 0.9,
    projectileSpeed: 5.5,
  },
  armor: {
    melee: 0,
    pierce: 0,
    types: [ArmorType.Archer, ArmorType.UniqueUnit],
  },
  speed: 0.95,
  lineOfSight: 7,
  comments: [],
};

export const Genitour: Unit = {
  id: 'Genitour',
  name: 'Jinete',
  type: [UnitType.Cavalry, UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Genitour_(mounted)',
  civilizations: onlyCivilizations([Ids.BerbersId]),
  sharedUnit: true,
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Archery, time: 25}],
  cost: {
    [Resource.Food]: 50,
    [Resource.Wood]: 35,
  },
  health: 50,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 3},
    bonuses: new Map([
      [ArmorType.Archer, 4],
      [ArmorType.CavalryArcher, 2],
    ]),
    rateOfFire: 3.05,
    frameDelay: 4,
    range: 4,
    minimumRange: 1,
    accuracy: 0.9,
    projectileSpeed: 7,
  },
  armor: {
    melee: 0,
    pierce: 3,
    types: [ArmorType.Archer, ArmorType.CavalryArcher, ArmorType.Cavalry, ArmorType.UniqueUnit],
  },
  speed: 1.35,
  lineOfSight: 5,
  comments: [],
};

export const EliteGenitour: Unit = {
  id: 'elite-Genitour',
  name: "Jinete d'élite",
  type: [UnitType.Cavalry, UnitType.Archer],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Genitour_(mounted)',
  civilizations: onlyCivilizations([Ids.BerbersId]),
  sharedUnit: true,
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Archery, time: 25}],
  cost: {
    [Resource.Food]: 50,
    [Resource.Wood]: 35,
  },
  health: 55,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 4},
    bonuses: new Map([
      [ArmorType.Archer, 5],
      [ArmorType.CavalryArcher, 2],
    ]),
    rateOfFire: 3.05,
    frameDelay: 4,
    range: 4,
    minimumRange: 1,
    accuracy: 0.9,
    projectileSpeed: 7,
  },
  armor: {
    melee: 0,
    pierce: 4,
    types: [ArmorType.Archer, ArmorType.CavalryArcher, ArmorType.Cavalry, ArmorType.UniqueUnit],
    bonuses: new Map([[ArmorType.CavalryArcher, 1]]),
  },
  speed: 1.35,
  lineOfSight: 6,
  comments: [],
};
