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
                { name: "Lightning", source: "cloud" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Time", source: "tifa" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist", source: "barret" },
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
      <Heal description="Ether x1 Cloud." />
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
      <Heal description="Cloud 30 MP." />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2, Guard Dog x3"
        instructions={[
          "1st: ATB Boost, Fira All x2, Divekick Dog",
          "2nd: Fira All, Cross Slash Dogs, Overpower Grenadiers",
        ]}
      />
      <Heal description="Cloud 40 MP." />
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
      <Bench description="Or Cloud 14 MP, everyone full HP." />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down"] },
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
                  inputs: ["down", "down"],
                },
                {
                  name: "Heavy-Duty Bracer",
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
                { name: "Time", source: "barret" },
                { name: "Magnify" },
                { name: "", source: "tifa" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Fire", source: "cloud" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Lightning", source: "cloud" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
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
      <Boss
        name="Specimen"
        phases={[
          [
            "Cloud: Dash, Lock Claw, Fira",
            "Barret: Overcharge Claw",
            "Tifa: Whirl, Parry, Whirl Specimen",
            "Tifa: Starshower x2, Cloud Haste All, Whirl, ATB Boost",
          ],
          [
            "Tifa: Whirl, Lock Claw",
            "Cloud: Counter, Punisher (take Seize)",
            "Tifa: Divekick, Whirl, Combo Claw",
            "Tifa: Whirl, Focused Shot, Focused Thrust, Focused Strike x3",
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
                { name: "ATB Boost", source: "tifa" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Time", source: "cloud" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "Subversion" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "", source: "cloud" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2, Elite Riot Trooper x2"
        instructions={["Cloud: Fira All x2, TRIPOLOSKI/Divekick"]}
      />
      <Encounter
        enemies="Armored Troopers x2"
        instructions={[
          "Cloud: ATB Boost, Thundaga x2 left",
          "Tifa: Overpower, Combo, Overpower if alive",
        ]}
      />
    </Chapter>
  );
}

export default Chapter16;
