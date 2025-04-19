"use strict";

//Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами.
//  Якщо відбувається клік на якійсь із клітинок, то до відповідної
// таблиці додається червона рамка (спробуйте додати можливість відображення
// кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).

class Table {
  constructor(numTr = 3, numTd = 3, numTable = 3, minNum = 1, maxNum = 10) {
    this.numTd = numTd;
    this.numTr = numTr;
    this.numTable = numTable;
    this.minNum = minNum;
    this.maxNum = maxNum;
  }
  randomNum() {
    if (this.minNum > this.maxNum)
      [this.minNum, this.maxNum] = [this.maxNum, this.minNum];
    return (
      this.minNum + Math.floor(Math.random() * (this.maxNum - this.minNum + 1))
    );
  }
  renderTable() {
    const table = document.createElement("table");
    table.className = "table";
    for (let indTr = 0; indTr < this.numTr; indTr++) {
      const row = document.createElement("tr");
      table.append(row);
      for (let indTd = 0; indTd < this.numTd; indTd++) {
        const column = document.createElement("td");
        row.append(column);
        column.innerText = this.randomNum();
      }
    }
    return table;
  }
  changeBorder(e) {
    if (e.target.closest("td")) {
      e.target.closest(".table").style.borderColor = "red";
    }
  }
  calculationClick(e) {
    if (e.target.closest("td")) {
      const table = e.target.closest(".table");
      let count = parseInt(table.dataset.count);
      table.dataset.count = count + 1;
      const spanEl = document.getElementById(`${table.id}span`);
      if (spanEl) spanEl.innerText = table.dataset.count;
    }
  }

  renderHeader(num) {
    const elH2 = document.createElement("h2");
    elH2.innerText = `Кількість click по таблиці #${num}: `;
    const spanEl = document.createElement("span");
    spanEl.setAttribute("id", `table${num}span`);
    spanEl.innerText = "0";
    elH2.append(spanEl);
    return elH2;
  }

  render(selector) {
    const containerTable = document.createElement("div");
    containerTable.className = "table-list";
    for (let i = 0; i < this.numTable; i++) {
      const divEl = document.createElement("div");
      const table = this.renderTable();
      table.setAttribute("data-count", "0");
      table.setAttribute("id", `table${i + 1}`);
      divEl.append(table);
      const elH2 = this.renderHeader(i + 1);
      divEl.prepend(elH2);
      containerTable.append(divEl);
    }
    if (selector) {
      selector.addEventListener("click", this.calculationClick.bind(this));
      selector.addEventListener("click", this.changeBorder.bind(this));
      selector.append(containerTable);
    }
    return containerTable;
  }
}

const tableList = new Table();
tableList.render(document.querySelector(".table-task"));
