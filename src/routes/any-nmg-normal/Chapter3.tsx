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
      <Pick item="Ether" description="After Biggs/Wedge" optional />
      <Pick item="Ice" description="In Scrap Boulevard" />
      <Encounter
        enemies="Gorgers and Wererats"
        instructions={[
          "Deadly Dodge + Cleave, then Punisher, Fire, Focused Thrust...",
        ]}
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
                { name: "Ice", source: "inventory" },
                { name: "Assess", source: "inventory" },
              ],
              armor: [{ name: "Deadly Dodge", source: "cloud" }],
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
          "Operator x3, Roll on Gorger to build ATB",
          "Assess Gorger then Wererat",
          "Deadly Dodge, Cleave",
          "Flee if Call to Arms",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Security Officer, Guard Dog"
        instructions={[
          "Cloud: Deadly Dodge, Cleave",
          "Cloud: Fire Dog, Berserk, TRIPOLOSKI",
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
