import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
import Boss from "../../components/Boss";
import Box from "../../components/Box";
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

function Chapter17() {
  return (
    <Chapter number={17}>
      <Pick item="Ether" optional />
      <Encounter
        enemies="Unknown Entity x4"
        instructions={[
          "Cloud: TRIPOLOSKI, Punisher (1 ATB), ATB Boost",
          "Cloud: TRIPOLOSKI x2/Divekick",
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Lightning", source: "cloud" },
                { name: "Magnify" },
                { name: "Refocus", source: "tifa" },
                { name: "Subversion", source: "barret" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "" },
                { name: "Fire" },
                { name: "Time", source: "cloud" },
                { name: "Wind" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "First Strike", source: "tifa" },
                { name: "ATB Assist", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "", source: "aerith" },
                { name: "Binding", source: "barret" },
                { name: "", source: "aerith" },
              ],
              armor: [
                { name: "Parry" },
                { name: "", source: "aerith" },
                { name: "Lightning" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "" },
                { name: "Ice", source: "barret" },
                { name: "Fire", source: "cloud" },
                { name: "Barrier", source: "tifa" },
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
              shortcuts: [
                {
                  shortcut: "triangle",
                  ability: "Focused Thrust",
                  inputs: ["down"],
                },
              ],
            },
            {
              name: "Barret (R2)",
              shortcuts: [
                {
                  shortcut: "circle",
                  ability: "Blizzara All",
                  inputs: ["right", "up", "up"],
                },
              ],
            },
            {
              name: "Aerith (R2, R2)",
              shortcuts: [
                {
                  shortcut: "circle",
                  ability: "Thundaga",
                  inputs: ["right", "down"],
                },
                {
                  shortcut: "triangle",
                  ability: "Thundara",
                  inputs: ["right"],
                },
                {
                  shortcut: "square",
                  ability: "Blizzard All",
                  inputs: ["down", "down", "down"],
                },
                { shortcut: "x", ability: "Blizzara All" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["ATB Boost, TRIPOLOSKI each"]}
      />
      <Encounter
        enemies="Monodrive x2, Mark II Monodrive x2"
        instructions={[
          "Cloud: Punisher Monodrives",
          "Barret: Overcharge, Haste Cloud",
          "Cloud: TRIPOLOSKI Green/Aerora Blue",
          "Counter when inside ground",
        ]}
      />
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["Punisher/TRIPOLOSKI/Overcharge"]}
      />
      <Encounter
        enemies="M.O.T.H Unit"
        instructions={[
          "Cloud Thundaga, ATB Boost, Thundaga, Thundara",
          "Barret Thundara x2",
        ]}
      />
      <Pick item="Twin Stinger" />
      <Pick item="3000 gil" optional />
      <Heal description="Cloud 44 MP, Barret 22 MP." />
      <Encounter
        enemies="Blast-Ray, Shock-Ray x2"
        instructions={[
          "Cloud: Thundaga All",
          "Barret: Overcharge, Combo until stagger bar raises",
          "Barret: Thundara x2, Cloud ATB Boost, Cloud Thundara x2",
        ]}
      />
      <Dialogue details="Pull lever number 3" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Supreme Bracer", source: "cloud", inputs: ["right"] },
                { name: "Fury Ring", source: "cloud", inputs: ["right"] },
              ],
            },
            {
              name: "Aerith (R2)",
              equipments: [
                { name: "Heavy-Duty Bracer", inputs: ["down", "down"] },
                {
                  name: "Platinum Earrings",
                  source: "barret",
                  inputs: ["down", "down"],
                },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "ATB Boost", source: "cloud" },
                { name: "Refocus", source: "cloud" },
                { name: "" },
              ],
              armor: [
                { name: "Parry" },
                { name: "First Strike", source: "barret" },
                { name: "ATB Assist", source: "barret" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Magnify", source: "cloud" },
                { name: "Ice" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "First Strike", source: "cloud" },
                { name: "Lightning", source: "cloud" },
                { name: "ATB Stagger", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "Binding", source: "tifa" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
                { name: "", source: "aerith" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "" },
                { name: "Fire" },
                { name: "Time" },
                { name: "Wind" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "", source: "tifa" },
                { name: "Lightning", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Unknown Entity x3"
        instructions={["Blizzara All, Starshower"]}
      />
      <Encounter
        enemies="Bloodhound x6"
        instructions={[
          "Aerith: Blizzara All",
          "Tifa: ATB Boost/Starshower/Overpower",
        ]}
      />
      <Pick item="5000 gil" optional />
      <Encounter
        enemies="Zenene"
        instructions={[
          "Tifa: Aerith Blizzard All, ATB Boost",
          "Tifa: Starshower x2",
        ]}
      />
      <Heal description="Ether Aerith." />
      <Encounter
        enemies="Zenene x2"
        instructions={[
          "Tifa: Blizzard All, ATB Boost, Starshower x2",
          "Aerith: 1 ATB, Blizzard All (pressure)",
          "Tifa: Combo x6, Whirl, Focused Strike (stagger)",
          "Tifa: Whirl/Divekick",
        ]}
      />
      <Encounter
        enemies="Sentry Launcher x3"
        instructions={[
          "Aerith: Thundara right, Divekick, ATB Boost",
          "Aerith: Thundara/Divekick rest",
        ]}
      />
      <Dialogue details="Pull lever number 2" />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down"] },
          { name: "Ether x2", inputs: ["down", "down"] },
        ]}
      />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Twin Stinger", inputs: ["right"] },
                { name: "Fury Ring", source: "tifa", inputs: ["right"] },
              ],
            },
            {
              name: "Barret (R2)",
              equipments: [
                {
                  name: "Platinum Earrings",
                  source: "aerith",
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
                { name: "" },
                { name: "ATB Boost", source: "tifa" },
                { name: "Refocus", source: "tifa" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "First Strike", source: "aerith" },
                { name: "Lightning", source: "aerith" },
                { name: "ATB Stagger", source: "aerith" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Magnify", source: "aerith" },
                { name: "Ice", source: "aerith" },
                { name: "Time" },
                { name: "Wind" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "First Strike", source: "tifa" },
                { name: "ATB Assist", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "", source: "cloud" },
                { name: "Binding", source: "cloud" },
                { name: "" },
              ],
              armor: [
                { name: "Parry" },
                { name: "", source: "barret" },
                { name: "Lightning", source: "barret" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "", source: "barret" },
                { name: "Fire", source: "barret" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud (CHECK LEVEL 30)",
              weapons: [
                { name: "Twin Stinger", upgrade: "Auto - Attack" },
                { name: "Hardedge", upgrade: "Auto - Attack, Auto - Balanced" },
              ],
            },
            {
              name: "Tifa (R2, R2)",
              weapons: [{ name: "Metal Knuckles", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Counterstance",
                  inputs: ["right", "up"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Zenene x2"
        instructions={[
          "Barret: Overcharge, Focused Shot",
          "Cloud: Punisher/TRIPOLOSKI/Counterstance/ATB Boost",
          "Try to learn 40% or 10%",
        ]}
      />
      <Menu instructions={["Do upgrades here if level 29 earlier"]} />
      <Encounter
        enemies="M.O.T.H Unit, Shock-Ray x3"
        instructions={[
          "Cloud: Thundaga middle Shock-Ray",
          "Cloud: Counter + Counterstance until Learned",
          "Barret: Thundara x2, Cloud ATB Boost, Cloud Thundaga",
          "Barret: Overcharge, Thundara, TRIPOLOSKI",
        ]}
      />
      <Heal description="Full HP, Ether Barret." />
      <Box description="Before Sledgeworms." />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Hardedge", inputs: ["up", "up"] }],
            },
            {
              name: "Barret (R2)",
              equipments: [{ name: "Protective Boots", inputs: ["down"] }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sledgeworm x3"
        instructions={[
          "Cloud: Barret Thundara left, Punisher jump, Focused Thrust",
          "Cloud: Overcharge, Punisher",
          "Cloud: Barret Thundara, Punisher jump, Focused Thrust to stagger",
          "ATB Boost if needed",
        ]}
      />
      <Heal description="Full HP, Barret 30 MP." />
      <Pick item="Chain Bangle" />
      <Boss
        name="Brain Pod"
        phases={[
          ["TRIPOLOSKI, Overcharge, Punisher full"],
          ["Lock A, TRIPOLOSKI/ATB Boost/Barret Blizzara All/Overcharge"],
        ]}
      />
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["Cleave, TRIPOLOSKI x2"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Aerith",
              equipments: [
                { name: "Chain Bangle", inputs: ["right"] },
                { name: "Fury Ring", source: "cloud", inputs: ["right"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "ATB Stagger", source: "cloud" },
                { name: "Refocus", source: "cloud" },
                { name: "" },
                { name: "" },
              ],
              armor: [
                { name: "Parry" },
                { name: "First Strike", source: "cloud" },
                { name: "Lightning" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Magnify", source: "barret" },
                { name: "Ice", source: "barret" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost", source: "cloud" },
                { name: "First Strike", source: "barret" },
                { name: "ATB Assist", source: "barret" },
                { name: "Lightning", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "" },
                { name: "", source: "aerith" },
                { name: "Binding", source: "tifa" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "", source: "tifa" },
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "aerith" },
                { name: "Fire", source: "aerith" },
                { name: "Time" },
                { name: "Wind" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sledgeworm x2"
        instructions={[
          "Tifa: Aerith Thundara B, Hit, Focused Strike x2, Whirl",
          "Aerith: 1 ATB, ATB Boost",
          "Tifa: Aerith Thundara A, Focused Strike x2, Whirl/Divekick",
        ]}
      />
      <Encounter
        enemies="Enhanced Shock Trooper x2"
        instructions={[
          "Aerith Blizzard All, ATB Boost, Blizzard All",
          "Tifa: Starshower if pressure/Overpower/Divekick",
        ]}
      />
      <Encounter
        enemies="Unknown Entity x5"
        instructions={[
          "Aerith: Blizzara All, ATB Boost, Blizzara All",
          "Tifa: Overpower",
        ]}
      />
      <Heal description="Full HP, Ether Aerith x2." />
      <Encounter
        enemies="Shock-Ray x2, Slug-Ray x2"
        instructions={[
          "Arcane Ward, Tifa Thundara, ATB Boost, Aerith Thundara x2",
        ]}
      />
      <Heal description="Aerith 57 MP." />
      <Dialogue details="Pull lever number 4" />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Magnify", source: "aerith" },
                { name: "Time", source: "barret" },
                { name: "Binding" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "First Strike", source: "tifa" },
                { name: "" },
                { name: "" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "" },
                { name: "Fire" },
                { name: "", source: "cloud" },
                { name: "Wind" },
              ],
              armor: [{ name: "Lightning" }, { name: "" }, { name: "" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "ATB Stagger" },
                { name: "Refocus" },
                { name: "" },
                { name: "" },
              ],
              armor: [
                { name: "Parry" },
                { name: "", source: "cloud" },
                { name: "Lightning" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "", source: "cloud" },
                { name: "Ice" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "ATB Assist" },
                { name: "Lightning" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Swordipede"
        phases={[
          ["Cloud: Orb of Gravity", "Barret: Overcharge, Orb of Gravity"],
          [
            "Tifa: Whirl",
            "Aerith: 2 ATB, Arcane Ward, ATB Boost, Thundaga x2",
            "Tifa: Whirl/Divekick",
          ],
        ]}
      />
      <Bench description="Or full HP, Cloud 24 MP, Aerith full MP." />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                {
                  name: "Supreme Bracer",
                  source: "tifa",
                  inputs: ["down"],
                },
                {
                  name: "Supernatural Wristguards",
                  source: "tifa",
                  inputs: ["down"],
                },
              ],
            },
            {
              name: "Tifa (R2)",
              equipments: [
                {
                  name: "Fury Ring",
                  source: "aerith",
                  inputs: ["right"],
                },
              ],
            },
            {
              name: "Aerith (R2)",
              equipments: [
                {
                  name: "Platinum Earrings",
                  inputs: ["down", "down"],
                },
                {
                  name: "Protective Boots",
                  source: "barret",
                  inputs: ["down"],
                },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist", source: "aerith" },
                { name: "ATB Stagger" },
                { name: "Refocus" },
                { name: "" },
                { name: "" },
              ],
              armor: [{ name: "Parry" }, { name: "" }, { name: "Lightning" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "" },
                { name: "Ice" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "Wind", source: "barret" },
                { name: "Lightning" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "" },
                { name: "Fire" },
                { name: "" },
                { name: "Ice", source: "tifa" },
              ],
              armor: [{ name: "Lightning" }, { name: "" }, { name: "" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                {
                  shortcut: "circle",
                  ability: "Braver",
                },
                {
                  shortcut: "x",
                  ability: "Breach",
                  inputs: ["up", "up", "up"],
                },
              ],
            },
            {
              name: "Tifa (R2)",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Unbridled Strength",
                },
              ],
            },
            {
              name: "Aerith (R2)",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Blizzara",
                },
                {
                  shortcut: "square",
                  ability: "Firaga",
                  inputs: ["down", "down"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Jenova Dreamweaver"
        phases={[
          [
            "Cloud: Punisher jump Left Tentacle, Aerith Hazardous Material, Berserk",
            "Cloud: Haste All, Operator, Counter, Punisher x4, Berserk, Braver",
            "Tifa: Whirl, Braver, Parry, Whirl, Divekick, Combo x6, Whirl",
            "Cloud: Starshower, Punisher x4, Berserk, Starshower, Punisher",
          ],
          [
            "Cloud: Finish Punisher, Operator, Roll",
            "Cloud: Breach, Aerith Blizzara, Aerith ATB Boost",
            "Tifa: Parry x2",
            "Cloud: Dash, Counter, Aerith Blizzara",
            "Cloud: Punisher x4, Berserk, Focused Thrust, Aerith Blizzara",
            "Cloud: Punisher x4, Focused Thrust, Punisher x4, Focused Thrust",
            "Tifa: Whirl, Focused Strike x2, Unbridled, Omni, Whirl",
            "Cloud: Punisher full, Operator, Combo",
          ],
          [
            "Cloud: Haste All, Unbridled, Cleave",
            "Cloud: Thundara right Tentacle, TRIPOLOSKI Jenova",
            "Cloud: Cleave Jenova for ATB, TRIPOLOSKI/Punisher Tentacles",
            "Tifa: Hit, Defend Rejection, Combo x4, Focused Strike",
            "Tifa: Wait Sidewinder, Focused Strike",
            "Tifa: Omni, Whirl, Divekick, Whirl, Parry, Whril",
            "Cloud: Punisher full",
          ],
          [
            "Cloud: Starshower Jenova, Thundaga each Tentacle",
            "Cloud: Dash, Berserk, Starshower, Punisher x4, Breach",
            "Cloud: Somersault, Punisher",
          ],
        ]}
      />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Aerith",
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
                { name: "Magnify" },
                { name: "Time" },
                { name: "Binding" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Stagger", source: "tifa" },
                { name: "Refocus", source: "tifa" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "aerith" },
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
                { name: "" },
                { name: "" },
              ],
              armor: [{ name: "Parry" }, { name: "" }, { name: "Lightning" }],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "ATB Assist", source: "tifa" },
                { name: "Ice" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "Wind" },
                { name: "Lightning" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Counterstance",
                  inputs: ["right", "up"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Rufus, Darkstar"
        phases={[
          [
            "Darkstar: Switch to Punisher, TRIPOLOSKI",
            "Darkstar: Punisher full, Berserk, TRIPOLOSKI, Punisher Full, Berserk",
          ],
          [
            "Darkstar: Switch to Punisher, Wait a little bit, TRIPOLOSKI",
            "Darkstar: Punisher full, Berserk",
          ],
          ["Rufus: Sleep (1st slot), Braver, Punisher full, TRIPOLOSKI"],
        ]}
      />
      <Boss
        name="Arsenal"
        phases={[
          [
            "Barret: Overcharge Drone C",
            "Aerith: Tempest full x2, Thundara x2, Tempest full Drone C",
            "Aerith: Thundara Cannon, Tempest full, Soul Drain Drone B",
            "Aerith: Combo x5, Thundara Cannon, Combo x4, Soul Drain Drone A",
            "Aerith: Combo Arsenal",
          ],
          [
            "Aerith: Combo x2, Thundara, Focused Shot",
            "Aerith: Tempest full Right Front Wheel, Blizzara Left Front Wheel",
            "Barret: Combo full, Combo full",
            "Aerith: Tempest full, Thungada, Combo",
          ],
          [
            "Aerith: Thundara, Barret Turbo Ether Aerith, Focused Shot",
            "Aerith: Tempest full Right Front Wheel, Combo x2, Thundaga Rear Right Wheel",
            "Aerith: Tempest full Arsenal",
            "Barret: Overcharge, Soul Drain, Thundara Arsenal, Aerith Thundaga Rear Left Wheel",
            "Barret: Aerith wait 1 ATB, Thundara",
          ],
          ["Barret: Aerith ATB Boost, Aerith Thundaga x2, Barret Thundara"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter17;
