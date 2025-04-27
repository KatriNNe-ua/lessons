"use strict";

//Задача 3.  На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата,
//  стаж, номер відділу, порядковий номер). Додати подію обробки події click на форму
// і якщо клік на внутрішньому input, то автоматично замінювати значення його на 0.
//  Використати делегування}

class Form {
  constructor(listSense, cssObj) {
    this.listSense = listSense;
    this.cssObj = cssObj;
  }
  renderInput(value, ind) {
    const inputDiv = document.createElement("div");
    inputDiv.classList = this.cssObj.cntInput;

    const label = document.createElement("label");
    label.setAttribute("for", ind);
    label.innerText = value;
    inputDiv.append(label);

    const input = document.createElement("input");
    input.setAttribute("id", ind);
    input.setAttribute("type", "number");
    inputDiv.append(input);

    return inputDiv;
  }
  zeroing(e){
	const targetEl = e.target
	if(targetEl.tagName === "INPUT"){
		targetEl.value = 0
	}
  }

  render(selector) {
    const formCnt = document.createElement("form");
    formCnt.setAttribute("action", "#");
    const length = this.listSense.length;
    for (let i = 0; i < length; i++) {
      const el = this.renderInput(this.listSense[i], `input${i}`);
      formCnt.append(el);
    }
    formCnt.addEventListener("click", this.zeroing.bind(this));
    if (selector) {
      selector.append(formCnt);
    }
    return formCnt;
  }
}
const cssObj = {
  cntInput: "item",
};
const listSense = [
  "вік",
  "зріст",
  "вага",
  "заробітна плата",
  "стаж",
  "номер відділу",
  "порядковий номер",
];
const form = new Form(listSense, cssObj);
const cnt = document.querySelector(".form");
form.render(cnt);
