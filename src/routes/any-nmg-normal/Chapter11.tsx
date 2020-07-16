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
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike", source: "aerith" },
                { name: "ATB Boost", source: "aerith" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike", source: "cloud" },
                { name: "Refocus", source: "cloud" },
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
              name: "Tifa",
              shortcuts: [{ shortcut: "circle", ability: "Fira" }],
            },
            {
              name: "Aerith",
              shortcuts: [
                { shortcut: "circle", ability: "Aerora" },
                { shortcut: "x", ability: "Blizzard" },
                { shortcut: "square", ability: "Blizzara" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter enemies="Wererats x3" instructions={["TRIPOLOSKI"]} />
      <Encounter
        enemies="Cripshay x3 "
        instructions={["ATB Boost, TRIPOLOSKI, Berserk, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Wererats x2, Cripshay x2 "
        instructions={["ATB Boost, TRIPOLOSKI, Berserk, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Cripshay x5"
        instructions={[
          "Dash, Counter, TRIPOLOSKI, TRIPOLOSKI",
          "Punisher + TRIPOLOSKI",
        ]}
      />
      <Encounter enemies="Ghost" instructions={["Phoenix Down"]} />
      <Encounter
        enemies="Cripshay x3"
        instructions={["ATB Boost, TRIPOLOSKI, TRIPOLOSKI, Punisher"]}
      />
      <Encounter enemies="Ghost x2" instructions={["Phoenix Down"]} />
      <Encounter enemies="Ghost" instructions={["Phoenix Down"]} />
      <Pick item="1000 gil" />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Phoenix Down x2", "Binding"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Power Wristguards", source: "cloud" },
                { name: "Metal Knuckles" },
              ],
            },
            {
              name: "Aerith",
              equipments: [{ name: "Mythirl Rod" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Fire", source: "tifa" },
                { name: "Refocus", source: "aerith" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike", source: "cloud" },
                { name: "Binding", source: "inventory" },
              ],
              armor: [{ name: "Lightning" }, { name: "Parry" }],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike" },
                { name: "ATB Boost", source: "cloud" },
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
                { name: "Mythril Rod", upgrade: "M.Atk+5, M.Atk+6 x3" },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Ghoul"
        phases={[
          ["Parry, Starshower, Whirl", "Elixir when pressured"],
          [
            "Parry, wait Piercing Scream",
            "Starshower, Whirl",
            "Elixir when pressured",
          ],
        ]}
      />
      <Pick item="Mega-Potion x2" optional />
      <Encounter
        enemies="Wererats x3"
        instructions={["1 ATB, TRIPOLOSKI", "Aerith ATB Boost"]}
      />
      <Encounter
        enemies="Ghost x2"
        instructions={["Aerith: Phoenix Down x2"]}
      />
      <Encounter
        enemies="Cripshay x4"
        instructions={["Starshower, Whirl, Starshower"]}
      />
      <Pick item="Mega-Potion x2" />
      <Encounter
        enemies="Lesser Drake, Cerulean Drake"
        instructions={[
          "Lesser: Sleep, ATB Boost, Aerora",
          "Cerulean: Sleep, Aerora, Tempest spam until stagger",
          "Whirl, Divekick, Whirl",
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike" },
                { name: "Subversion", source: "inventory" },
              ],
              armor: [{ name: "Lightning" }, { name: "Parry" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Bench />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Phoenix Down x2"]}
      />
      <Boss
        name="Eligor"
        phases={[
          [
            "Dash, Counter, Aerith Blizzara, Operator, Counter",
            "Punisher x6, Focused Thrust x2",
            "Tifa: Whirl",
            "Aerith: Tempest full, 1 ATB, Blizzara, 1 ATB Arcane Ward, build ATB",
          ],
          ["Aerith: Tifa Breach, 1 ATB, ATB Boost", "Aerith: Aerora x2"],
          [
            "Tempest full",
            "Tifa: Whirl, Divekick Left Wheel",
            "Tifa: Whirl, Divekick Right Wheel",
            "Tifa: Whirl",
            "Cloud: Blizzara",
            "Aerith: Blizzard",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter11;
