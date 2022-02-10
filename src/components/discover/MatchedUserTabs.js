import * as React from "react";
import { Container } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { MusicNote, ChatBubble } from "@mui/icons-material";
/* import { ChatBubble } from '@mui/icons-material'; */
import InfoIcon from "@mui/icons-material/Info";
import { PersonPin } from "@mui/icons-material";

export function MatchedUserTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    /*     <Container> */
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="options regarding matched user"
      variant="fullWidth"
    >
      <Tab icon={<MusicNote />} label="Taste" size="sm" />
      <Tab icon={<ChatBubble />} label="Message" size="sm" />
      <Tab icon={<InfoIcon />} label="Info" size="sm" />
    </Tabs>
    /*  </Container> */
  );
}
