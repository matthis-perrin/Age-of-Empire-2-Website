import aztecs from '../images/civilizations/aztecs.png';
import aztecsHover from '../images/civilizations/aztecs_hover.png';
import aztecsPressed from '../images/civilizations/aztecs_pressed.png';
import berber from '../images/civilizations/berber.png';
import berberHover from '../images/civilizations/berber_hover.png';
import berberPressed from '../images/civilizations/berber_pressed.png';
import britons from '../images/civilizations/britons.png';
import britonsHover from '../images/civilizations/britons_hover.png';
import britonsPressed from '../images/civilizations/britons_pressed.png';
import bulgarians from '../images/civilizations/bulgarians.png';
import bulgariansHover from '../images/civilizations/bulgarians_hover.png';
import bulgariansPressed from '../images/civilizations/bulgarians_pressed.png';
import burmese from '../images/civilizations/burmese.png';
import burmeseHover from '../images/civilizations/burmese_hover.png';
import burmesePressed from '../images/civilizations/burmese_pressed.png';
import byzantines from '../images/civilizations/byzantines.png';
import byzantinesHover from '../images/civilizations/byzantines_hover.png';
import byzantinesPressed from '../images/civilizations/byzantines_pressed.png';
import celts from '../images/civilizations/celts.png';
import celtsHover from '../images/civilizations/celts_hover.png';
import celtsPressed from '../images/civilizations/celts_pressed.png';
import chinese from '../images/civilizations/chinese.png';
import chineseHover from '../images/civilizations/chinese_hover.png';
import chinesePressed from '../images/civilizations/chinese_pressed.png';
import cumans from '../images/civilizations/cumans.png';
import cumansHover from '../images/civilizations/cumans_hover.png';
import cumansPressed from '../images/civilizations/cumans_pressed.png';
import ethiopians from '../images/civilizations/ethiopians.png';
import ethiopiansHover from '../images/civilizations/ethiopians_hover.png';
import ethiopiansPressed from '../images/civilizations/ethiopians_pressed.png';
import franks from '../images/civilizations/franks.png';
import franksHover from '../images/civilizations/franks_hover.png';
import franksPressed from '../images/civilizations/franks_pressed.png';
import goths from '../images/civilizations/goths.png';
import gothsHover from '../images/civilizations/goths_hover.png';
import gothsPressed from '../images/civilizations/goths_pressed.png';
import huns from '../images/civilizations/huns.png';
import hunsHover from '../images/civilizations/huns_hover.png';
import hunsPressed from '../images/civilizations/huns_pressed.png';
import inca from '../images/civilizations/inca.png';
import incaHover from '../images/civilizations/inca_hover.png';
import incaPressed from '../images/civilizations/inca_pressed.png';
import indians from '../images/civilizations/indians.png';
import indiansHover from '../images/civilizations/indians_hover.png';
import indiansPressed from '../images/civilizations/indians_pressed.png';
import italians from '../images/civilizations/italians.png';
import italiansHover from '../images/civilizations/italians_hover.png';
import italiansPressed from '../images/civilizations/italians_pressed.png';
import japanese from '../images/civilizations/japanese.png';
import japaneseHover from '../images/civilizations/japanese_hover.png';
import japanesePressed from '../images/civilizations/japanese_pressed.png';
import khmer from '../images/civilizations/khmer.png';
import khmerHover from '../images/civilizations/khmer_hover.png';
import khmerPressed from '../images/civilizations/khmer_pressed.png';
import koreans from '../images/civilizations/koreans.png';
import koreansHover from '../images/civilizations/koreans_hover.png';
import koreansPressed from '../images/civilizations/koreans_pressed.png';
import lithuanians from '../images/civilizations/lithuanians.png';
import lithuaniansHover from '../images/civilizations/lithuanians_hover.png';
import lithuaniansPressed from '../images/civilizations/lithuanians_pressed.png';
import magyars from '../images/civilizations/magyars.png';
import magyarsHover from '../images/civilizations/magyars_hover.png';
import magyarsPressed from '../images/civilizations/magyars_pressed.png';
import malay from '../images/civilizations/malay.png';
import malayHover from '../images/civilizations/malay_hover.png';
import malayPressed from '../images/civilizations/malay_pressed.png';
import malians from '../images/civilizations/malians.png';
import maliansHover from '../images/civilizations/malians_hover.png';
import maliansPressed from '../images/civilizations/malians_pressed.png';
import mayans from '../images/civilizations/mayans.png';
import mayansHover from '../images/civilizations/mayans_hover.png';
import mayansPressed from '../images/civilizations/mayans_pressed.png';
import mongols from '../images/civilizations/mongols.png';
import mongolsHover from '../images/civilizations/mongols_hover.png';
import mongolsPressed from '../images/civilizations/mongols_pressed.png';
import persians from '../images/civilizations/persians.png';
import persiansHover from '../images/civilizations/persians_hover.png';
import persiansPressed from '../images/civilizations/persians_pressed.png';
import portuguese from '../images/civilizations/portuguese.png';
import portugueseHover from '../images/civilizations/portuguese_hover.png';
import portuguesePressed from '../images/civilizations/portuguese_pressed.png';
import saracens from '../images/civilizations/saracens.png';
import saracensHover from '../images/civilizations/saracens_hover.png';
import saracensPressed from '../images/civilizations/saracens_pressed.png';
import slavs from '../images/civilizations/slavs.png';
import slavsHover from '../images/civilizations/slavs_hover.png';
import slavsPressed from '../images/civilizations/slavs_pressed.png';
import spanish from '../images/civilizations/spanish.png';
import spanishHover from '../images/civilizations/spanish_hover.png';
import spanishPressed from '../images/civilizations/spanish_pressed.png';
import tatars from '../images/civilizations/tatars.png';
import tatarsHover from '../images/civilizations/tatars_hover.png';
import tatarsPressed from '../images/civilizations/tatars_pressed.png';
import teutons from '../images/civilizations/teutons.png';
import teutonsHover from '../images/civilizations/teutons_hover.png';
import teutonsPressed from '../images/civilizations/teutons_pressed.png';
import turks from '../images/civilizations/turks.png';
import turksHover from '../images/civilizations/turks_hover.png';
import turksPressed from '../images/civilizations/turks_pressed.png';
import vietnamese from '../images/civilizations/vietnamese.png';
import vietnameseHover from '../images/civilizations/vietnamese_hover.png';
import vietnamesePressed from '../images/civilizations/vietnamese_pressed.png';
import vikings from '../images/civilizations/vikings.png';
import vikingsHover from '../images/civilizations/vikings_hover.png';
import vikingsPressed from '../images/civilizations/vikings_pressed.png';

