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
            'Security Officer: Break and hit after "Right...". Combo.',
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
        buy={["Hi-Potion x3", "Ether", "Fire", "Ice", "Lightning"]}
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
        instructions={["Deadly Dodge, Cleave, TRIPOLOSKI", "Save 2 ATB"]}
      />
      <Encounter
        enemies="Elite Security Officer, Riot Trooper"
        instructions={["Fire x2, Punisher Elite Security Officer"]}
      />
      <Encounter
        enemies="Shock Trooper,  Elite Grenadier"
        instructions={[
          "Berserk Elite Grenadier, Fire",
          "Punisher, Fire Shock Trooper",
        ]}
      />
      <Encounter
        enemies="Guard Dog x8"
        instructions={[
          "Dash, Cleave Wedge dogs",
          "Lure them, Counter x2, Blizzard, TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Sweeper x2"
        instructions={[
          "Punisher/Berserk B, Thunder A",
          "Cross Slash A (hit both)",
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
            "Fire",
            "Counter, Punisher full, Focused Thrust if pressured, Roll",
            "Staggered: Punisher, Berserk, Fire",
          ],
        ]}
      />
      <Pick item="Revival" />
      <Encounter
        enemies="Mysterious Spectre"
        instructions={[
          "Deadly Dodge, Cleave, Counter if possible",
          "Berserk, TRIPOLOSKIS",
          "Whirl + Divekick if high HP",
        ]}
      />
      <Encounter
        enemies="Mysterious Spectre, Enigmatic Spectre"
        instructions={[
          "Deadly Dodge, Cleave",
          "Mysterious: Fire, Punisher (stagger), Fire Enigmatic",
          "Mysterious: Fire, Punisher (stagger), Punisher x4 + Focused Thrust Enigmatic",
          "Stagger: Berserk, Cross Slash, Divekick, Whirl",
        ]}
      />
      <Shop name="Chadley" buy={["Wind", "First Strike"]} />
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
