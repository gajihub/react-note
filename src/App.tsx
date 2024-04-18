import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useTheme } from "./hooks/useTheme";
import { useRoutes } from "react-router-dom";
import pageRoutes from "@/pages/index";

function App() {
  const themeOptions = useTheme();
  const element = useRoutes(pageRoutes);

  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
}

export default App;
