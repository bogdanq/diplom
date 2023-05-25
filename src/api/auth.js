import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { child, ref, set, get } from "firebase/database";
import { database, auth } from "./firebase";

const createUser = async (user) => {
  const created = await createUserWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );

  await set(child(ref(database), `users/${created.user.uid}`), user);

  return created.user.uid;
};

const signIn = async (user) => {
  return signInWithEmailAndPassword(auth, user.email, user.password);
};

const getUserById = async (id) => {
  const user = await get(child(ref(database), `users/${id}`));

  return user.val();
};

export const userAPI = { createUser, getUserById, signIn };
