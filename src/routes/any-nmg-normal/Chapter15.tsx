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
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Heavy Duty Bracer", source: "tifa" },
                { name: "Power Wristguards", source: "barret" },
                { name: "Fury Ring", source: "tifa" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind", source: "aerith" },
                { name: "Magnify" },
                { name: "Lightning" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "Refocus", source: "inventory" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Binding" },
                { name: "ATB Assist", source: "tifa" },
                { name: "" },
              ],
              armor: [
                { name: "Wind", source: "tifa" },
                { name: "Ice" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "barret" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [
                { name: "First Strike", source: "barret" },
                { name: "Parry" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "" },
                { name: "" },
                { name: "" },
              ],
              armor: [],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { ability: "Leader" },
                { shortcut: "square", ability: "Aerora All" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Byobapolis x3"
        instructions={["ATB Boost, Aerora All, Starshower, Aerora All"]}
      />
      <Encounter
        enemies="Cerulean Drake x2"
        instructions={[
          "Barret: Overcharge, Sleep, Tifa Blizzara, Cloud Aerora All",
          "Stagger: Whirl + Divekick",
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "aerith" },
                { name: "Magnify" },
                { name: "Lightning" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Wind", source: "cloud" },
                { name: "" },
                { name: "" },
                { name: "" },
              ],
              armor: [],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Tifa",
              weapons: [{ name: "Metal Knuckles", upgrade: "Manual" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Fira All" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="3-C Soldier Operator x2"
        instructions={["Cloud: Fira, ATB Boost, Fira", "Tifa: Starshowers"]}
      />
      <Encounter
        enemies="Guard Dog, Elite Security Officer x2"
        instructions={["Cloud: Fira All, Punisher"]}
      />
      <Encounter
        enemies="Helitrooper, Elite Security Officer x2"
        instructions={["Cloud: Fira Helitrooper, Fira All, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2"
        instructions={["Starshower"]}
      />
      <Encounter
        enemies="Helitrooper, Elite Security Officer x2, Elite Grenadier x2"
        instructions={[
          "Barret: Overcharge, Fira x2 Helitrooper",
          "Cross Slash/Fira All/Starshower/Divekick",
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Platinum Earrings", "Time"]}
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
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Time", source: "inventory" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [{ name: "First Strike" }, { name: "Parry" }],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Thundara" }],
            },
            {
              name: "Barret",
              shortcuts: [{ shortcut: "square", ability: "Thundara" }],
            },
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "square", ability: "Thundara" }],
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
                { name: "Wind", source: "aerith" },
                { name: "Magnify" },
                { name: "Lightning", source: "cloud" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "" },
                { name: "" },
                { name: "" },
              ],
              armor: [],
              summon: [{ name: "" }],
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
                { name: "Fire", source: "aerith" },
                { name: "Fire", source: "tifa" },
                { name: "Lightning" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Time" },
                { name: "Magnify", source: "cloud" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [{ name: "First Strike" }, { name: "Parry" }],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Wind", source: "cloud" },
                { name: "" },
                { name: "" },
                { name: "" },
              ],
              armor: [],
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
      <Encounter enemies="Elite Helitrooper x2" instructions={["All: Fira"]} />
      <Bench />
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
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
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "circle", ability: "Haste All" }],
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
            "Barret: Overcharge, Combo, Thunder x2",
            "Barret: Combo + Charge x2, Thundara x2",
          ],
          [
            "Barret: Overcharge",
            "Cloud: Thundaga, Tifa Thundara, ATB Boost, Thundaga",
            "Barret: Turbo Ether Cloud",
            "Tifa: 2 ATB, Thundara, Swap to Barret",
          ],
          [
            "Barret: Cloud Thundaga, Tifa Haste All, Combo",
            "Cloud: Dash, Punisher x4, Operator, Roll",
            "Stagger: Cloud 2 ATB, Thundaga",
            "Tifa: Whirl x2, Cloud Thundaga/Tifa Thundara/Barret Thunder",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter15;
