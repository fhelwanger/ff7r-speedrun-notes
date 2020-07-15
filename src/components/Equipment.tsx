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

export interface EquipmentProps {
  characters: Array<{
    name: string;
    equipments: Array<{ name: string }>;
  }>;
}

function Equipment({ characters }: EquipmentProps) {
  const classes = useStyles();

  return (
    <List dense subheader={<ListSubheader>Equipment</ListSubheader>}>
      {characters.map((character, characterIndex) => (
        <React.Fragment key={characterIndex}>
          <ListItem>
            <ListItemText
              primary={character.name}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
          <List dense disablePadding className={classes.nestedList}>
            {character.equipments.map((equipment, equipmentIndex) => (
              <ListItem key={equipmentIndex}>
                <ListItemText
                  primary={equipment.name}
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

export default Equipment;
