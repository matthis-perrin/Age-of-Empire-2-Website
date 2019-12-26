export enum ArmorType {
  Infantry,
  Archer,
  Cavalry,
  SiegeWeapon,
  GunPowderUnit,
  Ship,
  FishingShip,
  TurtleShip,
  Building,
  StandardBuilding,
  Castle,
  UniqueUnit,
  CavalryArcher,
  WarElephant,
  Camel,
  Mameluke,
  StoneDefense,
  EagleWarrior,
  Spearman,
  Monk,
  Condottiero,
  Ram,
  WallAndGate,
}

export interface Armor {
  melee: number;
  pierce: number;
  types: ArmorType[];
  bonuses?: Map<ArmorType, number>;
}

export enum DommageType {
  Melee,
  Pierce,
}

export interface Dommage {
  melee: number;
  pierce: number;
}

export enum AttackType {
  None,
  CaC,
  Range,
  Conversion,
}

interface AttackBase {
  type: AttackType;
  rateOfFire: number;
}

interface DommageAttack extends AttackBase {
  frameDelay?: number;
  areaOfDamage?: number;
  dommage: Dommage;
  bonuses: Map<ArmorType, number>;
}

export interface NoAttack {
  type: AttackType.None;
}

export interface CaCAttack extends DommageAttack {
  type: AttackType.CaC;
}

export interface RangeAttack extends DommageAttack {
  type: AttackType.Range;
  range: number;
  minimumRange?: number;
  accuracy: number;
  projectileSpeed: number | undefined;
}

export interface ConversionAttack extends AttackBase {
  type: AttackType.Conversion;
  conversion: number;
}

export type Attack = CaCAttack | RangeAttack | ConversionAttack | NoAttack;
