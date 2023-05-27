import { Divider, Box, Grid, Typography } from "@mui/material";
import { Telegram } from "@mui/icons-material";
import { Link } from "./header";

export const Footer = () => {
  return (
    <Box mt="100px" height="300px">
      <Divider />
      <Box maxWidth={1600} margin="0 auto" mt="50px" padding="0 20px">
        <Grid container justifyContent="space-between">
          <Grid item xs={3}>
            <Typography variant="h6">покупателям</Typography>

            <Grid container mt="20px">
              <Grid item xs={3}>
                <Link to="/delivery">Доставка</Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/payment">Оплата</Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/shop">Магазины</Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h6">информация</Typography>

            <Grid container mt="20px">
              <Grid item xs={3}>
                <Link to="/about">О нас</Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/news">Новости</Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h6">соц сети</Typography>

            <Grid container mt="20px">
              <Grid item xs={2}>
                <Link to="/test">
                  <Telegram />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt="80px">
          <Typography variant="subtitle2">
            <span>KODMI</span> 2023
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};
