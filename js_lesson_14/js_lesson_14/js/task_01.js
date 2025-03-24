"use strict";

// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// споснсори (масив спонсорів)
//               прізвище спонсора
//        ім’я  спонсора
//        сума вкладень спонсора
// рік випуску
// вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

if (confirm("Почати тестування?")) {
  const websitesDevelopedList = [
    {
      nameCompany: "Tech Solutions Ltd.",
      ownerCompany: "Олександр Коваленко",
      sponsors: [
        {
          lastName: "Петренко",
          firstName: "Ігор",
          investmentAmount: 5000,
        },
        {
          lastName: "Сидоренко",
          firstName: "Марія",
          investmentAmount: 7000,
        },
        {
          lastName: "Гаврилюк",
          firstName: "Анна",
          investmentAmount: 4000,
        },
      ],
      yearRelease: 2011,
      cost: 20000,
    },
    {
      nameCompany: "Web Innovators",
      ownerCompany: "Василь Дмитрук",
      sponsors: [
        {
          lastName: "Ткаченко",
          firstName: "Олег",
          investmentAmount: 8000,
        },
        {
          lastName: "Лисенко",
          firstName: "Олена",
          investmentAmount: 5000,
        },
        {
          lastName: "Кравченко",
          firstName: "Микола",
          investmentAmount: 6000,
        },
      ],
      yearRelease: 2001,
      cost: 25000,
    },
    {
      nameCompany: "NextGen Development",
      ownerCompany: "Світлана Жукова",
      sponsors: [
        {
          lastName: "Романюк",
          firstName: "Дмитро",
          investmentAmount: 10000,
        },
        {
          lastName: "Захаренко",
          firstName: "Вікторія",
          investmentAmount: 4000,
        },
      ],
      yearRelease: 2010,
      cost: 30000,
    },
    {
      nameCompany: "Creative Web Studio",
      ownerCompany: "Ірина Левченко",
      sponsors: [
        {
          lastName: "Мельник",
          firstName: "Павло",
          investmentAmount: 12000,
        },
        {
          lastName: "Шевченко",
          firstName: "Катерина",
          investmentAmount: 8000,
        },
        {
          lastName: "Іванов",
          firstName: "Сергій",
          investmentAmount: 5000,
        },
        {
          lastName: "Бондар",
          firstName: "Андрій",
          investmentAmount: 7000,
        },
        {
          lastName: "Данилюк",
          firstName: "Марина",
          investmentAmount: 6000,
        },
      ],
      yearRelease: 2001,
      cost: 40000,
    },
  ];
  //============================================
  // 1) загальну вартість усіх сайтів
  function getTotalCostAllSites(siteslist) {
    return siteslist.reduce((sum, website) => sum + website.cost, 0);
  }
  const totalCost = getTotalCostAllSites(websitesDevelopedList);
  document.write(`<p>Загальну вартість усіх сайтів: ${totalCost}</p>`);
  //============================================
  // 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
  function getNumberWebsitesCreatedBetweenSomeYears(
    siteslist,
    startYear,
    lastYear
  ) {
    return siteslist.reduce(
      (count, website) =>
        website.yearRelease > startYear && website.yearRelease < lastYear
          ? count + 1
          : count,
      0
    );
  }
  const countSites = getNumberWebsitesCreatedBetweenSomeYears(
    websitesDevelopedList,
    2000,
    2009
  );
  document.write(
    `<p>Kількість сайтів, що було зроблено між 2000 та 2009 рр.: ${countSites}</p>`
  );
  //============================================
  //3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
  function getNumberSitesAmountSponsorInvestmentsMoreThanNum(
    siteslist,
    minNum
  ) {
    return siteslist.reduce(
      (count, website) =>
        website.sponsors.reduce(
          (sum, sponsors) => sum + sponsors.investmentAmount,
          0
        ) > minNum
          ? count + 1
          : count,
      0
    );
  }
  const countSitesInvestments =
    getNumberSitesAmountSponsorInvestmentsMoreThanNum(
      websitesDevelopedList,
      100000
    );
  document.write(
    `<p>Kількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${countSitesInvestments}</p>`
  );
  //============================================
  // 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

  function createGeneralListAllSponsors(siteslist) {
    return siteslist
      .reduce((list, website) => {
        list.push(website.sponsors);
        return list;
      }, [])
      .flat(Infinity);
  }
  const listAllSponsors = createGeneralListAllSponsors(websitesDevelopedList);
  //document.write(`<p>Загальний список усіх спонсорів: ${listAllSponsors}</p>`);
  console.log(listAllSponsors);
  //============================================
  // 5) знайти рік, коли прибуток був найбільшим
  function getYearMaxProfit(siteslist){
	let Y
	for (const sait of siteslist) {

  }
  }
}
