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
        instructions={["TRIPOLOSKI, ATB Boost, TRIPOLOSKI"]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "Binding", source: "barret" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "Refocus" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "ATB Assist" },
                { name: "Subversion" },
              ],
              armor: [
                { name: "Time" },
                { name: "Magnify", source: "cloud" },
                { name: "First Strike" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "circle", ability: "Thundaga" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["TRIPOLOSKI, ATB Boost, TRIPOLOSKI"]}
      />
      <Encounter
        enemies="Monodrive x2, Mark II Monodrive x2"
        instructions={[
          "Barret: Overcharge, Haste All",
          "Cloud: Punisher + TRIPOLOSKI, Aero when shield up",
          "Counter when inside ground",
        ]}
      />
      <Encounter enemies="Unknown Entity x2" instructions={["TRIPOLOSKI"]} />
      <Encounter
        enemies="M.O.T.H Unit"
        instructions={[
          "Cloud: Counter, Thundaga, ATB Boost",
          "Cloud Thundaga/Barret Thundara",
        ]}
      />
      <Pick item="Twin Stinger" />
      <Bench
        optional
        description="Heal Cloud/Barret fully or bench with Tifa later"
      />
      <Pick item="3000 gil" optional />
      <Encounter
        enemies="Blast-Ray, Shock-Ray x2"
        instructions={[
          "Cloud: Thundaga Blast-Ray",
          "Barret: Overcharge, Combo Shock-Ray A",
          "Barret: Thundara Shock-Ray B, Thundara Blast-Ray",
          "Cloud: ATB Boost, Thundaga, Thundara",
        ]}
      />
      <Dialogue details="Pull lever number 3" />
      <Pick item="Time" optional description="Sells for 2500 gil" />
      <Shop
        name="Vending Machine"
        sell={[
          "Caliginous Bracelet",
          "Power Wristguards",
          "Earrings",
          "Talisman",
        ]}
        buy={["Mega-Potion x3", "Ether x2", "Supreme Bracer"]}
      />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Aerith",
              weapons: [{ name: "Reinforced Staff", upgrade: "Auto - Attack" }],
            },
            {
              name: "Cloud",
              weapons: [{ name: "Twin Stinger", upgrade: "Auto - Attack" }],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Aerith",
              equipments: [
                { name: "Reinforced Staff" },
                { name: "Supreme Bracer" },
                { name: "Titanium Bangle", source: "tifa" },
                { name: "Heavy-Duty Bracer", source: "cloud" },
                { name: "Fury Ring", source: "cloud" },
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
                { name: "Refocus", source: "inventory" },
                { name: "Lightning" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "First Strike", source: "barret" },
                { name: "Parry" },
                { name: "" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "Magnify", source: "barret" },
                { name: "Lightning", source: "cloud" },
                { name: "ATB Boost", source: "cloud" },
              ],
              armor: [
                { name: "First Strike", source: "cloud" },
                { name: "ATB Stagger", source: "cloud" },
                { name: "Subversion", source: "barret" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "Wind", source: "aerith" },
                { name: "Binding" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
              ],
              armor: [
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Wind" },
                { name: "Ice", source: "tifa" },
                { name: "", source: "aerith" },
              ],
              armor: [
                { name: "Time" },
                { name: "", source: "aerith" },
                { name: "Fire", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [{ shortcut: "circle", ability: "Overpower" }],
            },
            {
              name: "Aerith",
              leader: true,
              shortcuts: [
                { shortcut: "square", ability: "Thundara" },
                { shortcut: "circle", ability: "Firaga All" },
                { shortcut: "x", ability: "ATB Ward" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Unknown Entity x3"
        instructions={["Firaga All, Starshower"]}
      />
      <Pick item="Mega-Potion" optional />
      <Encounter
        enemies="Bloodhound x6"
        instructions={[
          "Aerith: 2 ATB, ATB Ward, ATB Boost",
          "Tifa: Starshower/Whirl/Divekick",
        ]}
      />
      <Pick item="5000 gil" />
      <Encounter
        enemies="Zenene"
        instructions={[
          "Aerith: 2 ATB, ATB Ward, ATB Boost, Thundara",
          "Tifa: Starshower/Whirl/Divekick",
        ]}
      />
      <Encounter
        enemies="Zenene x2"
        instructions={[
          "Aerith: 2 ATB, ATB Ward, ATB Boost, Firaga All",
          "Tifa: Starshower/Whirl/Divekick",
        ]}
      />
      <Encounter
        enemies="Sentry Launcher x3"
        instructions={[
          "Aerith: Thundara A, ATB Boost, Thundara C, Thundara B",
          "Tifa: Whirl + Thundaras",
        ]}
      />
      <Dialogue details="Pull lever number 2" />
      <Pick item="Mega-Potion" optional />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Supreme Bracer"]}
      />
      <Bench />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Twin Stinger" },
                { name: "Supreme Bracer" },
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
                { name: "Wind" },
                { name: "Binding" },
                { name: "Lightning", source: "aerith" },
                { name: "ATB Boost", source: "aerith" },
                { name: "" },
              ],
              armor: [
                { name: "First Strike", source: "aerith" },
                { name: "ATB Stagger", source: "aerith" },
                { name: "Refocus", source: "tifa" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "Magnify", source: "aerith" },
                { name: "ATB Assist", source: "tifa" },
                { name: "ATB Stagger", source: "tifa" },
              ],
              armor: [
                { name: "Time" },
                { name: "Subversion", source: "aerith" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice", source: "barret" },
                { name: "", source: "cloud" },
                { name: "Lightning" },
                { name: "", source: "barret" },
              ],
              armor: [
                { name: "Fire", source: "barret" },
                { name: "Parry" },
                { name: "" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Fire" },
                { name: "Wind", source: "barret" },
                { name: "", source: "cloud" },
                { name: "", source: "cloud" },
              ],
              armor: [
                { name: "", source: "cloud" },
                { name: "", source: "barret" },
                { name: "", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Counterstance" }],
            },
            {
              name: "Barret",
              shortcuts: [{ shortcut: "square", ability: "Thundara All" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Zenene x2"
        instructions={["Barret Haste Cloud", "Learn Counterstance"]}
      />
      <Menu instructions={["Ignore if still needs to learn Counterstance"]}>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [{ name: "Mythril Saber" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="M.O.T.H Unit, Shock-Ray x3"
        instructions={[
          "Cloud: Thundaga",
          "Barret: Overcharge, Thundara All x2",
          "Cloud: ATB Boost, Thundaga, Thundaga",
        ]}
      />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Hardedge", upgrade: "Auto - Attack" }],
            },
            {
              name: "Tifa",
              weapons: [{ name: "Metal Knuckles", upgrade: "Auto - Attack" }],
            },
          ]}
        />
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
                { name: "Lightning" },
                { name: "Subversion", source: "barret" },
                { name: "ATB Assist" },
                { name: "ATB Stagger" },
              ],
              armor: [
                { name: "Time" },
                { name: "Magnify", source: "barret" },
                { name: "First Strike" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sledgeworm x3"
        instructions={[
          "Barret: Haste All, Overcharge, Combo, Steelskin, Lifesaver",
          "Cloud: TRIPOLOSKI/Counterstance, Focused Thrust during Torpid",
        ]}
      />
      <Pick item="Chain Bangle" />
      <Boss
        name="Brain Pod"
        phases={[
          [
            "Barret: Overcharge",
            "Cloud: Punisher full, Berserk, Punisher full",
          ],
          ["Barret: Haste All, Thundaga", "Cloud: Berserk, TRIPOLOSKI"],
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
              equipments: [
                { name: "Mythril Rod" },
                { name: "Chain Bangle" },
                { name: "Fury Ring" },
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
                { name: "Refocus", source: "cloud" },
                { name: "Lightning" },
                { name: "" },
                { name: "" },
              ],
              armor: [
                { name: "First Strike", source: "barret" },
                { name: "Parry" },
                { name: "ATB Stagger", source: "barret" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Fire" },
                { name: "Magnify", source: "barret" },
                { name: "Lightning", source: "cloud" },
                { name: "Ice", source: "inventory" },
              ],
              armor: [
                { name: "First Strike", source: "cloud" },
                { name: "ATB Stagger", source: "cloud" },
                { name: "Subversion", source: "barret" },
                { name: "ATB Boost", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "Wind" },
                { name: "Binding" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
              ],
              armor: [
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "", source: "aerith" },
                { name: "Ice", source: "tifa" },
                { name: "", source: "tifa" },
              ],
              armor: [
                { name: "Time" },
                { name: "Wind", source: "aerith" },
                { name: "Fire", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sledgeworm x2"
        instructions={[
          "Aerith: Arcane Ward, ATB Boost, Thundara",
          "Tifa: Thundara",
        ]}
      />
      <Encounter
        enemies="Enhanced Shock Trooper x2"
        instructions={["Aerith: Firaga All", "Tifa: Whirl/Divekick/Overpower"]}
      />
      <Encounter
        enemies="Unknown Entity x5"
        instructions={["Aerith: Firaga All", "Tifa: Whirl/Divekick/Overpower"]}
      />
      <Pick item="Ether" optional />
      <Menu>
        <Materia
          characters={[
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning", source: "aerith" },
                { name: "Magnify" },
                { name: "Fire", source: "aerith" },
                { name: "Ice", source: "barret" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "Subversion" },
                { name: "ATB Boost" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "" },
                { name: "Ice", source: "aerith" },
                { name: "" },
              ],
              armor: [{ name: "Time" }, { name: "Wind" }, { name: "Fire" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [
                { shortcut: "square", ability: "Unbridled Strength" },
              ],
            },
            {
              name: "Aerith",
              shortcuts: [
                { shortcut: "square", ability: "Thundara All" },
                { shortcut: "circle", ability: "Thundaga" },
              ],
            },
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "circle", ability: "Haste All" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Shock-Ray x2, Slug-Ray x2"
        instructions={["Thundara All"]}
      />
      <Dialogue details="Ether Tifa/Aerith, pull lever number 4" />
      <Pick item="Mega-Potion x2" optional />
      <Menu instructions={["Give Fist Strike to Cloud/Barret"]} />
      <Boss
        name="Swordipede"
        phases={[
          ["Orb of Gravity x2"],
          [
            "Give First Strike to Tifa/Aerith",
            "Aerith: 2 ATB, Arcane Ward, ATB Boost, Thundaga x2",
            "Tifa: Starshower, Divekick",
          ],
        ]}
      />
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
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
                { name: "Magnify", source: "aerith" },
                { name: "Time", source: "barret" },
                { name: "Binding", source: "cloud" },
                { name: "" },
              ],
              armor: [
                { name: "First Strike", source: "tifa" },
                { name: "" },
                { name: "" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "Refocus" },
                { name: "Lightning" },
                { name: "" },
                { name: "" },
              ],
              armor: [
                { name: "", source: "cloud" },
                { name: "Parry" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning" },
                { name: "Wind", source: "cloud" },
                { name: "Fire" },
                { name: "Ice" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "Subversion" },
                { name: "ATB Boost" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "" },
                { name: "Ice" },
                { name: "" },
              ],
              armor: [
                { name: "", source: "cloud" },
                { name: "Wind" },
                { name: "Fire" },
              ],
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
            "Tifa: Whirl, Whirl, Hit, Defend",
            "Tifa: Starshower x2, Whirl, Combo x6, Starshower x2, Whirl",
            "Cloud: Counterstance Vengeance, Punisher",
          ],
          [
            "Aerith uses Mega-Potions as needed",
            "Tifa: Hit + Whirl tentacles until 2 ATB, Unbridled x2",
            "Overpower/TRIPOLOSKI tentacles, keep Haste up",
            "Pressure: Tifa Hit + Defend Rejection, Focused Thrust, Focused Strike",
            "Stagger: Starshower x2",
          ],
          [
            "Cloud: Sleep",
            "Tifa: Starshower, Somersault, Starshower to avoid Rejection",
            "Tifa: Rise, Omni, Whirl",
          ],
        ]}
      />
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
                { name: "Wind", source: "barret" },
                { name: "Binding" },
                { name: "" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus", source: "tifa" },
                { name: "" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "" },
                { name: "Ice" },
                { name: "ATB Assist", source: "tifa" },
              ],
              armor: [
                { name: "Magnify", source: "cloud" },
                { name: "Time", source: "cloud" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "barret" },
                { name: "", source: "cloud" },
                { name: "Lightning" },
                { name: "" },
                { name: "" },
              ],
              armor: [{ name: "" }, { name: "Parry" }, { name: "ATB Stagger" }],
              summon: [{ name: "", source: "cloud" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "circle", ability: "Braver" }],
            },
            {
              name: "Aerith",
              shortcuts: [
                { shortcut: "x", ability: "Soul Drain" },
                { shortcut: "square", ability: "Firaga" },
              ],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Rufus, Darkstar"
        phases={[
          [
            "Darkstar: TRIPOLOSKI, Punisher full + Berserk, TRIPOLOSKI, Punisher Full",
          ],
          ["Darkstar: TRIPOLOSKI, Punisher full + Berserk, Punisher"],
          ["Sleep, Braver, Punisher full, TRIPOLOSKI"],
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Aerith",
              equipments: [{ name: "Fury Ring", source: "cloud" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "First Strike", source: "cloud" },
                { name: "Ice" },
                { name: "ATB Assist" },
              ],
              armor: [{ name: "Magnify" }, { name: "Time" }, { name: "Fire" }],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "" },
                { name: "Wind" },
                { name: "Binding" },
                { name: "" },
              ],
              armor: [
                { name: "", source: "barret" },
                { name: "Refocus" },
                { name: "" },
              ],
              summon: [{ name: "Ifrit" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Arsenal"
        phases={[
          [
            "Barret: Haste All, Arcane Ward Barret, Overcharge Drone C",
            "Aerith: Thunder Cannon, Soul Drain Drones when staggered",
          ],
          [
            "Barret Haste All",
            "Aerith: Go to Arcane Ward, Thundaga, Overcharge, ATB Boost, Thundaga",
            "Aerith: Combo x4, Firaga, Barret Turbo Ether, Combo x4, Fire, Combo",
          ],
          [
            "Aerith: Go to Arcane Ward, Thundaga (Thundara Cannon if possible)",
            "Barret: 2 ATB, Focused Shot",
            "Aerith: 2 ATB, Firaga",
            "Barret: Overcharge, Focused Shot, Aerith Fira, Turbo Ether Aerith",
            "Stagger: Thundara, Thundara",
          ],
          ["Aerith: 2 ATB, Thundaga x2"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter17;
