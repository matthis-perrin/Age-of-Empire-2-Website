/* eslint-disable no-magic-numbers */
import {Age} from '../ages/core';
import {Barrack, Castle} from '../buildings';
import {ArmorType, AttackType} from '../damage';
import {
  allCivilizations,
  Ids,
  allCivilizationsWithout,
  onlyCivilizations,
} from '../civilizations/ids';

import {Unit, UnitType} from './core';

export const Militia: Unit = {
  id: 'militia',
  name: 'Milicien',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Militia_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.DarkAge,
  abilities: [],
  training: [{building: Barrack, time: 21}],
  cost: {
    food: 60,
    gold: 20,
  },
  health: 40,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 4, pierce: 0},
    bonuses: new Map(),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 1, types: [ArmorType.Infantry]},
  speed: 0.9,
  lineOfSight: 4,
  comments: [],
};

export const ManAtArms: Unit = {
  id: 'man-at-arms',
  name: "Homme d'armes",
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Man-at-Arms',
  civilizations: allCivilizations(),
  age: Age.FeudalAge,
  abilities: [],
  training: [{building: Barrack, time: 21}],
  cost: {
    food: 60,
    gold: 20,
  },
  health: 45,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 6, pierce: 0},
    bonuses: new Map([
      [ArmorType.EagleWarrior, 2],
      [ArmorType.StandardBuilding, 2],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 1, types: [ArmorType.Infantry]},
  speed: 0.9,
  lineOfSight: 4,
  comments: [],
};

export const LongSwordsman: Unit = {
  id: 'long-swordsman',
  name: 'Fantassin à épée longue',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Long_Swordsman_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Barrack, time: 21}],
  cost: {
    food: 60,
    gold: 20,
  },
  health: 60,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 9, pierce: 0},
    bonuses: new Map([
      [ArmorType.EagleWarrior, 6],
      [ArmorType.StandardBuilding, 3],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 1, types: [ArmorType.Infantry]},
  speed: 0.9,
  lineOfSight: 4,
  comments: [],
};

export const TwoHandedSwordsman: Unit = {
  id: 'two-handed-swordsman',
  name: 'Fantassin à épée à 2 mains',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Two-Handed_Swordsman',
  civilizations: allCivilizationsWithout([Ids.PersiansId]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Barrack, time: 21}],
  cost: {
    food: 60,
    gold: 20,
  },
  health: 60,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 12, pierce: 0},
    bonuses: new Map([
      [ArmorType.EagleWarrior, 8],
      [ArmorType.StandardBuilding, 4],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 1, types: [ArmorType.Infantry]},
  speed: 0.9,
  lineOfSight: 5,
  comments: [],
};

export const Champion: Unit = {
  id: 'champion',
  name: 'Champion',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Champion',
  civilizations: allCivilizationsWithout([
    Ids.EthiopiansId,
    Ids.HunsId,
    Ids.KhmerId,
    Ids.MalayId,
    Ids.MayansId,
    Ids.PersiansId,
    Ids.BulgariansId,
    Ids.TatarsId,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Barrack, time: 21}],
  cost: {
    food: 60,
    gold: 20,
  },
  health: 70,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 13, pierce: 0},
    bonuses: new Map([
      [ArmorType.EagleWarrior, 8],
      [ArmorType.StandardBuilding, 4],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 1, pierce: 1, types: [ArmorType.Infantry]},
  speed: 0.9,
  lineOfSight: 5,
  comments: [],
};

export const Spearman: Unit = {
  id: 'spearman',
  name: 'Lancier',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Spearman_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.FeudalAge,
  abilities: [],
  training: [{building: Barrack, time: 22}],
  cost: {
    wood: 35,
    gold: 25,
  },
  health: 45,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 3, pierce: 0},
    bonuses: new Map([
      [ArmorType.Cavalry, 15],
      [ArmorType.WarElephant, 15],
      [ArmorType.Camel, 12],
      [ArmorType.Ship, 9],
      [ArmorType.FishingShip, 9],
      [ArmorType.Mameluke, 4],
      [ArmorType.EagleWarrior, 1],
      [ArmorType.StandardBuilding, 1],
    ]),
    rateOfFire: 3.05,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Infantry, ArmorType.Spearman]},
  speed: 1,
  lineOfSight: 4,
  comments: [],
};

