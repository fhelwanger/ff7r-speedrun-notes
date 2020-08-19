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
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Time" },
                { name: "Magnify", source: "cloud" },
                { name: "Wind" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "ATB Assist" },
                { name: "First Strike" },
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
      <Pick item="3000 gil" optional />
      <Encounter
        enemies="Blast-Ray, Shock-Ray x2"
        instructions={[
          "Cloud: Thundaga Blast-Ray",
          "Barret: Overcharge, Combo Shock-Ray A",
          "Barret: Thundara Shock-Ray B, Thundara Blast-Ray",
          "Cloud: ATB Boost, Thundaga x2",
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
                { name: "Wind", source: "aerith" },
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
                { name: "Magnify", source: "barret" },
                { name: "Lightning", source: "cloud" },
                { name: "Barrier", source: "cloud" },
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
                { name: "Fire" },
                { name: "Binding" },
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
                { name: "Time" },
                { name: "", source: "aerith" },
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
        <BattleSettings
          characters={[
            {
              name: "Aerith",
              shortcuts: [
                { shortcut: "square", ability: "Blizzara All" },
                { shortcut: "circle", ability: "Firaga All" },
                { shortcut: "x", ability: "Thundara All" },
              ],
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
        instructions={["Blizzara All/Starshower/Divekick/Overpower"]}
      />
      <Pick item="5000 gil" optional />
      <Encounter
        enemies="Zenene"
        instructions={["Blizzara All, Combo until Stagger", "Whirl + Divekick"]}
      />
      <Encounter
        enemies="Zenene x2"
        instructions={["Blizzara All, Combo until Stagger", "Whirl + Divekick"]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning", source: "aerith" },
                { name: "Magnify" },
                { name: "Ice", source: "aerith" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sentry Launcher x3"
        instructions={[
          "Thundara All C, ATB Boost, Thundara All C",
          "Thundara All B, Whirl, Divekick, Whirl",
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
                { name: "Fire" },
                { name: "Lightning", source: "aerith" },
                { name: "Refocus", source: "tifa" },
                { name: "" },
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
                { name: "Lightning", source: "barret" },
                { name: "Magnify", source: "aerith" },
                { name: "Wind" },
                { name: "" },
              ],
              armor: [
                { name: "Time", source: "barret" },
                { name: "ATB Assist", source: "tifa" },
                { name: "First Strike", source: "tifa" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice", source: "barret" },
                { name: "ATB Stagger" },
                { name: "Lightning" },
                { name: "Wind" },
              ],
              armor: [
                { name: "Fire", source: "barret" },
                { name: "Parry" },
                { name: "", source: "cloud" },
              ],
              summon: [{ name: "", source: "cloud" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Binding", source: "cloud" },
                { name: "", source: "barret" },
                { name: "Ice" },
                { name: "Barrier" },
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
              name: "Cloud",
              weapons: [{ name: "Twin Stinger", upgrade: "Auto - Attack" }],
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
                { name: "Time", source: "barret" },
                { name: "Magnify" },
                { name: "Wind" },
                { name: "" },
              ],
              armor: [
                { name: "Lightning", source: "barret" },
                { name: "ATB Assist" },
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
              weapons: [
                { name: "Hardedge", upgrade: "Auto - Attack, Auto - Balanced" },
              ],
            },
            {
              name: "Tifa",
              weapons: [{ name: "Metal Knuckles", upgrade: "Auto - Attack" }],
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
                { name: "ATB Stagger" },
                { name: "Lightning" },
                { name: "Refocus", source: "cloud" },
                { name: "" },
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
                { name: "Ice" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "Lightning", source: "cloud" },
                { name: "ATB Boost", source: "cloud" },
                { name: "First Strike", source: "cloud" },
                { name: "ATB Stagger", source: "cloud" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "Binding", source: "aerith" },
                { name: "", source: "aerith" },
                { name: "Wind", source: "tifa" },
                { name: "" },
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
                { name: "", source: "aerith" },
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
        <BattleSettings
          characters={[
            {
              name: "Aerith",
              shortcuts: [
                { shortcut: "square", ability: "Fira All" },
                { shortcut: "x", ability: "Thundara" },
              ],
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
        instructions={["Aerith: Fira All", "Tifa: Whirl/Divekick/Overpower"]}
      />
      <Encounter
        enemies="Unknown Entity x5"
        instructions={["Aerith: Firaga All", "Tifa: Whirl/Divekick/Overpower"]}
      />
      <Menu>
        <Materia
          characters={[
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning", source: "aerith" },
                { name: "Magnify" },
                { name: "Ice" },
                { name: "Barrier" },
              ],
              armor: [
                { name: "Fire", source: "aerith" },
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Barret",
              shortcuts: [{ shortcut: "square", ability: "Thundara" }],
            },
            {
              name: "Cloud",
              shortcuts: [{ shortcut: "square", ability: "Haste All" }],
            },
            {
              name: "Aerith",
              shortcuts: [
                { shortcut: "square", ability: "Fira" },
                { shortcut: "circle", ability: "Thundaga" },
                { shortcut: "x", ability: "Thundara All" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Shock-Ray x2, Slug-Ray x2"
        instructions={["Thundara All"]}
      />
      <Dialogue details="Ether Aerith, pull lever number 4" />
      <Menu instructions={["Give Fist Strike to Cloud/Barret"]} />
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
      <Shop name="Vending Machine" buy={["Mega-Potion x3", "Ether x2"]} />
      <Bench />
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
                { name: "Binding" },
                { name: "" },
                { name: "Magnify", source: "aerith" },
                { name: "Time", source: "barret" },
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
                { name: "ATB Stagger" },
                { name: "Lightning" },
                { name: "Refocus" },
                { name: "" },
              ],
              armor: [
                { name: "", source: "cloud" },
                { name: "Parry" },
                { name: "" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Aerith",
              weapon: [
                { name: "Lightning" },
                { name: "Wind", source: "cloud" },
                { name: "Ice" },
              ],
              armor: [
                { name: "Fire" },
                { name: "ATB Boost" },
                { name: "First Strike" },
                { name: "ATB Stagger" },
              ],
              summon: [{ name: "" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "", source: "cloud" },
                { name: "" },
                { name: "Wind" },
                { name: "" },
              ],
              armor: [{ name: "Lightning" }, { name: "Ice" }, { name: "Fire" }],
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
            "Aerith use Mega-Potions, Cloud keep Haste up",
            "1st and 2nd tentacles: Whirl/Overpower, Unbridled x2",
            "3rd tentacles: TRIPOLOSKI",
            "Pressure: Tifa Hit + Defend Rejection, Focused Thrust, Focused Strike",
            "Stagger: Starshower x2, Combo x6, Whirl",
          ],
          [
            "Cloud: Sleep",
            "Tifa: Starshower, Somersault, Parry Rejection",
            "Tifa: Starshower, Rise, Omni",
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
                { name: "Binding" },
                { name: "" },
                { name: "", source: "barret" },
                { name: "", source: "barret" },
              ],
              armor: [{ name: "First Strike" }, { name: "" }, { name: "" }],
              summon: [{ name: "Ifrit", source: "tifa" }],
            },
            {
              name: "Barret",
              weapon: [
                { name: "Magnify", source: "cloud" },
                { name: "Time", source: "cloud" },
                { name: "Wind" },
                { name: "" },
              ],
              armor: [{ name: "Lightning" }, { name: "Ice" }, { name: "Fire" }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "ATB Assist" },
                { name: "ATB Stagger" },
                { name: "Lightning" },
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
              name: "Aerith",
              shortcuts: [{ shortcut: "x", ability: "Soul Drain" }],
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
          ["Darkstar: TRIPOLOSKI, Punisher full, Punisher"],
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
                { name: "Magnify" },
                { name: "Time" },
                { name: "First Strike", source: "cloud" },
                { name: "" },
              ],
              armor: [{ name: "Lightning" }, { name: "Ice" }, { name: "Fire" }],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "Binding" },
                { name: "" },
                { name: "" },
                { name: "" },
              ],
              armor: [
                { name: "Wind", source: "barret" },
                { name: "" },
                { name: "" },
              ],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Boss
        name="Arsenal"
        phases={[
          [
            "Barret: Haste All, Arcane Ward Barret",
            "Aerith: Fira Cannon, Soul Drain Drones when staggered",
          ],
          [
            "Aerith: Go to Arcane Ward, 2 ATB, Thundaga, Barret Haste All",
            "Aerith: ATB Boost, Thundaga, Overcharge",
            "Aerith: Combo x5, Fira, Combo x5, Barret Turbo Ether Aerith, Fira",
          ],
          [
            "Aerith: Fira",
            "Barret: 2 ATB, Focused Shot",
            "Aerith: Go to Arcane Ward, Combo x6, Thundaga",
            "Barret: Overcharge, Focused Shot",
            "Aerith: Thundaga, Tempest full, Combo x6",
            "Aerith: Fira, Barret Turbo Ether Aerith, Fira",
          ],
          ["Aerith: Thundaga x2, Barret Thundara"],
        ]}
      />
    </Chapter>
  );
}

export default Chapter17;
