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

const getUsers = async () => {
  const user = await get(child(ref(database), `users`));

  return user.val();
};

const updateUser = async (user) => {
  const users = await getUsers();

  const res = Object.entries(users).reduce((acc, [key, value]) => {
    acc[key] = value;

    if (value.email === user.email) {
      acc[key] = { ...value, ...user };
    }
    return acc;
  }, {});

  await set(child(ref(database), `users`), res);

  return user;
};

const signIn = async (user) => {
  return signInWithEmailAndPassword(auth, user.email, user.password);
};

const getUserById = async (id) => {
  const user = await get(child(ref(database), `users/${id}`));

  return user.val();
};

export const userAPI = { createUser, getUserById, signIn, updateUser };
