"use strict";

//Задача 7. Дано перелік товарів у кошику. При зміні кількості одиниць товару збільшувати загальну
// вартість. Створити клас Product, що призначений для маніпуляцій товаром та клас ProductManager
// що оперує з усіма товарами (через подію передвати ідентифікатор товару та операцію, що зроблена

class Product {
  constructor(product, cssObj) {
    this.product = product;
    this.cssObj = cssObj;
  }

  renderImg(src, alt) {
    const imgCnt = document.createElement("div");
    imgCnt.className = this.cssObj.img;
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    imgCnt.append(img);
    return imgCnt;
  }

  renderTitle(text, tag) {
    const textEl = document.createElement(tag);
    textEl.innerText = text;

    return textEl;
  }

  renderBtn(sign, classEl) {
    const signId = document.createElement("div");
    signId.className = `${this.cssObj.sign} ${classEl}`;
    signId.innerText = sign;

    return signId;
  }

  renderCount() {
    const cntCount = document.createElement("div");
    this.cntCount = cntCount;
    this.cntCount.className = this.cssObj.count;
    this.cntCount.innerText = this.product.count;
    return this.cntCount;
  }

  renderAmoutProduct() {
    const amoutProduct = document.createElement("div");
    this.amoutProduct = amoutProduct;
    this.amoutProduct.className = "amount";
    this.amoutProduct.innerText = `${
      this.product.price * parseInt(this.cntCount.innerText)
    } грн`;
    return amoutProduct;
  }

  changeCount(e) {
    const targetEl = e.target;
    if (targetEl.closest(".add")) {
      this.cntCount.innerText = parseInt(this.cntCount.innerText) + 1;
      this.amoutProduct.innerText = `${
        this.product.price * parseInt(this.cntCount.innerText)
      } грн`;
    }
    if (targetEl.closest(".sub")) {
      this.cntCount.innerText = parseInt(this.cntCount.innerText) - 1 || 1;
      this.amoutProduct.innerText = `${
        this.product.price * parseInt(this.cntCount.innerText)
      } грн`;
    }
  }

  render() {
    const itemProduct = document.createElement("div");
    this.itemProduct = itemProduct;
    this.itemProduct.setAttribute("id", this.product.id);
    this.itemProduct.className = this.cssObj.itemProduct;
    this.itemProduct.append(this.renderImg(this.product.img, this.product.alt));
    this.itemProduct.append(this.renderTitle(this.product.name, "h2"));
    this.itemProduct.append(this.renderBtn("+", "add"));
    this.itemProduct.append(this.renderCount());
    this.itemProduct.append(this.renderBtn("-", "sub"));
    this.itemProduct.append(this.renderTitle("До оплати:", "p"));
    this.itemProduct.append(this.renderAmoutProduct());
    this.itemProduct.append(this.renderBtn("X", "delete"));
    this.itemProduct.addEventListener("click", this.changeCount.bind(this));
    return this.itemProduct;
  }
}

class ProductManager {
  constructor(productsList, cssObj) {
    this.productsList = productsList;
    this.cssObj = cssObj;
  }

  getResSum() {
    const sumList = document.querySelectorAll(".amount");
    let res = 0;
    for (const el of sumList) {
      res += parseFloat(el.innerText);
    }

    return res;
  }

  renderAmountSum() {
    const sum = document.createElement("div");
    const spanEl = document.createElement("span");
    this.spanEl = spanEl;
    this.spanEl.innerText = `${this.getResSum()} грн`;

    sum.innerText = "Загальна сума: ";
    sum.append(this.spanEl);

    return sum;
  }
  getDetailChange(e) {
    const target = e.target;
    if (target.closest(".sign")) {
      const eventCustom = new CustomEvent("changeCountProduct", {
        detail: {
          id: e.target.closest(".item").getAttribute("id"),
          change: e.target.closest(".sign").innerText,
        },
        bubbles: true,
      });
      e.target.dispatchEvent(eventCustom);
    }
    
  }

  render(selector) {
    const cntCart = document.createElement("div");
    cntCart.className = this.cssObj.cartContainer;

    for (const product of this.productsList) {
      const item = new Product(product, this.cssObj);

      cntCart.append(item.render());
    }

    if (selector) {
      selector.append(cntCart);
    }

    cntCart.append(this.renderAmountSum());

    cntCart.addEventListener("click", this.getDetailChange.bind(this));

    cntCart.addEventListener("changeCountProduct", (e) => {
      console.log(e.detail);
      this.spanEl.innerText = `${this.getResSum()} грн`;
	  if (e.target.closest(".delete")) {
      e.target.closest(".item").remove();
	  this.spanEl.innerText = `${this.getResSum()} грн`;
    }
    });

    return cntCart;
  }
}

const productsList = [
  {
    name: "Велосипед TORPADO Matador M19 29' Gray/Black",
    id: "111111",
    price: 20000,
    img: "img/bike.webp",
    alt: "Img bike",
    count: 5,
  },
  {
    name: "Крісло для геймерів ASUS ROG Chariot X Black",
    id: "222222",
    price: 10000,
    img: "img/chair.webp",
    alt: "Img chair",
    count: 1,
  },
  {
    name: "Настільна гра TICKET TO RIDE : EUROPE-15th",
    id: "333333",
    price: 5000,
    img: "img/game.webp",
    alt: "Img game",
    count: 3,
  },
];

const cssObj = {
  cartContainer: "cart-container",
  itemProduct: "item",
  img: "img",
  sign: "sign",
  count: "count",
};

const shoppingCart = new ProductManager(productsList, cssObj);
const cnt = document.querySelector(".shopping-cart");
shoppingCart.render(cnt);

