"use strict";
//цикли lesson 6

//1 Горизонтальну діаграму з 8 рандомними значеннями (0-100)
/*
          <div class="container">
            <div class="item" style="width: 30%">30</div>
            <div class="item" style="width: 40%">40</div>
            <div class="item" style="width: 70%">70</div>
            <div class="item" style="width: 30%">30</div>
          </div>
      */

// document.write(` <div class="container">`);
// for(let i = 1; i<=8; i++){
// 	const randNum = Math.floor(Math.random()*100)
// 	document.write(
//     `<div class="item" style="width: ${randNum}%">${randNum}%</div><br>`
//   );
// }
// document.write(` </div>`);
//=======================================================
//2 Задача 1.Поступово генеруються N чисел (-100 - 100). Знайти максимальне, мінімальне та середнє значення
// const numbersCount = parseInt(prompt("Введіть кількість чисел"));
// let min = Infinity;
// let max = -Infinity;
// let sum = 0;
// for (let n = 0; n < numbersCount; n++) {
//   const randNum = -100 + Math.floor(Math.random() * (100 - -100 + 1));
//   if (randNum < min) min = randNum;
//   if (randNum > max) max = randNum;
//   sum += randNum;
//   document.write(`${randNum} <br>`);
// }
// let avg = (sum / numbersCount).toFixed(2);
// document.write(`<br>${min} <br>`);
// document.write(`${max} <br>`);
// document.write(`${avg} <br>`);
//=======================================================
//3 Поступово генерувати 100 випадкових чисел від 1 до 1000.Підрахувати яких чисел більше: парних чи непарних.
// let oddNum = 0
// let evenNum = 0
// for (let num = 0; num < 100; num++) {
// 	const randNum = 1 + Math.floor(Math.random() * 1000);
// 	if(randNum%2) oddNum++
// 	else evenNum++
// }
// document.write(`<br> oddNum ${oddNum} <br>evenNum ${evenNum}`);
//2
// let oddNum = 0;
// for (let num = 0; num < 100; num++) {
//   const randNum = 1 + Math.floor(Math.random() * 1000);
//   if (randNum % 2) oddNum++;
// }
// document.write(`<br> oddNum ${oddNum} <br>evenNum ${100 - oddNum}`);

//=======================================================
// 4 Задача 3. Вивести високосні роки у вказаному діапазоні (між початковим і кінцевим  роками).
// високосний  - він кратний 4, але не кратний 100, а також якщо він кратний 400.
// let start = parseInt(prompt("start"));
// let end = parseInt(prompt("end"));
// let sum = 0;

// if (start > end) {
//   const num = start;
//   start = end;
//   end = num;
// }
// for(let year = start; year<=end; year++){
// 	if(year%4===0 && (year%100 || year%400===0)){
// document.write(`${year} <br>`);
// 	}
// }
//варіант 2
// let num = 4 - (start % 4);
// if (start % 4) start += num;
// for (let year = start; year <= end; year += 4) {
//   if (year % 100 || year % 400 === 0) {
//     document.write(`${year} <br>`);
//   }
// }
//=======================================================
//5 Задача 4. Вивести усі трицифрові числа, де друга цифра завжди є меншою або рівню за першу, а третя є меншою або рівною за другу.    100 - 999   (237 =  c1=2, c2=3, c3=7)

// for (let num = 100; num <= 999; num++) {
//   const c3 = num % 10;
//   const c2 = Math.floor(num / 10) % 10;
//   const c1 = Math.floor(num / 100);
//   if(c3 <= c2 && c2 <= c1) document.write(`${num} <br>`);
// }
// //варіант 2
// for(let c1 =1; c1 <=9; c1++){
// 	for(let c2 =0; c2<= c1; c2++){
// 		for(let c3=0; c3<=c2; c3++){
// 			 document.write(`${c1}${c2}${c3}<br>`);
// 		}
// 	}
// }

//=======================================================
//6 Вивести з кожного десятка (1-10, 11-20, 21-30, ... , 91-100) по 3 випадкових парних числа
// for (let i = 1; i <= 91; i += 10) {
//   document.write(`<h1>${i} - ${i + 9}</h1><br>`);
//   for (let num = 1; num <= 3; ) {
//     const randNum = i + Math.floor(Math.random() * (i + 9 - i + 1));
//     if (randNum % 2 === 0) {
//       document.write(`${randNum}<br>`);
//       num++;
//     }
//   }
// }
//=======================================================
//7 Випадковим  чином вивести у рандомних позиціях 10 зображень-смайликів
// for (let i = 1; i <= 10; i++) {
//   const randimg = 1 + Math.floor(Math.random() * 4);
//   const randLeft = Math.floor(Math.random() * 100);
//   const randTop = Math.floor(Math.random() * 100);
//   document.write(
//     `<img src ='../img/${randimg}.png'style="position: absolute; left: ${randLeft}%; top: ${randTop}%">`
//   );
// }

//=======================================================
//8 Вивести радіо-кнопки для визначення того, скільки років людині у діапазоні (1-10, 11-20, 21-30, ... , 91-100)
// for(let i = 1; i<=91; i+=10 ){
// 	   document.write(`
//             <label>
//                Вік в межах від ${i} до ${i + 9}
//              <input type="radio" name="age" />
//             </label>
//             <hr>`)

// }
//=======================================================
//9 Сформували select з парними числами від 2 до 20
// <select>
//   <option value="1">11</option>
//   <option value="2">22</option>
//   <option value="3">33</option>
// </select>
// let marker = 0
// 	document.write(`<select>`);
//  for(let num = 2; num<=20; num+=2){
// 	document.write(`<option value="${marker}">${num}</option>`);
// 	marker++
//  }
// document.write(`</select>`);
// let marker = 0;
// document.write(`<select>`);
// for (let num = 2; num <= 50; num++) {
//   let c1 = Math.floor(num / 10);
//   let c2 = num % 10;
//   if (c1 === c2) {
//     document.write(`<option value="${marker}">${num}</option>`);
//     marker++;
//   }
// }
// document.write(`</select>`);

//=======================================================
//10Користувач вводить два символи у верхньому регістрі. Сформували два select з кодами символів у заданому діапазоні та символами у заданому діапазоні

// const start = prompt('start liter?').toUpperCase()
// const end = prompt("end liter?").toUpperCase();
// const startCode = start.charCodeAt(0)
// const endCode = end.charCodeAt(0);
// let marker = 0
// document.write(`<select>`);
// for (let num = startCode; num <= endCode; num++) {
//     document.write(`<option value="${marker}">${num}</option>`);
//     marker++;

// }
// document.write(`</select>`);
// document.write(`<select>`);
// for (let num = startCode; num <= endCode; num++) {
//   document.write(
//     `<option value="${marker}">${String.fromCharCode(num)}</option>`
//   );
//   marker++;
// }
// document.write(`</select>`);

//=======================================================
//11 Вивести 5 маркованих списків по 3 випадкових числа (1-100)
// for (let ul = 1; ul <= 5; ul++) {
//   document.write(`<h2>list #${ul}</h2>`);
//   document.write(`<ul>`);
//   for (let li = 1; li <= 3; li++) {
//     const item = 1 + Math.floor(Math.random() * 100);
//     document.write(`<li>${item}</li>`);
//   }
//   document.write(`</ul>`);
// }
//=======================================================
//12 Користувач загадує число (1-5). Комп’ютер задає питання поки не вгадає число користувача. Максимальна кількість спроб 5.
// let marker = false;
// for (let steep = 1; steep <= 5; steep++) {
//   const compNum = 1 + Math.floor(Math.random() * 5);
//   const ask = confirm(`it is ${compNum}?`);
//   if (ask) {
//     marker = true;
//     break;
//   }
// }
// if(marker)document.write(`ok`);
// else document.write(`no`);
// 2 способ
// let steep
// for (steep = 1; steep <= 5;) {
//   const compNum = 1 + Math.floor(Math.random() * 5);
//   const ask = confirm(`it is ${compNum}?`);
//   if (ask) break;
//   steep++;
// }
// if (steep < 5) document.write(`ok`);
// else document.write(`no`);
//=======================================================
//13 Задача 11. Знайти суму 5 непарних випадкових чисел, що знаходяться між заданими користувачем числами.
// let start = parseInt(prompt("start"));
// let end = parseInt(prompt("end"));
// let sum = 0;

