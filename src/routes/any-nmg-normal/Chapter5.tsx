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

function Chapter5() {
  return (
    <Chapter number={5}>
      <Pick item="Healing" />
      <Encounter
        enemies="Slug Ray x5"
        instructions={[
          "Punisher full, Berserk, TRIPOLOSKI, Punisher",
          "Cross Slash D/E",
        ]}
      />
      <Pick item="Elixir" optional />
      <Menu>
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [{ ability: "Leader" }],
            },
          ]}
        />
      </Menu>
      <Encounter enemies="Wererat x3" instructions={["Tifa: TRIPOLOSKI"]} />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Iron Blade", upgrade: "Auto - Attack" }],
            },
            {
              name: "Barret (R2)",
              weapons: [{ name: "Gatling Gun", upgrade: "Auto - Attack" }],
            },
            {
              name: "Tifa (R2)",
              weapons: [{ name: "Leather Gloves", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ ability: "Leader" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "ATB Boost", source: "tifa" },
              ],
              armor: [{ name: "Ice" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind", source: "inventory", inputs: ["right"] },
              ],
              armor: [],
              summon: [{ name: "Empty" }],
            },
            {
              name: "Tifa",
              weapon: [{ name: "Barrier" }, { name: "First Strike" }],
              armor: [{ name: "Lightning", source: "cloud" }],
              summon: [{ name: "Empty" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Grashtrike, Wererat x2"
        instructions={[
          "Cloud: ATB Boost, TRIPOLOSKI",
          "Barret: Overcharge, Focused Shot Grashtrike",
          "Tifa: Whirl, Divekick Grashtrike",
        ]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Encounter
        enemies="Grashtrike x2"
        instructions={[
          "Cloud: Punisher jump, Berserk, Blizzard A",
          "Barret: Overcharge, Focused Shot B",
          "Tifa: Whirl, Divekick B",
        ]}
      />
      <Encounter
        enemies="Grashtrike x2, Queen Grashtrike"
        instructions={[
          "Cloud: Punisher jump, Berserk, Blizzard A",
          "Barret: Overcharge B (if they're split)",
          "Cloud: Punisher full, Operator B",
          "Cloud: ATB Boost, Divekick, Blizzard Queen (pressure)",
          "Cloud: Berserk, Focused Shot, Blizzard, Punisher Queen (stagger)",
          "Tifa: Whirl, Cross Slash",
          "Barret: Go to exit, Divekick",
        ]}
      />
      <Pick item="Phoenix Down x3" />
      <Encounter
        enemies="Flametrooper, Security Officer x4"
        instructions={[
          "Cloud: Punisher x3, Berserk Security Officer",
          "Cloud: ATB Boost, Fire Flametrooper",
          "Tifa: Whirl, Divekick Flametrooper",
          "Cloud: Roll, Dash, TRIPOLOSKI Security Officer",
        ]}
      />
      <Heal description="Everyone full HP, Cloud 16 MP" />
      <Encounter
        enemies="Flametrooper x2, Sentry Launcher x2"
        instructions={[
          "Cloud: Dash Right Sentry, ATB Boost",
          "Barret: Overcharge Right Flame, Cloud Fire Left Flame x2",
          "Barret: Thunder, Tifa Thunder Right Sentry",
          "Cloud: Berserk, Punisher (1 ATB), Fire Flame, Punisher Sentry/Flame",
          "Tifa/Barret 1 ATB, Thunder Sentry",
          "Cloud 1 ATB, Fire Sentry",
        ]}
      />
      <Shop
        name="Vending Machine"
        sell={["Healing x2"]}
        buy={[
          { name: "Ether", inputs: ["down", "down", "down"] },
          { name: "Phoenix Down", inputs: ["down", "down"] },
          { name: "Power Wristguards" },
          { name: "Fire", inputs: ["down", "down"] },
        ]}
      />
      <Bench />
      <Pick item="Lightning" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [{ name: "Power Wristguards" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Barrier", source: "tifa" },
                { name: "First Strike" },
                { name: "ATB Boost" },
              ],
              armor: [{ name: "Lightning", source: "tifa" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                {
                  name: "Fire",
                  source: "inventory",
                  inputs: ["right"],
                },
              ],
              armor: [],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "First Strike" },
                {
                  name: "Lightning",
                  source: "inventory",
                  inputs: ["right"],
                },
              ],
              armor: [{ name: "Ice", source: "cloud" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x2"
        instructions={[
          "Switch to Punisher, ATB Boost",
          "TRIPOLOSKI, Berserk, TRIPOLOSKI B, Divekick A",
        ]}
      />
      <Boss
        name="Crab Warden"
        phases={[
          [
            "Barret: Overcharge Front Left",
            "Cloud: Berserk Front Left, Thunder Rear Left",
            "Cloud: Punisher full, Whirl, Berserk, Punisher x4 Front Left",
            "Cloud: Thunder, Tifa Thunder Rear Left (break)",
            "Cloud: Punisher x6 Front Left (break, stagger)",
            "Cloud: Thunder Rear Right, Punisher full, Berserk Front Right (target Rear Right)",
          ],
          [
            "Cloud: Thunder Rear Right (break)",
            "Tifa: ATB Boost, Barret Thunder, Whirl, Divekick Front Right (break)",
            "Tifa: Whirl, Cloud Thunder, Divekick, Whirl Right Weapon",
            "Cloud: Punisher full, Barret Thunder, Berserk Crab, Thunder Left Weapon",
            "Cloud: Punisher full Crab (switch to Generator mid combo)",
          ],
          [
            "Barret: Overcharge Right Weapon (Thunder after if still alive)",
            "Tifa: Unbridled, Cloud Thunder Left Weapon (stagger)",
            "Tifa: Omni, Whirl, Cloud Thunder, Divekick Generator",
          ],
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Ice", source: "tifa" },
                { name: "First Strike" },
                { name: "ATB Boost" },
              ],
              armor: [{ name: "Lightning" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Barrier", source: "cloud" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Iron Blade", upgrade: "Manual" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [{ ability: "Leader" }],
            },
          ]}
        />
      </Menu>
    </Chapter>
  );
}

export default Chapter5;
