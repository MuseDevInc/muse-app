import * as React from "react";
import Tabs from "@mui/material/Tabs";
import { tabsClasses } from "@mui/material";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Conversation from "../conversations/Conversation";

export default function ThreadTabs({
  conversations,
  setOpenThread,
  setCurrentChat,
  currentUser,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      elevation={24}
      sx={{
        zIndex: "1400",
        position: "absolute",
        left: "0",
        bottom: "0",
        width: "100vw",
        bgcolor: "background.paper",
        minHeight: "4rem",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="Select conversation tab"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {console.log(currentUser)}
        {conversations.length > 0
          ? conversations?.map((convo) => {
              return (
                <Conversation
                  key={`${convo._id}conversation`}
                  conversation={convo}
                  currentUser={currentUser}
                  setCurrentChat={setCurrentChat}
                  setOpenThread={setOpenThread}
                />
              );
            })
          : null}
      </Tabs>
    </Paper>
  );
}
