import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import palette from "./palette";

const useStyles = makeStyles((theme) => ({
  nestedList: {
    marginLeft: theme.spacing(2),
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

  return (
    <Card color={palette.shop}>
      <List dense subheader={<ListSubheader>{name}</ListSubheader>}>
        {sell && sell.length > 0 && (
          <>
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
          </>
        )}
        {buy && buy.length > 0 && (
          <>
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
          </>
        )}
      </List>
    </Card>
  );
}

export default Shop;
