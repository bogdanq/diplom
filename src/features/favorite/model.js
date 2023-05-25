import { favoriteAPI } from "../../api/favorites";

import { createEffect, createStore, attach } from "effector";

export const getFavoriteProductsFx = createEffect(
  favoriteAPI.getFavoriteProducts
);

export const removeAllFavoriteFx = createEffect(
  favoriteAPI.removeAllProductFromFavorite
);

export const addProductToFavoriteFx = attach({
  effect: createEffect(favoriteAPI.addProductToFavorite),
});

export const removeProductFromFavoriteFx = attach({
  effect: createEffect(favoriteAPI.removeProductFromFavorite),
});

export const $pending = getFavoriteProductsFx.pending;
export const $pendingAllRemove = removeAllFavoriteFx.pending;
export const $pendingItemRemove = removeProductFromFavoriteFx.pending;
export const $pendingAddProductToFavorite = addProductToFavoriteFx.pending;

export const $favorite = createStore(null)
  .on(getFavoriteProductsFx.done, (_, favorite) => {
    return favorite.result;
  })
  .on(removeProductFromFavoriteFx.done, (favorite, { params }) => {
    return favorite.filter((item) => item.id !== params?.productId);
  })
  .on(addProductToFavoriteFx.done, (favorite, { params }) => {
    return [
      ...favorite,
      {
        id: params.product.id,
        type: params.product.type,
      },
    ];
  })
  .reset(removeAllFavoriteFx.done);

export const $favoriteInfo = $favorite.map((favorite) => {
  return favorite?.reduce(
    (acc, item) => {
      acc.count += 1;
      acc.price += item.price;

      return acc;
    },
    { count: 0, price: 0 }
  );
});
