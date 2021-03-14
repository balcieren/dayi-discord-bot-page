import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: { borderRadius: "xl", _focus: { boxShadow: "none" } },
    },
  },
  colors: {
    gray: {
      "900": "#171717",
      "800": "#262626",
      "700": "#404040",
      "600": "#525252",
      "500": "#737373",
      "400": "#A3A3A3",
      "300": "#D4D4D4",
      "200": "#E5E5E5",
      "100": "#F5F5F5",
      "50": "#FAFAFA",
    },
  },
});
