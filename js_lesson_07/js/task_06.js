"use strict";

//Задача 5. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

function getCentimetersToInches(numCm) {
  return (numCm * 0.3937).toFixed(5);
}
function getKilogramsToPounds(numKg) {
  return (numKg * 2.20462).toFixed(5);
}
function getKilometersToMiles(numKm) {
  return (numKm * 0.62137).toFixed(5);
}

