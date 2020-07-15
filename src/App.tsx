import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import AnyPercentNoMajorGlitchesNormal from "./routes/any-nmg-normal";
import useIndex, { IndexContext } from "./useIndex";
import useSettings, { SettingsContext } from "./useSettings";
import useTheme from "./useTheme";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const indexContext = useIndex();
  const { settings, setSettings } = useSettings();
  const { theme, setTheme, muiTheme } = useTheme();

  return (
    <ThemeProvider theme={muiTheme}>
      <SettingsContext.Provider value={settings}>
        <IndexContext.Provider value={indexContext}>
          <CssBaseline />
          <Drawer
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            settings={settings}
            setSettings={setSettings}
          />
          <Header
            theme={theme}
            setTheme={setTheme}
            onMenuClick={() => setMenuOpen(true)}
          />
          <Box className={classes.box}>
            <AnyPercentNoMajorGlitchesNormal />
          </Box>
        </IndexContext.Provider>
      </SettingsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
