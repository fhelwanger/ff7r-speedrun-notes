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
                { name: "Fire" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike", source: "aerith" },
                { name: "Refocus", source: "inventory" },
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
      <Encounter enemies="Terpsicolt" instructions={["Cloud Blizzara"]} />
      <Encounter
        enemies="Lesser Drake"
        instructions={["Aerith: Tempest spam, Aero, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Sweeper Prototype"
        instructions={[
          "Aerith: 1 hit, ATB Boost, Arcane Ward, Thundara",
          "Cloud: Punisher x6, Berserk, Thundara, Thunder",
        ]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Pick item="Mega-Potion" optional />
      <Encounter
        enemies="Beck, Burke, Butch"
        instructions={[
          "TRIPOLOSKI, Roll",
          "Punisher + TRIPOLOSKI",
          "Careful with mines",
        ]}
      />
      <Encounter
        enemies="Sweeper Prototype, Bandit x2"
        instructions={[
          "Cloud: Fira Bandit",
          "Aerith: 1 hit, ATB Boost, Arcane Ward, Thundara",
          "Cloud: Punisher x4, Berserk, Thunder",
          "Aerith: Thundara",
        ]}
      />
      <Encounter
        enemies="Bandit x4"
        instructions={["TRIPOLOSKI, Punisher x4, Berserk, TRIPOLOSKI"]}
      />
      <Dialogue
        optionText="She's great at handling the books"
        optionPosition="3rd"
        when="when talking to Sam"
      />
      <Shop name="Weapon Shop" buy={["Hardedge", "Caliginous Bracelet"]} />
      <Pick item="1200 gil" />
      <Dialogue
        optionText="No deal."
        optionPosition="3rd"
        when="when talking to Sam"
      />
      <Pick item="Elixir" />
      <Shop name="Chadley" buy={["Parry"]} />
      <Dialogue
        optionText="Poor Man's"
        optionPosition="3rd"
        when="when talking to Madam M"
      />
      <Dialogue
        optionText="It matters..."
        optionPosition="3rd"
        when="when talking to Aerith"
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
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike", source: "aerith" },
                { name: "Refocus" },
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
              armor: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Ice", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [{ name: "Fire" }, { name: "", source: "aerith" }],
              armor: [
                { name: "Lightning" },
                { name: "Parry", source: "inventory" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Hardedge", upgrade: "Atk+4 x2, M.Atk+4" }],
            },
            {
              name: "Tifa",
              weapons: [{ name: "Sonic Strikers", upgrade: "Auto - Attack" }],
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
          "Aerith: Fira Lackey A",
          "Cloud: Dash, TRIPOLOSKI",
          "Punisher + TRIPOLOSKI",
        ]}
      />
      <Bench />
      <Encounter
        enemies="Cutter, Sweeper"
        instructions={[
          "Sweeper: Aerith Thundara",
          "Sweeper: Punisher + Focused Thrust until stagger",
          "Punisher + Berserk + Thundaras",
        ]}
      />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether", "Phoenix Down"]}
      />
      <Bench />
      <Boss
        name="Hell House"
        phases={[
          [
            "Cloud: Dash, Cleave",
            "Aerith: ATB Boost, Arcane Ward, Cloud Blizzard, Blizzard",
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
            "Cloud: 3 ATB, Fira",
            "Aerith: Fira, Infinity End",
          ],
        ]}
      />
      <Dialogue
        optionText="No"
        optionPosition="2nd"
        when="after dance practice"
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
              name: "Aerith",
              equipments: [{ name: "Fury Ring" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Corneo Lackey x2"
        instructions={["Aerith: ATB Boost, Fira, Fira"]}
      />
    </Chapter>
  );
}

export default Chapter9;
