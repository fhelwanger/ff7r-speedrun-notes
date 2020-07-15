import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import { cardsPalette } from "./palette";

export interface DialogueProps {
  optionText: string;
  optionPosition: "1st" | "2nd" | "3rd";
  when: string;
}

function Dialogue({ optionText, optionPosition, when }: DialogueProps) {
  const settings = React.useContext(SettingsContext);

  if (!settings.showDialogue) {
    return null;
  }

  let text = `Choose "${optionText}" (${optionPosition}) ${when}`;

  return (
    <Card color={cardsPalette.dialogue}>
      <List dense subheader={<ListSubheader>Dialogue</ListSubheader>}>
        <ListItem>
          <ListItemText primary={text} />
        </ListItem>
      </List>
    </Card>
  );
}

export default Dialogue;
