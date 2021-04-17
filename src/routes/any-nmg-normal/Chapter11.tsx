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
              equipments: [
                { name: "Titanium Bangle", inputs: ["down"] },
                { name: "Fury Ring", source: "aerith", inputs: ["right"] },
              ],
            },
            {
              name: "Tifa (R2)",
              equipments: [{ name: "Feathered Gloves", inputs: ["right"] }],
            },
            {
              name: "Aerith (R2)",
              equipments: [{ name: "Mythril Rod", inputs: ["right"] }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike", source: "aerith" },
                { name: "" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Parry" },
                { name: "ATB Boost", source: "aerith" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Deadly Dodge" },
                { name: "Barrier" },
                { name: "Fire" },
              ],
              armor: [
                { name: "Lightning", source: "tifa" },
                { name: "Wind", source: "tifa" },
                { name: "Ice" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa (R2)",
              shortcuts: [
                {
                  shortcut: "square",
                  ability: "Starshower",
                  inputs: ["right", "up", "up"],
                },
                {
                  shortcut: "x",
                  ability: "Thundara",
                  inputs: ["right", "up"],
                },
              ],
            },
            {
              name: "Aerith (R2)",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Blizzara",
                  inputs: ["down", "down", "down"],
                },
                {
                  shortcut: "circle",
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
        enemies="Cripshay x3"
        instructions={["Cloud: Tifa ATB Boost, TRIPOLOSKI, Starshower x2"]}
      />
      <Encounter
        enemies="Wererats x2, Cripshay x2"
        instructions={[
          "Cloud: Tifa ATB Boost, Starshower Cripshay A",
          "Cloud: TRIPOLOSKI Wererat A, Starshower",
        ]}
      />
      <Encounter
        enemies="Cripshay x5"
        instructions={[
          "Cloud: Tifa ATB Boost, Counter, Starshower B/C, Starshower D/E",
          "Cloud: TRIPOLOSKI x2",
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
              name: "Tifa",
              equipments: [
                { name: "Metal Knuckles", inputs: ["up", "up"] },
                { name: "Fury Ring", source: "cloud", inputs: ["right"] },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Ghoul"
        phases={[
          [
            "Tifa: ATB Boost, Starshower, Whirl, Cloud Elixir",
            "Aerith: Hits, wait 2 ATB, swap to Tifa",
          ],
          [
            "Tifa: Try to get near, defend Piercing Scream if get hit",
            "Tifa: Starshower",
            "Aerith: Elixir when Tifa lands",
          ],
        ]}
      />
      <Menu
        instructions={[
          "Remove Deadly Dodge before equipping Subversion on Tifa",
        ]}
      >
        <Equipment
          characters={[
            {
              name: "Aerith",
              equipments: [
                {
                  name: "Fury Ring",
                  source: "tifa",
                  inputs: ["right"],
                },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Ice" },
                { name: "Lightning", source: "aerith" },
                { name: "Refocus" },
              ],
              armor: [{ name: "Lightning" }, { name: "Fire" }],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike" },
                {
                  name: "Binding",
                  source: "inventory",
                  inputs: ["right", "up", "up"],
                },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Parry" },
                {
                  name: "Subversion",
                  source: "inventory",
                  inputs: ["square", "right", "up"],
                },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "ATB Boost", source: "tifa" },
                { name: "Barrier" },
                { name: "Fire" },
              ],
              armor: [
                { name: "First Strike", source: "cloud" },
                { name: "Wind" },
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
      <Box description="After pulling the lever." />
      <Encounter
        enemies="Wererats x3 / Ghost x2 / Cripshay x4"
        instructions={[
          "Wererats x3: Punisher x4 C, Cleave B, Operator, TRIPOLOSKI A",
          "Ghost x2: Aerith ATB Boost, Aerith Phoenix Down x2",
          "Cripshay x4: Starshower B (mid fall), Whirl/Divekick",
        ]}
      />
      <Pick item="Mega-Potion x2" optional />
      <Encounter
        enemies="Lesser Drake, Cerulean Drake"
        instructions={[
          "Aerith: ATB Boost, Tifa Sleep, Aerora Cerulean",
          "Aerith: Hits (stagger), Soul Drain Cerulean",
          "Tifa: Whril, Hits (1.5 ATB), Whirl, Divekick Cerulean",
          "Tifa: Sleep, Aerith Aero (stagger), Focused Thrust Lesser",
        ]}
      />
      <Heal description="Aerith 46 MP, everyone full HP." />
      <Boss
        name="Eligor"
        phases={[
          [
            "Cloud: Dash, Counter, Aerith Blizzara, Operator",
            "Cloud: Counter, Blizzara, 1 ATB, Focused Thrust",
            "Tifa: Whirl",
            "Aerith: Tempest full, Blizzara, Arcane Ward, Combo",
          ],
          [
            "Aerith: Tifa Breach, Combo x3, Roll up-left, Combo (2 ATB)",
            "Aerith: Aerora x2",
          ],
          [
            "Aerith: Tempest full",
            "Tifa: Combo x6, Whirl, Divekick Right Wheel",
            "Tifa: Parry, Whirl, Divekick Left Wheel",
            "Tifa: Whirl, Aerith ATB Boost, Cloud Blizzara",
            "Tifa: Whirl, Aerith Soul Drain, Aerith Blizzara, Whirl x2",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter11;
