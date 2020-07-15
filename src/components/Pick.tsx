import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Card from "./Card";
import palette from "./palette";

export interface PickProps {
  item: string;
  description?: string;
  optional?: boolean;
}

function Pick({ item, description, optional }: PickProps) {
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
