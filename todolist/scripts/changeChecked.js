import { updateTask } from "./tasksGateway.js";
import { getTasksFromLocalStorage, updateLocalTask } from "./storage.js";
import { renderListItem } from "./render.js";

export const changeStateChecked = (event) => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox");

  if (isCheckbox) {
    let tasks = getTasksFromLocalStorage();
    const elem = event.target.closest(".list__item");
    const taskId = elem.dataset.id;
    let index = tasks.findIndex((item) => item.id == taskId);

    elem.classList.toggle("list__item_done");

    tasks[index].done = !tasks[index].done;

    updateLocalTask(tasks, tasks[index]);
    updateTask(taskId, tasks[index]);
    renderListItem();
  }
};
