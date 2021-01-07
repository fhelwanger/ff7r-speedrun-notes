import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import { cardsPalette } from "./palette";

export interface HealProps {
  description: string;
}

function Heal({ description }: HealProps) {
  const settings = React.useContext(SettingsContext);

  if (!settings.showHeal) {
    return null;
  }

  return (
    <Card color={cardsPalette.heal}>
      <List dense>
        <ListItem>
          <ListItemText primary="Heal" secondary={description} />
        </ListItem>
      </List>
    </Card>
  );
}

export default Heal;
