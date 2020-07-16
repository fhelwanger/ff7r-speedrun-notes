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

function Chapter7() {
  return (
    <Chapter number={7}>
      <Encounter
        enemies="Monodrive x4"
        instructions={["Deadly Dodge, TRIPOLOSKI"]}
      />
      <Pick item="Echo Mist x2" optional />
      <Encounter
        enemies="Monodrive x2, Slug Ray x2"
        instructions={["Punisher Monodrives, Thunder Slug Rays"]}
      />
      <Pick item="Ether" optional />
      <Encounter
        enemies="Sweeper x2, Laser Cannon x2"
        instructions={[
          "Overcharge Laser Cannon, Thunder the other",
          "Berserk, Thunder to pressure",
          "Punisher, Focused Shot to stagger",
          "Thunders when staggered",
        ]}
      />
      <Encounter
        enemies="Elite Shock Trooper, Shock Trooper x2"
        instructions={["Berserk, Overcharge", "Fire / Counter / TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Elite Security Officer x2, Security Officer x4"
        instructions={[
          "Deadly Dodge, Cleave, TRIPOLOSKI",
          "Berserk, TRIPOLOSKI",
        ]}
      />
      <Pick item="the keycard" />
      <Encounter
        enemies="Laser Cannon x2, Monodrive x2"
        instructions={[
          "Deadly Dodge, TRIPOLOSKI Monodrives",
          "Overcharge one Laser Cannon, Thunder other",
          "Careful with the ladder",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Grenadier x2"
        instructions={["Deadly Dodge, Operator left one", "TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Elite Shock Trooper, Laser Cannon x2"
        instructions={[
          "Cloud: Dash, Fire Trooper",
          "Barret: Overcharge Cannon B, Thunder A",
          "Barret: 1 ATB, Fire Trooper",
          "Tifa: Combo until stagger, Whirl + Divekick x2",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer x3, Security Officer x2"
        instructions={[
          "Berserk, TRIPOLOSKI left one",
          "Punisher, TRIPOLOSKI",
          "Whirl, Divekick high HP ones",
        ]}
      />
      <Pick item="Sonic Strikers" />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2"
        instructions={[
          "Dash, TRIPOLOSKI Grenadier",
          "Punisher, Berserk, TRIPOLOSKI",
          "Whirl, Divekick",
        ]}
      />
      <Encounter
        enemies="Elite Shock Trooper x2"
        instructions={[
          "Cloud: Fire",
          "Barret: Overcharge: Fire",
          "Tifa: Combo until stagger, Whirl + Divekick",
          "Tifa: Fire other until staggered, Whirl + Divekick",
        ]}
      />
      <Encounter
        enemies="Riot Trooper x2, Elite Riot Trooper x2, Elite Grenadier"
        instructions={["Grenade", "Punisher/Overcharge + Grenade/Fire"]}
      />
      <Pick item="Hi-Potion x3" />
      <Encounter
        enemies="Cutter"
        instructions={[
          "Cloud: Punisher full, Berserk, Overcharge, Thunder, Focused Shot",
          "Cloud: Punisher full, Berserk",
          "Stagger: Thundara/Thunder",
        ]}
      />
      <Pick item="Ether" />
      <Encounter
        enemies="Monodrive x4"
        instructions={["Dash, Deadly Dodge, TRIPOLOSKI, Overcharge"]}
      />
      <Bench />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether", "Phoenix Down"]}
      />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Iron Blade", upgrade: "Auto - Attack" }],
            },
            {
              name: "Barret",
              weapons: [
                { name: "Light Machine Gun", upgrade: "Auto - Attack, Manual" },
              ],
            },
            {
              name: "Tifa",
              weapons: [
                { name: "Metal Knuckles", upgrade: "Atk+4 x2, Atk+8 x3" },
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
                { name: "Barrier", source: "barret" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Wind", source: "tifa" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Ice", source: "cloud" },
                { name: "Fire" },
              ],
              armor: [{ name: "Revival" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "Ice" },
                { name: "", source: "cloud" },
              ],
              armor: [{ name: "Lightning" }],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Barret",
              equipments: [{ name: "Light Machine Gun" }],
            },
            {
              name: "Tifa",
              equipments: [{ name: "Metal Knucles" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { shortcut: "square", ability: "Thundara" },
                { shortcut: "circle", ability: "Aero" },
              ],
            },
            {
              name: "Tifa",
              shortcuts: [
                { shortcut: "square", ability: "Unbridled Strength" },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Air Buster"
        phases={[
          [
            "Barret: Overcharge",
            "Tifa: Whirl, Roll, Combo x5, Whirl, Divekick",
            "Tifa: Combo x6, Whirl, Divekick, Focused Shot",
            "Tifa: Combo x6, Whirl, Divekick, Focused Thrust",
            "Tifa: Combo x6, Whirl, Divekick, Whirl, Divekick",
          ],
          [
            "Tifa: Combo, Roll, Combo x6, Unbridled, Combo (take Tankbuster)",
            "Barret: Combo, Overcharge, Mega-Potion Tifa",
            "Tifa: Hits to stagger, Omni, Whirl, Divekick",
            "Tifa: Whirl, Divekick, Whirl, Divekick, Barret Thunder",
            "Tifa: Combo x5, Whirl, Divekick, Whirl",
          ],
          [
            "Barret: Combo, Charge, Combo, Combo",
            "Barret: Thunder, Cloud Thundara, Overcharge",
            "Tifa: Defend, Whirl, Divekick, Whirl (take fire)",
            "Cloud: Punisher x4, Berserk, 2 ATB, Thundara",
            "Tifa: Combo x6, Blizzard, Focused Shot, Focused Thrust, Blizzard, Combo",
            "Tifa: Whirl, Divekick",
            "Cloud: Berserk, Punisher full, Thundara",
            "Barret: Overcharge",
          ],
          ["Barret: Somersault, Cloud Thundara, Thunder"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter7;
