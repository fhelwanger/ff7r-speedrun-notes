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
          "Aerith: Tempest full, Arcane Ward, ATB Boost Mysterious",
          "Aerith: Aerora, Aerora Enigmatic",
          "Tifa: 2 ATB, Starshower, Divekick Enigmatic",
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Fury Ring", source: "aerith" }],
            },
            {
              name: "Tifa",
              equipments: [{ name: "Feathered Gloves" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "First Strike", source: "aerith" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "ATB Boost", source: "aerith" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Subversion" },
                { name: "Fire" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }, { name: "Parry" }],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Wind", source: "cloud" },
                { name: "Ice", source: "cloud" },
                { name: "Fire" },
                { name: "" },
              ],
              armor: [
                { name: "", source: "barret" },
                { name: "", source: "barret" },
                { name: "Ice" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning", source: "aerith" },
                { name: "Wind", source: "aerith" },
                { name: "Binding", source: "inventory" },
              ],
              armor: [{ name: "" }],
              summon: [{ name: "" }],
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
              name: "Tifa",
              weapons: [
                { name: "Metal Knuckles", upgrade: "Auto - Attack" },
                { name: "Feathered Gloves", upgrade: "Auto - Attack" },
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
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x3, Sentry Gun / Elite Riot Trooper x2, Elite Grenadier"
        instructions={[
          "Lure everyone to the top of stairs",
          "ATB Boost, Fira",
          "Ignore Sentry Gun",
        ]}
      />
      <Pick
        item="Orb of Gravity x2"
        optional
        description="Pick in chapter 13 is faster, but relies on a random drop"
      />
      <Encounter
        enemies="Helitrooper x2"
        instructions={["ATB Boost, Fira, Fire B", "Counter and Fira A"]}
      />
      <Pick item="Ether" optional />
      <Encounter
        enemies="Helitrooper, Elite Security Officer x2"
        instructions={["ATB Boost, Fira, Fire Heli", "Counter, TRIPOLOSKI"]}
      />
      <Encounter enemies="Elite Riot Trooper x2" instructions={["Fira"]} />
      <Encounter
        enemies="Elite Riot Trooper x2"
        instructions={["ATB Boost, Fira, (Fire + Punisher)", "Block for 2 ATB"]}
      />
      <Encounter
        enemies="Elite Grenadier, Helitrooper"
        instructions={["Fira, Fire Heli", "Tifa Divekick Grenadier"]}
      />
      <Encounter
        enemies="Elite Shock Trooper, Helitrooper x2, Sentry Gun x2"
        instructions={[
          "Shock Trooper: Cloud Fira, Tifa Fira, Punisher",
          "Heli A: Fira, ATB Boost, Fire",
          "Heli B: Cloud Fira, Whirl Sentries, Tifa Fira",
          "Sentries: Whirl, Starshower",
        ]}
      />
      <Pick item="Elixir" optional />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Barrier"]}
      />
      <Bench optional description="Don't need MP for the Turks" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Hardedge" }],
            },
            {
              name: "Tifa",
              equipments: [
                { name: "Metal Knuckles" },
                { name: "Fury Ring", source: "cloud" },
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
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [{ name: "ATB Boost" }, { name: "Parry", source: "tifa" }],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Barrier", source: "inventory" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "Ice", source: "inventory" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus", source: "cloud" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Binding" },
              ],
              armor: [
                { name: "" },
                { name: "Ice", source: "aerith" },
                { name: "Fire", source: "aerith" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Wind" },
                { name: "", source: "barret" },
                { name: "", source: "barret" },
                { name: "" },
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
            "Cloud: Punisher full, Berserk, TRIPOLOSKI, Whirl",
            "Cloud: Punisher x2, TRIPOLOSKI, Whirl, Punisher",
          ],
          [
            "Barret: Overcharge, Thunder, Combo, Charge x3 Helicopter",
            "Barret: Overcharge Reno",
            "Cloud: Dash, Starshower, Punisher full, Berserk, Punisher x4, Operator",
            "Cloud: Wait Pyramid, TRIPOLOSKI",
            "Tifa: Cloud ATB Boost, 2 ATB",
            "Barret: Thunder, Charge, Charge, Overcharge, Thunder",
          ],
          [
            "TRIPOLOSKI, Aero Reno",
            "Punisher, Starshower, TRIPOLOSKI x2",
            "Can use Sleep as a backup",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter12;
