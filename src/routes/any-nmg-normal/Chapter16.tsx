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
              name: "Barret",
              equipments: [{ name: "Cog Bangle", inputs: ["right"] }],
            },
            {
              name: "Tifa (R2)",
              equipments: [
                { name: "Supernatural Wristguards", inputs: ["down"] },
                { name: "Metal Knuckles", inputs: ["down", "down"] },
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
                { name: "Time", source: "tifa" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "", source: "tifa" }],
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
                { name: "Binding", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice", source: "cloud" },
                { name: "Barrier", source: "cloud" },
                { name: "ATB Assist", source: "barret" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "Parry" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
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
              name: "Tifa (R2, R2)",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Overpower",
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
      <Heal description="Ether Cloud." />
      <Encounter
        enemies="Elite Security Officer x2 / 3-C Soldier Operator x2"
        instructions={[
          "Cloud: Fira All",
          "Tifa: Whirl",
          "Barret: Cloud ATB Boost, Thundaga",
          "Barret: Starshower, Divekick, Overcharge",
        ]}
      />
      <Heal description="Ether Cloud." />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2, Guard Dog x3"
        instructions={[
          "1st: ATB Boost, Fira All x2, Divekick Dog",
          "2nd: Fira All, Cross Slash Dogs, Overpower Grenadiers",
        ]}
      />
      <Heal description="Ether Cloud x2." />
      <Encounter
        enemies="Elite Riot Trooper x3, 3-C Soldier Operator x2, Guard Dog x3"
        instructions={[
          "Cloud: Fira All",
          "Tifa: Starshower Soldiers",
          "Cloud: Fira All x3, Cross Slash Soldier",
          "Tifa: Starshower Soldier, Whirl/Divekick/Overpower",
        ]}
      />
      <Heal description="Cloud 20 MP." />
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
      <Dialogue
        optionText="Barret"
        optionPosition="2nd"
        details="to put him as leader"
      />
      <Encounter
        enemies="Cutter x2"
        instructions={[
          "Barret: Overcharge A",
          "Cloud: 2 ATB, Thundara A",
          "Tifa: Combo (until pressure), Focused Strike x3 (stagger)",
          "Tifa: Cloud/Barret Thundara, Whirl/Divekick",
          "Cloud: 1 ATB, ATB Boost, Thundara B",
          "Tifa: Whirl, Focused Strike x3 (stagger)",
          "Tifa: Cloud Thundaga, Barret Thundara, Whirl/Divekick",
        ]}
      />
      <Bench />
      <Shop
        name="Vending Machine"
        sell={[
          { name: "Titanium Bangle" },
          { name: "Caliginous Bracelet" },
          { name: "Power Wristguards" },
          { name: "Earrings" },
        ]}
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down"] },
          { name: "Ether x6", inputs: ["down"] },
          { name: "Ether x2", inputs: ["down"] },
          { name: "Supreme Bracer", inputs: ["down", "down"] },
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                {
                  name: "Supreme Bracer",
                  inputs: ["right"],
                },
                {
                  name: "Platinum Earrings",
                  source: "barret",
                  inputs: ["up", "up"],
                },
              ],
            },
            {
              name: "Barret (R2)",
              equipments: [
                {
                  name: "Supernatural Wristguards",
                  source: "tifa",
                  inputs: ["left"],
                },
                {
                  name: "Heavy-Duty Bracer",
                  source: "tifa",
                  inputs: ["up"],
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
                { name: "Time", source: "cloud" },
                { name: "Magnify" },
                { name: "Lightning" },
                { name: "Fire", source: "cloud" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Barrier", source: "tifa" },
                { name: "Lightning", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "barret" },
                { name: "Fire" },
                { name: "Subversion" },
                { name: "Wind", source: "barret" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Ice" },
                { name: "Binding" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "ATB Boost", source: "cloud" },
                { name: "ATB Assist" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "Parry" },
                { name: "First Strike" },
                { name: "ATB Stagger", source: "cloud" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Specimen"
        phases={[
          [
            "Cloud: Dash, Lock Claw, Fira",
            "Barret: Overcharge Claw",
            "Tifa: Whirl, Parry, Whirl Specimen",
            "Tifa: Starshower x2, Cloud Haste All, Whirl, Combo",
          ],
          [
            "Tifa: Parry up-right, ATB Boost, Lock Claw",
            "Cloud: Counter, Punisher (take Seize)",
            "Tifa: Divekick, Whirl, Combo Claw",
            "Tifa: Whirl, Focused Shot, Focused Thrust, Combo x6, Focused Strike x2",
            "Tifa: Starshower x2, Cloud Mega-Potion Tifa",
            "Barret: Overcharge",
            "Tifa: Lifesaver, Whirl, Combo x6, Whirl",
          ],
          [
            "Tifa: Parry x2, Starshower x2, Cloud/Barret Mega-Potion Tifa, Somersault",
          ],
        ]}
      />
      <Bench description="Or heal Cloud full MP, good HP." />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                {
                  name: "Supernatural Wristguards",
                  source: "barret",
                  inputs: ["up"],
                },
                {
                  name: "Fury Ring",
                  source: "tifa",
                  inputs: ["right"],
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
                { name: "Fire", source: "cloud" },
                { name: "Magnify" },
                { name: "Lightning" },
                { name: "Time", source: "cloud" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost", source: "tifa" },
                { name: "ATB Stagger", source: "tifa" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Barrier", source: "cloud" },
                { name: "ATB Assist" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "Parry" },
                { name: "First Strike" },
                { name: "Lightning", source: "cloud" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2, Elite Riot Trooper x2"
        instructions={["Cloud: Fira All x2, ATB Boost, TRIPOLOSKI/Divekick"]}
      />
      <Encounter
        enemies="Armored Troopers x2"
        instructions={[
          "Cloud: ATB Boost, Thundaga x2",
          "Tifa: Overpower, Combo, Overpower if alive",
        ]}
      />
    </Chapter>
  );
}

export default Chapter16;
