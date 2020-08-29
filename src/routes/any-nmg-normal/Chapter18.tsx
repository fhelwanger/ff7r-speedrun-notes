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
                { name: "", source: "tifa" },
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
                { name: "Refocus", source: "aerith" },
                { name: "ATB Stagger" },
                { name: "First Strike", source: "barret" },
                { name: "ATB Assist", source: "barret" },
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
                { name: "Barrier" },
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
                { name: "Lightning" },
                { name: "Ice" },
                { name: "Fire" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Wind" },
                { name: "Refocus", source: "tifa" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "cloud" },
                { name: "ATB Stagger" },
                { name: "", source: "cloud" },
                { name: "ATB Assist" },
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
                { name: "Barrier" },
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
