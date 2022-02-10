import React from "react";
import {
  Box,
  FormGroup,
  TextField,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import EditIcon from "@mui/icons-material/Edit";

import { useTheme } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const theme = useTheme();

  let navigate = useNavigate();

  let handleCreateSubmit = (e) => {
    e.preventDefault();
    navigate("/editprofile");
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    "& > :not(style) + :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  const content = <div>{"Pop"}</div>;

  const content2 = <div>{"CLB"}</div>;

  return (
    <Stack alignItems="center">
      {/* <Typography
            sx={{
              textAlign: "center",
              padding: "2rem",
              margin: "1rem",
              color: "white",
            }}
            variant="h1"
          >
            MUSE
        </Typography> */}
      <Card
        sx={{
          maxWidth: 500,
        /*   maxHeight: 920, */
          padding: "2rem",
          margin: "2rem",
   /*        position: "absolute", */
          flexBasis: "auto"
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              C
            </Avatar>
          }
          action={
            <IconButton>
              <EditIcon />
            </IconButton>
          }
          title="Charmille"
          subheader="New York City, New York"
        />
        <CardMedia
          component="img"
          height="360"
          image="https://i.cbc.ca/1.6163000.1630614872!/fileImage/httpImage/drake-certified-lover-boy-album-art.jpeg"
        />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>About Me</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Root>
          <Divider sx={{ padding: "1rem" }}>Favorite Genre</Divider>
          {content}
          <Divider>Favorite Album of All Time</Divider>
          {content2}
        </Root>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{ margin: "1rem" }}
        >
          <Item>Music Item 1</Item>
          <Item>Music Item 2</Item>
          <Item>Music Item 3</Item>
        </Stack>
      </Card>
    </Stack>
  );
};

export default UserProfile;
