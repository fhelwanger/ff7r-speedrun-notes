import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Boss from "../../components/Boss";
import Box from "../../components/Box";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Heal from "../../components/Heal";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";
import UpgradeWeapons from "../../components/UpgradeWeapons";

function Chapter12() {
  return (
    <Chapter number={12}>
      <Encounter
        enemies="Mysterious Spectre, Enigmatic Spectre"
        instructions={[
          "Aerith: Tempest full, Arcane Ward, ATB Boost Mysterious",
          "Aerith: Aerora x2 Enigmatic",
          "Tifa: 2 ATB, Starshower x2 Enigmatic",
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Iron Blade", inputs: ["up"] },
                { name: "Remove Accessory" },
                { name: "Fury Ring", source: "aerith", inputs: ["right"] },
              ],
            },
            {
              name: "Barret (R2)",
              equipments: [
                { name: "Earrings", inputs: ["down"] },
                {
                  name: "Caliginous Bracelet",
                  source: "aerith",
                  inputs: ["right", "up"],
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
                { name: "ATB Boost", source: "aerith" },
                { name: "Lightning" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "First Strike", source: "aerith" },
                { name: "Fire" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Ice", source: "cloud" },
                { name: "Binding", source: "tifa" },
                {
                  name: "Wind",
                  source: "inventory",
                  inputs: ["right", "square", "up"],
                },
              ],
              armor: [
                { name: "Lightning", source: "cloud" },
                { name: "Subversion", source: "tifa" },
                { name: "Barrier", source: "aerith" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "First Strike" },
                { name: "", source: "barret" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Parry" }, { name: "", source: "barret" }],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "", source: "barret" },
                { name: "", source: "barret" },
                { name: "Fire" },
                { name: "" },
              ],
              armor: [{ name: "", source: "barret" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { shortcut: "triangle", ability: "Fire" },
                { shortcut: "x", ability: "Thundara", inputs: ["right", "up"] },
              ],
            },
            {
              name: "Barret (R2)",
              shortcuts: [
                { shortcut: "x", ability: "Thundara", inputs: ["right", "up"] },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x3, Sentry Gun"
        instructions={[
          "Lure officers to the top of stairs, Fira",
          "Punisher x4, Fire if one alive",
        ]}
      />
      <Encounter
        enemies="Elite Riot Trooper x2, Elite Grenadier"
        instructions={["ATB Boost, Fire Grenadier, Fira Riot Troopers"]}
      />
      <Heal description="Ether x1 Cloud" />
      <Pick
        item="Orb of Gravity x2"
        optional
        description="Pick in chapter 13 is faster, but relies on a random drop"
      />
      <Encounter
        enemies="Helitrooper x2"
        instructions={[
          "Run until line on floor, ATB Boost, Fira, Fire left",
          "Punisher jump, full, Operator, Hit, Roll back",
          "Aerial x2, Fira A",
        ]}
      />
      <Heal description="Ether x1 Cloud, good HP" />
      <Pick item="Ether" optional />
      <Encounter
        enemies="Helitrooper, Elite Security Officer x2"
        instructions={[
          "Roll back, ATB Boost, Fira, Fire Heli",
          "Counter, Fira if can hit both, Fire otherwise",
        ]}
      />
      <Box description="x3 while fleeing with Tifa." />
      <Encounter
        enemies="Elite Riot Trooper x2"
        instructions={["Fira right"]}
      />
      <Heal description="Cloud 19 or 23 MP (can use Box)" />
      <Encounter
        enemies="Elite Riot Trooper x2 / Elite Grenadier, Helitrooper"
        instructions={[
          "Riot Troopers: Cloud Fire, Punisher A, Divekick/Punisher B",
          "Helitrooper / Grenadier: Block for 2 ATB",
          "Helitrooper / Grenadier: Fira, ATB Boost, Fire Helitrooper",
          "Helitrooper / Grenadier: Fire Grenadier if 8 MP or more, Combo x5, Whirl otherwise",
        ]}
      />
      <Heal description="Cloud 24 MP, Tifa 33 MP" />
      <Encounter
        enemies="Elite Shock Trooper, Helitrooper x2, Sentry Gun x2"
        instructions={[
          "Cloud: Operator x2, Tifa Thundara, Fira Shock Trooper",
          "Tifa: Hit (stagger), Whirl Shock Trooper",
          "Cloud: Punisher x4, Operator, ATB Boost Shock Trooper",
          "Tifa: Whirl, Divekick Shock Trooper",
          "Tifa: Whirl (2 ATB) Sentries, Cloud Fira, Cloud Fire Helitrooper",
          "Tifa: Thundara Sentries, Parry, Somersault Helitrooper",
        ]}
      />
      <Pick item="Elixir" optional />
      <Heal description="Everyone good HP, don't need MP" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Hardedge", inputs: ["right"] },
                { name: "Power Wristguards", source: "tifa", inputs: ["left"] },
              ],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Hardedge", upgrade: "Auto - Attack" }],
            },
            {
              name: "Tifa (R2)",
              weapons: [{ name: "Metal Knuckles", upgrade: "Auto - Attack" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Reno, Rude"
        phases={[
          [
            "Cloud: Roll and walk back, Counter, Starshower",
            "Cloud: Punisher full, Berserk, TRIPOLOSKI, Whirl",
            "Cloud: Punisher x2, TRIPOLOSKI, Whirl, Punisher",
          ],
          [
            "Barret: Overcharge, Thundara, Combo, Charge x3 Helicopter",
            "Barret: Overcharge Reno",
            "Tifa: Hit, Starshower",
            "Cloud: Punisher x4, Berserk, Punisher (wait Pyramid), TRIPOLOSKI",
            "Tifa: Whirl Reno, Cloud ATB Boost, Combo (2 ATB) Helicopter",
            "Cloud: Barret Thundara",
          ],
          [
            "Cloud: TRIPOLOSKI",
            "Tifa: Parry, Starshower",
            "Cloud: Punisher full, Starshower Rude then Lock Reno, Berserk, TRIPOLOSKI",
            "Cloud: Punisher x2, TRIPOLOSKI, Focused Shot, Punisher",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter12;
