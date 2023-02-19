import React from "react";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import { Box, Typography } from "@mui/material";

const FlightTypeMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: "10px",
        }}
      >
        {/* Flight Way Selector  */}
        <Box>
          <Typography sx={{ fontSize: "16px", color: "#212121" }}>
            <PlaylistAddCheckCircleIcon />
            One Way
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "16px", color: "#212121" }}>
            <PlaylistAddCheckCircleIcon />
            Round Trip
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "16px", color: "#212121" }}>
            <PlaylistAddCheckCircleIcon />
            Multi City
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "1.8rem",
            color: "#212121",
            marginTop: "-5px",
          }}
        >
          {" "}
          Book Flight Tickets
        </Typography>
      </Box>
    </Box>
  );
};

export default FlightTypeMenu;
