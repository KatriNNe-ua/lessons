"use strict";

//Задача 7.Відобразити падаючий сніг. Сніжинка з’являється у верхній частині
// екрану (top =0) і з випадковою швидкістю рухається вниз (у setInterval викликати метод,
//  у якому додавати крок до top). Як тільки сніжинка досягає нижньої частини екрану
//  (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).

class Snow {
  constructor(imgPath, count, time = 16) {
    this.imgPath = imgPath;
    this.count = count;
    this.time = time;
  }
  getImgSnow() {
    const imgSnow = document.createElement("img");
    imgSnow.src = this.imgPath;
    return imgSnow;
  }
  generationRandomNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  setStartCoordinates(img) {
    img.style.left = this.generationRandomNum(0, 100) + "%";
    img.style.top = 0 + "%";
  }
  move(img) {
    const top = parseFloat(img.style.top);
    img.style.top = top + Math.random() + "%";
  }
  render(selector) {
    for (let i = 0; i < this.count; i++) {
      const divImg = document.createElement("div");
      divImg.className = "snow-img";
      const img = this.getImgSnow();
      divImg.append(img);
      this.setStartCoordinates(divImg);
      const interval = setInterval(() => {
        this.move(divImg);
        if (parseFloat(divImg.style.top) >= 100)
          this.setStartCoordinates(divImg);
      }, this.time);
      if (selector) {
        selector.append(divImg);
      }
    }
  }
}
const snow = new Snow("../img/snow.webp", 20);
const selector = document.querySelector(".wrapper");
snow.render(selector);
