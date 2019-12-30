/* eslint-disable no-magic-numbers */
import {
  Aztecs,
  Berbers,
  Britons,
  Bulgarians,
  Burmese,
  Byzantines,
  Celts,
  Chinese,
  Cumans,
  Ethiopians,
  Franks,
  Goths,
  Huns,
  Incas,
  Indians,
  Italians,
  Japanese,
  Khmer,
  Koreans,
  Lithuanians,
  Magyars,
  Malay,
  Malians,
  Mayans,
  Mongols,
  Persians,
  Portuguese,
  Saracens,
  Slavs,
  Spanish,
  Tatars,
  Teutons,
  Turks,
  Vietnamese,
  Vikings,
} from '../civilizations/registry';
import {Age} from '../ages/core';
import {Castle, Stable, Barrack, TownCenter, Dock} from '../buildings';
import {
  noUnits,
  isSkirmisherLine,
  isGenitourLine,
  isInCastle,
  isByFootArcher,
  isScoutCavalryLine,
  isKonniksLine,
  isBattleElephantLine,
  isFireGalleyLine,
  isCavalryArcherLine,
  isKipchakLine,
  isInStable,
  isShotelWarriorLine,
  isHuskarlLine,
  isSlinger,
  isTarkanLine,
  isArcher,
  isArcherLine,
  isShip,
  isMonk,
  isSiegeUnit,
  isInfantry,
  isTurtleShip,
} from '../lib/unit_groups';
import {InterpolationVariableType, AllAge} from '../core';
import {Skirmisher, Genitour, CavalryArcher, Slinger, Archer} from '../units/archery';
import {ScoutCavalry, BattleElephant, Hussar} from '../units/stable';
import {FireGalley, TurtleShip} from '../units/dock';
import {ArmorType} from '../damage';
import {UnitType} from '../units/core';
import {Monk} from '../units/monastery';

import {TechnologyType, UniqueTechnology} from './core';