// if (start > end) {
//   const num = start;
//   start = end;
//   end = num;
// }
// for (let num = 1; num <= 5; ) {
//   const randNum = start + Math.floor(Math.random() * (end - start + 1));
//   if (randNum % 2) {
//     document.write(`${randNum}<br>`);
// 	sum+=randNum
//     num++;
//   }
// }
// document.write(`${sum}<br>`);
// 2 способ
// let oddnum = 0;
// do {
//   const randNum = start + Math.floor(Math.random() * (end - start + 1));
//   if (randNum % 2) {
//     document.write(`${randNum}<br>`);
//     sum += randNum;
//     oddnum++;
//   }
// } while (oddnum < 5);

// document.write(`${sum}<br>`);
// 3 способ

// for (let num = 1; num <= 5; num++) {
//   const randNum = start + Math.floor(Math.random() * (end - start + 1));
//   if (!(randNum % 2)) randNum++;
//   document.write(`${randNum}<br>`);
//   sum += randNum;
// }
// document.write(`${sum}<br>`);
// 4 способ
// for (let num = 1; num <= 5; ) {
//   const randNum = start + Math.floor(Math.random() * (end - start + 1));
//   if (!(randNum % 2)) continue
//     document.write(`${randNum}<br>`);
//     sum += randNum;
//     num++;
// }
// document.write(`${sum}<br>`);
//=======================================================
//14 Знайти суму 5 перших непарних чисел, що знаходяться між заданими користувачем числами
// let start = parseInt(prompt("start"));
// let end = parseInt(prompt("end"));
// let sum = 0;

// if (start > end) {
//   const num = start;
//   start = end;
//   end = num;
// }
// // 1 способ
// let oddnum = 0;
// for (let num = start; num <= end && oddnum < 5; num++) {
//   if (num % 2) {
//     document.write(`${num}<br>`);
//     sum += num;
//     oddnum++;
//   }
// }
// document.write(`${sum}<br>`);
// 2 способ
//  let oddnum = 0;
// if(start%2===0) start++
// for (let num = start; num <= end && oddnum < 5; num+=2) {
//     document.write(`${num}<br>`);
//     sum += num;
//     oddnum++;

// }
// document.write(`${sum}<br>`);
// 3 способ
// let oddnum = 0;
// for (let num = start + (1 - (start % 2)); num <= end && oddnum < 5; num += 2) {
//   document.write(`${num}<br>`);
//   sum += num;
//   oddnum++;
// }
// document.write(`${sum}<br>`);
//=======================================================
//15 Задача 2.  Тільки позитивні емоції. З клавіатури вводиться М - максимальна кількість смайликів, які можна вивести. Комп’ютер випадково вибирає якесь із 4 наперед заданих. Серед них є сумний смайл.
// const maxSmileNum = parseInt(prompt('Максимальна кількість смайлів'))
// const sadSmileIndex = 4
//   1)Якщо знаходимо сумний смайл – зупитини
// const N = parseInt(prompt("number"));
// for (let i = 1; i <= N; i++) {
//   const randimg = 1 + Math.floor(Math.random() * 4);
//   const randLeft = Math.floor(Math.random() * 100);
//   const randTop = Math.floor(Math.random() * 100);
//   if(randimg === 4)break
//   document.write(
//     `<img src ='../img/${randimg}.png'style="position: absolute; left: ${randLeft}%; top: ${randTop}%">`
//   );
// }
//   2)Якщо знаходимо сумний смайл – пропустити
// const N = parseInt(prompt("number"));
// for (let i = 1; i <= N; i++) {
//   const randimg = 1 + Math.floor(Math.random() * 4);
//   const randLeft = Math.floor(Math.random() * 100);
//   const randTop = Math.floor(Math.random() * 100);
//   if (randimg === 4) continue;
//   document.write(
//     `<img src ='../img/${randimg}.png'style="position: absolute; left: ${randLeft}%; top: ${randTop}%">`
//   );
// }
//=======================================================
//16 Задача 2. Комп’ютер 3 рази випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах
//від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього
//(від лівого або правого краю) не більше ніж на 10. ((min-10)   ---  (max+10))
// let marker = false;

// let start = 1 + Math.floor(Math.random() * 100);
// let end = 1 + Math.floor(Math.random() * 100);
// if (start > end) {
//   const num = start;
//   start = end;
//   end = num;
// }
// for (let i = 1; i <= 3; i++) {
//   const numUser = parseInt(prompt("number"));
//   if (numUser >= (start - 10) && numUser <= (end + 10)) {
//     marker = true;
//     break;
//   }
// }
// if (marker) document.write(`win`);
// else document.write(`no`);

//=======================================================
//17 Двоє користувачів поступово вводять два числа від 1 до 10. Комп"ютер випадковим чином загадує число.
//1)якщо користувач вгадав - то має 10 балів
//2)якщо не вгадав і число користувача співпадає стосвоно парності/непарності - 3 бали
//Гра йде до тих пір, поки не хтось із користувачів не набере 20 балів

// let scorePlayer1 = 0;
// let scorePlayer2 = 0;

// let numUser1;
// let numUser2;
// do {
//   let compNum = 1 + Math.floor(Math.random() * 10);
//   numUser1 = parseInt(prompt("number user 1"));
//   numUser2 = parseInt(prompt("number user2"));
//   if (numUser1 === compNum) scorePlayer1 += 10;
//   else if ((numUser1 + compNum) % 2 === 0) scorePlayer1 += 3;
//   if (numUser2 === compNum) scorePlayer2 += 10;
//   else if ((numUser2 + compNum) % 2 === 0) scorePlayer2 += 3;
//   alert(`${scorePlayer1}----${scorePlayer2}`);
// } while (scorePlayer1 < 20 && scorePlayer2 < 20);
// document.write(`${scorePlayer1}----${scorePlayer2}`);

//=======================================================
//18 Сформувати 5 списків з випадкових чисел (1-100). У кожному списку елементи додаються до тих пір, поки числа менші за 50

// for (let ul = 0; ul < 5; ul++) {
//   document.write(`<h2>list #${ul}</h2>`);
//   document.write(`<ul>`);
//   let compNum;
//   do {
//     compNum = 1 + Math.floor(Math.random() * 100);
//      if (compNum < 50) document.write(`<li>${compNum}</li><br>`);
//   } while (compNum < 50);
//   document.write(`</ul><br>`);
// }
//====================================================================================================================================================================================================================================================
//19 0. Вивести на екран
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I

// let letter = "A".charCodeAt(0);
// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k < 5; k++) {
//     document.write(`${String.fromCharCode(letter + k)}  `);
//   }
//   letter++;
//   document.write(`<br><br>`);
// }

//=======================================================

//20 1. Використовуючи цикли вивести на екран 20 символів «о».
// for(let i=1; i<=20; i++){
// 	document.write(`#${i} --- 0 <br>`)
// }
//=======================================================
//21 2. Відобразити трикутник за допомогою символів «о»
// о
// оо
// ооо
// оооо
// ооооо
// оооооо
// ооооооо
// const num = 7;
// for (let i = 0; i < num; i++) {
//   for (let k = i; k < num; k++) {
//     document.write("&nbsp;");
//   }
//   document.write(`0`);
//   for (let k = 1; k <= i; k++) {
//     document.write(`0`);
//   }
//   document.write(`<br>`);
// }

//=======================================================
//22 2.1. Відобразити трикутник за допомогою символів «о»
//        о
//       оо
//      ооо
//     оооо
//    ооооо
//   оооооо
//  ооооооо

// const num = 7;
// let res = "";
// for (let i = num; i > 0; i--) {
//   for (let k = 1; k < i; k++) {
//     res += " ";
//   }
//   res += "o";
//   for (let j = num; j > i; j--) {
//     res += "o";
//   }
// res += "\n";
// }
//  console.log(res);
//=======================================================
//23 3. Відобразити трикутник за допомогою символів «о»
// оооооооооооо
// ооооооооооо
// оооооооооо
// ооооооооо
// оооооооо
// …
// оо
// о
// const num = 12;
// let res = "";
// for (let i = num; i > 0; i--) {
//   res += "o";
//   for (let j = i - 1; j > 0; j--) {
//     res += "o";
//   }
//   res += "\n";
// }
// console.log(res);
//=======================================================
//24 3.1. Відобразити трикутник за допомогою символів «о»
// оооооооооооо
//  ооооооооооо
//   оооооооооо
//    ооооооооо
//     оооооооо
//         …
//           оо
//            о
// const num = 12;
// let res = "";
// for (let i = num; i > 0; i--) {
//   for (let k = num; k > i; k--) {
//     res += " ";
//   }
//   res += "o";
//   for (let j = (i - 1); j > 0; j--) {
//     res += "oo";
//   }
//   res += "\n";
// }
//  console.log(res);
//=======================================================
//25 4. Побудувати ялинку
// о
// оо
// ооо
// оооо
// ооооо
// о
// оо
// ооо
// оооо
// ооооо
// о
// оо
// ооо
// оооо
// ооооо
// const num = 5;
// const quantity = 3;
// let res = "";
// for (let i = 0; i < quantity; i++) {
//   for (let k = 0; k < num; k++) {
//     res += "o";
//     for (let j = 0; j < k; j++) {
//       res += "o";
//     }
//     res += "\n";
//   }
//   res += "\n";
// }
// console.log(res);
//=======================================================

