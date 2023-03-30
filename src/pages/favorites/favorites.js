import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { FavoriteBorder, ContentCopy } from "@mui/icons-material";
import styled from "styled-components";
import { MainHeader } from "../../ui";
import cart1 from "../../assets/cart1.jpeg";

const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});

const Actions = styled(Box)`
  position: sticky;
  height: 100px;
  background-color: #fff;
  width: 100%;
  bottom: 0;
`;

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

const actions = [
  { title: "Оформить заказ" },
  { title: "Удалить все" },
  { title: "Добавить все в корзину" },
];

const Card = () => {
  return (
    <Grid container item xs={12}>
      <CartWrapper>
        <Box display="flex" width="70%" alignItems="center">
          <img src={cart1} alt="cart" width="100%" />
          <Box>
            <Typography variant="h6">
              Кровать металлическая Диана Lux plus 1400x2000
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              mt="20px"
              color="#4e4e4e96"
              style={{ cursor: "pointer" }}
            >
              <ContentCopy style={{ height: 15 }} />
              <Typography variant="subtitle2">123124</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          width="15%"
          justifyContent="space-around"
          alignItems="center"
        >
          <Button variant="outlined" color="secondary">
            в корзине
          </Button>

          <IconButton type="button">
            <FavoriteBorder />
          </IconButton>
        </Box>

        <Typography fontWeight="bold">{formatter.format(2200)}</Typography>
      </CartWrapper>
    </Grid>
  );
};

export const Favorites = () => {
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
            4 товара на сумму:
            <span style={{ textDecoration: "underline" }}>
              {formatter.format(2200)}
            </span>
          </Typography>
        </Box>

        <Box mt="50px">
          <Card />
          <Card />
          <Card />
          <Card />
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
