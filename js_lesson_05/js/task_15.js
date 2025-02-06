"use strict";

//Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне
//з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших
//зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).

if (confirm("Почати тестування?")) {
  // const img1 =
  // const img2 =
  // const img3 =
  // const img4 =
 let res = "";
  for (let i = 1; i <= 4; i++) {
    const numberGenerate = 1 + Math.floor(Math.random() * 4);
    let res ;
    switch (numberGenerate) {
      case 1:
        res =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBmaD2_Iq0yI8koN8SolLAABuGGxqrDPaKw&s";
        break;
      case 2:
        res =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPNzvvqxxuITz_r-1NYKbpxiDPDt-R4hKgRtprOvKZD2mYgl2l2wYdK5vvJ0NUcccyzc&usqp=CAU";
        break;
      case 3:
        res =
          "https://zefirka.club/uploads/posts/2022-09/thumbs/1664298169_19-zefirka-club-p-oboi-na-telefon-kotorie-malo-vesyat-19.jpg";
        break;
      case 4:
        res =
          "https://zefirka.club/uploads/posts/2022-09/thumbs/1664298224_25-zefirka-club-p-oboi-na-telefon-kotorie-malo-vesyat-25.jpg";
    }
	 document.write(`<img src=${res} width = 100px>`);

  }
//   document.write(`<img srs=${res}>`)
}
