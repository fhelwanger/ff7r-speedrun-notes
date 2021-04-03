import React from "react";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Pick from "../../components/Pick";

function Chapter2() {
  return (
    <Chapter number={2}>
      <Pick item="Ether" />
      <Encounter
        enemies="Security Officer x2, Guard Dog"
        instructions={[
          "Security Officer: Dash, Punisher x3, Berserk",
          "Security Officer: Punisher",
          "Guard Dog: Fire, Punisher full, Operator",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Grenadier x2"
        instructions={["Grenadiers: Cleave", "Security Officers: Fire"]}
      />
      <Encounter
        enemies="Shock Troopers x2"
        instructions={[
          "Punisher full, Berserk, Operator A",
          "Counter x2, Fire x2 B",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Grenadier x2"
        instructions={[
          "Security Officer: Berserk, Operator",
          "Security Officer: Punisher x3, Operator",
          "Grenadiers: Cleave (Focused Thrust if alive)",
        ]}
      />
      <Pick item="Grenade x2" />
      <Pick item="Iron Bangle" />
      <Encounter
        enemies="Grenadier x2"
        instructions={["Cleave (kill at least 1)"]}
      />
      <Encounter
        enemies="Security Officer x6, Grenadier x2, Riot Trooper x2, The Huntsman"
        instructions={[
          "1st wave: Cleave left Grenadier, Counter, Grenade Riot Trooper",
          "2nd wave: Berserk, Operator right Officer, Counter, Grenade Riot Trooper, Fire Huntsman",
          "Huntsman: Punisher full, Berserk, Punisher x4, Fire",
          "Huntsman: Punisher full (stagger), Fire",
        ]}
      />
    </Chapter>
  );
}

export default Chapter2;
