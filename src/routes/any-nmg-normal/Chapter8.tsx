import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Break from "../../components/Break";
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

function Chapter8() {
  return (
    <Chapter number={8}>
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Buster Sword", inputs: ["up"] },
                { name: "Remove Accessory" },
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
                { name: "Ice" },
                { name: "First Strike" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "Lightning" },
                {
                  name: "Deadly Dodge",
                  source: "inventory",
                  inputs: ["right"],
                },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [{ name: "Fire" }, { name: "" }, { name: "Lightning" }],
              armor: [{ name: "" }],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Security Officer x2, Elite Security Officer"
        instructions={[
          "Deadly Dodge, Counter",
          "TRIPOLOSKI, Focused Thrust Elite",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Security Officer"
        instructions={[
          "Punisher full, Operator, Focused Thrust Elite",
          "TRIPOLOSKI rest if alive",
        ]}
      />
      <Boss
        name="Reno"
        phases={[
          [
            "Punisher jump, Roll over, Punisher full, Focused Thrust",
            "Berserk, Punisher x4, TRIPOLOSKI, Roll back",
          ],
          ["Cross Slash"],
        ]}
      />
      <Pick item="Ether" optional />
      <Menu
        instructions={["Remove Prayer from Aerith while swapping with Barret"]}
      >
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
                {
                  shortcut: "circle",
                  ability: "Thundara",
                  inputs: ["right", "up"],
                },
                {
                  shortcut: "x",
                  ability: "Aero",
                  inputs: ["right"],
                },
              ],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Aerith",
              equipments: [{ name: "Earrings", inputs: ["right"] }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Ice", source: "aerith" },
                { name: "First Strike" },
                { name: "Refocus", source: "aerith" },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "Deadly Dodge" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning", source: "cloud" },
                { name: "Wind", source: "barret" },
                { name: "First Strike", source: "barret", inputs: ["right"] },
              ],
              armor: [
                { name: "Fire", source: "barret" },
                { name: "ATB Boost", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
              ],
              armor: [{ name: "Ice", source: "cloud" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Pick item="500 gil" optional />
      <Encounter enemies="Wererat x3" instructions={["TRIPOLOSKI"]} />
      <Box description="After trying to open the door." />
      <Encounter
        enemies="Hedgehog Pie x3"
        instructions={["Deadly Dodge, TRIPOLOSKI, Cleave"]}
      />
      <Encounter
        enemies="Smogger"
        instructions={["Aerith Thundara, Cloud Thunder"]}
      />
      <Break time="1m33s" description="TV" />
      <Pick item="200 gil" />
      <Encounter
        enemies="Hedgehog Pie, Wererat x2"
        instructions={[
          "Deadly Dodge, Cleave Rats",
          "Blizzard Pie (needs 1 stagger gauge before)",
        ]}
      />
      <Encounter
        enemies="Wererat x4"
        instructions={["Deadly Dodge, Cleave, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Hedgehog Pie x2, Wererat"
        instructions={[
          "Deadly Dodge, TRIPOLOSKI Rat",
          "Punisher Pie, Soul Drain other Pie",
        ]}
      />
      <Encounter
        enemies="Hedgehog Pie x2, Smogger / Hedgehog Pie x4 / Smogger x2"
        instructions={[
          "Hedgehog Pie x2, Smogger: Aerith Thundara, Cloud Berserk, Thunder Smogger, Punisher Pies",
          "Hedgehog Pie x4: TRIPOLOSKI, Aerith 1 ATB, ATB Boost, Punisher",
          "Smogger x2: Cloud Thunder, Aerith Thundara each",
        ]}
      />
      <Heal description="Ether Aerith" />
      <Encounter
        enemies="Smogger"
        instructions={["Cloud: Aerith Thundara, go to exit, Thunder"]}
      />
      <Encounter
        enemies="Hedgehog Pie x3"
        instructions={["Cloud: Berserk A, TRIPOLOSKI, Soul Drain C"]}
      />
      <Heal description="Cloud 500 HP, Aerith 300 HP/11 MP" />
      <Boss
        name="Rude"
        phases={[
          [
            "Cloud: Aerith ATB Boost, Dash, Counter, Aerith Aero",
            "Cloud: Punisher x6, Focused Thrust (stagger)",
            "Cloud: Berserk, Aerith Aero, Punisher",
          ],
          [
            "Cloud: Wait shockwave, swap",
            "Aerith: Hit x3",
            "Cloud: TRIPOLOSKI, Berserk, Focused Thrust",
            "Cloud: Punisher full, Berserk, Focused Thrust, Aerith Aero (stagger)",
            "Cloud: Punisher full, TRIPOLOSKI, Punisher x3, TRIPOLOSKI",
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
