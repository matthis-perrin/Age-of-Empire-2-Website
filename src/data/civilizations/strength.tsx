export enum CivilizationStrength {
  Defense,
  Tower,
  Infantry,
  Archers,
  Cavalry,
  SiegeWeapons,
  GunPowder,
  Monks,
  Navy,
  Elephants,
  Camel,
  CavalryArchers,
}

const strengthToFrench = new Map<CivilizationStrength, string>([
  [CivilizationStrength.Defense, 'Défence'],
  [CivilizationStrength.Tower, 'Tours'],
  [CivilizationStrength.Infantry, 'Infanterie'],
  [CivilizationStrength.Archers, 'Archers'],
  [CivilizationStrength.Cavalry, 'Cavalerie'],
  [CivilizationStrength.SiegeWeapons, 'Armes de siège'],
  [CivilizationStrength.GunPowder, 'Poudre à canon'],
  [CivilizationStrength.Monks, 'Moines'],
  [CivilizationStrength.Navy, 'Marine'],
  [CivilizationStrength.Elephants, 'Élephants'],
  [CivilizationStrength.Camel, 'Chameaux'],
  [CivilizationStrength.CavalryArchers, 'Archers de cavalerie'],
]);

export function getStrengthLabel(strength: CivilizationStrength): string {
  const value = strengthToFrench.get(strength);
  if (value === undefined) {
    return 'Inconnue';
  }
  return value;
}
