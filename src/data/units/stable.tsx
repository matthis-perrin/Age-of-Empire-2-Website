/* eslint-disable no-magic-numbers */
import {Age} from '../ages/core';
import {Castle, Stable} from '../buildings';
import {ArmorType, AttackType} from '../damage';
import {allCivilizationsWithout, Ids, onlyCivilizations} from '../civilizations/ids';
import {Resource} from '../resource';

import {Unit, UnitType} from './core';

export const ScoutCavalry: Unit = {
  id: 'scout-cavalry-dark-age',
  name: "Cavalerie d'éclairage",
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Scout_Cavalry_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([Ids.AztecsId, Ids.IncasId, Ids.MayansId]),
  age: Age.DarkAge,
  abilities: [],
  training: [{building: Stable, time: 30}],
  cost: {[Resource.Food]: 80},
  health: 45,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 3, pierce: 0},
    bonuses: new Map([[ArmorType.Monk, 6]]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 2, types: [ArmorType.Cavalry]},
  speed: 1.2,
  lineOfSight: 4,
  comments: [],
};

export const ScoutCavalryFeudalAge: Unit = {
  ...ScoutCavalry,
  id: 'scout-cavalry-feudal-age',
  name: "Cavalerie d'éclairage (Age Féodal)",
  age: Age.FeudalAge,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 5, pierce: 0},
    bonuses: new Map([[ArmorType.Monk, 6]]),
    rateOfFire: 2.03,
  },
  speed: 1.55,
  lineOfSight: 6,
};

export const ScoutCavalryCastleAge: Unit = {
  ...ScoutCavalryFeudalAge,
  id: 'scout-cavalry-castle-age',
  name: "Cavalerie d'éclairage (Age Chateaux)",
  age: Age.CastleAge,
  lineOfSight: 8,
};

export const ScoutCavalryImperialAge: Unit = {
  ...ScoutCavalryCastleAge,
  id: 'scout-cavalry-imperial-age',
  name: "Cavalerie d'éclairage (Age Impérial)",
  age: Age.ImperialAge,
  lineOfSight: 10,
};

export const LightCavalry: Unit = {
  id: 'light-cavalry',
  name: 'Cavalerie légère',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Light_Cavalry_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([Ids.AztecsId, Ids.IncasId, Ids.MayansId, Ids.TeutonsId]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Stable, time: 30}],
  cost: {[Resource.Food]: 80},
  health: 60,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 7, pierce: 0},
    bonuses: new Map([[ArmorType.Monk, 10]]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 2, types: [ArmorType.Cavalry]},
  speed: 1.5,
  lineOfSight: 8,
  comments: [],
};

export const LightCavalryImperialAge: Unit = {
  ...LightCavalry,
  id: 'light-cavalry-imperial-age',
  name: 'Cavalerie légère (Age Impérial)',
  age: Age.ImperialAge,
  lineOfSight: 10,
};

export const Hussar: Unit = {
  id: 'hussar',
  name: 'Hussard',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Hussar_(Age_of_Empires_II)',
  civilizations: allCivilizationsWithout([
    Ids.AztecsId,
    Ids.BritonsId,
    Ids.ChineseId,
    Ids.FranksId,
    Ids.IncasId,
    Ids.JapaneseId,
    Ids.MalayId,
    Ids.MaliansId,
    Ids.MayansId,
    Ids.PortugueseId,
    Ids.TeutonsId,
    Ids.VikingsId,
    Ids.VietnameseId,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Stable, time: 30}],
  cost: {[Resource.Food]: 80},
  health: 75,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 7, pierce: 0},
    bonuses: new Map([[ArmorType.Monk, 12]]),
    rateOfFire: 1.93,
  },
  armor: {melee: 0, pierce: 2, types: [ArmorType.Cavalry]},
  speed: 1.5,
  lineOfSight: 10,
  comments: [],
};

export const Knight: Unit = {
  id: 'knight',
  name: 'Chevalier',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Knight',
  civilizations: allCivilizationsWithout([Ids.AztecsId, Ids.IncasId, Ids.IndiansId, Ids.MayansId]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Stable, time: 30}],
  cost: {
    [Resource.Food]: 60,
    [Resource.Gold]: 75,
  },
  health: 100,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 10, pierce: 0},
    bonuses: new Map(),
    rateOfFire: 1.83,
  },
  armor: {melee: 2, pierce: 2, types: [ArmorType.Cavalry]},
  speed: 1.35,
  lineOfSight: 4,
  comments: [],
};

