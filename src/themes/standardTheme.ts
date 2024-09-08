const colors = {
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_dark: "#292729",
  primary: "#ffa01b",
  primary_burger: "#ff9f1b",
  green: "green",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
  loginSeparate: "#F56A2C",
  placeholder: "#d3d3d3",
} as const;

const fonts = {
  size: {
    XXXS: "0.8rem",
    XXS: "1rem",
    XS: "1.2rem",
    P0: "1.5rem",
    P1: "1.8rem",
    P2: "2rem",
    P3: "2.4rem",
    P4: "3.6rem",
    P5: "4.8rem",
    P6: "6rem",
    p7: "11rem",
  } as const,

  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heavy: 800,
  } as const,
};

const spacing = {
  xxxs: "0.05rem",
  xxs: "0.4rem",
  xs: "0.8rem",
  sm: "1.2rem",
  md: "2rem",
  lg: "3.2rem",
  xl: "5.2rem",
  xxl: "8.4rem",
} as const;

const borderRadius = {
  subtle: 1,
  round: "0.5rem",
  extraRound: "1.5rem",
  largeExtraRound: "3rem",
  circle: "50%",
} as const;

const shadows = {} as const;

const gridUnit = 8;
const sizeIcon = "1.5rem";

type Colors = typeof colors;
type Fonts = typeof fonts;
type BorderRadius = typeof borderRadius;
type Spacing = typeof spacing;

export type ThemeType = {
  colors: Colors;
  fonts: Fonts;
  borderRadius: BorderRadius;
  spacing: Spacing;
  shadows: typeof shadows;
  gridUnit: typeof gridUnit;
  sizeIcon: typeof sizeIcon;
};

export const theme: ThemeType = {
  colors,
  fonts,
  spacing,
  borderRadius,
  shadows,
  gridUnit,
  sizeIcon,
};
