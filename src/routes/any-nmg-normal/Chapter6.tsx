import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Box from "../../components/Box";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Heal from "../../components/Heal";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";
import UpgradeWeapons from "../../components/UpgradeWeapons";

function Chapter6() {
  return (
    <Chapter number={6}>
      <Pick item="Hi-Potion" optional />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Ice", source: "tifa" },
                { name: "First Strike" },
                { name: "ATB Boost" },
              ],
              armor: [{ name: "Lightning" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Barrier", source: "cloud" }],
              summon: [{ name: "" }],
            },
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Iron Blade", upgrade: "Manual" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [{ ability: "Leader" }],
            },
          ]}
        />
      </Menu>
      <Box description="Before the fans." />
      <Encounter
        enemies="Grashtrike x3"
        instructions={[
          "Barret: Overcharge, ATB Boost, Focused Shot (learn), Divekick C",
          "Cloud: Blizzard A, Blizzard B, Punisher",
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
          "Cloud: Braver, Overcharge, Counter Terpsicolt B",
          "Cloud: TRIPLOSKI, Tifa/Barret Thunder each Sentry",
        ]}
      />
      <Pick item="Mesmeric Armlet" />
      <Heal description="Everyone good HP" />
      <Dialogue optionText="Nah. No time." optionPosition="2nd" />
      <Encounter
        enemies="Sentry Ray x2, Sentry Gun Prototype x2, Sentry Launcher x2"
        instructions={[
          "Cloud: Roll",
          "Barret: Overcharge Ray A",
          "Cloud: Dash, Berserk, Barret Thunder, Thunder Launcher A",
          "Cloud: Punisher full, Operator Launcher A",
          "Cloud: Tifa Thunder Sentry B, Thunder x2 Launcher B",
          "Cloud: Punisher full Launcher B, ATB Boost, Thunder each SGP",
        ]}
      />
    </Chapter>
  );
}

export default Chapter6;