export const Cavalier: Unit = {
  id: 'cavalier',
  name: 'Cavalier',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Cavalier',
  civilizations: allCivilizationsWithout([
    Ids.AztecsId,
    Ids.IncasId,
    Ids.IndiansId,
    Ids.MayansId,
    Ids.SaracensId,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Stable, time: 30}],
  cost: {
    [Resource.Food]: 60,
    [Resource.Gold]: 75,
  },
  health: 120,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 12, pierce: 0},
    bonuses: new Map(),
    rateOfFire: 1.83,
  },
  armor: {melee: 2, pierce: 2, types: [ArmorType.Cavalry]},
  speed: 1.35,
  lineOfSight: 4,
  comments: [],
};

export const Paladin: Unit = {
  id: 'paladin',
  name: 'Paladin',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Paladin',
  civilizations: onlyCivilizations([
    Ids.BulgariansId,
    Ids.ByzantinesId,
    Ids.CeltsId,
    Ids.CumansId,
    Ids.FranksId,
    Ids.HunsId,
    Ids.LithuaniansId,
    Ids.MagyarsId,
    Ids.PersiansId,
    Ids.SpanishId,
    Ids.TeutonsId,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Stable, time: 30}],
  cost: {
    [Resource.Food]: 60,
    [Resource.Gold]: 75,
  },
  health: 160,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 14, pierce: 0},
    bonuses: new Map(),
    rateOfFire: 1.93,
  },
  armor: {melee: 2, pierce: 3, types: [ArmorType.Cavalry]},
  speed: 1.35,
  lineOfSight: 5,
  comments: [],
};

export const CamelRider: Unit = {
  id: 'camel-rider',
  name: 'Chameau',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Camel_Rider_(Age_of_Empires_II)',
  civilizations: onlyCivilizations([
    Ids.BerbersId,
    Ids.ByzantinesId,
    Ids.ChineseId,
    Ids.CumansId,
    Ids.EthiopiansId,
    Ids.IndiansId,
    Ids.MaliansId,
    Ids.MongolsId,
    Ids.PersiansId,
    Ids.SaracensId,
    Ids.TatarsId,
    Ids.TurksId,
  ]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Stable, time: 22}],
  cost: {
    [Resource.Food]: 55,
    [Resource.Gold]: 60,
  },
  health: 100,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 6, pierce: 0},
    bonuses: new Map([
      [ArmorType.Cavalry, 9],
      [ArmorType.Camel, 5],
      [ArmorType.Ship, 5],
      [ArmorType.FishingShip, 5],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Camel]},
  speed: 1.45,
  lineOfSight: 4,
  comments: [],
};

export const HeavyCamelRider: Unit = {
  id: 'heavy-camel-rider',
  name: 'Chameau lourd',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Heavy_Camel_Rider',
  civilizations: onlyCivilizations([
    Ids.BerbersId,
    Ids.ByzantinesId,
    Ids.ChineseId,
    Ids.EthiopiansId,
    Ids.IndiansId,
    Ids.MaliansId,
    Ids.MongolsId,
    Ids.PersiansId,
    Ids.SaracensId,
    Ids.TatarsId,
    Ids.TurksId,
  ]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Stable, time: 22}],
  cost: {
    [Resource.Food]: 55,
    [Resource.Gold]: 60,
  },
  health: 120,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 7, pierce: 0},
    bonuses: new Map([
      [ArmorType.Cavalry, 18],
      [ArmorType.Camel, 9],
      [ArmorType.Ship, 9],
      [ArmorType.FishingShip, 9],
      [ArmorType.Mameluke, 7],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Camel]},
  speed: 1.45,
  lineOfSight: 5,
  comments: [],
};

export const ImperialCamelRider: Unit = {
  id: 'imperial-camel-rider',
  name: 'Chameau impérial',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Heavy_Camel_Rider',
  civilizations: onlyCivilizations([Ids.IndiansId]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Stable, time: 20}],
  cost: {
    [Resource.Food]: 55,
    [Resource.Gold]: 60,
  },
  health: 140,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 9, pierce: 0},
    bonuses: new Map([
      [ArmorType.Cavalry, 18],
      [ArmorType.Camel, 9],
      [ArmorType.Ship, 9],
      [ArmorType.FishingShip, 9],
      [ArmorType.Mameluke, 7],
    ]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 0, types: [ArmorType.Camel]},
  speed: 1.45,
  lineOfSight: 5,
  comments: [],
};

export const BattleElephant: Unit = {
  id: 'battle-elephant',
  name: 'Éléphant de combat',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Battle_Elephant',
  civilizations: onlyCivilizations([Ids.BurmeseId, Ids.KhmerId, Ids.MalayId, Ids.VietnameseId]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Stable, time: 28}],
  cost: {
    [Resource.Food]: 120,
    [Resource.Gold]: 70,
  },
  health: 250,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 12, pierce: 0},
    bonuses: new Map([
      [ArmorType.Building, 7],
      [ArmorType.StoneDefense, 7],
    ]),
    areaOfDamage: 0.4,
    rateOfFire: 2.03,
  },
  armor: {melee: 1, pierce: 2, types: [ArmorType.Cavalry, ArmorType.WarElephant]},
  speed: 0.85,
  lineOfSight: 4,
  comments: [],
};

