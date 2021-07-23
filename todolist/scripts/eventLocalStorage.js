import { renderListItem } from "./render.js";
export const multiPageRender = (e) => {
  renderListItem(JSON.parse(localStorage.getItem("tasks")));
};
