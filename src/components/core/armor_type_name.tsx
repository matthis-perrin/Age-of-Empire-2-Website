import * as React from 'react';

import {ArmorType} from '../../data/damage';

import {Linky} from './linky';

export function ArmorTypeName(props: {armorType: ArmorType}): JSX.Element {
  let label = 'Inconnu';
  if (props.armorType === ArmorType.Archer) {
    label = 'Archers';
  } else if (props.armorType === ArmorType.Building) {
    label = 'Batiments';
  } else if (props.armorType === ArmorType.Camel) {
    label = 'Chameaux';
  } else if (props.armorType === ArmorType.Castle) {
    label = 'Chateaux';
  } else if (props.armorType === ArmorType.Cavalry) {
    label = 'Cavalerie';
  } else if (props.armorType === ArmorType.CavalryArcher) {
    label = 'Archers de cavalerie';
  } else if (props.armorType === ArmorType.Condottiero) {
    label = 'Condottières';
  } else if (props.armorType === ArmorType.EagleWarrior) {
    label = 'Guerriers aigle';
  } else if (props.armorType === ArmorType.FishingShip) {
    label = 'Navires de pêche';
  } else if (props.armorType === ArmorType.GunPowderUnit) {
    label = 'Unités de poudre à canon';
  } else if (props.armorType === ArmorType.Infantry) {
    label = 'Infanterie';
  } else if (props.armorType === ArmorType.Mameluke) {
    label = 'Mamelouks';
  } else if (props.armorType === ArmorType.Monk) {
    label = 'Moines';
  } else if (props.armorType === ArmorType.Ram) {
    label = 'Béliers';
  } else if (props.armorType === ArmorType.Ship) {
    label = 'Navires';
  } else if (props.armorType === ArmorType.SiegeWeapon) {
    label = 'Unités de siège';
  } else if (props.armorType === ArmorType.Spearman) {
    label = 'Piquiers';
  } else if (props.armorType === ArmorType.StandardBuilding) {
    label = 'Batiments standard';
  } else if (props.armorType === ArmorType.StoneDefense) {
    label = 'Défenses en pierre';
  } else if (props.armorType === ArmorType.TurtleShip) {
    label = 'Navires tortue';
  } else if (props.armorType === ArmorType.UniqueUnit) {
    label = 'Unités uniques';
  } else if (props.armorType === ArmorType.WallAndGate) {
    label = 'Murs et portes';
  } else if (props.armorType === ArmorType.WarElephant) {
    label = 'Éléphant de guerre';
  }
  return <Linky text={label} />;
}
ArmorTypeName.displayName = 'ArmorTypeName';
