import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
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
            'Take ramp. Break after Cloud says "Don\'t  blame me if ya get sick.". Combo x4.',
            "Security Officer: Combo.",
            "Security Officer x2: Accelerate for 7s. Break for 1s. Spinning Slash.",
            "Security Officer x3: Take ramp. Break. Let 1 pass, Spinning Slash, Combo last.",
          ],
          [
            'Break until "We\'re not screwed, are we?".',
            "Elite Security Officer x2: Combo one, Spinning Slash both, Combo other.",
            "Slug-Ray x4: Break when music changes, let 1 pass, Spinning Slash, Combo rest.",
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
          "4th group: Dash, Blizzard Grenadier, Counter/Punisher Officers",
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
          "Fire, Counter, Punisher Shock Trooper",
        ]}
      />
      <Encounter
        enemies="Guard Dog x8"
        instructions={[
          "Grenade C (right, left inputs to select target)",
          "Go behind C, Counter/TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Sweeper x2"
        instructions={[
          "Punisher, Berserk B (until it jumps back, Thunder A for pressure if needed)",
          "Roll left, Cross Slash A (hit both), Focused Thrust if Wedge used mine",
          "Punisher/Berserk/Thunder (use Thunders for pressure)",
          "Save 0.25 ATB",
        ]}
      />
      <Boss
        name="Roche"
        phases={[
          [
            "Berserk, Operator, Counter, Fire",
            "Punisher x2, Operator, Counter, Berserk, Operator, Fire",
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
          "Cloud: Berserk, Deadly Dodge, Cleave, Counter, TRIPOLOSKI",
          "Cloud: Counter/TRIPOLOSKI A/B/C/D",
          "Cloud: Punisher/Divekick E",
          "Cloud: Fire x2 F (stagger)",
        ]}
      />
      <Encounter
        enemies="Mysterious Spectre, Enigmatic Spectre"
        instructions={[
          "Cloud: Punisher full, Operator, Punisher x4, Operator, Berserk, Punisher C",
          "Tifa: Cloud Blizzard, Combo x6, Whirl, Unbridled, TRIPOLOSKI, Combo Enigmatic (stagger)",
          "Tifa: Unbridled, Rise, Omni, Whirl, Divekick, Whirl, Divekick",
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
      />
    </Chapter>
  );
}

export default Chapter4;
