import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import palette from "./palette";

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

  let title = "Pick";

  if (optional) {
    title += " (optional)";
  }

  return (
    <Card color={optional ? palette.pickOptional : palette.pick}>
      <List dense subheader={<ListSubheader>{title}</ListSubheader>}>
        <ListItem>
          <ListItemText primary={item} secondary={description} />
        </ListItem>
      </List>
    </Card>
  );
}

export default Pick;
