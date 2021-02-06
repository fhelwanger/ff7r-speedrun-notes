import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Heal from "../../components/Heal";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";

function Chapter6() {
  return (
    <Chapter number={6}>
      <Pick item="Hi-Potion" optional />
      <Encounter
        enemies="Grashtrike x3"
        instructions={[
          "Cloud: Punisher jump, Berserk, ATB Boost, Blizzard A, Blizzard B",
          "Barret: Overcharge, Focused Shot (learn), Divekick C",
        ]}
      />
      <Encounter
        enemies="Sentry Ray x2"
        instructions={[
          "Barret: Overcharge one",
          "Cloud: Run to painel, Tifa/Barret Thunder other",
        ]}
      />
      <Encounter
        enemies="Sentry Gun Prototype x4"
        instructions={["Cloud ATB Boost, Thunder while Tifa Flee"]}
      />
      <Menu>
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ ability: "Leader" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Terpsicolt x2, Sentry Gun Prototype x2"
        instructions={[
          "Cloud: ATB Boost, Blizzard, Berserk, Punisher Terpsicolt A",
          "Cloud: Punisher (spinning), Overcharge, TRIPLOSKI Terpsicolt B",
          "Tifa/Barret Thunder each Sentry",
        ]}
      />
      <Pick item="Mesmeric Armlet" />
      <Heal description="Everyone full HP" />
      <Dialogue optionText="Nah. No time." optionPosition="2nd" />
      <Encounter
        enemies="Sentry Ray x2, Sentry Gun Prototype x2, Sentry Launcher x2"
        instructions={[
          "Cloud: Roll",
          "Barret: Overcharge Ray A",
          "Cloud: Dash, Berserk, Barret Thunder, Thunder Launcher A",
          "Cloud: Punisher full, Operator Launcher A",
          "Cloud: Thunder Launcher B, Tifa Thunder Sentry B, Thunder Launcher B",
          "Cloud: Punisher full Launcher B, ATB Boost, Thunder each SGP",
        ]}
      />
    </Chapter>
  );
}

export default Chapter6;
