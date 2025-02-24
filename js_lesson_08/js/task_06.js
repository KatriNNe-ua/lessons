"use strict";

//Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
if (confirm("Почати тестування?")) {
  let productsPrices = [1000, 20, 31];
  let productsTitles = ["cheese", "juice", "bread"];
  let productsForUser = []

  const userMoney = 40
  for(let i =0; i<productsPrices.length;i++){
	if(productsPrices[i]<=userMoney) productsForUser.push(productsTitles[i])
  }
document.write(`Користувач може собі дозволити: ${productsForUser}`);
}

