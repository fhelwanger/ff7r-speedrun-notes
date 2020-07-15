import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { IndexContext } from "../useIndex";

const useStyles = makeStyles((theme) => ({
  title: {
    scrollMarginTop: theme.mixins.toolbar.minHeight + "px",
  },
}));

export interface IndexTitleProps {
  id: string;
  text: string;
}

function IndexTitle({ id, text }: IndexTitleProps) {
  const classes = useStyles();
  const { addEntry, removeEntry } = React.useContext(IndexContext);

  React.useEffect(() => {
    addEntry({ id, text });
    return () => removeEntry(id);
  }, [id, text, addEntry, removeEntry]);

  return (
    <Typography id={id} className={classes.title} variant="h4" paragraph>
      {text}
    </Typography>
  );
}

export default IndexTitle;
