import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
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

function Chapter15() {
  return (
    <Chapter number={15}>
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                {
                  name: "Heavy-Duty Bracer",
                  source: "tifa",
                  inputs: ["right"],
                },
                { name: "Fury Ring", source: "tifa", inputs: ["right"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind", source: "barret" },
                { name: "Magnify", source: "tifa" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "First Strike" },
                { name: "Fire", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Refocus", source: "inventory", inputs: ["up"] },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "ATB Assist", source: "tifa" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Lightning", source: "cloud" },
                { name: "First Strike", source: "barret" },
                { name: "ATB Stagger" },
              ],
              armor: [{ name: "Parry" }, { name: "Subversion" }],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Tifa",
              weapons: [
                { name: "Metal Knuckles", upgrade: "Manual" },
                { name: "Mythril Claws", upgrade: "Auto - Attack" },
              ],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { ability: "Leader" },
                {
                  shortcut: "triangle",
                  ability: "Aerora All",
                  inputs: ["right", "down"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Byobapolis x3"
        instructions={[
          "Cloud: ATB Boost, Aerora All x2, Starshower, TRIPOLOSKI",
        ]}
      />
      <Heal description="Ether x1 Cloud" />
      <Encounter
        enemies="Cerulean Drake x2"
        instructions={[
          "Cloud: ATB Boost",
          "Barret: Roll right, Overcharge",
          "Tifa: Parry right, Cloud Aerora All x2",
          "Sleep/Cloud Aerora/Tifa Blizzara to stagger",
          "Omni/Whirl/Divekick/Cloud Aerora when staggered",
        ]}
      />
      <Heal description="Ether x1 Cloud" />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "Magnify" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Wind", source: "cloud" },
                { name: "First Strike" },
                { name: "Lightning", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="3-C Soldier Operator x2"
        instructions={[
          "Cloud: Cleave, Counter, Fira, Starshower one",
          "Cloud: ATB Boost, Fira x2 other",
        ]}
      />
      <Heal description="Cloud 40 MP" />
      <Encounter
        enemies="Gauntlet"
        instructions={[
          "Dog/Officers: Cloud Fira All, Starshower, Punisher",
          "Helitrooper/Officers: Overcharge, Cloud Fira All, Barret Fira Helitrooper",
          "Helitrooper/Officers: Cloud Combo (stagger) Helitrooper, TRIPOLOSKI",
          "Officers/Grenadiers: Fira All, TRIPOLOSKI, ATB Boost",
          "Helitrooper/Officers/Grenadiers: Cloud Fira, Barret Fira Helitrooper",
          "Helitrooper/Officers/Grenadiers: Cross Slash, Whirl/Divekick",
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down", "down"] },
          { name: "Ether x9", inputs: ["down"] },
          { name: "Ether x2", inputs: ["down"] },
          { name: "Time", inputs: ["right", "up"] },
        ]}
      />
      <Bench />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind", source: "cloud" },
                { name: "Magnify" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Fire", source: "cloud" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Mythril Claws", inputs: ["right"] },
                { name: "Earrings", inputs: ["up"] },
              ],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { shortcut: "x", ability: "Thundara", inputs: ["right", "up"] },
              ],
            },
            {
              name: "Tifa (R2, R2)",
              shortcuts: [
                { shortcut: "x", ability: "Thundara", inputs: ["right", "up"] },
              ],
            },
            {
              name: "Barret",
              shortcuts: [{ ability: "Leader" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Slug-Ray x3, Shock-Ray x2"
        instructions={[
          "Barret: Overcharge, Cloud ATB Boost",
          "Barret: Cloud Aerora All x2, Tifa/Barret Thundara",
        ]}
      />
      <Heal description="Ether x1 Cloud" />
      <Encounter
        enemies="Blast-Ray"
        instructions={[
          "Barret: Overcharge, Tifa Thundara, Thundara",
          "Cloud: 2 ATB",
          "Tifa: Cloud Thunder, ATB Boost, Cloud Thundara x2",
        ]}
      />
      <Heal description="Ether x1 Cloud" />
      <Pick item="Turbo Ether" description="Ignore if already have 3" />
      <Encounter
        enemies="Cerulean Drake, Byobapolis x2"
        instructions={[
          "Barret: Overcharge Drake, Cloud Aerora All Byobapolis",
          "Barret: Cloud ATB Boost, Focused Shot Drake",
          "Barret: Aerora All x2, Cross Slash, Starshower",
        ]}
      />
      <Heal description="Ether x1 Cloud" />
      <Encounter
        enemies="Byobapolis"
        instructions={["Barret: Cloud Aerora, Combo, Overcharge"]}
      />
      <Heal description="Ether x1 Cloud" />
      <Box description="Left side before minigame." />
      <Box description="Right side before Blast-Rays." />
      <Encounter
        enemies="Blast-Ray x2"
        instructions={[
          "Barret: Overcharge, Tifa Thundara, 2 ATB, Thundara A",
          "Cloud: 2 ATB, Thunder, ATB Boost, Thundara x2 A",
          "Tifa: 2 ATB, Barret Thundara, Thundara B",
          "Cloud: 2 ATB, Tifa Thundara, Thundara x2 B",
        ]}
      />
      <Heal description="Cloud 20 MP, Barret 10 MP, Tifa 8 MP" />
      <Encounter
        enemies="Elite Helitrooper x2"
        instructions={[
          "Barret: Cloud ATB Boost, Overcharge, Cloud Fira, Tifa Thundara A",
          "Barret: Cloud Fira, Fira B",
        ]}
      />
      <Bench />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down"] },
          { name: "Ether x6", inputs: ["down"] },
          { name: "Ether x2", inputs: ["down"] },
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind" },
                { name: "Time", source: "inventory", inputs: ["up"] },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Lightning" },
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
                  shortcut: "triangle",
                  ability: "Fira All",
                  inputs: ["down"],
                },
                {
                  shortcut: "circle",
                  ability: "Thundaga",
                  inputs: ["right"],
                },
              ],
            },
            {
              name: "Barret (R2)",
              shortcuts: [
                {
                  shortcut: "circle",
                  ability: "Mega-Potion",
                },
              ],
            },
            {
              name: "Aerith (R2, R2)",
              shortcuts: [
                {
                  shortcut: "circle",
                  ability: "Thundaga",
                  inputs: ["right"],
                },
                {
                  shortcut: "triangle",
                  ability: "Thundara",
                  inputs: ["right", "up"],
                },
                {
                  shortcut: "square",
                  ability: "Blizzard All",
                  inputs: ["down", "down"],
                },
                {
                  shortcut: "x",
                  ability: "Blizzara All",
                },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Valkyrie"
        phases={[
          [
            "Barret: Overcharge, Cloud Thundaga",
            "Barret: Combo, Charge, 2 ATB, Thundara x2 (switch to Cloud if low ATB)",
            "Barret: Cloud ATB Boost, Charge, Tifa Thundara, Charge",
          ],
          [
            "Barret: Walk back, Cloud Thundaga, Cloud Thundara, Overcharge",
            "Tifa: Whirl, Parry, Whirl (2 ATB)",
            "Cloud: Barret Turbo Ether Cloud, Punisher full, Tifa Thundara x2",
            "Barret: Combo",
          ],
          [
            "Barret: Cloud Thundara, start Combo",
            "Tifa: Whirl, Parry, Whirl",
            "Cloud: Dodge laser, Unbridled, Punisher (stagger, 2 ATB)",
            "Tifa: Omni, Cloud Thundaga, Whirl, Cloud Thundaga, Barret Thundara",
            "Tifa: Whirl, Thundara x2",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter15;