export const Pikeman: Unit = {
  id: 'pikeman',
  name: 'Piquier',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Pikeman_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([Ids.TurksId]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Barrack, time: 22}],
  cost: {
    wood: 35,
    gold: 25,
  },
  health: 55,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 4, pierce: 0},
    bonuses: new Map([
      [ArmorType.WarElephant, 25],
      [ArmorType.Cavalry, 22],
      [ArmorType.Camel, 18],
      [ArmorType.Ship, 16],
      [ArmorType.FishingShip, 16],
      [ArmorType.Mameluke, 11],
      [ArmorType.EagleWarrior, 1],
      [ArmorType.StandardBuilding, 1],
    ]),
    rateOfFire: 3.05,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Infantry, ArmorType.Spearman]},
  speed: 1,
  lineOfSight: 4,
  comments: [],
};

export const Halberdier: Unit = {
  id: 'halberdier',
  name: 'Hallebardier',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Halberdier_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([
    Ids.AztecsId,
    Ids.BerbersId,
    Ids.ItaliansId,
    Ids.MaliansId,
    Ids.MongolsId,
    Ids.SaracensId,
    Ids.TatarsId,
    Ids.TurksId,
    Ids.VikingsId,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Barrack, time: 22}],
  cost: {
    wood: 35,
    gold: 25,
  },
  health: 60,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 6, pierce: 0},
    bonuses: new Map([
      [ArmorType.Cavalry, 32],
      [ArmorType.WarElephant, 28],
      [ArmorType.Camel, 26],
      [ArmorType.Ship, 17],
      [ArmorType.FishingShip, 17],
      [ArmorType.Mameluke, 11],
      [ArmorType.EagleWarrior, 1],
      [ArmorType.StandardBuilding, 1],
    ]),
    rateOfFire: 3.05,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Infantry, ArmorType.Spearman]},
  speed: 1,
  lineOfSight: 4,
  comments: [],
};

export const EagleScout: Unit = {
  id: 'eagle-scout',
  name: 'Éclaireur aigle',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Eagle_Scout',
  civilizations: onlyCivilizations([Ids.AztecsId, Ids.IncasId, Ids.MayansId]),
  age: Age.FeudalAge,
  abilities: [],
  training: [{building: Barrack, time: 60}],
  cost: {
    food: 20,
    gold: 50,
  },
  health: 50,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 4, pierce: 0},
    bonuses: new Map([
      [ArmorType.Monk, 8],
      [ArmorType.SiegeWeapon, 3],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 2, types: [ArmorType.Infantry, ArmorType.EagleWarrior]},
  speed: 1.1,
  lineOfSight: 5,
  comments: [],
};
export const EagleScoutFeudalAge: Unit = {
  ...EagleScout,
  id: 'eagle-scout-feudal-age',
  name: 'Éclaireur aigle (Age Féodal)',
  lineOfSight: 6,
};

//

export const EagleScoutCastleAge: Unit = {
  ...EagleScoutFeudalAge,
  id: 'eagle-scout-castle-age',
  name: 'Éclaireur aigle (Age Chateaux)',
  age: Age.CastleAge,
  training: [{building: Barrack, time: 35}],
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 7, pierce: 0},
    bonuses: new Map([
      [ArmorType.Monk, 8],
      [ArmorType.SiegeWeapon, 3],
      [ArmorType.Cavalry, 2],
      [ArmorType.Camel, 1],
      [ArmorType.Ship, 1],
    ]),
    rateOfFire: 2.03,
  },
};

//

