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

function Chapter9() {
  return (
    <Chapter number={9}>
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "barret" },
                { name: "First Strike", source: "aerith" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "ATB Boost", source: "aerith" },
                { name: "Deadly Dodge" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Refocus", source: "cloud" },
                { name: "First Strike", source: "cloud" },
                { name: "Fire" },
              ],
              armor: [{ name: "Lightning" }, { name: "Wind", source: "cloud" }],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "" },
                { name: "Ice", source: "aerith" },
                { name: "" },
              ],
              armor: [{ name: "" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Tifa",
              weapons: [
                { name: "Sonic Strikers", upgrade: "Auto - Attack" },
                { name: "Metal Knuckles", upgrade: "Manual" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Terpsicolt"
        instructions={["Aerith Thundara, Punisher, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Lesser Drake"
        instructions={["Aerith: Tempest spam (stagger), Aero, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Sweeper Prototype"
        instructions={[
          "Cloud: Punisher full, Berserk, Arcane Ward, 2 ATB",
          "Cloud: Thundara, ATB Boost, Thundara, TRIPOLOSKI",
        ]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Pick item="Mega-Potion" optional />
      <Encounter
        enemies="Beck, Burke, Butch"
        instructions={["Aerith Fira Butch, Deadly Dodge, TRIPOLOSKI, Punisher"]}
      />
      <Encounter
        enemies="Sweeper Prototype, Bandit x2"
        instructions={[
          "Cloud: Punisher full, Berserk, Arcane Ward Bandit A",
          "Cloud: TRIPOLOSKI, Punisher Bandits, ATB Boost, Thundara",
          "Aerith: 1 ATB, Fire, Cloud Thundara",
        ]}
      />
      <Encounter
        enemies="Bandit x4"
        instructions={["Aerith Fira, Dash, TRIPOLOSKI"]}
      />
      <Dialogue
        optionText="She's great at handling the books"
        optionPosition="3rd"
        details="when talking to Sam"
      />
      <Shop
        name="Weapon Shop"
        sell={["Mesmeric Armlet", "Revival", "Ice", "Barrier", "Prayer"]}
        buy={["Hardedge", "Caliginous Bracelet"]}
      />
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
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Hardedge" }],
            },
            {
              name: "Tifa",
              equipments: [
                { name: "Sonic Strikers" },
                { name: "Caliginous Bracelet" },
                { name: "Mythril Armlet", source: "aerith" },
              ],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Hardedge", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "circle", ability: "Fira" }],
            },
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "circle", ability: "Focused Strike" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Beastmaster, Bloodhound x2"
        instructions={[
          "Cloud: Berserk, Punisher x6 Beastmaster",
          "Cloud: TRIPOLOSKI, ATB Boost, TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Corneo Lackey 1 x5, Beck, Burke, Butch"
        instructions={[
          "Deadly Dodge, Aerith Fira",
          "TRIPOLOSKI, ATB Boost, TRIPOLOSKI",
        ]}
      />
      <Bench />
      <Encounter
        enemies="Cutter, Sweeper"
        instructions={[
          "Cloud: Berserk, Thundara, Aerith Thundara Sweeper",
          "Aerith: 1 ATB, Thundara Sweeper",
          "Cloud: Counter or Punisher full, Berserk, TRIPOLOSKI, ATB BOOST, Focused Thrust x2 Cutter",
          "Aerith: 1 ATB, Thundara Cutter",
          "Cloud: Punisher/Thundara",
        ]}
      />
      <Bench />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether", "Phoenix Down"]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Refocus", source: "aerith" },
                { name: "Ice", source: "barret" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "ATB Boost", source: "cloud" },
                { name: "First Strike" },
                { name: "Fire" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Ice", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "" },
                { name: "", source: "cloud" },
                { name: "" },
              ],
              armor: [{ name: "" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "aerith" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Hell House"
        phases={[
          [
            "Cloud: Aerith ATB Boost, Arcane Ward, Berserk, Aerith Blizzard, Blizzara",
            "Cloud: 1 ATB, TRIPOLOSKI, Berserk, Punisher",
          ],
          [
            "Cloud: Counter x2, Punisher x2, Focused Thrust",
            "Aerith: 3 hits, Fira",
            "Cloud: Punisher x6, Focused Thrust, Punisher full, Berserk",
            "Aerith: Combo x5, Charge Tempest",
            "House jumps: Tempest, Cloud/Aerith Fira x2",
            "Cloud: Berserk, Punisher full, Soul Drain, Infinity End",
          ],
          [
            'Cloud: Dash, Punisher, wait until "Two", Refocus',
            "Aerith: Combo x5",
            "Hellbound: Aerith Fire/Ice/Thunder/Aero, wait pressure, Fira",
            "Cloud: Berserk, Focused Thrust, Infinity End",
          ],
        ]}
      />
      <Shop name="Chadley" buy={["Parry", "Reset Hardedge"]} />
      <Pick item="Elixir" />
      <Dialogue
        optionText="No"
        optionPosition="2nd"
        details="after dance practice"
      />
      <Break time="2m30s" description="Dance" />
      <Pick item="Turbo Ether" />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether", "Phoenix Down"]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Aerith",
              weapon: [
                { name: "Deadly Dodge", source: "inventory" },
                { name: "First Strike" },
                { name: "Fire" },
              ],
              armor: [{ name: "Lightning" }, { name: "Wind" }, { name: "Ice" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Corneo Lackey x3"
        instructions={["Aerith: Deadly Dodge, Fira"]}
      />
      <Pick item="Fury Ring" />
      <Encounter
        enemies="Corneo Lackey x2"
        instructions={["Aerith: Deadly Dodge, Fira"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Aerith",
              equipments: [{ name: "Fury Ring" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "Parry", source: "inventory" }],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "ATB Boost", source: "inventory" },
                { name: "First Strike" },
                { name: "Fire" },
              ],
              armor: [{ name: "Lightning" }, { name: "Wind" }, { name: "Ice" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
    </Chapter>
  );
}

export default Chapter9;
