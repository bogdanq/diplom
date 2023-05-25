import { Box, CircularProgress } from "@mui/material";

export const Spinner = () => {
  return (
    <Box
      mt="30px"
      height="300px"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
