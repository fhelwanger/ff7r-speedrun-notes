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

function Chapter13() {
  return (
    <Chapter number={13}>
      <Menu instructions={["Open and close menu to upgrade Barret's weapon"]} />
      <Encounter
        enemies="Gorgers x4"
        instructions={["Cloud: TRIPOLOSKI, Starshower"]}
      />
      <Pick item="Mega-Potion" optional />
      <Encounter
        enemies="Sweeper Prototype, Smogger"
        instructions={[
          "Cloud: Thundara Smogger",
          "Barret: Overcharge, Thundara Smogger",
          "Tifa: Whirl Smogger, Whirl Sweeper",
          "Cloud: Punisher full, Starshower, Berserk",
          "Tifa: Starshower, Cloud ATB Boost, Cloud Thundara x2, Whirl",
        ]}
      />
      <Pick item="Heavy-Duty Bracer" />
      <Encounter
        enemies="Bandit x2"
        instructions={["Cloud: TRIPOLOSKI, Divekick"]}
      />
      <Encounter
        enemies="Bandit x2"
        instructions={[
          "Cloud: ATB Boost, Starshower B",
          "Cloud: TRIPOLOSKI, Braver A",
        ]}
      />
      <Encounter
        enemies="Beck, Burke, Butch, Grungy Bandit"
        instructions={[
          "Cloud: ATB Boost",
          "Tifa: Starshower, TRIPOLOSKI, Whirl/Divekick Bandits",
          "Barret: Overcharge, 2 ATB, Cloud Fira, Focused Shot Grungy",
          "Tifa: Combo (stagger, 2 ATB), Starshower x2 Grungy",
        ]}
      />
      <Pick item="Orb of Gravity" description="Ignore if already dropped" />
      <Encounter
        enemies="Ringmaw x3"
        instructions={["Cloud: ATB Boost, TRIPOLOSKI x2, Starshower"]}
      />
      <Pick item="Magnify" />
      <Menu instructions={["Start swapping Barret Ice slot, then Magnify"]}>
        <Equipment
          characters={[
            {
              name: "Barret",
              equipments: [
                { name: "Fury Ring", source: "tifa", inputs: ["right"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Subversion", source: "barret" },
                { name: "", source: "barret" },
                { name: "", source: "tifa" },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "Fire" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning", source: "cloud" },
                {
                  name: "Magnify",
                  source: "inventory",
                  inputs: ["square", "down", "down"],
                },
                { name: "Wind" },
                { name: "Ice", source: "barret" },
              ],
              armor: [
                { name: "First Strike", source: "cloud" },
                { name: "ATB Boost", source: "cloud" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                {
                  name: "Ice",
                  source: "inventory",
                  inputs: ["down", "down", "down"],
                },
                { name: "" },
                { name: "Lightning" },
                { name: "Refocus", source: "cloud", inputs: ["up"] },
              ],
              armor: [
                { name: "Parrry" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Barret",
              shortcuts: [
                {
                  shortcut: "square",
                  ability: "Thunder All",
                  inputs: ["right", "up", "up"],
                },
                {
                  shortcut: "circle",
                  ability: "Blizzara",
                  inputs: ["down", "down", "down"],
                },
              ],
            },
            {
              name: "Tifa (R2)",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Blizzara All",
                  inputs: ["down", "down", "down"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Bugaboo x4"
        instructions={["Focused Shot, Overcharge"]}
      />
      <Pick item="2000 gil" optional />
      <Encounter
        enemies="Bloodhound x2"
        instructions={[
          "Overcharge, Thunder All (stagger)",
          "1 ATB, ATB Boost, Blizzara pressured, Blizzara staggered",
          "Combo rest",
        ]}
      />
      <Heal description="Ether x1 Barret" />
      <Encounter
        enemies="Bloodhound, Bugaboo x3"
        instructions={[
          "Overcharge Bloodhound, Thunder All (stagger)",
          "1 ATB, ATB Boost, Focused Shot Bloodhound",
          "Combo rest",
        ]}
      />
      <Encounter enemies="Gorger x2" instructions={["Thunder All"]} />
      <Encounter enemies="Gorger, Bugaboo x2" instructions={["Thunder All"]} />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Heavy-Duty Bracer", inputs: ["right"] },
                { name: "Fury Ring", source: "barret", inputs: ["right"] },
              ],
            },
            {
              name: "Cloud (R2)",
              equipments: [{ name: "Remove Accessory" }],
            },
            {
              name: "Aerith (R2)",
              equipments: [{ name: "Remove Armor" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Barret",
              weapon: [
                { name: "Wind", source: "barret" },
                {
                  name: "Binding",
                  source: "inventory",
                  inputs: ["right", "up", "up"],
                },
                { name: "Ice", source: "barret" },
                { name: "Lightning", source: "barret" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "", source: "tifa" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Magnify", source: "barret" },
                { name: "Lightning" },
                { name: "ATB Boost", source: "barret" },
              ],
              armor: [
                { name: "Parrry" },
                { name: "First Strike" },
                { name: "Refocus", source: "tifa" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Subversion", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Cutter, Monodrive x2"
        instructions={[
          "Barret: Overcharge Monodrive",
          "Tifa: Parry, Combo x3, Whirl Monodrive",
          "Tifa: Barret Thundara, Starshower, Whirl, Focused Strike, Focused Shot",
          "Tifa: Whirl x2, Starshower x2",
          "Barret: Run to ladder",
        ]}
      />
      <Bench description="Or Tifa 39 MP, Barret 19 MP, Tifa full/Barret good HP" />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down", "down"] },
          { name: "Ether x2", inputs: ["down", "down"] },
        ]}
      />
      <Boss
        name="Failed Experiment"
        phases={[
          [
            "Barret: Overcharge, Tifa ATB Boost, Tifa Blizzara All",
            "Barret: Blizzara left one, Tifa Refocus, Tifa Blizzara All, Combo",
            "Tifa: Combo/Whirl/Focused Strike",
          ],
          [
            "Tifa: Whirl, Blizzara All",
            "Barret: Blizzara two far away, Overcharge",
            "Tifa: Combo/Whirl/Focused Strike",
          ],
          ["Tifa: Go up, Blizzara All, Somersault"],
          [
            "Tifa: Parry up, Starshower x2, Somersault",
            "Tifa: Combo x6, Whirl/Divekick",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter13;
