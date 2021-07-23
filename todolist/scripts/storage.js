import { renderListItem } from "./render.js";
import { getTasksList } from "./tasksGateway.js";

export const createNewTaskInLocalStorage = (task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const updateLocalTask = (tasks, taskIndex) => {
  tasks[taskIndex] = tasks;
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks")).sort(
    (a, b) => a.done - b.done
  );
};

export const updateLocalStorage = () => {
  return getTasksList().then((list) => {
    localStorage.setItem("tasks", JSON.stringify(list));
  });
};

export const deleteTaskFromLocalStorage = (taskId) => {
  const storage = JSON.parse(localStorage.getItem("tasks")).filter(
    (task) => task.id !== taskId
  );

  localStorage.setItem("tasks", JSON.stringify(storage));

  renderListItem();
};
