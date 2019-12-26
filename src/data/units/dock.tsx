import {
  allCivilizations,
  allCivilizationsWithout,
  Aztecs,
  Vikings,
  Burmese,
  Celts,
  Chinese,
  Ethiopians,
  Huns,
  Indians,
  Malians,
  Portuguese,
  Saracens,
  Turks,
  Vietnamese,
  Koreans,
  Incas,
  Italians,
  Japanese,
  Khmer,
  Magyars,
  Malay,
  Slavs,
  Mayans,
  Cumans,
  onlyCivilizations,
  Berbers,
  Byzantines,
  Lithuanians,
  Persians,
  Spanish,
  Tatars,
} from '../civilizations';
import {Age} from '../age';
import {Market, Dock, BuildingType} from '../buildings';
import {ArmorType, AttackType, DommageType} from '../damage';

import {Unit, UnitAbility, UnitType} from './core';

export const FishingShip: Unit = {
  id: 'fishing-ship',
  name: 'Navire de pêche',
  type: [UnitType.Civilian, UnitType.Ship],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Fishing_Ship_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.DarkAge,
  abilities: [UnitAbility.GatherFood],
  training: [{building: Dock, time: 40}],
  cost: {
    wood: 75,
  },
  health: 60,
  attack: {type: AttackType.None},
  armor: {melee: 0, pierce: 4, types: [ArmorType.FishingShip]},
  speed: 1.26,
  lineOfSight: 5,
  comments: [],
};

export const TransportShip: Unit = {
  id: 'transport-ship',
  name: 'Navire de transport',
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Transport_Ship_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.DarkAge,
  abilities: [],
  training: [{building: Dock, time: 46}],
  cost: {
    wood: 125,
  },
  health: 100,
  attack: {type: AttackType.None},
  armor: {melee: 4, pierce: 8, types: [ArmorType.Ship]},
  speed: 1.45,
  garrison: 5,
  lineOfSight: 5,
  comments: [],
};

export const TradeCog: Unit = {
  id: 'trade-cog',
  name: 'Navire marchant',
  type: [UnitType.Civilian, UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Trade_Cog',
  civilizations: allCivilizations(),
  age: Age.FeudalAge,
  abilities: [UnitAbility.GenerateGoldByTrading],
  training: [{building: Dock, time: 36}],
  cost: {
    wood: 100,
    gold: 50,
  },
  health: 80,
  attack: {type: AttackType.None},
  armor: {melee: 0, pierce: 6, types: [ArmorType.Ship]},
  speed: 1.32,
  lineOfSight: 6,
  comments: [],
};

export const Galley: Unit = {
  id: 'galley',
  name: 'Galère',
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Galley_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.FeudalAge,
  abilities: [],
  training: [{building: Dock, time: 60}],
  cost: {
    wood: 90,
    gold: 30,
  },
  health: 120,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 6},
    bonuses: new Map([
      [ArmorType.Ship, 8],
      [ArmorType.FishingShip, 8],
      [ArmorType.Building, 6],
      [ArmorType.Ram, 3],
    ]),
    rateOfFire: 3.05,
    range: 5,
    accuracy: 1,
    projectileSpeed: 6,
  },
  armor: {melee: 0, pierce: 6, types: [ArmorType.Ship]},
  speed: 1,
  lineOfSight: 7,
  comments: [],
};

export const WarGalley: Unit = {
  id: 'war-galley',
  name: 'Galère de guerre',
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/War_Galley_(Age_of_Empires_II)',
  civilizations: allCivilizations(),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Dock, time: 36}],
  cost: {
    wood: 90,
    gold: 30,
  },
  health: 135,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 7},
    bonuses: new Map([
      [ArmorType.Ship, 9],
      [ArmorType.FishingShip, 9],
      [ArmorType.Building, 7],
      [ArmorType.Ram, 4],
    ]),
    rateOfFire: 3.05,
    range: 6,
    accuracy: 1.43,
    projectileSpeed: 6,
  },
  armor: {melee: 0, pierce: 6, types: [ArmorType.Ship]},
  speed: 1,
  lineOfSight: 8,
  comments: [],
};

export const Galleon: Unit = {
  id: 'galleon',
  name: 'Galion',
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Galleon_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([Aztecs]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Dock, time: 36}],
  cost: {
    wood: 90,
    gold: 30,
  },
  health: 165,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 8},
    bonuses: new Map([
      [ArmorType.Ship, 11],
      [ArmorType.FishingShip, 11],
      [ArmorType.Building, 8],
      [ArmorType.Ram, 4],
    ]),
    rateOfFire: 3.05,
    range: 7,
    accuracy: 1,
    projectileSpeed: 6,
  },
  armor: {melee: 0, pierce: 8, types: [ArmorType.Ship]},
  speed: 1.43,
  lineOfSight: 9,
  comments: [],
};

