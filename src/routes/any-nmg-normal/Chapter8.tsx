import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
import Break from "../../components/Break";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";
import Shop from "../../components/Shop";
import UpgradeWeapons from "../../components/UpgradeWeapons";
import Dialogue from "../../components/Dialogue";

function Chapter8() {
  return (
    <Chapter number={8}>
      <Encounter
        enemies="Security Officer x2, Elite Security Officer"
        instructions={[
          "Dash, Punisher Elite, Punisher B",
          "TRIPOLOSKI + Focused Thrust Elite, Punisher",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Security Officer"
        instructions={[
          "Punisher x6, Operator, TRIPOLOSKI, Focused Thrust, Punisher",
        ]}
      />
      <Boss
        name="Reno"
        phases={[
          [
            "Dash, Counter",
            "Punisher x4, Focused Thrust",
            "Punisher x4, Focused Thrust, Roll",
            "Counter, Punisher full, Beserk, Punisher x4, Berserk",
          ],
          ["Aero, Dash, Cross Slash"],
        ]}
      />
      <Pick item="Ether" optional />
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
                { shortcut: "circle", ability: "Aero" },
                { shortcut: "x", ability: "Fire" },
              ],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Titanium Bangle" }],
            },
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
                { name: "Fire" },
                { name: "Ice", source: "barret" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }, { name: "Wind" }],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "", source: "inventory" },
                { name: "" },
                { name: "Fire", source: "barret" },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "Refocus" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "aerith" },
                { name: "", source: "cloud" },
                { name: "", source: "aerith" },
              ],
              armor: [{ name: "", source: "inventory" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [{ name: "Fire" }, { name: "Ice" }, { name: "" }],
              armor: [{ name: "Lightning" }],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Pick item="500 gil" optional />
      <Encounter enemies="Wererat x3" instructions={["TRIPOLOSKI"]} />
      <Encounter enemies="Gorgers x3" instructions={["TRIPOLOSKI"]} />
      <Encounter
        enemies="Hedgehog Pie x3"
        instructions={["TRIPOLOSKI, Punisher"]}
      />
      <Encounter
        enemies="Smogger"
        instructions={["Cloud: Punisher full, Berserk, Thundara, Punisher"]}
      />
      <Break time="1m33s" description="TV, heal if needed" />
      <Pick item="200 gil" />
      <Shop
        name="Materia Shop"
        sell={[
          "Mesmeric Armlet",
          "Revival",
          "Ice",
          "Barrier",
          "Prayer",
          "Deadly Dodge",
        ]}
      />
      <Shop name="Chadley" buy={["Wind", "ATB Boost", "First Strike"]} />
      <Menu>
        <Materia
          characters={[
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike", source: "inventory" },
                { name: "ATB Boost", source: "inventory" },
                { name: "Fire" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Wind", source: "inventory" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Hedgehog Pie, Wererat x2"
        instructions={["TRIPOLOSKI, Punisher"]}
      />
      <Encounter enemies="Wererat x4" instructions={["TRIPOLOSKI"]} />
      <Encounter
        enemies="Hedgehog Pie x2, Wererat"
        instructions={["TRIPOLOSKI, Punisher"]}
      />
      <Encounter
        enemies="Hedgehog Pie x2, Smogger"
        instructions={[
          "Cloud: TRIPOLOSKI",
          "Aerith: ATB Boost, Arcane Ward, Thundara Smogger",
          "Cloud: Berserk, TRIPOLOSKI Hedgehog Pies",
        ]}
      />
      <Encounter
        enemies="Hedgehog Pie x4"
        instructions={["Aerith: 2 ATB", "TRIPOLOSKI, Berserk"]}
      />
      <Encounter
        enemies="Smogger x2"
        instructions={["Aerith: Thundara both"]}
      />
      <Encounter
        enemies="Smogger"
        instructions={["Cloud Thundara, Aerith Thunder"]}
      />
      <Encounter
        enemies="Hedgehog Pie x3"
        instructions={["TRIPOLOSKI, Punisher"]}
      />
      <Bench optional description="Cloud needs 16 MP, Aerith needs 8 MP" />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike", source: "aerith" },
                { name: "Wind" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike", source: "cloud" },
                { name: "ATB Boost" },
                { name: "Fire" },
              ],
              armor: [{ name: "Lightning" }, { name: "Wind" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Rude"
        phases={[
          [
            "Dash, Counter, Operator, Aero, Lock",
            "Punisher x3, Focused Thrust, Aerith Aero",
            "Punisher full, Berserk, Punisher x4, Berserk",
          ],
          [
            "Roll, Dash, Aero",
            "Punisher x4, Berserk, Focused Thrust",
            "Punisher full, Berserk, Focused Thrust, Aerith Aero",
            "Punisher full, Berserk, Aero, Operator, Aero",
          ],
        ]}
      />
      <Dialogue
        optionText="Yeah"
        optionPosition="2nd"
        when="before entering Aerith’s House"
      />
    </Chapter>
  );
}

export default Chapter8;
