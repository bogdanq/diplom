import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Typography, Divider, Button } from "@mui/material";
import { AddShoppingCart, StarBorder } from "@mui/icons-material";
import { formatter } from "../features/common";
import cart1 from "../assets/cart1.jpeg";

const CartWrapper = styled("div")`
  width: 100%;
  margin-top: 50px;
  border: 1px solid #7d7d7d;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 5px 8px 5px rgb(0 0 0 / 16%);
  }

  & h6 {
    color: #622a0c;
    padding: 0 10px;
  }

  & h4 {
    color: #e50000;
    padding: 0 10px;
    margin-bottom: 50px;
  }

  & p {
    display: block;
    padding: 0 10px;
    padding-top: 15px;
    margin-bottom: 30px;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ItemCart = ({ typeProduct = "other" }) => {
  const navigate = useNavigate();
  const { type = typeProduct } = useParams();

  return (
    <CartWrapper onClick={() => navigate(`/catalog/${type}/1231231`)}>
      <img src={cart1} alt="cart" width="100%" />

      <Typography variant="h6">
        Кровать металлическая Диана Lux plus 1400x2000
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      <Typography variant="h4">{formatter.format(22500)}</Typography>

      <Divider />
      <Button variant="text" color="secondary" endIcon={<AddShoppingCart />}>
        В корзину
      </Button>
      <Button variant="text" color="secondary" endIcon={<StarBorder />}>
        В избранное
      </Button>
    </CartWrapper>
  );
};
