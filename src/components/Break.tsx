import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import { cardsPalette } from "./palette";

export interface BreakProps {
  time: string;
  description?: string;
}

function Break({ time, description }: BreakProps) {
  const settings = React.useContext(SettingsContext);

  if (!settings.showBreaks) {
    return null;
  }

  return (
    <Card color={cardsPalette.break}>
      <List dense>
        <ListItem>
          <ListItemText primary={`Break: ${time}`} secondary={description} />
        </ListItem>
      </List>
    </Card>
  );
}

export default Break;
