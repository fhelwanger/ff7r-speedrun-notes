import React from "react";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Shop from "../../components/Shop";
import UpgradeWeapons from "../../components/UpgradeWeapons";

function Chapter18() {
  return (
    <Chapter number={18}>
      <Shop
        name="Vending Machine"
        sell={[
          "Heavy-Duty Bracer",
          "Force Bracelet",
          "Astral Cuff",
          "Protective Boots",
        ]}
        buy={["Mega-Potion x3", "Elixir", "Rest Mega-Potions"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [{ name: "Fury Ring", source: "aerith" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Ice", source: "barret" },
                { name: "Fire", source: "barret" },
                { name: "Lightning", source: "barret" },
                { name: "" },
              ],
              armor: [
                { name: "" },
                { name: "" },
                { name: "ATB Stagger", source: "aerith" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
                { name: "Binding", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "ATB Stagger" },
                { name: "First Strike", source: "barret" },
                { name: "Refocus", source: "aerith" },
                { name: "ATB Boost", source: "aerith" },
              ],
              armor: [
                { name: "" },
                { name: "", source: "tifa" },
                { name: "Parry", source: "tifa" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Time", source: "barret" },
                { name: "Magnify", source: "barret" },
                { name: "Lightning" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "Ice", source: "aerith" },
                { name: "First Strike" },
                { name: "Wind", source: "cloud" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Dialogue optionText="Yeah." optionPosition="2nd" details="to enter" />
      <Encounter
        enemies="Whisper Rubrum, Whisper Viridi, Whisper Croceo (both fights)"
        instructions={["Tifa: Unbridled + Omni", "Mega-Potions as needed"]}
      />
      <Encounter
        enemies="Whisper Rubrum"
        instructions={[
          "Cloud: Punisher + Counterstance until pressure",
          "Tifa: 2 ATB, Unbridled x2",
          "Tifa: Combo + Whirl until stagger",
          "Tifa: 2 ATB, Divekick until dead",
          "Tifa: ATB Boost",
        ]}
      />
      <Encounter
        enemies="Whisper Viridi, Whisper Croceo"
        instructions={["Berserk, TRIPOLOSKI/Counterstance", "Save 2 ATB"]}
      />
      <Boss
        name="Whisper Rubrum, Whisper Viridi, Whisper Croceo / Whisper Bahamut / Whisper Harbinger"
        phases={[
          ["Cloud: Dash, Counterstance"],
          [
            "Cloud: Counter, Counterstance",
            "Aerith Firaga",
            "Tifa: Hit until pressure",
            "Tifa: Starshower, Rise, Starshower, Omni, Whirl, Divekick",
          ],
          [
            "Aerith: Haste All",
            "Counterstance/Starshower",
            "Somersault/Cross Slash when available",
            "Stagger: Starshower, Whirl, Divekick",
          ],
          ["Aerith: Thundara"],
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Ice" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "" },
              ],
              armor: [
                { name: "First Strike", source: "tifa" },
                { name: "Refocus", source: "tifa" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "ATB Stagger" },
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "Time", source: "aerith" },
                { name: "Magnify", source: "aerith" },
                { name: "Parry" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "", source: "tifa" },
                { name: "", source: "tifa" },
                { name: "Lightning" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "Ice" },
                { name: "First Strike" },
                { name: "Wind" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Tifa",
              weapons: [{ name: "Leather Gloves", upgrade: "Auto - Balanced" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Sephiroth"
        phases={[
          [
            "Berserk, Lock, Counterstance, Punisher full, Counterstance",
            "Punisher full, Berserk, Operator, TRIPOLOSKI",
          ],
          [
            "Cloud: Punisher x2, TRIPOLOSKI, Roll",
            "Cloud: Dash, Counter, Counterstance",
            "Cloud: Berserk, Operator, Counter x2, Focused Thrust, Mega-Potion Cloud",
            "Tifa: Whirl, Swap",
            "Cloud: Berserk, Tifa Whirl, Punisher full, Berserk",
          ],
          [
            "Tifa Haste All, Cloud Magic, Aerith Magic",
            "Tifa: Cross Slash, ATB Boost, Starshower, Aerith Magic, Starshower, Whirl",
            "Tifa: Combo x3, Whril, Focused Strike",
            "Cloud: Counter, Focused Thrust, Counter",
            "Stagger: Berserk, Braver, Whirl + Divekick until dead",
          ],
          ["Braver, Aerith Magic, Starshower"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter18;
