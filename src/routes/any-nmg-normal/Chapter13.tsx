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

function Chapter13() {
  return (
    <Chapter number={13}>
      <Encounter
        enemies="Gorgers x4"
        instructions={["TRIPOLOSKI, Starshower"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Iron Blade" }],
            },
            {
              name: "Tifa",
              equipments: [{ name: "Feathered Gloves" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "Subversion" },
                { name: "Ice", source: "inventory" },
                { name: "Lightning" },
                { name: "Fire", source: "tifa" },
              ],
              armor: [{ name: "First Strike" }, { name: "Parry" }],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Thundara" }],
            },
            {
              name: "Barret",
              shortcuts: [{ shortcut: "square", ability: "Thundara" }],
            },
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "square", ability: "Thundara" }],
            },
          ]}
        />
      </Menu>
      <Pick item="Mega-Potion" optional />
      <Encounter
        enemies="Sweeper Prototype, Smogger"
        instructions={[
          "Smogger: Cloud Thundara, Tifa Thundara",
          "Barret: Overcharge, Thundara",
          "Cloud: Berserk, 1 ATB, ATB Boost, Thundara, Thundara",
          "Tifa: Whirl, Thundara",
        ]}
      />
      <Pick item="Heavy-Duty Bracer" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Hardedge" },
                { name: "Fury Ring", source: "tifa" },
              ],
            },
            {
              name: "Tifa",
              equipments: [
                { name: "Metal Knuckles" },
                { name: "Heavy-Duty Bracer" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter enemies="Bandit x2" instructions={["TRIPOLOSKI"]} />
      <Encounter
        enemies="Bandit x2"
        instructions={["Starshower A", "Punisher, TRIPOLOSKI B"]}
      />
      <Encounter
        enemies="Beck, Burke, Butch, Grungy Bandit"
        instructions={[
          "Cloud: TRIPOLOSKI, Starshower",
          "Grungy: Punisher full + Overcharge, Focused Shot/Thrust",
        ]}
      />
      <Pick item="Orb of Gravity" description="Skip if picked in chapter 12" />
      <Encounter
        enemies="Ringmaw x3"
        instructions={["ATB Boost, TRIPOLOSKI, Starshower, TRIPOLOSKI"]}
      />
      <Pick item="Magnify" />
      <Shop name="Weapon Shop" buy={["Big Bertha"]} />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Barret",
              weapons: [{ name: "Big Bertha", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Barret",
              equipments: [
                { name: "Big Bertha" },
                { name: "Fury Ring", source: "cloud" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Binding", source: "barret" },
                { name: "", source: "barret" },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "Wind", source: "barret" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Refocus", source: "cloud" },
                { name: "First Strike", source: "cloud" },
                { name: "ATB Boost", source: "cloud" },
                { name: "Lightning", source: "cloud" },
              ],
              armor: [
                { name: "Magnify", source: "inventory" },
                { name: "Ice" },
                { name: "Fire" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Subversion" },
                { name: "Ice" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Parrry" },
                { name: "" },
              ],
              summon: [{ name: "", source: "barret" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Barret",
              shortcuts: [
                { shortcut: "x", ability: "Maximum Fury" },
                { shortcut: "circle", ability: "Blizzard All" },
              ],
            },
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "circle", ability: "Focused Strike" }],
            },
          ]}
        />
      </Menu>
      <Encounter enemies="Bugaboo x4" instructions={["Maximum Fury"]} />
      <Pick item="2000 gil" optional />
      <Encounter
        enemies="Bloodhound x2"
        instructions={["Overcharge, Blizzard All, ATB Boost, Maximum Fury"]}
      />
      <Encounter
        enemies="Bloodhound, Bugaboo x3"
        instructions={["Overcharge Bloodhound, Blizzard All, Maximum Fury"]}
      />
      <Encounter
        enemies="Gorger x2"
        instructions={["Blizzard All, Overcharge"]}
      />
      <Encounter
        enemies="Gorger, Bugaboo x2"
        instructions={["Blizzard All, Overcharge"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Barret",
              equipments: [{ name: "Light Machine Gun" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Cutter, Monodrive x2"
        instructions={[
          "Barret: Overcharge Monodrive",
          "Tifa: Combo x6, Whirl Monodrive",
          "Tifa: Barret Thundara, Whirl, Divekick, Barret ATB Boost",
          "Tifa: Combo x2, Whirl, Focused Strike x3",
          "Barret Thundara x2, Tifa Whirl, Divekick",
        ]}
      />
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Barret",
              equipments: [
                { name: "Big Bertha" },
                { name: "Power Wristguards", source: "tifa" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Barret",
              weapon: [
                { name: "", source: "tifa" },
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Subversion", source: "tifa" },
                { name: "Ice" },
                { name: "Fire" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Magnify", source: "barret" },
                { name: "Ice" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Parrry" },
                { name: "Refocus", source: "barret" },
              ],
              summon: [{ name: "Ifrit", source: "barret" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Barret",
              shortcuts: [{ shortcut: "circle", ability: "Blizzara" }],
            },
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "circle", ability: "Blizzara All" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Failed Experiment"
        phases={[
          [
            "Barret: Overcharge, Tifa Blizzara All, Blizzara, Refocus",
            "Barret: Combo + Blizzara x2",
            "Tifa: Blizzara All, Combo + Whirl",
          ],
          [
            "Tifa: Blizzara All",
            "Barret: Blizzara/Overcharge two far away",
            "Tifa: Blizzara All, Combo + Whirl",
          ],
          ["Tifa: Go up, Blizzara All, Somersault, Barret ATB Boost"],
          [
            "Tifa: Fire in the Hole, Starshower, Maximum Fury, Starshower, Somersault",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter13;
