import React from "react";
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
      <Pick item="Hi-Potion" />
      <Encounter
        enemies="Grashtrike x3, Sentry Ray x2"
        instructions={[
          "Grashtrikes: Berserk, Blizzard",
          "Sentries: Overcharge/Thunder",
          "Can flee and finish after light depending on ATB",
          "Learn Focused Shot if not yet",
        ]}
      />
      <Encounter
        enemies="Sentry Gun Prototype x4"
        instructions={[
          "Cloud: Thunder C",
          "Barret: Overcharge A, Thunder D",
          "Tifa: Whirl A, Thunder B",
        ]}
      />
      <Encounter
        enemies="Terpsicolt x2,Sentry Gun Prototype x2"
        instructions={[
          "Barret: Overcharge Sentry Gun B",
          "Barret: Thunder Sentry Gun A",
          "Cloud: Berserk + Punisher Terpsicolts",
          "TRIPOLOSKI when spinning",
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
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [
                { name: "First Strike" },
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
          "Cloud: Dash, Berserk, Thunder Launcher A",
          "Cloud: Punisher x6, Operator, Thunder Launcher A",
          "Barret: Overcharge Sentry Ray A, Thunder SGP A",
          "Cloud: Dash Launcher B, Thunder, Tifa Thunder, Punisher",
          "Thunder rest",
        ]}
      />
    </Chapter>
  );
}

export default Chapter6;
