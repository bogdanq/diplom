import { child, ref, set, get } from "firebase/database";
import { database } from "./firebase";
import { nanoid } from "nanoid";

const addNews = (news) => {
  const id = nanoid();
  const n = { ...news, id, date: new Date().toISOString() };

  return set(child(ref(database), `news/${id}`), n);
};

const getNews = async () => {
  const news = await get(child(ref(database), `news/`));

  return Object.values(news.val() || {});
};

export const newsAPI = {
  addNews,
  getNews,
};

setTimeout(() => {
  // addNews({ title: "Тестовая новость 1", description: "description" });
}, 500);
