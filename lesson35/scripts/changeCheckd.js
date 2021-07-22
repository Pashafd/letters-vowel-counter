import { updateTask, getTasksList } from "./tasksGateway.js";

export const changeStateChecked = async (event) => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox");

  if (isCheckbox) {
    const tasks = await getTasksList();

    const elem = event.target.closest(".list__item");
    elem.classList.toggle("list__item_done");

    const taskId = elem.dataset.id;

    let index = tasks.findIndex((item) => item.id == taskId);

    tasks[index].done = !tasks[index].done;

    await updateTask(taskId, tasks[index]);
  }
};
