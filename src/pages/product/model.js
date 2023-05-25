import { createEffect, createStore } from "effector";
import { productsAPI } from "../../api/products";

export const getProductByIdFx = createEffect(({ type, id }) => {
  return productsAPI.getProductByTypeAndId(type, id);
});

export const $product = createStore(null).on(
  getProductByIdFx.doneData,
  (_, product) => {
    return product;
  }
);

export const $pending = getProductByIdFx.pending;
