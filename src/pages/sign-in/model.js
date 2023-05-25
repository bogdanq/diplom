import { createEffect } from "effector";
import { toast } from "react-toastify";
import { userAPI } from "../../api/auth";

export const signinFx = createEffect((user) => userAPI.signIn(user));
export const signupFx = createEffect((user) => userAPI.createUser(user));

signinFx.fail.watch(() => {
  toast.error("Ошибка при входе");
});

signupFx.fail.watch(() => {
  toast.error("Ошибка при регистрации");
});
