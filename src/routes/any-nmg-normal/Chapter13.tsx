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
      <Encounter enemies="Gorgers x4" instructions={["TRIPOLOSKI"]} />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [{ name: "Feathered Gloves" }],
            },
            {
              name: "Cloud",
              equipments: [{ name: "Iron Blade" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Ice", source: "aerith" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }, { name: "Refocus" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Parry", source: "cloud" },
                { name: "" },
              ],
              armor: [{ name: "Lightning" }, { name: "ATB Boost" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "" },
                { name: "", source: "tifa" },
                { name: "" },
              ],
              armor: [],
              summon: [{ name: "" }],
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
          "Cloud: Punisher x4, Berserk, Operator, Roll (avoid SD), Thundara",
          "Tifa: Whirl, ATB Boost, Starshower",
          "Barret: Overcharge, Tifa Thundara, Thunder",
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
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "ATB Boost", source: "tifa" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }, { name: "Refocus" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Parry" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Ice", source: "cloud" },
                { name: "" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
      </Menu>
      <Encounter enemies="Bandit x2" instructions={["TRIPOLOSKI"]} />
      <Encounter
        enemies="Bandit x2"
        instructions={["ATB Boost, TRIPOLOSKI, Starshower, TRIPOLOSKI"]}
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
                { name: "Lightning", source: "barret" },
              ],
              armor: [
                { name: "Wind", source: "barret" },
                { name: "Binding", source: "barret" },
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
                { name: "Ice" },
                { name: "Magnify", source: "inventory" },
                { name: "Fire" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Parry" },
                { name: "" },
              ],
              armor: [{ name: "Lightning" }, { name: "Ice" }, { name: "" }],
              summon: [{ name: "", source: "barret" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Barret",
              shortcuts: [
                { shortcut: "square", ability: "Blizzard All" },
                { shortcut: "x", ability: "Maximum Fury" },
                { shortcut: "circle", ability: "Blizzara All" },
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
        instructions={["Overcharge, Blizzard All", "ATB Boost, Maximum Fury"]}
      />
      <Encounter
        enemies="Bloodhound, Bugaboo x3"
        instructions={[
          "Overcharge, Blizzard Bloodhound",
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
          "Barret: Overcharge Monodrives, Thundara Cutter",
          "Tifa: Thundara Cutter",
          "Pressure: Combo full, Focused Strike, Combo full, Focused Strike",
          "Stagger: Thundaras",
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Phoenix Down x2"]}
      />
      <Bench />
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
            "Barret: Combo, Charge, Blizzard Failed Experiment, Charge",
          ],
          [
            "Tifa: Go back and Blizzard Appendage",
            "Barret: Overcharge Appendage",
            "Barret: Blizzara, Blizzard Failed Experiment",
            "Fire in the Hole, Starshower, Somersault Failed Experiment",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter13;
