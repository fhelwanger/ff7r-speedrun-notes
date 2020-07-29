import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Shop from "../../components/Shop";

function Chapter16() {
  return (
    <Chapter number={16}>
      <Menu>
        <Equipment
          characters={[
            {
              name: "Barret",
              equipments: [{ name: "Cog Bangle" }],
            },
            {
              name: "Tifa",
              equipments: [
                { name: "Metal Knuckles" },
                { name: "Power Wristguards" },
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
                { name: "Magnify", source: "tifa" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus" },
                { name: "ATB Assist", source: "barret" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Binding" },
                { name: "Subversion", source: "cloud" },
              ],
              armor: [
                { name: "Time", source: "tifa" },
                { name: "Ice" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "barret" },
                { name: "", source: "cloud" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [{ name: "First Strike" }, { name: "Parry" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "circle", ability: "Fira All" }],
            },
            {
              name: "Barret",
              shortcuts: [{ shortcut: "circle", ability: "Haste All" }],
            },
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "circle", ability: "Focused Strike" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x3"
        instructions={["Cloud: Fira All, Punisher, TRIPOLOSKI, ATB Boost"]}
      />
      <Encounter
        enemies="Elite Security Officer x3, Elite Grenadier x2"
        instructions={["Cloud: Fira All, Cross Slash"]}
      />
      <Encounter
        enemies="Elite Security Officer x2"
        instructions={["Cloud: Fira All, Punisher, TRIPOLOSKI, ATB Boost"]}
      />
      <Encounter
        enemies="3-C Soldier Operator x2"
        instructions={["Cloud: Fira All", "Tifa: Starshowers"]}
      />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2, Guard Dog x3"
        instructions={["Fira All, ATB Boost, Starshowers..."]}
      />
      <Encounter
        enemies="Elite Riot Trooper x3, 3-C Soldier Operator x2, Guard Dog x3"
        instructions={["Fira All, ATB Boost, Starshowers..."]}
      />
      <Encounter
        enemies="Elite Security Officer x2"
        instructions={["Fira All or TRIPOLOSKI + Starshower"]}
      />
      <Encounter
        enemies="Elite Security Officer x3"
        instructions={["Fira All or TRIPOLOSKI + Starshower"]}
      />
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
                { name: "Fire" },
                { name: "Ice", source: "barret" },
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
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Binding" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "Time" },
                { name: "Magnify", source: "cloud" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Cutter x2"
        instructions={[
          "Barret: Overcharge, Unbridled, Haste All",
          "Cloud Thundara, Tifa Focused Strike until stagger",
          "Omni, Thundaras",
          "Second cutter: Cloud 1 ATB, ATB Boost, same strat",
        ]}
      />
      <Shop name="Chadley" buy={["ATB Stagger x2"]} />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Supernatural Wristguards"]}
      />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Metal Knuckles" },
                { name: "Fury Ring", source: "cloud" },
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
                { name: "Binding", source: "barret" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "", source: "tifa" },
                { name: "Subversion", source: "barret" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Ice", source: "cloud" },
                { name: "ATB Stagger", source: "inventory" },
              ],
              armor: [{ name: "Magnify" }, { name: "Time" }, { name: "Fire" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist", source: "cloud" },
                { name: "Refocus", source: "cloud" },
                { name: "Lightning" },
                { name: "ATB Stagger", source: "inventory" },
              ],
              armor: [{ name: "First Strike" }, { name: "Parry" }],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Specimen"
        phases={[
          [
            "Cloud: Sleep Specimen",
            "Barret: Overcharge OPT, Haste All, Combo + Charge x2",
            "Tifa: Starshower Left Claw, Whirl, Divekick, Focused Shot Specimen",
            "Tifa: Combo, Whirl, Divekick, Sleep",
            "Tifa: Combo + Focused Strike x3, Unbridled, Combo",
          ],
          [
            "Barret: Overcharge Specimen, Haste All",
            "Tifa: Cloud Firaga Left Claw, Omni, Starshower, Divekick, Whirl, Whril, Whril",
          ],
          [
            "Tifa: Avoid Expulsion, Barret Haste All",
            "Cloud Fira Left Claw, ATB Boost, Counter, Sleep",
            "Tifa: Whirl, Divekick Left Claw",
            "Barret: Overcharge",
            "Tifa: Focused Thrust, Focused Shot, Focused Strike until stagger",
            "Stagger: Unbridled, Omni, Whirl, Divekick, Whirl, Divekick",
          ],
        ]}
      />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Supernatural Wristguards" },
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
                { name: "Fire" },
                { name: "Magnify", source: "barret" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus", source: "tifa" },
                { name: "ATB Stagger", source: "barret" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "ATB Assist", source: "tifa" },
                { name: "Subversion", source: "cloud" },
              ],
              armor: [
                { name: "Time" },
                { name: "Binding", source: "cloud" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice", source: "barret" },
                { name: "", source: "cloud" },
                { name: "Lightning" },
                { name: "ATB Stagger" },
              ],
              armor: [{ name: "Fire", source: "barret" }, { name: "Parry" }],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2, Elite Riot Trooper x2"
        instructions={["Cloud: Fira All x2, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Armored Troopers x2"
        instructions={[
          "Cloud: Cleave, Thundara, Overcharge, ATB Boost",
          "Thundaras",
        ]}
      />
    </Chapter>
  );
}

export default Chapter16;
