import { renderListItem } from "./render.js";
import { addTask } from "./addTask.js";
import { changeStateChecked } from "./changeChecked.js";
import { deleteTaskView } from "./deleteTask.js";
import { updateLocalStorage } from "./storage.js";
import { multiPageRender } from "./eventLocalStorage.js";

document.addEventListener("DOMContentLoaded", () => {
  updateLocalStorage().then(() => {
    renderListItem();
  });

  document.addEventListener("click", addTask);
  document.addEventListener("keydown", addTask);
  document.addEventListener("change", changeStateChecked);
  document.addEventListener("click", deleteTaskView);
  
  window.addEventListener("storage", multiPageRender);
});
