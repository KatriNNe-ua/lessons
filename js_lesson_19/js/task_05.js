"use strict";

//Задача 5.Відображаємо картки товарів, які користувач може вибирати.
// Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)
function getBorder(e){
	const img = e.target.closest(".list-img__item")
if(img) img.classList.toggle("border-green")
}

const container = document.querySelector(".list-img");
if (container) container.addEventListener("click", getBorder);