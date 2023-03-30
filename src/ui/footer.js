import { Divider, Box, Grid, Typography } from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";
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
                <Link to="/test">Доставка</Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/test">Оплата</Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/test">Магазины</Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h6">информация</Typography>

            <Grid container mt="20px">
              <Grid item xs={3}>
                <Link to="/test">О нас</Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/test">Блог</Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h6">соц сети</Typography>

            <Grid container mt="20px">
              <Grid item xs={2}>
                <Link to="/test">
                  <Facebook />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link to="/test">
                  <Instagram />
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
