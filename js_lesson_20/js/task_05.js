"use strict";

//Задача 5. Динамічний пошук. Є список працівників і поле пошуку.
// При введенні відображаються усі, які містять вказаний фрагмент

class Search {
  constructor(label, subtitle, listName, cssObj) {
    this.label = label;
    this.subtitle = subtitle;
    this.listName = listName;
    this.cssObj = cssObj;
  }

  renderInput() {
    const inputCnt = document.createElement("div");
    inputCnt.className = this.cssObj.inputCnt;

    const label = document.createElement("label");
    label.setAttribute("for", "search");
    label.innerText = this.label;
    inputCnt.append(label);

    const input = document.createElement("input");
    input.setAttribute("id", "search");
    input.setAttribute("autocomplete", "off");
    inputCnt.append(input);

    return inputCnt;
  }
  renderTitle() {
    const title = document.createElement("h2");
    title.className = this.cssObj.subtitle;
    title.innerText = this.subtitle;

    return title;
  }

  renderItem(name) {
    const itemWorker = document.createElement("div");
    itemWorker.className = this.cssObj.itemName;
    itemWorker.innerText = name;

    return itemWorker;
  }
  search(e) {
    const target = e.target.value;
    const list = document.querySelectorAll(`.${this.cssObj.itemName}`);
    for (const name of list) {
      name.classList.add(this.cssObj.itemNone);
      if (
        name.textContent.toLowerCase().includes(target.toLowerCase().trim())
      ) {
        name.classList.remove(this.cssObj.itemNone);
      }
    }
  }
  render(selector) {
    const searchCnt = document.createElement("div");
    this.searchCnt = searchCnt;
    this.searchCnt.className = this.cssObj.searchCnt;

    const inputEl = this.renderInput();
    inputEl.addEventListener("input", this.search.bind(this));

    this.searchCnt.append(inputEl);
    this.searchCnt.append(this.renderTitle());

    for (const name of this.listName) {
      this.searchCnt.append(this.renderItem(name));
    }

    if (selector) {
      selector.append(this.searchCnt);
    }
    return this.searchCnt;
  }
}

const cssObj = {
  subtitle: "subtitle",
  itemName: "item-name",
  searchCnt: "search-cnt",
  inputCnt: "input-cnt",
  itemNone: "item-name--none",
};

const listName = [
  "Іван Петренко",
  "Олена Коваленко",
  "Михайло Шевченко",
  "Анна Бойко",
  "Василь Гриненко",
  "Марія Ткачук",
  "Олег Лисенко",
  "Юлія Мороз",
  "Андрій Кравець",
  "Наталія Дубовик",
];

const search = new Search("Ім'я", "Працівники:", listName, cssObj);
const cnt = document.querySelector(".search");
search.render(cnt);
