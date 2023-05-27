import { useStore } from "effector-react";
import { combine } from "effector";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { ItemCart, subMenu, NonProductsStub, Spinner } from "../../ui";
import { MainTanplate } from "../../ui/templates";
import { useEffect, useState } from "react";
import { $pending, $products, getProductsListByTypeFx } from "./model";

const $state = combine({
  products: $products,
  pending: $pending,
});

export const Catalog = () => {
  const { pathname } = useLocation();
  const { type } = useParams();

  const [order, setOrder] = useState("default");

  const { products, pending } = useStore($state);

  const menu = subMenu.find((i) => i.link === pathname);

  const productsByType = products[type];

  useEffect(() => {
    if (type && !productsByType?.length) {
      getProductsListByTypeFx(type);
    }
  }, [type, productsByType]);

  let ordered = productsByType;

  if (order === "desc") {
    ordered = [...productsByType].sort((a, b) => a.price - b.price);
  }

  if (order === "ask") {
    ordered = [...productsByType].sort((a, b) => b.price - a.price);
  }

  if (order === "default") {
    ordered = productsByType;
  }

  return (
    <MainTanplate canSlider={false} stick>
      {pending ? (
        <Spinner />
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle1" mr="20px">
              Сортировать по цене:
            </Typography>

            <Select
              value={order}
              onChange={(e) => {
                setOrder(e.target.value);
              }}
            >
              <MenuItem value="default">По умолчанию</MenuItem>
              <MenuItem value="desc">По возрастанию</MenuItem>
              <MenuItem value="ask">По убыванию</MenuItem>
            </Select>
          </div>

          <Typography textAlign="center" variant="h4">
            {menu.title}
          </Typography>

          <Typography variant="subtitle1" mt="50px">
            {menu?.desc}
          </Typography>

          {!productsByType && (
            <NonProductsStub
              title={`Товаров категории ${type} - нет в наличии`}
            />
          )}

          {productsByType && (
            <>
              <Grid container wrap="wrap" spacing={2}>
                {ordered?.map((product) => {
                  return (
                    <Grid key={product.id} item>
                      <ItemCart {...product} />
                    </Grid>
                  );
                })}
              </Grid>

              {productsByType?.length > 10 && (
                <Box mt="30px">
                  <Button size="md" variant="outlined" color="secondary2">
                    Показать еще
                  </Button>
                </Box>
              )}
            </>
          )}
        </>
      )}
    </MainTanplate>
  );
};
