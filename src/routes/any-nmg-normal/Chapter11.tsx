import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Boss from "../../components/Boss";
import Box from "../../components/Box";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Heal from "../../components/Heal";
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
              equipments: [{ name: "Hardedge", inputs: ["right"] }],
            },
            {
              name: "Aerith (R2, R2)",
              equipments: [
                { name: "Mythril Rod", inputs: ["right"] },
                { name: "Earrings", source: "cloud", inputs: ["up"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike", source: "aerith" },
                { name: "ATB Boost", source: "aerith" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Parry" }, { name: "" }],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Barrier" },
                { name: "Wind" },
                { name: "Lightning", source: "tifa" },
              ],
              armor: [
                { name: "Fire" },
                { name: "", source: "tifa" },
                { name: "Ice" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Blizzara",
                  inputs: ["down", "down", "down"],
                },
              ],
            },
            {
              name: "Aerith (R2, R2)",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Blizzara",
                  inputs: ["down", "down", "down"],
                },
                {
                  shortcut: "square",
                  ability: "Aerora",
                  inputs: ["right", "down"],
                },
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
        instructions={["Starshower Cripshay, TRIPOLOSKI, Punisher"]}
      />
      <Encounter
        enemies="Cripshay x5"
        instructions={[
          "Cloud: Tifa ATB Boost, Counter, Starshower B/C, TRIPOLOSKI A, Starshower D/E",
        ]}
      />
      <Encounter enemies="Ghost" instructions={["Phoenix Down, Starshower"]} />
      <Encounter
        enemies="Cripshay x3"
        instructions={[
          "Cloud: Tifa ATB Boost, Starshower x2 B/C",
          "Cloud: TRIPOLOSKI A",
        ]}
      />
      <Box description="While waiting for Ghosts to spawn." />
      <Encounter
        enemies="Ghost x2"
        instructions={["Cloud/Tifa Phoenix Down"]}
      />
      <Box description="While waiting for Ghost to spawn." />
      <Encounter
        enemies="Ghost"
        instructions={["Phoenix Down, Starshower if not learned yet"]}
      />
      <Pick item="1000 gil" optional />
      <Shop
        name="Vending Machine"
        buy={[
          {
            name: "Mega-Potion x3",
            inputs: ["down", "down", "down"],
          },
          {
            name: "Ether x2",
            inputs: ["down", "down"],
          },
          {
            name: "Phoenix Down x2",
            inputs: ["down", "down"],
          },
          {
            name: "Binding",
            inputs: ["up", "up", "up", "up"],
          },
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Iron Blade", inputs: ["up"] }],
            },
            {
              name: "Tifa (R2)",
              equipments: [{ name: "Metal Knuckles", inputs: ["up", "up"] }],
            },
            {
              name: "Aerith (R2)",
              equipments: [
                { name: "Fury Ring", source: "cloud", inputs: ["right"] },
                { name: "Power Wristguards", source: "tifa", inputs: ["left"] },
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
                { name: "Lightning", source: "aerith" },
                { name: "Refocus" },
              ],
              armor: [{ name: "Lightning" }, { name: "Ice" }],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike" },
                { name: "", source: "aerith" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Parry" }, { name: "" }],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Barrier" },
                { name: "Wind" },
                { name: "First Strike", source: "cloud" },
              ],
              armor: [
                { name: "Fire" },
                { name: "ATB Boost", source: "tifa" },
                { name: "Ice" },
              ],
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
            "Tifa: Defend and wait Telekinesis",
            "Tifa: Starshower, Aerith ATB Boost, Whirl",
            "Elixir when pressured, swap to Aerith then back to Tifa",
          ],
          [
            "Tifa: Try to get near, defend Piercing Scream if get hit",
            "Tifa: Starshower, Whirl",
            "Elixir when pressured",
          ],
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                {
                  name: "Power Wristguards",
                  source: "aerith",
                  inputs: ["left"],
                },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike" },
                {
                  name: "Binding",
                  source: "inventory",
                  inputs: ["square", "right", "up", "up"],
                },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Parry" },
                {
                  name: "Subversion",
                  source: "inventory",
                  inputs: ["right", "up"],
                },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
      </Menu>
      <Box description="After pulling the lever." />
      <Encounter
        enemies="Wererats x3 / Ghost x2 / Cripshay x4"
        instructions={[
          "Wererats x3: Aerith ATB Boost, Berserk, 1 ATB, TRIPOLOSKI",
          "Ghost x2: Aerith Phoenix Down x2",
          "Cripshay x4: Starshower B (mid fall), Whirl/Divekick",
        ]}
      />
      <Pick item="Mega-Potion x2" optional />
      <Encounter
        enemies="Lesser Drake, Cerulean Drake"
        instructions={[
          "Lesser: Sleep, Aerith Aero, Tempest x2",
          "Lesser: Whirl x2, Aerith ATB Boost",
          "Cerulean: Sleep, Aerith Aerora, Tempest",
          "Cerulean: Soul Drain, Whirl/Divekick",
        ]}
      />
      <Heal description="Aerith 48 MP, everyone full HP." />
      <Boss
        name="Eligor"
        phases={[
          [
            "Cloud: Dash, Counter, Aerith Blizzara, Operator",
            "Cloud: Counter, Blizzara, 1 ATB, Focused Thrust",
            "Tifa: Whirl",
            "Aerith: Tempest full, Blizzara, Arcane Ward, Combo",
          ],
          ["Aerith: Tifa Breach, Combo x3, Roll, 2 ATB", "Aerith: Aerora x2"],
          [
            "Aerith: Tempest full",
            "Tifa: Combo x6, Whirl, Divekick Right Wheel",
            "Tifa: Parry, Whirl, Divekick Left Wheel",
            "Tifa: Cloud Blizzara, Aerith Blizzard",
            "Tifa: Whirl, Hit x1, Whirl, Divekick",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter11;
