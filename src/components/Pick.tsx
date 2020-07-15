import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import { cardsPalette } from "./palette";

export interface PickProps {
  item: string;
  description?: string;
  optional?: boolean;
}

function Pick({ item, description, optional }: PickProps) {
  const settings = React.useContext(SettingsContext);

  if (!settings.showPick && !optional) {
    return null;
  }

  if (!settings.showOptionalPick && optional) {
    return null;
  }

  let text = `Pick ${item}`;

  if (optional) {
    text += " (optional)";
  }

  return (
    <Card color={optional ? cardsPalette.pickOptional : cardsPalette.pick}>
      <List dense>
        <ListItem>
          <ListItemText primary={text} secondary={description} />
        </ListItem>
      </List>
    </Card>
  );
}

export default Pick;
