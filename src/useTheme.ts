import React from "react";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

export type Theme = "light" | "dark";

function useTheme() {
  const themeStorageKey = "THEME";
  const [theme, setTheme] = React.useState<Theme>("dark");

  React.useEffect(() => {
    const themeStorageValue = localStorage.getItem(themeStorageKey);

    if (
      themeStorageValue &&
      (themeStorageValue === "light" || themeStorageValue === "dark")
    ) {
      setTheme(themeStorageValue);
    }
  }, []);

  const muiTheme = React.useMemo(() => {
    return createMuiTheme({
      palette: {
        type: theme,
      },
    });
  }, [theme]);

  return {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(themeStorageKey, theme);
      setTheme(theme);
    },
    muiTheme,
  };
}

export default useTheme;
