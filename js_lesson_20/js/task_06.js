"use strict";

//Задача 6. Дано список автомобілів (марка, рік випуску, ціна).
//  Сформувати елементи для фільтрування з використанням випадаючого списку
// (контент цих випадаючих списків сформувати у залежності від переданого списку).

class SearchCar {
  constructor(carsList, cssObj, title, subtitle) {
    this.carsList = carsList;
    this.cssObj = cssObj;
    this.title = title;
    this.subtitle = subtitle;
  }

  renderTitle(someTitle) {
    const titleH2 = document.createElement("h2");
    titleH2.innerText = someTitle;

    return titleH2;
  }

  renderSelect(name) {
    const selectEl = document.createElement("select");
    selectEl.setAttribute("name", name);

    const listCriterion = this.carsList.reduce((list, car) => {
      if (!list.includes(car[name])) {
        list.push(car[name]);
      }
      return list;
    }, []);

    listCriterion.sort((a, b) => a - b);

    for (const el of listCriterion) {
      const optionEl = document.createElement("option");
      optionEl.setAttribute("value", el);
      optionEl.innerText = el;
      selectEl.append(optionEl);
    }
    return selectEl;
  }

  renderSearchCar() {
    const searchCarCnt = document.createElement("div");
    searchCarCnt.className = this.cssObj.filterCnt;
    const brandSelect = this.renderSelect("brand");
    this.brandSelect = brandSelect;
    searchCarCnt.append(this.brandSelect);
    const yearSelect = this.renderSelect("year");
    this.yearSelect = yearSelect;
    searchCarCnt.append(this.yearSelect);
    this.setEven();
    return searchCarCnt;
  }
  renderFoundCar() {
    const foundCarDiv = document.createElement("div");
    foundCarDiv.className = this.cssObj.foundCar;

    return foundCarDiv;
  }

  renderCar(ind) {
    const car = this.carsList[ind];
    const carDiv = document.createElement("div");
    carDiv.className = this.cssObj.carItem;
    carDiv.innerText = `${car.brand} - ${car.year}p - ${car.price}$`;
    this.cntFoundCar.append(carDiv);
  }
  searchCarYear(e) {
    this.cntFoundCar.innerHTML = "";
    const targetEl = e.target.value;

    for (let i = 0; i < this.carsList.length; i++) {
      const car = this.carsList[i];
      if (
        parseInt(targetEl) === car.year &&
        this.brandSelect.value === car.brand
      ) {
        this.renderCar(i);
      }
    }
  }
  searchCarBrand(e) {
    this.cntFoundCar.innerHTML = "";
    const targetEl = e.target.value;
    for (let i = 0; i < this.carsList.length; i++) {
      const car = this.carsList[i];
      if (
        targetEl === car.brand &&
        parseInt(this.yearSelect.value) === car.year
      ) {
        this.renderCar(i);
      }
    }
  }

  setEven() {
    this.yearSelect.addEventListener("change", this.searchCarYear.bind(this));
    this.brandSelect.addEventListener("change", this.searchCarBrand.bind(this));
  }

  render(selector) {
    const mainCnt = document.createElement("div");
    mainCnt.className = this.cssObj.mainCnt;
    mainCnt.append(this.renderTitle(this.title));
    mainCnt.append(this.renderSearchCar());
    mainCnt.append(this.renderTitle(this.subtitle));
    const cntFoundCar = this.renderFoundCar();
    this.cntFoundCar = cntFoundCar;
    mainCnt.append(this.cntFoundCar);

    if (selector) {
      selector.append(mainCnt);
    }
  }
}

const cssObj = {
  mainCnt: "shopping-cart__cnt",
  filterCnt: "filter-cnt",
  foundCar: "found-car",
  carItem: "car-item",
};

const carsList = [
  { brand: "Toyota", year: 2018, price: 15000 },
  { brand: "Honda", year: 2020, price: 20000 },
  { brand: "Ford", year: 2020, price: 12000 },
  { brand: "BMW", year: 2019, price: 30000 },
  { brand: "Mercedes", year: 2021, price: 40000 },
  { brand: "Audi", year: 2019, price: 25000 },
  { brand: "Volkswagen", year: 2018, price: 14000 },
  { brand: "Hyundai", year: 2022, price: 22000 },
  { brand: "Kia", year: 2019, price: 10000 },
  { brand: "Nissan", year: 2018, price: 17000 },
  { brand: "Toyota", year: 2020, price: 23000 },
  { brand: "Honda", year: 2022, price: 13000 },
  { brand: "Ford", year: 2021, price: 18000 },
  { brand: "BMW", year: 2019, price: 20000 },
  { brand: "Mercedes", year: 2018, price: 35000 },
  { brand: "Audi", year: 2020, price: 28000 },
  { brand: "Volkswagen", year: 2021, price: 21000 },
  { brand: "Hyundai", year: 2018, price: 16000 },
  { brand: "Kia", year: 2019, price: 19000 },
  { brand: "Nissan", year: 2021, price: 11000 },
];

const searchCar = new SearchCar(carsList, cssObj, "Фільтри пошуку", "Список");
const cnt = document.querySelector(".search-car");
searchCar.render(cnt);