const Atlatl: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Aztecs,
  age: Age.CastleAge,
  building: Castle,
  id: 'Atlatl',
  englishName: 'Atlatl',
  frenchName: 'Propulseur',
  cost: {food: 400, gold: 350},
  bonus: {
    description: {
      template: "Les %1 et %2 ont +1 de portée et +1 d'attaque.",
      variables: [
        {type: InterpolationVariableType.Unit, unit: Skirmisher},
        {type: InterpolationVariableType.Unit, unit: Genitour},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isSkirmisherLine(u) || isGenitourLine(u),
        rangeBonus: AllAge(1),
        attackBonus: AllAge(1),
      },
    ],
  },
};
const Kasbah: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Berbers,
  age: Age.CastleAge,
  building: Castle,
  id: 'Kasbah',
  englishName: 'Kasbah',
  frenchName: 'Kasbah',
  cost: {food: 250, gold: 250},
  bonus: {
    description: {
      template: 'Les %1 fonctionnent 25% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Castle}],
    },
    effects: [{teamBonus: true, units: isInCastle, trainingSpeedBonus: AllAge(0.25)}],
  },
};
const Yeomen: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Britons,
  age: Age.CastleAge,
  building: Castle,
  id: 'Yeomen',
  englishName: 'Yeomen',
  frenchName: 'Yeomen',
  cost: {wood: 750, gold: 450},
  bonus: {
    description: {
      template: "Les archers à pied ont +1 de portée. Les tours ont +2 d'attaque.",
      variables: [],
    },
    effects: [{teamBonus: false, units: isByFootArcher, rangeBonus: AllAge(1)}],
  },
};
const Stirrups: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Bulgarians,
  age: Age.CastleAge,
  building: Castle,
  id: 'Stirrups',
  englishName: 'Stirrups',
  frenchName: 'Étriers',
  cost: {food: 400, gold: 200},
  bonus: {
    description: {
      template: 'Les %1 et Konniks attaquent 25% plus vite.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: ScoutCavalry},
        // {type: InterpolationVariableType.Unit, unit: Konniks},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isScoutCavalryLine(u) || isKonniksLine(u),
        rateOfFireBonus: AllAge(0.25),
      },
    ],
  },
};
const Howdah: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Burmese,
  age: Age.CastleAge,
  building: Castle,
  id: 'Howdah',
  englishName: 'Howdah',
  frenchName: 'Howdah',
  cost: {food: 400, wood: 300},
  bonus: {
    description: {
      template: "Les %1 ont +1 d'armure et +1 de protection perçage.",
      variables: [{type: InterpolationVariableType.Unit, unit: BattleElephant}],
    },
    effects: [
      {teamBonus: false, units: isBattleElephantLine, armorBonus: AllAge({melee: 1, pierce: 1})},
    ],
  },
};
const GreekFire: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Byzantines,
  age: Age.CastleAge,
  building: Castle,
  id: 'GreekFire',
  englishName: 'Greek Fire',
  frenchName: 'Feu grégeois',
  cost: {food: 250, gold: 300},
  bonus: {
    description: {
      template: 'Les %1 ont +1 de portée.',
      variables: [{type: InterpolationVariableType.Unit, unit: FireGalley}],
    },
    effects: [{teamBonus: false, units: isFireGalleyLine, rangeBonus: AllAge(1)}],
  },
};
const Stronghold: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Celts,
  age: Age.CastleAge,
  building: Castle,
  id: 'Stronghold',
  englishName: 'Stronghold',
  frenchName: 'Citadelle',
  cost: {food: 250, gold: 200},
  bonus: {
    description: {
      template: 'Les %1 et tours tirent 25% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Castle}],
    },
    effects: [],
  },
};
const GreatWall: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Chinese,
  age: Age.CastleAge,
  building: Castle,
  id: 'GreatWall',
  englishName: 'Great Wall',
  frenchName: 'Grande muraille',
  cost: {wood: 400, stone: 200},
  bonus: {
    description: {template: 'Les murs et tours ont +30% de PDV.', variables: []},
    effects: [],
  },
};
const SteppeHusbandry: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Cumans,
  age: Age.CastleAge,
  building: Castle,
  id: 'SteppeHusbandry',
  englishName: 'Steppe Husbandry',
  frenchName: 'Élevage des steppes',
  cost: {food: 200, wood: 300},
  bonus: {
    description: {
      template: 'Les %1, %2 et Kipchak sont créés 80% plus vite.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: ScoutCavalry},
        {type: InterpolationVariableType.Unit, unit: CavalryArcher},
        // {type: InterpolationVariableType.Unit, unit: Kipchak},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isScoutCavalryLine(u) || isCavalryArcherLine(u) || isKipchakLine(u),
        trainingSpeedBonus: AllAge(0.8),
      },
    ],
  },
};
const RoyalHeirs: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ethiopians,
  age: Age.CastleAge,
  building: Castle,
  id: 'RoyalHeirs',
  englishName: 'Royal Heirs',
  frenchName: 'Héritiers royaux',
  cost: {food: 300, gold: 300},
  bonus: {
    description: {template: 'Les Guerrier à shotel sont créés 2x plus vite.', variables: []},
    effects: [{teamBonus: false, units: isShotelWarriorLine, trainingSpeedBonus: AllAge(1)}],
  },
};
const Chivalry: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Franks,
  age: Age.CastleAge,
  building: Castle,
  id: 'Chivalry',
  englishName: 'Chivalry',
  frenchName: 'Chevalerie',
  cost: {wood: 400, gold: 400},
  bonus: {
    description: {
      template: 'Les %1 fonctionnent 40% plus vite',
      variables: [{type: InterpolationVariableType.Building, building: Stable}],
    },
    effects: [{teamBonus: false, units: isInStable, trainingSpeedBonus: AllAge(0.4)}],
  },
};
const Anarchy: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Goths,
  age: Age.CastleAge,
  building: Castle,
  id: 'Anarchy',
  englishName: 'Anarchy',
  frenchName: 'Anarchie',
  cost: {food: 450, gold: 250},
  bonus: {
    description: {
      template: 'Les Huskarls peuvent être créés dans %1',
      variables: [{type: InterpolationVariableType.Building, building: Barrack}],
    },
    effects: [{teamBonus: false, units: isHuskarlLine}],
  },
};
const Marauders: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Huns,
  age: Age.CastleAge,
  building: Castle,
  id: 'Marauders',
  englishName: 'Marauders',
  frenchName: 'Maraudeurs',
  cost: {wood: 300, gold: 200},
  bonus: {
    description: {
      template: 'Les Tarkans peuvent être créés dans %1',
      variables: [{type: InterpolationVariableType.Building, building: Stable}],
    },
    effects: [{teamBonus: false, units: isTarkanLine}],
  },
};
const AndeanSling: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Incas,
  age: Age.CastleAge,
  building: Castle,
  id: 'AndeanSling',
  englishName: 'Andean Sling',
  frenchName: 'Fronde des Andes',
  cost: {food: 200, gold: 300},
  bonus: {
    description: {
      template: "Les %1, %2 et %3 n'ont plus de portée minimum.",
      variables: [
        {type: InterpolationVariableType.Unit, unit: Skirmisher},
        {type: InterpolationVariableType.Unit, unit: Slinger},
        {type: InterpolationVariableType.Unit, unit: Genitour},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isSkirmisherLine(u) || isSlinger(u) || isGenitourLine(u),
        removeMinimumRange: AllAge(true),
      },
    ],
  },
};
const Sultans: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Indians,
  age: Age.CastleAge,
  building: Castle,
  id: 'Sultans',
  englishName: 'Sultans',
  frenchName: 'Sultans',
  cost: {food: 400, wood: 400},
  bonus: {
    description: {
      template: "Augmentent tout les revenus d'or (mine, commerce et reliques) de 10%",
      variables: [],
    },
    effects: [],
  },
};
const Pavise: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Italians,
  age: Age.CastleAge,
  building: Castle,
  id: 'Pavise',
  englishName: 'Pavise',
  frenchName: 'Pavois',
  cost: {food: 300, gold: 150},
  bonus: {
    description: {
      template: "Les archers à pied ont +1 d'armure et +1 de protection perçage.",
      variables: [],
    },
    effects: [{teamBonus: false, units: isByFootArcher, armorBonus: AllAge({melee: 1, pierce: 1})}],
  },
};
const Yasama: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Japanese,
  age: Age.CastleAge,
  building: Castle,
  id: 'Yasama',
  englishName: 'Yasama',
  frenchName: 'Yasama',
  cost: {food: 300, wood: 300},
  bonus: {
    description: {template: 'Les tours tirent 2 flèches de plus.', variables: []},
    effects: [],
  },
};
const TuskSwords: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Khmer,
  age: Age.CastleAge,
  building: Castle,
  id: 'TuskSwords',
  englishName: 'Tusk Swords',
  frenchName: 'Épées de défenses',
  cost: {wood: 200, gold: 300},
  bonus: {
    description: {
      template: "Les %1 ont +3 d'attaque.",
      variables: [{type: InterpolationVariableType.Unit, unit: BattleElephant}],
    },
    effects: [{teamBonus: false, units: isBattleElephantLine, attackBonus: AllAge(3)}],
  },
};
const Panokseon: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Koreans,
  age: Age.CastleAge,
  building: Castle,
  id: 'Panokseon',
  englishName: 'Panokseon',
  frenchName: 'Panokseon',
  cost: {food: 300, wood: 300},
  bonus: {
    description: {
      template: 'Les %1 se déplacent 15% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: TurtleShip}],
    },
    effects: [{teamBonus: false, units: isTurtleShip, speedBonus: AllAge(0.15)}],
  },
};
const HillForts: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Lithuanians,
  age: Age.CastleAge,
  building: Castle,
  id: 'HillForts',
  englishName: 'Hill Forts',
  frenchName: 'Collines fortifiées',
  cost: {food: 250, gold: 250},
  bonus: {
    description: {
      template: 'Les %1 ont +3 de portée.',
      variables: [{type: InterpolationVariableType.Building, building: TownCenter}],
    },
    effects: [],
  },
};
const Mercenaries: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Magyars,
  age: Age.CastleAge,
  building: Castle,
  id: 'Mercenaries',
  englishName: 'Mercenaries',
  frenchName: 'Armée corvinienne',
  cost: {food: 200, gold: 300},
  bonus: {
    description: {
      template: "Les %1 ne coutent plus d'or.",
      variables: [{type: InterpolationVariableType.Unit, unit: Hussar}],
    },
    effects: [{teamBonus: false, units: isHuskarlLine, goldCostBonus: AllAge(10)}],
  },
};
const Thalassocracy: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Malay,
  age: Age.CastleAge,
  building: Castle,
  id: 'Thalassocracy',
  englishName: 'Thalassocracy',
  frenchName: 'Thalassocratie',
  cost: {food: 300, gold: 300},
  bonus: {
    description: {
      template: 'Transforme les %1 en Harbor.',
      variables: [
        {type: InterpolationVariableType.Building, building: Dock},
        // {type: InterpolationVariableType.Building, building: Harbor},
      ],
    },
    effects: [],
  },
};
const Tigui: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Malians,
  age: Age.CastleAge,
  building: Castle,
  id: 'Tigui',
  englishName: 'Tigui',
  frenchName: 'Tigui',
  cost: {food: 200, wood: 300},
  bonus: {
    description: {
      template: 'Les %1 peuvent tirer des flèches sans unités en garnison.',
      variables: [{type: InterpolationVariableType.Building, building: TownCenter}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const ObsidianArrows: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Mayans,
  age: Age.CastleAge,
  building: Castle,
  id: 'ObsidianArrows',
  englishName: 'Obsidian Arrows',
  frenchName: "Flècge d'obsidienne",
  cost: {food: 300, gold: 300},
  bonus: {
    description: {
      template: "Les %1 ont un bonuse d'attaque de +6 contre les %1 et %2.",
      variables: [
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.Building},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.StoneDefense},
      ],
    },
    effects: [
      {teamBonus: false, units: isArcher, attackBonusBonus: AllAge([ArmorType.Building, 6])},
      {teamBonus: false, units: isArcher, attackBonusBonus: AllAge([ArmorType.StoneDefense, 6])},
    ],
  },
};
const Nomads: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Mongols,
  age: Age.CastleAge,
  building: Castle,
  id: 'Nomads',
  englishName: 'Nomads',
  frenchName: 'Nomades',
  cost: {wood: 300, gold: 150},
  bonus: {
    description: {
      template: "Les habitations perdues n'influent pas sur la limite de population.",
      variables: [],
    },
    effects: [],
  },
};
const Kamandaran: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Persians,
  age: Age.CastleAge,
  building: Castle,
  id: 'Kamandaran',
  englishName: 'Kamandaran',
  frenchName: 'Kamandaran',
  cost: {wood: 200, stone: 100},
  bonus: {
    description: {
      template: 'Change le cout en or des %1 en bois.',
      variables: [{type: InterpolationVariableType.Unit, unit: Archer}],
    },
    effects: [
      {
        teamBonus: false,
        units: isArcherLine,
        goldCostBonus: AllAge(45),
        woodCostBonus: AllAge(-45),
      },
    ],
  },
};
const Carrack: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Portuguese,
  age: Age.CastleAge,
  building: Castle,
  id: 'Carrack',
  englishName: 'Carrack',
  frenchName: 'Carraque',
  cost: {wood: 200, gold: 300},
  bonus: {
    description: {
      template: "Les %1 ont +1 d'armure et +1 de protection perçage.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Ship}],
    },
    effects: [{teamBonus: false, units: isShip, armorBonus: AllAge({melee: 1, pierce: 1})}],
  },
};
const Madrasah: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Saracens,
  age: Age.CastleAge,
  building: Castle,
  id: 'Madrasah',
  englishName: 'Madrasah',
  frenchName: 'Madrasa',
  cost: {food: 200, gold: 100},
  bonus: {
    description: {
      template: 'Lorsque un %1 est tué, 33% du cout en or revient au joueur.',
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: isMonk}],
  },
};
const Orthodoxy: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Slavs,
  age: Age.CastleAge,
  building: Castle,
  id: 'Orthodoxy',
  englishName: 'Orthodoxy',
  frenchName: 'Orthodoxie',
  cost: {food: 200, gold: 300},
  bonus: {
    description: {
      template: "Les %1 ont +3 d'armure et +3 de protection perçage.",
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: isMonk, armorBonus: AllAge({melee: 3, pierce: 3})}],
  },
};
const Inquisition: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Spanish,
  age: Age.CastleAge,
  building: Castle,
  id: 'Inquisition',
  englishName: 'Inquisition',
  frenchName: 'Inquisition',
  cost: {food: 100, gold: 300},
  bonus: {
    description: {
      template:
        'Le temps minimum et maximum requis pour une conversion est réduit de 1 seconde pour les unités et de 7 secondes pour les batiments.',
      variables: [],
    },
    effects: [{teamBonus: false, units: isMonk}],
  },
};
const SilkArmor: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Tatars,
  age: Age.CastleAge,
  building: Castle,
  id: 'SilkArmor',
  englishName: 'Silk Armor',
  frenchName: 'Armure de soie',
  cost: {wood: 400, gold: 300},
  bonus: {
    description: {
      template: 'Les %1, %2, %3 et Kipchak on +1 de protection perçage.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: ScoutCavalry},
        {type: InterpolationVariableType.Unit, unit: CavalryArcher},
        {type: InterpolationVariableType.Unit, unit: Genitour},
        // {type: InterpolationVariableType.Unit, unit: Kipchaks},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u =>
          isScoutCavalryLine(u) || isCavalryArcherLine(u) || isGenitourLine(u) || isKipchakLine(u),
        armorBonus: AllAge({melee: 0, pierce: 1}),
      },
    ],
  },
};
const Ironclad: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Teutons,
  age: Age.CastleAge,
  building: Castle,
  id: 'Ironclad',
  englishName: 'Ironclad',
  frenchName: 'Cuirasse',
  cost: {wood: 400, gold: 350},
  bonus: {
    description: {
      template: "Les %1 ont +4 d'armure",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.SiegeUnit}],
    },
    effects: [{teamBonus: false, units: isSiegeUnit, armorBonus: AllAge({melee: 4, pierce: 0})}],
  },
};
const Sipahi: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Turks,
  age: Age.CastleAge,
  building: Castle,
  id: 'Sipahi',
  englishName: 'Sipahi',
  frenchName: 'Sipahi',
  cost: {food: 350, gold: 150},
  bonus: {
    description: {
      template: 'Les %1 et %2 ont +20 de PDV.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: CavalryArcher},
        {type: InterpolationVariableType.Unit, unit: Genitour},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isCavalryArcherLine(u) || isGenitourLine(u),
        healthFixedBonus: AllAge(20),
      },
    ],
  },
};
const Chatras: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Vietnamese,
  age: Age.CastleAge,
  building: Castle,
  id: 'Chatras',
  englishName: 'Chatras',
  frenchName: 'Chatras',
  cost: {food: 250, gold: 250},
  bonus: {
    description: {
      template: 'Les %1 ont +50 de PDV.',
      variables: [{type: InterpolationVariableType.Unit, unit: BattleElephant}],
    },
    effects: [{teamBonus: false, units: isBattleElephantLine, healthFixedBonus: AllAge(50)}],
  },
};
const Chieftains: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Vikings,
  age: Age.CastleAge,
  building: Castle,
  id: 'Chieftains',
  englishName: 'Chieftains',
  frenchName: 'Chefs de tribu',
  cost: {food: 400, gold: 300},
  bonus: {
    description: {
      template: "L'%1 a un bonus d'attaque de +5 contre la %2 et de +4 contre les %3",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.Cavalry},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.Camel},
      ],
    },
    effects: [
      {teamBonus: false, units: isInfantry, attackBonusBonus: AllAge([ArmorType.Cavalry, 5])},
      {teamBonus: false, units: isInfantry, attackBonusBonus: AllAge([ArmorType.Camel, 4])},
    ],
  },
};

