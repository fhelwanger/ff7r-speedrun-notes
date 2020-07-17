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
          "Cog Bangle",
          "Force Bracelet",
          "Astral Cuff",
        ]}
        buy={["Mega-Potion x3", "Ether x2", "Elixir", "Rest Mega-Potions"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Platinum Earrings", source: "barret" },
                { name: "Fury Ring", source: "aerith" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", source: "barret" },
                { name: "Lightning", source: "barret" },
                { name: "Wind" },
              ],
              armor: [
                { name: "ATB Stagger" },
                { name: "Ice" },
                { name: "First Strike", source: "barret" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "Wind" },
                { name: "", source: "cloud" },
              ],
              armor: [
                { name: "", source: "tifa" },
                { name: "", source: "cloud" },
                { name: "Binding", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "" },
                { name: "" },
                { name: "Parry" },
                { name: "ATB Assist", source: "barret" },
                { name: "" },
              ],
              armor: [
                { name: "Refocus", source: "aerith" },
                { name: "ATB Stagger" },
                { name: "ATB Boost", source: "aerith" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "Fire", source: "aerith" },
              ],
              armor: [
                { name: "Magnify", source: "barret" },
                { name: "Time", source: "barret" },
                { name: "Lightning" },
                { name: "Ice" },
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
          "Cloud: Counterstance",
          "Tifa: Whirl + Divekick when pressured, Starshower, etc",
        ]}
      />
      <Encounter
        enemies="Whisper Rubrum, Whisper Viridi, Whisper Croceo"
        instructions={[
          "Cloud: Counterstance",
          "Tifa: Whirl + Divekick when pressured, Starshower, etc",
        ]}
      />
      <Encounter
        enemies="Whisper Rubrum"
        instructions={[
          "Cloud: Counterstance",
          "Tifa: 2 ATB, Unbridled, ATB Boost, Unbridled",
          "Tifa: Combo + Starshower, Save 1 ATB",
        ]}
      />
      <Encounter
        enemies="Whisper Viridi, Whisper Croceo"
        instructions={["Punisher, Berserk, TRIPOLOSKI", "Save 2 ATB"]}
      />
      <Encounter
        enemies="Whisper Rubrum, Whisper Viridi, Whisper Croceo"
        instructions={["Cloud: Dash, Counterstance"]}
      />
      <Encounter
        enemies="Whisper Bahamut"
        instructions={[
          "Cloud: Dash, Counterstance",
          "Aerith Firaga",
          "Tifa: Hit until pressure",
          "Tifa: Starshower, Rise, Starshower, Omni, Starshower, Whirl",
        ]}
      />
      <Encounter
        enemies="Whisper Rubrum, Whisper Viridi, Whisper Croceo"
        instructions={[
          "Aerith: Haste All",
          "Cloud: Punisher, Counterstance",
          "Tifa: Starshower",
          "Somersault/Cross Slash when available",
          "Stagger: Starshower, Whirl, Divekick",
        ]}
      />
      <Encounter
        enemies="Whisper Harbinger"
        instructions={["Aerith: Thunder"]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Barret",
              weapon: [
                { name: "" },
                { name: "" },
                { name: "", source: "aerith" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "" }, { name: "Binding" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Magnify", source: "aerith" },
                { name: "Time", source: "aerith" },
                { name: "Parry" },
                { name: "ATB Assist" },
                { name: "" },
              ],
              armor: [
                { name: "Refocus" },
                { name: "ATB Stagger" },
                { name: "ATB Boost" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "Fire" },
              ],
              armor: [
                { name: "", source: "tifa" },
                { name: "Wind", source: "barret" },
                { name: "Lightning" },
                { name: "Ice" },
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
            "Cloud: Berserk, Tifa Whirl, Operator, Punisher full",
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
