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
      <Pick item="Mega-Potion" optional />
      <Encounter
        enemies="Beck, Burke, Butch"
        instructions={["Aerith Fira Butch", "Deadly Dodge, Cleave, TRIPOLOSKI"]}
      />
      <Heal description="Ether x1 Aerith" />
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
      <Menu
        instructions={[
          "Equip Tifa's Fire (1st slot) on Aerith before swapping with Cloud",
        ]}
      >
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
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "tifa" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              armor: [{ name: "Lightning" }, { name: "Deadly Dodge" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "First Strike" },
              ],
              armor: [
                { name: "Fire" },
                { name: "ATB Boost" },
                { name: "Ice", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "aerith" },
                { name: "" },
                { name: "Lightning" },
              ],
              armor: [{ name: "" }],
              summon: [{ name: "" }],
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
        optionText="No deal."
        optionPosition="3rd"
        details="when talking to Sam"
      />
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
          "Cloud: Berserk, Aerith ATB Boost, Soul Drain, Punisher (2 ATB)",
          "Cloud: Soul Drain/TRIPOLOSKI/Punisher",
        ]}
      />
      <Encounter
        enemies="Corneo Lackey 1 x5, Beck, Burke, Butch"
        instructions={[
          "Cloud: Deadly Dodge, Aerith Fira",
          "Cloud: TRIPOLOSKI, Berserk, TRIPOLOSKI",
        ]}
      />
      <Heal description="Cloud 21 MP, Aerith 32 MP, both good HP" />
      <Encounter
        enemies="Cutter, Sweeper"
        instructions={[
          "Cloud: Berserk, Aerith Thundara, Thundara Sweeper",
          "Aerith: 1 ATB, ATB Boost, Thundara Sweeper",
          "Cloud: Counter/Berserk/Punisher (pressure) Cutter",
          "Cloud: Focused Thrust, Thundara, Punisher (stagger) Cutter",
          "Cloud: Aerith Thundara, Punisher (1 ATB), TRIPOLOSKI Cutter",
        ]}
      />
      <Bench />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x3", inputs: ["down", "down"] },
          { name: "Ether", inputs: ["down", "down"] },
          { name: "Phoenix Down", inputs: ["down", "down"] },
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Refocus" },
              ],
              armor: [
                { name: "Lightning" },
                {
                  name: "Ice",
                  source: "barret",
                  inputs: ["left", "down", "down"],
                },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [{ name: "" }, { name: "" }, { name: "" }],
              armor: [{ name: "", source: "cloud" }],
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
            "Cloud: Berserk (stagger), Aerith Blizzard, Aerith Fira, Punisher full, Cross Slash",
            "Aerith: Combo",
          ],
          [
            "Aerith: Soul Drain, 2 ATB, Wait Hellbound",
            "Aerith: Fire/Ice/Thunder/Aero (outside ward), Tempest full, Blizzard (inside ward)",
            "Cloud: Berserk, Aerith Blizzard, Infinity's End",
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
      <Encounter
        enemies="Corneo Lackey x3"
        instructions={["Aerith: ATB Boost, Fira x2"]}
      />
      <Pick item="Fury Ring" />
      <Encounter
        enemies="Corneo Lackey x2"
        instructions={["Aerith: Fira", "Aerith: 0.5 ATB, ATB Boost, Fira"]}
      />
      <Menu instructions={["Equip Barrier before swap"]}>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Fury Ring", inputs: ["right"] },
                { name: "Earrings", source: "aerith", inputs: ["up"] },
                { name: "Power Wristguards", source: "cloud", inputs: ["up"] },
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
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                {
                  name: "Barrier",
                  source: "inventory",
                  inputs: ["right", "down"],
                },
                { name: "Wind" },
                { name: "First Strike" },
              ],
              armor: [{ name: "Fire" }, { name: "ATB Boost" }, { name: "Ice" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
    </Chapter>
  );
}

export default Chapter9;
