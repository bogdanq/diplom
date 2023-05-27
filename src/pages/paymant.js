import { Box, Typography } from "@mui/material";
import { MainHeader } from "../ui";

export const PaymantPage = () => {
  return (
    <Box height="100vh">
      <Box maxWidth={1600} margin="0 auto" padding="0 20px" minHeight="100%">
        <Box
          position="sticky"
          top="20px"
          backgroundColor="#fff"
          zIndex={99}
          pb="50px"
        >
          <MainHeader />

          <Typography textAlign="center" variant="h4" color="#622a0c">
            Оплата
          </Typography>
        </Box>

        <Typography variant="subtitle1">
          Оплата производится при получении товара
        </Typography>
      </Box>
    </Box>
  );
};
