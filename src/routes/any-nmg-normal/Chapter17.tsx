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
        instructions={["TRIPOLOSKI, Starshower, ATB Boost, TRIPOLOSKI"]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "ATB Assist", source: "tifa" },
                { name: "Fire" },
                { name: "Lightning" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "First Strike" },
                { name: "Refocus" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Wind" },
                { name: "First Strike", source: "tifa" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [
                { name: "Magnify", source: "cloud" },
                { name: "Time" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice", source: "barret" },
                { name: "Binding", source: "barret" },
                { name: "Parry" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "ATB Stagger" },
                { name: "Fire" },
              ],
              summon: [{ name: "" }],
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
          "Overcharge, Haste All",
          "TRIPOLOSKI, Aero when shield up",
          "Counter when inside ground",
        ]}
      />
      <Encounter enemies="Unknown Entity x2" instructions={["TRIPOLOSKI"]} />
      <Encounter
        enemies="M.O.T.H Unit"
        instructions={[
          "Cloud Thundaga, Barret Thundara",
          "Can counter when spinning",
        ]}
      />
      <Pick item="Twin Stinger" />
      <Bench
        optional
        description="Heal Cloud/Barret fully or bench with Tifa later"
      />
      <Pick item="3000 gil" optional />
      <Encounter
        enemies="Blast-Ray. Shock-Ray x2"
        instructions={[
          "Shock-Ray A: Overcharge, Thundara",
          "Shock-Ray B: Thundara, Combo",
          "Cloud: Thundara, ATB Boost",
          "Thundaras",
        ]}
      />
      <Dialogue details="Pull lever number 3" />
      <Pick item="Time" />
      <Shop
        name="Vending Machine"
        sell={["Earrings", "Talisman", "Time"]}
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
                { name: "ATB Assist", source: "cloud" },
                { name: "First Strike", source: "barret" },
                { name: "Parry" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "ATB Stagger" },
                { name: "Fire" },
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
                { name: "Refocus", source: "cloud" },
                { name: "ATB Stagger", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "Ice", source: "tifa" },
                { name: "", source: "aerith" },
                { name: "", source: "aerith" },
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
                { name: "Wind" },
                { name: "Binding", source: "tifa" },
                { name: "Lightning" },
                { name: "Fire" },
              ],
              armor: [
                { name: "", source: "aerith" },
                { name: "Time" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Aerith",
              leader: true,
              shortcuts: [
                { shortcut: "square", ability: "Thundara" },
                { shortcut: "circle", ability: "Fira All" },
                { shortcut: "x", ability: "ATB Ward" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Unknown Entity x3"
        instructions={["Aerith: Firaga All, Starshower", "Tifa: Divekick rest"]}
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
          "Aerith: 2 ATB. ATB Ward, ATB Boost, Fira",
          "Tifa: Starshower, Whirl, Divekick",
        ]}
      />
      <Encounter
        enemies="Zenene x2"
        instructions={[
          "Aerith: 2 ATB, ATB Ward, ATB Boost, Fira All",
          "Tifa: Starshower, Whirl, Starshower",
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
                { name: "Lightning", source: "aerith" },
                { name: "Time", source: "barret" },
                { name: "ATB Boost", source: "aerith" },
                { name: "" },
                { name: "" },
                { name: "" },
              ],
              armor: [
                { name: "First Strike", source: "aerith" },
                { name: "Refocus", source: "aerith" },
                { name: "ATB Stagger", source: "aerith" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning", source: "barret" },
                { name: "Magnify", source: "aerith" },
                { name: "Wind", source: "barret" },
                { name: "Fire" },
              ],
              armor: [
                { name: "ATB Assist", source: "tifa" },
                { name: "First Strike", source: "tifa" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "barret" },
                { name: "", source: "barret" },
                { name: "Parry" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "ATB Stagger" },
                { name: "Fire" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Fire" },
                { name: "Binding", source: "barret" },
                { name: "Ice", source: "cloud" },
                { name: "", source: "cloud" },
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
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "circle", ability: "Counterstance" }],
            },
            {
              name: "Barret",
              shortcuts: [{ shortcut: "circle", ability: "Thundaga  All" }],
            },
          ]}
        />
      </Menu>
      <Pick item="Mega-Potion" optional />
      <Bench />
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
      <Encounter enemies="Zenene x2" instructions={["Learn Counterstance"]} />
      <Menu>
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
          "Barret: Overcharge, Thundara",
          "Cloud: Thundagas",
        ]}
      />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [
                { name: "Hardedge", upgrade: "Atk+8 x3, Auto - Attack" },
              ],
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
      </Menu>
      <Encounter
        enemies="Sledgeworm x3"
        instructions={[
          "Barret: Overcharge, Steelskin, Lifesaver",
          "Cloud: TRIPOLOSKI to pressure, Focused Thrust, Punisher, Cross Slash",
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
          ["Barret: Thundaga All", "Cloud: Berserk, TRIPOLOSKI"],
        ]}
      />
      <Bench />
      <Shop
        name="Vending Machine"
        buy={["Mega-Potion x3", "Ether x2", "Supreme Bracer"]}
      />
      <Encounter
        enemies="Unknown Entity x2"
        instructions={["TRIPOLOSKI, ATB Boost, TRIPOLOSKI"]}
      />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Tifa",
              weapons: [{ name: "Metal Knuckles", upgrade: "Auto - Attack" }],
            },
            {
              name: "Aerith",
              weapons: [
                {
                  name: "Mythril Rod",
                  upgrade: "MP+13, M.Atk+10 x2, Mag +20% Full MP",
                },
              ],
            },
            {
              name: "Barret",
              weapons: [
                { name: "Light Machine Gun", upgrade: "Auto - Attack" },
              ],
            },
          ]}
        />
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Mythril Claws" },
                { name: "Cog Bangle", source: "barret" },
                { name: "Supreme Bracer" },
                { name: "Platinum Earrings", source: "barret" },
              ],
            },
            {
              name: "Aerith",
              equipments: [
                { name: "Chain Bangle" },
                { name: "Fury Ring" },
                { name: "Mythril Rod" },
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
                { name: "First Strike", source: "barret" },
                { name: "Parry" },
                { name: "Refocus", source: "cloud" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "ATB Stagger" },
                { name: "Fire" },
              ],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike", source: "cloud" },
                { name: "ATB Stagger", source: "cloud" },
                { name: "Ice" },
              ],
              armor: [
                { name: "Fire", source: "aerith" },
                { name: "Magnify", source: "barret" },
                { name: "Lightning", source: "cloud" },
                { name: "ATB Boost", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "", source: "aerith" },
                { name: "Time", source: "barret" },
                { name: "", source: "aerith" },
              ],
              armor: [
                { name: "", source: "aerith" },
                { name: "", source: "tifa" },
                { name: "Binding", source: "aerith" },
              ],
              summon: [{ name: "", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { name: "", source: "aerith" },
                { name: "Wind" },
                { name: "Fire" },
              ],
              armor: [
                { name: "", source: "tifa" },
                { name: "", source: "tifa" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Aerith",
              shortcuts: [{ shortcut: "circle", ability: "Thundaga" }],
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
          "Aerith: Arcane Ward, ATB Boost, Thundara",
          "Tifa: Thundara",
        ]}
      />
      <Encounter
        enemies="Enhanced Shock Trooper x2"
        instructions={[
          "Aerith: Fira All",
          "Tifa: Whirl + Divekick",
          "Careful with reflect",
        ]}
      />
      <Encounter
        enemies="Unknown Entity x5"
        instructions={["Tifa: Starshower, Whirl", "Aerith: Firaga All"]}
      />
      <Pick item="Ether" optional />
      <Encounter
        enemies="Shock-Ray x2, Slug-Ray x2"
        instructions={["Aerith: Arcane Ward, ATB Boost, Thundara, Thundara"]}
      />
      <Dialogue details="Ether Tifa/Aerith, pull lever number 4" />
      <Pick item="Mega-Potion x2" optional />
      <Menu
        instructions={[
          "Give Fist Strike to Cloud/Barret",
          "Swap Barret/Tifa Lightning",
        ]}
      />
      <Boss
        name="Swordipede"
        phases={[
          ["Orb of Gravity x2"],
          [
            "Give First Strike to Tifa/Aerith",
            "Aerith: 2 ATB, Arcane Ward, ATB Boost, Thundaga x2",
            "Tifa: Thundaga",
          ],
        ]}
      />
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Metal Knuckles" },
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
                { name: "Magnify", source: "aerith" },
                { name: "Time" },
                { name: "" },
              ],
              armor: [
                { name: "ATB Stagger", source: "barret" },
                { name: "First Strike", source: "tifa" },
                { name: "Binding" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "", source: "cloud" },
                { name: "Parry" },
                { name: "Refocus" },
                { name: "ATB Boost", source: "aerith" },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "ATB Stagger" },
                { name: "Fire" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "", source: "barret" },
              ],
              armor: [
                { name: "Fire" },
                { name: "Wind", source: "inventory" },
                { name: "Lightning" },
                { name: "Ice", source: "inventory" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Lightning", source: "tifa" },
                { name: "" },
                { name: "Wind" },
                { name: "Fire" },
              ],
              armor: [
                { name: "" },
                { name: "" },
                { name: "Ice", source: "aerith" },
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
            "Tifa: Hit, Defend, Starshower x2, Whirl",
            "2 ATB, Starshower x2, Whirl",
            "Cloud: Counterstance Vengeance, Haste All",
          ],
          [
            "Tifa: Unbridled x2, kill tentacles with whirl until 2 ATB",
            "Aerith uses Mega-Potions as needed",
            "Cloud: TRIPOLOSKI tentacles and keep Haste up",
            "Pressure: Tifa Hit + Defend Rejection, Focused Thrust/Strike",
            "Stagger: Tifa 2 ATB, Starshower x2",
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
              equipments: [{ name: "Fury Ring", source: "tifa" }],
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
                { name: "Refocus", source: "tifa" },
              ],
              armor: [
                { name: "ATB Stagger" },
                { name: "First Strike" },
                { name: "Binding" },
              ],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Magnify", source: "cloud" },
                { name: "Time", source: "cloud" },
                { name: "Wind" },
                { name: "Fire" },
              ],
              armor: [
                { name: "ATB Assist", source: "tifa" },
                { name: "Lightning", source: "barret" },
                { name: "Ice" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "", source: "barret" },
                { name: "" },
                { name: "Parry" },
                { name: "", source: "cloud" },
                { name: "", source: "aerith" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "ATB Stagger" },
                { name: "Fire" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "ATB Boost", source: "tifa" },
              ],
              armor: [
                { name: "Fire" },
                { name: "Wind" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Braver" }],
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
              name: "Barret",
              equipments: [
                { name: "Fury Ring", source: "cloud" },
                { name: "Platinum Earrings", source: "aerith" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Barret",
              weapon: [
                { name: "Magnify" },
                { name: "Time" },
                { name: "Wind" },
                { name: "Fire" },
              ],
              armor: [
                { name: "ATB Assist" },
                { name: "Lightning" },
                { name: "First Strike", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "First Strike" },
                { name: "ATB Stagger" },
                { name: "ATB Boost" },
              ],
              armor: [
                { name: "Fire" },
                { name: "Refocus", source: "cloud" },
                { name: "Lightning" },
                { name: "Ice" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "" },
                { name: "" },
                { name: "Wind", source: "aerith" },
              ],
              armor: [
                { name: "ATB Stagger" },
                { name: "Ice", source: "barret" },
                { name: "Binding" },
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
            "Barret: Haste All, Arcane Ward Barret",
            "Barret: Overcharge, Fire Drone C",
            "Aerith: Thundara Drone C, 1 ATB, ATB Boost, Thundara, Thunder",
            "Aerith: Attack and Soul Drain Drone B when staggered",
            "2 ATB, Thunder cannon",
            "Barret: Combo Drone A, Aerith 2 ATB Drone A",
          ],
          [
            "Aerith: Go to Arcane Ward, Thundara, Thundaga, Barret Haste All",
            "Barret: Overcharge, Turbo Ether Aerith",
            "Aerith: 2 ATB Firaga, 2 ATB",
          ],
          [
            "Aerith: Go to Arcane Ward, Thundaga",
            "Barret: Combo, Focused Shot",
            "Aerith: 2 ATB, Firaga, Barret Ether Aerith",
            "Barret: Combo, Focused Shot",
            "Aerith: 2 ATB, Thunder",
            "Aerith: Attack until stagger, Thundara",
          ],
          ["Barret Turbo Ether Aerith", "Aerith: 2 ATB, Thundaga x2"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter17;
