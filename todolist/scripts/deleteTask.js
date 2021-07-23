import { deleteTask } from "./tasksGateway.js";
import { updateLocalStorage } from "./storage.js";

export const deleteTaskView = (event) => {
  const isDeleteButton = event.target.classList.contains("list__item-delete");

  if (isDeleteButton) {
    const elem = event.target.closest(".list__item");
    const taskId = elem.dataset.id;

    elem.remove();
    deleteTask(taskId).then(() => {
      updateLocalStorage();
    });
  }
};
