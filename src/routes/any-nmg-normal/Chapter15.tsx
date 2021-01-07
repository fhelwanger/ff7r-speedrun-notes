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
                { name: "Lightning" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "ATB Stagger", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "Fire" },
                { name: "Subversion" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Ice", source: "tifa" },
                { name: "Binding" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Lightning", source: "cloud" },
                { name: "ATB Assist" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "Parry" },
                { name: "First Strike", source: "barret" },
                { name: "", source: "cloud" },
              ],
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
        instructions={["ATB Boost, Aerora All x2, Starshower, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Cerulean Drake x2"
        instructions={[
          "Cloud: ATB Boost, Aerora All",
          "Barret: Overcharge, Sleep, Cloud Aerora All",
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
                { name: "Lightning" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind", source: "cloud" },
                { name: "Fire" },
                { name: "Subversion" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Ice" },
                { name: "Binding" },
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
      <Encounter
        enemies="3-C Soldier Operator x2"
        instructions={[
          "Cloud: ATB Boost, Fira x2 one",
          "Tifa: 2 ATB, Starshower x2 other",
        ]}
      />
      <Heal description="Cloud 40 MP." />
      <Encounter
        enemies="Gauntlet"
        instructions={[
          "Dog/Officers: Cloud Fira All, Punisher",
          "Helitrooper/Officers: Cloud Fira Helitrooper, Fira All, Whril/Divekick",
          "Officers/Grenadiers: Cross Slash, Whril/Divekick",
          "Helitrooper/Officers/Grenadiers: ATB Boost, Fira, Fira All Helitrooper",
          "Helitrooper/Officers/Grenadiers: Starshower, Whirl/Divekick",
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down", "down"] },
          { name: "Ether x2", inputs: ["down", "down"] },
          { name: "Time", inputs: ["right", "up"] },
        ]}
      />
      <Bench />
      <Menu>
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
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Lightning", source: "cloud" },
                { name: "Magnify" },
                { name: "Fire", source: "cloud" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Lightning" },
                { name: "ATB Assist" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "Parry" },
                { name: "First Strike" },
                {
                  name: "Time",
                  source: "inventory",
                  inputs: ["square", "right"],
                },
              ],
              summon: [{ name: "", source: "cloud" }],
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
          "Overcharge, Cloud ATB Boost, Thundara All x2, Tifa Thundara",
        ]}
      />
      <Heal description="Ether Cloud." />
      <Encounter
        enemies="Blast-Ray"
        instructions={[
          "Barret: Overcharge, Thundara, Tifa Thundara",
          "Cloud: 2 ATB, Thundara, ATB Boost, Thundara x2",
        ]}
      />
      <Heal description="Ether Cloud." />
      <Pick item="Turbo Ether" optional />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind", source: "barret" },
                { name: "Magnify" },
                { name: "Lightning", source: "cloud" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "Fire" },
                { name: "Subversion" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Ice" },
                { name: "Binding" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Cerulean Drake, Byobapolis x2"
        instructions={[
          "Barret: Overcharge Drake, Sleep (when near others)",
          "Cloud Aerora All, ATB Boost, Aerora All x2",
          "Cloud Cross Slash, Starshowers",
        ]}
      />
      <Heal description="Ether Cloud x2." />
      <Encounter
        enemies="Byobapolis"
        instructions={[
          "Barret: Cloud Aerora, Combo, Overcharge (when staggered)",
        ]}
      />
      <Box description="Left side before minigame." />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "barret" },
                { name: "Magnify" },
                { name: "Lightning" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind", source: "cloud" },
                { name: "Fire" },
                { name: "Subversion" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Ice" },
                { name: "Binding" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Box description="Right side before Blast-Rays." />
      <Encounter
        enemies="Blast-Ray x2"
        instructions={[
          "A: Overcharge, Tifa Thundara, Thundara",
          "A: Cloud 2 ATB, Thundara, ATB Boost, Thundara x2",
          "B: Cloud Thundara x2, Tifa/Barret Thundara x3",
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
                { name: "Fire" },
                { name: "Ice", source: "tifa" },
                { name: "Lightning" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Fire" },
                { name: "Subversion" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Ice" },
                { name: "ATB Assist", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Magnify", source: "cloud" },
                { name: "Time", source: "tifa" },
                { name: "Binding", source: "barret" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "Parry" },
                { name: "First Strike" },
                { name: "Lightning", source: "tifa" },
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
            "Barret: Swap to Cloud if bad ATB, Combo, Charge, Thundara x2",
          ],
          [
            "Barret: Overcharge, Tifa Thundara, Cloud Thundaga",
            "Barret: Cloud ATB Boost, Combo, Cloud Thundaga, Turbo Ether Cloud",
            "Tifa: 2 ATB, Thundara, swap to Barret",
          ],
          [
            "Barret: Cloud Thundaga, Tifa Unbridled, Combo",
            "Cloud: Dash, Punisher x4, Operator, Roll",
            "Cloud: Punisher (stagger, almost 2 ATB), Thundaga",
            "Tifa: Omni, Whirl x2, Barret Thunder x2, Cloud Thundaga, Thundara x2",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter15;
