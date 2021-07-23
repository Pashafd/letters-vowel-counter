import { createTask } from "./tasksGateway.js";
import { createNewTaskInLocalStorage } from "./storage.js";
import { renderListItem } from "./render.js";

export const addTask = (event) => {
  const isAddTaskBtn = event.target.classList.contains("create-task-btn");
  const isEnterBtn = event.key === "Enter";

  if (isAddTaskBtn || isEnterBtn) {
    const input = document.querySelector(".task-input");

    if (input.value.trim().length > 0) {
      const newTask = {
        text: input.value,
        date: new Date().toISOString(),
        done: false,
      };

      input.value = "";

      createNewTaskInLocalStorage(newTask);
      renderListItem();
      createTask(newTask);
    }
  }
};
