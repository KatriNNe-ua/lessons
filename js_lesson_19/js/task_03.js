"use strict";

//Задача 3.  Дано 5 випадковим чином згенерованих нумерованих списків
//  з рандомними числами (кількість елементів у списку випадкова від 1 до 10,
//  елементи випадкові – від 1 до 100).
//  При натисненні на кнопку нумеровані списки з парною кількістю елементів
//  зафарбувати у зелений колір, інші у червоний.

class OLList {
  constructor(
    minNumLi = 1,
    maxNumLi = 10,
    minNum = 1,
    maxNum = 100,
    numOl = 5
  ) {
    this.minNumLi = minNumLi;
    this.maxNumLi = maxNumLi;
    this.minNum = minNum;
    this.maxNum = maxNum;
    this.numOL = numOl;
  }
  randomNum(min, max) {
	 if (min > max) [min, max] = [max, min];
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  renderLi() {
    const elLi = document.createElement("li");
    elLi.innerText = this.randomNum(this.minNum, this.maxNum);
    return elLi;
  }
  renderOL() {
    const elOl = document.createElement("ol");
    const randomLi = this.randomNum(this.minNumLi, this.maxNumLi);
    for (let i = 0; i < randomLi; i++) {
      elOl.append(this.renderLi());
    }
    return elOl;
  }
  renderContainerOL() {
    const containerOl = document.createElement("div");
    containerOl.className = "ol-list__wrapper";
    for (let i = 0; i < this.numOL; i++) {
      containerOl.append(this.renderOL());
    }
    return containerOl;
  }
  changeColor() {
    const olList = document.querySelectorAll("ol");
    if (olList.length > 0) {
      olList.forEach((olEl) => {
        if (olEl.children.length % 2 === 0) olEl.style.color = "green";
        else olEl.style.color = "red";
      });
    }
  }

  renderBtn() {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = "Click";
    btn.addEventListener("click", () => this.changeColor());
    return btn;
  }
  render(selector) {
    if (selector) {
      selector.append(this.renderContainerOL());
      selector.append(this.renderBtn());
    }
  }
}

const listOl = new OLList();
const selector = document.querySelector(".ol-list");
 listOl.render(selector);
