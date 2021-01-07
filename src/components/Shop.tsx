import React from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import UpIcon from "@material-ui/icons/ArrowUpward";
import RightIcon from "@material-ui/icons/ArrowForward";
import DownIcon from "@material-ui/icons/ArrowDownward";
import LeftIcon from "@material-ui/icons/ArrowBack";
import { SettingsContext } from "../useSettings";
import Card from "./Card";
import { cardsPalette } from "./palette";

const useStyles = makeStyles((theme) => ({
  nestedList: {
    marginLeft: theme.spacing(2),
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
  },
  listSubheader: {
    width: "100%",
  },
  listItemText: {
    lineHeight: 1,
  },
  listItemInputs: {
    marginLeft: "10px",
  },
}));

export type ShopInput = "up" | "right" | "down" | "left";

interface ShopListProps {
  items: Array<string | { name: string; inputs?: Array<ShopInput> }>;
}

export interface ShopProps {
  name: string;
  sell?: Array<string | { name: string; inputs?: Array<ShopInput> }>;
  buy?: Array<string | { name: string; inputs?: Array<ShopInput> }>;
  reset?: Array<string | { name: string; inputs?: Array<ShopInput> }>;
}

function ShopList(props: ShopListProps) {
  const classes = useStyles();

  const inputsIcons = {
    up: UpIcon,
    right: RightIcon,
    down: DownIcon,
    left: LeftIcon,
  };

  return (
    <List dense disablePadding className={classes.nestedList}>
      {props.items.map((item, itemIndex) => {
        let name = "";
        let inputs: Array<ShopInput> = [];

        if (typeof item == "string") {
          name = item;
        } else {
          name = item.name;
          inputs = item.inputs || [];
        }

        return (
          <ListItem key={itemIndex}>
            <ListItemText
              primary={name}
              classes={{ primary: classes.listItemText }}
            />
            {inputs.length > 0 && (
              <ListItemIcon className={classes.listItemInputs}>
                {inputs.map((input, inputIndex) =>
                  React.createElement(inputsIcons[input], {
                    key: inputIndex,
                  })
                )}
              </ListItemIcon>
            )}
          </ListItem>
        );
      })}
    </List>
  );
}

function Shop({ name, sell, buy, reset }: ShopProps) {
  const classes = useStyles();
  const settings = React.useContext(SettingsContext);

  if (!settings.showShops) {
    return null;
  }

  return (
    <Card color={cardsPalette.shop}>
      <List
        dense
        className={classes.list}
        subheader={
          <ListSubheader className={classes.listSubheader}>
            {name}
          </ListSubheader>
        }
      >
        {sell && sell.length > 0 && (
          <Box>
            <ListItem>
              <ListItemText
                primary="Sell"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ShopList items={sell} />
          </Box>
        )}
        {buy && buy.length > 0 && (
          <Box>
            <ListItem>
              <ListItemText
                primary="Buy"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ShopList items={buy} />
          </Box>
        )}
        {reset && reset.length > 0 && (
          <Box>
            <ListItem>
              <ListItemText
                primary="Reset"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ShopList items={reset} />
          </Box>
        )}
      </List>
    </Card>
  );
}

export default Shop;
