import { createStore, createEvent, createEffect, merge } from "effector";
import { getUserFx } from "./api";

export const setUser = createEvent();

export const getUserById = getUserFx;

export const logout = createEffect((redirect) => {
  if (redirect) {
    window.location.href = redirect;
  }
});

export const $user = createStore(null);

$user
  .on(setUser, (_, next) => next)
  .on(getUserById.doneData, (_, user) => user)
  .reset(merge([logout, getUserById.fail]));
