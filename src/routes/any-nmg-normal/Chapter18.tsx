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
                { name: "Lightning", source: "barret" },
                { name: "Ice", source: "barret" },
                { name: "Fire", source: "barret" },
                { name: "ATB Stagger", source: "aerith" },
              ],
              armor: [{ name: "Wind" }, { name: "" }, { name: "" }],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "Lightning", source: "tifa" },
                { name: "" },
              ],
              armor: [
                { name: "Binding", source: "cloud" },
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "ATB Stagger" },
                { name: "First Strike", source: "barret" },
                { name: "Refocus" },
                { name: "Parry", source: "tifa" },
              ],
              armor: [
                { name: "" },
                { name: "", source: "tifa" },
                { name: "ATB Boost", source: "aerith" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Ice" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "Magnify", source: "barret" },
                { name: "Time", source: "barret" },
                { name: "First Strike" },
                { name: "Fire", source: "aerith" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Dialogue optionText="Yeah." optionPosition="2nd" details="to enter" />
      <Encounter
        enemies="Whisper Rubrum, Whisper Viridi, Whisper Croceo (both fights)"
        instructions={[
          "Tifa: Keep Unbridled up and combos (finish with Rise up)",
          "Mega-Potions as needed",
        ]}
      />
      <Encounter
        enemies="Whisper Rubrum"
        instructions={[
          "Cloud: Punisher + Counterstance until pressure",
          "Tifa: Combo + Whirl until stagger (should have 2 ATB and Rise)",
          "Tifa: Starshower, Combo x3, Whirl",
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
            "Cloud: Dash, Counterstance",
            "Aerith Firaga",
            "Tifa: Hit until pressure",
            "Tifa: Starshower, Rise, Starshower, Omni, Starshower, Whirl",
          ],
          [
            "Aerith: Haste All",
            "Counterstance/Starshower",
            "Somersault/Cross Slash when available",
            "Stagger: Starshower, Whirl, Divekick",
          ],
          ["Aerith: Thunder"],
        ]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Lightning" },
                { name: "Ice" },
                { name: "Fire" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Wind" },
                { name: "First Strike", source: "tifa" },
                { name: "Refocus", source: "tifa" },
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
                { name: "Parry" },
              ],
              armor: [
                { name: "Magnify", source: "aerith" },
                { name: "Time", source: "aerith" },
                { name: "ATB Boost" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Ice" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "", source: "tifa" },
                { name: "", source: "tifa" },
                { name: "First Strike" },
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
            "Cloud: Berserk, Tifa Whirl, Punisher full",
          ],
          [
            "Tifa Haste All, Cloud/Aerith Magic",
            "Tifa: Cross Slash, ATB Boost, Starshower, Cloud Magic, Starshower, Whirl",
            "Tifa: Aerith Mega-Potion Tifa",
            "Cloud: Counter, Focused Thrust, Counter",
            "Stagger: Braver, Whirl + Divekick until dead",
          ],
          ["Tifa: Braver, Aerith Magic, Whirl, Starshower x2"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter18;
