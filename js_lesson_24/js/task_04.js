"use strict";

//Задача 4.  Дано список URL адрес. Підрахувати кількість адрес,
// що відносяться до кожного із доменів (edu, com, org,...).

function getDomains(siteList) {
  return siteList.map((site) => {
    const ind = site.lastIndexOf(".");
    return site.slice(ind + 1);
  });
}

function countNumberAddresses(siteList) {
  const domainsList = getDomains(siteList);
  const res = new Map();
  for (const domain of domainsList) {
    if (res.has(domain)) res.set(domain, res.get(domain) + 1);
    else res.set(domain, 1);
  }
  return res;
}

const siteList = [
  "https://example.com",
  "http://test.edu",
  "https://site.org",
  "http://another.com",
  "https://school.edu",
  "http://orgsite.org",
  "http://orgsite.ua",
];

document.write(`Список URL адрес:<br>${siteList.join("<br>")}`);

const resCountDomains = countNumberAddresses(siteList);
console.log(resCountDomains);

resCountDomains.forEach((num, domain)=>{
	document.write(`<br>${domain} - ${num} шт`)
})