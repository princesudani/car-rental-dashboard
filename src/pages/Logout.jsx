import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Logout = () => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "50rem",
          marginBottom: "10rem",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
};

export default Logout;
