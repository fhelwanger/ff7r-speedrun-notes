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
            "Combo x2, Combo x2 Security Officer.",
            "Combo full x4 Truck. Spinning Slash.",
          ],
          [
            'Break and Combo Slug-Rays after Red says "there\'s more".',
            'Break, Spinning Slash after Aerith says "Uh, what the-!?".',
            "Take ranged attacks, Combo full x5 + Spinning Slash when near, defend blades.",
            "Take ranged attacks, Combo + Spinning Slash when near, defend punches.",
          ],
          ["Combo, Spinning Slash when both near."],
          [
            "Spinning Slash one side, Combo the other. Combo full x5, Spinning Slash.",
            "Defend Fire, Spinning Slash one side, Combo the other. Combo full x5, Spinning Slash.",
            "Combo, Defend Fire, Spinning Slash one side, Combo the other. Combo full x5, Spinning Slash.",
            "Try a extra hit or start the stagger with the last hit of the wheels during the staggers.",
          ],
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x9", inputs: ["down", "down"] },
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
                { name: "Heavy-Duty Bracer", inputs: ["up", "up"] },
                { name: "Platinum Earrings", source: "barret", inputs: ["up"] },
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
                { name: "Magnify" },
                { name: "Time" },
                { name: "HP Up", source: "inventory", inputs: ["up"] },
                { name: "HP Up", source: "inventory", inputs: ["up"] },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit" }],
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
                { name: "HP Up", source: "inventory", inputs: ["up"] },
                { name: "" },
                { name: "" },
              ],
              armor: [{ name: "Parry" }, { name: "" }, { name: "Lightning" }],
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
          "Cloud: Punisher x2, Braver, TRIPOLOSKI Croceo",
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
            "Cloud: Punisher jump, TRIPOLOSKI, Roll",
            "Cloud: Dash, Counter, Counterstance",
            "Cloud: Berserk, Operator, Counter, Counterstance",
            "Cloud: Operator, Counter x2 (stagger)",
            "Cloud: Haste All, Hit",
            "Cloud: Berserk, Whirl, Punisher",
          ],
          [
            "Tifa: Braver, Aerith ATB Boost, Aerith Magic",
            "Tifa: Whirl, Divekick, Aerith Magic, Whirl, Divekick",
            "Tifa: Whirl, Focused Strike x3",
            "Cloud: Counter, Focused Thrust, Unbridled (stagger)",
            "Cloud: Berserk, Cross Slash",
            "Tifa: Omni, Whirl, Whirl, swap to Cloud",
          ],
          [
            "Cloud: Berserk, Infinity's End",
            "Tifa: Starshower x2, Aerith Thundaga",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter18;
