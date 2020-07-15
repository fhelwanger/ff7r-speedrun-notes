import React from "react";
import Divider from "@material-ui/core/Divider";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import { cardsPalette } from "./palette";

export interface MenuProps {
  children?: React.ReactNode;
}

function Menu({ children }: MenuProps) {
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

  return <Card color={cardsPalette.menu}>{mappedChildren}</Card>;
}

export default Menu;
