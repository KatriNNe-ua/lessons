"use strict";

//Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне
//з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших
//зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).

let marker = "";
let winningAmount = 0;
for (let i = 1; i <= 3; i++) {
  const numberGenerate = 1 + Math.floor(Math.random() * 4);
  let imgGenerate;
  marker += numberGenerate

  switch (numberGenerate) {
    case 1:
      imgGenerate =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBmaD2_Iq0yI8koN8SolLAABuGGxqrDPaKw&s";
  
      break;
    case 2:
      imgGenerate =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPNzvvqxxuITz_r-1NYKbpxiDPDt-R4hKgRtprOvKZD2mYgl2l2wYdK5vvJ0NUcccyzc&usqp=CAU";
    
      break;
    case 3:
      imgGenerate =
        "https://zefirka.club/uploads/posts/2022-09/thumbs/1664298169_19-zefirka-club-p-oboi-na-telefon-kotorie-malo-vesyat-19.jpg";

      break;
    case 4:
      imgGenerate =
        "https://zefirka.club/uploads/posts/2022-09/thumbs/1664298224_25-zefirka-club-p-oboi-na-telefon-kotorie-malo-vesyat-25.jpg";
    
  }
  document.write(`<img src="${imgGenerate}">`);
}
switch (marker) {
  case "111":
    winningAmount = 100;
    break;
  case "222":
    winningAmount = 200;
    break;
  case "333":
    winningAmount = 500;
    break;
  case "444":
    winningAmount = 1000;
    break;
}
document.write(`<br>Ваш виграш: ${winningAmount}грн`);