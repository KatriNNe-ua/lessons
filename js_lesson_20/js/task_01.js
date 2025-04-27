"use strict";

//Задача 1.  Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій
//  частині екрану. Кожна зірка (це екземпляр класу Star) з певним кроком і
// інтервалом збільшується від мінімального до максимального розміру.
// Як тільки досягнути максимального розміру зірочка повинна з’являтися
//  у іншій випадковій позиції.
class Star {
  constructor(minSize, maxSize, maxStep, maxInterval, colorList, cssObj) {
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.maxStep = maxStep;
    this.maxInterval = maxInterval;
    this.colorList = colorList;
    this.cssObj = cssObj;
  }
  getRandomNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  setCoordinates() {
    this.star.style.left = this.getRandomNum(0, 100) + "%";
    this.star.style.top = this.getRandomNum(0, 100) + "%";
  }
  setColor() {
    const colorInd = this.getRandomNum(0, this.colorList.length - 1);
    this.star.style.background = this.colorList[colorInd];
  }
  getNewSize() {
    this.width += this.getRandomNum(0, this.maxStep);
    this.star.style.width = this.width + "px";
  }
  getShining() {
    setInterval(() => {
      this.getNewSize();
      if (this.width >= this.maxSize) {
        this.setDetailsStar();
      }
    }, this.getRandomNum(500, this.maxInterval));
  }
  setDetailsStar() {
    this.width = this.minSize;
    this.star.style.width = this.width + "px";
    this.setCoordinates();
    this.setColor();
  }

  render(selector) {
    const starDiv = document.createElement("div");
    starDiv.className = this.cssObj.star;
    this.star = starDiv;
    this.setDetailsStar();
    if (selector) {
      selector.append(starDiv);
      this.getShining();
    }
    return starDiv;
  }
}

const colorList = [
  "#fffacd",
  "#ffd700",
  "#add8e6",
  "#f0e68c",
  "#f8f8ff",
  "#ffe4b5",
  "#dcdcdc",
  "#e0ffff",
  "#fafad2",
  "#fff5ee",
];
const cssObj = {
  star: "star",
};
const cnt = document.querySelector(".wrapper");

for (let i = 0; i < 200; i++) {
  const star = new Star(1, 10, 20, 7000, colorList, cssObj);
  star.render(cnt);
}
