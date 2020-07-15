import React from "react";
import Route from "../../components/Route";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";

function AnyPercentNoMajorGlitchesNormal() {
  return (
    <Route title="Any% No Major Glitches - Normal">
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
    </Route>
  );
}

export default AnyPercentNoMajorGlitchesNormal;
