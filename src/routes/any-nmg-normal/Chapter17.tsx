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
                { name: "ATB Boost" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Subversion", source: "tifa" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit" }],
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
                { name: "Time" },
                { name: "ATB Assist", source: "tifa" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire", source: "barret" },
                { name: "Fire", source: "cloud" },
                { name: "Barrier", source: "barret" },
                { name: "ATB Stagger" },
              ],
              armor: [{ name: "Parry" }, { name: "Lightning" }, { name: "" }],
              summon: [{ name: "" }],
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
          "Cloud: Braver Monodrive",
          "Barret: Overcharge Monodrive",
          "Cloud: Barret Thundara, Punisher full, Braver, Operator, Cleave Blue",
          "Cloud: Barret Sleep, Braver, Punisher Green",
          "Cloud: Thundara when shield changes, TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["Punisher one, Overcharge other"]}
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
                {
                  name: "Platinum Earrings",
                  source: "barret",
                  inputs: ["down", "down", "down"],
                },
                {
                  name: "Caliginous Bracelet",
                  inputs: ["down", "down", "down"],
                },
                {
                  name: "Heavy-Duty Bracer",
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
                { name: "Fire" },
                { name: "First Strike", source: "barret" },
                { name: "ATB Boost", source: "cloud" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "Refocus", source: "cloud" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Ice", source: "barret", inputs: ["down", "down"] },
                { name: "Magnify", source: "cloud" },
                { name: "Fire", source: "tifa" },
                { name: "Barrier", source: "tifa" },
              ],
              armor: [
                { name: "Lightning", source: "cloud" },
                { name: "First Strike", source: "cloud" },
                { name: "ATB Stagger", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
              ],
              armor: [
                { name: "Subversion" },
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Binding" },
                { name: "", source: "aerith" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Time" },
                { name: "ATB Assist" },
                { name: "", source: "aerith" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Aerith",
              shortcuts: [
                {
                  shortcut: "square",
                  ability: "Blizzard All",
                  inputs: ["down", "down", "down"],
                },
                {
                  shortcut: "triangle",
                  ability: "Thundara",
                  inputs: ["right"],
                },
                {
                  shortcut: "circle",
                  ability: "Thundaga",
                  inputs: ["right", "down"],
                },
                {
                  shortcut: "x",
                  ability: "Blizzara All",
                },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Unknown Entity x3"
        instructions={["Starshower, Blizzara All"]}
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
      <Heal description="Ether x1 Aerith." />
      <Encounter
        enemies="Zenene x2"
        instructions={[
          "Tifa: Overpower, Blizzara All, Combo x3 (pressure), Whirl (wait Blizzara)",
          "Tifa: Focused Strike (stagger), Whirl, Divekick",
          "Tifa: ATB Boost, Overpower, Blizzara All, Combo x3 (pressure)",
          "Tifa: Focused Strike (stagger), Whirl, Divekick",
        ]}
      />
      <Encounter
        enemies="Sentry Launcher x3"
        instructions={[
          "Tifa: ATB Boost, Thundara B",
          "Aerith: Thundara A, Thundara C, Divekick B, Blizzara All",
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
      <Menu
        instructions={[
          "Start movind Binding to Cloud",
          "Check level 30/110 SP for upgrades",
        ]}
      >
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
                  inputs: ["down", "down", "down"],
                },
                {
                  name: "Heavy-Duty Bracer",
                  source: "aerith",
                  inputs: ["down"],
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
                { name: "Lightning", source: "aerith" },
                { name: "First Strike", source: "aerith" },
                { name: "ATB Stagger", source: "aerith" },
                { name: "Refocus", source: "tifa", inputs: ["up"] },
              ],
              armor: [
                { name: "Subversion" },
                { name: "Binding", source: "barret" },
                { name: "ATB Boost", source: "tifa" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Ice", source: "aerith" },
                { name: "Magnify", source: "aerith" },
                { name: "First Strike", source: "tifa" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Time" },
                { name: "ATB Assist" },
                { name: "ATB Stagger", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "", source: "barret" },
                { name: "", source: "cloud" },
                { name: "", source: "barret" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "", source: "cloud" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Wind", source: "barret" },
                { name: "", source: "cloud" },
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
              name: "Cloud",
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
                  shortcut: "triangle",
                  ability: "Focused Thrust",
                  inputs: ["down"],
                },
                {
                  shortcut: "x",
                  ability: "Counterstance",
                  inputs: ["right", "up"],
                },
              ],
            },
            {
              name: "Barret (R2)",
              shortcuts: [
                {
                  shortcut: "square",
                  ability: "Blizzara All",
                  inputs: ["right", "up", "up"],
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
          "Cloud: Punisher/TRIPOLOSKI/Counterstance",
          "Try to learn 40% or 10%",
        ]}
      />
      <Menu instructions={["Do upgrades here if level 29 earlier"]} />
      <Encounter
        enemies="M.O.T.H Unit, Shock-Ray x3"
        instructions={[
          "Cloud: Thundaga middle Shock-Ray",
          "Cloud: Counter + Counterstance until learned",
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
          "Cloud: Punisher x6, Overcharge, Operator",
          "TRIPOLOSKI/Barret Thundara to pressure, Focused Thrust to stagger",
        ]}
      />
      <Heal description="Full HP, Barret 30 MP." />
      <Pick item="Chain Bangle" />
      <Boss
        name="Brain Pod"
        phases={[
          ["TRIPOLOSKI, Overcharge, Punisher full"],
          ["Lock A, TRIPOLOSKI/ATB Boost/Barret Blizzara All"],
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
                { name: "Fire" },
                { name: "" },
                { name: "First Strike", source: "barret" },
                { name: "Refocus", source: "cloud" },
                { name: "" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "ATB Stagger", source: "barret" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Ice", source: "barret" },
                { name: "Magnify", source: "barret" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "Lightning", source: "cloud" },
                { name: "First Strike", source: "cloud" },
                { name: "ATB Assist", source: "barret", inputs: ["up", "up"] },
                { name: "ATB Boost", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "ATB Stagger" },
                { name: "", source: "tifa" },
              ],
              armor: [
                { name: "Subversion" },
                { name: "Binding" },
                { name: "", source: "aerith" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Time" },
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
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
          "Tifa: Whirl B, Aerith Thundaga A, Whirl, Divekick",
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
                {
                  name: "Time",
                  source: "barret",
                  inputs: ["right"],
                },
                {
                  name: "Magnify",
                  source: "aerith",
                  inputs: ["right", "down"],
                },
                { name: "ATB Stagger" },
                { name: "" },
              ],
              armor: [
                { name: "Subversion" },
                { name: "Binding" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "" },
                { name: "" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "", source: "cloud" },
                { name: "" },
                { name: "" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "" },
                { name: "", source: "cloud" },
                { name: "Refocus" },
                { name: "" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Ice" },
                { name: "", source: "cloud" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "First Strike" },
                { name: "ATB Assist" },
                { name: "ATB Boost" },
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
                  name: "Platinum Earrings",
                  inputs: ["down", "down", "down"],
                },
                {
                  name: "Fury Ring",
                  source: "aerith",
                  inputs: ["right"],
                },
              ],
            },
            {
              name: "Tifa (R2)",
              equipments: [
                {
                  name: "Fury Ring",
                  source: "cloud",
                  inputs: ["right"],
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
                { name: "Fire" },
                { name: "ATB Assist", source: "aerith", inputs: ["up", "up"] },
                { name: "" },
                { name: "Refocus" },
                { name: "" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Ice" },
                { name: "" },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "First Strike" },
                { name: "", source: "tifa" },
                { name: "ATB Boost" },
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
                { name: "Time" },
                { name: "Magnify" },
                { name: "ATB Stagger" },
                { name: "Refocus", source: "tifa", inputs: ["up"] },
              ],
              armor: [
                { name: "Subversion" },
                { name: "Binding" },
                { name: "First Strike" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "aerith" },
                { name: "" },
                { name: "" },
                { name: "Lightning" },
              ],
              armor: [{ name: "" }, { name: "" }, { name: "" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "", source: "aerith" },
                { name: "" },
                { name: "", source: "cloud" },
                { name: "" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Ice" },
                { name: "ATB Assist", source: "tifa", inputs: ["up", "up"] },
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
            "Aerith: Tempest full, Thundaga, Combo",
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
