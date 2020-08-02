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
      <Encounter
        enemies="Terpsicolt"
        instructions={["Aerith Thundara, Punisher 1 ATB, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Lesser Drake"
        instructions={[
          "Cloud: Arcane Ward, ATB Boost, Aero",
          "Aerith: Tempest spam, Aero",
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "tifa" },
                { name: "Deadly Dodge", source: "barret" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }, { name: "ATB Boost" }],
              summon: [{ name: "Ifrit" }],
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
                { name: "Ice" },
                { name: "Fire" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Wind", source: "cloud" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sweeper Prototype"
        instructions={[
          "Cloud: Arcane Ward, Punisher full, Berserk, 2 ATB",
          "Cloud: Thundara, ATB Boost, Thundara, TRIPOLOSKI",
        ]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Pick item="Mega-Potion" optional />
      <Encounter
        enemies="Beck, Burke, Butch"
        instructions={["Cloud: Deadly Dodge, Aerith Fira", "TRIPOLOSKI/Fire"]}
      />
      <Encounter
        enemies="Sweeper Prototype, Bandit x2"
        instructions={[
          "Cloud: Punisher + TRIPOLOSKI Bandits",
          "Cloud: 1 ATB, ATB Boost, Arcane Ward, Thundara, Thundara Sweeper",
        ]}
      />
      <Encounter
        enemies="Bandit x4"
        instructions={["Aerith Aero, Punisher, TRIPOLOSKI"]}
      />
      <Dialogue
        optionText="She's great at handling the books"
        optionPosition="3rd"
        details="when talking to Sam"
      />
      <Shop name="Weapon Shop" buy={["Hardedge", "Caliginous Bracelet"]} />
      <Pick item="1200 gil" />
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
                { name: "Earrings", source: "cloud" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike" },
                { name: "Refocus" },
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
              name: "Tifa",
              weapon: [
                { name: "", source: "aerith" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "" },
              ],
              armor: [{ name: "Wind" }, { name: "" }],
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
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "circle", ability: "Fira" }],
            },
            {
              name: "Aerith",
              shortcuts: [{ shortcut: "circle", ability: "Fira" }],
            },
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "x", ability: "Focused Strike" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Beastmaster, Bloodhound x2"
        instructions={["Berserk, TRIPOLOSKI", "Punisher + TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Corneo Lackey 1 x5, Beck, Burke, Butch"
        instructions={[
          "Deadly Dodge, Aerith Fira",
          "Punisher + TRIPOLOSKI, Fira",
        ]}
      />
      <Bench />
      <Encounter
        enemies="Cutter, Sweeper"
        instructions={[
          "Sweeper: Aerith Thundara",
          "Sweeper: Punisher + Focused Thrust until stagger",
          "Punisher + Berserk + Thundaras (ATB Boost)",
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether", "Phoenix Down"]}
      />
      <Bench />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Ice", source: "inventory" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus", source: "aerith" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike" },
                { name: "ATB Boost", source: "cloud" },
                { name: "Fire" },
              ],
              armor: [{ name: "Lightning" }, { name: "Wind" }, { name: "Ice" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Hell House"
        phases={[
          [
            "Cloud: Dash",
            "Aerith: Arcane Ward, Cloud Blizzard, Hits until Barrier Shift, Magic",
            "Cloud: Punisher full, Berserk, TRIPOLOSKI, Punisher",
          ],
          [
            "Cloud: Counter x2, Punisher x2, Focused Thrust",
            "Aerith: 3 hits, Fira",
            "Cloud: Punisher x6, Focused Thrust, Punisher full, Berserk",
            "Aerith: 2 ATB, Charge Tempest",
            "House jumps: Tempest, 2x Fira with each",
            "Cloud: Berserk, Punisher full, Berserk, Infinity End",
          ],
          [
            "Coud: Hits for ATB, Refocus",
            "Aerith: Magic",
            "Cloud: Berserk, 3 ATB, Fira",
            "Aerith: Fira, Infinity End",
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
      <Encounter
        enemies="Corneo Lackey x3"
        instructions={[
          "Aerith: ATB Boost, Fira, Fira",
          "Tifa: Whirl + Divekick",
        ]}
      />
      <Pick item="Fury Ring" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [{ name: "Power Wristguards", source: "cloud" }],
            },
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
              armor: [{ name: "Wind" }, { name: "Parry", source: "inventory" }],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [{ name: "First Strike" }, { name: "Refocus" }],
              summon: [{ name: "", source: "tifa" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Corneo Lackey x2"
        instructions={["Aerith: Fira, 1 ATB, Fira"]}
      />
    </Chapter>
  );
}

export default Chapter9;
