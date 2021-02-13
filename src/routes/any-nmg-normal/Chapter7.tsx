import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Heal from "../../components/Heal";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";
import Shop from "../../components/Shop";
import UpgradeWeapons from "../../components/UpgradeWeapons";

function Chapter7() {
  return (
    <Chapter number={7}>
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Power Wristguards", source: "tifa", inputs: ["left"] },
                { name: "Mesmeric Armlet", inputs: ["right"] },
              ],
            },
            {
              name: "Barret (R2)",
              equipments: [
                { name: "Iron Bangle", inputs: ["down", "down"] },
                { name: "Light Machine Gun", inputs: ["right"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Ice" },
                { name: "First Strike" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Barrier", source: "tifa" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [{ name: "Lightning" }, { name: "Wind" }],
              armor: [{ name: "Fire", source: "inventory", inputs: ["down"] }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [{ name: "", source: "cloud" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter enemies="Monodrive x4" instructions={["Dash, TRIPOLOSKI"]} />
      <Pick item="Echo Mist x2" optional />
      <Encounter
        enemies="Monodrive x2, Slug Ray x2"
        instructions={["Punisher Monodrives, Thunder Slug Rays"]}
      />
      <Pick item="Ether" optional />
      <Encounter
        enemies="Sweeper x2, Laser Cannon x2"
        instructions={[
          "Barret: Overcharge, Combo Laser Cannon A, Thunder B",
          "Cloud: Berserk, Thunder to pressure",
          "Cloud: Punisher, Focused Shot/Focused Thrust to stagger",
          "Cloud/Tifa Thunder when staggered",
        ]}
      />
      <Heal description="Ether Cloud, everyone good HP" />
      <Encounter
        enemies="Elite Shock Trooper, Shock Trooper x2"
        instructions={[
          "Berserk, Punisher x2, Operator, Blizzard Elite",
          "Counter/Punisher/TRIPOLOSKI/Divekick",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer x2, Security Officer x4"
        instructions={[
          "Hit Elite, Counter, Berserk",
          "TRIPOLOSKI x2, Divekick",
        ]}
      />
      <Pick item="the keycard" />
      <Encounter
        enemies="Laser Cannon x2, Monodrive x2"
        instructions={[
          "Cloud: Dash, TRIPOLOSKI Monodrives",
          "Barret: Overcharge Laser Cannon B, Thunder A",
          "Barret: Tifa Thunder Monos/Laser",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Grenadier x2"
        instructions={[
          "Berserk, Operator Security Officer",
          "Roll, TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Elite Shock Trooper, Laser Cannon x2"
        instructions={[
          "Barret: Overcharge, ATB Boost, Combo Laser B",
          "Barret: Thunder Laser A, Unbridled",
          "Barret: Cloud Blizzard, 1 ATB, Fire Trooper",
          "Tifa: Omni, Whirl, Divekick",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer x3, Security Officer x2"
        instructions={[
          "Berserk, TRIPOLOSKI the one in computer",
          "Punisher (1 ATB), ATB Boost, Divekick, TRIPOLOSKI/Punisher",
        ]}
      />
      <Pick item="Sonic Strikers" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                {
                  name: "Sonic Strikers",
                  inputs: ["right"],
                },
                {
                  name: "Power Wristguards",
                  source: "cloud",
                  inputs: ["left"],
                },
              ],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [
                {
                  name: "Buster Sword",
                  upgrade: "Auto - Attack, Auto - Balanced, Auto - Attack",
                },
                {
                  name: "Iron Blade",
                  upgrade: "Auto - Attack",
                },
              ],
            },
            {
              name: "Barret (R2)",
              weapons: [
                {
                  name: "Light Machine Gun",
                  upgrade: "Auto - Attack",
                },
              ],
            },
            {
              name: "Tifa (R2)",
              weapons: [
                {
                  name: "Metal Knuckles",
                  upgrade: "Auto - Attack, Auto - Balanced",
                },
                {
                  name: "Sonic Strikers",
                  upgrade: "Auto - Attack",
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
                {
                  shortcut: "circle",
                  ability: "Thundara",
                  inputs: ["right", "up"],
                },
              ],
            },
            {
              name: "Tifa (L2)",
              shortcuts: [
                {
                  shortcut: "circle",
                  ability: "Focused Strike",
                  inputs: ["down", "down"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2"
        instructions={[
          "Barret: Overcharge Grenadier A, ATB Boost, Thunder left Security Officer",
          "Tifa: Combo x3, Focused Strike left Security Officer",
          "Tifa: TRIPOLOSKI, Combo x3, Focused Strike, Divekick right Security Officer",
        ]}
      />
      <Encounter
        enemies="Elite Shock Trooper x2"
        instructions={[
          "Cloud: Dash, Berserk, Punisher (wait attack), Blizzard (stagger) A",
          "Cloud: 1 ATB, ATB Boost, TRIPOLOSKI A",
          "Barret: Overcharge A",
          "Tifa: Whirl, Divekick A, Unbridled",
          "Tifa: Barret Fire/Cloud Blizzard (stagger), Omni, Whirl, Divekick B",
        ]}
      />
      <Encounter
        enemies="Riot Trooper x2, Elite Riot Trooper x2, Elite Grenadier"
        instructions={[
          "Cloud: ATB Boost, Grenade Elite",
          "Tifa: Combo x3, Focused Strike Elite",
          "Barret: Overcharge, Focused Strike (learn) Elite",
          "Cloud: Punisher/TRIPOLOSKI/Focused Shot",
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                {
                  name: "Metal Knuckles",
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
                { name: "Ice" },
                { name: "First Strike" },
                { name: "ATB Boost" },
              ],
              armor: [{ name: "Lightning" }, { name: "Barrier" }],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "First Strike", source: "tifa", inputs: ["right"] },
              ],
              armor: [{ name: "Fire" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "", source: "barret" },
                { name: "Lightning" },
              ],
              armor: [{ name: "" }],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                {
                  shortcut: "triangle",
                  ability: "Focused Thrust",
                  inputs: ["down"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Heal description="Cloud 22 MP" />
      <Pick item="Hi-Potion x3" optional />
      <Encounter
        enemies="Cutter"
        instructions={[
          "Cloud: Punisher x4, Berserk, Thundara, Overcharge",
          "Cloud: 1 ATB, ATB Boost, Focused Shot, Focused Thrust (stagger)",
          "Tifa: Whirl, Cloud Thundara, Divekick, Whirl, Divekick",
        ]}
      />
      <Pick item="Ether" />
      <Encounter
        enemies="Monodrive x4"
        instructions={["Dash, TRIPOLOSKI, Overcharge"]}
      />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down"] },
          { name: "Ether", inputs: ["down"] },
          { name: "Phoenix Down", inputs: ["down", "down"] },
        ]}
      />
      <Bench />
      <Boss
        name="Air Buster"
        phases={[
          [
            "Barret: Roll",
            "Tifa: Whirl, Roll, Combo x6, Whirl, Divekick",
            "Tifa: Combo x6, Whirl, Overcharge, Divekick",
            "Tifa: Combo x6, Whirl, Focused Shot, Divekick, Braver",
            "Tifa: Combo x6, Whirl, Divekick, Whirl, Divekick, Whirl",
          ],
          [
            "Tifa: Combo x3, Roll, Combo x6, Unbridled, Combo (take Tankbuster)",
            "Barret: Combo, Charge, Unbridled, Overcharge",
            "Tifa: Hit to stagger, Rise, Omni, Whirl, Barret Thunder, Divekick",
            "Tifa: Whirl, Divekick, Whirl, Divekick, Whirl, Barret Potion Tifa",
          ],
          [
            "Barret: Combo, Charge, Combo, Charge, Thunder",
            "Barret: Overcharge, Cloud Thundara (wait overcharge shooting), Combo",
            "Tifa: Defend, Whirl, Divekick, Whirl",
            "Cloud: Berserk, Punisher (2 ATB), Operator, Thundara",
            "Tifa: Whirl, Divekick (pressure), Cloud ATB Boost, Combo x3",
            "Tifa: Cloud Blizzara, Focused Shot, Focused Thrust",
            "Tifa: Combo x6, Focused Strike (stagger)",
            "Tifa: Unbridled, Omni, Whirl",
            "Cloud: Punisher full, Berserk, Divekick, Punisher (2 ATB)",
          ],
          [
            "Barret: Overcharge, Somersault, Cloud Thundara, TRIPOLOSKI, Thunder",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter7;
