import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
import Break from "../../components/Break";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";
import Shop from "../../components/Shop";
import UpgradeWeapons from "../../components/UpgradeWeapons";

function Chapter8() {
  return (
    <Chapter number={8}>
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Buster Sword" },
                { name: "Titanium Bangle" },
                { name: "Power Wristguards", source: "tifa" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Barrier" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Ice" }, { name: "Deadly Dodge" }],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Fire" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Wind" }],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Security Officer x2, Elite Security Officer"
        instructions={[
          "Punisher Security Officer A",
          "TRIPOLOSKI, Focused Thrust, Punisher Elite",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Security Officer"
        instructions={["Punisher full, Focused Thrust, TRIPOLOSKI Elite"]}
      />
      <Boss
        name="Reno"
        phases={[
          [
            "Roll over him, Punisher full, Berserk, Focused Thrust",
            "Punisher x6, TRIPOLOSKI, Berserk",
          ],
          ["Cross Slash"],
        ]}
      />
      <Pick item="Ether" optional />
      <Pick item="500 gil" optional />
      <Encounter
        enemies="Wererat x3"
        instructions={["Deadly Dodge, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Gorgers x3"
        instructions={["TRIPOLOSKI, Deadly Dodge"]}
      />
      <Encounter
        enemies="Hedgehog Pie x3"
        instructions={["Deadly Dodge, TRIPOLOSKI, Deadly Dodge"]}
      />
      <Encounter
        enemies="Smogger"
        instructions={["Cloud: Dash, Berserk, Thundara, Punisher full"]}
      />
      <Break time="1m33s" description="TV" />
      <Pick item="200 gil" />
      <Shop name="Chadley" buy={["ATB Boost", "First Strike"]} />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Aerith",
              weapons: [{ name: "Guard Stick", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Aerith",
              shortcuts: [
                { shortcut: "square", ability: "Thundara" },
                { shortcut: "circle", ability: "Fira" },
                { shortcut: "x", ability: "Fire" },
              ],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Aerith",
              equipments: [{ name: "Earrings", source: "barret" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Wind", source: "tifa" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Refocus", source: "aerith" },
                { name: "Deadly Dodge" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "ATB Boost", source: "inventory" },
                { name: "First Strike", source: "inventory" },
                { name: "Fire", source: "barret" },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "Ice", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "aerith" },
                { name: "Fire" },
                { name: "", source: "aerith" },
              ],
              armor: [{ name: "", source: "inventory" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Fire" },
                { name: "Lightning" },
              ],
              armor: [{ name: "", source: "cloud" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Hedgehog Pie, Wererat x2"
        instructions={["Deadly Dodge, TRIPOLOSKI, Deadly Dodge"]}
      />
      <Encounter
        enemies="Wererat x4"
        instructions={["Deadly Dodge, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Hedgehog Pie x2, Wererat"
        instructions={["Deadly Dodge, TRIPOLOSKI, Punisher, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Hedgehog Pie x2, Smogger / Hedgehog Pie x4 / Smogger x2"
        instructions={[
          "Hedgehog Pie x2, Smogger: Cloud Thundara Smogger, Tempest full, TRIPOLOSKI/Punisher",
          "Hedgehog Pie x4: Berserk, Punisher/TRIPOLOSKI, Arcane Ward, ATB Boost",
          "Smogger x2: Aerith Thundara both",
        ]}
      />
      <Encounter
        enemies="Smogger"
        instructions={["Cloud: Berserk, Arcane Ward, Thundara"]}
      />
      <Encounter
        enemies="Hedgehog Pie x3"
        instructions={["Berserk A, TRIPOLOSKI, Punisher"]}
      />
      <Bench optional description="Cloud needs 8 MP, Aerith needs 22 MP" />
      <Boss
        name="Rude"
        phases={[
          [
            "Dash, Counter, Operator, Aero, Aerith ATB Boost, Lock",
            "Punisher x3, Focused Thrust, Aerith Thundara",
            "Punisher full, Berserk, Punisher",
          ],
          [
            "Run right, TRIPOLOSKI, Berserk, Focused Thrust",
            "Punisher full, Berserk, Focused Thrust, Aerith Thundara",
            "Punisher full, Aero, Punisher x3, TRIPOLOSKI, Punisher",
          ],
        ]}
      />
      <Dialogue
        optionText="Yeah"
        optionPosition="2nd"
        details="before entering Aerith’s House"
      />
    </Chapter>
  );
}

export default Chapter8;
