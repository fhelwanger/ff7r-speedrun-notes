import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";

function AnyPercentNoMajorGlitchesNormal() {
  return (
    <>
      <Typography variant="h3" align="center" paragraph>
        Any% No Major Glitches - Normal
      </Typography>
      <Box maxWidth={800} margin="0 auto">
        <Chapter1 />
        <Chapter2 />
      </Box>
    </>
  );
}

export default AnyPercentNoMajorGlitchesNormal;
