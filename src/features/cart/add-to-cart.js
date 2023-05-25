import { Button, Tooltip } from "@mui/material";
import { useStore } from "effector-react";
import { $cart, addProductToCartFx, removeProductFromCartFx } from "./model";
import { $user } from "../auth/model";
import {
  AddShoppingCart,
  RemoveCircleOutline,
  InfoOutlined,
} from "@mui/icons-material";

export const AddToCart = ({ id, type, variant }) => {
  const cart = useStore($cart);
  const user = useStore($user);

  const isCartIncludes = cart?.find((item) => item.id === id);

  const toggleCartItem = () => {
    if (isCartIncludes) {
      removeProductFromCartFx({
        productId: id,
        email: user.email,
        canAllRemove: true,
      });

      return;
    }

    addProductToCartFx({
      product: { id, type },
      email: user.email,
    });
  };

  if (variant) {
    return (
      <>
        {!user && (
          <Tooltip
            title={user ? "" : "Для добавления в корзину необходимо войти"}
          >
            <InfoOutlined
              style={{ display: "inline-block", marginRight: "15px" }}
            />
          </Tooltip>
        )}
        <Button
          size="md"
          variant="outlined"
          color="secondary2"
          onClick={toggleCartItem}
          disabled={!user}
          endIcon={
            isCartIncludes ? <RemoveCircleOutline /> : <AddShoppingCart />
          }
        >
          {isCartIncludes ? "Удалить из корзины" : "В корзину"}
        </Button>
      </>
    );
  }

  return (
    <>
      {!user && (
        <Tooltip
          title={user ? "" : "Для добавления в корзину необходимо войти"}
        >
          <InfoOutlined
            style={{ display: "inline-block", marginRight: "15px" }}
          />
        </Tooltip>
      )}
      <Button
        variant="text"
        color="secondary"
        onClick={toggleCartItem}
        disabled={!user}
        endIcon={isCartIncludes ? <RemoveCircleOutline /> : <AddShoppingCart />}
      >
        {isCartIncludes ? "Удалить из корзины" : "В корзину"}
      </Button>
    </>
  );
};
