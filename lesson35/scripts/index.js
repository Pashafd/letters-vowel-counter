import { renderListItem } from "./render.js";
import { addTask } from "./addTask.js";
import { changeStateChecked } from "./changeCheckd.js";
import { deleteTaskView } from "./deleteTask.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  await renderListItem();

  document.addEventListener("click", addTask);
  document.addEventListener("change", changeStateChecked);
  document.addEventListener("click", deleteTaskView);
});
