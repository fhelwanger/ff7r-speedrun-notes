import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "./Card";
import IndexTitle from "./IndexTitle";
import { useTheme } from "@material-ui/core/styles";

function Hollow() {
  const lyrics = [
    { text: "I would be lost, drifting alone", paragraph: false },
    { text: "Floating up high, time after time", paragraph: false },
    { text: "And there you'd be, shining brightly", paragraph: false },
    { text: "Your smiling face, to guide my way", paragraph: true },
    { text: "Bloody and bruised, brought to my knees", paragraph: false },
    { text: "When beaten down, when broken up", paragraph: false },
    { text: "You would appear, reach out to me", paragraph: false },
    { text: "Heal every wound, and make me whole", paragraph: true },
    { text: "Was it all a dream? Will I never know?", paragraph: false },
    { text: "Foolish and blind, to everything", paragraph: false },
    { text: "Had I realized, had I thought it through", paragraph: false },
    { text: "Would you be here, in my embrace?", paragraph: true },
    { text: "Shine bright, once more", paragraph: false },
    { text: "Guide me, to you", paragraph: false },
    { text: "Smile bright, once more", paragraph: false },
    { text: "This time, I will never let you go", paragraph: true },
    { text: "With your every smile, hiding something more", paragraph: false },
    { text: "Dark mysteries, lurking beneath", paragraph: false },
    { text: "But I was consumed, with this emptiness", paragraph: false },
    { text: "This selfishness, this void to fill", paragraph: true },
    { text: "Hear me, once more", paragraph: false },
    { text: "Show me, your smile", paragraph: false },
    { text: "This time, for sure", paragraph: false },
    { text: "I'll see, the truth hidden inside your tears", paragraph: true },
    { text: "But I, I know", paragraph: false },
    { text: "That you're, long gone", paragraph: false },
    { text: "But I, I will", paragraph: false },
    { text: "Go on, howling and hollow", paragraph: true },
    { text: "To never know.", paragraph: true },
  ];

  const theme = useTheme();

  return (
    <>
      <IndexTitle id="hollow" text="Hollow" />
      <Card color={theme.palette.text.primary}>
        <Box padding={2} paddingBottom={0}>
          {lyrics.map((line, lineIndex) => (
            <Typography key={lineIndex} paragraph={line.paragraph}>
              {line.text}
            </Typography>
          ))}
        </Box>
      </Card>
    </>
  );
}

export default Hollow;
