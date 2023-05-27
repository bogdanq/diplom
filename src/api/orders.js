import { child, ref, set, get } from "firebase/database";
import { database } from "./firebase";
import { nanoid } from "nanoid";
import { cartAPI } from "./cart";

const createOrder = async ({ cart, email }) => {
  const id = nanoid();

  await set(child(ref(database), `orders/${email?.split("@")[0]}/${id}`), cart);

  cartAPI.removeAllProductFromCart(email);
};

const getOrder = async (email) => {
  const orders = await get(
    child(ref(database), `orders/${email?.split("@")[0]}`)
  );

  return Object.values(orders.val());
};

export const orderAPI = {
  createOrder,
  getOrder,
};
