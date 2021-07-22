import { deleteTask } from "./tasksGateway.js";

export const deleteTaskView = async (event) => {
  const isDeleteButton = event.target.classList.contains("list__item-delete");

  if (isDeleteButton) {
    const elem = event.target.closest(".list__item");
    const taskId = elem.dataset.id;

    await deleteTask(taskId);
    elem.remove();
  }
};
