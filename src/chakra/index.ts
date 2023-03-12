import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { ButtonStyles as Button, HeadingStyles as Heading, InputStyles as Input, TextStyles as Text } from "./components";

const scheme = {
  light: {
    primary: {
      100: "#FAD6C7",
      300: "#F6B093",
      500: "#F18A60",
      700: "#ED642C",
      900: "#CE4912",
    },
    secondary: {
      100: "#65A8F6",
      300: "#358DF3",
      500: "#0E73E7",
      700: "#0B5BB7",
      900: "#084387",
    },
    grey: {
      100: "#FFF",
      300: "#B3B3B3",
      500: "#808080",
      700: "#4D4D4D",
      900: "#1A1A1A",
    },
  },
  dark: {
    primary: {
      900: "#FAD6C7",
      700: "#F6B093",
      500: "#F18A60",
      300: "#ED642C",
      100: "#CE4912",
    },
    secondary: {
      1000:"#000000",
      900: "#65A8F6",
      700: "#358DF3",
      500: "#0E73E7",
      300: "#0B5BB7",
      100: "#084387",
    },
    grey: {
      1000:"#000000",
      900: "#FFF",
      700: "#B3B3B3",
      500: "#808080",
      300: "#4D4D4D",
      200:"#F5F5F5",
      100: "#1A1A1A",
    },
  },
};

function config(mode: "light"|"dark"): ThemeConfig {
  return {
    initialColorMode: mode,
    useSystemColorMode: false
  }
}
export const theme = (mode: "light" | "dark") => extendTheme({
  config: {
    ...config(mode)
  },
  styles: {
    global: {
      "*,*::after,*::before": {
        boxSizing: "border-box",
        fontFamily: "Poppins",
        margin: 0,
        textDecoration: "none"
      },
      body: {
        bg: "grey.100",
        fontFamily: "Poppins",
        boxSizing: "border-box",
        overflowX: "hidden"
      },
      "*:focus": { boxShadow: "none !important" }
    },
  },
  colors: {
   ...scheme[mode]
  },
  breakpoints: {
    xs: "480px",
    sm: "600px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  components: {
    Button,
    IconButton: Button,
    Heading,
    Text
  },
});