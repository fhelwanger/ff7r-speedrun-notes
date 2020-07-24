import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
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
            "Aerith: ATB Boost, Arcane Ward, Lock any horn, Fire",
            "Cloud: Focused Thrust, Punisher full, Berserk, Punisher",
            "Aerith: Combo x4, Fira, Focused Thrust, Combo x4, Tempest",
            "Tifa: Focused Strike (evade Pounce), Aerith Fire",
            "Tifa: Whirl, Divekick, Combo x6, Whirl, Divekick",
            "Tifa: Whirl, Hit, Whirl, Focused Strike, Whirl, Focused Strike",
            "Tifa: Unbridled x2, Rise, Omni, Braver, Whirl, Divekick, Whirl",
          ],
          [
            "Aerith: Tempest full, Fira",
            "Cloud: Dash, Focused Thrust, Focused Strike",
            "Cloud: Punisher full, Berserk, Punisher",
            "Aerith: Fira x2",
            "Cloud: Punisher full, Berserk, Focused Thrust",
            "Tifa: Whirl, Focused Strike, Whirl, Focused Strike",
            "Tifa: Whirl, Divekick, TRIPOLOSKI, Whirl, Divekick",
          ],
        ]}
      />
      <Encounter
        enemies="Sahagin"
        instructions={["Cloud: Berserk, Fira, Aerith Fira"]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Pick item="Feathered Gloves" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Iron Blade" }],
            },
            {
              name: "Tifa",
              equipments: [{ name: "Feathered Gloves" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Fire" }],
            },
            {
              name: "Tifa",
              shortcuts: [
                { shortcut: "x", ability: "Starshower" },
                { shortcut: "circle", ability: "Fira" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Wererat x2, Scissorclaw"
        instructions={["Aerith Fire Scissor, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Scissorclaw x2"
        instructions={["Cloud Fire, Aerith Fire"]}
      />
      <Pick item="keys" />
      <Encounter
        enemies="Wererat x3, Blugu"
        instructions={["Berserk Blugu, TRIPOLOSKI", "Careful with sleep"]}
      />
      <Encounter
        enemies="Blugu x2, Scissorclaw"
        instructions={["Aerith Fire Scissor", "Berserk, TRIPOLOSKI Blugus"]}
      />
      <Encounter
        enemies="Blugu, Scissorclaw x2"
        instructions={[
          "Aerith Fire Scissor, Cloud Fire Scissor",
          "Whirl, Divekick if needed",
        ]}
      />
      <Encounter
        enemies="Sahagin"
        instructions={["Cloud: Berserk, Fira, Aerith Fire"]}
      />
      <Bench optional description="Aerith needs 30 MP" />
      <Encounter
        enemies="Scissorclaw x2"
        instructions={["Aerith Fire, Cloud Fire"]}
      />
      <Encounter
        enemies="Wererat x2, Blugu, Scissorclaw"
        instructions={["Aerith Fire Scissor", "Berserk Blugu, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Sahagin x2"
        instructions={[
          "Berserk A, Fira A",
          "Aerith Fira B, Punisher B",
          "TRIPOLOSKI, Punisher",
        ]}
      />
      <Encounter
        enemies="Blugu x2, Sahagin"
        instructions={[
          "Aerith Fira Sahagin, Cloud Fire Sahagin",
          "Tifa: Parry Blugu, Whirl, Divekick",
        ]}
      />
      <Encounter
        enemies="Sahagin x3"
        instructions={[
          "Aerith: ATB Boost, Arcane Ward, Fira",
          "Cloud: Fira",
          "Tifa: Whirl, Divekick/Starshower",
        ]}
      />
    </Chapter>
  );
}

export default Chapter10;
