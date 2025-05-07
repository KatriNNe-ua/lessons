"use strict";

//Задача 4. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage).
//  Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm).
//  Якщо користувач натискає на «Ок», то видаляти цю задачу.
if (confirm("Почати тестування?")) {
	class CompleteTodoList {
    constructor(todoList, timeInterval = 4000) {
      this.todoList = localStorage.getItem("todoList")
        ? JSON.parse(localStorage.getItem("todoList"))
        : todoList;
      this.timeInterval = timeInterval;
    }

    save() {
      const strTodoList = JSON.stringify(this.todoList);
      localStorage.setItem("todoList", strTodoList);
    }

    randomNum(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }

    displayTaskUser() {
      const intervalId = setInterval(() => {
        if (this.todoList.length === 0) {
          alert("Вітаємо! Ви виконали всі справи!");
          clearInterval(intervalId);
          return;
        }

        const ind = this.randomNum(0, this.todoList.length - 1);
        const task = this.todoList[ind];

        const answerUser = confirm(task.task);
        if (answerUser) {
          this.todoList.splice(ind, 1);
          this.save();
        }
      }, this.timeInterval);
    }

    removeLocalStorage() {
		localStorage.removeItem("todoList");
	}
  }

  const todoList = [
    { id: 1, task: "Купити продукти в супермаркеті" },
    { id: 2, task: "Зателефонувати лікарю для запису" },
    { id: 3, task: "Закінчити звіт для роботи" },
    { id: 4, task: "Полити квіти" },
    { id: 5, task: "Відправити лист клієнту" },
    { id: 6, task: "Прибрати в кімнаті" },
    { id: 7, task: "Прочитати главу книги" },
    { id: 8, task: "Запланувати зустріч із друзями" },
    { id: 9, task: "Оновити резюме" },
    { id: 10, task: "Погуляти в парку" },
  ];

  const completeTodoList = new CompleteTodoList(todoList);
  completeTodoList.displayTaskUser();
}

