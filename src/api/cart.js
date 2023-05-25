import { child, ref, set, get } from "firebase/database";
import { database } from "./firebase";
import { productsAPI } from "./products";

const getCartProductsForCart = async (email) => {
  if (!email) {
    return [];
  }

  const cart = await get(child(ref(database), `cart/${email?.split("@")[0]}`));

  return Object.values(cart.val()?.items || {});
};

const addProductToCart = async ({ product, email }) => {
  const items = await getCartProductsForCart(email);

  const hasProductInCart = items.find((item) => item.productId === product.id);

  const params = {
    email,
    items: hasProductInCart
      ? items.map((item) =>
          item.productId === product.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      : [
          ...items,
          {
            productId: product.id,
            productType: product.type,
            count: 1,
          },
        ],
  };

  return set(child(ref(database), `cart/${email?.split("@")[0]}`), params);
};

const getCartProducts = async (email) => {
  if (!email) {
    return [];
  }

  const cart = await get(child(ref(database), `cart/${email?.split("@")[0]}`));

  const items = Object.values(cart.val()?.items || {});

  const result = await Promise.all(
    items.map((item) => {
      return productsAPI.getProductByTypeAndId(
        item.productType,
        item.productId
      );
    })
  );

  const mapped = result.map((item, index) => ({
    ...item,
    count: items[index]?.count || 0,
  }));

  return mapped;
};

const removeProductFromCart = async (p) => {
  try {
    const { productId, email, canAllRemove } = p;
    const items = await getCartProductsForCart(email, productId);

    const canRemoveFromCart =
      items.find((item) => item.productId === productId)?.count === 1;

    let nextItems = [];

    if (canRemoveFromCart || canAllRemove) {
      nextItems = items.filter((item) => item.productId !== productId);
    } else {
      nextItems = items.map((item) =>
        item.productId === productId ? { ...item, count: item.count - 1 } : item
      );
    }

    const params = {
      email,
      items: nextItems,
    };

    if (!nextItems.length) {
      return await set(
        child(ref(database), `cart/${email?.split("@")[0]}`),
        {}
      );
    }

    return await set(
      child(ref(database), `cart/${email?.split("@")[0]}`),
      params
    );
  } catch (e) {
    console.log("removeProductFromCart", e);
  }
};

const removeAllProductFromCart = async (email) => {
  return set(child(ref(database), `cart/${email?.split("@")[0]}`), {});
};

export const cartAPI = {
  addProductToCart,
  getCartProducts,
  removeProductFromCart,
  getCartProductsForCart,
  removeAllProductFromCart,
};

setTimeout(() => {
  // cartAPI.getCartProducts("root@mail.ru");
  // cartAPI.removeProductFromCart("2IN229GNcyiK_UWlcQkup", "root@mail.ru");
  // cartAPI.addProductToCart(
  //   { id: "2IN229GNcyiK_UWlcQkup222", type: "other" },
  //   "root@mail.ru"
  // );
  // cartAPI.addProductToCart({
  //   product: { id: "2IN229GNcyiK_UWlcQkup222", type: "other" },
  //   email: "root@mail.ru",
  // });
  // cartAPI.addProductToCart({
  //   product: { id: "2IN229GNcyiK_UWlcQkup", type: "other" },
  //   email: "root@mail.ru",
  // });
}, 500);
