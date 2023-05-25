import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { MainHeader, NonProductsStub, Spinner } from "../../ui";
import { formatter } from "../../features/common";
import { CardFavorite } from "../../features/favorite/card";
import { useFavorite } from "../../features/favorite/hooks/useFavorite";
import { Link } from "react-router-dom";
import { getNoun } from "../../features/utils";
import { useStore } from "effector-react";
import { combine } from "effector";
import { $user } from "../../features/auth/model";
import { $pendingAllRemove } from "../../features/favorite";

const Actions = styled(Box)`
  position: sticky;
  height: 100px;
  background-color: #fff;
  width: 100%;
  bottom: 0;
`;

const actions = [
  { title: "Оформить заказ" },
  { title: "Удалить все" },
  { title: "Добавить все в корзину" },
];

const $state = combine({
  user: $user,
  pendingAllRemove: $pendingAllRemove,
});

export const Favorites = () => {
  const { user, pendingAllRemove } = useStore($state);
  const { favorite, pending, favoriteInfo } = useFavorite();

  if (pending || !favorite?.length) {
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
                  <NonProductsStub title="Товары в избранное еще не добавлены" />
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
            {favoriteInfo.count}{" "}
            {getNoun(favoriteInfo.count, "товар", "товара", "товаров")} на
            сумму:
            <span style={{ textDecoration: "underline" }}>
              {formatter.format(favoriteInfo.price)}
            </span>
          </Typography>
        </Box>

        <Box mt="50px">
          {favorite.map((item) => (
            <CardFavorite key={item.id} {...item} user={user} isLink />
          ))}
        </Box>
      </Box>

      <Actions>
        <Divider />
        <Grid container justifyContent="space-between" mt="30px" wrap="wrap">
          {actions.map((i, idx) => (
            <Grid container item xs={4} key={idx} justifyContent="center">
              <Button
                style={{
                  height: "40px",
                  background: "#622a0c",
                  width: "250px",
                }}
                variant="contained"
              >
                {i.title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Actions>
    </Box>
  );
};
