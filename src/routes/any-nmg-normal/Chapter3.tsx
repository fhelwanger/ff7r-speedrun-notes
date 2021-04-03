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
      <Shop
        name="Item Shop"
        sell={[
          { name: "Potion x4" },
          { name: "Hi-Potion x2", inputs: ["down"] },
        ]}
        buy={[
          { name: "Deadly Dodge", inputs: ["up"] },
          { name: "Lightning", inputs: ["up"] },
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                {
                  name: "Deadly Dodge",
                  source: "inventory",
                  inputs: ["right"],
                },
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
        enemies="Gorger x2"
        instructions={[
          "A: Deadly Dodge, Cleave, Punisher x2, Operator",
          "B: Fire",
        ]}
      />
      <Encounter
        enemies="Gorger, Wererat"
        instructions={[
          "Gorger: Dash, Deadly Dodge, Cleave, Punisher x2, Operator",
          "Wererat: Fire",
        ]}
      />
      <Encounter enemies="Wererat x2" instructions={["Deadly Dodge, Cleave"]} />
      <Encounter
        enemies="Gorger x2"
        instructions={[
          "A: Deadly Dodge, Cleave, Punisher x2, Operator",
          "B: Fire",
        ]}
      />
      <Shop
        name="Weapon Shop"
        buy={[{ name: "Earrings", inputs: ["down", "down"] }]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Iron Blade", inputs: ["right"] },
                { name: "Iron Bangle", inputs: ["right"] },
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
                { name: "Assess", source: "inventory", inputs: ["up", "up"] },
              ],
              armor: [
                { name: "Ice", source: "inventory", inputs: ["down", "down"] },
              ],
              summon: [],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                {
                  shortcut: "square",
                  ability: "TRIPOLOSKI",
                  inputs: ["down", "down"],
                },
                {
                  shortcut: "triangle",
                  ability: "Blizzard",
                  inputs: ["down"],
                },
                {
                  shortcut: "x",
                  ability: "Assess",
                  inputs: ["up", "up"],
                },
              ],
            },
            {
              name: "Tifa",
              shortcuts: [
                { shortcut: "x", ability: "Thunder", inputs: ["down", "down"] },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Wererats x2, Gorger"
        instructions={[
          "Counter Gorger",
          "Assess Gorger and Wererat",
          "Deadly Dodge/Cleave/TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Security Officer, Guard Dog"
        instructions={[
          "Cloud: Deadly Dodge, Counter/Cleave",
          "Cloud: Blizzard, Punisher x4, Berserk Elite (stagger)",
          "Cloud: Blizzard Dog (Wind Materia)",
          "Cloud: Punisher",
        ]}
      />
      <Dialogue
        optionText="No"
        optionPosition="2nd"
        details="before entering 7th Heaven"
      />
      <Encounter
        enemies="Hoodlum x4"
        instructions={[
          "Dash left, Deadly Dodge, Fire",
          "Berserk/Fire/Punisher",
        ]}
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
