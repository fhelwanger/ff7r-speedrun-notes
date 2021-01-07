import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import { cardsPalette } from "./palette";

export interface BenchProps {
  description?: string;
}

function Bench({ description }: BenchProps) {
  const settings = React.useContext(SettingsContext);

  if (!settings.showBench) {
    return null;
  }

  let text = "Use bench";

  return (
    <Card color={cardsPalette.bench}>
      <List dense>
        <ListItem>
          <ListItemText primary={text} secondary={description} />
        </ListItem>
      </List>
    </Card>
  );
}

export default Bench;
