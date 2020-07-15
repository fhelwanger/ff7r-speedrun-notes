import React from "react";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import MuiDrawer from "@material-ui/core/Drawer";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { Settings } from "../useSettings";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    marginLeft: "auto",
  },
}));

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  settings: Settings;
  setSettings: (settings: Settings) => void;
}

function Drawer({ open, onClose, settings, setSettings }: DrawerProps) {
  const classes = useStyles();

  return (
    <MuiDrawer open={open} onClose={onClose}>
      <Box width={300}>
        <Toolbar>
          <IconButton
            className={classes.closeButton}
            edge="end"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="Show encounters" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.showEncounters}
                onChange={() =>
                  setSettings({
                    ...settings,
                    showEncounters: !settings.showEncounters,
                  })
                }
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Show bosses" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.showBosses}
                onChange={() =>
                  setSettings({
                    ...settings,
                    showBosses: !settings.showBosses,
                  })
                }
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Show items to pick" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.showPick}
                onChange={() =>
                  setSettings({
                    ...settings,
                    showPick: !settings.showPick,
                  })
                }
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Show optional items to pick" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.showOptionalPick}
                onChange={() =>
                  setSettings({
                    ...settings,
                    showOptionalPick: !settings.showOptionalPick,
                  })
                }
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Show menus" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.showMenus}
                onChange={() =>
                  setSettings({
                    ...settings,
                    showMenus: !settings.showMenus,
                  })
                }
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary="Show shops" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.showShops}
                onChange={() =>
                  setSettings({
                    ...settings,
                    showShops: !settings.showShops,
                  })
                }
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
    </MuiDrawer>
  );
}

export default Drawer;
