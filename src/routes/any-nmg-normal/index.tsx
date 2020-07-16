import React from "react";
import Route from "../../components/Route";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5";

function AnyPercentNoMajorGlitchesNormal() {
  return (
    <Route title="Any% No Major Glitches - Normal">
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
    </Route>
  );
}

export default AnyPercentNoMajorGlitchesNormal;
