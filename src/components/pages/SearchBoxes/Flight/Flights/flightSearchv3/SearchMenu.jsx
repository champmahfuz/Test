import React, { useState } from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Typography } from "@mui/material";

const boxStyle = {
  boxShadow: 2,
  width: "80px",
  height: "70px",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.7)",
  borderRadius: " 5px",
  color: "#fff",
  p: 3,
  backdropFilter: "blur(5.5px)",
  cursor: "pointer",
};

const SearchMenu = () => {
  const [serviceType, setServiceType] = useState("flight");
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "1000px",
          position: "absolute",
          zIndex: 2,
          marginTop: "-35px",
          marginLeft: "50px",
          gap: "10px",
          // sx={{ display: { xs: "none", sm: "none" } }}
        }}
      >
        <Box sx={boxStyle}>
          <AirplanemodeActiveIcon
            sx={{
              marginTop: "-30px",
              marginLeft: "3px",
              color: serviceType === "flight" ? "green" : "#212121",
              justifyContent: "center",
            }}
          />
          <Typography
            sx={{
              marginLeft: "-8px",
              marginTop: "-10px",
              color: serviceType === "flight" ? "green" : "#212121",
            }}
          >
            Flights
          </Typography>
        </Box>
        <Box sx={boxStyle}>
          <InsertPageBreakIcon
            sx={{ marginLeft: "3px", marginTop: "-30px", color: "#212121" }}
          />
          <Typography sx={{ color: "#212121", marginTop: "-10px" }}>
            Visa
          </Typography>
        </Box>
        <Box sx={boxStyle}>
          <HolidayVillageIcon
            sx={{ marginLeft: "3px", marginTop: "-30px", color: "#212121" }}
          />
          <Typography
            sx={{ marginLeft: "-12px", color: "#212121", marginTop: "-10px" }}
          >
            Holidays
          </Typography>
        </Box>
        <Box sx={boxStyle}>
          <DarkModeIcon
            sx={{ marginLeft: "3px", marginTop: "-30px", color: "#212121" }}
          />
          <Typography
            sx={{ color: "#212121", marginTop: "-10px", marginLeft: "-10px" }}
          >
            Umrah
          </Typography>
        </Box>
        <Box sx={boxStyle}>
          <MoreHorizIcon
            sx={{ marginLeft: "3px", marginTop: "-30px", color: "#212121" }}
          />
          <Typography sx={{ color: "#212121", marginTop: "-10px" }}>
            More
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchMenu;
