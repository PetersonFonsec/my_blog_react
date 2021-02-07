import {
  blue,
  green,
  black,
  dark,
  white,
  light,
  breakpoints,
} from "./variaves";

export const defaultTheme = {
  background: {
    primary: white,
    secundary: light,
    contrast: blue,
  },

  text: {
    size: {
      normal: 18,
    },
    colors: {
      primary: black,
      secundary: white,
      contrast: blue,
    },
  },

  breakpoints: { ...breakpoints },
};

export const darkTheme = {
  background: {
    primary: black,
    secundary: dark,
    contrast: green,
  },

  text: {
    colors: {
      primary: white,
      secundary: white,
      contrast: green,
    },
  },

  breakpoints: { ...breakpoints },
};
