import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { combine } from "effector";
import { useStore } from "effector-react";

import styled from "styled-components";
import { NonProductsStub, Spinner, MainHeader, Link } from "../../ui";
import { $user } from "../../features/auth/model";
import { getNoun } from "../../features/utils";

import {
  Card,
  $pendingAllRemove,
  removeAllCartFx,
  useCart,
} from "../../features/cart";
import { formatter } from "../../features/common";

const Actions = styled(Box)`
  position: sticky;
  height: 100px;
  background-color: #fff;
  width: 100%;
  bottom: 0;
`;

const $state = combine({
  user: $user,
  pendingAllRemove: $pendingAllRemove,
});

export const Cart = () => {
  const { user, pendingAllRemove } = useStore($state);

  const { pending, cart, cartInfo } = useCart();

  if (pending || !cart?.length) {
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

            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {pending && <Spinner />}

              {!pending && (
                <>
                  <NonProductsStub title="Товары в корзину еще не добавлены" />
                  <div>
                    <Link to="/" underline>
                      Вернутся на главную
                    </Link>
                  </div>
                </>
              )}
            </Box>
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
            {cartInfo.count}{" "}
            {getNoun(cartInfo.count, "товар", "товара", "товаров")} на сумму:
            <span style={{ textDecoration: "underline" }}>
              {formatter.format(cartInfo.price)}
            </span>
          </Typography>
        </Box>

        <Box mt="50px">
          {cart.map((item) => (
            <Card key={item.id} {...item} user={user} isLink />
          ))}
        </Box>
      </Box>

      <Actions>
        <Divider />
        <Grid container justifyContent="end" mt="30px" wrap="wrap">
          <Grid container item xs={4} justifyContent="center">
            <Button
              onClick={() => removeAllCartFx(user.email)}
              disabled={pendingAllRemove}
              style={{
                height: "40px",
                background: "#622a0c",
                width: "250px",
              }}
              variant="contained"
              loading
            >
              Очистить корзину
            </Button>
          </Grid>
          <Grid container item xs={4} justifyContent="center">
            <Button
              style={{
                height: "40px",
                background: "#622a0c",
                width: "250px",
              }}
              variant="contained"
            >
              Оформить заказ
            </Button>
          </Grid>
        </Grid>
      </Actions>
    </Box>
  );
};
