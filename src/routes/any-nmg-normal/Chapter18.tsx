import React from "react";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Shop from "../../components/Shop";

function Chapter18() {
  return (
    <Chapter number={18}>
      <Boss
        name="Bike minigame"
        phases={[
          [
            'Keep right, break after Barret says "How the hell\'d we get saddled with this junker!?".',
            "Combo Security Officers.",
            'Spinning Slash when "Pull over right now!", break.',
            "Hit x2, Defend, Hit x2 Security Officer.",
            "Combo x4 Truck. Spinning Slash.",
          ],
          [
            "Defend last bomb before tunnel.",
            'Break until Red says "there\'s more". Combo x3, Spinning Slash Slug-Rays.',
            'Break until Aerith says "Uh, what the-!?". Combo M.O.T.H.',
            "Take ranged attacks, Spinning Slash, Combo, defend blades.",
            "Take ranged attacks, Sharp Gust when possible, Combo + Spinning Slash when near, defend punches.",
            "Break when it charges.",
          ],
          [
            "Combo, Spinning Slash when both near.",
            "Tank bombs, stay on right side for the ramp.",
          ],
          [
            "Spinning Slash 4 wheels, Combo the rest. Combo x5, Spinning Slash.",
            "Defend Fire, Spinning Slash one side, Combo the rest. Combo x5, Spinning Slash.",
            "Combo, Defend Fire, Spinning Slash one side, Break until throwing, Combo the rest. Combo x5, Spinning Slash.",
            "Try a extra hit or start the stagger with the last hit of the wheels during the staggers.",
          ],
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "HP Up x6", inputs: ["right"] },
          { name: "Mega-Potion x7", inputs: ["down", "down"] },
          { name: "Mega-Potion x3", inputs: ["down"] },
          { name: "Elixir", inputs: ["down", "down", "down"] },
        ]}
      />
      <Menu
        instructions={[
          "Remove Binding/Subversion before equipping HP Ups on Cloud",
        ]}
      >
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                {
                  name: "Platinum Earrings",
                  source: "barret",
                  inputs: ["down", "down"],
                },
                { name: "Fury Ring", source: "aerith", inputs: ["right"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "HP Up", source: "inventory", inputs: ["up"] },
                { name: "HP Up", source: "inventory", inputs: ["up"] },
                { name: "ATB Stagger" },
                { name: "Refocus", source: "inventory", inputs: ["up"] },
              ],
              armor: [
                { name: "Time" },
                { name: "Magnify" },
                { name: "First Strike" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                {
                  name: "HP Up",
                  source: "inventory",
                  inputs: ["square", "up"],
                },
                { name: "HP Up", source: "inventory", inputs: ["up"] },
                { name: "ATB Stagger" },
                { name: "HP Up", source: "inventory", inputs: ["up"] },
                { name: "HP Up", source: "inventory", inputs: ["right"] },
              ],
              armor: [{ name: "Parry" }, { name: "Lightning" }, { name: "" }],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Dialogue optionText="Yeah." optionPosition="2nd" details="to enter" />
      <Encounter
        enemies="Whisper Rubrum, Whisper Viridi, Whisper Croceo"
        instructions={[
          "Cloud: Dash, Counter, Berserk, Focused Thrust Rubrum",
          "Barret: Overcharge Rubrum",
          "Cloud: Punisher full, Berserk, Punisher full, Operator Rubrum",
          "Tifa: Whirl x2, Unbridled",
        ]}
      />
      <Encounter
        enemies="Whisper Rubrum, Whisper Viridi, Whisper Croceo"
        instructions={[
          "Cloud: Dash, Counter, Berserk Rubrum",
          "Barret: Overcharge Rubrum",
          "Cloud: Punisher full, Berserk, Focused Thrust Rubrum",
          "Cloud: Punisher Rubrum, Barret Mega-Potion Tifa",
        ]}
      />
      <Encounter
        enemies="Whisper Rubrum"
        instructions={[
          "Cloud: Dash, Barret Thundaga, Braver",
          "Barret: TRIPOLOSKI, Starshower x2, Charge x3, Overcharge",
          "Tifa: Omni, Whirl, Combo x6, Whirl",
          "Cloud: Unbridled, Punisher x4, Berserk",
          "Tifa: Combo",
        ]}
      />
      <Encounter
        enemies="Whisper Viridi, Whisper Croceo"
        instructions={[
          "Cloud: TRIPOLOSKI Croceo, Counter, Berserk, TRIPOLOSKI Viridi",
          "Cloud: Punisher full, TRIPOLOSKI, Punisher full Viridi",
          "Barret: Overcharge, TRIPOLOSKI, Thundara, Braver Croceo",
          "Cloud: Berserk, Punisher Croceo, Barret Mega-Potion Cloud",
        ]}
      />
      <Boss
        name="Whisper Rubrum, Whisper Viridi, Whisper Croceo / Whisper Bahamut / Whisper Harbinger"
        phases={[
          ["Cloud: Dash, TRIPOLOSKI Rubrum", "Aerith: Combo"],
          [
            "Cloud: Counter, Aerith Firaga, Aerith ATB Boost, Berserk, Braver",
            "Cloud: Punisher full, Aerith Firaga, Berserk, Braver",
            "Tifa: Starshower x2, Omni, Whirl",
          ],
          [
            "Cloud: TRIPOLOSKI Croceo, 1 ATB, TRIPOLOSKI Rubrum",
            "Cloud: Aerith Thundaga Rubrum (stagger)",
            "Cloud: Berserk, Braver, Operator, Punisher Rubrum",
          ],
          [
            "Tifa: Starshower, Whirl, Aerith Firaga Viridi",
            "Tifa: Whirl, Divekick, Whirl",
          ],
          [
            "Tifa: Whirl/Divekick (stagger)",
            "Cloud: Berserk, Infinity's End Croceo",
            "Tifa: Whirl Croceo",
          ],
          ["Tifa Thunder"],
        ]}
      />
      <Boss
        name="Sephiroth"
        phases={[
          [
            "Cloud: Berserk, TRIPOLOSKI, Punisher x4, Operator",
            "Cloud: Switch to Punisher, Operator, Counter",
            "Cloud: Punisher full, Berserk, TRIPOLOSKI, Braver",
          ],
          [
            "Cloud: Cleave, TRIPOLOSKI",
            "Tifa: Combo x5, Whirl",
            "Cloud: Berserk, Operator, Counter, Operator, Counter, Focused Thrust",
            "Cloud: Launch, Berserk",
            "Tifa: Whirl, Divekick, Whirl, Divekick, Whirl",
          ],
          [
            "Tifa: Braver, Aerith ATB Boost, Whirl, Starshower",
            "Tifa: Aerith -aga, Braver, Whirl (pressure)",
            "Tifa: Aerith Blizzara, Focused Strike, Combo",
            "Cloud: Counter, Operator, Counter (stagger)",
            "Cloud: Unbridled, Berserk, Cross Slash",
            "Tifa: Omni, Whirl, Divekick, Whirl",
          ],
          [
            "Tifa: Cloud Infinity's End",
            "Tifa: Combo x6, Whirl, Starshower x2, Aerith Thundara",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter18;
