import { createEffect, createStore } from "effector";
import { newsAPI } from "../../api/news";

export const getNewsFx = createEffect(newsAPI.getNews);

export const $news = createStore(null).on(getNewsFx.doneData, (_, n) => n);
