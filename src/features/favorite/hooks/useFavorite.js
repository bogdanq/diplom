import { useStore } from "effector-react";
import { useEffect } from "react";
import {
  $favorite,
  $favoriteInfo,
  $pending,
  getFavoriteProductsFx,
} from "../model";
import { combine } from "effector";
import { $user } from "../../auth/model";

const $state = combine({
  user: $user,
  favorite: $favorite,
  pending: $pending,
  favoriteInfo: $favoriteInfo,
});

export const useFavorite = () => {
  const { pending, user, favorite, favoriteInfo } = useStore($state);

  useEffect(() => {
    if (user?.email) {
      getFavoriteProductsFx(user.email);
    }
  }, [user?.email]);

  return { pending, favorite, favoriteInfo };
};
