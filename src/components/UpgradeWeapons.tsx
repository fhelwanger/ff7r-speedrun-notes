import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nestedList: {
    marginLeft: theme.spacing(2),
  },
  listItemText: {
    lineHeight: 1,
  },
}));

export interface UpgradeWeaponsProps {
  characters: Array<{
    name: string;
    weapons: Array<{
      name: string;
      upgrade: string;
    }>;
  }>;
}

function UpgradeWeapons({ characters }: UpgradeWeaponsProps) {
  const classes = useStyles();

  return (
    <List dense subheader={<ListSubheader>Upgrade Weapons</ListSubheader>}>
      {characters.map((character, characterIndex) => (
        <React.Fragment key={characterIndex}>
          <ListItem>
            <ListItemText
              primary={character.name}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
          <List dense disablePadding className={classes.nestedList}>
            {character.weapons.map((weapon, weaponIndex) => (
              <ListItem key={weaponIndex}>
                <ListItemText
                  primary={weapon.name}
                  secondary={weapon.upgrade}
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

export default UpgradeWeapons;