//26 5. Інвестор вклав  тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).
// const money = parseInt(prompt("Введіть початкову суму грошей:", ""));
// const year = 20;
// const percentage = 20;
// let sum = money;

// for (let i = 0; i < year; i++) {
//   sum += (sum * percentage) / 100;
// }

// document.write(`${sum.toFixed(2)}грн`);

//=======================================================
// 27 6. Інвестор вклав  тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. Визначити за допомогою циклів суму, яку він одержить.
// const money = parseInt(prompt(`How money?`, ""));
// const year = 20;
// const percentage = 20;
// const tax = 5;
// let sum = money;

// for (let i = 0; i < year; i++) {
//   sum += (sum * percentage) / 100;
// }
// const amount = sum - ((sum - money) * 5) / 100;

// document.write(`${amount.toFixed(2)}грн`);
//=======================================================
//28 7. Інвестор вклав  тис. грн на 20 років під 20% річних, а потім на 17 років під 27% річних. Визначити за допомогою циклів суму, яку він одержить.
// const money = parseInt(prompt("Введіть початкову суму грошей:", ""));
// const year1 = 20;
// const year2 = 17;
// const percentage1 = 20;
// const percentage2 = 27;
// let sum = money;

// for (let i = 0; i < year1; i++) {
//   sum += (sum * percentage1) / 100;
// }
// for (let i = 0; i < year2; i++) {
//   sum += (sum * percentage2) / 100;
// }

// document.write(`${sum.toFixed(2)}грн`);
//=======================================================
//29 8. Вивести на екран послідовність символів
// а о а о а о а о а о …
// Всього символів 82.
// const quantity = 82;
// let res = "";
// for (let i = 2; i <= quantity; i += 2) {
//   res += "a";
//   res += " ";
//   res += "o";
//   if (i !== quantity) res += " ";
// }
// document.write(res);
//=======================================================
//30 9. Вивести на екран
// 1 1
// 2 1 2
// 3 1 2 3
// 4 1 2 3 4
// …
// i 1 2 3 ..i
// 23 1 2 3 .. 22 23

// const num= 23;
// res = ''
// for (let i = 1; i <= num; i++) {
// res += i + ' '
//   for (let k = 1; k <= i; k++) {
//    res += k + ' ';
//   }
// res += '\n'
// }
// console.log(res);

//=======================================================
//31 10. Вивести на екран
// 1 1
// 2 1234
// 3 123456789
// 4 1234…16
// 5 1 … 25
// 6 1…36
// const num= 6;
// res = ''
// for (let i = 1; i <= num; i++) {
// res += i + ' '
//   for (let k = 1; k <= i**2; k++) {
//    res += k ;
//   }
// res += '\n'
// }
// console.log(res);
//=======================================================
//32 11. Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.
// for (let c1 = 1; c1<=9; c1++){
// 	for(let c2 = 0; c2<=9; c2++){
// 		if(c1>=c2) document.write(`${c1}${c2}<br>`);
// 	}
// }
//=======================================================
//33 11.1. Вивести на екран усі трицифрові числа, у яких перша цифра є більшою або рівною за суму другої і третьої.
// for (let c1 = 1; c1<=9; c1++){
// 	for(let c2 = 0; c2<=9; c2++){
// 		for (let c3 = 0; c3 <= 9; c3++)
//       if (c1 >= (c2+c3)) document.write(`${c1}${c2}${c3}<br>`);
// 	}
// }
//=======================================================
//34 12. Написати програму виведення на екран кожного символу латинського алфавіту та поруч з кожним з них символу, що передує йому та що слідує за ним.
// let a = 'A'
// let z = 'Z'
// const first = a.charCodeAt(0)
// const last = z.charCodeAt(0)
// let res = ''
// for(let i = first; i<=last; i++){
// if(i===first) res += String.fromCharCode(last) + '-';
// else res += String.fromCharCode(i - 1) + "-";
// res += String.fromCharCode(i) + "-";
// if (i === last) res += String.fromCharCode(first) + "<br>";
// else res += String.fromCharCode(i + 1) + "<br>";
// }
//  document.write(res)

//=======================================================
// ======================= інші ===========================
//35 1. З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною.
// let previousDirection = null,
//   currentDirection = null;
// let previousNumber = null,
//   currentNumber = null;

// do {
//   previousNumber = currentNumber;
//   currentNumber = parseFloat(prompt("Введіть число", ""));

//   document.write(`<p>${currentNumber}`);

//   // Якщо число вводять перший раз - то у нас недостатньо даних для перевірок
//   if (previousNumber === null) continue;

//   // Якщо послідовність стала - перервати
//   if (previousNumber === currentNumber) break;

//   previousDirection = currentDirection;

//   currentDirection = currentNumber - previousNumber > 0;

//   // Якщо ще не визначено напрям для порівняння (null), то їдемо далі
// } while (previousDirection === currentDirection || previousDirection === null);

// let numUser = parseFloat(prompt("Number?"));
// let num2User = parseFloat(prompt("Number?"));
// let num3User;
// let marker = false;

// while (num2User > numUser) {
//   num3User = parseFloat(prompt("Number?"));
//   if (num3User > num2User) {
//     num2User = num3User;
//     marker = true;
//   } else {
//     marker = false;
//     break;
//   }
// }
// while (num2User < numUser) {
//   num3User = parseFloat(prompt("Number?"));
//   if (num3User < num2User) {
//     num2User = num3User;
//     marker = true;
//   } else {
//     marker = false;
//     break;
//   }
// }
// if(!marker) alert(`Послідовність порушена`)

//=======================================================
//36 2. Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7 (у числі є всього дві цифри 7, наприклад: 2679328712)
// const numUser = parseFloat(prompt("Number with 7?"));
// const numStr = String(numUser);
// const start = numStr.indexOf("7");
// const end = numStr.lastIndexOf("7");
// let sum = 0;
// for (let i = start + 1; i < end; i++) {
//   let num = +numStr[i];
//   sum += num;
// }
// document.write(sum);

//=======================================================
//37 3. Дано ціле число N. Вивести ті натуральні числа, квадрати яких є меншими або рівними за N.

// const numUser = parseInt(prompt("Number?"));

// for (let i = 1; i <= numUser; i++) {
//   if (( i ** 2 <= numUser)) document.write(`${i}<br>`);
// }

//=======================================================
//38 4. Знайти суму всіх непарних чисел з діапазону, який вводить користувач з клавіатури.

// let numUserStart = parseInt(prompt("Number start?"));
// let numUserEnd = parseInt(prompt("Number end?"));

// if (numUserStart > numUserEnd) {
//   let num = numUserStart;
//   numUserStart = numUserEnd;
//   numUserEnd = num;
// }
// let sum = 0
// for (
//   let i = numUserStart + (1 - (numUserStart % 2));
//   i <= numUserEnd;
//   i += 2
// ) {
// 	sum+=i
// 	document.write(`${i}<br>`);
// }
// document.write(`<br><br>${sum}`);

//=======================================================
//39 5. Зобразити рівнобедрений трикутник із символів ^. Висоту задає користувач. Наприклад, на екрані висота =5.
// const quantity = 5;
// let res = "";
// for (let i = quantity; i > 0; i--) {
// 	for (let k = i; k > 1; k--) {
// 		res += "  ";
// 	}
// 	res+='/\\'
// 	for(let j = quantity ; j>i; j-- ){
// 			res+='/\\/\\'
// 	}
// 	res +='\n'
// }
// console.log(res);

//=======================================================

