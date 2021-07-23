import { renderListItem } from "./render.js";

export const multiPageRender = (e) => {
  if (e.key === "tasks") {
    const list = JSON.parse(localStorage.getItem("tasks"));
    renderListItem(list);
  }
};
