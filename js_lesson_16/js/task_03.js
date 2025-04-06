"use strict";

//Задача 3. Об’єкт “Фірма” (використати члени-класи)
// поля
// назва фірми;
// дата заснування (рік, місяць);
// послуги (назва послуги, вартість, термін виконання);
// адреси філіалів (країна, місто, вулиця, номер будинку);

// методи
// визначення кількості років існування фірми;
// виведення всіх філіалів фірми у вказаному місті;
// виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

if (confirm("Почати тестування?")) {
  // class для дати заснування (рік, місяць);
  class DateFoundation {
    constructor(month, year) {
      this.Year = year;
      this.Month = month;
    }
    //------------------------------------
    #year;
    #month;
    //------------------------------------
    get Year() {
      return this.#year;
    }
    set Year(numYear) {
      if (numYear < 1) throw new Error("Рік не може бути меншим за 1");
      this.#year = numYear;
    }
    //-------------------------------------
    get Month() {
      return this.#month;
    }
    set Month(numMonth) {
      if (numMonth < 1 || numMonth > 12)
        throw new Error("Некоректний номер місяця");
      this.#month = numMonth;
    }
    //-------------------------------------
    toString() {
      return `${this.Month}.${this.Year}`;
    }
  }
  //===================================================================================
  // class послуги (назва послуги, вартість, час виконання);
  class Services {
    constructor(nameServices, cost, completionTime) {
      this.NameServices = nameServices;
      this.Cost = cost;
      this.CompletionTime = completionTime;
    }
    //------------------------------------
    #nameServices;
    #cost;
    #completionTime;
    //------------------------------------
    get NameServices() {
      return this.#nameServices;
    }
    set NameServices(name) {
      if (name.trim() === "") throw new Error("Відсутня назва послуги");
      this.#nameServices = name;
    }
    //-------------------------------------
    get Cost() {
      return this.#cost;
    }
    set Cost(costServices) {
      if (costServices < 0)
        throw new Error("Вартість не може бути меншою за 0");
      this.#cost = costServices;
    }
    //-------------------------------------
    get CompletionTime() {
      return this.#completionTime;
    }
    set CompletionTime(time) {
      if (time < 0) throw new Error("Термін виконання не може бути від'ємним");
      this.#completionTime = time;
    }
    //-------------------------------------
    toString() {
      return `Послуга "${this.NameServices}": коштує ${this.Cost}грн, час виконання ${this.CompletionTime}хв`;
    }
  }
  //===================================================================================
  // class адреси філіалів (країна, місто, вулиця, номер будинку);
  class BranchAddresses {
    constructor(country, city, street, houseNumber) {
      this.Country = country;
      this.City = city;
      this.Street = street;
      this.HouseNumber = houseNumber;
    }
    //------------------------------------
    #country;
    #city;
    #street;
    #houseNumber;
    //------------------------------------
    get Country() {
      return this.#country;
    }
    set Country(nameCountry) {
      if (nameCountry.trim() === "")
        throw new Error("Назва країни не може бути порожньо");
      this.#country = nameCountry;
    }
    //-------------------------------------
    get City() {
      return this.#city;
    }
    set City(nameCity) {
      if (nameCity.trim() === "")
        throw new Error("Назва міста не може бути порожньою");
      this.#city = nameCity;
    }
    //-------------------------------------
    get Street() {
      return this.#street;
    }
    set Street(nameStreet) {
      if (nameStreet.trim() === "") throw new Error("Відсутня назва вулиці");
      this.#street = nameStreet;
    }
    //-------------------------------------
    get HouseNumber() {
      return this.#houseNumber;
    }
    set HouseNumber(num) {
      if (!num) throw new Error("Відсутній номер будинку");
      this.#houseNumber = num;
    }
    //-------------------------------------
    toString() {
      return `${this.Country}, м.${this.City}, вул.${this.Street}, буд№${this.HouseNumber}`;
    }
  }
  //====================================================================================
  class Company {
    constructor(
      companyName,
      dateFoundation,
      listServices,
      listBranchAddresses
    ) {
      this.CompanyName = companyName;
      this.DateFoundation = dateFoundation;
      this.Services = listServices;
      this.BranchAddresses = listBranchAddresses;
    }
    //------------------------------------
    #companyName;
    #dateFoundation;
    #services;
    #branchAddresses;
    //------------------------------------
    get CompanyName() {
      return this.#companyName;
    }
    set CompanyName(newCompanyName) {
      if (newCompanyName.trim() === "")
        throw new Error("Відсутня назва компанії");
      this.#companyName = newCompanyName;
    }
    //---------------------------------------
    get DateFoundation() {
      return this.#dateFoundation;
    }
    set DateFoundation(date) {
      if (!(date instanceof DateFoundation)) throw new Error("Некоректна дата");
      this.#dateFoundation = date;
    }
    //---------------------------------------
    get Services() {
      return this.#services;
    }
    set Services(arrServices) {
      if (arrServices.length === 0)
        throw new Error("Список послуг не може бути порожнім");
      this.#services = arrServices;
    }
    //---------------------------------------
    get BranchAddresses() {
      return this.#branchAddresses;
    }
    set BranchAddresses(arrBranchAddresses) {
      if (arrBranchAddresses.length === 0)
        throw new Error("Список філіалів не може бути порожнім");
      this.#branchAddresses = arrBranchAddresses;
    }
    //---------------------------------------
    numYearsCompany(currentYear) {
      return currentYear - this.DateFoundation.Year;
    }
    //---------------------------------------
    displayingBranchesInCity(someCity) {
      const arrBranches = this.BranchAddresses.reduce((arr, branch) => {
        if (branch.City === someCity) arr.push(branch);
        return arr;
      }, []);
	  if(arrBranches.length === 0) throw new Error(`У ${someCity} відсутні філіали фірми`);
      document.write(arrBranches.join("<br>"));
    }
    //---------------------------------------
    displayServicesForAmountAndDuration(amount, time) {
      const arrServices = this.Services.reduce((arr, service) => {
        if (service.Cost <= amount && service.CompletionTime <= time)
          arr.push(service);
        return arr;
      }, []);
	   if (arrServices.length === 0)
       throw new Error(
         `Відсутні послуги, що можуть бути виконані за ${amount}грн та ${time}хв`
       );
      document.write(arrServices.join("<br>"));
    }
    //---------------------------------------
    toString() {
      return `${this.CompanyName}:<br>Дата заснування: ${
        this.DateFoundation
      }<br><br>Послуги: <br>${this.Services.join(
        "<br>"
      )}<br><br>Aдреси філіалів ${this.BranchAddresses.join("<br>")} `;
    }
  }
  //====================================================================================
  try {
    const newCompanyDateFoundation = new DateFoundation(4, 2015);
    const newCompanyServices = [
      new Services("Фарбування авто", 3000, 120),
      new Services("Ремонт двигуна", 15000, 480),
      new Services("Заміна мастила", 800, 45),
      new Services("Діагностика авто", 500, 30),
      new Services("Полірування кузова", 2500, 90),
      new Services("Хімчистка салону", 2000, 150),
      new Services("Рихтування кузова", 5000, 240),
    ];

    const newCompanyBranchAddresses = [
      new BranchAddresses("Україна", "Київ", "Хрещатик", 15),
      new BranchAddresses("Україна", "Львів", "Шевченка", 23),
      new BranchAddresses("Україна", "Одеса", "Дерибасівська", 5),
      new BranchAddresses("Україна", "Харків", "Сумська", 45),
      new BranchAddresses("Україна", "Дніпро", "Пушкіна", 78),
      new BranchAddresses("Україна", "Запоріжжя", "Перемоги", 33),
      new BranchAddresses("Україна", "Харків", "Соборна", 12),
    ];

    const newCompany = new Company(
      "AutoMaster",
      newCompanyDateFoundation,
      newCompanyServices,
      newCompanyBranchAddresses
    );
    document.write(newCompany);
    console.log(newCompany);
    document.write("<br><br>");
    const ageNewCopany = newCompany.numYearsCompany(2025);
    document.write(`<p>Кількiсть років існування фірми: ${ageNewCopany}</p>`);
    const city = "Харків";
    document.write(`Всі філіали фірм у місті ${city}:<br>`);
    newCompany.displayingBranchesInCity(city);
    const amountMoney = 4000;
    const durationTime = 50;
    document.write(
      `<p>Послуги, що можуть бути виконані за ${amountMoney}грн та ${durationTime}хв:</p>`
    );
    newCompany.displayServicesForAmountAndDuration(amountMoney, durationTime);
  } catch (error) {
    document.write(error.message);
  }
}
