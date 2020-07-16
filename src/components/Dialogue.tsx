import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import { cardsPalette } from "./palette";

export interface DialogueProps {
  optionText?: string;
  optionPosition?: "1st" | "2nd" | "3rd";
  details?: string;
}

function Dialogue({ optionText, optionPosition, details }: DialogueProps) {
  const settings = React.useContext(SettingsContext);

  if (!settings.showDialogue) {
    return null;
  }

  let text = "";

  if (optionText && optionPosition) {
    text = `Choose "${optionText}" (${optionPosition})`;
  }

  if (details) {
    text += ` ${details}`;
  }

  return (
    <Card color={cardsPalette.dialogue}>
      <List dense>
        <ListItem>
          <ListItemText primary={text.trim()} />
        </ListItem>
      </List>
    </Card>
  );
}

export default Dialogue;
