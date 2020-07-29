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
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "ATB Boost" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "Subversion" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Parry", source: "cloud" },
              ],
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
          ]}
        />
      </Menu>
      <Pick item="Mega-Potion" />
      <Encounter
        enemies="Sweeper Prototype, Smogger"
        instructions={[
          "Smogger: Cloud Thundara, Tifa Thundara",
          "Cloud: Berserk, 1 ATB, Roll (avoid SD)",
          "Cloud: ATB Boost, Thundara, Thundara",
          "Tifa: Whirl, Thundara",
          "Barret: Overcharge, Thunder",
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
              equipments: [{ name: "Heavy-Duty Bracer" }],
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
          "ATB Boost, TRIPOLOSKI, Starshower, TRIPOLOSKI",
          "Grungy: Overcharge, Focused Thrust/Shot, Starshower",
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
                { name: "", source: "barret" },
                { name: "Binding", source: "barret" },
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
                { name: "First Strike", source: "cloud" },
                { name: "Refocus", source: "cloud" },
                { name: "Lightning", source: "cloud" },
                { name: "ATB Boost", source: "cloud" },
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
                { name: "Fire" },
                { name: "Subversion" },
                { name: "Lightning" },
                { name: "Ice" },
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
                { shortcut: "square", ability: "Thundara" },
                { shortcut: "x", ability: "Maximum Fury" },
                { shortcut: "circle", ability: "Blizzard All" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter enemies="Bugaboo x4" instructions={["Maximum Fury"]} />
      <Pick item="2000 gil" optional />
      <Encounter
        enemies="Bloodhound x2"
        instructions={["Overcharge, Blizzard All", "ATB Boost, Maximum Fury"]}
      />
      <Encounter
        enemies="Bloodhound, Bugaboo x3"
        instructions={[
          "Overcharge Bloodhound, Blizzard All",
          "ATB Boost, Maximum Fury",
        ]}
      />
      <Pick item="Healing Carcanet" optional />
      <Encounter
        enemies="Gorger x2"
        instructions={["ATB Boost, Maximum Fury"]}
      />
      <Encounter
        enemies="Gorger, Bugaboo x2"
        instructions={["ATB Boost, Maximum Fury"]}
      />
      <Encounter
        enemies="Cutter, Monodrive x2"
        instructions={[
          "Barret: Overcharge Monodrives, Thundara Cutter, Tifa Thundara, ATB Boost",
          "Tifa: Barret Blizzard All, Combo until stagger",
          "Tifa: Starshower, Barret Thundara, Thundara",
        ]}
      />
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [{ name: "Metal Knuckles" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Barret",
              shortcuts: [{ shortcut: "circle", ability: "Blizzara All" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Failed Experiment"
        phases={[
          [
            "Barret: Overcharge, Tifa Blizzara, Blizzara All",
            "Barret: Refocus, Blizzara All",
            "Tifa finish remaining",
          ],
          [
            "Tifa: Blizzara two far away",
            "Barret: Blizzara All",
            "Ether Barret, Combo rest",
          ],
          [
            "Tifa: Go up",
            "Barret: Overcharge Appendage",
            "Barret: Blizzara, Blizzard Failed Experiment",
            "Barret: Combo, Charge, Blizzard Failed Experiment, Charge, Charge",
          ],
          [
            "Tifa: Go back and wait for him to turn",
            "Barret: Overcharge Appendage",
            "Barret Blizzara, Tifa Blizzara Failed Experiment",
            "Fire in the Hole, Starshower, Somersault Failed Experiment",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter13;
