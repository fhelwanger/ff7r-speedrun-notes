import React from "react";
import Typography from "@material-ui/core/Typography";
import BattleSettings from "../../components/BattleSettings";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";
import Shop from "../../components/Shop";

function Chapter3() {
  return (
    <>
      <Typography variant="h4" paragraph>
        Chapter 3
      </Typography>
      <Shop name="Item Shop" buy={["Deadly Dodge"]} />
      <Menu>
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", status: "unchanged" },
                { name: "Deadly Dodge", status: "new" },
              ],
              armor: [],
              summon: [],
            },
          ]}
        />
      </Menu>
      <Pick item="Ether" description="After Biggs/Wedge" optional />
      <Pick item="Ice" description="In Scrap Boulevard" />
      <Encounter
        enemies="Gorgers and Wererats"
        instructions={[
          "Deadly Dodge + Cleave, then Punisher, Fire, Focused Thrust...",
        ]}
      />
      <Shop name="Weapon Shop" buy={["Earrings"]} />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Iron Blade" },
                { name: "Iron Bangle" },
                { name: "Earrings" },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire", status: "unchanged" },
                { name: "Ice", status: "new" },
                { name: "Assess", status: "new" },
              ],
              armor: [{ name: "Deadly Dodge", status: "cloud" }],
              summon: [],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                { shortcut: "square", ability: "Assess" },
                { shortcut: "x", ability: "TRIPOLOSKI" },
              ],
            },
            {
              name: "Tifa",
              shortcuts: [
                { shortcut: "x", ability: "Blizzard" },
                { shortcut: "circle", ability: "Fire" },
                { shortcut: "square", ability: "Thunder" },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Wererats x2, Gorger"
        instructions={[
          "Build ATB and Assess Gorger + Wererat",
          "Deadly Dodge",
          "Flee if Call to Arms",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Security Officer, Guard Dog"
        instructions={["Cloud: Deadly Dodge, Fire Dog, Berserk, TRIPOLOSKI"]}
      />
      <Dialogue
        optionText="No"
        optionPosition="2nd"
        when="before entering 7th Heaven"
      />
      <Encounter
        enemies="Hoodlum x4"
        instructions={[
          "Deadly Dodge, Fire",
          "TRIPOLOSKI if low HP, Fire otherwise",
        ]}
      />
      <Dialogue
        optionText="Yeah"
        optionPosition="2nd"
        when="when talking to Jessie"
      />
    </>
  );
}

export default Chapter3;
