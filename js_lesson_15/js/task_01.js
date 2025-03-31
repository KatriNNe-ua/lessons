"use strict";

//Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з
// них є функція знаходження суми, а у іншому – функція для знаходження добутку тих,
// які знаходяться між заданими мінімальним і максимальних значенням.
//Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

if (confirm("Почати тестування?")) {
  const obj1 = {
    arr: [1, 2, 3, 4, 5],
    sum() {
      return this.arr.reduce((sum, num) => sum + num, 0);
    },
  };

  const obj2 = {
    arr: [6, 7, 8, 9, 10],
    product(min, max) {
      if (min > max) {
        [min, max] = [max, min];
      }
      return this.arr.reduce(
        (prod, num) => (num > min && num < max ? prod * num : prod),
        1
      );
    },
  };

  const sum1 = obj1.sum();
  const sum2 = obj1.sum.call(obj2);
  const prod2 = obj2.product(5, 8);
  const prod1 = obj2.product.apply(obj1, [2, 5]);

  document.write(`Сума масиву цілих чисел obj1: ${sum1}<br>Сума масиву цілих чисел obj2: ${sum2}<br>
    Добуток чисел масиву obj1, які знаходяться між заданими мінімальним і максимальних значенням:  ${prod1}<br>
     Добуток чисел масиву obj2, які знаходяться між заданими мінімальним і максимальним значенням:  ${prod2}<br>`);
}
