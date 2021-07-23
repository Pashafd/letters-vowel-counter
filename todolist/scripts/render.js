import { getTasksFromLocalStorage } from "./storage.js";

const listItemsElements = (list) => {
  return list.map((data) => {
    const listItem = document.createElement("li");
    const checkboxElem = document.createElement("input");
    const deleteButtonElem = document.createElement("img");
    const textElem = document.createElement("span");

    deleteButtonElem.classList.add("list__item-delete");
    listItem.classList.add("list__item");
    textElem.classList.add("list__item-text")
    checkboxElem.setAttribute("type", "checkbox");

    textElem.textContent = data.text;
    deleteButtonElem.src = "./img/makefg.png";

    listItem.dataset.id = data.id;

    listItem.append(checkboxElem);
    listItem.append(textElem);
    listItem.append(deleteButtonElem);

    checkboxElem.classList.add("list__item-checkbox");

    if (data.done) {
      listItem.classList.add("list__item_done");
      checkboxElem.checked = true;
    }

    return listItem;
  });
};

export const renderListItem = () => {
  const list = getTasksFromLocalStorage();

  const listElement = document.querySelector(".list");
  listElement.innerHTML = "";

  const tasks = listItemsElements(list);
  listElement.append(...tasks);
};
