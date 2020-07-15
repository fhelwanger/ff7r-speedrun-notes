import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import AnyPercentNoMajorGlitchesNormal from "./routes/any-nmg-normal";
import useTheme from "./useTheme";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const { theme, setTheme, muiTheme } = useTheme();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Header theme={theme} setTheme={setTheme} />
      <Box className={classes.box}>
        <AnyPercentNoMajorGlitchesNormal />
      </Box>
    </ThemeProvider>
  );
}

export default App;