//40 6. На складі зберігається певна кількість ящиків з яблуками (наприклад, 15). Коли під’їде машина
// для завантаження, попросити користувача ввести, скільки ящиків завантажити у
// першу машину, у другу і т. д., поки на складі не закінчаться ящики з яблуками. Передбачити той випадок,
//коли користувач вводить кількість, що перевищує поточну кількість ящиків на складі.
// const box = 15;
// let lastBox = box;
// let car = 0;
// do {
//   let numUser = parseInt(prompt(`Number box? ${lastBox}`));

//   if (numUser <= lastBox) {
//     lastBox -= numUser;
//     car++;
//   } else {
//     alert(`no box, only ${lastBox}`);
//     continue;
//   }
// } while (lastBox > 0);
// document.write(`${car}<br>`);

//=======================================================
//41 7. Написати програму, яка показуватиме на екрані піднесене до квадрату число, що вводиться користувачем.
// Користувач вирішує самостійно – виходити з програми або продовжувати ввід.
// (Підказка: потрібно запустити нескінчений цикл, в тілі якого передбачити його переривання у випадку настання певної умови).
// let numUser
// do{
// numUser = parseInt(prompt(`Number?`))
// if(isFinite(numUser)) alert(numUser**2)
// }while(numUser)

//=======================================================
//42 8. Щоденно спортзал відвідує певна кількість людей. Користувач вводить такі дані: скільки людей відвідало спортзал за день та вік кожного відвідувача.
//Потрібно вивести вік найстаршого та наймолодшого відвідувачів, а також середній вік всіх відвідувачів спортзалу за день.

// const countUser = parseInt(prompt(`Number user?`));
// let ageUser;
// let minAge = Infinity;
// let maxAge = -Infinity;
// let sumAge = 0;

// for (let i = 1; i <= countUser; i++) {
//   ageUser = parseInt(prompt(`Age user  ${i}?`));
//   if (!isFinite(ageUser)) break;
//   if (ageUser < minAge) minAge = ageUser;
//   if (ageUser > maxAge) maxAge = ageUser;
//   sumAge += ageUser;
// }

// let middleAge = Math.round(sumAge / countUser);
// document.write(
//   `вік найстаршого: ${maxAge}<br>вік наймолодшого: ${minAge}<br>середній вік: ${middleAge}`
// );

//=======================================================
//43 9. Комерсант, володіючи стартовим капіталом N грн, зайнявся торгівлею, що збільшує його капітал щомісячно на р%. Через скільки років
// він накопичить суму S, достатню для того, щоб придбати власний магазин?
// const moneyUser = parseFloat(prompt(`money user?`));
// const percentage = parseInt(prompt(`%?`));
// const totalSum = parseFloat(prompt(`Total Sum ?`));
// let sum = moneyUser;
// let year = 0;
// while (sum <= totalSum) {
//   sum += (sum * percentage) / 100;
//   year++;
// }
// document.write(year);

//=======================================================

//44 10. Для заданого натурального числа n знайти найменше число k, яке задовольняє нерівність k!>=n.

// const num = parseInt(prompt(`Number?`));
// let res = 1;
// for (let k = 1; k <= num; k++) {
//   res *= k;
//   if (res >= num) {
//     document.write(k);
//     break;
//   }
// }

//=======================================================
//45 11. Написати програму, що виводить на екран таблицю множення на k (k вводиться з клавіатури).
// const numUser = parseInt(prompt(`Number?`))
// for(let i = 1; i<=9; i++){
// 	document.write(`${i} * ${numUser} = ${numUser*i}<br>`);
// }

//=======================================================
//46 12. Знайти найбільший спільний дільник n натуральних чисел.
// const numUser1 = parseInt(prompt(`Number 1?`));
// const numUser2 = parseInt(prompt(`Number 2?`));

// for (let i = Math.min(numUser1, numUser2); i >=1; i--) {
// 	if(numUser1%i === 0 && numUser2%i === 0){
// 		document.write(i)
// 		break
// 	}
// }

//=======================================================
//47 13. У закладі освіти повідомляється про початок навчального дня, тривалість уроку, кількість уроків.
//Отримати розклад дзвінків на весь навчальний день.
// const startLesson = parseFloat(prompt(`start Lesson`));
// const lessonDuration = parseFloat(prompt(`lesson Duration in minute`));
// const numberlessons = parseFloat(prompt(`number of lessons?`));

// const minuteStartLesson =
//   Math.trunc(startLesson) * 60 +
//   Math.trunc((startLesson - Math.trunc(startLesson)) * 100);

// let lesson = minuteStartLesson;

// for (let i = 1; i <= numberlessons; i++) {
//   let start = lesson;
//   lesson += lessonDuration;
//   let end = lesson;

//   document.write(
//     `Урок №${i}  start: ${Math.floor(start / 60)}год ${
//       start % 60
//     }хв  end: ${Math.floor(end / 60)}год ${end % 60}хв <br><br>`
//   );
// }

//=======================================================
//48 14. Визначити, чи є натуральне число N степенем числа 3 чи ні.
// const numUser = parseInt(prompt(`Number?`));
// let res = numUser;
// while (res > 1) {
//   res /= 3;
// }
// if (res === 1) document.write(`yes`);
// else document.write(`no`);

//=======================================================
//49 15. Отримати всі можливі способи розміщення п’яти книг різних авторів.
// const quantity = 5;
// res = "";
// for (let i = 1; i <= quantity; i++) {
//   for (let k = i; k < quantity + i; k++) {
//     if (k > quantity) res += k - quantity;
//     else res += k;
//   }
//   res += "\n";
// }
// console.log(res);
//=======================================================
//50 16. Скількома різними способами можна розфарбувати грані куба у чотири кольори. Надрукувати всі можливі варіанти.facet

// const numColor = 4;
// let marker = 0;
// document.write(`<div class = 'tab'>`)
// for (let facet1 = 1; facet1 <= numColor; facet1++) {
//   for (let facet2 = 1; facet2 <= numColor; facet2++) {
//     for (let facet3 = 1; facet3 <= numColor; facet3++) {
//       for (let facet4 = 1; facet4 <= numColor; facet4++) {
//         for (let facet5 = 1; facet5 <= numColor; facet5++) {
//           for (let facet6 = 1; facet6 <= numColor; facet6++) {
//             marker++;
//             //`${facet1}${facet2}${facet3}${facet4}${facet5}${facet6}`
//             let color1;
//             switch (facet1) {
//               case 1:
//                 color1 = `rgb(167, 20, 61)`;
//                 break;
//               case 2:
//                 color1 = `rgb(80, 198, 104)`;
//                 break;
//               case 3:
//                 color1 = `rgb(54, 71, 198)`;
//                 break;
//               case 4:
//                 color1 = `yellow`;
//                 break;
//             }
//             let color2;
//             switch (facet2) {
//               case 1:
//                 color2 = `rgb(167, 20, 61)`;
//                 break;
//               case 2:
//                 color2 = `rgb(80, 198, 104)`;
//                 break;
//               case 3:
//                 color2 = `rgb(54, 71, 198)`;
//                 break;
//               case 4:
//                 color2 = `yellow`;
//                 break;
//             }
//             let color3;
//             switch (facet3) {
//               case 1:
//                 color3 = `rgb(167, 20, 61)`;
//                 break;
//               case 2:
//                 color3 = `rgb(80, 198, 104)`;
//                 break;
//               case 3:
//                 color3 = `rgb(54, 71, 198)`;
//                 break;
//               case 4:
//                 color3 = `yellow`;
//                 break;
//             }
//             let color4;
//             switch (facet4) {
//               case 1:
//                 color4 = `rgb(167, 20, 61)`;
//                 break;
//               case 2:
//                 color4 = `rgb(80, 198, 104)`;
//                 break;
//               case 3:
//                 color4 = `rgb(54, 71, 198)`;
//                 break;
//               case 4:
//                 color4 = `yellow`;
//                 break;
//             }
//             let color5;
//             switch (facet5) {
//               case 1:
//                 color5 = `rgb(167, 20, 61)`;
//                 break;
//               case 2:
//                 color5 = `rgb(80, 198, 104)`;
//                 break;
//               case 3:
//                 color5 = `rgb(54, 71, 198)`;
//                 break;
//               case 4:
//                 color5 = `yellow`;
//                 break;
//             }
//             let color6;
//             switch (facet6) {
//               case 1:
//                 color6 = `rgb(167, 20, 61)`;
//                 break;
//               case 2:
//                 color6 = `rgb(80, 198, 104)`;
//                 break;
//               case 3:
//                 color6 = `rgb(54, 71, 198)`;
//                 break;
//               case 4:
//                 color6 = `yellow`;
//                 break;
//             }
//             document.write(`<table>`);
//             document.write(`<tr>`);
//             document.write(
//               `<td></td><td></td><td></td><td style="background-color: ${color1};"></td>`
//             );

