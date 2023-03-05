import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { Box, ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";

import OuterComponent from "./OuterComponent";

// 기본 MUI 오버라이딩
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    //
    mycolor: "#00FF00",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 1000,
      lg: 1400,
      xl: 1700,
    },
  },
});

function Home() {
  const [btnColor, setBtnColor] = useState("error");
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h4">This is the title</Typography>
        <Typography variant="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <Button
          onClick={() => setBtnColor("success")}
          color={btnColor}
          variant="contained"
          size="large"
        >
          GO
        </Button>
        <button
          style={{
            border: "5px solid black",
            backgroundColor: "yellow",
            color: "red",
            width: "15rem",
            height: "5rem",
            margin: "2rem",
            fontWeight: "bolder",
          }}
        >
          HTML BTN
        </button>
        <br></br>
        <Button
          sx={{
            border: "5px solid black",
            backgroundColor: {
              xs: "blue",
              sm: "cyan",
              md: "yellow",
              lg: "pink",
              xl: "green",
            },
            color: "primary.main",
            width: {
              xs: 200,
              sm: 400,
              md: 600,
              lg: 800,
              xl: 1000,
            },
            height: "5rem",
            margin: "2rem",
            fontWeight: "bolder",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          MUI BTN
        </Button>
        <br></br>
        <OuterComponent />
      </ThemeProvider>
    </>
  );
}

export default Home;