export const EagleWarrior: Unit = {
  id: 'eagle-warrior',
  name: 'Guerrier aigle',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Eagle_Warrior',
  civilizations: onlyCivilizations([Ids.AztecsId, Ids.IncasId, Ids.MayansId]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Barrack, time: 35}],
  cost: {
    food: 20,
    gold: 50,
  },
  health: 55,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 7, pierce: 0},
    bonuses: new Map([
      [ArmorType.Monk, 8],
      [ArmorType.SiegeWeapon, 3],
      [ArmorType.Cavalry, 2],
      [ArmorType.Camel, 1],
      [ArmorType.Ship, 1],
      [ArmorType.FishingShip, 1],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 3, types: [ArmorType.Infantry, ArmorType.EagleWarrior]},
  speed: 1.15,
  lineOfSight: 6,
  comments: [],
};

export const EilteEagleWarrior: Unit = {
  id: 'elite-eagle-warrior',
  name: "Guerrier aigle d'élite",
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Elite_Eagle_Warrior',
  civilizations: onlyCivilizations([Ids.AztecsId, Ids.IncasId, Ids.MayansId]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Barrack, time: 20}],
  cost: {
    food: 20,
    gold: 50,
  },
  health: 60,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 9, pierce: 0},
    bonuses: new Map([
      [ArmorType.Monk, 10],
      [ArmorType.SiegeWeapon, 5],
      [ArmorType.Cavalry, 4],
      [ArmorType.Camel, 3],
      [ArmorType.Ship, 2],
      [ArmorType.FishingShip, 2],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 4, types: [ArmorType.Infantry, ArmorType.EagleWarrior]},
  speed: 1.3,
  lineOfSight: 6,
  comments: [],
};

export const Condottiero: Unit = {
  id: 'condotierro',
  name: 'Condottière',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Condottiero',
  civilizations: onlyCivilizations([Ids.ItaliansId]),
  sharedUnit: true,
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Barrack, time: 18}],
  cost: {
    food: 50,
    gold: 35,
  },
  health: 80,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 9, pierce: 0},
    bonuses: new Map([
      [ArmorType.GunPowderUnit, 10],
      [ArmorType.StandardBuilding, 2],
    ]),
    rateOfFire: 1.93,
  },
  armor: {
    melee: 1,
    pierce: 0,
    types: [ArmorType.Infantry, ArmorType.UniqueUnit, ArmorType.Condottiero],
    bonuses: new Map([[ArmorType.Infantry, 10]]),
  },
  speed: 1.2,
  lineOfSight: 6,
  comments: [],
};

export const Huskarl: Unit = {
  id: 'huskarl',
  name: 'Huskarl',
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Huskarl_(Age_of_Empires_II)',
  civilizations: onlyCivilizations([Ids.GothsId]),
  age: Age.CastleAge,
  abilities: [],
  training: [
    {building: Castle, time: 16},
    {building: Barrack, time: 13},
  ],
  cost: {
    food: 52,
    gold: 26,
  },
  health: 60,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 10, pierce: 0},
    bonuses: new Map([
      [ArmorType.Archer, 6],
      [ArmorType.EagleWarrior, 2],
      [ArmorType.StandardBuilding, 3],
    ]),
    rateOfFire: 2.03,
  },
  armor: {
    melee: 0,
    pierce: 6,
    types: [ArmorType.Infantry, ArmorType.UniqueUnit],
  },
  speed: 1.05,
  lineOfSight: 3,
  comments: [],
};

export const EliteHuskarl: Unit = {
  id: 'elite-huskarl',
  name: "Huskarl d'élite",
  type: [UnitType.Infantry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Huskarl_(Age_of_Empires_II)',
  civilizations: onlyCivilizations([Ids.GothsId]),
  age: Age.ImperialAge,
  abilities: [],
  training: [
    {building: Castle, time: 16},
    {building: Barrack, time: 13},
  ],
  cost: {
    food: 52,
    gold: 26,
  },
  health: 70,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 12, pierce: 0},
    bonuses: new Map([
      [ArmorType.Archer, 10],
      [ArmorType.EagleWarrior, 3],
      [ArmorType.StandardBuilding, 4],
    ]),
    rateOfFire: 2.03,
  },
  armor: {
    melee: 0,
    pierce: 8,
    types: [ArmorType.Infantry, ArmorType.UniqueUnit],
  },
  speed: 1.05,
  lineOfSight: 5,
  comments: [],
};
