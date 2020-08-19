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
      <Shop name="Chadley Sector 5" buy={["ATB Assist"]} />
      <Pick
        item="Adrenaline"
        description="Wall Market Inn - Ignore if already dropped one"
      />
      <Shop
        name="Weapon Shop"
        sell={[
          "Iron Bangle x2",
          "Mythril Armlet",
          "Earrings",
          "Subversion",
          "Deadly Dodge",
        ]}
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
                { name: "Barrier", source: "tifa" },
              ],
              armor: [
                { name: "ATB Boost", source: "barret" },
                { name: "First Strike", source: "barret" },
                { name: "Refocus", source: "barret" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning", source: "cloud" },
                { name: "Binding", source: "cloud" },
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
              ],
              armor: [
                { name: "Wind", source: "cloud" },
                { name: "Ice" },
                { name: "Fire" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist", source: "inventory" },
                { name: "Fire" },
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
              shortcuts: [{ shortcut: "square", ability: "Fira All" }],
            },
            {
              name: "Barret",
              shortcuts: [
                { shortcut: "square", ability: "Sleep" },
                { shortcut: "circle", ability: "Fira" },
              ],
            },
            {
              name: "Tifa",
              shortcuts: [
                { shortcut: "circle", ability: "Fira" },
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
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Binding" },
                { name: "" },
                { name: "" },
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
                { name: "ATB Assist" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              armor: [
                { name: "Wind", source: "barret" },
                { name: "Parry" },
                { name: "Refocus", source: "inventory" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [
                { ability: "Leader" },
                { shortcut: "circle", ability: "Focused Strike" },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Abzu"
        phases={[
          [
            "Tifa: Lock Abzu, Lifesaver, 2 ATB",
            "Tifa: Starshower, Overcharge, Starshower, Focused Thrust, Focused Shot",
            "Tifa: Combo x6, Whirl, Focused Strike, Combo, Whirl",
            "Tifa: Unbridled, Barret Mega-Potion Barret",
          ],
          [
            "Tifa: Hit to stagger",
            "Tifa: Omni, Whirl, Divekick, Cloud Fira, Whirl, Divekick, Whirl",
          ],
          [
            "Tifa: Cloud ATB Boost, 2 ATB, Limit",
            "Tifa: Cloud Barrier Tifa, Starshower, Overcharge, Cloud Fira All, Barret Mega-Potion",
            "Tifa: Starshower, Somersault",
            "Should get at least 3 Shoats, otherwise kill Byabapolis x2 in Chapter 15",
          ],
        ]}
      />
      <Dialogue optionText="Yes" optionPosition="2nd" details="to climb" />
    </Chapter>
  );
}

export default Chapter14;
