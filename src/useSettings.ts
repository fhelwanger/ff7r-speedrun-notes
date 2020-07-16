import React from "react";

export interface Settings {
  showEncounters: boolean;
  showBosses: boolean;
  showPick: boolean;
  showOptionalPick: boolean;
  showMenus: boolean;
  showShops: boolean;
  showDialogue: boolean;
  showBench: boolean;
  showOptionalBench: boolean;
}

const defaultSettings: Settings = {
  showEncounters: true,
  showBosses: true,
  showPick: true,
  showOptionalPick: true,
  showMenus: true,
  showShops: true,
  showDialogue: true,
  showBench: true,
  showOptionalBench: true,
};

export const SettingsContext = React.createContext(defaultSettings);

function useSettings() {
  const settingsStorageKey = "SETTINGS";
  const [settings, setSettings] = React.useState<Settings>(defaultSettings);

  React.useEffect(() => {
    const settingsStorageValue = localStorage.getItem(settingsStorageKey);

    if (settingsStorageValue) {
      setSettings(JSON.parse(settingsStorageValue));
    }
  }, []);

  return {
    settings,
    setSettings: (settings: Settings) => {
      localStorage.setItem(settingsStorageKey, JSON.stringify(settings));
      setSettings(settings);
    },
  };
}

export default useSettings;