//             document.write(`</tr>`);
//             document.write(`<tr>`);
//             document.write(
//               `<td style="background-color: ${color2};"></td><td style="background-color: ${color3};"></td><td style="background-color: ${color4};"></td><td style="background-color: ${color5};"></td><td style="background-color: ${color6};"></td>`
//             );

//             document.write(`</tr>`);
//             document.write(`<tr>`);
//             document.write(
//               `<td></td><td></td><td></td><td style="background-color: ${color6};"></td>`
//             );

//             document.write(`</tr>`);
//             document.write(`</table><br>`);
//           }
//         }
//       }
//     }
//   }
// }
// document.write(`</div>`);
// document.write(`<br>${marker}`);

//=======================================================
//51 17. Чи можливо задане натуральне число подати як суму квадратів двох чисел.
// const numUser = parseInt(prompt(`Number?`));
// let marker = false;
// for (let num1 = 1; num1 <= numUser; num1++) {
//   for (let num2 = 1; num2 <= numUser; num2++) {
//     if ((num1 ** 2 + num2 ** 2 ) === numUser && num1>num2) {
//       document.write(`${numUser} = ${num1}**2 + ${num2}**2 <br>`);
//       marker = true;
//     }
//   }
// }
// if(!marker)   document.write(`не можливо`);

//=======================================================
//52 18. Є n бактерій червоного кольору. Через 1 одиницю часу червона бактерія змінюється на зелену, потім ще через
//1 одиницю часу ділиться на червону та зелену. Скільки буде всіх бактерій через k одиниць часу?
// const red = parseInt(prompt(`Number red?`));
// const hourNum = parseInt(prompt(`Number hour?`));
// let markerRed = red
// let markerGreen = 0

// for(let hour = 1; hour<=hourNum; hour++){
// if(hour%2){
// 	markerGreen += markerRed
// 	markerRed = 0
// }
// if(hour%2===0){
// 	markerRed = markerGreen
// }
// }
// const sum = markerRed + markerGreen
// document.write(
//   `red: ${markerRed}<br>green: ${markerGreen}<br>sum: ${sum}`
// );
//=======================================================
//53 19. Натуральне число з n цифр є числом Армстронга, якщо сума степенів цифр, кожна з яких піднесена до n,
//дорівнює самому числу (153=1*1*1+5*5*5+3*3*3). Отримати всі числа Армстронга для n=4 и n=3.

// for (let c1 = 1; c1 <= 9; c1++) {
//   for (let c2 = 0; c2 <= 9; c2++) {
//     for (let c3 = 0; c3 <= 9; c3++) {
//       if (c1 ** 3 + c2 ** 3 + c3 ** 3 === c1 * 100 + c2 * 10 + c3){
// 		console.log(`${c1}${c2}${c3}`)
// 			 //document.write(`${c1}${c2}${c3}<br>`);
// 	  }

//     }
//   }
// }
// for (let c1 = 1; c1 <= 9; c1++) {
//   for (let c2 = 0; c2 <= 9; c2++) {
//     for (let c3 = 0; c3 <= 9; c3++) {
//       for (let c4 = 0; c4 <= 9; c4++) {
//         if (
//           (c1 ** 4 + c2 ** 4 + c3 ** 4 + c4 ** 4) ===
//           (c1 * 1000 + c2 * 100 + c3 * 10 + c4)
//         ) document.write(`${c1}${c2}${c3}${c4}<br>`);
//       }
//     }
//   }
// }

//=======================================================
//54 20. З клавіатури вводяться n чисел та саме значення n. Написати програму,
//яка підраховує кількість від’ємних, додатних та нульових чисел серед введених.
// const quantityNum = parseInt(prompt(`Number quantity?`));
// let zero = 0
// let negative = 0
// let positive = 0
// for(let num = 1; num<= quantityNum; num++){
// 	const numUser = parseFloat(prompt(`Number #${num}?`));
// 	if(numUser === 0) zero++
// 	else if(Math.abs(numUser) === numUser) positive++
// 	else negative++
// }

// document.write(`zero: ${zero}<br>negative: ${negative}<br>positive: ${positive}<br>`);

//=======================================================
//55 21. Напишіть програму для переводу мір довжини, торгової та аптекарської ваги (лічильник циклу від 1 до 10)
// сажнів у метри (${i} сажень дорівнює ${i*2,1366} см)<br>
// футів у метри (${i} фут дорівнює ${i*0,3048} м)<br>
// драхм у грами (${i} драхма дорівнює ${i*3,7325} г)<br>
// унцій у грами (${i} унція дорівнює ${i*29,86} г)<br>
// фунтів у кілограми (${i} фунт дорівнює ${i*0,40951} кг)<br>
// аршинів у метри (${i} аршин дорівнює ${i*0,7112} м)<br>
// золотників у грами (${i} золотник дорівнює ${i*4,2657} г)<br>
// дюймів у міліметри (${i} дюйм дорівнює ${i*25,3995} мм)<br><br>

// for(let i = 1; i<=10;i++){
// 	document.write(`сажнів у метри (${i} сажень дорівнює ${(i * 2.1366).toFixed(4)} см)<br>
// футів у метри (${i} фут дорівнює ${(i * 0.3048).toFixed(4)} м)<br>
// драхм у грами (${i} драхма дорівнює ${(i * 3.7325).toFixed(4)} г)<br>
// унцій у грами (${i} унція дорівнює ${(i * 29.86).toFixed(2)} г)<br>
// фунтів у кілограми (${i} фунт дорівнює ${(i * 0.40951).toFixed(5)} кг)<br>
// аршинів у метри (${i} аршин дорівнює ${(i * 0.7112).toFixed(4)} м)<br>
// золотників у грами (${i} золотник дорівнює ${(i * 4.2657).toFixed(4)} г)<br>
// дюймів у міліметри (${i} дюйм дорівнює ${(i * 25.3995).toFixed(4)} мм)<br><br>`);
// }

//=======================================================
//56 22. Введіть з клавіатури 10 пар чисел. Порівняйте числа у кожній парі та надрукуйте більше з них.
// for(let i=1; i<=10;i++){
//   const numUser1 = parseFloat(prompt(`Number 1?`));
//   const numUser2 = parseFloat(prompt(`Number 2?`));
//   if (numUser1 > numUser2) document.write(`пара #${i}: ${numUser1}<br>`);
//  else document.write(`пара #${i}: ${numUser2}<br>`);
// }
//=======================================================
//57 23. Дано натуральні числа від 20 до 50. Надрукувати ті з них, які діляться на 3, але не діляться на 5.
// for (let i = 20; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) document.write(`${i}<br>`);
// }

//=======================================================
//58 24. Дано натуральні числа від 35 до 87. Надрукувати ті з них, які при діленні на 7 дають остачу 1, 2 або 5.
// for (let i = 35; i <= 87; i++) {
//   if (i % 7 === 1 || i % 7 === 2 || i % 7 === 5) document.write(`${i}<br>`);
// }

//=======================================================
//59 10. Дано натуральні числа від 1 до 50. Знайти суму тих, які діляться на 5 чи 7.
// let sum=0
// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0 || i % 7 === 0){
// document.write(`${i}<br>`);
// sum+=i
//   }
// }
// document.write(`<br><br>${sum}`);
//=======================================================
//60 11. Надрукувати всі двоцифрові числа, які діляться на 4, але не діляться на 6.
// for (let i = 10; i <= 99; i++) {
//   if (i % 4 === 0 && i % 6 !== 0)document.write(`${i}<br>`);
// }
//=======================================================
//61 12. Знайти добуток двоцифрових непарних чисел кратних 13.
// let res = 1;
// for (let i = 10; i <= 99; i++) {
//   if (i % 13 === 0) {
//     document.write(`${i}<br>`);
//     res *= i;
//   }
// }
// document.write(`<br><br>${res}`);
//=======================================================
//62 13. Знайти суму всіх чисел від 100 до 200, кратних 17.
// let res = 0;
// for (let i = 100; i <= 200; i++) {
//   if (i % 17 === 0) {
//     document.write(`${i}<br>`);
//     res += i;
//   }
// }
// document.write(`<br><br>${res}`);
//=======================================================
//63 16. У бригаді, що працює на сінокосі, є N сінокосарок.
//Перша сінокосарка працювала m годин, а кожна наступна на 10 хв більше, ніж попередня.
//Скільки годин працювала вся бригада?
// const quantityN = 10;
// const hourM = 2;
// let res = hourM*60;
// for (let i = 0; i < quantityN; i++) {
// res+=10
// }
// let min = res % 60;
// res= Math.floor(res/60)

