import React from "react";
import BattleSettings from "../../components/BattleSettings";
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
import UpgradeWeapons from "../../components/UpgradeWeapons";

function Chapter17() {
  return (
    <Chapter number={17}>
      <Pick item="Ether" optional />
      <Encounter
        enemies="Unknown Entity x4"
        instructions={[
          "Cloud: Divekick, Berserk, TRIPOLOSKI (focus casting Thundaga)",
          "Cloud: Punisher/TRIPOLOSKI",
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Supreme Bracer", inputs: ["right"] },
                { name: "Cog Bangle", source: "tifa", inputs: ["up"] },
                {
                  name: "Supernatural Wristguards",
                  source: "barret",
                  inputs: ["up"],
                },
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
                { name: "Lightning", source: "cloud" },
                { name: "Magnify" },
                { name: "Refocus" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Time" },
                { name: "First Strike" },
                { name: "ATB Boost", source: "tifa" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "ATB Assist", source: "tifa", inputs: ["up", "up"] },
                { name: "Binding" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Wind" },
                { name: "First Strike", source: "tifa" },
                { name: "Barrier" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "barret" },
                { name: "Subversion" },
                { name: "", source: "barret" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "Fire", source: "cloud" },
              ],
              summon: [{ name: "", source: "cloud" }],
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
          "Cloud: Dash, Braver Green, Barret Thundara, Punisher full, TRIPOLOSKI Blue",
          "Cloud: Overcharge Monodrive, Punisher/TRIPOLOSKI",
          "Cloud: Barret Sleep/Thundara when only 1 remaining, Braver/Punisher",
        ]}
      />
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["Punisher one, Overcharge other"]}
      />
      <Encounter
        enemies="M.O.T.H Unit"
        instructions={[
          "Cloud Thundaga, Barret Thundara x2",
          "Cloud ATB Boost, Thundaga, Thundara",
        ]}
      />
      <Heal description="Cloud 44 MP, Barret 22 MP" />
      <Pick item="3000 gil" optional />
      <Encounter
        enemies="Blast-Ray, Shock-Ray x2"
        instructions={[
          "Cloud: Thundaga All, Overcharge Blast-Ray",
          "Cloud: Punisher until stagger bar raises",
          "Cloud: Barret Thundara x2, ATB Boost, Thundara x2",
        ]}
      />
      <Heal description="Ether x1 Cloud/Barret" />
      <Dialogue details="Pull lever number 3" />
      <Menu instructions={["Do Aerith Weapon, then Tifa, then Aerith Armor"]}>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Fury Ring", source: "cloud", inputs: ["right"] },
              ],
            },
            {
              name: "Aerith (R2)",
              equipments: [
                {
                  name: "Platinum Earrings",
                  source: "barret",
                  inputs: ["down", "down"],
                },
                { name: "Heavy-Duty Bracer", inputs: ["down", "down", "down"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist", source: "barret" },
                { name: "First Strike", source: "barret" },
                { name: "Refocus", source: "cloud", inputs: ["up"] },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Parry" },
                { name: "Lightning" },
                { name: "ATB Boost", source: "cloud" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Ice", source: "barret", inputs: ["down"] },
                { name: "Magnify", source: "cloud", inputs: ["right"] },
                { name: "Fire", source: "tifa" },
                { name: "Barrier", source: "barret" },
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
                { name: "", source: "tifa" },
                { name: "", source: "aerith" },
              ],
              armor: [
                { name: "Time" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "tifa" },
                { name: "Binding" },
                { name: "", source: "aerith" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Wind" },
                { name: "Subversion", source: "tifa" },
                { name: "", source: "aerith" },
              ],
              summon: [{ name: "" }],
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
          "Tifa: Combo (2 ATB), Aerith Blizzara All, Starshower",
          "Tifa: ATB Boost, Starshower/Aerith Blizzara All",
        ]}
      />
      <Heal description="Ether x1 Aerith" />
      <Pick item="5000 gil" optional />
      <Encounter
        enemies="Zenene"
        instructions={["Tifa: Aerith Thundara, Starshower, Whirl, Divekick"]}
      />
      <Heal description="Ether x1 Aerith" />
      <Encounter
        enemies="Zenene x2"
        instructions={[
          "Tifa: Overpower, Blizzara All, Combo x3 (pressure), Whirl",
          "Tifa: Wait Blizzara, Focused Strike (stagger), Whirl, Divekick",
          "Tifa: ATB Boost, Overpower, Combo x3 (pressure), Whirl",
          "Tifa: Focused Strike until stagger, Whirl, Divekick",
        ]}
      />
      <Encounter
        enemies="Sentry Launcher x3"
        instructions={[
          "Tifa: Aerith Thundara A and C, Thundara B",
          "Tifa: Aerith Blizzara All A/C, Thundara B",
        ]}
      />
      <Heal description="Ether x2 Aerith" />
      <Dialogue details="Pull lever number 2" />
      <Menu instructions={["Check level 30/110 SP for upgrades"]}>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Supreme Bracer", source: "tifa", inputs: ["right"] },
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
                { name: "Time" },
                { name: "Subversion", source: "barret" },
                {
                  name: "ATB Boost",
                  source: "tifa",
                  inputs: ["square", "right", "square"],
                },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                {
                  name: "Ice",
                  source: "inventory",
                  inputs: ["down", "down"],
                },
                {
                  name: "Magnify",
                  source: "aerith",
                  inputs: ["down", "down", "down"],
                },
                { name: "ATB Assist", source: "tifa", inputs: ["up", "up"] },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Wind" },
                { name: "First Strike", source: "tifa" },
                { name: "ATB Stagger", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "barret" },
                { name: "", source: "cloud" },
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
                { name: "Ice" },
                { name: "", source: "barret" },
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
          "Cloud: TRIPOLOSKI",
          "Barret: Overcharge",
          "Cloud: Focused Shot one, Punisher full other, TRIPOLOSKI x2",
        ]}
      />
      <Heal description="Full HP, Cloud 45 MP, Barret 21 MP" />
      <Box description="Before next fight" />
      <Encounter
        enemies="M.O.T.H Unit, Shock-Ray x3"
        instructions={[
          "Cloud: Thundaga Shock-Ray",
          "Barret: Overcharge (Shock-Ray if alive), Thundara x2",
          "Barret: Cloud ATB Boost, Cloud Thundaga x2, 1 ATB, Thundara",
        ]}
      />
      <Heal description="Full HP, Ether x1 Barret" />
      <Menu instructions={["Do upgrades here first if level 29 earlier"]}>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Hardedge", inputs: ["up", "up"] }],
            },
          ]}
        />
      </Menu>
      <Box description="Before next fight" />
      <Encounter
        enemies="Sledgeworm x3"
        instructions={[
          "Cloud: Barret Thunder left, Punisher x3, Focused Thrust (stagger)",
          "Cloud: Overcharge, Punisher x6, Operator",
          "Cloud: Dash, Hit, Barret Thundara, Focused Thrust the other 2",
          "Cloud: Punisher full the 2nd, Punisher x2 + Braver the 3rd to kill",
        ]}
      />
      <Heal description="Full HP, Ether x1 Barret" />
      <Pick item="Chain Bangle" />
      <Box description="Before next fight" />
      <Boss
        name="Brain Pod"
        phases={[
          [
            "Cloud: Dash, TRIPOLOSKI",
            "Barret: Overcharge",
            "Cloud: Cleave, Punisher full",
          ],
          [
            "Cloud: Barret Blizzara All, Punisher jump, Braver, Operator, TRIPOLOSKI A",
            "Cloud: TRIPOLOSKI/ATB Boost/Barret Blizzara All",
          ],
        ]}
      />
      <Heal description="Cloud/Barret good HP, Barret 31 MP" />
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["Cloud: ATB Boost, TRIPOLOSKI x2"]}
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
            {
              name: "Aerith (R2)",
              equipments: [
                {
                  name: "Platinum Earrings",
                  source: "barret",
                  inputs: ["down", "down"],
                },
                { name: "Chain Bangle", inputs: ["right"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "" },
                { name: "First Strike", source: "barret" },
                { name: "ATB Stagger", source: "barret" },
                { name: "ATB Assist", source: "barret" },
                { name: "Refocus", source: "cloud", inputs: ["up"] },
              ],
              armor: [{ name: "Parry" }, { name: "Lightning" }, { name: "" }],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Ice" },
                { name: "Magnify", source: "barret", inputs: ["right"] },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "Lightning", source: "cloud" },
                { name: "First Strike", source: "cloud" },
                { name: "ATB Boost", source: "cloud" },
                { name: "Wind", source: "barret" },
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
                { name: "Time" },
                { name: "Subversion" },
                { name: "", source: "aerith" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Ice" },
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
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
      <Heal description="Ether Aerith x1" />
      <Encounter
        enemies="Enhanced Shock Trooper x2"
        instructions={[
          "Tifa: Aerith Blizzard All",
          "Tifa: Starshower if pressure/Overpower if not",
        ]}
      />
      <Encounter
        enemies="Unknown Entity x5"
        instructions={[
          "Tifa: Aerith Blizzara All, Combo to kill",
          "Tifa: Aerith ATB Boost, Aerith Blizzara All, Combo to kill",
        ]}
      />
      <Heal description="Full HP, Ether Aerith x2" />
      <Pick item="Ether" description="After sending Red" />
      <Encounter
        enemies="Shock-Ray x2, Slug-Ray x2"
        instructions={[
          "Tifa: Aerith ATB Boost, Aerith Thundara x2",
          "Tifa: Run to lever, Thundara rest",
        ]}
      />
      <Heal description="Aerith 57 MP" />
      <Dialogue details="Pull lever number 4" />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                {
                  name: "Binding",
                  source: "inventory",
                  inputs: ["right", "up", "up", "up"],
                },
                { name: "Subversion", source: "cloud" },
                { name: "ATB Stagger" },
                { name: "" },
              ],
              armor: [
                { name: "Time" },
                { name: "Magnify", source: "aerith", inputs: ["right"] },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "" },
                { name: "", source: "cloud" },
                { name: "ATB Stagger" },
                { name: "ATB Assist" },
                { name: "Refocus" },
              ],
              armor: [{ name: "Parry" }, { name: "Lightning" }, { name: "" }],
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
                { name: "ATB Boost" },
                { name: "Wind" },
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
              name: "Tifa (R2, R2)",
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
        name="Swordipede"
        phases={[
          [
            "Barret: Overcharge, Cloud Sleep",
            "Cloud: Barret Orb of Gravity, Berserk, Braver",
          ],
          [
            "Tifa: Whirl",
            "Aerith: 2 ATB, Arcane Ward, ATB Boost",
            "Tifa: Aerith Thundaga x2, Whirl/Divekick",
          ],
        ]}
      />
      <Heal description="Full HP, Cloud 28 MP, Aerith 62 MP" />
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
            "Tifa: Whirl, Focused Strike x2 (stagger), Unbridled, Omni, Whirl",
            "Cloud: Punisher full, Operator, Combo",
          ],
          [
            "Cloud: Haste All, Unbridled, Cleave",
            "Cloud: Thundara right Tentacle, TRIPOLOSKI Jenova",
            "Cloud: Operator x3, Cleave Jenova, TRIPOLOSKI/Punisher Tentacles",
            "Tifa: Hit, Defend Rejection, Combo x4, Focused Strike x2",
            "Tifa: Omni, Whirl, Divekick, Whirl, Parry, Whril",
            "Cloud: Punisher full",
          ],
          [
            "Cloud: Starshower Jenova, Thundaga Tentacle",
            "Cloud: Dash, Berserk, Starshower, Punisher x6 Breach",
            "Cloud: Somersault, Aerith Turbo Ether self, Punisher",
          ],
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Barret",
              equipments: [
                {
                  name: "Platinum Earrings",
                  source: "aerith",
                  inputs: ["down", "down"],
                },
              ],
            },
            {
              name: "Aerith (R2, R2)",
              equipments: [
                { name: "Fury Ring", source: "tifa", inputs: ["right"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Aerith",
              weapon: [
                { name: "Ice" },
                { name: "ATB Assist", source: "tifa", inputs: ["up", "up"] },
                { name: "Fire" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "Wind" },
              ],
              summon: [{ name: "" }],
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
            "Barret: Overcharge, Soul Drain",
            "Barret: Thundara x2 Arsenal, Aerith Thundaga Rear Left Wheel",
          ],
          ["Aerith: 1 ATB, ATB Boost, Thundaga x2, Barret Thundara"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter17;
