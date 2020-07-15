import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import CircleIcon from "@material-ui/icons/RadioButtonUnchecked";
import SquareIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import TriangleIcon from "@material-ui/icons/ChangeHistory";
import XIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  nestedList: {
    marginLeft: theme.spacing(2),
  },
  listItemText: {
    lineHeight: 1,
  },
  shortcutIcon: {
    minWidth: "30px",
  },
}));

export interface BattleSettingsProps {
  characters: Array<{
    name: string;
    shortcuts: Array<{
      shortcut: "circle" | "square" | "triangle" | "x";
      ability: string;
    }>;
  }>;
}

function BattleSettings({ characters }: BattleSettingsProps) {
  const classes = useStyles();

  const icons = {
    circle: CircleIcon,
    square: SquareIcon,
    triangle: TriangleIcon,
    x: XIcon,
  };

  return (
    <List dense subheader={<ListSubheader>Battle Settings</ListSubheader>}>
      {characters.map((character, characterIndex) => (
        <React.Fragment key={characterIndex}>
          <ListItem>
            <ListItemText
              primary={character.name}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
          <List dense disablePadding className={classes.nestedList}>
            {character.shortcuts.map((shortcut, shortcutIndex) => (
              <ListItem key={shortcutIndex}>
                <ListItemIcon className={classes.shortcutIcon}>
                  {React.createElement(icons[shortcut.shortcut])}
                </ListItemIcon>
                <ListItemText
                  primary={shortcut.ability}
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
            ))}
          </List>
        </React.Fragment>
      ))}
    </List>
  );
}

export default BattleSettings;