// document.write(`${res}год ${min}хв`);
//=======================================================
//64 17. У комп’ютер вводяться по черзі дані про зріст N учнів класу. Визначити середній зріст учнів класу.
// const quantityStudents = parseInt(prompt(`Number?`));
// let sum = 0
// for(let i =0; i<quantityStudents; i++){
// 	const heightStudents = parseFloat(prompt(`height Students`));
// 	sum+=heightStudents
// }
// const middle = (sum/quantityStudents).toFixed(2)
// document.write(`${middle}cm`);

//=======================================================
//65 18. Задано натуральне число N. Знайти кількість натуральних чисел, що не перевищують N і не діляться на жодне з чисел 2,3,5.
// const numN = parseInt(prompt(`Number?`));
// let res = 0;
// for (let i = 1; i <= numN; i++) {
//   if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
//     document.write(`${i}<br>`);
//     res++
//   }
// }
// document.write(`<br><br>${res}`);
//=======================================================
//66 19. Два двоцифрових числа, записаних послідовно одне за одним, утворюють чотирицифрове число, що
//ділиться на їх добуток. Знайти ці числа.

// for (let c1 = 10; c1 <= 99; c1++) {
//   for (let c2 = 10; c2 <= 99; c2++) {
//     let num = +('' + c1 + c2);
// 	if(num%(c1*c2)===0)document.write(`${num}<br>`);
//   }
// }

//=======================================================
//67 20. Дано два двоцифрові числа А і В. З цих чисел утворили два чотирицифрові числа:
//перше число отримали шляхом запису спочатку числа А, потім В, друге – шляхом запису спочатку В, потім А.
// Знайти числа А і В, якщо відомо, що перше чотиризначне число націло ділиться на 99, а друге на 49.

// for (let A = 10; A <= 99; A++) {
//   for (let B = 10; B <= 99; B++) {
//     let num1 = +("" + A + B);
//     let num2 = +("" + B + A);
//     if (num1 % 99 === 0 && num2 % 49 === 0) document.write(`${A}<br>${B}`);
//   }
// }

//=======================================================
//68 21. У першокласника Миколи m грн. Морозиво коштує k грн. Микола вирішив наїстися досхочу
//морозива, для цього він до тих пір, поки йому вистачало грошей, купував по одному морозиву і з'їдав його.
//Як Миколі дізнатися, скільки грошей залишиться в нього врешті-решт? Врахуйте, що Микола ділити ще не вміє,
// а вміє тільки віднімати та додавати. Скільки морозив він може з'їсти?
// let moneyN = parseFloat(prompt(`Money?`));
// const iceMoney = parseFloat(prompt(`Money ice?`));
// let marker = 0;
// while (moneyN >= iceMoney) {
//   moneyN -= iceMoney;
//   marker++;
// }
// document.write(`ice:${marker}шт<br>залишилось: ${moneyN}грн`);
//=======================================================
//69 22. Є шматок тканини довжиною M метрів. Від нього послідовно відрізають шматки різної довжини.
//Усі дані щодо використання тканини вводяться до комп'ютера. Комп'ютер повинен вивести повідомлення про те,
//що матеріалу не вистачає, якщо буде потрібен шматок тканини, довжина якого перевищує довжину шматка, що залишився.
// let totalLength = parseFloat(prompt(`Довжина тканини?`));
// let lengthUser;
// do {
//   lengthUser = parseFloat(
//     prompt(`Довжина шматкa?total length: ${totalLength}`)
//   );
//   if (lengthUser <= totalLength) totalLength -= lengthUser;
//   else {
// 	alert(`No. total length: ${totalLength}`)
// 	continue
//   }
// } while (totalLength > 0);

// alert('тканина закінчилась')

//=======================================================
//70 23. Розпочавши тренування, спортсмен першого дня пробіг 10 км. Щодня він збільшував денну
// норму на 10% від норми попереднього дня. Який сумарний шлях пробіжить спортсмен за 7 днів? Якого
//дня вперше спортсмен пробіжить понад 20 км? Якого дня вперше сумарний шлях перевищить 60 км?
// const lengthFirstDay = 10;
// const percentage = 10;
// const dayMax = 7;
// let totalLength = lengthFirstDay;
// for (let day = 1; day <= dayMax; day++) {
//   totalLength += (totalLength * percentage) / 100;
// }
// document.write(`за 7 днів спортсмен пробіг ${totalLength.toFixed(2)}km <br>`);
// totalLength = lengthFirstDay;
// let marker = 0;
// while (totalLength < 20) {
//   totalLength += (totalLength * percentage) / 100;
//   marker++;
// }
// document.write(`20 км ${marker}day <br>`);

// totalLength = lengthFirstDay;
// let marker2 = 0;
// while (totalLength < 60) {
//   totalLength += (totalLength * percentage) / 100;
//   marker2++;
// }
// document.write(`60 км ${marker2}day <br>`);

//=======================================================
//71 24. Написати програму, яка виконує перевірку, чи є натуральне число N простим.
// const numUser = parseInt(prompt(`Number?`));
// let marker = 0;
// for (let i = 2; i < numUser; i++) {
//   if (numUser % i === 0) marker++;
// }
// if (marker) document.write(`${numUser}- cкладне число`);
// else document.write(`${numUser}- просте число`);

//=======================================================
//72 25. Дано ціле число N (N >1). Знайти найменше ціле число K, яке задовольняє нерівність 3K > N.
// const numUser = parseInt(prompt(`Number?`));
// let k = 1;
// while (3 * k <= numUser) {
//   k++;
// }
// document.write(`3 * ${k} > ${numUser}`);
//=======================================================
//73 26. З клавіатури вводяться числа та послідовно сумуються. Знайти кількість введених користувачем
//чисел, коли їх сума перевищить 100.
// let numUser;
// let marker = 0;
// let sum = 0;
// do {
//   alert(`${sum} < 100`);
//   numUser = parseFloat(prompt(`Number?`));
//   marker++;
//   sum += numUser;
// } while (sum < 100);
// document.write(`кількість введених користувачем чисел ${marker}`);

//=======================================================
//++++ChatGPT
//74 27. Дано ціле число N (N > 0). Використовуючи операції ділення націло та остачі від ділення,
//знайти кількість та суму його цифр.
// let numUser = parseFloat(prompt(`Number?`));
// let count = 0;
// let sum = 0;

// while (numUser > 0) {
//   let num = numUser % 10;
//   count++;
//   sum += num;
//   numUser = Math.floor(numUser / 10);
// }
// document.write(`кількість цифр ${count}, сумa цифр ${sum}`);

//=======================================================
//75 28. Дано ціле число N (N > 0). Використовуючи операції ділення націло та остачі від ділення,
//визначити чи є цифра 2 у числі N. Якщо так, то вивести True, якщо ні – False.

// let numUser = parseFloat(prompt(`Number?`));
// let res = false
// while (numUser > 0) {
//   let num = numUser % 10;
// if(num===2) res = true
//   numUser = Math.floor(numUser / 10);
// }
// document.write(` ${res}`);

//=======================================================
//76 29. Дано ціле число N (N > 0). Використовуючи операції ділення націло та остачі від ділення,
//визначити чи є в записі числа N непарні цифри. Якщо так, то вивести True, якщо ні – False.

// let numUser = parseFloat(prompt(`Number?`));
// let res = false
// while (numUser > 0) {
//   let num = numUser % 10;
// if(num%2===0) res = true
//   numUser = Math.floor(numUser / 10);
// }
// document.write(` ${res}`);

//=======================================================
//77 30. Спортсмен-лижник в перший день тренування пробіг 10 км. Кожного наступного дня він збільшував
//довжину пробігу на P% від довжини пробігу попереднього дня (P – дійсне число, 0 < P < 50). Визначити,
//після якого дня тренування сумарний пробіг лижника за всі дні перевищить 200 км. Вивести знайдену кількість днів K (ціле)
// і сумарний пробіг S (дійсне число).
// const lengthDay = 10;
// const lengthEnd = 200;
// const percentageStart = 1;
// const percentageEnd = 50;
// let day = 1
// let totalLength = lengthDay;
// for (let per = percentageStart; per <= percentageEnd; per++) {
//   totalLength += (totalLength * per) / 100;
//   day++
//   if(totalLength>=lengthEnd) break
// }
// document.write(`спортсмен пробіг 200 км за ${day} day <br>`);

