import { ThemeOptions, Components } from "@mui/material/styles";
import themeOptions from "./options";

export const makeThemeOptions: ThemeOptions = {
  components: {
    ...themeOptions,
  } as Components<Omit<ThemeOptions, "components">>,
};
