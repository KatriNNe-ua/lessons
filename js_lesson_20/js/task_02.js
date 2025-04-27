"use strict";

//Задача 2.  Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі
// з’являються танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану.

class Tank {
  constructor(step, interval, listImg, cssObj) {
    this.step = step;
    this.interval = interval;
    this.listImg = listImg;
    this.cssObj = cssObj;
  }

  getRandomNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  setPosition() {
    this.top = 0;
    this.divImg.style.top = this.top + "%";
    this.divImg.style.left = this.getRandomNum(10, 90) + "%";
  }
  setNewPositionTop() {
    this.top += this.getRandomNum(0, this.step);
    this.divImg.style.top = this.top + "%";
  }
  move() {
    const intervalId = setInterval(() => {
      this.setNewPositionTop();
      if (this.top >= 100) {
        clearInterval(intervalId);
        this.divImg.remove();
      }
    }, this.getRandomNum(1000, this.interval))
    this.intervalId = intervalId;
  }
  getFire() {
    clearInterval(this.intervalId);
    this.img.src = this.listImg.fire;
    this.img.alt = this.listImg.altFire;
    setTimeout(() => {
      this.divImg.remove();
    }, 1000);
  }

  renderImg(src, alt) {
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    return img;
  }
  render(selector) {
    const divImg = document.createElement("div");
    divImg.className = this.cssObj.cntImg;
    this.divImg = divImg;
    this.setPosition();
    const img = this.renderImg(this.listImg.tank, this.listImg.altTank);
    this.img = img;
    this.divImg.append(this.img);
    if (selector) {
      selector.append(divImg);
      this.move();
      this.img.addEventListener("click", () => this.getFire());
    }
    return divImg;
  }
}

const listImg = {
  tank: "img/tank.webp",
  altTank: "Img tank",
  fire: "img/fire.png",
  altFire: "img fire",
};
const cssObj = {
  cntImg: "game",
};

const cnt = document.querySelector(".wrapper");
for (let i = 0; i < 10; i++) {
  const tank = new Tank(10, 1000, listImg, cssObj);
  tank.render(cnt);
}
