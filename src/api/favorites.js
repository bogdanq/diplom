import { child, ref, set, get } from "firebase/database";
import { database } from "./firebase";
import { productsAPI } from "./products";

// Запос для получения данных внутри лругих щапросов
const getFavoriteProductForFavorite = async (email) => {
  if (!email) {
    return [];
  }

  const cart = await get(
    child(ref(database), `favorite/${email?.split("@")[0]}`)
  );

  return Object.values(cart.val()?.items || {});
};

const addProductToFavorite = async ({ product, email }) => {
  const items = await getFavoriteProductForFavorite(email);

  const params = {
    email,
    items: [
      ...items,
      {
        productId: product.id,
        productType: product.type,
      },
    ],
  };

  return set(child(ref(database), `favorite/${email?.split("@")[0]}`), params);
};

const getFavoriteProducts = async (email) => {
  if (!email) {
    return [];
  }

  const favorite = await get(
    child(ref(database), `favorite/${email?.split("@")[0]}`)
  );

  const items = Object.values(favorite.val()?.items || {});

  const result = await Promise.all(
    items.map((item) => {
      return productsAPI.getProductByTypeAndId(
        item.productType,
        item.productId
      );
    })
  );

  return result;
};

const removeProductFromFavorite = async (p) => {
  try {
    const { productId, email } = p;
    const items = await getFavoriteProductForFavorite(email, productId);

    let nextItems = items.filter((item) => item.productId !== productId);

    const params = {
      email,
      items: nextItems,
    };

    if (!nextItems.length) {
      return await set(
        child(ref(database), `favorite/${email?.split("@")[0]}`),
        {}
      );
    }

    return await set(
      child(ref(database), `favorite/${email?.split("@")[0]}`),
      params
    );
  } catch (e) {
    console.log("removeProductFromCart", e);
  }
};

const removeAllProductFromFavorite = (email) => {
  return set(child(ref(database), `favorite/${email?.split("@")[0]}`), {});
};

export const favoriteAPI = {
  removeAllProductFromFavorite,
  removeProductFromFavorite,
  getFavoriteProducts,
  addProductToFavorite,
};

setTimeout(() => {
  // favoriteAPI.getFavoriteProducts("root@mail.ru");
  // favoriteAPI.removeProductFromFavorite({
  //   productId: "2IN229GNcyiK_UWlcQkup",
  //   email: "root@mail.ru",
  // });
  // favoriteAPI.addProductToFavorite(
  //   { id: "2IN229GNcyiK_UWlcQkup222", type: "other" },
  //   "root@mail.ru"
  // );
  // favoriteAPI.addProductToFavorite({
  //   product: { id: "2IN229GNcyiK_UWlcQkup222", type: "other" },
  //   email: "root@mail.ru",
  // });
  // favoriteAPI.addProductToFavorite({
  //   product: { id: "2IN229GNcyiK_UWlcQkup", type: "other" },
  //   email: "root@mail.ru",
  // });
}, 500);
