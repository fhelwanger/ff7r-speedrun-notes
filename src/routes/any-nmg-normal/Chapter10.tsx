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
            "Aerith: Combo x5, Fira",
          ],
          [
            "Aerith: Roll right, Combo x5, Fira, Focused Thrust, Focused Strike",
            "Cloud: Punisher x4",
            "Tifa: Pary, Combo x6, Focused Strike, Focused Thrust, Focused Strike x2",
            "Tifa: Combo x2, Whirl",
            "Aerith: Unbridled, Tempest full",
            "Tifa: Omni, Whirl, Aerith Fire, Divekick, Whirl, Combo x1, Whirl",
          ],
          [
            "Aerith: Fire, Tifa Ether Aerith",
            "Cloud: Punisher full",
            "Aerith: Combo, Focused Thrust",
          ],
          [
            "Aerith: Fira",
            "Cloud: Punisher full, Berserk, Aerith Fira, Focused Thrust",
            "Tifa: Combo x6, Focused Strike, Focused Thrust, Whirl, Focused Strike",
            "Tifa: Unbridled, Omni, Whirl, Divekick, Whirl, Divekick",
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
        instructions={["Berserk Blugu, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Blugu x2, Scissorclaw"
        instructions={["Aerith Fire Scissor", "Berserk, TRIPOLOSKI Blugus"]}
      />
      <Encounter
        enemies="Blugu, Scissorclaw x2"
        instructions={["Aerith Fire Scissor, Cloud Fire Scissor", "Punisher"]}
      />
      <Encounter
        enemies="Sahagin"
        instructions={["Cloud: Berserk, Fira, Aerith Fire"]}
      />
      <Encounter
        enemies="Scissorclaw x2"
        instructions={["Aerith Fire, Cloud Fire"]}
      />
      <Encounter
        enemies="Wererat x2, Blugu, Scissorclaw"
        instructions={["Aerith Fire Scissor, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Sahagin x2"
        instructions={[
          "Cloud: Berserk, Fira A, Aerith Fira B",
          "Punisher/TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Blugu x2, Sahagin"
        instructions={[
          "Aerith Fira, Cloud Berserk Sahagin",
          "TRIPOLOSKI/Punisher",
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
