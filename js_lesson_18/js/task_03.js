"use strict";

//Задача 3.  Користувач задає рік народження. Визначити кількість років користувача.
function getAge() {
  const yearNow = 2025;
  const yearUser = parseInt(document.querySelector("#year").value);
  if (!isNaN(yearUser) && yearUser >= 1 && yearUser <=yearNow) {
    const age = yearNow - yearUser;
    const placeAge = document.querySelector("#age");
    if (placeAge) placeAge.innerText = age;
  }
}

document.querySelector("#year").onchange= getAge

