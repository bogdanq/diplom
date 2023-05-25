import { useEffect, useState } from "react";
import { combine } from "effector";
import { useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { Box, Button, Grid, Paper, Typography, Tabs, Tab } from "@mui/material";
import { AddShoppingCart, StarBorder } from "@mui/icons-material";
import styled from "styled-components";
import { MainTanplate } from "../../ui/templates";
import { NonProductsStub, Spinner } from "../../ui";
import cart1 from "../../assets/cart1.jpeg";
import { ParamsTable, Comments } from "../../features/product";
import { formatter } from "../../features/common";
import { $pending, $product, getProductByIdFx } from "./model";
import { AddToCart } from "../../features/cart";
import { AddToFavorite } from "../../features/favorite";

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

function TabPanel({ children, value, index }) {
  return value === index ? (
    <Box pt="20px" maxHeight="400px" overflow="auto">
      {children}
    </Box>
  ) : null;
}

const TabsDefault = ({ description, price, params }) => {
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
        <Typography variant="subtitle1">{description}</Typography>

        <Typography variant="h4" className="currency">
          {formatter.format(price)}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ParamsTable {...params} />
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

const $state = combine({
  product: $product,
  pending: $pending,
});

export const Product = () => {
  const { id, type } = useParams();

  const { product, pending } = useStore($state);

  useEffect(() => {
    if (type && id) {
      getProductByIdFx({ type, id });
    }
  }, [type, id]);

  return (
    <MainTanplate canSlider={false} stick>
      {pending ? (
        <Spinner />
      ) : (
        <>
          {product ? (
            <ProductWrapper>
              <Typography textAlign="center" variant="h4">
                {product.name}
              </Typography>

              <Paper elevation={3} sx={{ p: "10px" }}>
                <Grid container>
                  <Grid item xs={4}>
                    <img src={product.img} alt="cart" width="100%" />
                  </Grid>
                  <Grid item xs={8}>
                    <TabsDefault {...product} />
                  </Grid>
                </Grid>
              </Paper>

              <Box mt="30px" style={{ display: "flex", alignItems: "center" }}>
                <AddToFavorite id={id} type={type} variant="second" />

                <AddToCart id={id} type={type} variant="second" />
              </Box>
            </ProductWrapper>
          ) : (
            <NonProductsStub title={`Такого товара не существует`} />
          )}
        </>
      )}
    </MainTanplate>
  );
};