import {CivilizationStrength} from './strength';
import * as CivilizationBonuses from './bonuses';
import { Bonus } from '../core';

export interface Civilization {
  id: string;
  name: string;
  strengths: CivilizationStrength[];
  bonuses: Bonus[];
  baseImg: string;
  hoverImg: string;
  pressedImg: string;
  url: string;
}

enum CivilizationRangeType {
  All,
  AllWithout,
  Only,
}

interface CivilizationRangeBase {
  type: CivilizationRangeType;
}

export interface AllCivilizationRange extends CivilizationRangeBase {
  type: CivilizationRangeType.All;
}
export function allCivilizations(): AllCivilizationRange {
  return {type: CivilizationRangeType.All};
}

export interface AllWithoutCivilizationRange extends CivilizationRangeBase {
  type: CivilizationRangeType.AllWithout;
  without: Civilization[];
}
export function allCivilizationsWithout(
  civilizations: Civilization[]
): AllWithoutCivilizationRange {
  return {type: CivilizationRangeType.AllWithout, without: civilizations};
}

export interface OnlyCivilizationRange extends CivilizationRangeBase {
  type: CivilizationRangeType.Only;
  only: Civilization[];
}
export function onlyCivilizations(civilizations: Civilization[]): OnlyCivilizationRange {
  return {type: CivilizationRangeType.Only, only: civilizations};
}

export type CivilizationRange =
  | AllCivilizationRange
  | AllWithoutCivilizationRange
  | OnlyCivilizationRange;

