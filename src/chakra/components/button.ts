import { ComponentStyleConfig, keyframes } from "@chakra-ui/react";

const animationKeyframes = keyframes`
  0% { width: 0 }
  50% { width: "65%" }
`;

const animation = `${animationKeyframes} .5s ease-in-out`;

export const ButtonStyles: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1em",
    transition: "all ease-in-out .5s",
    px: 4,
    py: 2.5,
    textDecoration: "none",
  },
  sizes: {},
  variants: {
    primary: {
      bg: "primary.700",
      color: "grey.100",
      borderRadius: "md",
      _hover: {
        bg: "primary.900",
      },
    },
    "secondary-line": {
      fontSize: "1.2em",
      p: 2,
      bg: "none",
      color: "grey.900",
      borderWidth: 1.5,
      borderRadius: "md",
      borderColor: "grey.900",
      _hover: {
        bg: "secondary.500",
        borderColor: "secondary.500",
        color: "grey.900",
      },
    },
    secondary: {
      fontSize: "1em",
      p: 2,
      bg: "none",
      color: "grey.900",
      _hover: {
        bg: "secondary.500",
        color: "grey.900",
      },
      _active: {
        bg: "secondary.500",
        color: "grey.900",
      },
    },
    tab: {
      bg: "none",
      color: "grey.900",
      rounded: "false",
      position: "relative",
      width: "auto",
      p: 0,
      py: 0,
      _hover: {
        _after: {
          position: "absolute",
          content: `""`,
          bottom: 1.5,
          left: 0,
          width: "65%",
          height: 1,
          bg: "primary.700",
          animation: animation,
        },
      },
      _active: {
        _after: {
          content: `""`,
          bottom: 1.5,
          left: 0,
          width: "65%",
          height: 1,
          bg: "primary.700",
          position: "absolute",
          animation: animation,
        },
        transition: "all ease-in-out 1s",
      },
    },
  },
  defaultProps: {},
};
