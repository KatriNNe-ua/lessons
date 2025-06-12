// Строгий режим
"use strict";

window.addEventListener("load", windowLoad);
const html = document.documentElement;

function windowLoad() {
  html.classList.add("loaded");
}
