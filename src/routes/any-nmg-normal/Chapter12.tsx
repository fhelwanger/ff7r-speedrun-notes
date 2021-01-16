import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Boss from "../../components/Boss";
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
          "Aerith: Fira x2 Enigmatic",
          "Tifa: 2 ATB, Starshower x2 Enigmatic",
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Remove Accessory" },
                { name: "Fury Ring", source: "aerith", inputs: ["right"] },
              ],
            },
            {
              name: "Barret (L2)",
              equipments: [
                { name: "Earrings", inputs: ["down"] },
                { name: "Remove Armor" },
                {
                  name: "Caliginous Bracelet",
                  source: "aerith",
                  inputs: ["right", "up"],
                },
              ],
            },
            {
              name: "Tifa (L2, L2)",
              equipments: [{ name: "Feathered Gloves", inputs: ["right"] }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Lightning" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "First Strike", source: "tifa" },
                { name: "ATB Boost", source: "inventory", inputs: ["right"] },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice", source: "inventory", inputs: ["up", "up"] },
                { name: "Fire", source: "inventory", inputs: ["left", "down"] },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Parry" },
                { name: "First Strike", source: "aerith" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "", source: "barret" },
                { name: "", source: "barret" },
                { name: "", source: "barret" },
                { name: "" },
              ],
              armor: [],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                {
                  name: "Ice",
                  source: "inventory",
                  inputs: ["down", "down"],
                },
                { name: "Barrier", source: "aerith" },
                { name: "Subversion", source: "tifa" },
              ],
              armor: [
                {
                  name: "Lightning",
                  source: "inventory",
                  inputs: ["down", "down", "down", "down", "down"],
                },
                { name: "Wind", source: "aerith" },
                {
                  name: "Binding",
                  source: "inventory",
                  inputs: ["right", "up", "up"],
                },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "x", ability: "Fire" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x3, Sentry Gun / Elite Riot Trooper x2, Elite Grenadier"
        instructions={[
          "Lure everyone to the top of stairs",
          "Fira, ATB Boost, Fira, TRIPOLOSKI",
        ]}
      />
      <Pick
        item="Orb of Gravity x2"
        optional
        description="Pick in chapter 13 is faster, but relies on a random drop"
      />
      <Encounter
        enemies="Helitrooper x2"
        instructions={[
          "ATB Boost, Fira, Fire B",
          "Dash, Punisher x6, Operator, Fira, Counter A",
        ]}
      />
      <Pick item="Ether" optional />
      <Encounter
        enemies="Helitrooper, Elite Security Officer x2"
        instructions={[
          "ATB Boost, Fira, Fire Heli",
          "Dash, Counter, TRIPOLOSKI",
        ]}
      />
      <Encounter enemies="Elite Riot Trooper x2" instructions={["Fira"]} />
      <Encounter
        enemies="Elite Riot Trooper x2 / Elite Grenadier, Helitrooper"
        instructions={[
          "Riot Troopers: Cloud Fira A, Tifa Fira B, Punisher",
          "Helitrooper / Grenadier: Block for 2 ATB",
          "Helitrooper / Grenadier: Fira, ATB Boost, Fire Helitrooper, Thunder Grenadier",
        ]}
      />
      <Heal description="Cloud 34 MP, Tifa 30 MP." />
      <Encounter
        enemies="Elite Shock Trooper, Helitrooper x2, Sentry Gun x2"
        instructions={[
          "Shock Trooper: Cloud Fira, Tifa Fira, Punisher",
          "Heli A: Fira, ATB Boost, Fire",
          "Heli B: Cloud Fira, Whirl Sentries, Tifa Fira",
          "Sentries: Whirl (2 ATB), Tifa Thunder each",
        ]}
      />
      <Pick item="Elixir" optional />
      <Heal description="Everyone full HP, don't need MP." />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Hardedge", inputs: ["right"] }],
            },
            {
              name: "Tifa (R2)",
              equipments: [
                { name: "Metal Knuckles", inputs: ["up", "up"] },
                { name: "Fury Ring", source: "cloud", inputs: ["right"] },
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
            "Barret: Overcharge, Thunder, Combo, Thunder Helicopter",
            "Barret: Charge x3, Overcharge Reno",
            "Tifa: Starshower",
            "Cloud: Punisher x4, Berserk, Punisher, Wait Pyramid, TRIPOLOSKI",
            "Tifa: Cloud ATB Boost, Combo (2 ATB)",
            "Barret: 2 ATB, Thunder, Swap to Cloud",
          ],
          [
            "Cloud: TRIPOLOSKI, Barret Aero Reno",
            "Tifa: Wait flying, Starshower, Lock Rude",
            "Cloud: Berserk, Starshower, TRIPOLOSKI, Punisher full, TRIPOLOSKI",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter12;
