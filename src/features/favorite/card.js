import { Box, Grid, Typography } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import styled from "styled-components";
import cart1 from "../../assets/cart1.jpeg";
import { formatter } from "../../features/common";
import { $pendingItemRemove } from "./model";
import { useStore } from "effector-react";
import { AddToCart } from "../cart";
import { AddToFavorite } from "./add-to-favorite";
import { Link } from "react-router-dom";

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

export const CardFavorite = ({ name, price, id, img, type, isLink }) => {
  const pending = useStore($pendingItemRemove);

  return (
    <Grid container item xs={12}>
      <CartWrapper>
        <Box display="flex" width="70%" alignItems="center">
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

        <Box
          display="flex"
          width="45%"
          justifyContent="space-around"
          alignItems="center"
        >
          <AddToCart id={id} type={type} />

          <AddToFavorite id={id} type={type} />
        </Box>

        <Typography fontWeight="bold">{formatter.format(price)}</Typography>
      </CartWrapper>
    </Grid>
  );
};
