import React from "react";
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
  listItemText: {
    lineHeight: 1,
  },
}));

export interface BossProps {
  name: string;
  phases: Array<{
    name: string;
    instructions: Array<string>;
  }>;
}

function Boss({ name, phases }: BossProps) {
  const classes = useStyles();
  const settings = React.useContext(SettingsContext);

  if (!settings.showBosses) {
    return null;
  }

  return (
    <Card color={cardsPalette.boss}>
      <List dense subheader={<ListSubheader>{name}</ListSubheader>}>
        {phases.map((phase, phaseIndex) => (
          <React.Fragment key={phaseIndex}>
            <ListItem>
              <ListItemText
                primary={phase.name}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <List dense disablePadding className={classes.nestedList}>
              {phase.instructions.map((instruction, instructionIndex) => (
                <ListItem key={instructionIndex}>
                  <ListItemText
                    primary={instruction}
                    classes={{ primary: classes.listItemText }}
                  />
                </ListItem>
              ))}
            </List>
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}

export default Boss;