export const FireGalley: Unit = {
  id: 'fire-galley',
  name: "Galère d'incendie",
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Fire_Galley_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([Vikings]),
  age: Age.FeudalAge,
  abilities: [],
  training: [{building: Dock, time: 60}],
  cost: {
    wood: 75,
    gold: 45,
  },
  health: 100,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 1},
    bonuses: new Map([
      [ArmorType.Ship, 3],
      [ArmorType.TurtleShip, 1],
      [ArmorType.Building, 1],
      [ArmorType.FishingShip, 1],
    ]),
    rateOfFire: 0.25,
    range: 2.49,
    accuracy: 1,
    projectileSpeed: 3,
  },
  armor: {melee: 0, pierce: 4, types: [ArmorType.Ship], bonuses: new Map([[ArmorType.Ship, 6]])},
  speed: 1.3,
  lineOfSight: 5,
  comments: [],
};

export const FireShip: Unit = {
  id: 'fire-ship',
  name: "Navire d'incendie",
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Fire_Ship_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([Vikings]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Dock, time: 36}],
  cost: {
    wood: 75,
    gold: 45,
  },
  health: 120,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 1, pierce: 2},
    bonuses: new Map([
      [ArmorType.Ship, 3],
      [ArmorType.FishingShip, 3],
      [ArmorType.TurtleShip, 2],
      [ArmorType.Building, 2],
    ]),
    rateOfFire: 0.25,
    range: 2.49,
    accuracy: 1,
    projectileSpeed: 3,
  },
  armor: {melee: 0, pierce: 6, types: [ArmorType.Ship], bonuses: new Map([[ArmorType.Ship, 6]])},
  speed: 1.35,
  lineOfSight: 5,
  comments: [],
};

export const FastFireShip: Unit = {
  id: 'fast-fire-ship',
  name: "Navire d'incendie rapide",
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Fire_Ship_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([
    Burmese,
    Celts,
    Chinese,
    Ethiopians,
    Huns,
    Indians,
    Malians,
    Portuguese,
    Saracens,
    Turks,
    Vietnamese,
    Vikings,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Dock, time: 36}],
  cost: {
    wood: 75,
    gold: 45,
  },
  health: 140,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 1, pierce: 3},
    bonuses: new Map([
      [ArmorType.Ship, 4],
      [ArmorType.FishingShip, 4],
      [ArmorType.TurtleShip, 3],
      [ArmorType.Building, 3],
    ]),
    rateOfFire: 0.25,
    range: 2.49,
    accuracy: 1,
    projectileSpeed: 3,
  },
  armor: {melee: 0, pierce: 8, types: [ArmorType.Ship], bonuses: new Map([[ArmorType.Ship, 9]])},
  speed: 1.43,
  lineOfSight: 6,
  comments: [],
};

export const DemolitionRaft: Unit = {
  id: 'demolition-raft',
  name: 'Radeau de démolition',
  type: [UnitType.NavalVessel, UnitType.SuicideUnit],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Demolition_Raft',
  civilizations: allCivilizationsWithout([Koreans]),
  age: Age.FeudalAge,
  abilities: [],
  training: [{building: Dock, time: 45}],
  cost: {
    wood: 70,
    gold: 50,
  },
  health: 45,
  attack: {
    type: AttackType.CaC,
    rateOfFire: 0,
    dommage: {melee: 90, pierce: 0},
    bonuses: new Map([[ArmorType.Building, 180]]),
    areaOfDamage: 2.5,
  },
  armor: {melee: 0, pierce: 2, types: [ArmorType.Ship], bonuses: new Map([[ArmorType.Ship, 1]])},
  speed: 1.5,
  lineOfSight: 6,
  comments: [],
};

export const DemolitionShip: Unit = {
  id: 'demolition-ship',
  name: 'Navire de démolition',
  type: [UnitType.NavalVessel, UnitType.SuicideUnit],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Demolition_Ship',
  civilizations: allCivilizationsWithout([Koreans]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Dock, time: 31}],
  cost: {
    wood: 70,
    gold: 50,
  },
  health: 60,
  attack: {
    type: AttackType.CaC,
    rateOfFire: 0,
    dommage: {melee: 110, pierce: 0},
    bonuses: new Map([[ArmorType.Building, 220]]),
    areaOfDamage: 3,
  },
  armor: {melee: 0, pierce: 3, types: [ArmorType.Ship], bonuses: new Map([[ArmorType.Ship, 3]])},
  speed: 1.6,
  lineOfSight: 6,
  comments: [],
};

