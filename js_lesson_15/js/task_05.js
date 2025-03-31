"use strict";

//Задача 4. Розробити клас Baner
// Поля:
// - Масив об’єктів ( графічних зображень та посилань на сайти)

// методи:
// - Метод випадкового вибору об’єкта (графічного зображення та посилання)
// - Метод виведення випадкового банера

if (confirm("Почати тестування?")) {
  class Banner {
    constructor(arrImgAndLink) {
      this.arrImgAndLink = arrImgAndLink;
    }
    selectRandomBanner() {
      const randIndex = Math.floor(Math.random() * this.arrImgAndLink.length);
      return this.arrImgAndLink[randIndex];
    }
    displayBanner() {
      const bannerRand = this.selectRandomBanner();
      document.write(
        `<a href="${bannerRand.link}"><img src="${bannerRand.imageUrl}"></a>`
      );
    }
  }

  //====================================
  const userArrImgAndLink = [
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1741194732682-21f3046cf1a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      link: "https://unsplash.com",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1742137188175-d31977b9561d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
      link: "https://unsplash.com",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1742077638802-978320d345bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
      link: "https://unsplash.com",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1742829705753-f07509bc88ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://unsplash.com",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1742925602071-55faa315e3aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
      link: "https://unsplash.com",
    },
  ];
  //=======================================================================
  const userBanner = new Banner(userArrImgAndLink);
  userBanner.displayBanner();
}
