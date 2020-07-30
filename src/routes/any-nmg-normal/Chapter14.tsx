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
      <Shop
        name="Chadley Sector 5"
        buy={["ATB Assist", "Reset Light Machine Gun"]}
      />
      <Pick
        item="Adrenaline"
        description="Wall Market Inn - Ignore if already dropped one"
      />
      <Shop
        name="Weapon Shop"
        sell={["Iron Bangle x2", "Mythril Armlet", "Earrings"]}
        buy={["Mythril Saber", "Platinum Earrings"]}
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
              weapons: [{ name: "Mythril Claws", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Mythril Saber" },
                { name: "Heavy-Duty Bracer", source: "tifa" },
                { name: "Platinum Earrings" },
                { name: "Fury Ring", source: "barret" },
              ],
            },
            {
              name: "Barret",
              equipments: [{ name: "Light Machine Gun" }],
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
                { name: "Subversion", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning", source: "cloud" },
                { name: "Wind", source: "cloud" },
                { name: "Binding", source: "cloud" },
                { name: "", source: "cloud" },
              ],
              armor: [
                { name: "", source: "cloud" },
                { name: "Ice" },
                { name: "Fire" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "ATB Assist", source: "inventory" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [{ name: "First Strike" }, { name: "Parry" }],
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
        instructions={["Cloud: Fira All, Tifa Starshower, Punisher Blugus"]}
      />
      <Pick item="Ether" />
      <Encounter
        enemies="Blugu, Wererat x3"
        instructions={["Dash, TRIPOLOSKI, Divekick"]}
      />
      <Encounter
        enemies="Scissorclaw x3"
        instructions={["Cloud: Fira all, Starshower"]}
      />
      <Encounter enemies="Wererat x4" instructions={["TRIPOLOSKI"]} />
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
          "Careful with headbutt/jump",
        ]}
      />
      <Encounter
        enemies="Blugu x2, Scissorclaw, Sahagin"
        instructions={["ATB Boost, Fira All, Starshower Sahagin, Fira All"]}
      />
      <Pick item="Ether" />
      <Pick item="Protective Boots" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [{ name: "Mythril Claws" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Mischievous Shoat, Abzu Shoat x3"
        instructions={[
          "Cloud: ATB Boost",
          "Barret: Overcharge",
          "Tifa: Focused Thrust, 2 ATB, Unbridled x2, Focused Shot",
          "Tifa: Combo + Parry until he goes to the corner",
          "Tifa: Chi Trap x2, Combo + Parry until stagger",
          "Tifa: Rise, Omni, Everyone Fira",
        ]}
      />
      <Pick
        item="Hazardous Material x2"
        description="Ignore if already dropped"
      />
      <Bench />
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Metal Knuckles" },
                { name: "Heavy Duty Bracer", source: "cloud" },
                { name: "Platinum Earrings", source: "barret" },
                { name: "Fury Ring", source: "cloud" },
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
                { name: "Magnify" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [{ name: "First Strike" }, { name: "", source: "tifa" }],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Binding" },
                { name: "Subversion", source: "inventory" },
              ],
              armor: [
                { name: "First Strike", source: "tifa" },
                { name: "Ice" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "ATB Assist" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [
                { name: "", source: "barret" },
                { name: "Parry" },
                { name: "Refocus", source: "cloud" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "circle", ability: "Focused Strike" }],
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
            "Tifa: Combo, Focused Strike, Combo, Focused Strike, Combo, Unbridled",
          ],
          [
            "Cloud Mega-Potion Barret, Cloud ATB Boost if needed",
            "Tifa: Hit to stagger",
            "Tifa: Starshower, Cloud Fira, Barret Fira, Omni, Whirl, Whirl",
          ],
          [
            "Tifa: Starshower, Overcharge, Starshower",
            "Enrage: Barret Sleep Abzu, Mega-Potion Tifa",
            "Tifa: 1 ATB, Starshower, Cloud Fira All x2, Somersault",
            "Should get at least 2 Shoats, otherwise kill Byabapolis x2 in Chapter 15",
          ],
        ]}
      />
      <Dialogue optionText="Yes" optionPosition="2nd" details="to climb" />
    </Chapter>
  );
}

export default Chapter14;
