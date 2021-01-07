import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import { cardsPalette } from "./palette";

export interface BoxProps {
  description: string;
}

function Box({ description }: BoxProps) {
  const settings = React.useContext(SettingsContext);

  if (!settings.showBox) {
    return null;
  }

  return (
    <Card color={cardsPalette.box}>
      <List dense>
        <ListItem>
          <ListItemText primary="Break boxes" secondary={description} />
        </ListItem>
      </List>
    </Card>
  );
}

export default Box;
