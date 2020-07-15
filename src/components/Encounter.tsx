import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import palette from "./palette";

const useStyles = makeStyles((theme) => ({
  listItemText: {
    lineHeight: 1,
  },
}));

export interface EncounterProps {
  enemies: string;
  instructions: Array<string>;
}

function Encounter({ enemies, instructions }: EncounterProps) {
  const classes = useStyles();
  const settings = React.useContext(SettingsContext);

  if (!settings.showEncounters) {
    return null;
  }

  return (
    <Card color={palette.encounter}>
      <List dense subheader={<ListSubheader>{enemies}</ListSubheader>}>
        {instructions.map((instruction, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={instruction}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default Encounter;
