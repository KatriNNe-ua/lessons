"use strict";

//Задача 8. При старті питаємо у користувача чи хоче він читати новини.
// Якщо так, то одразу переходимо до сайту Ukr.Net, якщо ні, то через 20 секунд
// самі переходимо на сайт ukr.net. Для цього через 20 секунд після відкриття
// треба виконати команду

if (confirm("Почати тестування?")) {
  const answerUser = confirm("Чи хоче він читати новини");
  if (answerUser) {
    window.location.href = "https://www.ukr.net/";
  } else {
    setTimeout(() => {
      window.location.href = "https://www.ukr.net/";
    }, 20000);
  }
}
