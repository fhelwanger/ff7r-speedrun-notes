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
              name: "Tifa",
              equipments: [
                { name: "Metal Knuckles" },
                { name: "Cog Bangle" },
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
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Binding" },
                { name: "ATB Assist" },
                { name: "" },
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
                { name: "Wind", source: "barret" },
                { name: "Fire", source: "cloud" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Parry" },
                { name: "" },
              ],
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
        enemies="Elite Security Officer x3 / Elite Security Officer x3, Elite Grenadier x2"
        instructions={[
          "Cloud: Fira All, Punisher, TRIPOLOSKI, ATB Boost",
          "Cloud: Fira All, Cross Slash",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer x2 / 3-C Soldier Operator x2"
        instructions={[
          "Cloud: Fira All, Punisher, TRIPOLOSKI, ATB Boost",
          "Cloud Fira All / Tifa Starshowers",
        ]}
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
        enemies="Elite Security Officer x2 / Elite Security Officer x3"
        instructions={["Fira All/TRIPOLOSKI + Starshower"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Power Wristguards", source: "tifa" },
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
                { name: "Binding", source: "barret" },
                { name: "Lightning" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "", source: "tifa" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Magnify", source: "cloud" },
                { name: "Wind", source: "tifa" },
                { name: "" },
              ],
              armor: [{ name: "Time" }, { name: "Ice" }, { name: "Fire" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist", source: "barret" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Parry" },
                { name: "Refocus", source: "cloud" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Cutter x2"
        instructions={[
          "A: Overcharge, Cloud Thundara, Focused Strike until stagger",
          "Stagger: Cloud/Barret Thundara, Whirl + Divekick",
          "B: Cloud 1 ATB, ATB Boost, Thundara, Focused Strike until stagger",
          "Stagger: Cloud/Barret Thundara, Whirl + Divekick",
        ]}
      />
      <Shop name="Chadley" buy={["ATB Stagger x2", "Reset Hardedge"]} />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Supreme Bracer"]}
      />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Caliginous Bracelet", source: "barret" },
                { name: "Supreme Bracer" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Barret",
              weapon: [
                { name: "Time", source: "barret" },
                { name: "Magnify" },
                { name: "Wind" },
                { name: "ATB Stagger", source: "inventory" },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "Ice" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "ATB Stagger", source: "inventory" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Parry" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "square", ability: "Overpower" }],
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
            "Tifa: Combo x6, Whirl, Sleep, Overpower",
            "Tifa: Combo x6, Focused Strike x3, Whirl",
            "Tifa: Combo x3, Unbridled, Combo",
          ],
          [
            "Barret: Overcharge Specimen",
            "Tifa: Omni, Cloud Firaga Left Claw",
            "Tifa: Starshower, Divekick, Whirl, Whril, Whril",
          ],
          [
            "Tifa: Avoid Expulsion, Barret Haste All",
            "Cloud: Fira Left Claw, ATB Boost, Counter, Sleep",
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
              equipments: [{ name: "Fury Ring", source: "tifa" }],
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
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "ATB Stagger", source: "barret" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Time" },
                { name: "Binding", source: "cloud" },
                { name: "Wind" },
                { name: "", source: "cloud" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "ATB Assist", source: "tifa" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice", source: "barret" },
                { name: "ATB Stagger" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [
                { name: "Fire", source: "barret" },
                { name: "Parry" },
                { name: "Refocus" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Thundaga" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2, Elite Riot Trooper x2"
        instructions={["Cloud: Fira All x2, ATB Boost, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Armored Troopers x2"
        instructions={["Cloud: ATB Boost, Thundaga, Barret Thundara, Thundaga"]}
      />
    </Chapter>
  );
}

export default Chapter16;
