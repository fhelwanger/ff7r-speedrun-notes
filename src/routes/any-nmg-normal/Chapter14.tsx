import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
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

function Chapter14() {
  return (
    <Chapter number={14}>
      <Pick item="Adrenaline" description="Inn" />
      <Shop name="Chadley" buy={["ATB Assist"]} />
      <Shop
        name="Weapon Shop"
        sell={["Iron Bangle x2", "Mythril Armlet", "Earrings", "Subversion"]}
        buy={["Mythril Saber", "Heavy-Duty Bracer"]}
      />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [
                { name: "Mythril Saber", upgrade: "MP+10, Auto - Attack" },
              ],
            },
            {
              name: "Barret",
              weapons: [
                { name: "Light Machine Gun", upgrade: "Auto - Attack" },
              ],
            },
            {
              name: "Tifa",
              weapons: [
                { name: "Metal Knuckles", upgrade: "Auto - Attack, Manual" },
                { name: "Mythril Claws", upgrade: "Auto - Attack" },
              ],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Mythril Saber" },
                { name: "Caliginous Bracelet", source: "barret" },
                { name: "Heavy-Duty Bracer" },
                { name: "Fury Ring", source: "barret" },
              ],
            },
            {
              name: "Barret",
              equipments: [{ name: "Light Machine Gun" }],
            },
            {
              name: "Tifa",
              equipments: [{ name: "Metal Knuckles" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Magnify", source: "barret" },
                { name: "Lightning", source: "barret" },
                { name: "ATB Boost", source: "barret" },
              ],
              armor: [
                { name: "First Strike", source: "barret" },
                { name: "Refocus", source: "barret" },
                { name: "ATB Assist", source: "inventory" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind", source: "cloud" },
                { name: "Binding", source: "cloud" },
                { name: "Lightning", source: "cloud" },
                { name: "Fire", source: "inventory" },
              ],
              armor: [{ name: "Ice" }, { name: "", source: "cloud" }],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Parry" },
              ],
              armor: [{ name: "Lightning" }, { name: "Ice" }, { name: "" }],
              summon: [{ name: "Ifrit", source: "barret" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { shortcut: "square", ability: "Fira" },
                { shortcut: "circle", ability: "Fira All" },
              ],
            },
            {
              name: "Barret",
              shortcuts: [{ shortcut: "circle", ability: "Fira" }],
            },
            {
              name: "Tifa",
              shortcuts: [
                { shortcut: "square", ability: "Unbridled Strength" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sahagin"
        instructions={["Cloud: ATB Boost, Fira, Fira, Starshower"]}
      />
      <Encounter
        enemies="Blugu x2, Scissorclaw x2"
        instructions={["Cloud: Fira All, Tifa Fire Scissor, Punisher Blugus"]}
      />
      <Pick item="Ether" />
      <Encounter
        enemies="Blugu, Wererat x3"
        instructions={["Dash, TRIPOLOSKI"]}
      />
      <Encounter enemies="Scissorclaw x3" instructions={["Cloud: Fira all"]} />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Phoenix Down x2"]}
      />
      <Encounter enemies="Wererat x4" instructions={["TRIPOLOSKI"]} />
      <Pick
        item="Hazardous Material x2"
        description="Ignore if already dropped"
      />
      <Encounter
        enemies="Sahagin x3"
        instructions={[
          "Cloud: ATB Boost, Fira All, Fira All",
          "Cross Slash, Starshower",
        ]}
      />
      <Encounter
        enemies="Abzu Shoat"
        instructions={["Cloud: Fira, Starshower"]}
      />
      <Encounter
        enemies="Abzu Shoat x2, Blugu"
        instructions={[
          "Cloud: ATB Boost, Fira All, Starshower Shoat, Fira All",
          "Punisher, TRIPOLOSKI",
          "Careful with headbutt",
        ]}
      />
      <Encounter
        enemies="Sahagin, Abzu Shoat x2"
        instructions={[
          "Cloud: ATB Boost, Fira All, Starshower Sahagin, Fira All",
          "Punisher, TRIPOLOSKI",
          "Careful with headbutt",
        ]}
      />
      <Encounter
        enemies="Blugu x2, Scissorclaw, Sahagin"
        instructions={["ATB Boost, Fira All, Starshower Sahagin, Fira All"]}
      />
      <Pick item="Ether" />
      <Pick item="Protective Boots" />
      <Encounter
        enemies="Mischievous Shoat, Abzu Shoat x3"
        instructions={[
          "Cloud: Punisher until 2 ATB",
          "Barret: Overcharge",
          "Tifa: Combo + Parry, Unbridled x2",
          "When Abzu’s appear: Cloud Fira All, Barret Fira, ATB Boost, Fira All, Fira All",
          "Mischievous stagger: Rise, Omni, Starshower, Barret Fira, Divekick",
        ]}
      />
      <Bench optional description="Cloud needs 10 MP, Barret needs 15" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Power Wristguards", source: "tifa" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Magnify" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Ice", source: "tifa" },
                { name: "", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "Binding" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [
                { name: "Ice" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "", source: "barret" },
                { name: "Parry" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Refocus", source: "cloud" },
                { name: "ATB Assist", source: "cloud" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Abzu"
        phases={[
          [
            "Tifa: Lock Abzu, Lifesaver, 2 ATB",
            "Tifa: Starshower, Overcharge, Starshower, Focused Shot",
            "Tifa: Combo + Parry, Focused Strike x2, Unbridled",
          ],
          [
            "Tifa: Barret Fira, Hit to stagger",
            "Tifa: Starshower, Cloud Fira, Omni, Whirl",
          ],
          [
            "Cloud ATB Boost, Cloud Mega-Potion Barret",
            "Tifa: 2 ATB, Starshower, Overcharge, Starshower",
            "Enrage: Barret Sleep Abzu, Mega-Potion Tifa",
            "Tifa: 1 ATB, Starshower, Somersault",
          ],
        ]}
      />
      <Dialogue optionText="Yes" optionPosition="2nd" details="to climb" />
    </Chapter>
  );
}

export default Chapter14;
