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

function Chapter5() {
  return (
    <Chapter number={5}>
      <Encounter
        enemies="Slug Ray x5"
        instructions={[
          "Punisher full, Berserk, 2 ATB, TRIPOLOSKI, Focused Thrust, Punisher A, B and C",
          "Cross Slash D and E",
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
      <Encounter
        enemies="Wererat x3"
        instructions={["Tifa: Whirl, TRIPOLOSKI"]}
      />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Iron Blade", upgrade: "Auto - Attack" }],
            },
            {
              name: "Tifa",
              weapons: [{ name: "Leather Gloves", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { ability: "Leader" },
                { shortcut: "circle", ability: "Blizzard" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Grashtrike, Wererat x2"
        instructions={[
          "Cloud: TRIPOLOSKI",
          "Barret: Overcharge, Focused Shot Grashtrike",
          "Tifa: Whirl, Divekick Grashtrike",
        ]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Encounter
        enemies="Grashtrike x2"
        instructions={[
          "Cloud: Berserk, Blizzard A",
          "Barret: Overcharge, Focused Shot B",
          "Tifa: Whirl, Divekick B",
        ]}
      />
      <Encounter
        enemies="Grashtrike x2, Queen Grashtrike"
        instructions={[
          "Cloud: Berserk, Blizzard A",
          "Barret: Overcharge B",
          "Tifa: Combo x3, Whirl B",
          "Cloud: Punisher B until dead",
          "Cloud: Blizzard, Tifa Blizzard, Focused Shot, Punisher full, Berserk Queen",
          "Cloud: Blizzard, Cross Slash",
        ]}
      />
      <Pick item="Phoenix Down x3" />
      <Encounter
        enemies="Flametrooper, Security Officer x4"
        instructions={[
          "Cloud: Berserk, Fire Flametrooper, Punisher, TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Flametrooper x2, Sentry Launcher x2"
        instructions={[
          "Cloud: Dash Sentry B",
          "Barret: Overcharge, Cloud Thunder, Thunder Sentry B",
          "Tifa: Whirl, Combo, Whirl Sentry B (2 ATB)",
          "Cloud: Punisher Sentry B, Tifa Fire each Firetrooper",
          "Cloud: Berserk (2 ATB), Thunder, Thunder Sentry A",
          "Cloud: Punisher/TRIPOSKI/Fire",
        ]}
      />
      <Shop
        name="Vending Machine"
        sell={["Healing x2"]}
        buy={["Ether", "Phoenix Down", "Power Wristguards", "Earrings", "Fire"]}
      />
      <Bench />
      <Pick item="Lightning" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Barret",
              equipments: [{ name: "Earrings" }],
            },
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
                { name: "Barrier", source: "barret" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Revival", source: "barret" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Fire", source: "cloud" },
                { name: "Fire", source: "inventory" },
              ],
              armor: [{ name: "Ice", source: "cloud" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Fire" },
                { name: "Lightning", source: "inventory" },
              ],
              armor: [],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Security Officer x2"
        instructions={["Berserk + TRIPOLOSKI"]}
      />
      <Boss
        name="Crab Warden"
        phases={[
          [
            "Front Left: Overcharge, Berserk, Thunder, Punisher full, Berserk",
            "Front Right: Thunder Rear Right, Punisher full, Berserk",
            "Front Right: Thunder Rear Left, Punisher full, Berserk",
            "Stagger: Berserk, Divekick + Whirl Rear Left",
          ],
          [
            "Rear Left: Barret Thunder",
            "Rear Right: Cloud Thunder, Divekick",
            "Arm Right: Whirl, Divekick, Whirl, Divekick, Whirl, Berserk, Punisher",
            "Stagger: Cloud Thunder Arm Left, Berserk, Punisher",
          ],
          [
            "Cloud: Dash, Barret Thunder Arm, Berserk, Overcharge other Arm",
            "Stagger: everyone Thunder Generator",
          ],
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "barret" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Ice", source: "barret" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Barrier", source: "cloud" },
                { name: "Fire" },
              ],
              armor: [{ name: "Revival", source: "cloud" }],
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
      </Menu>
    </Chapter>
  );
}

export default Chapter5;
