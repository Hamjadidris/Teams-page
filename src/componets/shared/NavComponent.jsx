import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import DrawerComponent from "./Drawer";
import flag from '../../assets/Flags.svg'
import arrowdown from  '../../assets/arrowdown.svg'
import hamburger from '../../assets/hamburger.svg'


const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);


  const HandleDrawerState = () => {
    setIsOpen(!isOpen)
  }

  console.log(isOpen)
  return (
    <Grid
      sx={{
        maxWidth: { xs: "90%", sm: "95%", md: "84%" },
        minHeight: { xs: "70px", sm: "100px" },
        justifyContent: {xs:"space-between"}
      }}
      minHeight="100px"
      display="flex"
      margin="0px auto"
      flexDirection="row"
      
    >
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontSize: { xs: "23px", sm: "17px", md: "24px",lg:"29px", xl:"34px" },
            lineHeight: { xs: "28px", sm: "40px" },
            fontWeight: { xs: "600", sm: "700" },
          }}
          color="#00296B"
          letterSpacing="-0.04em"
          role="heading"
        >
          Street Rate
        </Typography>
      </Grid>

      <Grid
        alignItems="center"
        sx={{
          fontSize: { sm: "12px", md: "16px" },
          gap: { sm: "9px", md: "20px", lg: "24px" },
          display: { xs: "none", sm: "flex" },
          width: { md: "606pxx" },
        }}
        fontWeight="400"
        lineHeight="24px"
        color="#94A3B8"
      >
        <Box gap="6px" display="flex">
          <img src={flag} alt="flagImage" />
          <img src={arrowdown} alt="arrow" />
        </Box>

        <Typography>Home</Typography>

        <Typography>Convert</Typography>

        <Typography>Currency Profile</Typography>

        <Typography>News</Typography>

        <Typography>Contact</Typography>
      </Grid>

      <Box
        p="12px"
        sx={{ display: { xs: "flex", sm: "none" } }}
        cursor="pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={hamburger} alt="MenuIcon" Width="100%" />
      </Box>
      <DrawerComponent isOpen={isOpen} setIsOpen={HandleDrawerState} navItems={["Home", "Convert", "Currency Profile", "News", "Contact"]}/>
    </Grid>
  );
};

export default NavComponent;
