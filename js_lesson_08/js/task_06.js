"use strict";

//Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
if (confirm("Почати тестування?")) {
  function getProductsUserCan(arrPrices, arrTitles, userMoney) {
    let productsForUser = [];
    for (let i = 0; i < arrPrices.length; i++) {
      if (arrPrices[i] <= userMoney) productsForUser.push(arrTitles[i]);
    }
	return productsForUser
  }
  let productsPrices = [1000, 20, 31];
  let productsTitles = ["cheese", "juice", "bread"];
  const userMoney = 40;
  let productsForUser = getProductsUserCan(
    productsPrices,
    productsTitles,
    userMoney
  );
  document.write(`Користувач може собі дозволити: ${productsForUser}`);
}
