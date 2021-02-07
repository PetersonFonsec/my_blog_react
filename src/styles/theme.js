import {
  blue,
  green,
  black,
  dark,
  white,
  light,
  lighter,
  gray,
  breakpoints,
} from "./variaves";

export const defaultTheme = {
  darkTheme: false,

  background: {
    primary: white,
    secundary: light,
    tertiary: green,
    contrast: blue,
  },

  colors: {
    primary: black,
    secundary: white,
    tertiary: gray,
    contrast: blue,
  },

  breakpoints,
};

export const darkTheme = {
  darkTheme: true,

  background: {
    primary: black,
    secundary: dark,
    tertiary: blue,
    contrast: green,
  },

  colors: {
    primary: white,
    secundary: white,
    tertiary: lighter,
    contrast: green,
  },

  breakpoints,
};
