"use strict";

//Задача 5. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

function getCentimetersToInches(numCm) {
  return (numCm * 2.54).toFixed(2);
}
function getKilogramsToPounds(numKg) {
  return (numKg * 2.20462).toFixed(5);
}
function getKilometersToMiles(numKm) {
  return (numKm * 1.60934).toFixed(5);
}

