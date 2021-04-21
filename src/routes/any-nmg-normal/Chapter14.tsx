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
          { name: "ATB Stagger x2", inputs: ["up"] },
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
        sell={[
          { name: "Iron Bangle x2" },
          { name: "Mesmeric Armlet" },
          { name: "Mythril Armlet" },
          { name: "Power Wristguards" },
          { name: "Prayer" },
          { name: "Deadly Dodge" },
        ]}
        buy={[
          { name: "Mythril Saber", inputs: ["down", "down"] },
          {
            name: "Supernatural Wristguards",
            inputs: ["down", "down", "down", "down"],
          },
          { name: "Platinum Earrings", inputs: ["down", "down"] },
        ]}
      />
      <Menu
        instructions={[
          "Move Lightning to Cloud, do Cloud then Barret then Tifa",
        ]}
      >
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
                  name: "Supernatural Wristguards",
                  inputs: ["down"],
                },
                {
                  name: "Fury Ring",
                  source: "tifa",
                  inputs: ["right"],
                },
              ],
            },
            {
              name: "Barret (R2)",
              equipments: [
                {
                  name: "Platinum Earrings",
                  inputs: ["down", "down"],
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
                {
                  name: "Magnify",
                  source: "tifa",
                  inputs: ["right"],
                },
                {
                  name: "ATB Boost",
                  source: "tifa",
                  inputs: ["right", "down", "down", "down"],
                },
                {
                  name: "ATB Stagger",
                  source: "inventory",
                  inputs: ["up", "up", "up"],
                },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "First Strike", source: "barret" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning", source: "cloud" },
              ],
              armor: [
                { name: "Subversion", source: "cloud" },
                { name: "Fire", source: "aerith", inputs: ["down"] },
                { name: "Barrier" },
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
                  inputs: ["up", "up"],
                },
                { name: "Lightning" },
                {
                  name: "ATB Stagger",
                  source: "inventory",
                  inputs: ["up", "up", "up", "up"],
                },
              ],
              armor: [
                { name: "Parry" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "" },
                { name: "" },
                { name: "", source: "barret" },
                { name: "" },
              ],
              armor: [],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Mythril Saber", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                {
                  shortcut: "triangle",
                  ability: "Blade Burst",
                  inputs: ["right", "up", "up"],
                },
                {
                  shortcut: "x",
                  ability: "Fira All",
                  inputs: ["down"],
                },
              ],
            },
            {
              name: "Barret (R2)",
              shortcuts: [
                {
                  shortcut: "circle",
                  ability: "Fira",
                  inputs: ["down"],
                },
                {
                  shortcut: "square",
                  ability: "Sleep",
                  inputs: ["up", "up", "up", "up"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sahagin"
        instructions={["Cloud: ATB Boost, Fira x2, Starshower"]}
      />
      <Encounter
        enemies="Blugu x2, Sahagin"
        instructions={["Cloud: Blade Burst Blugu", "Tifa: Flee"]}
      />
      <Encounter
        enemies="Blugu x2, Scissorclaw x2"
        instructions={[
          "Blugus far: Blade Burst",
          "Blugus near: Fira All, Starshower",
        ]}
      />
      <Pick item="Ether" />
      <Encounter
        enemies="Blugu, Wererat x3"
        instructions={["Cloud: Dash, TRIPOLOSKI, Divekick"]}
      />
      <Encounter
        enemies="Scissorclaw x3"
        instructions={["Cloud: Blade Burst"]}
      />
      <Encounter enemies="Wererat x4" instructions={["Cloud: TRIPOLOSKI"]} />
      <Encounter
        enemies="Sahagin x3"
        instructions={[
          "Cloud: ATB Boost, Fira All x2",
          "Cloud: Starshower, Cross Slash",
          "Barret: Run to ladder",
        ]}
      />
      <Heal description="Ether x1 Cloud." />
      <Encounter
        enemies="Abzu Shoat"
        instructions={["Cloud: Fira, Starshower"]}
      />
      <Heal description="Ether x1 Cloud." />
      <Encounter
        enemies="Abzu Shoat x2, Blugu"
        instructions={[
          "Cloud: ATB Boost, Fira All x2, Starshower Shoat",
          "Barret: Overcharge, Fira",
          "Tifa: Whirl/Divekick",
        ]}
      />
      <Heal description="Ether x1 Cloud." />
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
        instructions={["Cloud: Blade Burst Scissorclaw", "Tifa: Flee"]}
      />
      <Encounter
        enemies="Blugu x2, Scissorclaw, Sahagin"
        instructions={["Cloud: ATB Boost, Fira All x2, Starshower Sahagin"]}
      />
      <Pick item="Ether" description="Skip if no additional Ethers used" />
      <Heal description="Cloud 30 MP, Barret 10 MP, everyone +1500 HP." />
      <Pick
        item="Protective Boots"
        description='Cross yellow line after "Just like his owner"'
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
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
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [{ name: "Lightning" }, { name: "First Strike" }],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike", source: "tifa" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Magnify", source: "cloud" },
                { name: "ATB Assist", source: "tifa" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Subversion", source: "barret" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit" }],
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
      <Encounter
        enemies="Mischievous Shoat, Abzu Shoat x3"
        instructions={[
          "Tifa: Combo x6, Whirl",
          "Barret: Overcharge",
          "Cloud: Punisher x4, Operator",
          "Tifa: Combo x6, Whirl, Sleep",
          "Tifa: Starshower x2, Cloud Fira, ATB Boost, Cloud Fira x2",
          "Tifa: Combo x6, Whirl, Combo x6, Whirl, Sleep",
          "Tifa: Starshower x2, Focused Shot, Whirl",
        ]}
      />
      <Pick
        item="Hazardous Material x2"
        description="Ignore if already dropped"
      />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down", "down"] },
          { name: "Ether x2", inputs: ["down", "down"] },
        ]}
      />
      <Bench description="Or Cloud 10 MP, Barret 5 MP, Tifa 10 MP, full HP." />
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
            "Tifa: Combo x6, Whirl, Cloud Fira",
          ],
          [
            "Tifa: Blizzara All, Cloud ATB Boost, Whirl x2, Barret Sleep, Whirl",
            "Tifa: Starshower x2, Somersault Abzu, TRIPOLOSKI x2 Shoats",
          ],
        ]}
      />
      <Dialogue
        optionText="Yes"
        optionPosition="2nd"
        details="to go up after holding L1"
      />
      <Dialogue optionText="Yes" optionPosition="2nd" details="to climb" />
    </Chapter>
  );
}

export default Chapter14;
