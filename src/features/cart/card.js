import { useStore } from "effector-react";
import { Link } from "react-router-dom";
import {
  $pendingAddProductToCart,
  $pendingItemRemove,
  $pendingRemoveByCount,
  addProductToCartFx,
  removeProductFromCartByCountFx,
  removeProductFromCartFx,
} from "./model";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import styled from "styled-components";
import { formatter } from "../common";

const CartWrapper = styled("div")`
  margin-bottom: 30px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 16%);
  padding: 10px 5px;
  border-radius: 8px;

  & img {
    width: 250px;
    height: 150px;
    margin-right: 50px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  & h6 {
    font-weight: 400;
  }
`;

export const Card = ({ name, price, count, id, user, type, img, isLink }) => {
  const pending = useStore($pendingItemRemove);
  const pendingRemoveByCount = useStore($pendingRemoveByCount);
  const pendingAddProductToCart = useStore($pendingAddProductToCart);

  return (
    <Grid container item xs={12}>
      <CartWrapper>
        <Box display="flex" width="60%" alignItems="center">
          <img src={img} alt={img} width="100%" />
          <Box>
            {isLink ? (
              <Link to={`/catalog/${type}/${id}`}>
                <Typography variant="h6">{name}</Typography>
              </Link>
            ) : (
              <Typography variant="h6">{name}</Typography>
            )}

            <Box
              display="flex"
              alignItems="center"
              mt="20px"
              color="#4e4e4e96"
              style={{ cursor: "pointer" }}
            >
              <ContentCopy style={{ height: 15 }} />
              <Typography variant="subtitle2">{id}</Typography>
            </Box>
          </Box>
        </Box>

        <Box display="flex" width="15%" justifyContent="space-around">
          <TextField
            focused={false}
            value={count}
            type="number"
            inputProps={{ inputMode: "decimal", min: 0 }}
            size="small"
            style={{ width: "90px" }}
            disabled={pendingRemoveByCount || pendingAddProductToCart}
            onChange={(e) => {
              const idx = e.target.value;
              if (idx < count) {
                removeProductFromCartByCountFx({
                  productId: id,
                  email: user.email,
                });

                return;
              }

              addProductToCartFx({
                product: { id, type },
                email: user.email,
              });
            }}
          />
          <Button
            variant="outlined"
            color="secondary"
            disabled={pending}
            onClick={() =>
              removeProductFromCartFx({
                productId: id,
                email: user.email,
                canAllRemove: true,
              })
            }
          >
            удалить
          </Button>
        </Box>

        <Typography fontWeight="bold">
          {count} x {formatter.format(price)} ={" "}
          {formatter.format(price * count)}
        </Typography>
      </CartWrapper>
    </Grid>
  );
};
