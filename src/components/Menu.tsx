import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import { cardsPalette } from "./palette";

const useStyles = makeStyles((theme) => ({
  listItemText: {
    lineHeight: 1,
  },
}));

export interface MenuProps {
  instructions?: Array<string>;
  children?: React.ReactNode;
}

function Menu({ instructions, children }: MenuProps) {
  const classes = useStyles();
  const settings = React.useContext(SettingsContext);

  if (!settings.showMenus) {
    return null;
  }

  const mappedChildren = React.Children.map(children, (child, childIndex) => {
    if (childIndex === 0) {
      return child;
    }

    return (
      <>
        <Divider />
        {child}
      </>
    );
  });

  return (
    <Card color={cardsPalette.menu}>
      {instructions && (
        <List dense>
          {instructions.map((instruction, instructionIndex) => (
            <ListItem key={instructionIndex}>
              <ListItemText
                primary={instruction}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          ))}
        </List>
      )}
      {mappedChildren}
    </Card>
  );
}

export default Menu;
