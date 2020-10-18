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
        instructions={["Berserk, Punisher Monodrives, Thunder Slug Rays"]}
      />
      <Pick item="Ether" optional />
      <Encounter
        enemies="Sweeper x2, Laser Cannon x2"
        instructions={[
          "Barret: Overcharge Laser Cannon A, Thunder B",
          "Cloud: Berserk, Thunder to pressure",
          "Cloud: Punisher, Focused Shot/Focused Thrust to stagger",
          "Cloud/Tifa Thunder when staggered",
        ]}
      />
      <Encounter
        enemies="Elite Shock Trooper, Shock Trooper x2"
        instructions={[
          "Berserk, Punisher x2, Operator, Blizzard",
          "Counter/TRIPOLOSKI/Punisher",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer x2, Security Officer x4"
        instructions={["Berserk, Punisher/TRIPOLOSKI"]}
      />
      <Pick item="the keycard" />
      <Encounter
        enemies="Laser Cannon x2, Monodrive x2"
        instructions={[
          "Deadly Dodge, TRIPOLOSKI Monodrives",
          "Overcharge Laser Cannon B, Thunder A",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Grenadier x2"
        instructions={["Berserk, Operator Security Officer, Roll, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Elite Shock Trooper, Laser Cannon x2"
        instructions={[
          "Barret: Overcharge Cannon B, Thunder A, Combo B",
          "Cloud Blizzard, Barret Fire Trooper",
          "Tifa: Combo until stagger, Whirl/Divekick",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer x3, Security Officer x2"
        instructions={[
          "Berserk, TRIPOLOSKI the one in computer",
          "Punisher/TRIPOLOSKI",
        ]}
      />
      <Pick item="Sonic Strikers" />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2"
        instructions={[
          "Dash, Berserk, Operator Grenadier",
          "Punisher/TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Elite Shock Trooper x2"
        instructions={[
          "Cloud: Berserk, Blizzard (stagger), Punisher full, Overcharge A",
          "Tifa: Whirl/Divekick A",
          "Blizzard to stagger B, Whirl/Divekick",
        ]}
      />
      <Encounter
        enemies="Riot Trooper x2, Elite Riot Trooper x2, Elite Grenadier"
        instructions={["Grenade/Punisher Riot Troopers", "Punisher Grenadier"]}
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
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether", "Phoenix Down"]}
      />
      <Bench />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [
                {
                  name: "Buster Sword",
                  upgrade: "Auto - Attack, Auto - Balanced, Auto - Attack",
                },
                { name: "Iron Blade", upgrade: "Auto - Attack" },
              ],
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
              equipments: [
                { name: "Metal Knuckles" },
                { name: "Power Wristguards", source: "cloud" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Barrier", source: "barret" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Ice" }, { name: "Deadly Dodge" }],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Fire", source: "cloud" },
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
              armor: [{ name: "Wind" }],
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
            "Tifa: Combo x6, Whirl, Focused Shot, Divekick, Blizzara",
            "Tifa: Combo x6, Whirl, Divekick, Whirl, Divekick, Whirl",
          ],
          [
            "Tifa: Combo, Roll, Combo x6, Unbridled, Combo (take Tankbuster)",
            "Barret: Combo, Charge, Unbridled, Overcharge",
            "Tifa: Hit to stagger, Rise, Omni, Whirl, Divekick, Barret Thunder",
            "Tifa: Whirl, Divekick, Whirl, Divekick, Whirl, Barret Hi-Potion Tifa",
          ],
          [
            "Barret: Combo, Charge, Combo, Charge, Thunder",
            "Barret: Overcharge, Cloud Thundara, Combo x1",
            "Tifa: Defend, Whirl, Divekick, Whirl",
            "Cloud: Punisher x4, Berserk, Punisher x2, Operator, Thundara",
            "Tifa: Whirl, Blizzard, Focused Shot, Focused Thrust",
            "Tifa: Combo x6, Blizzard, Combo x6 (stagger)",
            "Tifa: Whirl, Divekick, Whirl, Divekick, Whirl",
            "Cloud: Punisher full, Berserk, Divekick",
            "Barret: Overcharge",
          ],
          ["Barret: Somersault, Cloud Thundara, TRIPOLOSKI, Thunder"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter7;
