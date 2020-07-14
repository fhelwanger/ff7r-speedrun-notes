import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./Header";
import useTheme from "./useTheme";

function App() {
  const { theme, setTheme, muiTheme } = useTheme();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Header theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
