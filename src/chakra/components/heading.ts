import { ComponentStyleConfig } from "@chakra-ui/react";

export const HeadingStyles: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: "Poppins",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "lg",
    color: "grey.900",
    display: "inline-block",
    width: "auto",
    position: "relative",
    _after: {
      position: "absolute",
      content: `""`,
      bottom: -1,
      left: 0,
      width: "55%",
      height: 1,
      bg: "primary.700",
      transition: "all ease-in-out 1s",
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};
