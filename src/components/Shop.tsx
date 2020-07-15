import React from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
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
}));

export interface ShopProps {
  name: string;
  sell?: Array<string>;
  buy?: Array<string>;
}

function Shop({ name, sell, buy }: ShopProps) {
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
            <List dense disablePadding className={classes.nestedList}>
              {sell.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item}
                    classes={{ primary: classes.listItemText }}
                  />
                </ListItem>
              ))}
            </List>
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
            <List dense disablePadding className={classes.nestedList}>
              {buy.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item}
                    classes={{ primary: classes.listItemText }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </List>
    </Card>
  );
}

export default Shop;
