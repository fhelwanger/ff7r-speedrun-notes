import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { charactersPalette } from "./palette";

const useStyles = makeStyles((theme) => ({
  nestedList: {
    marginLeft: theme.spacing(2),
  },
  listItemIcon: {
    minWidth: 64,
  },
  listItemText: {
    lineHeight: 1,
  },
}));

export interface MateriaItem {
  name: string;
  status: "unchanged" | "new" | "cloud" | "tifa" | "barret" | "aerith";
}

export interface MateriaProps {
  characters: Array<{
    name: string;
    weapon: Array<MateriaItem>;
    armor: Array<MateriaItem>;
    summon: Array<MateriaItem>;
  }>;
}

function Materia({ characters }: MateriaProps) {
  const classes = useStyles();

  const renderMateria = (materia: Array<MateriaItem>) => {
    return materia.map((x, i) => (
      <Typography
        key={i}
        component="span"
        variant="body2"
        className={classes.listItemText}
        style={{
          fontWeight: x.status !== "unchanged" ? "bold" : undefined,
          color:
            x.status !== "unchanged" && x.status !== "new"
              ? charactersPalette[x.status]
              : undefined,
        }}
      >{`(${x.name || "Empty"}) `}</Typography>
    ));
  };

  return (
    <List dense subheader={<ListSubheader>Materia</ListSubheader>}>
      {characters.map((character, characterIndex) => (
        <React.Fragment key={characterIndex}>
          <ListItem>
            <ListItemText
              primary={character.name}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
          <List dense disablePadding className={classes.nestedList}>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>
                Weapon
              </ListItemIcon>
              <ListItemText
                primary={renderMateria(character.weapon)}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>
                Armor
              </ListItemIcon>
              <ListItemText
                primary={renderMateria(character.armor)}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>
                Summon
              </ListItemIcon>
              <ListItemText
                primary={renderMateria(character.summon)}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </List>
        </React.Fragment>
      ))}
    </List>
  );
}

export default Materia;
