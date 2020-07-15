import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Introduction from "./Introduction";

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
      <Introduction />
      {children}
    </>
  );
}

export default Route;
