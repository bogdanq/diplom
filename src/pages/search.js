import { Box, Typography, Grid } from "@mui/material";
import { ItemCart, MainHeader } from "../ui";
import { useStore } from "effector-react";
import { $searchValue, $searhedProducts } from "../features/product/model";
import { useEffect, useState } from "react";

export const SearchPage = () => {
  const data = useStore($searhedProducts);
  const value = useStore($searchValue);

  const [localValue, setValue] = useState("");

  useEffect(() => {
    if (value) {
      setValue(value);
    }
  }, [value]);

  if (!data || !data?.length) {
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
              Товары не найдены
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

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
            Найденные товары
          </Typography>
        </Box>

        <Grid container wrap="wrap" spacing={2}>
          {data.map((d) => (
            <Grid key={d.id} item>
              <ItemCart {...d} value={localValue} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
