import { createEffect, createStore } from "effector";
import { productsAPI } from "../../api/products";

export const getProductsListByTypeFx = createEffect(
  productsAPI.getProductsListByType
);

export const $products = createStore({}).on(
  getProductsListByTypeFx.done,
  (products, { params, result }) => {
    return { ...products, [params]: result };
  }
);

export const $pending = getProductsListByTypeFx.pending;