export const EliteBattleElephant: Unit = {
  id: 'elite-battle-elephant',
  name: "Éléphant de combat d'élite",
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Elite_Battle_Elephant',
  civilizations: onlyCivilizations([Ids.BurmeseId, Ids.KhmerId, Ids.MalayId, Ids.VietnameseId]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Stable, time: 28}],
  cost: {
    [Resource.Food]: 120,
    [Resource.Gold]: 70,
  },
  health: 300,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 14, pierce: 0},
    bonuses: new Map([
      [ArmorType.Building, 10],
      [ArmorType.StoneDefense, 10],
    ]),
    areaOfDamage: 0.4,
    rateOfFire: 2.03,
  },
  armor: {melee: 1, pierce: 3, types: [ArmorType.Cavalry, ArmorType.WarElephant]},
  speed: 0.85,
  lineOfSight: 5,
  comments: [],
};

export const Tarkan: Unit = {
  id: 'tarkan',
  name: 'Tarkan',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Tarkan',
  civilizations: onlyCivilizations([Ids.HunsId]),
  age: Age.CastleAge,
  abilities: [],
  training: [
    {building: Castle, time: 14},
    {building: Stable, time: 26},
  ],
  cost: {
    [Resource.Food]: 60,
    [Resource.Gold]: 60,
  },
  health: 100,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 8, pierce: 0},
    bonuses: new Map([
      [ArmorType.StoneDefense, 12],
      [ArmorType.Castle, 10],
      [ArmorType.Building, 8],
      [ArmorType.WallAndGate, 8],
    ]),
    rateOfFire: 2.13,
  },
  armor: {melee: 1, pierce: 3, types: [ArmorType.Cavalry, ArmorType.UniqueUnit]},
  speed: 1.35,
  lineOfSight: 5,
  comments: [],
};

export const EliteTarkan: Unit = {
  id: 'elite-tarkan',
  name: "Tarkan d'élite",
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Tarkan',
  civilizations: onlyCivilizations([Ids.HunsId]),
  age: Age.ImperialAge,
  abilities: [],
  training: [
    {building: Castle, time: 14},
    {building: Stable, time: 26},
  ],
  cost: {
    [Resource.Food]: 60,
    [Resource.Gold]: 60,
  },
  health: 150,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 11, pierce: 0},
    bonuses: new Map([
      [ArmorType.StoneDefense, 12],
      [ArmorType.Castle, 10],
      [ArmorType.Building, 10],
      [ArmorType.WallAndGate, 10],
    ]),
    rateOfFire: 2.13,
  },
  armor: {melee: 1, pierce: 4, types: [ArmorType.Cavalry, ArmorType.UniqueUnit]},
  speed: 1.35,
  lineOfSight: 7,
  comments: [],
};

export const SteppeLancer: Unit = {
  id: 'steppe-lancer',
  name: 'Lancier des steppes',
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Steppe_Lancer',
  civilizations: onlyCivilizations([Ids.CumansId, Ids.TatarsId]),
  age: Age.CastleAge,
  abilities: [],
  training: [{building: Stable, time: 24}],
  cost: {
    [Resource.Food]: 70,
    [Resource.Gold]: 45,
  },
  health: 60,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 8, pierce: 0},
    bonuses: new Map(),
    rateOfFire: 2.3,
    range: 1,
    accuracy: 1,
    projectileSpeed: undefined,
  },
  armor: {melee: 0, pierce: 1, types: [ArmorType.Cavalry]},
  speed: 1.45,
  lineOfSight: 4,
  comments: [{template: "Ligne de vue augmenté de 1 par la portée d'attaque", variables: []}],
};

export const EliteSteppeLancer: Unit = {
  id: 'elite-steppe-lancer',
  name: "Lancier des steppes d'élite",
  type: [UnitType.Cavalry],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Elite_Steppe_Lancer',
  civilizations: onlyCivilizations([Ids.CumansId, Ids.TatarsId]),
  age: Age.ImperialAge,
  abilities: [],
  training: [{building: Stable, time: 20}],
  cost: {
    [Resource.Food]: 70,
    [Resource.Gold]: 45,
  },
  health: 80,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 10, pierce: 0},
    bonuses: new Map(),
    rateOfFire: 2.3,
    range: 1,
    accuracy: 1,
    projectileSpeed: undefined,
  },
  armor: {melee: 0, pierce: 1, types: [ArmorType.Cavalry]},
  speed: 1.45,
  lineOfSight: 4,
  comments: [{template: "Ligne de vue augmenté de 1 par la portée d'attaque", variables: []}],
};
