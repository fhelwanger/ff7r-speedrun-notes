import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";
import Shop from "../../components/Shop";

function Chapter3() {
  return (
    <Chapter number={3}>
      <Shop name="Item Shop" buy={["Deadly Dodge"]} />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Deadly Dodge", source: "inventory" },
              ],
              armor: [],
              summon: [],
            },
          ]}
        />
      </Menu>
      <Pick item="Ether" optional />
      <Pick item="Ice" />
      <Encounter
        enemies="Gorgers and Wererats"
        instructions={["Deadly Dodge + Cleave, Punisher, Fire"]}
      />
      <Shop name="Weapon Shop" buy={["Earrings"]} />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Iron Blade" },
                { name: "Iron Bangle" },
                { name: "Earrings" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Deadly Dodge" },
                { name: "Assess", source: "inventory" },
              ],
              armor: [{ name: "Ice", source: "inventory" }],
              summon: [],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { shortcut: "square", ability: "Assess" },
                { shortcut: "x", ability: "TRIPOLOSKI" },
              ],
            },
            {
              name: "Tifa",
              shortcuts: [
                { shortcut: "x", ability: "Blizzard" },
                { shortcut: "circle", ability: "Fire" },
                { shortcut: "square", ability: "Thunder" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Wererats x2, Gorger"
        instructions={[
          "Dash, Operator, Roll Gorger to build ATB",
          "Assess Gorger and Wererat",
          "Deadly Dodge/Cleave/TRIPOLOSKI",
          "Flee if Call to Arms",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Security Officer, Guard Dog"
        instructions={[
          "Cloud: Deadly Dodge, Cleave, Counter",
          "Cloud: Blizzard Dog, Berserk, TRIPOLOSKI",
        ]}
      />
      <Dialogue
        optionText="No"
        optionPosition="2nd"
        details="before entering 7th Heaven"
      />
      <Encounter
        enemies="Hoodlum x4"
        instructions={["Deadly Dodge, Fire", "Punisher/Berserk/Fire"]}
      />
      <Dialogue
        optionText="Yeah"
        optionPosition="2nd"
        details="when talking to Jessie"
      />
    </Chapter>
  );
}

export default Chapter3;
