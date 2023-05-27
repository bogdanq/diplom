import { createEffect, createStore } from "effector";
import { orderAPI } from "../../api/orders";

export const getOrdersFx = createEffect(orderAPI.getOrder);

export const $orders = createStore(null).on(getOrdersFx.doneData, (_, d) => d);
