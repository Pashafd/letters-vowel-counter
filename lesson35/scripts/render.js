import { getTasksList } from "./tasksGateway.js";

const listItemsElements = (list) => {
  return list.map((data) => {
    const listItem = document.createElement("li");
    const checkboxElem = document.createElement("input");
    const deleteButtonElem = document.createElement("button");

    deleteButtonElem.classList.add("list__item-delete");
    checkboxElem.setAttribute("type", "checkbox");

    listItem.classList.add("list__item");
    listItem.dataset.id = data.id;

    listItem.textContent = data.text;
    deleteButtonElem.textContent = "X";
    listItem.append(checkboxElem);
    listItem.append(deleteButtonElem);

    checkboxElem.classList.add("list__item-checkbox");

    if (data.done) {
      listItem.classList.add("list__item_done");
      checkboxElem.checked = true;
    }

    return listItem;
  });
};

export const renderListItem = async () => {
  const list = await getTasksList();

  const listElement = document.querySelector(".list");
  listElement.innerHTML = "";

  const tasks = listItemsElements(list);
  listElement.append(...tasks);
};
