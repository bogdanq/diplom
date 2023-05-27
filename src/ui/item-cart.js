import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Divider, Box } from "@mui/material";
import Highlighter from "react-highlight-words";
import { formatter } from "../features/common";
import { AddToCart } from "../features/cart";
import { AddToFavorite } from "../features/favorite";

const CartWrapper = styled("div")`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: inherit;
  justify-content: space-around;
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

export const ItemCart = ({
  id,
  name,
  description,
  price,
  img,
  type: t,
  value,
}) => {
  const navigate = useNavigate();
  const { type: pt } = useParams();

  const type = pt || t;

  return (
    <CartWrapper>
      <div
        onClick={() => navigate(`/catalog/${type}/${id}`)}
        style={{ width: "100%" }}
      >
        <img src={img} alt="cart" width="100%" height={200} />

        <Typography variant="h6">
          <Highlighter
            searchWords={[value]}
            autoEscape={true}
            textToHighlight={name}
          />
        </Typography>

        <Typography>
          <Highlighter
            searchWords={[value]}
            autoEscape={true}
            textToHighlight={description}
          />
        </Typography>
        <Typography variant="h4">{formatter.format(price)}</Typography>
      </div>

      <div>
        <Divider />
        <Box
          mt="30px"
          style={{
            display: "flex",
            alignItems: "center",
            height: "10px",
            paddingLeft: "10px",
          }}
        >
          <AddToCart id={id} type={type} />
        </Box>
        <Box
          mt="30px"
          style={{
            display: "flex",
            alignItems: "center",
            height: "10px",
            paddingLeft: "10px",
          }}
        >
          <AddToFavorite id={id} type={type} />
        </Box>
      </div>
    </CartWrapper>
  );
};
