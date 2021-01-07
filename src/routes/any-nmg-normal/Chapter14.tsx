import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Heal from "../../components/Heal";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";
import Shop from "../../components/Shop";
import UpgradeWeapons from "../../components/UpgradeWeapons";

function Chapter14() {
  return (
    <Chapter number={14}>
      <Shop
        name="Chadley Sector 5"
        buy={[
          { name: "ATB Assist", inputs: ["up", "up"] },
          { name: "ATB Stagger", inputs: ["up"] },
        ]}
        reset={[{ name: "Hardedge", inputs: ["up"] }]}
      />
      <Dialogue
        optionText="Wall Market - Entrance"
        optionPosition="2nd"
        details="when taking the Chocobo"
      />
      <Shop
        name="Weapon Shop"
        buy={[{ name: "Mythril Saber", inputs: ["down", "down"] }]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                {
                  name: "Mythril Saber",
                  inputs: ["right"],
                },
                {
                  name: "Heavy-Duty Bracer",
                  source: "tifa",
                  inputs: ["right"],
                },
                {
                  name: "Platinum Earrings",
                  inputs: ["up", "up"],
                },
                {
                  name: "Supernatural Wristguards",
                  source: "barret",
                  inputs: ["up"],
                },
                {
                  name: "Fury Ring",
                  source: "tifa",
                  inputs: ["right"],
                },
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
                { name: "Magnify", source: "tifa" },
                { name: "Lightning", source: "barret" },
                {
                  name: "Barrier",
                  source: "inventory",
                  inputs: ["up", "up", "up", "up", "up"],
                },
              ],
              armor: [
                { name: "First Strike", source: "barret" },
                { name: "ATB Boost", source: "inventory", inputs: ["up"] },
                { name: "ATB Stagger", source: "inventory", inputs: ["up"] },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Ice" },
                { name: "Fire" },
                { name: "Subversion" },
                { name: "", source: "cloud" },
              ],
              armor: [
                { name: "Lightning", source: "cloud" },
                { name: "Wind", source: "cloud" },
                { name: "Binding" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                {
                  name: "ATB Assist",
                  source: "inventory",
                  inputs: ["square", "up"],
                },
                { name: "Lightning" },
                { name: "Refocus" },
              ],
              armor: [{ name: "Parry" }, { name: "First Strike" }],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { shortcut: "x", ability: "Fira All", inputs: ["down"] },
              ],
            },
            {
              name: "Barret (R2)",
              shortcuts: [
                { shortcut: "circle", ability: "Fira", inputs: ["down"] },
                {
                  shortcut: "square",
                  ability: "Sleep",
                  inputs: ["up", "up", "up", "up"],
                },
              ],
            },
            {
              name: "Tifa (R2)",
              shortcuts: [{ shortcut: "x", ability: "Blizzara" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sahagin"
        instructions={["Cloud: ATB Boost, Fira x2, Starshower"]}
      />
      <Heal description="Ether Cloud." />
      <Encounter
        enemies="Blugu x2, Sahagin"
        instructions={["Blade Burst Blugu, flee with Tifa"]}
      />
      <Encounter
        enemies="Blugu x2, Scissorclaw x2"
        instructions={["Cloud: Fira All, Tifa Starshower, Punisher Blugus"]}
      />
      <Pick item="Ether" />
      <Encounter
        enemies="Blugu, Wererat x3"
        instructions={["Dash, TRIPOLOSKI, Divekick"]}
      />
      <Encounter
        enemies="Scissorclaw x3"
        instructions={["Cloud: Fira all, Starshower"]}
      />
      <Heal description="Ether Cloud." />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [
                { name: "Mythril Saber", upgrade: "Auto - Attack, MP+10" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter enemies="Wererat x4" instructions={["TRIPOLOSKI"]} />
      <Encounter
        enemies="Sahagin x3"
        instructions={[
          "Cloud: ATB Boost, Fira All x2",
          "Starshower, Cross Slash",
        ]}
      />
      <Encounter
        enemies="Abzu Shoat"
        instructions={["Cloud: Fira, Starshower"]}
      />
      <Heal description="Ether Cloud, heal HP." />
      <Encounter
        enemies="Abzu Shoat x2, Blugu"
        instructions={[
          "Cloud: ATB Boost, Fira All x2, Starshower Shoat",
          "Barret: Overcharge, Fira",
          "Tifa: Whirl/Divekick",
        ]}
      />
      <Encounter
        enemies="Sahagin, Abzu Shoat x2"
        instructions={[
          "Cloud: ATB Boost, Fira All x2, Starshower Sahagin",
          "Barret: Overcharge, Fira",
          "Tifa: Whirl/Divekick",
        ]}
      />
      <Encounter
        enemies="Abzu Shoat, Scissorclaw x2"
        instructions={["Blade Burst Scissorclaw, flee with Tifa"]}
      />
      <Heal description="Cloud 30 MP, heal HP." />
      <Encounter
        enemies="Blugu x2, Scissorclaw, Sahagin"
        instructions={["Cloud: ATB Boost, Fira All x2, Starshower Sahagin"]}
      />
      <Pick item="Ether" />
      <Heal description="Cloud 10 MP, Barret 5 MP, +1500 HP." />
      <Pick
        item="Protective Boots"
        description='Cross yellow line after "Just like his owner"'
      />
      <Encounter
        enemies="Mischievous Shoat, Abzu Shoat x3"
        instructions={[
          "Cloud: ATB Boost",
          "Barret: Focused Thrust, Combo, Overcharge",
          "Tifa: (Combo x6 + Parry) x2, Unbridled x2",
          "Tifa: (Combo x6 + Parry) x4, Barret Sleep",
          "Tifa: Blizzara x2, Focused Shot, Combo (stagger)",
          "Tifa: Rise, Omni, Unbridled, Omni, Whirl, Cloud Fira, Divekick, Whirl",
        ]}
      />
      <Pick
        item="Hazardous Material x2"
        description="Ignore if already dropped"
      />
      <Bench />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down", "down"] },
          { name: "Ether x2", inputs: ["down", "down"] },
          { name: "Heavy-Duty Bracer", inputs: ["down", "down"] },
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Heavy Duty Bracer", inputs: ["right"] },
                { name: "Fury Ring", source: "cloud", inputs: ["right"] },
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
                { name: "Lightning", source: "tifa" },
                { name: "Lightning" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind", source: "barret" },
                { name: "Fire" },
                { name: "Subversion" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "First Strike", source: "tifa" },
                { name: "Binding" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Magnify", source: "cloud" },
                { name: "ATB Assist", source: "tifa" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Ice", source: "barret" },
                { name: "ATB Stagger", source: "cloud" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [
                { ability: "Leader" },
                { shortcut: "x", ability: "Blizzara All" },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Abzu"
        phases={[
          [
            "Tifa: Lock Abzu, Lifesaver, Combo x6, Combo x6, Whirl (2 ATB)",
            "Tifa: Starshower, Overcharge, Starshower, Focused Thrust, Focused Shot",
            "Tifa: Combo x6, Whirl, Focused Strike, Combo",
            "Tifa: Barret Mega-Potion Barret, Defend",
          ],
          [
            "Tifa: Combo until stagger, Starshower",
            "Barret: Starshower, Charge, Overcharge",
            "Tifa: Whirl x2, Cloud Fira",
          ],
          [
            "Tifa: Blizzara All, Cloud ATB Boost, Whirl x2, Barret Sleep",
            "Tifa: Starshower x2, Somersault Abzu, TRIPOLOSKI x2 Shoats",
          ],
        ]}
      />
      <Dialogue optionText="Yes" optionPosition="2nd" details="to climb" />
    </Chapter>
  );
}

export default Chapter14;
