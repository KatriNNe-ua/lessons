"use strict";

//Задача 4. Склад. База товарів, які зберігаються на складі: назва товару,
//  одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер).
//  Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару,
//  фільтрація за назвою фірми
if (confirm("Почати тестування?")) {
  class Manufacturer {
    constructor(name, registrationNumber) {
      this.NameManuf = name;
      this.RegistrationNumber = registrationNumber;
    }
    //-----------------------------------------
    #registrationNumber;
    #nameManuf;
    //-----------------------------------------
    get NameManuf() {
      return this.#nameManuf;
    }
    set NameManuf(newName) {
      if (newName.trim() === "") throw new Error(`Назва компанії відсутня`);
      this.#nameManuf = newName;
    }
    get RegistrationNumber() {
      return this.#registrationNumber;
    }
    set RegistrationNumber(newNumber) {
      if (newNumber.trim() === "") throw new Error(`Номер компанії відсутній`);
      this.#registrationNumber = newNumber;
    }
    //-----------------------------------------
    toString() {
      return `${this.NameManuf} - #${this.RegistrationNumber}`;
    }
  }
  //===================================================================
  class Product {
    constructor(nameProduct, unitMeasurement, quantity, infoManufacturer) {
      this.NameProduct = nameProduct;
      this.UnitMeasurement = unitMeasurement;
      this.Quantity = quantity;
      this.Manufacturer = infoManufacturer;
    }
    //-----------------------------------------
    #nameProduct;
    #unitMeasurement;
    #quantity;
    #manufacturer;
    //-----------------------------------------
    get NameProduct() {
      return this.#nameProduct;
    }
    set NameProduct(newName) {
      if (newName.trim() === "") throw new Error(`Назва продукту відсутня`);
      this.#nameProduct = newName;
    }
    get UnitMeasurement() {
      return this.#unitMeasurement;
    }
    set UnitMeasurement(newUnitMeasurement) {
      if (newUnitMeasurement.trim() === "")
        throw new Error(`Oдиниця виміру продукту відсутня`);
      this.#unitMeasurement = newUnitMeasurement;
    }
    get Quantity() {
      return this.#quantity;
    }
    set Quantity(newQuantity) {
      if (newQuantity < 0)
        throw new Error(`Кількість товарів не може бути від'ємною`);
      this.#quantity = newQuantity;
    }
    get Manufacturer() {
      return this.#manufacturer;
    }
    set Manufacturer(newInfoManufacturer) {
      if (!(newInfoManufacturer instanceof Manufacturer))
        throw new Error(
          `Інформація про фірму виробника повинна надходити з класу "Manufacturer"`
        );
      this.#manufacturer = newInfoManufacturer;
    }
    //-----------------------------------------
    valueOf() {
      return this.Quantity;
    }
    toString() {
      return `${this.NameProduct}: ${this.Quantity} ${this.UnitMeasurement}<br>${this.Manufacturer}`;
    }
  }
  //===================================================================
  class Warehouse {
    constructor(database = []) {
      this.Database = database;
    }
    //-----------------------------------------
    #database;
    //-----------------------------------------
    get Database() {
      return this.#database;
    }
    set Database(newDatabase) {
      if (!Array.isArray(newDatabase))
        throw new Error(
          `База товарів повинна бути представлена у вигляді масиву`
        );
      this.#database = newDatabase;
    }
    //-----------------------------------------
    getRegistrationProduct(
      nameProduct,
      unitMeasurement,
      quantity,
      infoManufacturer
    ) {
      const newProduct = new Product(
        nameProduct,
        unitMeasurement,
        quantity,
        infoManufacturer
      );
      this.Database.push(newProduct);
    }
    getShipmentProduct(nameProductShipment) {
      const nameProductShipmentIndex = this.Database.findIndex(
        (product) => product.NameProduct === nameProductShipment
      );
      if (nameProductShipmentIndex === -1)
        throw new Error(`"${nameProductShipment}" відсутній у базі товарів `);
      this.Database.splice(nameProductShipmentIndex, 1);
    }
    filteringProductName(searchProductName) {
      return this.Database.filter(
        (prod) => prod.NameProduct === searchProductName
      );
    }
    filteringCompanyName(searchCompanyName) {
      return this.Database.filter(
        (prod) => prod.Manufacturer.NameManuf === searchCompanyName
      );
    }
    //-----------------------------------------
    toString() {
      return `${this.Database.join("<br>")}`;
    }
  }
  //===================================================================
  try {
    const myWarehouse = new Warehouse();

    const manuf1 = new Manufacturer("Coca-Cola", "A123");
    const manuf2 = new Manufacturer("PepsiCo", "B456");
    const manuf3 = new Manufacturer("Nestlé", "C789");

    myWarehouse.getRegistrationProduct("Кола", "л", 100, manuf1);
    myWarehouse.getRegistrationProduct("Фанта", "л", 70, manuf1);
    myWarehouse.getRegistrationProduct("Пепсі", "л", 90, manuf2);
    myWarehouse.getRegistrationProduct("Несті чай", "л", 50, manuf3);

    document.write(`<p>Вміст складу:</p>${myWarehouse}<br>`);

    const searchProd = "Кола";
    const resFiltProd = myWarehouse.filteringProductName(searchProd);
    document.write(
      `<br><br><p>Фільтрація по назві '${searchProd}':</p>${resFiltProd.join(
        "<br>"
      )}<br>`
    );

    const searchManufacturer = "PepsiCo";
    const resFiltManufacturer =
      myWarehouse.filteringCompanyName(searchManufacturer);
    document.write(
      `<br><br><p>Товари фірми ${searchManufacturer}:</p>${resFiltManufacturer.join(
        "<br>"
      )}<br>`
    );

    const shipmentProduct = "Фанта";
    myWarehouse.getShipmentProduct(shipmentProduct);
    document.write(
      `<br><p>Вміст складу після відвантаження '${shipmentProduct}':</p>${myWarehouse}`
    );
  } catch (error) {
    document.write(error.message);
  }
}
