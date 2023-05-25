import { useStore } from "effector-react";
import { useEffect } from "react";
import { $cart, $pending, getCartProductsFx } from "../model";
import { combine } from "effector";
import { $user } from "../../auth/model";
import { $cartInfo } from "../model";

const $state = combine({
  user: $user,
  cart: $cart,
  pending: $pending,
  cartInfo: $cartInfo,
});

export const useCart = () => {
  const { pending, user, cart, cartInfo } = useStore($state);

  useEffect(() => {
    if (user?.email) {
      getCartProductsFx(user.email);
    }
  }, [user?.email]);

  return { pending, cart, cartInfo };
};
