import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const sizes = {
  md: definePartsStyle({
    container: {
      width: "320px",
      height: "240px",
    },
  }),
  lg: definePartsStyle({
    container: {
      width: "380px",
      height: "280px",
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({ sizes });
