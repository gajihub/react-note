import { ThemeOptions } from "@mui/material/styles";
import themeOptions from "./options";

export const makeThemeOptions: ThemeOptions = {
  spacing: 8,
  ...themeOptions,
};
