import { createEffect, createStore, attach } from "effector";
import { cartAPI } from "../../api/cart";

export const getCartProductsFx = createEffect(cartAPI.getCartProducts);
export const removeAllCartFx = createEffect(cartAPI.removeAllProductFromCart);
export const addProductToCartFx = attach({
  effect: createEffect(cartAPI.addProductToCart),
});
export const removeProductFromCartFx = attach({
  effect: createEffect(cartAPI.removeProductFromCart),
});
export const removeProductFromCartByCountFx = attach({
  effect: createEffect(cartAPI.removeProductFromCart),
});

export const $cart = createStore(null)
  .on(getCartProductsFx.done, (_, cart) => {
    return cart.result;
  })
  .on(removeProductFromCartFx.done, (cart, { params }) => {
    return cart.filter((item) => item.id !== params?.productId);
  })
  .on(removeProductFromCartByCountFx.done, (cart, { params }) => {
    return cart.map((item) =>
      item.id === params?.productId ? { ...item, count: item.count - 1 } : item
    );
  })
  .on(addProductToCartFx.done, (cart, { params }) => {
    const hasInCart = cart.find((item) => item.id === params.product.id);

    if (hasInCart) {
      return cart.map((item) =>
        item.id === params.product.id
          ? { ...item, count: item.count + 1 }
          : item
      );
    }

    return [
      ...cart,
      {
        id: params.product.id,
        type: params.product.type,
        count: 1,
      },
    ];
  })
  .on(removeAllCartFx.done, (cart, { params }) => {
    return null;
  });

export const $pending = getCartProductsFx.pending;
export const $pendingAllRemove = removeAllCartFx.pending;
export const $pendingItemRemove = removeProductFromCartFx.pending;
export const $pendingRemoveByCount = removeProductFromCartByCountFx.pending;
export const $pendingAddProductToCart = addProductToCartFx.pending;

export const $cartInfo = $cart.map((cart) => {
  return cart
    ? cart?.reduce(
        (acc, item) => {
          acc.count += item.count;
          acc.price += item.price * item.count;

          return acc;
        },
        { count: 0, price: 0 }
      )
    : null;
});

// setTimeout(() => {
//   // cartAPI.getCartProducts("root@mail.ru");
//   // cartAPI.removeProductFromCart("2IN229GNcyiK_UWlcQkup", "root@mail.ru");
//   // cartAPI.addProductToCart(
//   //   { id: "2IN229GNcyiK_UWlcQkup222", type: "other" },
//   //   "root@mail.ru"
//   // );
//   cartAPI.addProductToCart({
//     product: { id: "2IN229GNcyiK_UWlcQkup222", type: "other" },
//     email: "root@mail.ru",
//   });
//   // cartAPI.addProductToCart(
//   //   { id: "2IN229GNcyiK_UWlcQkup", type: "other" },
//   //   "root@mail.ru"
//   // );
// }, 500);
