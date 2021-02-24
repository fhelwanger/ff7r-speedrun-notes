import React from "react";
import Boss from "../../components/Boss";
import Box from "../../components/Box";
import BattleSettings from "../../components/BattleSettings";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Heal from "../../components/Heal";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";

function Chapter1() {
  return (
    <Chapter number={1}>
      <Encounter enemies="Security Officer x2" instructions={["Cleave"]} />
      <Encounter enemies="Security Officer x2" instructions={["Punisher guy to left"]} />
      <Menu>
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                {
                  shortcut: "circle",
                  ability: "Fire",
                },
                {
                  shortcut: "x",
                  ability: "Cross Slash",
                },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Security Officer, Guard Dog"
        instructions={[
          "Security Officer: Dash, Punisher x3, Berserk",
          "Guard Dog: Fire, Punisher",
        ]}
      />
      <Box description="2 sets before Jessie opens the fence." />
      <Encounter
        enemies="Security Officer x2, Guard Dog"
        instructions={[
          "Security Officers: Punisher",
          "Guard Dog: Fire, Berserk, Punisher",
        ]}
      />
      <Encounter
        enemies="Security Officer x2"
        instructions={["Dash, Punisher"]}
      />
      <Encounter
        enemies="Security Officer x4"
        instructions={[
          "Dash, Lock right or left one, Punisher full, Focused Thrust",
        ]}
      />
      <Encounter
        enemies="Sentry Ray x3, Monodrive x3"
        instructions={[
          "Barret: Combo, Overcharge Sentry Ray B, Combo A, Thunder C",
          "Cloud: Punisher x4, Operator Monodrive B/C, Dash, Focused Thrust A",
        ]}
      />
      <Menu>
        <BattleSettings
          characters={[
            {
              name: "Barret",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Thunder",
                  inputs: ["down"],
                },
                {
                  shortcut: "circle",
                  ability: "Fire",
                },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sweeper"
        instructions={[
          "Cloud: Dash, Punisher",
          "Barret: Overcharge, Combo, Charge, Thunder",
          "Barret: Charge, Combo, Charge, Focused Thrust, Focused Shot (stagger), Overcharge",
          "Cloud: Barret Thunder, Punisher (2 ATB), Barret Thunder, Focused Thrust",
        ]}
      />
      <Pick item="Ether" optional />
      <Heal description="Ether x1 Barret" />
      <Boss
        name="Guard Scorpion"
        phases={[
          [
            "Cloud: Dash",
            "Barret: Lock, run back, Overcharge",
            "Cloud: Counter, Punisher full, Berserk, Fire, Focused Shot",
            "Cloud: Punisher full, Fire, Punisher x4, Fire (stagger)",
            "Cloud: Punisher x4, Operator",
          ],
          [
            "Cloud: Dash and Roll x2, go behind",
            "Cloud: Punisher x4, Berserk, Fire, Punisher x4, Focused Thrust",
            "Barret: Combo, Focused Shot, Combo",
            "Cloud: Counter, Punisher x4, Berserk, Focused Thrust (stagger), Thunder",
            "Cloud: Start Punisher, Overcharge, Punisher full, Thunder, Operator, Punisher",
          ],
          [
            "Cloud: Fire",
            "Barret: Combo, Thunder, Combo, Charge, Combo, Charge, Focused Shot",
            "Cloud: Dash, Berserk, Operator (stagger)",
            "Barret: Overcharge, Cross Slash, Combo, Swap to Cloud",
          ],
          [
            "Cloud: Dash, Thunder, Braver Left Leg",
            "Cloud: Thunder, Focused Thrust",
          ],
        ]}
      />
      <Encounter
        enemies="Monodrive x2"
        instructions={[
          "B: Punisher x4, Operator",
          "A: Dash, Cleave, Focused Thrust (stagger)",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Monodrive x2"
        instructions={[
          "Cloud: Hit x1 left Monodrive, Punisher full Monodrive + Security Officer",
          "Cloud: Roll, Punisher jump, Focused Thrust Security Officer",
          "Barret: Overcharge Monodrive",
        ]}
      />
      <Encounter
        enemies="Shock Trooper x3, Sentry Ray x2"
        instructions={[
          "Barret: Overcharge one Sentry Ray, Thunder other",
          "Cloud: Counter and Fire/Punisher Shock Troopers",
        ]}
      />
    </Chapter>
  );
}

export default Chapter1;