export const Aztecs: Civilization = {
  id: 'aztecs',
  name: 'Aztèques',
  strengths: [CivilizationStrength.Infantry, CivilizationStrength.Monks],
  bonuses: CivilizationBonuses.AztecsBonuses,
  baseImg: aztecs,
  hoverImg: aztecsHover,
  pressedImg: aztecsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Aztecs_',
};
export const Berbers: Civilization = {
  id: 'berbers',
  name: 'Berbères',
  strengths: [CivilizationStrength.Cavalry, CivilizationStrength.Navy],
  bonuses: CivilizationBonuses.BerbersBonuses,
  baseImg: berber,
  hoverImg: berberHover,
  pressedImg: berberPressed,
  url: 'https://ageofempires.fandom.com/wiki/Berbers',
};
export const Britons: Civilization = {
  id: 'britons',
  name: 'Britanniques',
  strengths: [CivilizationStrength.Archers],
  bonuses: CivilizationBonuses.BritonsBonuses,
  baseImg: britons,
  hoverImg: britonsHover,
  pressedImg: britonsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Britons',
};
export const Bulgarians: Civilization = {
  id: 'bulgarians',
  name: 'Bulgares',
  strengths: [CivilizationStrength.Infantry, CivilizationStrength.Cavalry],
  bonuses: CivilizationBonuses.BulgariansBonuses,
  baseImg: bulgarians,
  hoverImg: bulgariansHover,
  pressedImg: bulgariansPressed,
  url: 'https://ageofempires.fandom.com/wiki/Bulgarians',
};
export const Burmese: Civilization = {
  id: 'burmese',
  name: 'Birmans',
  strengths: [CivilizationStrength.Monks, CivilizationStrength.Elephants],
  bonuses: CivilizationBonuses.BurmeseBonuses,
  baseImg: burmese,
  hoverImg: burmeseHover,
  pressedImg: burmesePressed,
  url: 'https://ageofempires.fandom.com/wiki/Burmese',
};
export const Byzantines: Civilization = {
  id: 'byzantines',
  name: 'Byzantins',
  strengths: [CivilizationStrength.Defense],
  bonuses: CivilizationBonuses.ByzantinesBonuses,
  baseImg: byzantines,
  hoverImg: byzantinesHover,
  pressedImg: byzantinesPressed,
  url: 'https://ageofempires.fandom.com/wiki/Byzantines',
};
export const Celts: Civilization = {
  id: 'celts',
  name: 'Celtes',
  strengths: [CivilizationStrength.Infantry, CivilizationStrength.SiegeWeapons],
  bonuses: CivilizationBonuses.CeltsBonuses,
  baseImg: celts,
  hoverImg: celtsHover,
  pressedImg: celtsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Celts',
};
export const Chinese: Civilization = {
  id: 'chinese',
  name: 'Chinois',
  strengths: [CivilizationStrength.Archers],
  bonuses: CivilizationBonuses.ChineseBonuses,
  baseImg: chinese,
  hoverImg: chineseHover,
  pressedImg: chinesePressed,
  url: 'https://ageofempires.fandom.com/wiki/Chinese_',
};
export const Cumans: Civilization = {
  id: 'cumans',
  name: 'Coumans',
  strengths: [CivilizationStrength.Cavalry],
  bonuses: CivilizationBonuses.CumansBonuses,
  baseImg: cumans,
  hoverImg: cumansHover,
  pressedImg: cumansPressed,
  url: 'https://ageofempires.fandom.com/wiki/Cumans',
};
export const Ethiopians: Civilization = {
  id: 'ethiopians',
  name: 'Ethiopiens',
  strengths: [CivilizationStrength.Archers, CivilizationStrength.SiegeWeapons],
  bonuses: CivilizationBonuses.EthiopiansBonuses,
  baseImg: ethiopians,
  hoverImg: ethiopiansHover,
  pressedImg: ethiopiansPressed,
  url: 'https://ageofempires.fandom.com/wiki/Ethiopians',
};
export const Franks: Civilization = {
  id: 'franks',
  name: 'Francs',
  strengths: [CivilizationStrength.Cavalry],
  bonuses: CivilizationBonuses.FranksBonuses,
  baseImg: franks,
  hoverImg: franksHover,
  pressedImg: franksPressed,
  url: 'https://ageofempires.fandom.com/wiki/Franks',
};
export const Goths: Civilization = {
  id: 'goths',
  name: 'Goths',
  strengths: [CivilizationStrength.Infantry],
  bonuses: CivilizationBonuses.GothsBonuses,
  baseImg: goths,
  hoverImg: gothsHover,
  pressedImg: gothsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Goths',
};
export const Huns: Civilization = {
  id: 'huns',
  name: 'Huns',
  strengths: [CivilizationStrength.Cavalry],
  bonuses: CivilizationBonuses.HunsBonuses,
  baseImg: huns,
  hoverImg: hunsHover,
  pressedImg: hunsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Huns',
};
export const Incas: Civilization = {
  id: 'incas',
  name: 'Incas',
  strengths: [CivilizationStrength.Infantry],
  bonuses: CivilizationBonuses.IncasBonuses,
  baseImg: inca,
  hoverImg: incaHover,
  pressedImg: incaPressed,
  url: 'https://ageofempires.fandom.com/wiki/Incas_',
};
export const Indians: Civilization = {
  id: 'indians',
  name: 'Indiens',
  strengths: [CivilizationStrength.Camel, CivilizationStrength.GunPowder],
  bonuses: CivilizationBonuses.IndiansBonuses,
  baseImg: indians,
  hoverImg: indiansHover,
  pressedImg: indiansPressed,
  url: 'https://ageofempires.fandom.com/wiki/Indians_',
};
export const Italians: Civilization = {
  id: 'italians',
  name: 'Italiens',
  strengths: [CivilizationStrength.Archers, CivilizationStrength.Navy],
  bonuses: CivilizationBonuses.ItaliansBonuses,
  baseImg: italians,
  hoverImg: italiansHover,
  pressedImg: italiansPressed,
  url: 'https://ageofempires.fandom.com/wiki/Italians',
};
export const Japanese: Civilization = {
  id: 'japanese',
  name: 'Japonais',
  strengths: [CivilizationStrength.Infantry],
  bonuses: CivilizationBonuses.JapaneseBonuses,
  baseImg: japanese,
  hoverImg: japaneseHover,
  pressedImg: japanesePressed,
  url: 'https://ageofempires.fandom.com/wiki/Japanese_',
};
export const Khmer: Civilization = {
  id: 'khmer',
  name: 'Khmers',
  strengths: [CivilizationStrength.SiegeWeapons, CivilizationStrength.Elephants],
  bonuses: CivilizationBonuses.KhmerBonuses,
  baseImg: khmer,
  hoverImg: khmerHover,
  pressedImg: khmerPressed,
  url: 'https://ageofempires.fandom.com/wiki/Khmer',
};
export const Koreans: Civilization = {
  id: 'koreans',
  name: 'Coréens',
  strengths: [CivilizationStrength.Tower, CivilizationStrength.Navy],
  bonuses: CivilizationBonuses.KoreansBonuses,
  baseImg: koreans,
  hoverImg: koreansHover,
  pressedImg: koreansPressed,
  url: 'https://ageofempires.fandom.com/wiki/Koreans',
};
export const Lithuanians: Civilization = {
  id: 'lithuanians',
  name: 'Lithuaniens',
  strengths: [CivilizationStrength.Cavalry, CivilizationStrength.Monks],
  bonuses: CivilizationBonuses.LithuaniansBonuses,
  baseImg: lithuanians,
  hoverImg: lithuaniansHover,
  pressedImg: lithuaniansPressed,
  url: 'https://ageofempires.fandom.com/wiki/Lithuanians',
};
export const Magyars: Civilization = {
  id: 'magyars',
  name: 'Hongrois',
  strengths: [CivilizationStrength.Cavalry],
  bonuses: CivilizationBonuses.MagyarsBonuses,
  baseImg: magyars,
  hoverImg: magyarsHover,
  pressedImg: magyarsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Magyars',
};
export const Malay: Civilization = {
  id: 'malay',
  name: 'Malais',
  strengths: [CivilizationStrength.Infantry, CivilizationStrength.Navy],
  bonuses: CivilizationBonuses.MalayBonuses,
  baseImg: malay,
  hoverImg: malayHover,
  pressedImg: malayPressed,
  url: 'https://ageofempires.fandom.com/wiki/Malay',
};
export const Malians: Civilization = {
  id: 'malians',
  name: 'Maliens',
  strengths: [CivilizationStrength.Infantry],
  bonuses: CivilizationBonuses.MaliansBonuses,
  baseImg: malians,
  hoverImg: maliansHover,
  pressedImg: maliansPressed,
  url: 'https://ageofempires.fandom.com/wiki/Malians',
};
export const Mayans: Civilization = {
  id: 'mayans',
  name: 'Mayas',
  strengths: [CivilizationStrength.Archers],
  bonuses: CivilizationBonuses.MayansBonuses,
  baseImg: mayans,
  hoverImg: mayansHover,
  pressedImg: mayansPressed,
  url: 'https://ageofempires.fandom.com/wiki/Mayans',
};
export const Mongols: Civilization = {
  id: 'mongols',
  name: 'Mongols',
  strengths: [CivilizationStrength.CavalryArchers],
  bonuses: CivilizationBonuses.MongolsBonuses,
  baseImg: mongols,
  hoverImg: mongolsHover,
  pressedImg: mongolsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Mongols',
};
export const Persians: Civilization = {
  id: 'persians',
  name: 'Perses',
  strengths: [CivilizationStrength.Cavalry],
  bonuses: CivilizationBonuses.PersiansBonuses,
  baseImg: persians,
  hoverImg: persiansHover,
  pressedImg: persiansPressed,
  url: 'https://ageofempires.fandom.com/wiki/Persians_',
};
export const Portuguese: Civilization = {
  id: 'portuguese',
  name: 'Portugais',
  strengths: [CivilizationStrength.Navy, CivilizationStrength.GunPowder],
  bonuses: CivilizationBonuses.PortugueseBonuses,
  baseImg: portuguese,
  hoverImg: portugueseHover,
  pressedImg: portuguesePressed,
  url: 'https://ageofempires.fandom.com/wiki/Portuguese_',
};
export const Saracens: Civilization = {
  id: 'saracens',
  name: 'Sarrasins',
  strengths: [CivilizationStrength.Cavalry, CivilizationStrength.Navy],
  bonuses: CivilizationBonuses.SaracensBonuses,
  baseImg: saracens,
  hoverImg: saracensHover,
  pressedImg: saracensPressed,
  url: 'https://ageofempires.fandom.com/wiki/Saracens',
};
export const Slavs: Civilization = {
  id: 'slavs',
  name: 'Slaves',
  strengths: [CivilizationStrength.Infantry, CivilizationStrength.SiegeWeapons],
  bonuses: CivilizationBonuses.SlavsBonuses,
  baseImg: slavs,
  hoverImg: slavsHover,
  pressedImg: slavsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Slavs',
};
export const Spanish: Civilization = {
  id: 'spanish',
  name: 'Espagnols',
  strengths: [CivilizationStrength.GunPowder, CivilizationStrength.Monks],
  bonuses: CivilizationBonuses.SpanishBonuses,
  baseImg: spanish,
  hoverImg: spanishHover,
  pressedImg: spanishPressed,
  url: 'https://ageofempires.fandom.com/wiki/Spanish_',
};
export const Tatars: Civilization = {
  id: 'tatars',
  name: 'Tatars',
  strengths: [CivilizationStrength.CavalryArchers],
  bonuses: CivilizationBonuses.TatarsBonuses,
  baseImg: tatars,
  hoverImg: tatarsHover,
  pressedImg: tatarsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Tatars',
};
export const Teutons: Civilization = {
  id: 'teutons',
  name: 'Teutons',
  strengths: [CivilizationStrength.Infantry],
  bonuses: CivilizationBonuses.TeutonsBonuses,
  baseImg: teutons,
  hoverImg: teutonsHover,
  pressedImg: teutonsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Teutons',
};
export const Turks: Civilization = {
  id: 'turks',
  name: 'Turcs',
  strengths: [CivilizationStrength.GunPowder],
  bonuses: CivilizationBonuses.TurksBonuses,
  baseImg: turks,
  hoverImg: turksHover,
  pressedImg: turksPressed,
  url: 'https://ageofempires.fandom.com/wiki/Turks',
};
export const Vietnamese: Civilization = {
  id: 'vietnamese',
  name: 'Vietnamese',
  strengths: [CivilizationStrength.Archers],
  bonuses: CivilizationBonuses.VietnameseBonuses,
  baseImg: vietnamese,
  hoverImg: vietnameseHover,
  pressedImg: vietnamesePressed,
  url: 'https://ageofempires.fandom.com/wiki/Vietnamese',
};
export const Vikings: Civilization = {
  id: 'vikings',
  name: 'Vikings',
  strengths: [CivilizationStrength.Infantry, CivilizationStrength.Navy],
  bonuses: CivilizationBonuses.VikingsBonuses,
  baseImg: vikings,
  hoverImg: vikingsHover,
  pressedImg: vikingsPressed,
  url: 'https://ageofempires.fandom.com/wiki/Vikings',
};

export const civilizationRegistry: Civilization[] = [
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
];
