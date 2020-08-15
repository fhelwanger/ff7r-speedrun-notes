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
            "Aerith: Roll right, ATB Boost, Arcane Ward, Lock horn, Fira",
            "Tifa: Combo x6, Whirl",
            "Aerith: 1 ATB, Fira",
          ],
          [
            "Aerith: Roll right, 1 ATB, Fira, Focused Thrust, Focused Strike",
            "Cloud: Punisher x4, Focused Thrust",
            "Tifa: Combo x6, Focused Strike x3",
            "Tifa: Combo x2, Whirl",
            "Aerith: Unbridled, Tempest full",
            "Tifa: Omni, Whirl, Aerith Fire, Divekick, Whirl, Combo x2, Whirl",
          ],
          [
            "Aerith: Fire, Tifa Ether Aerith",
            "Cloud: Punisher x4, Focused Thrust, Punisher x4, Focused Thrust",
            "Aerith: Roll, Combo",
          ],
          [
            "Aerith: Fira",
            "Cloud: Punisher full, Aerith Fira, Focused Thrust",
            "Tifa: Combo x6, Focused Strike, Whirl, Focused Strike",
            "Tifa: Whirl, Divekick...",
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
              equipments: [
                { name: "Feathered Gloves" },
                { name: "Power Wristguards", source: "cloud" },
              ],
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
                { shortcut: "square", ability: "Thundara" },
                { shortcut: "circle", ability: "Fira" },
                { shortcut: "x", ability: "Starshower" },
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
      <Bench optional />
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
          "Aerith Fira Sahagin, Cloud Fira Sahagin",
          "Tifa: Parry Blugu, Whirl, Divekick",
        ]}
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
