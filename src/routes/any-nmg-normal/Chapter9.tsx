import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
import Break from "../../components/Break";
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

function Chapter9() {
  return (
    <Chapter number={9}>
      <Encounter
        enemies="Terpsicolt"
        instructions={["Aerith Thundara, Punisher x4, Operator"]}
      />
      <Encounter
        enemies="Lesser Drake"
        instructions={[
          "Aerith: Tempest x3, Hit x1 (stagger)",
          "Aerith: TRIPOLOSKI, Soul Drain, Aero",
        ]}
      />
      <Encounter
        enemies="Sweeper Prototype"
        instructions={[
          "Aerith ATB Boost, Thundara, Arcane Ward Cloud",
          "Cloud: Punisher full, Berserk, 2 ATB, Thundara, Thunder",
        ]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Encounter
        enemies="Terpsicolt x2"
        instructions={["Aerith ATB Boost, Soul Drain x2", "Cloud: Flee"]}
      />
      <Pick item="Mega-Potion" optional />
      <Encounter
        enemies="Beck, Burke, Butch"
        instructions={["Aerith Fira Butch", "TRIPOLOSKI/Punisher"]}
      />
      <Encounter
        enemies="Sweeper Prototype, Bandit x2"
        instructions={[
          "Cloud: Lock Bandit A, Punisher full, Berserk, Aerith ATB Boost",
          "Cloud: TRIPOLOSKI, Punisher Bandits, Aerith Thundara Sweeper",
          "Cloud: 2 ATB, Berserk, Arcane Ward Cloud, Thundara, Thunder",
        ]}
      />
      <Encounter
        enemies="Bandit x4"
        instructions={["Aerith Fira C, Dash, TRIPOLOSKI"]}
      />
      <Dialogue
        optionText="She's great at handling the books"
        optionPosition="3rd"
        details="when talking to Sam"
      />
      <Shop
        name="Weapon Shop"
        buy={[
          { name: "Hardedge" },
          { name: "Caliginous Bracelet", inputs: ["down", "down"] },
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Hardedge", inputs: ["right"] }],
            },
            {
              name: "Aerith (R2)",
              equipments: [{ name: "Caliginous Bracelet", inputs: ["up"] }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Hardedge", upgrade: "Auto - Attack" }],
            },
            {
              name: "Tifa (L2)",
              weapons: [
                { name: "Sonic Strikers", upgrade: "Auto - Balanced" },
                { name: "Metal Knuckles", upgrade: "Manual" },
              ],
            },
          ]}
        />
      </Menu>
      <Pick item="1200 gil" optional />
      <Dialogue
        optionText="Poor Man's"
        optionPosition="3rd"
        details="when talking to Madam M"
      />
      <Dialogue
        optionText="It matters..."
        optionPosition="3rd"
        details="when talking to Aerith"
      />
      <Encounter
        enemies="Beastmaster, Bloodhound x2"
        instructions={[
          "Cloud: Berserk, Aerith ATB Boost, Soul Drain, Punisher (2 ATB) Beastmaster",
          "Cloud: Soul Drain/TRIPOLOSKI/Punisher",
        ]}
      />
      <Heal description="Aerith 10 MP" />
      <Encounter
        enemies="Corneo Lackey 1 x5, Beck, Burke, Butch"
        instructions={[
          "Cloud: Aerith Fira Beck, Deadly Dodge",
          "Cloud: TRIPOLOSKI, Berserk, TRIPOLOSKI",
        ]}
      />
      <Bench />
      <Encounter
        enemies="Cutter, Sweeper"
        instructions={[
          "Cloud: Aerith ATB Boost, Aerith Thundara, Berserk, Thundara Sweeper",
          "Aerith: Combo (2 ATB), Thundara Sweeper",
          "Cloud: Counter/TRIPOLOSKI (pressure) Cutter",
          "Cloud: Punisher full, Berserk, Focused Thrust, Punisher (stagger) Cutter",
          "Cloud: Thundara/Aerith Thundara Cutter",
        ]}
      />
      <Heal description="Cloud 14 MP, Aerith 46 MP, full HP" />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Ice", source: "barret" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              armor: [{ name: "Lightning" }, { name: "Fire", source: "tifa" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Fire" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "Ice", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [{ name: "" }, { name: "" }, { name: "" }],
              armor: [{ name: "", source: "cloud" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Deadly Dodge", source: "cloud" },
                { name: "" },
                { name: "Lightning" },
              ],
              armor: [{ name: "" }],
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
                  ability: "Fira",
                  inputs: ["down"],
                },
                {
                  shortcut: "x",
                  ability: "Blizzara",
                  inputs: ["down", "down", "down"],
                },
              ],
            },
            {
              name: "Aerith (R2)",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Blizzard",
                  inputs: ["down", "down"],
                },
                {
                  shortcut: "circle",
                  ability: "Fira",
                  inputs: ["down"],
                },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Hell House"
        phases={[
          [
            "Cloud: Aerith ATB Boost, Arcane Ward Cloud, Defend chairs",
            "Cloud: Aerith Blizzard, Cloud Blizzara",
            "Aerith: Tempest full",
            "Cloud: Take toy damage, Berserk",
          ],
          [
            "Cloud: Counter x2, Braver (pressure)",
            "Aerith: Braver, Combo x1, Fira, Tempest full, Fira, Tempest full",
            "Cloud: Berserk (stagger), Aerith Fira, Punisher x4, Operator, Braver",
            "Aerith: Cross Slash, Soul Drain",
          ],
          [
            "Aerith: 2 ATB, Wait Hellbound",
            "Aerith: Spell (outside ward), Tempest full, Blizzard (inside ward)",
            "Cloud: Berserk, Aerith Blizzard, Operator, Infinity's End",
          ],
        ]}
      />
      <Shop
        name="Chadley (exit and enter again for Parry)"
        buy={[{ name: "Parry", inputs: ["up", "up", "up", "up"] }]}
        reset={[{ name: "Hardedge", inputs: ["up"] }]}
      />
      <Pick item="Elixir" />
      <Break time="50s" description="Dance practice" />
      <Dialogue
        optionText="No"
        optionPosition="2nd"
        details="after dance practice"
      />
      <Break time="2m30s" description="Dance" />
      <Pick item="Turbo Ether" />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down", "down"] },
          { name: "Ether", inputs: ["down", "down"] },
          { name: "Phoenix Down", inputs: ["down", "down"] },
        ]}
      />
      <Pick item="Fury Ring" />
      <Menu instructions={["Equip Barrier before swap"]}>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Mythril Armlet", inputs: ["right"] },
                { name: "Fury Ring", inputs: ["right"] },
                { name: "Earrings", source: "aerith", inputs: ["up"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "Lightning", source: "aerith" },
                { name: "" },
                { name: "Lightning" },
              ],
              armor: [
                {
                  name: "Parry",
                  source: "inventory",
                  inputs: ["up"],
                },
                { name: "Wind", source: "aerith" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Deadly Dodge", source: "tifa" },
                {
                  name: "Barrier",
                  source: "inventory",
                  inputs: ["up", "up", "up", "up"],
                },
                { name: "Fire" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Boost" },
                { name: "Ice" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Corneo Lackey x3"
        instructions={["Aerith: Deadly Dodge, Fira"]}
      />
      <Encounter
        enemies="Corneo Lackey x2"
        instructions={["Aerith: Deadly Dodge, Fira"]}
      />
    </Chapter>
  );
}

export default Chapter9;
