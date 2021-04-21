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
                { name: "Refocus", source: "inventory", inputs: ["up"] },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Fire", source: "cloud" },
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
      <Encounter
        enemies="Cerulean Drake x2"
        instructions={[
          "Cloud: ATB Boost, Aerora All",
          "Barret: Overcharge, Sleep, Cloud Aero/Aerora",
          "Stagger: Whirl/Divekick",
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "barret" },
                { name: "Magnify" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind", source: "cloud" },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "ATB Assist" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
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
      </Menu>
      <Heal description="Cloud 30 MP." />
      <Encounter
        enemies="3-C Soldier Operator x2"
        instructions={[
          "Cloud: Cleave, Counter, Fira, ATB Boost, Fira x2",
          "Tifa: Starshower",
        ]}
      />
      <Heal description="Cloud 40 MP." />
      <Encounter
        enemies="Gauntlet"
        instructions={[
          "Dog/Officers: Cloud Fira All, Starshower, Punisher",
          "Helitrooper/Officers: Cloud Fira Helitrooper, Fira All, Whril/Divekick",
          "Officers/Grenadiers: Starshower/Cross Slash, Whril/Divekick",
          "Helitrooper/Officers/Grenadiers: Cloud Fira, Barret Fira Helitrooper",
          "Helitrooper/Officers/Grenadiers: Starshower/Cross Slash, Whirl/Divekick",
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down", "down"] },
          { name: "Ether x10", inputs: ["down"] },
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
                { name: "Lightning", source: "cloud" },
                { name: "Magnify" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Fire", source: "cloud" },
                { name: "First Strike" },
                { name: "Refocus" },
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
          "Barret: Cloud Thundara All Shocks, Barret/Tifa Thundara",
        ]}
      />
      <Heal description="Ether x1 Cloud." />
      <Encounter
        enemies="Blast-Ray"
        instructions={[
          "Barret: Overcharge, Thundara, Tifa Thundara",
          "Cloud: 2 ATB, Thunder, ATB Boost, Thundara x2",
        ]}
      />
      <Heal description="Ether x1 Cloud." />
      <Pick item="Turbo Ether" description="Ignore if already dropped" />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind", source: "barret" },
                { name: "Magnify" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning", source: "cloud" },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "ATB Assist" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Cerulean Drake, Byobapolis x2"
        instructions={[
          "Barret: Overcharge Drake, Cloud Aerora All Byobapolis",
          "Barret: Cloud ATB Boost, Focused Shot Drake",
          "Barret: Aerora All x2, Cross Slash, Starshower",
        ]}
      />
      <Heal description="Ether x1 Cloud." />
      <Encounter
        enemies="Byobapolis"
        instructions={["Barret: Cloud Aerora, Combo, Overcharge"]}
      />
      <Box description="Left side before minigame." />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Lightning", source: "barret" },
                { name: "Magnify" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind", source: "cloud" },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "ATB Assist" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Heal description="Ether x1 Cloud." />
      <Box description="Right side before Blast-Rays." />
      <Encounter
        enemies="Blast-Ray x2"
        instructions={[
          "A: Overcharge, Tifa Thundara, Thundara",
          "A: Cloud 2 ATB, Thunder, ATB Boost, Thundara x2",
          "B: Barret Thundara, Tifa Thundara x2, Cloud Thundara x2",
        ]}
      />
      <Heal description="Cloud 20 MP, Barret 10 MP, Tifa 8 MP." />
      <Encounter
        enemies="Elite Helitrooper x2"
        instructions={[
          "A: Cloud Fira, Tifa Thundara",
          "B: Barret Overcharge, Cloud ATB Boost, Cloud/Barret Fira",
        ]}
      />
      <Bench />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down"] },
          { name: "Ether x5", inputs: ["down"] },
          { name: "Ether x2", inputs: ["down"] },
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Lightning" },
                { name: "Subversion", source: "tifa" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                {
                  name: "Time",
                  source: "inventory",
                  inputs: ["left", "right"],
                },
                { name: "Magnify", source: "cloud" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
              ],
              armor: [{ name: "Parry" }, { name: "Lightning", source: "tifa" }],
              summon: [{ name: "Ifrit" }],
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
                  ability: "Thunder",
                  inputs: ["right", "up", "up"],
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
            "Barret: Overcharge, Tifa Haste All, Cloud Thundaga",
            "Barret: Combo, Thunder x2, Combo, Charge",
            "Cloud: Wait until Valkyrie attacks",
            "Barret: Combo, Charge, Thundara x2",
          ],
          [
            "Barret: Overcharge, Tifa Thundara, Cloud Thundaga",
            "Barret: Cloud ATB Boost, Combo, Cloud Thundara, Charge x2, Turbo Ether Cloud",
            "Barret: Tifa Thundara, Charge, Combo",
          ],
          [
            "Barret: Overcharge, Cloud Thundara",
            "Tifa: Whirl, Parry, Whirl",
            "Cloud: Dodge laser, Unbridled, Punisher (stagger)",
            "Tifa: Omni, Cloud Thundaga x2, Barret Thunder x2, Whirl x2, Thundara x2",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter15;