//=================================================================================================================================================================================================================================================================
//78 1. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.
// let sum = 0;
// let numUser = parseFloat(prompt(`Number?`));
// while(numUser !==0){
// 		sum += numUser;
//     numUser = parseFloat(prompt(`Number?`));
// }

// document.write(`sum = ${sum}`);

//=======================================================
//79 2.З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.

// let numUser = parseFloat(prompt(`Number?`));
// let product = 0
// if(numUser) product = 1
// while(numUser !==0){
// 		product *= numUser;
//     numUser = parseFloat(prompt(`Number?`));
// }

//  document.write(`product = ${product}`);

//=======================================================
//80 2.1. З клавіатури поступово вводяться символи поки не буде введено символ «а». Вивести рядок символів у зворотному порядку.
// let letter = prompt(`letter?`);
// let string = '';
// while (letter !== 'a') {
//   string = letter + string
//   letter = prompt(`letter?`);
// }
// if (string)document.write(`${string}`);
// else document.write(`not string`);
//=======================================================
//81 3. З клавіатури вводиться початкове знчення суми. Поки сума є меншою за 100 додавати до неї числа, які вводяться з клавіатури.
// let sum = parseFloat(prompt(`Sum?`));
// let numUser;
// do {
//   numUser = parseFloat(prompt(`Number?`));
//   if (sum + numUser < 100) sum += numUser;
//   else if (sum + numUser === 100){
// 	sum += numUser
// 	 break;}
//   else {
//     alert(
//       `при додовані числа ${numUser} сума буде більше за 100. Загальна сума = ${sum}`
//     );
//     continue;
//   }
// } while (sum <= 100);
// document.write(sum);

//  let sum = parseFloat(prompt(`Sum?`));
//  let numUser;
// while(sum<=100){
//   numUser = parseFloat(prompt(`Number?`));
//   if (sum + numUser < 100) sum += numUser;
//     else if (sum + numUser === 100){
//   	sum += numUser
//   	 break;}
//     else {
//       alert(
//         `при додовані числа ${numUser} сума буде більше за 100. Загальна сума = ${sum}`
//       );
//       continue;
// }

// document.write(sum);

//=======================================================
//82 4. З клавіатури поступово вводяться числа. Знайти суму перших N парних чисел.

// let marker = 0;
// let sum = 0;
// do {
//   const num = parseFloat(prompt(`Number?`));
//   if (num % 2 === 0 && num !== 0) {
//     sum += num;
//     marker++;
//   }
// } while (marker < 2);
// if (sum) document.write(sum);
// else document.write(`немає парних чисел`);

//=======================================================
//83 4.1. З клавіатури вводяться два числа N i M (N<M). Вивести а екран числа
// N---M
// N+1 --- M-1
// N+2 --- M-2
// N+3 --- M-3
// . . . . . .
// Виведення завершити коли число справа стане меншим за число зліва.
// let N = parseFloat(prompt(`Number N?`));
// let M = parseFloat(prompt(`Number M?`));

// if (N > M) {
//   const S = N;
//   N = M;
//   M = S;
// }

// while (N < M) {
//   document.write(`${N++} --- ${M--}<br>`);
// }

//=======================================================
//84 5. На екрані виводиться меню:
// 1. Сказати «Привіт».
// 2. Сказати «Зачекай».
// 3. Сказати «До побачення».
// 4. Вихід.
// Шляхом вибору пунктів меню виводити відповідні повідомлення, поки не буде вибрано пункт номер 4.
// let menu;
// do {
//   menu = parseInt(
//     prompt(
//       "1. Сказати «Привіт».\n2. Сказати «Зачекай». \n3. Сказати «До побачення».\n4. Вихід."
//     )
//   );
//   if(menu<1||menu>4){
// 	alert('Некоректне число')
// 	continue
//   }
// let res
//   switch (menu) {
//     case 1:
//       res = "Привіт";
//       break;
//     case 2:
//       res = "Зачекай";
//       break;
//     case 3:
//       res = "До побачення";
//       break;
//   }
//   if (menu !== 4) alert(res);
//   else break;
// } while (menu !== 4);

//=======================================================
//86 6. На екрані виводиться меню:
// 1.Ініціалізація (сума=0)
// 2.Додати 2
// 3.Додати 3
// 4.Відняти 2
// 5.Відняти 3.
// 6.Вивести суму
// 7.Вихід.
// Шляхом поступового вибору відповідних пунктів спробувати отримати число N, яке вводиться з клавіатури.
// let menu;
// let sum;
// do {
//   menu = parseInt(
//     prompt(
//       "1.Ініціалізація (сума=0)\n2.Додати 2\n3.Додати 3\n4.Відняти 2\n5.Відняти 3.\n6.Вивести суму\n7.Вихід."
//     )
//   );
//   if (menu < 1 || menu > 7) {
//     alert("Некоректне число");
//     continue;
//   }
//   switch (menu) {
//     case 1:
//       sum = 0;
//       break;
//     case 2:
//       sum += 2;
//       break;
//     case 3:
//       sum += 3;
//       break;
//     case 4:
//       sum -= 2;
//       break;
//     case 5:
//       sum -= 3;
//       break;
//     case 6:
//       alert(sum);
//       break;
//     case 7:
//       break;
//   }
// } while (menu !== 7);
// document.write(sum);
//=======================================================
//87 7. Користувач загадує натуральне число від 1 до N. Шляхом задавання мінімальної кількості запитань знайти вказане число
//(застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується на 2 шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу).
//+++++chatGPT

// const N = 100;
// let start = 1;
// let end = N;

// while (true) {
//   let middle = Math.floor((start + end) / 2);

//   const answer = prompt(`It is ${middle}`, "<,>,=");
//   if (answer === "=") {
//     alert(`comp win. It is ${middle}`);
//     break;
//   } else if (answer === ">") start = middle + 1;
//   else if (answer === "<") end = middle - 1;
//   else {
//     alert("некоректне значення");
//     continue;
//   }
// }

//=======================================================
//88 8. З клавіатури вводиться число. Знаходити суму цифр до тих пір. Поки сума не стане більшую за 20.

// let sum = 0;
// let numUser;
// do {
//   numUser = parseFloat(prompt(`Number?`));
//   if (sum + numUser < 20) sum += numUser;
//   else if (sum + numUser === 20) {
//     sum += numUser;
//     break;
//   } else {
//     alert(
//       `при додовані числа ${numUser} сума буде більше за 20. Загальна сума = ${sum}`
//     );
//     continue;
//   }
// } while (sum <= 20);
// document.write(sum);

//=======================================================
//89 9.З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його.
// const password = 78
// let passwordUser
// do{
// 	passwordUser = parseFloat(prompt(`password?`));
// 	if(passwordUser === password) alert('пароль вірний')
// 		else alert("пароль невірний");
// }while(passwordUser !== password)
//=======================================================
//90 10.З клавіатури вводиться вартість одиниці товару. Поки користувач не введе суму грошей, яка достатня для купівлі товару або не відмовиться від купівлі давати можливість вводити суму грошей.
//  const priceProduct = parseFloat(prompt(`Яка вартість одиниці товару?`));
//  let userMoney
//  let sum = 0
// do{
// userMoney = parseFloat(prompt(`Введіть суму грошей. Вартість одиниці товару = ${priceProduct}, вам залишилось ввести суму = ${priceProduct - sum}`));
// sum+=userMoney
// if(sum>=priceProduct){
// alert(`Дякуємо за покупку`)
// break
// }
// }while(userMoney)

//=======================================================
//91 11. Комп’ютер загадує випадкове число від 1 до 10. Вгадати число шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача.

// const compNum = 1 + Math.floor(Math.random()*10)
// let userNum
// let marker = 0
// do {
//   userNum = parseFloat(prompt(`Введіть число?`));
//   if (userNum !== compNum) alert("no");
//   marker++
// } while (userNum !== compNum);

// alert(`Ви вгадали з ${marker} спроби. Це число ${compNum}`)
//=======================================================
//92 11.1. Комп’ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача.
// const compNum1 = 1 + Math.floor(Math.random() * 10);
// const compNum2 = 1 + Math.floor(Math.random() * 10);
// let userNum1;
// let userNum2;
// let marker = 0;
// do {
//   userNum1 = parseFloat(prompt(`Введіть перше число?`));
//   userNum2 = parseFloat(prompt(`Введіть друге число?`));
//    if (userNum1 === compNum1 && userNum2 !== compNum2)
//      alert(`Ви вгадали тільки перше  число =  ${userNum1}`);
//    else if (userNum1 !== compNum1 && userNum2 === compNum2)
//      alert(`Ви вгадали тільки друге число =  ${userNum2}`);
//   else if (userNum1 !== compNum1 && userNum2 !== compNum2) alert("no");

