import { Box, Grid } from "@mui/material";
import { CatalogMenu } from "../catalog-menu";
import { Footer } from "../footer";
import { MainHeader } from "../header";
import { MainSlider } from "../slider";

export const MainTanplate = ({ children, canSlider = true, stick = false }) => {
  return (
    <>
      <Box maxWidth={1600} margin="0 auto" padding="0 20px" display="s">
        {stick ? (
          <Box
            position="sticky"
            top="0"
            backgroundColor="#fff"
            zIndex={99}
            border="1px solid transparent"
          >
            <MainHeader />
          </Box>
        ) : (
          <MainHeader />
        )}

        <Grid container justifyContent="space-between">
          <Grid item xs={2}>
            <Box position={stick ? "fixed" : "initial"}>
              <CatalogMenu />
            </Box>
          </Grid>

          <Grid item xs={9.7}>
            {canSlider ? <MainSlider /> : children}
          </Grid>
        </Grid>

        {canSlider && children}
      </Box>

      <Footer />
    </>
  );
};
