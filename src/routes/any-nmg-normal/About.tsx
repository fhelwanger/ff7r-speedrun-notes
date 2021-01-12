import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "../../components/Card";
import IndexTitle from "../../components/IndexTitle";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paragraph: {
    maxWidth: "900px",
  },
  list: {
    fontSize: "1rem",
  },
}));

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
      <ul className={classes.list}>
        {enemies.map((enemy, enemyIndex) => (
          <li key={enemyIndex}>{enemy}</li>
        ))}
      </ul>
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
      <ul className={classes.list}>
        {enemies.map((enemy, enemyIndex) => (
          <li key={enemyIndex}>{enemy}</li>
        ))}
      </ul>
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
      <ul className={classes.list}>
        {enemies.map((enemy, enemyIndex) => (
          <li key={enemyIndex}>{enemy}</li>
        ))}
      </ul>
      <Typography className={classes.paragraph}>
        If you missed any or are not sure, here are some quick backups to get
        additional staggers:
      </Typography>
      <ul className={classes.list}>
        {backupEnemies.map((enemy, enemyIndex) => (
          <li key={enemyIndex}>{enemy}</li>
        ))}
      </ul>
    </>
  );
}

function Thanks() {
  const classes = useStyles();

  const people = [
    "Closetowar: for creating a lot of the strats and the basis of this route in general",
    "Hello1nternet: for coming up with crazy ideas for boss fights which improved them",
    "Ffamran: for writing the compendium which was a big help in the entire routing process and also for creating some sick strats",
    "BlackLaMamba, Goran and ambcd33: for contributing with some Pog strats",
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
      <ul className={classes.list}>
        {people.map((person, personIndex) => (
          <li key={personIndex}>{person}</li>
        ))}
      </ul>
      <Typography className={classes.paragraph} paragraph>
        I only said some key points of some members there but everyone helped a
        lot in the entire process! And we also had help from other people so I'd
        like to thank everyone who contributed to where we came so far!
      </Typography>
    </>
  );
}

function About() {
  const theme = useTheme();

  return (
    <>
      <IndexTitle id="about" text="About the Route" />
      <Card color={theme.palette.text.primary}>
        <Box padding={2} paddingBottom={0}>
          <FirstStrike />
          <AtbBoost />
          <AtbAssist />
          <AtbStagger />
          <Thanks />
        </Box>
      </Card>
    </>
  );
}

export default About;