// TODO - Fill those imperial unique technologies

const GarlandWars: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Aztecs,
  age: Age.ImperialAge,
  building: Castle,
  id: 'GarlandWars',
  englishName: 'Garland Wars',
  frenchName: '',
  cost: {food: 450, gold: 750},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const MaghrabiCamels: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Berbers,
  age: Age.ImperialAge,
  building: Castle,
  id: 'MaghrabiCamels',
  englishName: 'Maghrabi Camels',
  frenchName: '',
  cost: {food: 700, gold: 300},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Warwolf: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Britons,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Warwolf',
  englishName: 'Warwolf',
  frenchName: '',
  cost: {wood: 500, gold: 250},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Bagains: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Bulgarians,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Bagains',
  englishName: 'Bagains',
  frenchName: '',
  cost: {food: 900, gold: 450},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const ManipurCavalry: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Burmese,
  age: Age.ImperialAge,
  building: Castle,
  id: 'ManipurCavalry',
  englishName: 'Manipur Cavalry',
  frenchName: '',
  cost: {food: 650, gold: 400},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Logistica: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Byzantines,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Logistica',
  englishName: 'Logistica',
  frenchName: '',
  cost: {food: 1000, gold: 600},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const FurorCeltica: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Celts,
  age: Age.ImperialAge,
  building: Castle,
  id: 'FurorCeltica',
  englishName: 'Furor Celtica',
  frenchName: '',
  cost: {food: 750, gold: 450},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Rocketry: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Chinese,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Rocketry',
  englishName: 'Rocketry',
  frenchName: '',
  cost: {wood: 600, gold: 600},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const CumanMercenaries: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Cumans,
  age: Age.ImperialAge,
  building: Castle,
  id: 'CumanMercenaries',
  englishName: 'Cuman Mercenaries',
  frenchName: '',
  cost: {food: 650, gold: 400},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const TorsionEngines: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ethiopians,
  age: Age.ImperialAge,
  building: Castle,
  id: 'TorsionEngines',
  englishName: 'Torsion Engines',
  frenchName: '',
  cost: {food: 1000, gold: 600},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const BeardedAxe: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Franks,
  age: Age.ImperialAge,
  building: Castle,
  id: 'BeardedAxe',
  englishName: 'Bearded Axe',
  frenchName: '',
  cost: {food: 400, gold: 400},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Perfusion: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Goths,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Perfusion',
  englishName: 'Perfusion',
  frenchName: '',
  cost: {wood: 400, gold: 600},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Atheism: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Huns,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Atheism',
  englishName: 'Atheism',
  frenchName: '',
  cost: {food: 500, gold: 500},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Couriers: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Incas,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Couriers',
  englishName: 'Couriers',
  frenchName: '',
  cost: {food: 600, gold: 600},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Shatagni: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Indians,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Shatagni',
  englishName: 'Shatagni',
  frenchName: '',
  cost: {food: 500, gold: 300},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const SilkRoad: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Italians,
  age: Age.ImperialAge,
  building: Castle,
  id: 'SilkRoad',
  englishName: 'Silk Road',
  frenchName: '',
  cost: {food: 500, gold: 250},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Kataparuto: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Japanese,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Kataparuto',
  englishName: 'Kataparuto',
  frenchName: '',
  cost: {wood: 750, gold: 400},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const DoubleCrossbow: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Khmer,
  age: Age.ImperialAge,
  building: Castle,
  id: 'DoubleCrossbow',
  englishName: 'Double Crossbow',
  frenchName: '',
  cost: {food: 700, gold: 400},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Shinkichon: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Koreans,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Shinkichon',
  englishName: 'Shinkichon',
  frenchName: '',
  cost: {wood: 800, gold: 500},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const TowerShields: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Lithuanians,
  age: Age.ImperialAge,
  building: Castle,
  id: 'TowerShields',
  englishName: 'Tower Shields',
  frenchName: '',
  cost: {food: 800, gold: 200},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const RecurveBow: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Magyars,
  age: Age.ImperialAge,
  building: Castle,
  id: 'RecurveBow',
  englishName: 'Recurve Bow',
  frenchName: '',
  cost: {wood: 600, gold: 400},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const ForcedLevy: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Malay,
  age: Age.ImperialAge,
  building: Castle,
  id: 'ForcedLevy',
  englishName: 'Forced Levy',
  frenchName: '',
  cost: {food: 1000, gold: 600},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Farimba: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Malians,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Farimba',
  englishName: 'Farimba',
  frenchName: '',
  cost: {food: 650, gold: 400},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const ElDorado: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Mayans,
  age: Age.ImperialAge,
  building: Castle,
  id: 'ElDorado',
  englishName: 'El Dorado',
  frenchName: '',
  cost: {food: 750, gold: 450},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Drill: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Mongols,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Drill',
  englishName: 'Drill',
  frenchName: '',
  cost: {food: 500, gold: 450},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Mahouts: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Persians,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Mahouts',
  englishName: 'Mahouts',
  frenchName: '',
  cost: {food: 300, gold: 300},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Arquebus: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Portuguese,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Arquebus',
  englishName: 'Arquebus',
  frenchName: '',
  cost: {food: 700, gold: 400},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Zealotry: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Saracens,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Zealotry',
  englishName: 'Zealotry',
  frenchName: '',
  cost: {food: 750, gold: 800},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Druzhina: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Slavs,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Druzhina',
  englishName: 'Druzhina',
  frenchName: '',
  cost: {food: 1200, gold: 500},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Supremacy: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Spanish,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Supremacy',
  englishName: 'Supremacy',
  frenchName: '',
  cost: {food: 450, gold: 250},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const TimuridSiegecraft: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Tatars,
  age: Age.ImperialAge,
  building: Castle,
  id: 'TimuridSiegecraft',
  englishName: 'Timurid Siegecraft',
  frenchName: '',
  cost: {wood: 400, gold: 500},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Crenellations: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Teutons,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Crenellations',
  englishName: 'Crenellations',
  frenchName: '',
  cost: {food: 600, stone: 400},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Artillery: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Turks,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Artillery',
  englishName: 'Artillery',
  frenchName: '',
  cost: {gold: 500, stone: 450},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const PaperMoney: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Vietnamese,
  age: Age.ImperialAge,
  building: Castle,
  id: 'PaperMoney',
  englishName: 'Paper Money',
  frenchName: '',
  cost: {food: 800, gold: 200},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
