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

function Chapter12() {
  return (
    <Chapter number={12}>
      <Encounter
        enemies="Mysterious Spectre, Enigmatic Spectre"
        instructions={[
          "Aerith: ATB Boost, Arcane Ward",
          "Tifa: Starshower, Whirl, Whirl Mysterious",
          "Cloud: Punisher full, Focused Thrust Enigmatic",
          "Cloud: Punisher full, Focused Thrust Enigmatic",
          "Staggered: Aerith Aerora, Starshower, Aerith Aerora, Starshower",
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Iron Blade" },
                { name: "Fury Ring", source: "aerith" },
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
                { name: "ATB Boost", source: "aerith" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike", source: "tifa" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "First Strike", source: "aerith" },
              ],
              armor: [{ name: "Lightning" }, { name: "Parry" }],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Subversion", source: "tifa" },
                { name: "Ice", source: "cloud" },
                { name: "Fire" },
              ],
              armor: [
                { name: "", source: "barret" },
                { name: "", source: "barret" },
                { name: "", source: "barret" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind", source: "aerith" },
                { name: "" },
                { name: "Lightning", source: "aerith" },
              ],
              armor: [{ name: "Ice", source: "aerith" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Hardedge", upgrade: "Auto - Attack, Manual" }],
            },
            {
              name: "Tifa",
              weapons: [
                { name: "Feathered Gloves", upgrade: "Auto - Attack" },
                { name: "Metal Knuckles", upgrade: "Atk+4, Atk+10 x2" },
              ],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Fire" }],
            },
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "square", ability: "Thundara" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x3, Sentry Gun"
        instructions={["Lure guards, ATB Boost, Fira", "Ignore Sentry Gun"]}
      />
      <Encounter
        enemies="Elite Riot Trooper x2, Elite Grenadier"
        instructions={["ATB Boost, Fira Riots", "Dash, Punisher/Counter"]}
      />
      <Pick
        item="Orb of Gravity x2"
        optional
        description="Pick in chapter 13 is faster, but relies in a random drop"
      />
      <Encounter
        enemies="Helitrooper x2"
        instructions={["ATB Boost, Fira, Fire B", "Counter and Fira A"]}
      />
      <Pick item="Ether" optional />
      <Encounter
        enemies="Helitrooper, Elite Security Officer x2"
        instructions={["ATB Boost, Fira, Fire Heli", "TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Elite Riot Trooper x2"
        instructions={["ATB Boost, Fira"]}
      />
      <Encounter
        enemies="Elite Riot Trooper x2"
        instructions={["ATB Boost, Fira, (Fire + Punisher)", "Block for 2 ATB"]}
      />
      <Encounter
        enemies="Elite Grenadier, Helitrooper"
        instructions={["Fira, Fire Heli", "Tifa Starshower Grenadier"]}
      />
      <Encounter
        enemies="Elite Shock Trooper, Helitrooper x2, Sentry Gun x2"
        instructions={[
          "Shock Trooper: Cloud Fira, Tifa Fira, Punisher",
          "Heli A: Fira, ATB Boost, Fire",
          "Heli B: Cloud Fira, Whirl Sentries, Tifa Fira",
          "Sentries: Whirl + Thundara/Starshower",
        ]}
      />
      <Pick item="Elixir" optional />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Phoenix Down x2"]}
      />
      <Bench optional description="Don't need MP for the Turks" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Hardedge" },
                { name: "Power Wristguards", source: "tifa" },
              ],
            },
            {
              name: "Barret",
              equipments: [
                { name: "Earrings", source: "aerith" },
                { name: "Caliginous Bracelet", source: "aerith" },
              ],
            },
            {
              name: "Aerith",
              equipments: [{ name: "Remove armor" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Parry", source: "tifa" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }, { name: "Refocus" }],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [{ name: "Fire" }, { name: "First Strike" }],
              armor: [
                { name: "Lightning" },
                { name: "ATB Boost", source: "cloud" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Binding", source: "inventory" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Ice" },
                { name: "" },
                { name: "Fire", source: "aerith" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "", source: "inventory" },
                { name: "Ice" },
                { name: "", source: "barret" },
              ],
              armor: [],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Reno, Rude"
        phases={[
          [
            "Cloud: Roll back, Parry left, Counter, Starshower",
            "Cloud: Punisher full, Berserk, TRIPOLOSKI, Whirl, TRIPOLOSKI, Whirl",
          ],
          [
            "Barret: Combo, Thunder, Overcharge, Charge, Charge on Helicopter",
            "Tifa: Starshower, Whirl, Divekick, Whirl on Reno",
            "Cloud: Combo full on Helicopter",
            "Tifa: 1 ATB, ATB Boost",
            "Barret: Thunder, Overcharge",
          ],
          [
            "TRIPOLOSKI, Aero, Starshower, Starshower",
            "Can use Sleep as a backup",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter12;
