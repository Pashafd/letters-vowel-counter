import { createTask, getTasksList } from "./tasksGateway.js";
import { createNewTask } from "./storage.js";
import { renderListItem } from "./render.js";

export const addTask = (event) => {
  const isAddTaskBtn = event.target.classList.contains("create-task-btn");

  if (isAddTaskBtn) {
    const input = document.querySelector(".task-input");

    if (input.value.trim().length > 0) {
      const newTask = {
        text: input.value,
        date: new Date().toISOString(),
        done: false,
      };

      input.value = "";

      createNewTask(newTask);
      renderListItem();
      createTask(newTask);
    }
  }
};
