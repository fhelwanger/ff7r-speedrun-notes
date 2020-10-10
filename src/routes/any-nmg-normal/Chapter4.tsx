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
            'Security Officer: Break when Jessie says "Right...". Combo.',
            "Security Officer x2: Break after tunnel. Spinning Slash.",
            "Security Officer x3: Break after ramp. Let 1 pass, Spinning Slash, Combo last.",
          ],
          [
            'Elite Security Officer x2: Break and Defend until "We\'re not screwed, are we?". Spinning Slash + Combo.',
            "Slug-Ray x4: Break until music changes. Spinning Slash, Combo rest.",
          ],
          [
            "Security Officer, Elite Security Officer, Slug-Ray x2: Break, let Security Officer pass, Spinning Slash, Combo rest.",
          ],
          [
            "Security Officer x4: Break, let 2 Security Officer pass, Spinning Slash, Combo rest.",
            "Elite Security Officer x2: Break and hit, Combo to fill special.",
          ],
          ["Roche"],
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={["Ether", "Fire", "Ice", "Lightning"]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Deadly Dodge" },
                { name: "Lightning", source: "inventory" },
              ],
              armor: [{ name: "Ice" }],
              summon: [{ name: "Ifrit", source: "inventory" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice", source: "inventory" },
                { name: "Fire", source: "inventory" },
              ],
              armor: [],
              summon: [{ name: "Empty" }],
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
              shortcuts: [{ shortcut: "square", ability: "Thunder" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Security Officers x17, Grenadier x2"
        instructions={[
          "Deadly Dodge, Cleave, TRIPOLOSKI",
          "Try to Berserk and 2 ATB for next phase",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer, Riot Trooper"
        instructions={["Fire each, Punisher Elite Security Officer"]}
      />
      <Encounter
        enemies="Shock Trooper,  Elite Grenadier"
        instructions={["Berserk Elite Grenadier, Counter, Fire x2"]}
      />
      <Encounter
        enemies="Guard Dog x8"
        instructions={[
          "Dash, Cleave Wedge dogs, Lure them",
          "Counter x3, Blizzard, Punisher, TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Sweeper x2"
        instructions={[
          "Punisher/Berserk B",
          "Cross Slash A (hit both), Focused Thrust if Wedge used mine",
          "Punisher, Berserk, Thunder...",
        ]}
      />
      <Boss
        name="Roche"
        phases={[
          [
            "Berserk, Operator, Counter, Fire",
            "Punisher x2, Operator, Counter, Fire, Punisher",
          ],
          [
            "Fire, Dash, Counter, Punisher full, Focused Thrust, Roll",
            "Fire, Dash, Counter, Punisher full, Berserk, Operator",
            "Staggered: Fire x2, Punisher",
          ],
        ]}
      />
      <Pick item="Revival" />
      <Encounter
        enemies="Mysterious Spectre"
        instructions={[
          "Deadly Dodge, Cleave, Counter if possible",
          "Berserk, TRIPOLOSKIS/Fire/Divekick",
        ]}
      />
      <Encounter
        enemies="Mysterious Spectre, Enigmatic Spectre"
        instructions={[
          "Deadly Dodge, Cleave, Counter if possible",
          "Cloud: Berserk, Punisher x4 on Mysterious",
          "Tifa: Combo x6, Whirl, Unbridled, Combo/Whirl until Mysterious dead",
          "Cloud: Blizzard, Punisher full, Berserk (stagger), Fire on Enigmatic",
          "Tifa: Omni, Whirl, Divekick, Cloud Fire, Whril, Divekick",
        ]}
      />
      <Shop name="Chadley" buy={["Wind", "First Strike", "Reset Iron Blade"]} />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Barret",
              weapons: [{ name: "Gatling Gun", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "First Strike", source: "inventory" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Ice" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Barrier", source: "inventory" },
              ],
              armor: [{ name: "Revival", source: "inventory" }],
              summon: [{ name: "Empty" }],
            },
          ]}
        />
      </Menu>
    </Chapter>
  );
}

export default Chapter4;
