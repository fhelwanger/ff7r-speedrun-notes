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

function Chapter15() {
  return (
    <Chapter number={15}>
      <Shop name="Vending Machine" buy={["Time"]} />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Fury Ring", source: "tifa" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind", source: "inventory" },
                { name: "Magnify" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus", source: "tifa" },
                { name: "ATB Assist", source: "tifa" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [{ name: "Fire" }, { name: "" }, { name: "Parry" }],
              armor: [
                { name: "Lightning" },
                { name: "Ice", source: "cloud" },
                { name: "Time", source: "inventory" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Barret",
              weapons: [{ name: "Light Machine Gun", upgrade: "Manual" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { shortcut: "square", ability: "Thundara" },
                { shortcut: "circle", ability: "Aerora All" },
              ],
            },
            {
              name: "Barret",
              shortcuts: [
                { shortcut: "circle", ability: "Aerora" },
                { shortcut: "square", ability: "Thundara" },
              ],
            },
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "circle", ability: "Thundara" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Byobapolis x3"
        instructions={[
          "Cloud: ATB Boost, Aerora All x2",
          "Cross Slash, Overcharge",
        ]}
      />
      <Encounter
        enemies="Cerulean Drake x2"
        instructions={[
          "Cloud: ATB Boost",
          "Barret: Overcharge, 2 ATB",
          "Sleep, Aerora/Aerora All",
          "Stagger: Starshower",
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "inventory" },
                { name: "Magnify" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus" },
                { name: "ATB Assist" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Binding" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [{ name: "Ice" }, { name: "", source: "tifa" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "First Strike", source: "barret" },
                { name: "Parry" },
              ],
              armor: [{ name: "Lightning" }, { name: "Ice" }, { name: "Time" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="3-C Soldier Operator x2"
        instructions={[
          "Fira, ATB Boost, Fira",
          "Barret: Overcharge, Fira",
          "Tifa: Divekick",
        ]}
      />
      <Encounter
        enemies="Guard Dog, Elite Security Officer x2"
        instructions={[
          "Tifa Haste Cloud",
          "Fira All, Punisher, Overcharge, TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Helitrooper, Elite Security Officer x2"
        instructions={[
          "Cloud Fira, Barret Fire Helitrooper",
          "Whirl, Divekick Officers",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2"
        instructions={["Cross Slash"]}
      />
      <Encounter
        enemies="Helitrooper, Elite Security Officer x2, Elite Grenadier x2"
        instructions={[
          "Cloud Fira, Barret Fire Helitrooper",
          "Starshower/Whirl, Divekick",
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={[
          "Mega-Potion x3",
          "Ether x2",
          "Phoenix Down x2",
          "Platinum Earrings",
        ]}
      />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Mythril Claws" },
                { name: "Platinum Earrings" },
                { name: "Earrings", source: "barret" },
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
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus" },
                { name: "ATB Assist" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Time", source: "tifa" },
                { name: "", source: "tifa" },
                { name: "Parry" },
                { name: "First Strike", source: "tifa" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Ice" },
                { name: "Fire", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Slug-Ray x3, Shock-Ray x2"
        instructions={["Cloud: ATB Boost, Thundara All, Thundara All"]}
      />
      <Encounter
        enemies="Blast-Ray"
        instructions={[
          "Cloud 2 ATB, Overcharge",
          "Barret Thundara, Tifa Thundara",
          "Cloud Thundara, ATB Boost, Thundara, Thundara",
        ]}
      />
      <Pick item="Turbo Ether" />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind", source: "inventory" },
                { name: "Magnify" },
                { name: "Lightning", source: "cloud" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus" },
                { name: "ATB Assist" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Cerulean Drake, Byobapolis x2"
        instructions={[
          "ATB Boost, Overcharge",
          "Sleep Drake, Aerora All, Aerora All",
          "Cross Slash/Starshower",
        ]}
      />
      <Encounter
        enemies="Byobapolis"
        instructions={["Cloud Aerora", "Overcharge, Maximum Fury"]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind" },
                { name: "Fire", source: "inventory" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Wind", source: "barret" },
                { name: "Binding", source: "barret" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Refocus", source: "cloud" },
                { name: "ATB Assist", source: "cloud" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [{ name: "Ice" }, { name: "" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Time" },
                { name: "Magnify", source: "cloud" },
                { name: "Parry" },
                { name: "First Strike" },
              ],
              armor: [{ name: "Lightning" }, { name: "Ice" }, { name: "Fire" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Blast-Ray x2"
        instructions={[
          "A: Cloud 2 ATB, Overcharge",
          "A: Barret Thundara, Tifa Thundara",
          "A: Cloud Thundara, ATB Boost, Thundara, Thundara",
          "B: Cloud 2 ATB, Tifa/Barret 2 ATB, Tifa/Barret 1 ATB",
          "B: Thundaras",
        ]}
      />
      <Encounter
        enemies="Elite Helitrooper x2"
        instructions={["All: Fira/Firaga"]}
      />
      <Bench />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Phoenix Down x2"]}
      />
      <Menu>
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "circle", ability: "Thundaga" }],
            },
            {
              name: "Barret",
              shortcuts: [{ shortcut: "circle", ability: "Thunder" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Valkyrie"
        phases={[
          [
            "Cloud: Thundaga",
            "Tifa: Haste All",
            "Barret: Overcharge, Combo, Thundara x2",
            "Barret: Combo + Charge x2, Ether self",
            "Barret: Combo, Thunder, Thunder",
          ],
          [
            "Barret: Overcharge",
            "Cloud: 2 ATB, Thundaga, Unbridled, ATB Boost, Thundaga",
            "Barret: Turbo Ether Cloud, Combo + Charge, Thundara, Tifa Thundara",
          ],
          [
            "Barret: Cloud Thundaga, Combo",
            "Cloud: Dash, Punisher x4, Operator, Roll",
            "Punisher full, Omni, Overcharge",
            "Thundaga/Thundaras",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter15;
