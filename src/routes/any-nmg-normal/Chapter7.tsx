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
          "Barret: Overcharge Laser Cannon, Thunder the other",
          "Cloud: Berserk, Thunder to pressure",
          "Cloud: Punisher, Focused Shot to stagger",
          "Thunders when staggered",
        ]}
      />
      <Encounter
        enemies="Elite Shock Trooper, Shock Trooper x2"
        instructions={[
          "Berserk, Punisher until dodge, Blizzard",
          "Punisher / TRIPOLOSKI / Counter",
        ]}
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
        instructions={[
          "Punisher x3, Berserk, Operator Security Officer",
          "TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Elite Shock Trooper, Laser Cannon x2"
        instructions={[
          "Barret: Overcharge Cannon B, Thunder A",
          "Cloud Blizzard Trooper",
          "Tifa: Combo until stagger, Whirl + Divekick x2",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer x3, Security Officer x2"
        instructions={[
          "Berserk, TRIPOLOSKI the one in computer",
          "Punisher, Berserk, TRIPOLOSKI",
        ]}
      />
      <Pick item="Sonic Strikers" />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2"
        instructions={[
          "Dash, TRIPOLOSKI Grenadier",
          "Punisher, Berserk, TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Elite Shock Trooper x2"
        instructions={[
          "Blizzard for pressure",
          "Whirl + Divekick when staggered",
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
                { name: "Light Machine Gun", upgrade: "Auto - Attack" },
              ],
            },
            {
              name: "Tifa",
              weapons: [
                {
                  name: "Metal Knuckles",
                  upgrade: "Auto - Attack, Auto - Balanced",
                },
              ],
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
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind", source: "tifa" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Barrier", source: "barret" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Deadly Dodge", source: "cloud" },
                { name: "Fire" },
              ],
              armor: [{ name: "Revival" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Fire" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Fire", source: "cloud" }],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Air Buster"
        phases={[
          [
            "Barret: Roll",
            "Tifa: Whirl, Roll, Combo x6, Whirl, Divekick",
            "Tifa: Combo x6, Whirl, Overcharge, Divekick",
            "Tifa: Combo x6, Whirl, Divekick, Focused Shot, Blizzara",
            "Tifa: Combo x3, Whirl, Divekick, Whirl, Divekick, Whirl",
          ],
          [
            "Tifa: Combo, Roll, Combo x6, Unbridled, Combo (take Tankbuster)",
            "Barret: Combo, Charge, Unbridled, Overcharge",
            "Tifa: Hit to stagger, Rise, Omni, Whirl, Divekick",
            "Tifa: Whirl, Divekick, Whirl, Divekick, Whirl, Barret Mega-Potion Tifa",
          ],
          [
            "Barret: Combo, Charge, Combo, Charge",
            "Barret: Thunder, Overcharge, Cloud Thundara, Combo",
            "Tifa: Defend, Whirl, Divekick, Whirl",
            "Cloud: Berserk, 2 ATB, Thundara",
            "Tifa: Whirl, Blizzard, Focused Shot, Focused Thrust, Blizzard, Combo",
            "Tifa: Whirl, Divekick, Whirl",
            "Cloud: Berserk, Thunder, Divekick, 1 ATB",
            "Barret: Overcharge",
          ],
          ["Barret: Somersault, Cloud Thundara, Thunder"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter7;
