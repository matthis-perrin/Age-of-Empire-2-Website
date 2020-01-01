export type Brand<Type, Name> = Type & {__brand: Name};

export type CivilizationId = Brand<string, 'civilization-id'>;

export const Ids = {
  AztecsId: 'aztecs' as CivilizationId,
  BerbersId: 'berbers' as CivilizationId,
  BritonsId: 'britons' as CivilizationId,
  BulgariansId: 'bulgarians' as CivilizationId,
  BurmeseId: 'burmese' as CivilizationId,
  ByzantinesId: 'byzantines' as CivilizationId,
  CeltsId: 'celts' as CivilizationId,
  ChineseId: 'chinese' as CivilizationId,
  CumansId: 'cumans' as CivilizationId,
  EthiopiansId: 'ethiopians' as CivilizationId,
  FranksId: 'franks' as CivilizationId,
  GothsId: 'goths' as CivilizationId,
  HunsId: 'huns' as CivilizationId,
  IncasId: 'incas' as CivilizationId,
  IndiansId: 'indians' as CivilizationId,
  ItaliansId: 'italians' as CivilizationId,
  JapaneseId: 'japanese' as CivilizationId,
  KhmerId: 'khmer' as CivilizationId,
  KoreansId: 'koreans' as CivilizationId,
  LithuaniansId: 'lithuanians' as CivilizationId,
  MagyarsId: 'magyars' as CivilizationId,
  MalayId: 'malay' as CivilizationId,
  MaliansId: 'malians' as CivilizationId,
  MayansId: 'mayans' as CivilizationId,
  MongolsId: 'mongols' as CivilizationId,
  PersiansId: 'persians' as CivilizationId,
  PortugueseId: 'portuguese' as CivilizationId,
  SaracensId: 'saracens' as CivilizationId,
  SlavsId: 'slavs' as CivilizationId,
  SpanishId: 'spanish' as CivilizationId,
  TatarsId: 'tatars' as CivilizationId,
  TeutonsId: 'teutons' as CivilizationId,
  TurksId: 'turks' as CivilizationId,
  VietnameseId: 'vietnamese' as CivilizationId,
  VikingsId: 'vikings' as CivilizationId,
};

export enum CivilizationRangeType {
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
  without: CivilizationId[];
}
export function allCivilizationsWithout(
  civilizations: CivilizationId[]
): AllWithoutCivilizationRange {
  return {type: CivilizationRangeType.AllWithout, without: civilizations};
}

export interface OnlyCivilizationRange extends CivilizationRangeBase {
  type: CivilizationRangeType.Only;
  only: CivilizationId[];
}
export function onlyCivilizations(civilizations: CivilizationId[]): OnlyCivilizationRange {
  return {type: CivilizationRangeType.Only, only: civilizations};
}

export type CivilizationRange =
  | AllCivilizationRange
  | AllWithoutCivilizationRange
  | OnlyCivilizationRange;
