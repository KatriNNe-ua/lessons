"use strict";

//Задача 2. Дано Shop  -- клас, що містить список товарів
//  (масив об’єктів класу Product (назва, ціна, кількість одиниць).
//  Додати можливість ітератора до класу Shop, щоб при ітеруванні для
//  кожного елемента виводився рядок «товар-загальна вартість»

class Product {
  constructor(name, price, numberUnits) {
    this.name = name;
    this.price = price;
    this.numberUnits = numberUnits;
  }
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "number":
        return this.price * this.numberUnits;
        break;
      case "string":
        return this.name;
        break;
      default:
        return this.name;
    }
  }
}

class Shop {
  constructor(products) {
    this.products = products;
  }
  [Symbol.iterator]() {
    this.startInd = 0;
    return this;
  }
  next() {
    if (this.startInd < this.products.length) {
      const product = this.products[this.startInd++];
      return {
        done: false,
        value: `${product} - ${+product}`,
        //  value: `${product.name}-${product.price * product.numberUnits}`,
      };
    } else {
      return { done: true };
    }
  }
}
//-------генератор
// class Shop {
//   constructor(products) {
//     this.products = products;
//   }
//   *[Symbol.iterator]() {
//     for (const product of this.products) {
//       yield `${product} - ${+product}`;
//     }
//   }
// }

const products = [
  new Product("Laptop", 1200, 5),
  new Product("Phone", 800, 10),
  new Product("Tablet", 400, 8),
  new Product("Headphones", 100, 20),
  new Product("Keyboard", 50, 15),
  new Product("Mouse", 30, 25),
  new Product("Monitor", 300, 7),
  new Product("Speaker", 150, 12),
  new Product("Charger", 20, 30),
  new Product("Webcam", 80, 9),
];

const shop = new Shop(products);

for (const product of shop) {
  document.write(`${product}<br>`);
}


