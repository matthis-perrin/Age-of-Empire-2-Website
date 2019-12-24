/* eslint-disable no-magic-numbers */
import {
  allCivilizations,
  allCivilizationsWithout,
  Persians,
  Ethiopians,
  Huns,
  Khmer,
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
} from '../civilizations';
import {Age} from '../age';
import {Barrack, Castle} from '../buildings';
import {ArmorType, AttackType} from '../damage';

import {Unit} from './core';

export const Militia: Unit = {
  id: 'militia',
  name: 'Milicien',
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
    type: AttackType.Melee,
    meleeDommage: 4,
    bonuses: new Map(),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 1, types: [ArmorType.Infantry]},
  speed: 0.9,
  lineOfSight: 4,
};

export const ManAtArms: Unit = {
  id: 'man-at-arms',
  name: "Homme d'armes",
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
    type: AttackType.Melee,
    meleeDommage: 6,
    bonuses: new Map([
      [ArmorType.EagleWarrior, 2],
      [ArmorType.StandardBuilding, 2],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 1, types: [ArmorType.Infantry]},
  speed: 0.9,
  lineOfSight: 4,
};

export const LongSwordsman: Unit = {
  id: 'long-swordsman',
  name: 'Fantassin à épée longue',
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
    type: AttackType.Melee,
    meleeDommage: 9,
    bonuses: new Map([
      [ArmorType.EagleWarrior, 6],
      [ArmorType.StandardBuilding, 3],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 1, types: [ArmorType.Infantry]},
  speed: 0.9,
  lineOfSight: 4,
};

export const TwoHandedSwordsman: Unit = {
  id: 'two-handed-swordsman',
  name: 'Fantassin à épée à 2 mains',
  civilizations: allCivilizationsWithout([Persians]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Barrack, time: 21}],
  cost: {
    food: 60,
    gold: 20,
  },
  health: 60,
  attack: {
    type: AttackType.Melee,
    meleeDommage: 12,
    bonuses: new Map([
      [ArmorType.EagleWarrior, 8],
      [ArmorType.StandardBuilding, 4],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 1, types: [ArmorType.Infantry]},
  speed: 0.9,
  lineOfSight: 5,
};

export const Champion: Unit = {
  id: 'champion',
  name: 'Champion',
  civilizations: allCivilizationsWithout([
    Ethiopians,
    Huns,
    Khmer,
    Malay,
    Mayans,
    Persians,
    Bulgarians,
    Tatars,
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
    type: AttackType.Melee,
    meleeDommage: 13,
    bonuses: new Map([
      [ArmorType.EagleWarrior, 8],
      [ArmorType.StandardBuilding, 4],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 1, pierce: 1, types: [ArmorType.Infantry]},
  speed: 0.9,
  lineOfSight: 5,
};

export const Spearman: Unit = {
  id: 'spearman',
  name: 'Lancier',
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
    type: AttackType.Melee,
    meleeDommage: 3,
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
};

export const Pikeman: Unit = {
  id: 'pikeman',
  name: 'Piquier',
  civilizations: allCivilizationsWithout([Turks]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Barrack, time: 22}],
  cost: {
    wood: 35,
    gold: 25,
  },
  health: 55,
  attack: {
    type: AttackType.Melee,
    meleeDommage: 4,
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
};

export const Halberdier: Unit = {
  id: 'halberdier',
  name: 'Hallebardier',
  civilizations: allCivilizationsWithout([
    Aztecs,
    Berbers,
    Italians,
    Malians,
    Mongols,
    Saracens,
    Tatars,
    Turks,
    Vikings,
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
    type: AttackType.Melee,
    meleeDommage: 6,
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
};

export const EagleScout: Unit = {
  id: 'eagle-scout',
  name: 'Éclaireur aigle',
  civilizations: onlyCivilizations([Aztecs, Incas, Mayans]),
  age: Age.FeudalAge,
  abilities: [],
  training: [{building: Barrack, time: 35}],
  cost: {
    food: 20,
    gold: 50,
  },
  health: 50,
  attack: {
    type: AttackType.Melee,
    meleeDommage: 4,
    bonuses: new Map([
      [ArmorType.Monk, 8],
      [ArmorType.SiegeWeapon, 3],
      [ArmorType.Cavalry, 2],
      [ArmorType.Camel, 1],
      [ArmorType.Ship, 1],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 2, types: [ArmorType.Infantry, ArmorType.EagleWarrior]},
  speed: 1.1,
  lineOfSight: 5,
};

export const EagleWarrior: Unit = {
  id: 'eagle-warrior',
  name: 'Guerrier aigle',
  civilizations: onlyCivilizations([Aztecs, Incas, Mayans]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Barrack, time: 35}],
  cost: {
    food: 20,
    gold: 50,
  },
  health: 55,
  attack: {
    type: AttackType.Melee,
    meleeDommage: 7,
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
};

export const EilteEagleWarrior: Unit = {
  id: 'elite-eagle-warrior',
  name: "Guerrier aigle d'élite",
  civilizations: onlyCivilizations([Aztecs, Incas, Mayans]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Barrack, time: 20}],
  cost: {
    food: 20,
    gold: 50,
  },
  health: 60,
  attack: {
    type: AttackType.Melee,
    meleeDommage: 9,
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
};

export const Condottiero: Unit = {
  id: 'condotierro',
  name: 'Condottière',
  civilizations: onlyCivilizations([Italians]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Barrack, time: 18}],
  cost: {
    food: 50,
    gold: 35,
  },
  health: 80,
  attack: {
    type: AttackType.Melee,
    meleeDommage: 9,
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
};

export const Huskarl: Unit = {
  id: 'huskarl',
  name: 'Huskarl',
  civilizations: onlyCivilizations([Goths]),
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
    type: AttackType.Melee,
    meleeDommage: 10,
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
};

export const EliteHuskarl: Unit = {
  id: 'elite-huskarl',
  name: "Huskarl d'élite",
  civilizations: onlyCivilizations([Goths]),
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
    type: AttackType.Melee,
    meleeDommage: 12,
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
};
