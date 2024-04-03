import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Typography textAlign={"center"} variant="h2" gutterBottom>
        CRUDS
      </Typography>
      <Typography textAlign={"center"} variant="h4" gutterBottom>
        Product Management System
      </Typography>
    </Box>
  );
};

export default Header;
