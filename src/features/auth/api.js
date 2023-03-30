import { createEffect } from "effector";
import { userAPI } from "../../api/auth";

export const getUserFx = createEffect(async (id) => {
  const user = await userAPI.getUserById(id);

  return user;
});
