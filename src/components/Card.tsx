import React from "react";
import Box from "@material-ui/core/Box";
import MuiCard from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(1),
  },
  colorBox: {
    height: theme.spacing(0.5),
  },
}));

export interface CardProps {
  color: string;
  children?: React.ReactNode;
}

function Card({ color, children }: CardProps) {
  const classes = useStyles();

  return (
    <MuiCard className={classes.card}>
      <Box className={classes.colorBox} bgcolor={color} />
      {children}
    </MuiCard>
  );
}

export default Card;
