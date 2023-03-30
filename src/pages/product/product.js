import { useState } from "react";
import { Box, Button, Grid, Paper, Typography, Tabs, Tab } from "@mui/material";
import { AddShoppingCart, StarBorder } from "@mui/icons-material";
import styled from "styled-components";
import { MainTanplate } from "../../ui/templates";
import cart1 from "../../assets/cart1.jpeg";
import { ParamsTable, Comments } from "../../features/product";
import { formatter } from "../../features/common";

const ProductWrapper = styled("div")`
  & img {
    width: 350px;
  }

  & h4 {
    margin-bottom: 50px;
  }

  & .currency {
    margin-top: 50px;
    color: #e50000;
  }

  & button {
    margin-right: 30px;
  }
`;

function TabPanel(props) {
  const { children, value, index } = props;

  return value === index ? (
    <Box pt="20px" maxHeight="400px" overflow="auto">
      {children}
    </Box>
  ) : null;
}

const TabsDefault = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab label="Описание" />
        <Tab label="Характеристики" />
        <Tab label="Отзывы" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="subtitle1">
          Ac felis donec et odio pellentesque diam. Adipiscing commodo elit at
          imperdiet. Ut sem nulla pharetra diam sit amet nisl suscipit
          adipiscing. Nibh venenatis cras sed felis eget velit aliquet sagittis
          id. Faucibus in ornare quam viverra orci. Mi tempus imperdiet nulla
          malesuada pellentesque elit eget gravida cum. Natoque penatibus et
          magnis dis parturient. Dignissim cras tincidunt lobortis feugiat
          vivamus at.
        </Typography>

        <Typography variant="h4" className="currency">
          {formatter.format(22500)}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ParamsTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </TabPanel>
    </>
  );
};

export const Product = () => {
  return (
    <MainTanplate canSlider={false} stick>
      <ProductWrapper>
        <Typography textAlign="center" variant="h4">
          Кровать металлическая Диана Lux plus 1400x2000
        </Typography>

        <Paper elevation={3} sx={{ p: "10px" }}>
          <Grid container>
            <Grid item xs={4}>
              <img src={cart1} alt="cart" width="100%" />
            </Grid>
            <Grid item xs={8}>
              <TabsDefault />
            </Grid>
          </Grid>
        </Paper>

        <Box mt="30px">
          <Button
            size="md"
            variant="outlined"
            color="secondary2"
            endIcon={<StarBorder />}
          >
            В избранное
          </Button>
          <Button
            size="md"
            variant="outlined"
            color="secondary2"
            endIcon={<AddShoppingCart />}
          >
            В корзину
          </Button>
        </Box>
      </ProductWrapper>
    </MainTanplate>
  );
};
