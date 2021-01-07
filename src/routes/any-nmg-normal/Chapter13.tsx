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
      <Encounter
        enemies="Gorgers x4"
        instructions={["TRIPOLOSKI, Starshower"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Iron Blade", inputs: ["up"] },
                { name: "Fury Ring", source: "tifa", inputs: ["right"] },
              ],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { shortcut: "x", ability: "Thundara", inputs: ["right", "up"] },
              ],
            },
            {
              name: "Barret (R2)",
              shortcuts: [
                { shortcut: "x", ability: "Thundara", inputs: ["right", "up"] },
              ],
            },
            {
              name: "Tifa (R2)",
              shortcuts: [
                { shortcut: "x", ability: "Thundara", inputs: ["right", "up"] },
              ],
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
          "Cloud: Punisher full, ATB Boost",
          "Tifa: Whirl x2, Cloud Thundara x2, Thundara",
        ]}
      />
      <Pick item="Heavy-Duty Bracer" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Hardedge", inputs: ["right"] }],
            },
          ]}
        />
      </Menu>
      <Encounter enemies="Bandit x2" instructions={["TRIPOLOSKI"]} />
      <Encounter
        enemies="Bandit x2"
        instructions={["Starshower A", "TRIPOLOSKI, Punisher x4, Operator B"]}
      />
      <Encounter
        enemies="Beck, Burke, Butch, Grungy Bandit"
        instructions={[
          "Cloud: ATB Boost, TRIPOLOSKI x2 Bandits",
          "Barret: Overcharge, 2 ATB, Grungy",
          "Barret: Starshower, Focused Shot (after Starshower starts) Grungy",
          "Tifa: Whirl/Divekick",
        ]}
      />
      <Pick item="Orb of Gravity" description="Skip if picked in chapter 12" />
      <Encounter
        enemies="Ringmaw x3"
        instructions={["ATB Boost, TRIPOLOSKI, Starshower, TRIPOLOSKI"]}
      />
      <Pick item="Magnify" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Barret",
              equipments: [
                { name: "Remove Accessory" },
                { name: "Fury Ring", source: "cloud", inputs: ["right"] },
                { name: "Heavy-Duty Bracer", inputs: ["right"] },
              ],
            },
            {
              name: "Tifa (R2)",
              equipments: [{ name: "Caliginous Bracelet", inputs: ["up"] }],
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
                { name: "", source: "tifa" },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "Wind", source: "barret" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Ice" },
                {
                  name: "Magnify",
                  source: "inventory",
                  inputs: ["down", "down", "down"],
                },
                { name: "Subversion" },
                { name: "Lightning", source: "cloud" },
              ],
              armor: [
                { name: "First Strike", source: "cloud" },
                { name: "ATB Boost", source: "cloud" },
                { name: "Binding" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "Refocus", source: "cloud" },
              ],
              armor: [
                { name: "Parrry" },
                { name: "First Strike" },
                { name: "" },
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
                  ability: "Blizzard",
                  inputs: ["down", "down"],
                },
                {
                  shortcut: "circle",
                  ability: "Blizzara All",
                  inputs: ["down", "down", "down"],
                },
              ],
            },
            {
              name: "Tifa (R2)",
              shortcuts: [
                {
                  shortcut: "circle",
                  ability: "Focused Strike",
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
          "Overcharge, Blizzara All (stagger)",
          "ATB Boost, Blizzard each",
        ]}
      />
      <Encounter
        enemies="Bloodhound, Bugaboo x3"
        instructions={[
          "Overcharge Bloodhound, Blizzara All (stagger)",
          "ATB Boost, Blizzard Bloodhound, Focused Shot Bugaboos",
        ]}
      />
      <Encounter enemies="Gorger x2" instructions={["Blizzard All"]} />
      <Encounter
        enemies="Gorger, Bugaboo x2"
        instructions={["Overcharge Gorger, Focused Shot"]}
      />
      <Heal description="Barret 33 MP." />
      <Encounter
        enemies="Cutter, Monodrive x2"
        instructions={[
          "Barret: Overcharge Monodrive",
          "Tifa: Parry, Combo x6, Whirl Monodrive",
          "Tifa: Whirl, Divekick, Barret Thundara, Barret ATB Boost",
          "Tifa: Combo x2, Whirl, Barret Thundara, Focused Strike x2",
          "Tifa: Unbridled, Omni, Whirl, Barret Thundara, Divekick",
        ]}
      />
      <Shop
        name="Vending Machine"
        sell={[
          { name: "Iron Bangle x2" },
          { name: "Mesmeric Armlet" },
          { name: "Mythril Armlet" },
          { name: "Prayer", inputs: ["down"] },
          { name: "Deadly Dodge" },
        ]}
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down", "down"] },
          { name: "Ether x2", inputs: ["down", "down"] },
          {
            name: "Supernatural Wristguards",
            inputs: ["down", "down", "down", "down"],
          },
          { name: "Platinum Earrings", inputs: ["down", "down"] },
        ]}
      />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                {
                  name: "Heavy-Duty Bracer",
                  source: "barret",
                  inputs: ["down"],
                },
                { name: "Supernatural Wristguards", inputs: ["down", "down"] },
                { name: "Fury Ring", source: "barret", inputs: ["right"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Barret",
              weapon: [
                { name: "Ice" },
                { name: "Fire", source: "tifa" },
                { name: "Subversion" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "", source: "tifa" },
                { name: "Binding" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Magnify", source: "barret" },
                { name: "Lightning" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "Parrry" },
                { name: "First Strike" },
                { name: "ATB Boost", source: "barret" },
              ],
              summon: [{ name: "Ifrit" }],
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
      <Boss
        name="Failed Experiment"
        phases={[
          [
            "Barret: Overcharge, Tifa ATB Boost, Blizzara",
            "Barret: Tifa Blizzara All, Refocus, 2 ATB",
            "Tifa: Blizzara All, Barret Blizzara, Combo/Whirl",
          ],
          [
            "Tifa: Blizzara All",
            "Barret: Blizzara two far away, Overcharge",
            "Tifa: Combo/Whirl",
          ],
          ["Tifa: Go up, Blizzara All, Somersault"],
          [
            "Tifa: Fire in the Hole",
            "Tifa: Starshower x2, Somersault, Whirl/Divekick",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter13;
