const baseUrl = "https://60f9453eee56ef0017975cfa.mockapi.io/api/v1/tasks";

export const createTask = async (taskData) => {
  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, taskData) => {
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};

export const deleteTask = (taskId) => {
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });
};

export const getTasksList = () => {
  return fetch(baseUrl).then((response) => response.json());
};
