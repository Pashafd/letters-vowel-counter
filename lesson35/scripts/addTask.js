import { createTask } from "./tasksGateway.js";
import { renderListItem } from "./render.js";

export const addTask = async (event) => {
  const isAddTaskBtn = event.target.classList.contains("create-task-btn");

  if (isAddTaskBtn) {
    const input = document.querySelector(".task-input");

    if (input.value.trim().length > 0) {
      const newTask = {
        text: input.value,
        date: new Date(),
        done: false,
      };

      input.value = "";

      await createTask(newTask);

      await renderListItem();
    }
  }
};
