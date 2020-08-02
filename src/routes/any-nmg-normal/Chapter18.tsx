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
          "Titanium Bangle",
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
                { name: "Wind" },
                { name: "Ice", source: "barret" },
                { name: "Fire", source: "barret" },
              ],
              armor: [
                { name: "" },
                { name: "ATB Stagger", source: "aerith" },
                { name: "" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "cloud" },
                { name: "Lightning", source: "tifa" },
                { name: "Binding", source: "cloud" },
                { name: "", source: "tifa" },
              ],
              armor: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "" },
                { name: "" },
                { name: "First Strike", source: "barret" },
                { name: "Refocus", source: "cloud" },
                { name: "ATB Assist", source: "barret" },
              ],
              armor: [
                { name: "ATB Boost", source: "aerith" },
                { name: "Parry" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Fire" },
                { name: "Ice" },
              ],
              armor: [
                { name: "Magnify", source: "barret" },
                { name: "Time", source: "barret" },
                { name: "Subversion" },
                { name: "First Strike", source: "aerith" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Dialogue optionText="Yeah." optionPosition="2nd" details="to enter" />
      <Encounter
        enemies="Whisper Rubrum, Whisper Viridi, Whisper Croceo"
        instructions={[
          "Cloud: Punisher and Counterstance",
          "Tifa: Unbridled x2",
        ]}
      />
      <Encounter
        enemies="Whisper Rubrum, Whisper Viridi, Whisper Croceo"
        instructions={[
          "Cloud: Counterstance",
          "Tifa: Whirl/Divekick/Starshower when pressured",
        ]}
      />
      <Encounter
        enemies="Whisper Rubrum"
        instructions={[
          "Cloud: Counterstance",
          "Tifa: Combo + Starshower, Save 1 ATB",
        ]}
      />
      <Encounter
        enemies="Whisper Viridi, Whisper Croceo"
        instructions={["Berserk, TRIPOLOSKI", "Save 2 ATB"]}
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
                { name: "Wind" },
                { name: "Ice" },
                { name: "Fire" },
              ],
              armor: [
                { name: "First Strike", source: "tifa" },
                { name: "ATB Stagger" },
                { name: "Refocus", source: "tifa" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Magnify", source: "aerith" },
                { name: "Time", source: "aerith" },
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
                { name: "ATB Assist" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "Parry" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Fire" },
                { name: "Ice" },
              ],
              armor: [
                { name: "", source: "tifa" },
                { name: "", source: "tifa" },
                { name: "Subversion" },
                { name: "First Strike" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Hardedge", upgrade: "Auto - Balanced" }],
            },
            {
              name: "Tifa",
              weapons: [{ name: "Sonic Strikers", upgrade: "Auto - Balanced" }],
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
