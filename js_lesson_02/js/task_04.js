"use strict"

//Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

//Крок 0. Позначення
//довжину у сантиметрах - lengthInCm 
//довжину у метрах - lengthInM 
//довжину у кіломентрах - lengthInKm 

//Крок 1. Вводимо необхідні данні
const lengthInCm = parseInt(prompt("Введіть довжину у сантиметрах", ""));

//Крок 2. Обчислення результату
const lengthInM = lengthInCm / 100;
const lengthInKm = lengthInCm / 1000;

//КРОК 3. Ввиведення результатів
document.write(`${lengthInCm}см це буде ${lengthInM}м або ${lengthInKm}км`);