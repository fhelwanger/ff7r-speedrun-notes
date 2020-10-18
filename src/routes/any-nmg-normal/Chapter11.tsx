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
import Shop from "../../components/Shop";
import UpgradeWeapons from "../../components/UpgradeWeapons";

function Chapter11() {
  return (
    <Chapter number={11}>
      <Pick item="Mythril Rod" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Hardedge" }],
            },
            {
              name: "Aerith",
              equipments: [
                { name: "Mythril Rod" },
                { name: "Earrings", source: "cloud" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [{ name: "" }, { name: "Fire" }, { name: "Lightning" }],
              armor: [
                { name: "First Strike", source: "aerith" },
                { name: "Parry" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "ATB Boost" },
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
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Blizzara" }],
            },
            {
              name: "Aerith",
              shortcuts: [
                { shortcut: "square", ability: "Blizzara" },
                { shortcut: "circle", ability: "Aerora" },
                { shortcut: "x", ability: "Blizzard" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Wererats x3"
        instructions={["TRIPOLOSKI, Starshower"]}
      />
      <Encounter
        enemies="Cripshay x3 "
        instructions={["Cloud: TRIPOLOSKI", "Tifa: Starshower, Whirl"]}
      />
      <Encounter
        enemies="Wererats x2, Cripshay x2 "
        instructions={["Cloud: TRIPOLOSKI, Starshower, Punisher"]}
      />
      <Encounter
        enemies="Cripshay x5"
        instructions={[
          "Cloud: Counter/TRIPOLOSKI A/B/C",
          "Tifa: Starshower, Whirl D/E",
        ]}
      />
      <Encounter
        enemies="Ghost"
        instructions={["Starshower if less than 90%, Phoenix Down"]}
      />
      <Encounter
        enemies="Cripshay x3"
        instructions={["Cloud: Counter/TRIPOLOSKI, Starshower"]}
      />
      <Encounter
        enemies="Ghost x2"
        instructions={["Cloud/Tifa Phoenix Down"]}
      />
      <Encounter
        enemies="Ghost"
        instructions={["Starshower if not learned yet, Phoenix Down"]}
      />
      <Pick item="1000 gil" optional />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Phoenix Down x2", "Binding"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Iron Blade" }],
            },
            {
              name: "Tifa",
              equipments: [{ name: "Metal Knuckles" }],
            },
            {
              name: "Aerith",
              equipments: [{ name: "Fury Ring", source: "cloud" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "", source: "aerith" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Refocus" }, { name: "Ice" }],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Binding", source: "inventory" },
                { name: "Fire" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike", source: "cloud" },
                { name: "Parry" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "ATB Boost" },
                { name: "First Strike", source: "tifa" },
                { name: "Fire" },
              ],
              armor: [{ name: "Lightning" }, { name: "Wind" }, { name: "Ice" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Aerith",
              weapons: [
                {
                  name: "Mythril Rod",
                  upgrade: "Auto - Attack, Auto - Balanced",
                },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Ghoul"
        phases={[
          [
            "Tifa: Starshower, Aerith ATB Boost, Whirl",
            "Elixir when pressured",
          ],
          [
            "Tifa: Try to get near, defend Piercing Scream if get hit",
            "Tifa: Starshower, Whirl",
            "Elixir when pressured",
          ],
        ]}
      />
      <Encounter
        enemies="Wererats x3 / Ghost x2 / Cripshay x4"
        instructions={[
          "Wererats x3: Aerith ATB Boost, Berserk, 1 ATB, TRIPOLOSKI",
          "Ghost x2: Aerith Phoenix Down x2",
          "Cripshay x4: Starshower, Whirl, Divekick",
        ]}
      />
      <Pick item="Mega-Potion x2" optional />
      <Encounter
        enemies="Lesser Drake, Cerulean Drake"
        instructions={[
          "Lesser: Sleep, Aerith Aero, Tempest",
          "Lesser: Cloud 1 ATB, Tifa 1 ATB",
          "Cerulean: Sleep, Aerith ATB Boost, Cloud Blizzara, Aerith Aerora",
          "Cerulean: Whirl, Divekick, Whirl",
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "Subversion", source: "inventory" },
                { name: "Fire" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }, { name: "Parry" }],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
      </Menu>
      <Bench optional description="Aerith needs full MP" />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Phoenix Down x2"]}
      />
      <Boss
        name="Eligor"
        phases={[
          [
            "Cloud: Dash, Counter, Aerith Blizzara, Operator",
            "Cloud: Counter, Blizzara, Punisher x2, Focused Thrust",
            "Tifa: Whirl",
            "Aerith: Tempest full, 1 ATB, Blizzara, 1 ATB, Arcane Ward, Combo",
          ],
          ["Aerith: Tifa Breach, 1 ATB, ATB Boost, Aerora x2"],
          [
            "Aerith: Tempest full",
            "Tifa: Whirl, Divekick Right Wheel",
            "Tifa: Whirl, Divekick Left Wheel",
            "Tifa: Whirl",
            "Aerith: Cloud Blizzara, Tempest full, Blizzard",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter11;
