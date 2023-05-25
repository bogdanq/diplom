import { Button, Tooltip } from "@mui/material";
import { useStore } from "effector-react";
import {
  $favorite,
  addProductToFavoriteFx,
  removeProductFromFavoriteFx,
  $pendingAddProductToFavorite,
  $pendingItemRemove,
} from "./model";
import { $user } from "../auth/model";
import { FavoriteBorder, InfoOutlined } from "@mui/icons-material";

export const AddToFavorite = ({ id, type, variant }) => {
  const favorite = useStore($favorite);
  const user = useStore($user);
  const pendingAddProductToFavorite = useStore($pendingAddProductToFavorite);
  const pendingItemRemove = useStore($pendingItemRemove);

  const isFavoriteIncludes = favorite?.find((item) => {
    return item?.id === id;
  });

  const toggleFavoriteItem = () => {
    if (isFavoriteIncludes) {
      removeProductFromFavoriteFx({
        productId: id,
        email: user.email,
        canAllRemove: true,
      });

      return;
    }

    addProductToFavoriteFx({
      product: { id, type },
      email: user.email,
    });
  };

  if (variant) {
    return (
      <>
        {!user && (
          <Tooltip
            title={user ? "" : "Для добавления в избранное необходимо войти"}
          >
            <InfoOutlined
              style={{ display: "inline-block", marginRight: "15px" }}
            />
          </Tooltip>
        )}

        <Button
          size="md"
          variant="outlined"
          color="secondary2"
          disabled={!user}
          onClick={toggleFavoriteItem}
          endIcon={<FavoriteBorder />}
        >
          {isFavoriteIncludes ? "Удалить из избранного" : "В избранное"}
        </Button>
      </>
    );
  }

  return (
    <>
      {!user && (
        <Tooltip
          title={user ? "" : "Для добавления в избранное необходимо войти"}
        >
          <InfoOutlined
            style={{ display: "inline-block", marginRight: "15px" }}
          />
        </Tooltip>
      )}

      <Button
        type="button"
        variant="text"
        color="secondary"
        disabled={pendingAddProductToFavorite || pendingItemRemove || !user}
        endIcon={<FavoriteBorder />}
        onClick={toggleFavoriteItem}
      >
        {isFavoriteIncludes ? "Удалить из избранного" : "В избранное"}
      </Button>
    </>
  );
};
