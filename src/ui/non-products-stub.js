import { Box, Typography } from "@mui/material";

export const NonProductsStub = ({ title }) => {
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
      <Typography textAlign="center" variant="h4">
        {title}
      </Typography>
    </Box>
  );
};
