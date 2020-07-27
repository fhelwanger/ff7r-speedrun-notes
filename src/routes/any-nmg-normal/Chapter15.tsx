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
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus", source: "inventory" },
                { name: "ATB Assist", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Binding" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "", source: "tifa" },
                { name: "Ice" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "" },
                { name: "Lightning" },
                { name: "Time", source: "inventory" },
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
                { shortcut: "square", ability: "Thundara" },
                { shortcut: "circle", ability: "Aerora All" },
              ],
            },
            {
              name: "Barret",
              shortcuts: [{ shortcut: "circle", ability: "Aerora" }],
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
          "Barret: Overcharge",
          "Barret Sleep, Cloud Aerora, Cloud Aero to stagger",
          "Tifa: Starshower, Whirl, Divekick",
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
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus" },
                { name: "ATB Assist" },
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
      </Menu>
      <Encounter
        enemies="3-C Soldier Operator x2"
        instructions={[
          "Fira, ATB Boost, Fira",
          "Barret: Overcharge, Fira",
          "Tifa: Starshower",
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
        buy={["Mega-Potion x3", "Ether x2", "Platinum Earrings"]}
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
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus" },
                { name: "ATB Assist" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Time", source: "tifa" },
                { name: "" },
                { name: "Lightning" },
                { name: "Fire", source: "tifa" },
              ],
              armor: [{ name: "First Strike" }, { name: "Parry" }],
              summon: [{ name: "", source: "cloud" }],
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
                { name: "", source: "tifa" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus" },
                { name: "Subversion", source: "barret" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Binding" },
                { name: "ATB Assist", source: "cloud" },
              ],
              armor: [{ name: "" }, { name: "Ice" }, { name: "Fire" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Time" },
                { name: "Magnify", source: "cloud" },
                { name: "Fire" },
                { name: "Lightning" },
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
            "Barret: Combo + Charge x2, Thunder x2",
          ],
          [
            "Barret: Overcharge",
            "Cloud: 2 ATB, Thundaga, Tifa Thundara, ATB Boost, Thundaga",
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
