import { createEffect, createEvent, createStore, forward } from "effector";
import { searchApi } from "../../api/search";

export const handleChangeSearch = createEvent();
export const search = createEvent();

export const searchFx = createEffect(searchApi.search);

export const $searchValue = createStore("").on(handleChangeSearch, (_, v) => v);

export const $searhedProducts = createStore([]).on(
  searchFx.doneData,
  (_, d) => d
);

forward({
  from: search,
  to: searchFx,
});
