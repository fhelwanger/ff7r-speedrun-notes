import React from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import UpIcon from "@material-ui/icons/ArrowUpward";
import RightIcon from "@material-ui/icons/ArrowForward";
import DownIcon from "@material-ui/icons/ArrowDownward";
import LeftIcon from "@material-ui/icons/ArrowBack";
import { charactersPalette } from "./palette";

const useStyles = makeStyles((theme) => ({
  nestedList: {
    marginLeft: theme.spacing(2),
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
  },
  listSubheader: {
    width: "100%",
  },
  listItemText: {
    lineHeight: 1,
  },
  listItemInputs: {
    marginLeft: "10px",
  },
}));

export interface EquipmentProps {
  characters: Array<{
    name: string;
    equipments: Array<{
      name: string;
      source?: "cloud" | "tifa" | "barret" | "aerith";
      inputs?: Array<"up" | "right" | "down" | "left">;
    }>;
  }>;
}

function Equipment({ characters }: EquipmentProps) {
  const classes = useStyles();

  const inputsIcons = {
    up: UpIcon,
    right: RightIcon,
    down: DownIcon,
    left: LeftIcon,
  };

  return (
    <List
      dense
      className={classes.list}
      subheader={
        <ListSubheader className={classes.listSubheader}>
          Equipment
        </ListSubheader>
      }
    >
      {characters.map((character, characterIndex) => (
        <Box key={characterIndex}>
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
                  style={{
                    color: equipment.source
                      ? charactersPalette[equipment.source]
                      : undefined,
                  }}
                />
                {equipment.inputs && equipment.inputs.length > 0 && (
                  <ListItemIcon className={classes.listItemInputs}>
                    {equipment.inputs.map((input, inputIndex) =>
                      React.createElement(inputsIcons[input], {
                        key: inputIndex,
                      })
                    )}
                  </ListItemIcon>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </List>
  );
}

export default Equipment;
