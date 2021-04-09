import React from "react";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Shop from "../../components/Shop";
import UpgradeWeapons from "../../components/UpgradeWeapons";

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
            "Hit x2, Hit x2 Security Officer.",
            "Combo x4 Truck. Spinning Slash.",
          ],
          [
            'Break until Red says "there\'s more". Combo x3, Spinning Slash Slug-Rays.',
            'Break until Aerith says "Uh, what the-!?". Combo M.O.T.H.',
            "Take ranged attacks, Spinning Slash, Combo full x5 when near, defend blades.",
            "Take ranged attacks, Sharp Gust when possible, Combo + Spinning Slash when near, defend punches.",
            "Break when charges.",
          ],
          [
            "Combo, Spinning Slash when both near.",
            "Stay on right side for the ramp.",
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
          { name: "Mega-Potion x8", inputs: ["down", "down"] },
          { name: "Mega-Potion x3", inputs: ["down"] },
          { name: "Elixir", inputs: ["down", "down", "down"] },
          { name: "HP Up x5", inputs: ["right"] },
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
                { name: "Heavy-Duty Bracer", source: "barret", inputs: ["up"] },
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
                { name: "Time" },
                { name: "Magnify" },
                { name: "Refocus" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "HP Up", source: "inventory", inputs: ["up"] },
                { name: "HP Up", source: "inventory", inputs: ["up"] },
                { name: "First Strike" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                {
                  name: "HP Up",
                  source: "inventory",
                  inputs: ["square", "up"],
                },
                { name: "HP Up", source: "inventory", inputs: ["up"] },
                { name: "HP Up", source: "inventory", inputs: ["up"] },
                { name: "" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "" }],
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
          "Cloud: Punisher full, Berserk, Punisher full Rubrum, Haste All",
          "Tifa: Whirl x2, Unbridled, Combos Croceo",
          "Move Cloud down",
        ]}
      />
      <Encounter
        enemies="Whisper Rubrum, Whisper Viridi, Whisper Croceo"
        instructions={[
          "Cloud: Dash, Cleave, Counter, Berserk Rubrum",
          "Barret: Overcharge Rubrum",
          "Cloud: Punisher full, Berserk, Focused Thrust Rubrum",
          "Cloud: Punisher Rubrum, Haste All, 2 ATB",
          "Barret Mega-Potion Cloud and Tifa",
        ]}
      />
      <Encounter
        enemies="Whisper Rubrum"
        instructions={[
          "Cloud: Dash, TRIPOLOSKI, Punisher x2, Operator, Counterstance",
          "Tifa: Starshower x2, Omni",
          "Tifa: Combo (2 ATB), Unbridled",
          "Cloud: Berserk, Punisher, swap to Tifa",
        ]}
      />
      <Encounter
        enemies="Whisper Viridi, Whisper Croceo"
        instructions={[
          "Cloud: TRIPOLOSKI Croceo, Counterstance Viridi, Berserk, Punisher (stagger)",
          "Cloud: TRIPOLOSKI, Punisher full, Berserk Viridi",
          "Barret: Overcharge Croceo",
          "Cloud: Braver, TRIPOLOSKI Croceo",
          "Cloud: Punisher full, Berserk, Punisher Croceo",
        ]}
      />
      <Boss
        name="Whisper Rubrum, Whisper Viridi, Whisper Croceo / Whisper Bahamut / Whisper Harbinger"
        phases={[
          ["Cloud: Haste All, Counterstance Rubrum, Berserk Croceo"],
          [
            "Cloud: Counter, Counterstance, Aerith Firaga",
            "Cloud: Punisher full, Aerith Firaga, Berserk, Braver",
            "Tifa: Starshower x2, Omni, Whirl x2",
          ],
          [
            "Cloud: TRIPOLOSKI Croceo, Aerith ATB Boost, 1 ATB, TRIPOLOSKI Rubrum",
            "Cloud: Aerith Thundaga Rubrum (stagger)",
            "Cloud: Berserk, Braver, Operator, Punisher Rubrum",
          ],
          ["Tifa: Starshower x2, Whirl, Aerith Firaga Viridi"],
          [
            "Tifa: Whirl/Divekick (stagger)",
            "Cloud: Berserk, Infinity's End Croceo",
            "Tifa: Whirl Croceo",
          ],
          ["Tifa Thunder"],
        ]}
      />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Tifa",
              weapons: [{ name: "Leather Gloves", upgrade: "Auto - Balanced" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Sephiroth"
        phases={[
          [
            "Cloud: Berserk, Lock, Counterstance, Punisher full, Counterstance",
            "Cloud: Punisher full, Berserk, Punisher x2, TRIPOLOSKI",
          ],
          [
            "Cloud: Cleave, TRIPOLOSKI, Roll",
            "Cloud: Dash, Counter, Counterstance",
            "Cloud: Berserk, Operator, Counter, Counterstance",
            "Cloud: Operator, Counter (stagger), Haste All, Hit",
            "Cloud: (Elixir if needed), Berserk, Whirl, Punisher",
          ],
          [
            "Tifa: Braver, Aerith ATB Boost, Starshower",
            "Tifa: Aerith -aga x2, Whirl x2, Focused Strike x3",
            "Cloud: Focused Thrust, Counter (stagger)",
            "Cloud: Unbridled, Berserk, Cross Slash",
            "Tifa: Omni, Whirl, Divekick, Whirl, (Divekick if needed)",
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
