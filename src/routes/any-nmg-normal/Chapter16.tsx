import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
import Boss from "../../components/Boss";
import Break from "../../components/Break";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Heal from "../../components/Heal";
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
                { name: "Metal Knuckles", inputs: ["down", "down"] },
                { name: "Cog Bangle", inputs: ["right"] },
                { name: "Supernatural Wristguards", inputs: ["down"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "Magnify", source: "tifa" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "ATB Assist", source: "barret" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Refocus" },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Wind", source: "cloud" },
                { name: "", source: "inventory" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Time" },
                { name: "Subversion", source: "cloud" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
              ],
              armor: [{ name: "Parry" }, { name: "Lightning" }, { name: "" }],
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
                  ability: "Fira All",
                  inputs: ["down"],
                },
              ],
            },
            {
              name: "Barret (R2)",
              shortcuts: [
                {
                  shortcut: "circle",
                  ability: "Mega-Potion",
                  inputs: ["down", "down"],
                },
              ],
            },
            {
              name: "Tifa (R2)",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Overpower",
                  inputs: ["down", "down"],
                },
              ],
            },
            {
              name: "Aerith (R2)",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Blizzara All",
                },
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
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x3 / Elite Security Officer x3, Elite Grenadier x2"
        instructions={[
          "Cloud: Fira All, Divekick",
          "Cloud: Fira All x2, Divekick",
        ]}
      />
      <Heal description="Ether x1 Cloud" />
      <Encounter
        enemies="Elite Security Officer x2 / 3-C Soldier Operator x2"
        instructions={[
          "Cloud: Fira All",
          "Barret: Overcharge",
          "Tifa: Whirl, Cloud ATB Boost, go to corner, Whirl",
          "Barret: Cloud Thundaga when both on corner, Focused Shot",
          "Barret: Starshower x2",
        ]}
      />
      <Heal description="Ether x2 Cloud" />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2, Guard Dog x3"
        instructions={[
          "1st group: ATB Boost, Fira All x2, Divekick Dog",
          "2nd group: Fira All, Cross Slash Dogs, Overpower Grenadiers",
        ]}
      />
      <Heal description="Ether x1 Cloud" />
      <Encounter
        enemies="Elite Riot Trooper x3, 3-C Soldier Operator x2, Guard Dog x3"
        instructions={[
          "Cloud: Fira All x2, Cross Slash Soldiers",
          "Tifa: Starshower x2, Cloud Fira All, TRIPOLOSKI",
        ]}
      />
      <Heal description="Cloud 20 MP" />
      <Encounter
        enemies="Elite Security Officer x2"
        instructions={["Fira All, Divekick"]}
      />
      <Encounter
        enemies="Elite Security Officer x3"
        instructions={["Fira All, Divekick"]}
      />
      <Break time="59s" description="1st presentation" />
      <Break time="57s" description="2nd presentation" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                {
                  name: "Supernatural Wristguards",
                  source: "tifa",
                  inputs: ["down", "down"],
                },
                {
                  name: "Platinum Earrings",
                  source: "barret",
                  inputs: ["down"],
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
                { name: "Fire" },
                { name: "Magnify" },
                { name: "Refocus", source: "barret", inputs: ["up"] },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Time", source: "tifa" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "tifa" },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Wind" }, { name: "" }, { name: "Barrier" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist", source: "cloud" },
                { name: "Subversion" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "ATB Boost", source: "cloud" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
      </Menu>
      <Dialogue
        optionText="Barret"
        optionPosition="2nd"
        details="to put him as leader"
      />
      <Encounter
        enemies="Cutter x2"
        instructions={[
          "Barret: Overcharge A",
          "Cloud: Berserk, Counter, Thundaga A",
          "Tifa: Whirl, Starshower, Barret Thundara, Starshower, Cloud Thundara (stagger) A",
          "Tifa: Cloud Thundaga, Barret Thundara Claw B",
          "Tifa: 1 ATB, ATB Boost, Starshower x2, Cloud Thundara B",
        ]}
      />
      <Bench description="Or Cloud 14 MP, everyone full HP" />
      <Shop
        name="Vending Machine"
        sell={[
          { name: "Titanium Bangle" },
          { name: "Earrings" },
          { name: "Protective Boots" },
          { name: "Fire" },
        ]}
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down"] },
          { name: "Ether x9", inputs: ["down"] },
          { name: "Ether x2", inputs: ["down"] },
          { name: "Supreme Bracer", inputs: ["down", "down"] },
        ]}
      />
      <Boss
        name="Specimen"
        phases={[
          [
            "Cloud: Dash, Fira Claw",
            "Barret: Overcharge Claw",
            "Tifa: Whirl, Parry, Whirl Specimen",
            "Tifa: Starshower x2, Cloud Haste Barret, Whirl, Combo",
          ],
          [
            "Tifa: Lock Claw, Parry, Whirl",
            "Cloud: Counter, Punisher (take Seize)",
            "Tifa: Whirl, Divekick, Whirl Claw",
            "Tifa: Focused Shot, Focused Thrust Specimen",
            "Tifa: Combo x6, Focused Strike x2 (take Rake, stagger), Starshower",
            "Barret: Overcharge, Cloud Mega-Potion Tifa",
            "Tifa: Lifesaver, Starshower, Whirl, Combo x6, ATB Boost",
          ],
          [
            "Tifa: Parry x2, Starshower",
            "Tifa: Cloud Mega-Potion Tifa, Barret Mega-Potion Barret",
            "Tifa: Starshower, Somersault",
          ],
        ]}
      />
      <Bench description="Or Mega-Potion Cloud x2, Tifa/Barret +1500 HP, Cloud full MP" />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2, Elite Riot Trooper x2"
        instructions={["Cloud: Fira All x2, TRIPOLOSKI/Divekick"]}
      />
      <Encounter
        enemies="Armored Troopers x2"
        instructions={[
          "Cloud: Tifa ATB Boost, Cleave (2 ATB)",
          "Cloud: Thundaga, Starshower, Thundaga left, Tifa Thundara right",
        ]}
      />
    </Chapter>
  );
}

export default Chapter16;