export const HeavyDemolitionShip: Unit = {
  id: 'heavy-demolition-ship',
  name: 'Navire de démolition lourd',
  type: [UnitType.NavalVessel, UnitType.SuicideUnit],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Heavy_Demolition_Ship',
  civilizations: allCivilizationsWithout([
    Aztecs,
    Burmese,
    Ethiopians,
    Incas,
    Italians,
    Japanese,
    Khmer,
    Koreans,
    Magyars,
    Malay,
    Slavs,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Dock, time: 31}],
  cost: {
    wood: 70,
    gold: 50,
  },
  health: 70,
  attack: {
    type: AttackType.CaC,
    rateOfFire: 0,
    dommage: {melee: 140, pierce: 0},
    bonuses: new Map([[ArmorType.Building, 280]]),
    areaOfDamage: 3.5,
  },
  armor: {melee: 0, pierce: 5, types: [ArmorType.Ship], bonuses: new Map([[ArmorType.Ship, 5]])},
  speed: 1.6,
  lineOfSight: 6,
  comments: [],
};

export const CannonGalleon: Unit = {
  id: 'cannon-galleon',
  name: 'Galion à canon',
  type: [UnitType.NavalVessel, UnitType.GunpowderUnit],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Cannon_Galleon',
  civilizations: allCivilizationsWithout([Aztecs, Huns, Incas, Mayans, Cumans]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Dock, time: 46}],
  cost: {
    wood: 200,
    gold: 150,
  },
  health: 120,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 35, pierce: 0},
    bonuses: new Map([
      [ArmorType.Building, 200],
      [ArmorType.SiegeWeapon, 40],
      [ArmorType.Infantry, 15],
      [ArmorType.Archer, 15],
      [ArmorType.Cavalry, 15],
      [ArmorType.Mameluke, 4],
    ]),
    rateOfFire: 10,
    range: 13,
    minimumRange: 3,
    accuracy: 0.5,
    projectileSpeed: 1.95,
  },
  armor: {melee: 0, pierce: 6, types: [ArmorType.Ship, ArmorType.GunPowderUnit]},
  speed: 1.1,
  lineOfSight: 15,
  comments: [],
};

export const EliteCannonGalleon: Unit = {
  id: 'elite-cannon-galleon',
  name: "Galion à canon d'élite",
  type: [UnitType.NavalVessel, UnitType.GunpowderUnit],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Elite_Cannon_Galleon',
  civilizations: onlyCivilizations([
    Berbers,
    Burmese,
    Byzantines,
    Indians,
    Italians,
    Japanese,
    Khmer,
    Lithuanians,
    Malay,
    Persians,
    Portuguese,
    Saracens,
    Spanish,
    Tatars,
    Turks,
    Vietnamese,
    Vikings,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Dock, time: 46}],
  cost: {
    wood: 200,
    gold: 150,
  },
  health: 150,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 45, pierce: 0},
    bonuses: new Map([
      [ArmorType.Building, 275],
      [ArmorType.SiegeWeapon, 40],
      [ArmorType.Infantry, 15],
      [ArmorType.Archer, 15],
      [ArmorType.Cavalry, 15],
      [ArmorType.Mameluke, 4],
    ]),
    rateOfFire: 10,
    range: 13,
    minimumRange: 3,
    accuracy: 0.5,
    projectileSpeed: 1.95,
  },
  armor: {melee: 0, pierce: 8, types: [ArmorType.Ship, ArmorType.GunPowderUnit]},
  speed: 1.1,
  lineOfSight: 17,
  comments: [],
};

export const Longboat: Unit = {
  id: 'longboat',
  name: 'Drakkar',
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Longboat_(Age_of_Empires_II)',
  civilizations: onlyCivilizations([Vikings]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Dock, time: 25}],
  cost: {
    wood: 84,
    gold: 42,
  },
  health: 130,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 7},
    bonuses: new Map([
      [ArmorType.Ship, 9],
      [ArmorType.FishingShip, 9],
      [ArmorType.Building, 7],
      [ArmorType.Ram, 4],
    ]),
    rateOfFire: 3.34,
    range: 6,
    accuracy: 1,
    projectileSpeed: 6,
  },
  armor: {melee: 0, pierce: 6, types: [ArmorType.Ship, ArmorType.UniqueUnit]},
  speed: 1.54,
  lineOfSight: 8,
  comments: [],
};

