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
          "Aerith: Aerora x2 Enigmatic",
          "Tifa: 2 ATB, Starshower, Divekick, Whirl Enigmatic",
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
                { name: "ATB Boost", source: "aerith" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Refocus" },
                { name: "First Strike", source: "aerith" },
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
                { name: "", source: "cloud" },
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
          "Fira, ATB Boost, Fira, TRIPOLOSKI",
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
        enemies="Elite Riot Trooper x2 / Elite Grenadier, Helitrooper"
        instructions={[
          "Riot Troopers: Cloud Fira A, Tifa Fira B, Punisher",
          "Helitrooper + Grenadier: Block for 2 ATB, Fira, ATB Boost, Fire Helitrooper, Fire Grenadier",
        ]}
      />
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
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
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
                { name: "ATB Boost" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Refocus" }, { name: "First Strike" }],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Subversion" },
                { name: "Fire" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }, { name: "Parry" }],
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
                { name: "" },
                { name: "", source: "barret" },
                { name: "", source: "barret" },
                { name: "" },
              ],
              armor: [],
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
            "Cloud: Starshower, Punisher full, Berserk, Punisher x4, Wait Pyramid, TRIPOLOSKI",
            "Tifa: Cloud ATB Boost, Combo (2 ATB)",
            "Barret: Thunder, Combo, Swap to Cloud",
          ],
          [
            "Cloud TRIPOLOSKI, Barret Aero Reno",
            "Punisher x2, TRIPOLOSKI, Starshower x2, Punisher full, Berserk, TRIPOLOSKI",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter12;
