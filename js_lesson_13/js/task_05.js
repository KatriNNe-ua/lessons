"use strict";

//Задача 5. З використанням замикань розробити ітератор, тобто функцію, що буде
// поступово за окремими викликами видавати по одне значення від заданого
// мінімального до заданого максимального. Якщо значення досягне максимального,
// то наступним буде мінімальне значення. З використанням цієї функції реалізувати
//перебір номерів місяців.
if (confirm("Почати тестування?")) {
  function counterMonth(min = 1, max = 12) {
    let numMonth = min-1;
    function counter() {
      if (numMonth < max) numMonth++;
      else numMonth = min;
      return numMonth
    }
    return counter;
  }
  let userCounterMonth = counterMonth();
  document.write(
    `${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>${userCounterMonth()}<br>`
  );
}
