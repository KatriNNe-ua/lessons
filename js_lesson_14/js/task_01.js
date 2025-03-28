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
      cost: 8000,
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
    return siteslist.reduce((sum, { cost }) => sum + cost, 0);
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
      (count, { yearRelease }) =>
        yearRelease >= startYear && yearRelease <= lastYear ? count + 1 : count,
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
      (count, { sponsors }) => {
		 const totalInvestment = sponsors.reduce(
          (sum, { investmentAmount }) => sum + investmentAmount,
          0
        )
		return totalInvestment  > minNum ? count + 1 : count
	 }, 0)
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
  //------------1
  //   function createGeneralListAllSponsors(siteslist) {
  //     return siteslist
  //       .reduce((list, website) => {
  //         list.push(website.sponsors);
  //         return list;
  //       }, [])
  //       .flat(Infinity);
  //   }
  //-------------2
  //   function createGeneralListAllSponsors(siteslist) {
  //     const list = [];
  //     for (const site of siteslist) {
  //       list.push(site.sponsors);
  //     }
  //     return list.flat(Infinity);
  //   }
  //-------------3
  function createGeneralListAllSponsors(siteslist) {
    return siteslist.map(({ sponsors }) => sponsors).flat(Infinity);
  }
  const listAllSponsors = createGeneralListAllSponsors(websitesDevelopedList);
  //document.write(`<p>Загальний список усіх спонсорів: ${listAllSponsors}</p>`);
  console.log(listAllSponsors);
  //============================================
  // 5) знайти рік, коли прибуток був найбільшим
  function getYearMaxProfit(siteslist) {
    let maxYearCost;
    let maxCost = 0;
    for (const site of siteslist) {
      if (site.cost > maxCost) {
        maxCost = site.cost;
        maxYearCost = site.yearRelease;
      }
    }
    return maxYearCost;
  }
  const maxYearCost = getYearMaxProfit(websitesDevelopedList);
  document.write(
    `<p>Знайти рік, коли прибуток був найбільшим: ${maxYearCost}</p>`
  );
  // 6) упорядкувати список за спаданням прибутку
  function getSortListDescendingProfit(siteslist) {
    return siteslist.sort((a, b) => b.cost - a.cost);
  }
  const copyWebsitesDevelopedList = JSON.parse(
    JSON.stringify(websitesDevelopedList)
  );
  const listSortProfit = getSortListDescendingProfit(copyWebsitesDevelopedList);
  console.log(listSortProfit);
  // 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
  function createTwoListsWithCostUpAndMoreThanComparisonCost(
    siteslist,
    comparisonCost
  ) {
    const listMoreComparisonCost = [];
    const listUpComparisonCost = [];

    const copySiteslist = JSON.parse(JSON.stringify(siteslist));
    for (const site of copySiteslist) {
      if (site.cost > comparisonCost) listUpComparisonCost.push(site);
      else  listMoreComparisonCost.push(site);
    }
    return [listMoreComparisonCost, listUpComparisonCost];
  }
  const [listMore10000, listUp10000] =
    createTwoListsWithCostUpAndMoreThanComparisonCost(
      websitesDevelopedList,
      10000
    );
  console.log(listMore10000);
  console.log(listUp10000);
}
