"use strict";

//Задача 5. Дано масив книг (назва, рік видання, автор, ціна).
//  Підрахувати загальну вартість книг для кожного із авторів.

function calculatTotalCostBooksEachAuthor(listBooks){
	const resMap = new Map()
	for (const book of listBooks) {
		if (resMap.has(book.author))
     resMap.set(book.author, resMap.get(book.author) + book.price);
    else resMap.set(book.author, book.price);
  }
  return resMap;
}

const listBooks = [
  { title: "Book1", year: 2020, author: "Author A", price: 300 },
  { title: "Book2", year: 2019, author: "Author B", price: 450 },
  { title: "Book3", year: 2021, author: "Author A", price: 200 },
  { title: "Book4", year: 2022, author: "Author C", price: 600 },
];

const totalCost = calculatTotalCostBooksEachAuthor(listBooks);
console.log(totalCost);

totalCost.forEach((cost, author) => {
  document.write(`<br>${author} - ${cost} грн`);
});