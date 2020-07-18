import React from "react";
import Boss from "../../components/Boss";
import BattleSettings from "../../components/BattleSettings";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";

function Chapter1() {
  return (
    <Chapter number={1}>
      <Encounter
        enemies="Security Officer x2"
        instructions={["Cleave left one"]}
      />
      <Encounter enemies="Security Officer x2" instructions={["Punisher"]} />
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
          "Security Officer: Dash, Punisher",
          "Guard Dog: Fire, Punisher",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Guard Dog"
        instructions={[
          "Security Officers: Punisher",
          "Guard Dog: Fire, Punisher",
        ]}
      />
      <Encounter
        enemies="Security Officer x2"
        instructions={["Dash, Punisher"]}
      />
      <Encounter
        enemies="Security Officer x4"
        instructions={["Dash, Punisher rightmost one"]}
      />
      <Encounter
        enemies="Sentry Ray x3, Monodrive x3"
        instructions={[
          "Overcharge Sentry Ray B, Combo A, Thunder x2",
          "Punisher Monodrive B and C, Focused Thrust A",
        ]}
      />
      <Menu>
        <BattleSettings
          characters={[
            {
              name: "Barret",
              shortcuts: [
                {
                  shortcut: "square",
                  ability: "Thunder",
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
          "Barret: Charge, Combo, Charge, Focused Shot, Focused Thrust",
          "Cloud: Punisher (fill 2 ATB), Barret Thunder x2",
        ]}
      />
      <Pick item="Ether" description="If near stairs after battle" optional />
      <Boss
        name="Guard Scorpion"
        phases={[
          [
            "Cloud: Dash",
            "Barret: Lock, run back, Overcharge",
            "Cloud: Counter, Punisher full, Berserk, Fire, Focused Shot",
            "Cloud: Punisher full, Fire, Punisher x4, Berserk, Fire, Punisher",
          ],
          [
            "Cloud: Dash and Roll x2, go behind",
            "Cloud: Punisher x4, Berserk, Fire, Punisher x4, Focused Thrust",
            "Barret: Combo, Focused Shot, Combo",
            "Cloud: Counter, Punisher x4, Berserk, Focused Thrust, Thunder",
            "Cloud: Punisher x2, Berserk, Overcharge, Punisher full, Thunder, Berserk",
          ],
          [
            "Cloud: Fire",
            "Barret: Combo, Thunder, Combo, Charge, Combo, Charge, Focused Shot",
            "Cloud: Dash, Punisher x3, Berserk, Cross Slash",
            "Barret: Overcharge, Combo, Swap to Cloud",
          ],
          [
            "Cloud: Dash, Punisher x2, Berserk, Fire on Left Leg",
            "Thunder, Fire",
          ],
        ]}
      />
      <Encounter
        enemies="Monodrive x2"
        instructions={["Punisher x4 B, Operator, Dash, Focused Thrust A"]}
      />
      <Encounter
        enemies="Security Officer x2, Monodrive x2"
        instructions={[
          "Cloud: Operator x1 left Monodrive, Punisher full Monodrive + Security Officer",
          "Cloud: Focused Thrust Security Officer",
          "Barret: Overcharge Monodrive, Swap to Cloud",
        ]}
      />
      <Encounter
        enemies="Shock Trooper x3, Sentry Ray x2"
        instructions={[
          "Barret: Overcharge Sentry Ray A, Thunder B",
          "Cloud: Counter and Fire/Braver/Punisher Shock Troopers",
        ]}
      />
    </Chapter>
  );
}

export default Chapter1;
