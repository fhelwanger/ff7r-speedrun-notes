import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";
import Shop from "../../components/Shop";
import UpgradeWeapons from "../../components/UpgradeWeapons";

function Chapter4() {
  return (
    <Chapter number={4}>
      <Boss
        name="Bike minigame"
        phases={[
          [
            'Security Officer: Break after Cloud says "Don\'t  blame me if ya get sick.". Combo.',
            "Security Officer x2: Break after tunnel. Spinning Slash.",
            "Security Officer x3: Break after ramp. Let 1 pass, Spinning Slash, Combo last.",
          ],
          [
            'Elite Security Officer x2: Break until "We\'re not screwed, are we?". Spinning Slash + Combo.',
            "Slug-Ray x4: Break, let 1 pass, Spinning Slash, Combo rest.",
          ],
          [
            "Security Officer, Elite Security Officer, Slug-Ray x2: Break, let Security Officer pass, Spinning Slash, Combo rest.",
          ],
          [
            "Security Officer x4: Break, let 2 Security Officer pass, Spinning Slash, Combo rest.",
            "Elite Security Officer x2: Break, Combo to fill special.",
          ],
          ["Roche (9 lightnings)"],
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Deadly Dodge" },
                {
                  name: "Lightning",
                  source: "inventory",
                  inputs: ["up", "up"],
                },
              ],
              armor: [{ name: "Ice" }],
              summon: [{ name: "Ifrit", source: "inventory" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Iron Blade", upgrade: "Auto - Attack" }],
            },
            {
              name: "Tifa",
              weapons: [
                { name: "Leather Gloves", upgrade: "Auto - Attack, Manual" },
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
                  shortcut: "x",
                  ability: "Thunder",
                  inputs: ["down", "down"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Security Officers x17, Grenadier x2"
        instructions={[
          "1st group: Walk 2 steps, Deadly Dodge, Cleave",
          "2nd group: Roll left, TRIPOLOSKI",
          "3rd group: 2 ATB, TRIPOLOSKI",
          "4th group: Dash, Blizzard Grenadier, Punisher Officers",
          "5th group: Berserk, Punisher",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer, Riot Trooper"
        instructions={[
          "Deadly Dodge, Blizzard Riot Trooper, Fire Elite Security Officer",
        ]}
      />
      <Encounter
        enemies="Shock Trooper,  Elite Grenadier"
        instructions={[
          "Counter both, Blizzard Grenadier",
          "Fire, Counter, Punisher, (TRIPOLOSKI or Potion) Shock Trooper",
        ]}
      />
      <Encounter
        enemies="Guard Dog x8"
        instructions={[
          "Dash, Cleave Wedge dogs, Lure them",
          "Counter x2, Blizzard, Punisher/TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Sweeper x2"
        instructions={[
          "Punisher, Berserk B (until it jumps back, Thunder A for pressure if needed)",
          "Cross Slash A (hit both), Focused Thrust if Wedge used mine",
          "Punisher/Berserk/Thunder (use Thunders for pressure)",
          "Save half ATB/Berserk",
        ]}
      />
      <Boss
        name="Roche"
        phases={[
          [
            "Berserk, Operator, Counter, Fire",
            "Punisher x2, Operator, Counter, Punisher x4, Fire",
          ],
          [
            "Fire, Dash, Counter, Punisher full, Focused Thrust",
            "Deadly Dodge, Cleave, Fire, Counter, Punisher full, Berserk",
            "Staggered: Fire x2",
          ],
        ]}
      />
      <Pick item="Revival" />
      <Encounter
        enemies="Mysterious Spectre"
        instructions={[
          "Deadly Dodge, Cleave, Counter",
          "Berserk/TRIPOLOSKIS/Counter",
          "Fire/Divekick E/F",
        ]}
      />
      <Encounter
        enemies="Mysterious Spectre, Enigmatic Spectre"
        instructions={[
          "Cloud: Deadly Dodge, Cleave, Counter if possible",
          "Cloud: Berserk, Punisher x6 Mysterious",
          "Tifa: Combo x6, Whirl, Combo (stagger then kill), Unbridled",
          "Cloud: Blizzard Enigmatic, Punisher full, Berserk (stagger), 2 ATB, Fire",
          "Tifa: Omni, Whirl, Divekick, Cloud Fire, Whril, Divekick",
        ]}
      />
      <Shop
        name="Item Shop"
        sell={[{ name: "Healing" }, { name: "Revival" }]}
      />
      <Shop
        name="Chadley"
        buy={[
          { name: "Wind" },
          { name: "ATB Boost", inputs: ["down", "down"] },
          { name: "First Strike x2", inputs: ["down"] },
        ]}
        reset={[{ name: "Iron Blade", inputs: ["down"] }]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [{ name: "Iron Bangle", source: "barret" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                {
                  name: "First Strike",
                  source: "inventory",
                  inputs: ["right"],
                },
                { name: "Lightning" },
              ],
              armor: [{ name: "Ice" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                {
                  name: "Barrier",
                  source: "inventory",
                  inputs: ["up"],
                },
                {
                  name: "First Strike",
                  source: "inventory",
                  inputs: ["up"],
                },
              ],
              armor: [
                {
                  name: "ATB Boost",
                  source: "inventory",
                  inputs: ["square", "right", "up"],
                },
              ],
              summon: [{ name: "Empty" }],
            },
          ]}
        />
      </Menu>
    </Chapter>
  );
}

export default Chapter4;
