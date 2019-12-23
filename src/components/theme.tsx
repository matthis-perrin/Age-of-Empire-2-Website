export const Palette = {
  Turquoise: '#1ABC9C',
  GreenSea: '#16A085',
  Emerald: '#2ECC71',
  Nephritis: '#27AE60',
  PeterRiver: '#3498DB',
  BelizeHole: '#2980B9',
  Amethyst: '#9B59B6',
  Wisteria: '#8E44AD',
  WetAsphalt: '#34495E',
  MidnightBlue: '#2C3E50',
  SunFlower: '#F1C40F',
  Orange: '#F39C12',
  Carrot: '#E67E22',
  Pumpkin: '#D35400',
  Alizarin: '#E74C3C',
  Pomegranate: '#C0392B',
  Clouds: '#ECF0F1',
  Silver: '#BDC3C7',
  Concrete: '#95A5A6',
  Asbestos: '#7F8C8D',
  White: '#FFFFFF',
  Black: '#000000',
  Transparent: 'transparent',
};

/* eslint-disable no-magic-numbers,no-bitwise */
function lighten(color: string, amount: number): string {
  const lightenColorComponent = (c: number, amt: number): number => {
    let newC = c;
    if (amt < 0) {
      newC = c * 1 - amt;
    } else if (amt > 0) {
      newC = c + (255 - c) * amt;
    }
    return Math.max(0, Math.min(255, Math.round(newC)));
  };
  const colorHex = color.slice(1); // Remove #
  const colorInt = parseInt(colorHex, 16);
  const red = lightenColorComponent(colorInt >> 16, amount);
  const green = lightenColorComponent(colorInt & 0x0000ff, amount);
  const blue = lightenColorComponent((colorInt >> 8) & 0x00ff, amount);
  const rgb = (green | (blue << 8) | (red << 16)).toString(16);
  return `#${rgb}`;
}
/* eslint-enable no-magic-numbers,no-bitwise */

const LIGHT_COLOR_RATIO = 0.2;
export const Colors = {
  Success: Palette.Emerald,
  SuccessLight: lighten(Palette.Emerald, LIGHT_COLOR_RATIO),
  Warning: Palette.SunFlower,
  WarningLight: lighten(Palette.SunFlower, LIGHT_COLOR_RATIO),
  Danger: Palette.Alizarin,
  DangerLight: lighten(Palette.Alizarin, LIGHT_COLOR_RATIO),
  Neutral: Palette.Concrete,
  NeutralLight: lighten(Palette.Concrete, LIGHT_COLOR_RATIO),

  PrimaryDark: Palette.MidnightBlue,
  PrimaryLight: Palette.WetAsphalt,
  SecondaryDark: Palette.GreenSea,
  SecondaryLight: Palette.Turquoise,

  TextOnPrimary: Palette.White,
  TextOnSecondary: Palette.White,
};

export const FontWeight = {
  Light: 200,
  SemiLight: 300,
  Regular: 400,
  SemiBold: 600,
  Bold: 700,
  Black: 800,
};

export const theme = {
  base: {
    fontFamily: 'Segoe UI',
  },
};
