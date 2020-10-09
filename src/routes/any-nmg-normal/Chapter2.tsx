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
          "Guard Dog: Fire, Punisher",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Grenadier x2"
        instructions={[
          "Cleave Grenadiers",
          "Fire Security Officer",
          "Focused Thrust Security Officer",
        ]}
      />
      <Encounter
        enemies="Shock Troopers x2"
        instructions={["Counter until Staggered", "Berserk, Fire"]}
      />
      <Encounter
        enemies="Security Officer x2, Grenadier x2"
        instructions={[
          "Punisher Security Officer",
          "Focused Thrust Security Officer",
          "Cleave Grenadiers",
        ]}
      />
      <Pick item="Grenade x2" />
      <Pick item="Iron Bangle" />
      <Encounter
        enemies="Security Officer x6, Grenadier x2, Riot Trooper x2, The Huntsman"
        instructions={[
          "Cleave/Counters to fill ATB",
          "Grenade Riot Troopers, Berserk before Huntsman",
          "Huntsman: Fire, Punisher full, Berserk, Punisher x4, Fire",
          "Huntsman: Punisher full, Berserk, Fire",
        ]}
      />
    </Chapter>
  );
}

export default Chapter2;
