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
      <List dense>
        {tips.map((tip, tipIndex) => (
          <ListItem key={tipIndex}>
            <ListItemText primary={tip} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

function FirstStrike() {
  const classes = useStyles();

  const enemies = [
    "Guard Dog",
    "Sweeper",
    "Guard Scorpion",
    "Shock Troopers",
    "Roche (backup)",
    "Enigmatic Spectre (backup)",
  ];

  return (
    <>
      <Typography variant="h5" paragraph>
        First Strike
      </Typography>
      <Typography className={classes.paragraph}>
        For this route to work it's mandatory to get First Strike in Chapter 4,
        which you get by completing "The Stagger Effect Pt.1" battle intel. To
        do it you must fill an ATB bar using any "triangle" move (Punisher,
        Overcharge, Whirl) when the enemy is staggered 10 times. Sometimes the
        passive ATB gain will "steal" a bar from you, so pay attention. If you
        follow the instructions for the fights you should be able to get it.
        Those are the enemies where you can do it:
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

function AtbBoost() {
  const classes = useStyles();

  const enemies = [
    "Security Officer (Chapter 1 escape, Chapter 2/4 as backup)",
    "Elite Security Officer (Johnny fight)",
    "Grenadier (Chapter 4)",
    "Elite Grenadier (Chapter 4)",
    "Riot Trooper (Chapter 4)",
    "Shock Trooper (Chapter 1)",
    "Guard Dog (Chapter 1)",
    "Monodrive (Chapter 1 after Scorpion)",
    "Sentry Ray (Chapter 1)",
    "Sweeper (Chapter 1)",
    "The Huntsman",
    "Roche",
    "Guard Scorpion",
    "Mysterious Spectre",
    "Enigmatic Spectre",
  ];

  return (
    <>
      <Typography variant="h5" paragraph>
        ATB Boost
      </Typography>
      <Typography className={classes.paragraph}>
        Similiarly, we also need to buy ATB Boost in Chapter 4 by completing
        "The Stagger Effect Pt.2" battle intel. For this you need to stagger 15
        different enemy types until the end of Chapter 4. If you follow the
        instructions for the fights you should be able to get it. The list is
        the following:
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

function AtbAssist() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" paragraph>
        ATB Assist
      </Typography>
      <Typography className={classes.paragraph} paragraph>
        We also buy two materias from Chadley in chapter 14 that can be missed.
        One of them is ATB Assist. To get this materia you need to complete the
        "Refocus Analysis" battle intel which is done by using Refocus two
        times. One of them is in chapter 10 on the 3 Sahagins fight. Be careful
        that the Refocus animation should end for it to count. The other is in
        chapter 13 on Failed Experiment. If you miss it on the Sahagins fight,
        equip Refocus on Barret and use Blizzara All on the three Wererats at
        the start of his solo section in Chapter 13.
      </Typography>
    </>
  );
}

function AtbStagger() {
  const classes = useStyles();

  const enemies = [
    "Elite Riot Trooper (Chapter 7)",
    "Elite Shock Trooper (Chapter 7)",
    "Helitrooper (Chapter 12)",
    "Bloodhound (Chapter 13)",
    "Laser Cannon (Chapter 7)",
    "Sentry Launcher (Chapter 5)",
    "Sentry Gun Prototype (Chapter 6)",
    "Slug-Ray (Chapter 5 inside the train)",
    "Cutter (Chapter 7)",
    "Grungy Bandit (Chapter 13)",
    "Lesser Drake (Chapter 9)",
    "Cerulean Drake (Chapter 11)",
    "Grashtrike (Chapter 5)",
    "Queen Grashtrike (Chapter 5)",
    "Terpsicolt (Chapter 6)",
    "Hedgehog Pie (Chapter 8, first fight saving the children)",
    "Sahagin (Chapter 10)",
    "Reno",
    "Rude",
    "Crab Warden",
    "Air Buster",
    "Hell House",
    "Abzu",
    "Eligor",
    "Unknown Entity",
  ];

  const backupEnemies = [
    "Sentry Gun (Thunder if missed the Helitrooper)",
    "Wererat (Blizzara on chapter 13 as solo Barret)",
    "Gorger (Blizzara on chapter 13 as solo Barret)",
  ];

  return (
    <>
      <Typography variant="h5" paragraph>
        ATB Stagger
      </Typography>
      <Typography className={classes.paragraph}>
        The other materia that we buy in chapter 14 is ATB Stagger, which is
        done by completing "The Stagger Effect Pt.4" battle intel. It's similar
        to ATB Boost, but this time we need to stagger 40 different enemy types.
        The list is the same as ATB Boost plus the following:
      </Typography>
      <List dense>
        {enemies.map((enemy, enemyIndex) => (
          <ListItem key={enemyIndex}>
            <ListItemText primary={enemy} />
          </ListItem>
        ))}
      </List>
      <Typography className={classes.paragraph}>
        If you missed any or are not sure, here are some quick backups to get
        additional staggers:
      </Typography>
      <List dense>
        {backupEnemies.map((enemy, enemyIndex) => (
          <ListItem key={enemyIndex}>
            <ListItemText primary={enemy} />
          </ListItem>
        ))}
      </List>
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

function Thanks() {
  const classes = useStyles();

  const people = [
    "Closetowar: for creating a lot of strats and the basis of this route in general",
    "Hello1nternet: for coming up with a lot of crazy ideas for boss fights which improved them a lot",
    "Ffamran: for writing the compendium which was a big help in the entire routing process and also for creating some sick strats",
    "BlackLaMamba: for the Roche bike minigame research and some nice fight strats",
    "Goran and ambcd33: for contributing with some nice strats",
  ];

  return (
    <>
      <Typography variant="h5" paragraph>
        Thanks!
      </Typography>
      <Typography className={classes.paragraph}>
        I wrote these notes but a lot of the strats and route listed here are
        all thanks to the work of members of the community. In special, I'd like
        to thank:
      </Typography>
      <List dense>
        {people.map((person, personIndex) => (
          <ListItem key={personIndex}>
            <ListItemText primary={person} />
          </ListItem>
        ))}
      </List>
      <Typography className={classes.paragraph} paragraph>
        I only said some key points of some members there but everyone helped a
        lot in the entire process! And we also had help from other people so I'd
        like to thank everyone who contributed to where we came so far!
      </Typography>
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
          <FirstStrike />
          <AtbBoost />
          <AtbAssist />
          <AtbStagger />
          <RecommendedSettings />
          <Thanks />
        </Box>
      </Card>
    </>
  );
}

export default Introduction;
