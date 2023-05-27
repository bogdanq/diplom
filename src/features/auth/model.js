import { createStore, createEvent, createEffect, merge } from "effector";
import { getUserFx } from "./api";
import { userAPI } from "../../api/auth";
import { toast } from "react-toastify";

export const setUser = createEvent();

export const getUserById = getUserFx;

export const updateUsersFx = createEffect(userAPI.updateUser);

export const logout = createEffect((redirect) => {
  if (redirect) {
    window.location.href = redirect;
  }
});

export const $user = createStore(null);

$user
  .on(setUser, (_, next) => next)
  .on(getUserById.doneData, (_, user) => user)
  .on(updateUsersFx.done, (_, { params }) => params)
  .reset(merge([logout, getUserById.fail]));

updateUsersFx.done.watch(() => {
  toast.success("Данные сохранены");
});
