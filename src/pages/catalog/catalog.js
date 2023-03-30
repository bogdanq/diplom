import { Box, Button, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ItemCart, subMenu } from "../../ui";
import { MainTanplate } from "../../ui/templates";

export const Catalog = () => {
  const { pathname } = useLocation();

  const menu = subMenu.find((i) => i.link === pathname);

  return (
    <MainTanplate canSlider={false} stick>
      <Typography textAlign="center" variant="h4">
        {menu.title}
      </Typography>

      <Typography variant="subtitle1" mt="50px">
        {menu?.desc}
      </Typography>

      <Grid container wrap="wrap" spacing={2}>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
        <Grid item md={2.8} sm={3.5}>
          <ItemCart />
        </Grid>
      </Grid>

      <Box mt="30px">
        <Button size="md" variant="outlined" color="secondary2">
          Показать еще
        </Button>
      </Box>
    </MainTanplate>
  );
};
