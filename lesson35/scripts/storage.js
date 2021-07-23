import { getTasksList } from "./tasksGateway.js";

export const createNewTask = (task) => {
  if (localStorage.getItem("tasks")) {
    const newTasks = JSON.parse(localStorage.getItem("tasks"));
    newTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  } else {
    localStorage.setItem("tasks", JSON.stringify([task]));
  }
};

export const updateLocalTask = (tasks, taskIndex) => {
  tasks[taskIndex] = tasks;
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};

export const updateLocalStorage = () => {
  getTasksList().then((list) => {
    localStorage.setItem("tasks", JSON.stringify(list));
  });
};