export const EliteLongboat: Unit = {
  id: 'elite-longboat',
  name: "Drakkar d'élite",
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Longboat_(Age_of_Empires_II)',
  civilizations: onlyCivilizations([Vikings]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Dock, time: 25}],
  cost: {
    wood: 80,
    gold: 40,
  },
  health: 160,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 8},
    bonuses: new Map([
      [ArmorType.Ship, 11],
      [ArmorType.FishingShip, 11],
      [ArmorType.Building, 8],
      [ArmorType.Ram, 4],
    ]),
    rateOfFire: 3.34,
    range: 7,
    accuracy: 1,
    projectileSpeed: 6,
  },
  armor: {melee: 0, pierce: 8, types: [ArmorType.Ship, ArmorType.UniqueUnit]},
  speed: 1.54,
  lineOfSight: 9,
  comments: [],
};

export const TurtleShip: Unit = {
  id: 'turtle-ship',
  name: 'Navire tortue',
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Turtle_Ship',
  civilizations: onlyCivilizations([Koreans]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Dock, time: 50}],
  cost: {
    wood: 180,
    gold: 180,
  },
  health: 200,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 50, pierce: 0},
    bonuses: new Map(),
    areaOfDamage: 0.5,
    rateOfFire: 6.04,
    range: 6,
    accuracy: 1,
    projectileSpeed: 7.8,
  },
  armor: {
    melee: 6,
    pierce: 5,
    types: [ArmorType.Ship, ArmorType.TurtleShip, ArmorType.GunPowderUnit, ArmorType.UniqueUnit],
    bonuses: new Map([[ArmorType.Ship, 8]]),
  },
  speed: 0.9,
  lineOfSight: 8,
  comments: [],
};

export const EliteTurtleShip: Unit = {
  id: 'elite-turtle-ship',
  name: "Navire tortue d'élite",
  type: [UnitType.NavalVessel, UnitType.GunpowderUnit],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Turtle_Ship',
  civilizations: onlyCivilizations([Koreans]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Dock, time: 50}],
  cost: {
    wood: 180,
    gold: 180,
  },
  health: 300,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 50, pierce: 0},
    bonuses: new Map(),
    areaOfDamage: 0.5,
    rateOfFire: 6.04,
    range: 6,
    accuracy: 1,
    projectileSpeed: 7.8,
  },
  armor: {
    melee: 8,
    pierce: 6,
    types: [ArmorType.Ship, ArmorType.TurtleShip, ArmorType.GunPowderUnit, ArmorType.UniqueUnit],
    bonuses: new Map([
      [ArmorType.Ship, 11],
      [ArmorType.TurtleShip, 1],
    ]),
  },
  speed: 0.9,
  lineOfSight: 8,
  comments: [],
};

export const Caravel: Unit = {
  id: 'caravel',
  name: 'Caravelle',
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Caravel_(Age_of_Empires_II)',
  civilizations: onlyCivilizations([Portuguese]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Dock, time: 36}],
  cost: {
    wood: 90,
    gold: 40,
  },
  health: 130,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 6},
    bonuses: new Map([
      [ArmorType.Building, 8],
      [ArmorType.Ship, 6],
      [ArmorType.FishingShip, 6],
      [ArmorType.Ram, 4],
    ]),
    rateOfFire: 3.05,
    range: 6,
    accuracy: 1,
    projectileSpeed: 6,
  },
  armor: {
    melee: 0,
    pierce: 8,
    types: [ArmorType.Ship, ArmorType.UniqueUnit],
    bonuses: new Map([[ArmorType.Ship, 8]]),
  },
  speed: 1.43,
  lineOfSight: 9,
  comments: [],
};

export const EliteCaravel: Unit = {
  id: 'elite-caravel',
  name: "Caravelle d'élite",
  type: [UnitType.NavalVessel],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Caravel_(Age_of_Empires_II)',
  civilizations: onlyCivilizations([Portuguese]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Dock, time: 36}],
  cost: {
    wood: 90,
    gold: 40,
  },
  health: 150,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 8},
    bonuses: new Map([
      [ArmorType.Building, 9],
      [ArmorType.Ship, 7],
      [ArmorType.FishingShip, 7],
      [ArmorType.Ram, 4],
    ]),
    rateOfFire: 3.05,
    range: 7,
    accuracy: 1,
    projectileSpeed: 6,
  },
  armor: {
    melee: 0,
    pierce: 8,
    types: [ArmorType.Ship, ArmorType.UniqueUnit],
  },
  speed: 1.43,
  lineOfSight: 9,
  comments: [],
};
