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
        instructions={["Punisher, Berserk, TRIPOLOSKI"]}
      />
      <Pick
        item="Elixir"
        description="Door to the right after Barret joins"
        optional
      />
      <Encounter enemies="Wererat x3" instructions={["TRIPOLOSKI"]} />
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
              shortcuts: [{ shortcut: "circle", ability: "Blizzard" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Grashtrike, Wererat x2"
        instructions={[
          "Grashtrike: Overcharge, Focused Shot, Whirl, Divekick",
          "TRIPOLOSKI the rats",
        ]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Encounter
        enemies="Grashtrike x2"
        instructions={[
          "Overcharge, Focused Shot, Whirl, Divekick",
          "Berserk, Blizzard",
        ]}
      />
      <Encounter
        enemies="Grashtrike x2, Queen Grashtrike"
        instructions={[
          "Grashtrike: Berserk, Blizzard, Punisher",
          "If Blizzard hit only one: Overcharge, Focused Shot, Whirl, Divekick",
          "Queen: Overcharge, Cloud and Tifa Blizzard",
          "Focused Shot (2 ATB if possible) when pressured",
        ]}
      />
      <Pick item="Phoenix Down x3" />
      <Encounter
        enemies="Flametrooper, Security Officer x4"
        instructions={[
          "Berserk + Fire Flametrooper",
          "Punisher and TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Flametrooper x2, Sentry Launcher x2"
        instructions={[
          "Berserk Sentry B",
          "Fire Flametroopers",
          "Thunder Sentries",
        ]}
      />
      <Pick item="Lightning" />
      <Bench />
      <Shop
        name="Vending Machine"
        sell={["Healing x2"]}
        buy={[
          "Hi-Potion x3",
          "Ether",
          "Phoenix Down",
          "Power Wristguards",
          "Earrings",
          "Fire",
        ]}
      />
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
                { name: "Revival", source: "barret" },
                { name: "Barrier", source: "barret" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Ice", source: "cloud" },
                { name: "Fire", source: "inventory" },
              ],
              armor: [{ name: "Fire", source: "cloud" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "Ice" },
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
            "Stagger: Punisher + Berserk",
          ],
          [
            "Rear Left: Cloud Thunder, Barret Thunder, Overcharge",
            "Rear Right: Cloud Thunder, Whirl/Tifa Combo",
            "Arm Right: Divekick, Whirl, Punisher + Berserk",
            "Stagger: Cloud Thunder Arm Left, Berserk, Punisher",
          ],
          [
            "Cloud: Dash",
            "Arm: Tifa/Barret Thunder each",
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
                { name: "Ice", source: "barret" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }],
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
