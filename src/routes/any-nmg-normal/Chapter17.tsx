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

function Chapter17() {
  return (
    <Chapter number={17}>
      <Pick item="Reinforced Staff" />
      <Pick item="Ether" />
      <Encounter
        enemies="Unknown Entity x4"
        instructions={["TRIPOLOSKI, ATB Boost, TRIPOLOSKI/Punisher"]}
      />
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["TRIPOLOSKI, Punisher/TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Monodrive x2, Mark II Monodrive x2"
        instructions={[
          "Barret: Overcharge, Haste Cloud",
          "Cloud: Punisher/TRIPOLOSKI, Aerora when shield up",
          "Counter when inside ground",
        ]}
      />
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["Punisher + TRIPOLOSKI"]}
      />
      <Encounter
        enemies="M.O.T.H Unit"
        instructions={[
          "Cloud: Counter, Thundaga, ATB Boost",
          "Cloud Thundaga/Barret Thundara",
        ]}
      />
      <Pick item="Twin Stinger" />
      <Pick item="3000 gil" optional />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Lightning", source: "cloud" },
                { name: "Magnify" },
                { name: "Fire", source: "cloud" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Thundara" }],
            },
            {
              name: "Aerith",
              shortcuts: [
                { shortcut: "square", ability: "Thundara" },
                { shortcut: "circle", ability: "Blizzara All" },
                { shortcut: "x", ability: "Thundaga" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Blast-Ray, Shock-Ray x2"
        instructions={[
          "Cloud: Thundaga All",
          "Barret: Overcharge, Thundara x2 Blast-Ray",
          "Barret: Cloud ATB Boost, Cloud Thundara x2",
        ]}
      />
      <Dialogue details="Pull lever number 3" />
      <Pick item="Time" />
      <Shop
        name="Vending Machine"
        sell={[
          "Titanium Bangle",
          "Caliginous Bracelet",
          "Power Wristguards",
          "Earrings",
          "Talisman",
          "Fire",
          "Time",
        ]}
        buy={[
          "Mega-Potion x3",
          "Ether x2",
          "Supreme Bracer",
          "Supernatural Wristguards",
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [{ name: "Supernatural Wristguards" }],
            },
            {
              name: "Aerith",
              equipments: [
                { name: "Fury Ring", source: "cloud" },
                { name: "Supreme Bracer" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist", source: "barret" },
                { name: "ATB Stagger" },
                { name: "Lightning" },
                { name: "", source: "aerith" },
              ],
              armor: [
                { name: "First Strike", source: "barret" },
                { name: "Parry" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Ice", source: "tifa" },
                { name: "Magnify", source: "cloud" },
                { name: "Lightning", source: "cloud" },
                { name: "Subversion", source: "cloud" },
              ],
              armor: [
                { name: "ATB Boost", source: "cloud" },
                { name: "First Strike", source: "cloud" },
                { name: "ATB Stagger", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "Fire" },
                { name: "", source: "aerith" },
              ],
              armor: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Time" },
                { name: "Binding" },
                { name: "Wind" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Ice", source: "tifa" },
                { name: "Fire", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Unknown Entity x3"
        instructions={["Blizzara All, Starshower"]}
      />
      <Encounter
        enemies="Bloodhound x6"
        instructions={[
          "Aerith: Blizzara All/ATB Boost",
          "Tifa: Starshower/Divekick/Overpower",
        ]}
      />
      <Pick item="5000 gil" optional />
      <Encounter
        enemies="Zenene"
        instructions={["Blizzara All, Combo until stagger", "Whirl + Divekick"]}
      />
      <Encounter
        enemies="Zenene x2"
        instructions={[
          "Blizzara All, ATB Boost, Blizzara All, Combo until stagger",
          "Whirl + Divekick",
        ]}
      />
      <Encounter
        enemies="Sentry Launcher x3"
        instructions={[
          "Aerith: Thundara each",
          "Tifa Divekick first and Aerith hit the other two",
        ]}
      />
      <Dialogue details="Pull lever number 2" />
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Twin Stinger" },
                { name: "Supreme Bracer", source: "aerith" },
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
                { name: "" },
                { name: "Lightning", source: "aerith" },
                { name: "Fire" },
                { name: "Refocus", source: "tifa" },
              ],
              armor: [
                { name: "ATB Boost", source: "aerith" },
                { name: "First Strike", source: "aerith" },
                { name: "ATB Stagger", source: "aerith" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Time" },
                { name: "ATB Assist", source: "tifa" },
                { name: "ATB Stagger", source: "tifa" },
                { name: "First Strike", source: "tifa" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Magnify", source: "aerith" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Binding", source: "barret" },
                { name: "Wind", source: "barret" },
                { name: "Lightning" },
                { name: "" },
              ],
              armor: [
                { name: "", source: "barret" },
                { name: "Parry" },
                { name: "", source: "cloud" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Ice" },
                { name: "Ice", source: "barret" },
                { name: "", source: "cloud" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud (CHECK LEVEL 30)",
              weapons: [
                { name: "Twin Stinger", upgrade: "Auto - Attack" },
                { name: "Hardedge", upgrade: "Auto - Attack, Auto - Balanced" },
              ],
            },
            {
              name: "Tifa",
              weapons: [{ name: "Metal Knuckles", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { shortcut: "square", ability: "Thundaga" },
                { shortcut: "circle", ability: "Counterstance" },
              ],
            },
            {
              name: "Barret",
              shortcuts: [
                { shortcut: "circle", ability: "Blizzara All" },
                { shortcut: "square", ability: "Thundara All" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Zenene x2"
        instructions={[
          "Barret Haste Cloud, Counterstance",
          "Punisher/TRIPOLOSKI/ATB Boost",
        ]}
      />
      <Menu
        instructions={[
          "Do upgrades here if level 29 earlier",
          "Equip Mythril Saber if Counterstance learned",
        ]}
      />
      <Encounter
        enemies="M.O.T.H Unit, Shock-Ray x3"
        instructions={[
          "Cloud: Counter + Counterstance until Learned",
          "Barret: Overcharge, Thundara All x2",
          "Cloud: Thundaga/ATB Boost",
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Hardedge" }, { name: "Protective Boots" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Barret",
              weapon: [
                { name: "Time" },
                { name: "ATB Assist" },
                { name: "ATB Stagger" },
                { name: "First Strike" },
              ],
              armor: [
                { name: "Ice", source: "aerith" },
                { name: "Magnify" },
                { name: "Lightning", source: "barret" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Fire", source: "barret" },
                { name: "Ice" },
                { name: "" },
                { name: "Subversion" },
              ],
              armor: [{ name: "" }, { name: "" }, { name: "" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sledgeworm x3"
        instructions={[
          "Barret Thundara, Cloud Dash, Focused Thrust",
          "Punisher/TRIPOLOSKI/Focused Thrust/Counterstance",
        ]}
      />
      <Pick item="Chain Bangle" />
      <Boss
        name="Brain Pod"
        phases={[
          ["Berserk, Overcharge, Punisher full, Operator, Punisher"],
          ["Berserk, TRIPOLOSKI/ATB Boost, Barret Blizzara All"],
        ]}
      />
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["TRIPOLOSKI, ATB Boost, TRIPOLOSKI"]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Aerith",
              equipments: [{ name: "Chain Bangle" }, { name: "Fury Ring" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist", source: "barret" },
                { name: "ATB Stagger", source: "barret" },
                { name: "First Strike", source: "barret" },
                { name: "Refocus", source: "cloud" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "Parry" }, { name: "" }],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Magnify", source: "barret" },
                { name: "Ice" },
                { name: "Lightning", source: "cloud" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "ATB Boost", source: "cloud" },
                { name: "First Strike", source: "cloud" },
                { name: "ATB Stagger", source: "cloud" },
                { name: "Fire", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
              ],
              armor: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Time" },
                { name: "Binding", source: "tifa" },
                { name: "Wind", source: "tifa" },
                { name: "Lightning", source: "tifa" },
              ],
              armor: [
                { name: "Ice" },
                { name: "Fire", source: "aerith" },
                { name: "Lightning" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Aerith",
              shortcuts: [{ ability: "Leader" }],
            },
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Haste All" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sledgeworm x2"
        instructions={[
          "Aerith: Arcane Ward, ATB Boost, Thundaga/ra + Divekick",
        ]}
      />
      <Encounter
        enemies="Enhanced Shock Trooper x2"
        instructions={[
          "Aerith: Blizzara All, ATB Boost, Blizzara All",
          "Tifa: Whirl/Divekick/Overpower",
        ]}
      />
      <Encounter
        enemies="Unknown Entity x5"
        instructions={[
          "Aerith: Blizzara All, ATB Boost, Blizzara All",
          "Tifa: Whirl/Divekick/Overpower",
        ]}
      />
      <Encounter
        enemies="Shock-Ray x2, Slug-Ray x2"
        instructions={["Arcane Ward, ATB Boost, Thundaras"]}
      />
      <Dialogue details="Pull lever number 4 / Aerith needs 57 MP" />
      <Menu>
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "ATB Stagger" },
                { name: "Lightning", source: "barret" },
                { name: "Refocus" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "Parry" }, { name: "" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Magnify" },
                { name: "Ice" },
                { name: "Lightning" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "", source: "cloud" },
                { name: "ATB Stagger" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "" },
                { name: "First Strike", source: "aerith" },
                { name: "" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "" }, { name: "" }],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Time" },
                { name: "Binding" },
                { name: "Wind" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Ice" },
                { name: "Fire" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Swordipede"
        phases={[
          ["Orb of Gravity x2"],
          [
            "Give First Strike to Tifa/Aerith",
            "Aerith: 2 ATB, Arcane Ward, ATB Boost, Thundaga x2",
            "Tifa: Divekick, Whirl, Divekick",
          ],
        ]}
      />
      <Bench optional />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Aerith",
              equipments: [
                { name: "Reinforced Staff" },
                { name: "Supernatural Wristguards", source: "tifa" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Time", source: "barret" },
                { name: "Magnify", source: "aerith" },
                { name: "Binding", source: "barret" },
                { name: "" },
              ],
              armor: [
                { name: "" },
                { name: "" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "ATB Stagger" },
                { name: "", source: "cloud" },
                { name: "Refocus" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "Parry" }, { name: "" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "", source: "cloud" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
                { name: "Wind" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Ice" }, { name: "Fire" }, { name: "Lightning" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Jenova Dreamweaver"
        phases={[
          [
            "Cloud: Dash, Lock Left Tentacle, Haste All",
            "Aerith: Adrenaline Tifa",
            "Tifa: Whirl, Defend, Whirl + Divekick Left Tentacle",
            "Tifa: Combo x6, Whirl, Cloud Hazardous",
            "Tifa: Starshower x2, Whirl, Aerith ATB Ward Tifa",
            "Tifa: Combo x6, Whirl, Starshower",
          ],
          [
            "Tifa: Divekick Left Tentacle, Whirl + Divekick Right Tentacle",
            "Tifa: Whirl, Hit, Defend",
            "Tifa: Starshower, TRIPOLOSKI, Starshower, TRIPOLOSKI",
            "Tifa: Whirl, Starshower, Whirl, Divekick (Defend Vengeance)",
            "Cloud: Counterstance Vengeance, Punisher",
          ],
          [
            "Aerith use Mega-Potions, Cloud keep Haste up",
            "1st and 2nd tentacles: Whirl/Overpower, Unbridled x2",
            "3rd tentacles: TRIPOLOSKI",
            "Pressure: Tifa Hit + Defend Rejection, Focused Thrust, Focused Strike",
            "Stagger: Starshower x2, Combo x6, Whirl",
          ],
          [
            "Cloud: Sleep",
            "Tifa: Starshower, Somersault, Parry Rejection",
            "Tifa: Rise, Starshower, Omni",
          ],
        ]}
      />
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Platinum Earrings" },
                { name: "Fury Ring", source: "tifa" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "", source: "barret" },
                { name: "", source: "barret" },
                { name: "Binding" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "" }, { name: "First Strike" }],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Time", source: "cloud" },
                { name: "Magnify", source: "cloud" },
                { name: "Wind" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Ice" }, { name: "Fire" }, { name: "Lightning" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "ATB Stagger" },
                { name: "" },
                { name: "Refocus" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "Parry" }, { name: "" }],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Braver" }],
            },
            {
              name: "Barret",
              shortcuts: [{ shortcut: "square", ability: "Thundara" }],
            },
            {
              name: "Tifa",
              shortcuts: [
                { shortcut: "square", ability: "Unbridled Strength" },
              ],
            },
            {
              name: "Aerith",
              shortcuts: [
                { shortcut: "triangle", ability: "Soul Drain" },
                { shortcut: "circle", ability: "Fira" },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Rufus, Darkstar"
        phases={[
          [
            "Darkstar: TRIPOLOSKI, Punisher full, Berserk, TRIPOLOSKI, Punisher Full",
          ],
          ["Darkstar: TRIPOLOSKI, Punisher full, Operator, Punisher"],
          ["Sleep, Braver, Punisher full, TRIPOLOSKI"],
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Aerith",
              equipments: [
                { name: "Mythril Rod" },
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
                { name: "Time" },
                { name: "Magnify" },
                { name: "First Strike", source: "cloud" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Ice" }, { name: "Fire" }, { name: "Lightning" }],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Refocus", source: "tifa" },
                { name: "Ice" },
                { name: "Lightning" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "" },
                { name: "" },
                { name: "Binding" },
                { name: "" },
              ],
              armor: [
                { name: "" },
                { name: "" },
                { name: "Wind", source: "barret" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "ATB Stagger" },
                { name: "" },
                { name: "", source: "aerith" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "Parry" }, { name: "" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Arsenal"
        phases={[
          [
            "Barret: Overcharge Drone C",
            "Aerith: Tempest full, Thundara, Tempest full, Thundara, Barret Thundara, Tempest full Drone C",
            "Aerith: Barret Haste Aerith, Thundara Cannon, Combo + Soul Drain Drone B",
            "Aerith: Thundara Cannon, Tempest full Arsenal, Combo + Soul Drain Drone A",
          ],
          [
            "Aerith: Fira, Focused Shot, Tempest full, Thundaga Wheel x2",
            "Aerith: Tempest full, Overcharge, Barret Turbo Ether, Combo",
          ],
          [
            "Aerith: Fira, Focused Shot, ATB Boost, Thundaga Wheel x2",
            "Aerith: Tempest full, Combo, Thundaga",
            "Barret: 1 ATB, Turbo Ether",
            "Aerith: 1 ATB, Fira",
          ],
          ["Aerith: Tempest full, Thundaga, Thundara"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter17;
