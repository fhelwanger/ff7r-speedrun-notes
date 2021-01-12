import React from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import SquareIcon from "@material-ui/icons/Stop";
import Card from "./Card";
import IndexTitle from "./IndexTitle";
import { charactersPalette, cardsPalette } from "./palette";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paragraph: {
    maxWidth: "900px",
  },
  list: {
    fontSize: "1rem",
  },
}));

function Sections() {
  const classes = useStyles();

  const sections = [
    {
      name: "Encounter",
      color: cardsPalette.encounter,
      description:
        "A normal encounter that you should fight. Every encounter in those notes should be fought otherwise you may run into EXP/AP/Gil problems. You should flee from encounters not listed here.",
    },
    {
      name: "Boss",
      color: cardsPalette.boss,
      description: "A boss fight.",
    },
    {
      name: "Item",
      color: cardsPalette.pick,
      description: "Mandatory item to pick.",
    },
    {
      name: "Optional Item",
      color: cardsPalette.pickOptional,
      description:
        "Optional item to pick. Usually pick those only in your first runs or for marathon safety.",
    },
    {
      name: "Menu",
      color: cardsPalette.menu,
      description: "A menu.",
    },
    {
      name: "Shop",
      color: cardsPalette.shop,
      description: "A shop.",
    },
    {
      name: "Dialogue",
      color: cardsPalette.dialogue,
      description: "When you must choose a non default dialogue option.",
    },
    {
      name: "Healings",
      color: cardsPalette.heal,
      description: "When you need to use items to heal your HP/MP.",
    },
    {
      name: "Shinra Boxes",
      color: cardsPalette.box,
      description:
        "A Shinra box that you need to break. Usually for MP, which is fixed, but also for items when you need to wait anyway, which are random.",
    },
    {
      name: "Bench",
      color: cardsPalette.bench,
      description: "When you should use a bench to rest.",
    },
    {
      name: "Break",
      color: cardsPalette.break,
      description: "One of the few breaks that you have in this speedrun.",
    },
  ];

  return (
    <>
      <Typography variant="h5" paragraph>
        Sections
      </Typography>
      <Typography className={classes.paragraph}>
        The notes are divided in sections. For example, some sections for
        encounters, for bosses, shops, menus, etc. The color at the beginning of
        each section indicates its type. If you open the menu in the left side
        you can select which sections to include to remove clutter, for example,
        if you don't want information about normal encounters. The colors are
        the following:
      </Typography>
      <List dense>
        {sections.map((section, sectionIndex) => (
          <ListItem key={sectionIndex}>
            <ListItemIcon>
              <SquareIcon style={{ fill: section.color }} />
            </ListItemIcon>
            <ListItemText
              primary={section.name}
              secondary={section.description}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

function Menus() {
  const classes = useStyles();

  const materiaColors = [
    {
      colorName: "Purple",
      color: charactersPalette.inventory,
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
      <Typography className={classes.paragraph}>
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
      <Typography className={classes.paragraph} paragraph>
        The same thing applies to equipment. If an armor is listed in yellow for
        example, it means that that armor was equipped in Cloud.
      </Typography>
    </>
  );
}

function Cutscenes() {
  const classes = useStyles();

  const tips = [
    "To skip a cutscene, you can hold down, then press Options + X. The down input gets buffered and you skip it immediately.",
    "If you are not sure if you can skip a cutscene, press Triangle. If you see a Triangle icon in the bottom right side of the screen, you can.",
    "In chapter 8, the scene with a helicopter after the train station is faster to skip by holding Triangle instead of pressing Options.",
  ];

  return (
    <>
      <Typography variant="h5" paragraph>
        Cutscenes
      </Typography>
      <Typography className={classes.paragraph}>
        I didn't include cutscene skips in the notes because after running the
        game a couple of times I found it to be too much information, which made
        the notes harder to follow. So I believe it's something that is better
        learned by just running the game. That said, here are some tips about
        cutscene skipping:
      </Typography>
      <ul className={classes.list}>
        {tips.map((tip, tipIndex) => (
          <li key={tipIndex}>{tip}</li>
        ))}
      </ul>
    </>
  );
}

function RecommendedSettings() {
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
      name: "Combo Targeting",
      value: "Free",
    },
  ];

  return (
    <>
      <Typography variant="h5">Recommended Settings</Typography>
      <List dense>
        {recommendedSettings.map((setting, settingIndex) => (
          <ListItem key={settingIndex}>
            <ListItemText primary={setting.name} secondary={setting.value} />
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
          <Sections />
          <Menus />
          <Cutscenes />
          <RecommendedSettings />
        </Box>
      </Card>
    </>
  );
}

export default Introduction;
