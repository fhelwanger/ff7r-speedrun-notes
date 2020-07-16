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
                { name: "Ice" },
                { name: "Lightning", source: "inventory" },
              ],
              armor: [{ name: "Deadly Dodge" }],
              summon: [{ name: "Ifrit", source: "inventory" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire", source: "inventory" },
                { name: "Ice", source: "inventory" },
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
        instructions={[
          "Fire Riot Trooper",
          "Fire, Punisher Elite Security Officer",
        ]}
      />
      <Encounter
        enemies="Shock Trooper,  Elite Grenadier"
        instructions={[
          "Berserk Elite Grenadier, Fire Shock Trooper",
          "Punisher, Fire",
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
          "Punisher full, Berserk B, Thunder A",
          "Cross Slash A (hit both)",
          "Punisher, Berserk, Thunder...",
          "Save 1 ATB",
        ]}
      />
      <Boss
        name="Roche"
        phases={[
          ["Berserk, Operator, Fire", "Counter, 2 ATB, Fire, Fire"],
          [
            "Dash, Counter, Punisher full, Focused Thrust when pressured",
            "Staggered: Punisher, Berserk, Fire",
            "Roll when flames",
          ],
        ]}
      />
      <Pick item="Revival" />
      <Encounter
        enemies="Mysterious Spectre"
        instructions={[
          "Kill B and C first",
          "Deadly Dodge, Cleave, Fire, Punisher",
          "Cross Slash, Whirl, Divekick",
        ]}
      />
      <Encounter
        enemies="Mysterious Spectre, Enigmatic Spectre"
        instructions={[
          "Deadly Dodge, Cleave",
          "Mysterious x2: Fire, Punisher (stagger)",
          "Enigmatic: Fire/Focused Thrust, Punisher/Berserk until stagger",
          "Stagger: Cross Slash, Divekick, Whirl",
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
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike", source: "inventory" }],
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