//   marker++;
// } while (userNum1 !== compNum1 || userNum2 !== compNum2);

//  alert(`Ви вгадали з ${marker} спроби. Це числa ${compNum1} i ${compNum2}`);

//=======================================================
//93 12. З клавіатури вводяться поступово числа. Знайти два найбільші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.
// let userNum;
// let max1 = -Infinity;
// let max2 = -Infinity;
// do {
//   userNum = parseFloat(prompt(`Введіть число?`));
//   if (userNum > max1) {
//     max2 = max1;
//     max1 = userNum;
//   } else if (userNum !== max1 && userNum > max2) max2 = userNum;
// } while (max1 - max2 > 5);
// document.write(`1max =${max1}, 2max =${max2} `);

//=======================================================
//94 13. З клавіатури вводяться поступово числа. Знайти два найменші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.
// let userNum;
// let min1 = Infinity;
// let min2 = Infinity;
// do {
//   userNum = parseFloat(prompt(`Введіть число?`));
//   if (userNum < min1) {
//     min2 = min1;
//     min1 = userNum;
//   } else if (userNum !== min1 && userNum < min2) min2 = userNum;
// } while ((min2 - min1) > 5);
// document.write(`1min =${min1}, 2min =${min2} `);

//=======================================================
//95 14.  Морський бій. Комп’ютер випадковим чином розміщує одиночний корамель на полі 5*5. З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. Спробуйте відоразити гру графічно.

// const x = 1 + Math.floor(Math.random()*5)
// const y = 1 + Math.floor(Math.random()*5)
// let userX
// let userY
// do {
//   userX = parseInt(prompt(`Введіть X: 1-5?`));
//   userY = parseInt(prompt(`Введіть Y^1-5?`));

//   if (x === userX && y !== userY) alert(`Вгадали тільи по X = ${x}`);
//   else if (x !== userX && y === userY) alert(`Вгадали тільи по Y = ${y}`);
//   else if (x === userX && y === userY){
// 	 alert(`Вгадали X = ${x}, Y = ${y}`);
// 	 break
//   } else alert(`not`)
// } while (x !== userX || y !== userY);
// document.write(`Вгадали X = ${x}, Y = ${y}`);
//=======================================================
//96 15. Тир. На полі з 10 клітинок розміщують зайця. За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку. З клавіатури вводиться позиція пострілу. Гра продовжується поки
// у користувача не закінчаться патрони (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.
// let placeRabbit =  Math.floor(Math.random() * 11);
// let shot = 5;
// let marker = false
// let userPlaceRabbit;

// do {
//   userPlaceRabbit = parseInt(prompt(`Введіть постріл: 1 - 10?`));
//   if (userPlaceRabbit === placeRabbit) {
//     alert(`влучання!!!`);
// 	marker = true
//     break;
//   } else {
//     --shot;
//     alert(`Ви не влучили у вас залишилось ${shot} пострілів`);
//   }
//   if (shot === 0) alert("закінчились постріли");
// let step = Math.floor(Math.random()*7) - 3

//   placeRabbit +=step

// 	switch (placeRabbit) {
//     case -1:
//       placeRabbit = 10;
//       break;
//     case -2:
//       placeRabbit = 9;
//       break;
//     case -3:
//       placeRabbit = 8;
//       break;
//     case 11:
//       placeRabbit = 1;
//       break;
//     case 12:
//       placeRabbit = 2;
//       break;
//     case 13:
//       placeRabbit = 3;
//       break;
//   }
// } while (shot > 0);
// if(marker)document.write(`влучання!!!`);
// else document.write(`Ви не влучили `);
//=======================================================
//97 16. Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). При влучанні броня танка
//пошкоджується на 30 балів (всього 100). Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.
// let placeTank =1+ Math.floor(Math.random() * 10);
// let shot = 5;
// let marker = false;
// let userPlaceTank;
// let score = 100;

// do {
//   userPlaceTank = parseInt(prompt(`Введіть постріл: 1 - 10?`));
//   if (userPlaceTank === placeTank) {
//     --shot;
//     score -= 30;
//     if (score <= 0) {
//       alert(`win`);
//       marker = true;
//       break;
//     } else alert(`влучання!!! Броня пошкодженна на ${100 - score}%`);
//   } else {
//     --shot;
//     alert(`Ви не влучили у вас залишилось ${shot} пострілів`);
//   }

//   if (shot === 0) alert("закінчились постріли");
//   let step = Math.floor(Math.random() * 2) - 1;

//   placeTank += step;

//   if (placeTank > 10) placeTank = 10;
//   if (placeTank < 1) placeTank = 1;

// } while (shot > 0);
// if (marker) document.write(`win!!!`);
// else document.write(`Ви не влучили.Броня пошкодженна на ${100 - score}%`);

//=======================================================
//98 17.Спробуйте модифікувати попередню гру для випадку, коли танк також може стріляти по вашій гарматі (ваша гармата також знаходиться на цьому ж полі).
// let placeTank = 1 + Math.floor(Math.random() * 10);
// let placeUser = parseInt(
//   prompt(`Введіть мiсцерозтошування вашої гармати: 1 - 10?`)
// );
// let compShot;
// let shot = 5;
// let marker = false;
// let userPlaceTank;
// let score = 100;

// do {
//   userPlaceTank = parseInt(prompt(`Введіть постріл: 1 - 10?`));
//   if (userPlaceTank === placeTank) {
//     --shot;
//     score -= 30;
//     if (score <= 0) {
//       alert(`win`);
//       marker = true;
//       break;
//     } else alert(`влучання!!! Броня пошкодженна на ${100 - score}%`);
//   } else {
//     --shot;
//     alert(`Ви не влучили у вас залишилось ${shot} пострілів`);
//   }
//   compShot = 1 + Math.floor(Math.random() * 10);
//   if (compShot === placeUser) {
//     alert("Танк влучив у вашу гармату. Ви програли.");
//     break;
//   }

//   if (shot === 0) {
//     alert("закінчились постріли. Ви програли.");
//     break;
//   }
//   let step = Math.floor(Math.random() * 2) - 1;

//   placeTank += step;

//   if (placeTank > 10) placeTank = 10;
//   if (placeTank < 1) placeTank = 1;
// } while (shot > 0);
// if (marker) document.write(`win!!!`);
// else document.write(`Ви програли..Броня пошкодженна на ${100 - score}%`);

//=======================================================
//99 Вивести матрицю, яка заповнена натуральними числами при цьому ці числа поступово зростають по діагоналям

//----------------------------
// let num = 1;
// let res = "";

// let row1 = "";
// let row2 = "";
// let row3 = "";
// let row4 = "";

// for(let i = 1; i<=4; i++){
// for(let k = 1; k<=i; k++){
//   switch (k) {
//     case 1:
//       row1 += num++ + "\t";
//       break;
//     case 2:
//       row2 += num++ + "\t";
//       break;
//     case 3:
//       row3 += num++ + "\t";
//       break;
//     case 4:
//       row4 += num++ + "\t";
//       break;
//   }
// }
// }
// for (let i = 2; i <= 4; i++) {
//   for (let k = i; k <= 4; k++) {
//     switch (k) {

//       case 2:
//         row2 += num++ + "\t";
//         break;
//       case 3:
//         row3 += num++ + "\t"
//         break;
//       case 4:
//         row4 += num++ + "\t";
//         break;
//     }
//   }
// }
// res += row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n";
// console.log(res);
//-------------------------
// document.write('<div class = "gridMatr">');
// let num = 1;
// let n = 7;

// for (let i = 1; i <= n; i++) {
//   for (let k = 1; k <= i; k++) {
//     document.write(
//       `<div class = "item-grid" style = "grid-row:${k}/${
//         k + 1
//       }" >${num++}</div>`
//     );
//   }
// }
// for (let i = 2; i <= n; i++) {
//   for (let k = i; k <= n; k++) {
//     document.write(
//       `<div class = "item-grid" style = "grid-row:${k}/${
//         k + 1
//       }" >${num++}</div>`
//     );
//   }
// }

// document.write("</div>");

//=======================================================