const Berserkergang: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Vikings,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Berserkergang',
  englishName: 'Berserkergang',
  frenchName: '',
  cost: {food: 850, gold: 400},
  bonus: {
    description: {template: '', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};

export const uniqueTechnologyRegistry: UniqueTechnology[] = [
  // Castle
  Atlatl,
  Kasbah,
  Yeomen,
  Stirrups,
  Howdah,
  GreekFire,
  Stronghold,
  GreatWall,
  SteppeHusbandry,
  RoyalHeirs,
  Chivalry,
  Anarchy,
  Marauders,
  AndeanSling,
  Sultans,
  Pavise,
  Yasama,
  TuskSwords,
  Panokseon,
  HillForts,
  Mercenaries,
  Thalassocracy,
  Tigui,
  ObsidianArrows,
  Nomads,
  Kamandaran,
  Carrack,
  Madrasah,
  Orthodoxy,
  Inquisition,
  SilkArmor,
  Ironclad,
  Sipahi,
  Chatras,
  Chieftains,
  // Imperial
  GarlandWars,
  MaghrabiCamels,
  Warwolf,
  Bagains,
  ManipurCavalry,
  Logistica,
  FurorCeltica,
  Rocketry,
  CumanMercenaries,
  TorsionEngines,
  BeardedAxe,
  Perfusion,
  Atheism,
  Couriers,
  Shatagni,
  SilkRoad,
  Kataparuto,
  DoubleCrossbow,
  Shinkichon,
  TowerShields,
  RecurveBow,
  ForcedLevy,
  Farimba,
  ElDorado,
  Drill,
  Mahouts,
  Arquebus,
  Zealotry,
  Druzhina,
  Supremacy,
  TimuridSiegecraft,
  Crenellations,
  Artillery,
  PaperMoney,
  Berserkergang,
];
