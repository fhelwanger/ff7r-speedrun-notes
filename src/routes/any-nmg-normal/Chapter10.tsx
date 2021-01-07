import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";

function Chapter10() {
  return (
    <Chapter number={10}>
      <Boss
        name="Abzu"
        phases={[
          [
            "Aerith: Roll right, ATB Boost, Arcane Ward, Lock horn, Fira",
            "Tifa: Combo x6, Whirl",
            "Aerith: Combo x5, Fira (jumps to water)",
            "Aerith: Roll right, Combo x5, Fira, Focused Thrust, Focused Strike",
            "Cloud: Punisher x4",
            "Tifa: Parry, Combo x6, Focused Strike, Focused Thrust, Focused Strike x2",
            "Tifa: 1 ATB, Whirl",
            "Aerith: Unbridled, Tempest full",
            "Tifa: Omni, Whirl, Divekick, Whirl",
          ],
          [
            "Aerith: Fire",
            "Cloud: Punisher x4",
            "Tifa: Parry, Combo x6, Focused Strike, Focused Thrust, Focused Strike x2, Whirl",
            "Aerith: Combo (jumps to water), Tempest full",
            "Tifa: Whirl, Aerith Fira, Divekick",
            "Tifa: Combo x6, Focused Strike, Focused Thrust, Combo x6 (stagger)",
            "Tifa: Unbridled, Soul Drain, Omni, Whirl, Soul Drain, Divekick, Whirl, Divekick",
          ],
        ]}
      />
      <Encounter
        enemies="Sahagin"
        instructions={[
          "Cloud: Cleave, Aerith ATB Boost, Fira",
          "Cloud: Soul Drain, Aerith Fira",
        ]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Pick item="Feathered Gloves" />
      <Encounter
        enemies="Wererat x3"
        instructions={["Tifa: Flee, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Wererat x2, Scissorclaw"
        instructions={["Soul Drain Scissor, TRIPOLOSKI Rats"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Iron Blade", inputs: ["up"] },
                { name: "Titanium Bangle", inputs: ["down"] },
              ],
            },
            {
              name: "Tifa (R2)",
              equipments: [
                { name: "Mythril Armlet", inputs: ["right"] },
                { name: "Feathered Gloves", inputs: ["right"] },
              ],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "x", ability: "Fire" }],
            },
            {
              name: "Tifa (R2)",
              shortcuts: [
                { shortcut: "circle", ability: "Fira", inputs: ["down"] },
                {
                  shortcut: "square",
                  ability: "Starshower",
                  inputs: ["right", "up", "up"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Scissorclaw x2"
        instructions={["ATB Boost, Soul Drain each"]}
      />
      <Pick item="keys" />
      <Encounter
        enemies="Wererat x3, Blugu"
        instructions={["Soul Drain, TRIPOLOSKI Blugu", "Cleave rest"]}
      />
      <Encounter
        enemies="Blugu x2, Scissorclaw"
        instructions={["Soul Drain Scissor", "TRIPOLOSKI Blugus"]}
      />
      <Encounter
        enemies="Blugu, Scissorclaw x2"
        instructions={[
          "Soul Drain/Cloud Fire Scissors",
          "Whirl, Divekick Blugu",
        ]}
      />
      <Encounter
        enemies="Sahagin"
        instructions={[
          "Cloud: Aerith ATB Boost, Cleave, Aerith Fira",
          "Cloud: Soul Drain, Fire",
        ]}
      />
      <Encounter
        enemies="Scissorclaw x2"
        instructions={["ATB Boost, Soul Drain each"]}
      />
      <Encounter
        enemies="Wererat x2, Blugu, Scissorclaw"
        instructions={["Soul Drain Scissor", "TRIPOLOSKI, Cleave rest"]}
      />
      <Encounter
        enemies="Minigame Visual Cues"
        instructions={["After 5th mark", "After 4.5th mark", "After 3th mark"]}
      />
      <Encounter
        enemies="Sahagin x2"
        instructions={[
          "Cloud: Aerith Fira A, Cleave, Fira B",
          "Tifa: Whirl/Divekick",
        ]}
      />
      <Encounter
        enemies="Blugu x2, Sahagin"
        instructions={[
          "Cloud: Cleave, Fira, Aerith Fira Sahagin",
          "Cloud: Punisher/TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Sahagin x3"
        instructions={[
          "Cloud: Aerith ATB Boost, Aerith Fira C, Cleave C/B",
          "Cloud: Aerith Fira A, Cleave/Counter, Refocus",
          "Tifa: Whirl/Divekick",
        ]}
      />
    </Chapter>
  );
}

export default Chapter10;
