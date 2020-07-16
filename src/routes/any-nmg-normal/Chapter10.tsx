import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";

function Chapter10() {
  return (
    <Chapter number={10}>
      <Boss
        name="Abzu"
        phases={[
          [
            "Aerith: ATB Boost, Arcane Ward, Fire Left Horn",
            "Cloud: Focused Thrust, Punisher full, Berserk, Punisher",
            "Aerith: 1 ATB, Fira Left Horn, 1 ATB",
            "Cloud: Dash to evade jump, Roll",
            "Cloud: Dash, Focused Thrust, Aerith Fire",
            "Cloud: Punisher full, Berserk, Focused Thrust",
            "Tifa: Focused Strike to stagger",
            "Tifa: Unbridled, Omni, Whirl, Focused Strike",
            "Tifa: Whirl, Divekick",
            "Cloud: TRIPOLOSKI, Berserk, Punisher",
          ],
          [
            "Aerith: Fira after Enrage",
            "Coud: Dash, Focused Thrust, Focused Strike",
            "Cloud: Punisher full, Focused Thrust",
            "Aerith: 2 ATB, Fira",
            "Cloud: Punisher full, Aerith Fira, Focused Thrust",
            "Tifa: Focused Strike, Unbridled, Omni, Whirl",
            "Tifa: Focused Strike, Whirl until learned, Divekick",
          ],
        ]}
      />
      <Encounter
        enemies="Sahagin"
        instructions={[
          "Cloud: Fira",
          "Tifa: Combo until stagger, Whirl + Divekick",
        ]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Pick item="Feathered Gloves" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [{ name: "Feathered Gloves" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "ATB Boost", source: "aerith" },
                { name: "First Strike", source: "aerith" },
              ],
              armor: [{ name: "Lightning" }, { name: "Parry" }],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "", source: "tifa" },
                { name: "", source: "tifa" },
                { name: "Fire" },
              ],
              armor: [{ name: "Lightning" }, { name: "Wind" }, { name: "Ice" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              leader: true,
              shortcuts: [{ shortcut: "x", ability: "Starshower" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Wererat x2, Scissorclaw"
        instructions={[
          "Tifa: ATB Boost, Parry + Starshower rats, Fire Scissor",
          "TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Scissorclaw x2"
        instructions={["Tifa: ATB Boost, Fire, Fire"]}
      />
      <Pick item="keys" />
      <Encounter
        enemies="Wererat x3, Blugu"
        instructions={[
          "Parry Blugu, ATB Boost, Starshower, Starshower",
          "TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Blugu x2, Scissorclaw"
        instructions={[
          "Parry Blugu, ATB Boost, Starshower, Fire Scissor",
          "TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Blugu, Scissorclaw x2"
        instructions={[
          "Parry Blugu, ATB Boost, Starshower, Fire Scissor",
          "Cloud Fire",
        ]}
      />
      <Encounter
        enemies="Sahagin"
        instructions={[
          "Cloud: Dash, Fira",
          "Tifa: ATB Boost, Stagger, Starshower, Starshower",
        ]}
      />
      <Bench optional description="Aerith needs 30 MP" />
      <Encounter
        enemies="Scissorclaw x2"
        instructions={["Tifa: ATB Boost, Fire, Fire"]}
      />
      <Encounter
        enemies="Wererat x2, Blugu, Scissorclaw"
        instructions={[
          "Parry Blugu, ATB Boost, Starshower, Fire Scissor",
          "TRIPOLOSKI",
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
              ],
              armor: [{ name: "Lightning" }, { name: "Parry" }],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike", source: "tifa" },
                { name: "ATB Boost", source: "tifa" },
                { name: "Fire" },
              ],
              armor: [{ name: "Lightning" }, { name: "Wind" }, { name: "Ice" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sahagin x2"
        instructions={[
          "Cloud: Dash, Fira A, Aerith Fira B",
          "Punisher, TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Blugu x2, Sahagin"
        instructions={["TRIPOLOSKI Blugu", "Aerith Fira Sahagin, Punisher"]}
      />
      <Encounter
        enemies="Sahagin x3"
        instructions={[
          "Aerith: ATB Boost, Arcane Ward, Fira",
          "Cloud: Fira",
          "Tifa: Whirl, Starshower",
        ]}
      />
    </Chapter>
  );
}

export default Chapter10;
