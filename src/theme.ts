import { theme, extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export default extendTheme({
  config,
  colors: {
    primary: theme.colors.twitter,
  },
});
