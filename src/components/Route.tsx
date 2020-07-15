import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export interface RouteProps {
  title: string;
  children?: React.ReactNode;
}

function Route({ title, children }: RouteProps) {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        paragraph
        className={classes.title}
      >
        {title}
      </Typography>
        {children}
    </>
  );
}

export default Route;
