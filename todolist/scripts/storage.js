import { getTasksList } from "./tasksGateway.js";

export const createNewTask = (task) => {
  if (localStorage.getItem("tasks")) {
    const newTasks = JSON.parse(localStorage.getItem("tasks"));
    newTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  } else {
    getTasksList().then((list) => {
      localStorage.setItem("tasks", list);
    });
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
  return getTasksList().then((list) => {
    localStorage.setItem("tasks", JSON.stringify(list));
  });
};
