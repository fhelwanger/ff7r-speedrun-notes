import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";

function Chapter6() {
  return (
    <Chapter number={6}>
      <Pick item="Hi-Potion" optional />
      <Encounter
        enemies="Grashtrike x3"
        instructions={[
          "Cloud: Berserk, Blizzard",
          "Barret: Overcharge, Focused Shot if less than 70% learned",
          "Cloud: Punisher/Blizzard",
        ]}
      />
      <Encounter
        enemies="Sentry Ray x2"
        instructions={["A: Overcharge", "B: Thunder"]}
      />
      <Encounter
        enemies="Sentry Gun Prototype x4"
        instructions={["Cloud Thunder one, Tifa Flee"]}
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
          "Cloud: Dash, Punisher full, Berserk Sentry Gun A",
          "Cloud: TRIPOLOSKI, Punisher/Berserk Sentry Gun B",
          "Cloud: TRIPOLOSKI/Punisher Terpsicolts",
        ]}
      />
      <Pick item="Mesmeric Armlet" />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [
                { name: "Mesmeric Armlet" },
                { name: "Iron Bangle", source: "cloud" },
                { name: "Earrings", source: "cloud" },
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
                { name: "First Strike" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "Ice" },
                { name: "Deadly Dodge", source: "inventory" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Ice" },
                { name: "Fire" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Wind", source: "inventory" }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Dialogue optionText="Nah. No time." optionPosition="2nd" />
      <Encounter
        enemies="Sentry Ray x2, Sentry Gun Prototype x2, Sentry Launcher x2"
        instructions={[
          "Cloud: Dash, Punisher full, Berserk, 2 ATB, Thunder Launcher A",
          "Barret: Overcharge Sentry Ray A, Cloud Thunder Launcher A, Thunder SGP A",
          "Barret: Combo, Thunder Launcher B",
          "Tifa: Combo, Thunder Launcher B",
          "Cloud: Punisher Launcher B, Thunder rest",
        ]}
      />
    </Chapter>
  );
}

export default Chapter6;
