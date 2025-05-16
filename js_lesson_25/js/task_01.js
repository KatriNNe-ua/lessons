"use strict";

//Задача 1. Використовуючи один з АРІ
// та функцію fetch організувати завантаження та відображення даних
// Намагайтесь зробити це з використанням класів. Окремо клас для побудови розмітки.
//  Окремо клас, який буде робити запити і повертати результати.

class ImageCard {
  constructor(src, cssObj) {
    this.src = src;
    this.cssObj = cssObj;
  }
  renderImg() {
    const img = document.createElement("img");
    img.setAttribute("src", this.src);
    img.setAttribute("alt", "image");
    return img;
  }
  render(selector) {
    const container = document.createElement("div");
    container.className = this.cssObj.img;
    container.append(this.renderImg());
    if (selector) {
      selector.append(container);
    }
  }
}

class ImageFetcher {
  constructor(url, cssObj, selector) {
    this.cssObj = cssObj;
    this.url = url;
    this.selector = selector;
  }

  async fetchImage() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) throw new Error("Сервер не відповів");
      const srcImg = await response.json();
      new ImageCard(srcImg.message, this.cssObj).render(this.selector);
    } catch (err) {
      console.log(err.message);
    }
  }
}

const cssObj = {
  img: "test__img",
};

const cnt = document.querySelector(".test");
const img = new ImageFetcher(
  "https://dog.ceo/api/breeds/image/random",
  cssObj,
  cnt
);
img.fetchImage();
