"use strict";

//Задача 6. Дано список спортсменів. Потрібно сформувати список тих,
// які будуть брати участь у змаганні. При цьому є два стовпці.
// В одному відображені всі спортсмени, в іншому – список тих,
// хто був вибраний. При натисканні на зелену стрілку спортсмен
// переміщається у список для змагань. При натисканні на червону

class AthletesListCompetition {
  constructor(athletesList) {
    this.athletesList = athletesList;
  }
  renderItem(athlete) {
    const athleteDiv = document.createElement("div");
    athleteDiv.className = "athlete-item";
    const nameAthlete = document.createElement("p");
    nameAthlete.innerText = athlete;
    athleteDiv.append(nameAthlete);
    const imgBlock = document.createElement("div");
    imgBlock.className = "img-block-green";
    athleteDiv.append(imgBlock);
    return athleteDiv;
  }

  renderContainer() {
    const containerAthlet = document.createElement("div");
    containerAthlet.className = "general-list";
    const h2El = document.createElement("h2");
    h2El.innerText = "Загальний список";
    containerAthlet.append(h2El);
    for (const athlete of this.athletesList) {
      containerAthlet.append(this.renderItem(athlete));
    }
    return containerAthlet;
  }

  renderContainerListCompetition() {
    const containerAthlet = document.createElement("div");
    containerAthlet.className = "competition-list";
    const h2El = document.createElement("h2");
    h2El.innerText = "Обрані для змагання";
    containerAthlet.append(h2El);
    return containerAthlet;
  }
  changeAthlete(e) {
    const imgEl = e.target;
    if (imgEl.classList.contains("img-block-green")) {
      const elBlock = imgEl.closest(".athlete-item");
      const containerCompetition = document.querySelector(".competition-list");
      imgEl.className = "img-block-red";
      if (containerCompetition) {
        containerCompetition.append(elBlock);
      }
    } else if (imgEl.classList.contains("img-block-red")) {
      const elBlock2 = imgEl.closest(".athlete-item");
      const containerGeneral = document.querySelector(".general-list");
      imgEl.className = "img-block-green";
      if (containerGeneral) {
        containerGeneral.append(elBlock2);
      }
    }
  }

  render(selector) {
    if (selector) {
      selector.append(this.renderContainer());
      selector.append(this.renderContainerListCompetition());
      selector.addEventListener("click", this.changeAthlete.bind(this));
    }
  }
}

const athletesList = [
  "Alex Johnson",
  "Maria Smith",
  "John Davis",
  "Andrew Wilson",
  "Sophie Brown",
  "Emily Clark",
];
const listCompetition = new AthletesListCompetition(athletesList);
const section = document.querySelector(".athletes");
listCompetition.render(section);
