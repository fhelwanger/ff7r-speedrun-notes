import React from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Card from "./Card";
import IndexTitle from "./IndexTitle";
import { charactersPalette } from "./palette";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  settingsList: {
    display: "flex",
    flexWrap: "wrap",
  },
  settingsListItem: {
    flexGrow: 1,
    width: "auto",
  },
}));

function Menus() {
  const materiaColors = [
    {
      colorName: "Default",
      color: undefined,
      description: "From the inventory",
    },
    {
      colorName: "Yellow",
      color: charactersPalette.cloud,
      description: "From Cloud",
    },
    {
      colorName: "Green",
      color: charactersPalette.tifa,
      description: "From Tifa",
    },
    {
      colorName: "Red",
      color: charactersPalette.barret,
      description: "From Barret",
    },
    {
      colorName: "Blue",
      color: charactersPalette.aerith,
      description: "From Aerith",
    },
  ];

  return (
    <>
      <Typography variant="h5" paragraph>
        Menus
      </Typography>
      <Typography>
        All materia menus display the final state of the menu. The changes are
        highlighted in bold, and the colors represent where the materia came
        from.
      </Typography>
      <List dense>
        {materiaColors.map((materiaColor, materiaColorIndex) => (
          <ListItem key={materiaColorIndex}>
            <ListItemIcon>
              <Typography
                variant="body2"
                style={{ color: materiaColor.color, fontWeight: "bold" }}
              >
                {materiaColor.colorName}
              </Typography>
            </ListItemIcon>
            <ListItemText primary={materiaColor.description} />
          </ListItem>
        ))}
      </List>
      <Typography paragraph>
        The same thing applies to equipment. If an armor is listed in yellow for
        example, it means that that armor was equipped in Cloud.
      </Typography>
    </>
  );
}

function RecommendedSettings() {
  const classes = useStyles();

  const recommendedSettings = [
    {
      name: "Camera Distance: Out of Battle",
      value: "3",
    },
    {
      name: "Camera Distance: In Battle",
      value: "3",
    },
    {
      name: "Responsiveness",
      value: "5",
    },
    {
      name: "Combo Targeting",
      value: "Free",
    },
  ];

  return (
    <>
      <Typography variant="h5">Recommended Settings</Typography>
      <List className={classes.settingsList}>
        {recommendedSettings.map((setting, settingIndex) => (
          <ListItem key={settingIndex} className={classes.settingsListItem}>
            <ListItemText primary={setting.name} secondary={setting.value} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

function FirstStrike() {
  const enemies = [
    "Guard Dog",
    "Sweeper",
    "Guard Scorpion",
    "Shock Troopers",
    "Huntsman",
    "Roche",
    "Enigmatic Spectre (backup)",
  ];

  return (
    <>
      <Typography variant="h5" paragraph>
        First Strike
      </Typography>
      <Typography>
        For this route to work it's mandatory to get First Strike in Chapter 4.
        To do it you must fill an ATB bar using any "triangle" move (Punisher,
        Overcharge, Whirl) when the enemy is staggered. Sometimes the passive
        ATB gain will "steal" a bar from you, so pay attention. If you follow
        the instructions for the fights you should be able to get it. Those are
        the enemies where you can do it:
      </Typography>
      <List dense>
        {enemies.map((enemy, enemyIndex) => (
          <ListItem key={enemyIndex}>
            <ListItemText primary={enemy} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

function Introduction() {
  const theme = useTheme();

  return (
    <>
      <IndexTitle id="intro" text="Introduction" />
      <Card color={theme.palette.text.primary}>
        <Box padding={2} paddingBottom={0}>
          <Menus />
          <RecommendedSettings />
          <FirstStrike />
        </Box>
      </Card>
    </>
  );
}

export default Introduction;
