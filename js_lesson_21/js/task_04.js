"use strict";

//Задача 3. Розробити Класи

class Animal {
  constructor(coordinateX, coordinateY, srcImg, cssObj) {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.srcImg = srcImg;
    this.cssObj = cssObj;
  }
  setPosition() {
    this.divEl.style.top = this.coordinateY + "%";
    this.divEl.style.left = this.coordinateX + "%";
  }
  getRandomNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  render(selector) {
    const divEl = document.createElement("div");
    this.divEl = divEl;
    this.divEl.className = this.cssObj.img;

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", this.srcImg);
    this.divEl.append(imgEl);

    this.setPosition();

    if (selector) {
      selector.append(this.divEl);
    }
  }
}

class House extends Animal {
  renewal(interval=1000) {
    setInterval(() => {
      if (this.divEl.style.transform === "scale(1.2)")
        this.divEl.style.transform = "scale(1)";
      else this.divEl.style.transform = "scale(1.2)";
    }, interval);
  }
}

class Dog extends Animal {
  renewal(step = 5, interval = 1000) {
    setInterval(() => {
      const dislocationX = this.getRandomNum(-step, step);
      const res = this.coordinateX + dislocationX;

      if (res < 100 && res > 0) this.coordinateX += dislocationX;
      else this.coordinateX -= dislocationX;

      this.setPosition();
    },interval);
  }
}

class Bird extends Animal {
  renewal(step = 5, interval = 1000) {
    setInterval(() => {
      const dislocationX = this.getRandomNum(-step, step);
      const dislocationY = this.getRandomNum(-step, step);

      const resX = this.coordinateX + dislocationX;

      if (resX < 100 && resX > 0) this.coordinateX += dislocationX;
      else this.coordinateX -= dislocationX;

      const resY = this.coordinateY + dislocationY;

      if (resY < 100 && resY > 0) this.coordinateY += dislocationY;
      else this.coordinateY -= dislocationY;

      this.setPosition();
    },interval);
  }
}

const cssObj = {
  img: "img",
};

const house = new House(20, 40, "img/house.png", cssObj);
const dog = new Dog(40, 40, "img/dog.png", cssObj);
const bird = new Bird(60, 30, "img/bird.png", cssObj);

const cnt = document.body;
house.render(cnt);
house.renewal();

dog.render(cnt);
dog.renewal();

bird.render(cnt);
bird.renewal();
