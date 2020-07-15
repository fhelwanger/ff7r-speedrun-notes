import React from "react";
import Divider from "@material-ui/core/Divider";
import Card from "./Card";
import palette from "./palette";

export interface MenuProps {
  children?: React.ReactNode;
}

function Menu({ children }: MenuProps) {
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

  return <Card color={palette.menu}>{mappedChildren}</Card>;
}

export default Menu;
