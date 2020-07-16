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
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Magnify", source: "tifa" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus", source: "barret" },
                { name: "ATB Assist", source: "barret" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind", source: "cloud" },
                { name: "Binding", source: "cloud" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [
                { name: "Ice" },
                { name: "Time", source: "tifa" },
                { name: "" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike", source: "tifa" },
                { name: "Wind", source: "cloud" },
                { name: "Parry" },
                { name: "", source: "tifa" },
              ],
              armor: [{ name: "Lightning" }, { name: "Ice" }, { name: "Fire" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Metal Knuckles" },
                { name: "Power Wristguards" },
              ],
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
              equipments: [{ name: "Mythril Claws" }, { name: "Earrings" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Ice", source: "barret" },
                { name: "Fire" },
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
              armor: [
                { name: "Magnify", source: "cloud" },
                { name: "Time" },
                { name: "" },
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
      <Shop name="Chadley" buy={["ATB Stagger x3"]} />
      <Shop
        name="Vending Machine"
        sell={["Titanium Bangle", "Caliginous Bracelet", "Power Wristguards"]}
        buy={[
          "Mega-Potion x3",
          "Ether x2",
          "Phoenix Down x2",
          "Supernatural Wristguards",
        ]}
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
                { name: "Binding", source: "barret" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus" },
                { name: "ATB Stagger", source: "inventory" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Ice", source: "cloud" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [
                { name: "Magnify" },
                { name: "Time" },
                { name: "ATB Stagger", source: "inventory" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike" },
                { name: "ATB Assist", source: "cloud" },
                { name: "Parry" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "ATB Stagger", source: "inventory" },
                { name: "Fire" },
              ],
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
            "Tifa: Starshower, Whirl, Divekick, Whirl on Left Claw",
            "Barret Focused Shot, Cloud Firaga",
            "Tifa: Combo, Unbridled, Fira, Divekick before stagger (Parry to avoid grabs)",
          ],
          [
            "Barret: Overcharge Specimen, Haste All",
            "Tifa: Cloud Firaga Left Claw, Omni, Starshower, Starshower, Whirl",
          ],
          [
            "Tifa: Cloud Fira Left Claw, Avoid explosion",
            "Cloud: Counter, ATB Boost, Barret Haste All, Sleep",
            "Tifa: Starshower, Divekick Left Claw",
            "Barret: Overcharge, Focused Shot",
            "Cloud: Focused Thrust",
            "Tifa: Focused Strike until stagger",
            "Stagger: Unbridled, Omni, Whirl, Divekick, Whirl",
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
                { name: "Magnify", source: "barret" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Ice" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [
                { name: "Binding", source: "cloud" },
                { name: "Time" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike" },
                { name: "ATB Assist" },
                { name: "Parry" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "ATB Stagger" },
                { name: "Fire" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2, Elite Riot Trooper x2"
        instructions={[
          "Cloud: Firaga All, Cross Slash",
          "Fira with Barret/Tifa to finish",
        ]}
      />
      <Encounter
        enemies="Armored Troopers x2"
        instructions={[
          "Thundagas/Thundaras Armored",
          "Stay away if eject",
          "Fira + Physical Enhanced",
        ]}
      />
    </Chapter>
  );
}

export default Chapter16;
