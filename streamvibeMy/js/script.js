// Строгий режим
"use strict";

window.addEventListener("load", windowLoad);
const html = document.documentElement;

function windowLoad() {
  document.addEventListener("click", documentActions);
  document.addEventListener("keydown", documentActions);
  html.classList.add("loaded");
  scrollActions();
  slidersInit();
  columnBuild();
  plansAction(); 
}
function documentActions(e) {
  const targetEl = e.target;
  const type = e.type;
  if (type === "click") {
    // Меню-бургер
    if (targetEl.closest(".icon-menu")) {
      if (!html.classList.contains("menu-open")) {
        html.classList.add("menu-open");
        bodyLock(true);
      } else {
        html.classList.remove("menu-open");
        bodyLock(false);
      }
    }
    if (targetEl.closest(".menu__link")) {
      if (html.classList.contains("menu-open"))
        html.classList.remove("menu-open");
      bodyLock(false);
    }
    // Попап
    // Закриття
    if (
      targetEl.closest(".popup__close") ||
      (document.querySelector(".popup--open") &&
        !targetEl.closest(".popup__body"))
    ) {
      popupClose();
    }
    if (targetEl.closest("[data-popup]")) {
      // Відкриття
      const curentElement = targetEl.closest("[data-popup]");
      popupOpen(curentElement);
    }

    // Спойлери
    if (targetEl.closest("summary")) {
      e.preventDefault();

      const spollerTitle = targetEl.closest("summary");
      const spoller = spollerTitle.closest("details");
      const spollerBody = spollerTitle.nextElementSibling;

      !spollerBody.hidden
        ? spoller.classList.contains("--active")
          ? setTimeout(() => {
              spollerBody.hidden = true;
            }, 500)
          : (spollerBody.hidden = true)
        : null;

      !spoller.open
        ? (spoller.open = true)
        : setTimeout(() => {
            spoller.open = false;
          }, 500);

      _slideToggle(spollerBody);

      spoller.classList.toggle("--active");
    }

    // План
    if (targetEl.closest(".switcher__item")) {
      const button = targetEl.closest(".switcher__item");
      if (!button.classList.contains("switcher__item--active")) {
        document
          .querySelector(".switcher__item--active")
          .classList.remove("switcher__item--active");
        button.classList.add("switcher__item--active");
        plansAction();
      }
    }
  } else if (type === "keydown") {
    const key = e.key;
    if (key === "Escape") {
      const openPopup = document.querySelector(".popup--open");
      if (openPopup) {
        popupClose();
      }
    }
  }
}

function popupOpen(curentElement) {
  const curentPopup = document.querySelector(curentElement.dataset.popup);
  if (curentPopup) {
    bodyLock(true);
    curentPopup.classList.add("popup--open");
  } else {
    console.log("Такого попапу не існує");
  }
}

function popupClose() {
  const openPopup = document.querySelector(".popup--open");
  if (openPopup) openPopup.classList.remove("popup--open");
  setTimeout(() => {
    bodyLock(false);
  }, 500);
}

function setPadding(paddingValue) {
  const listElements = document.querySelectorAll("[data-pl]");
  listElements.forEach((el) => {
    if (el.dataset.pl === "inset") {
      el.style.right = paddingValue;
    } else el.style.paddingRight = paddingValue;
  });
}
function getNumPadding(mode) {
  let paddingValue = window.innerWidth - document.body.offsetWidth + "px";
  paddingValue = mode ? paddingValue : `0px`;
  document.body.style.paddingRight = paddingValue;
  return paddingValue;
}

function bodyLock(mode) {
  const paddingValue = getNumPadding(mode);

  setPadding(paddingValue);

  document.documentElement.classList.toggle("lock", mode);
}

function slidersInit() {
  const swiperListFiveitems = new Swiper(".swiper", {
    // Optional parameters
    //loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      850: {
        slidesPerGroup: 1,
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1200: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-controls__arrow--right",
      prevEl: ".slider-controls__arrow--left",
      // disabledClass: ".slider-controls__arrow--disabled",
    },
    // If we need pagination
    pagination: {
      el: ".slider-controls__bullets",
      clickable: true,
      bulletActiveClass: "slider-controls__bullet-item--active",
      bulletClass: "slider-controls__bullet-item",
      bulletElement: "button",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".items-slider__scrollbar",
      dragSize: 20,
      snapOnRelease: true,
    },
  });
}
function scrollActions() {
  window.addEventListener("scroll", scrollAction);
  startObserver();
}

function startObserver() {
  const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    // Відсоток від розміру об'єкту.
    // При появі якого спрацьовує подія
    // Де 0 це будь яка поява
    // 1 це повна поява об'кта в в'юпорті
    threshold: 0.2,
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const currentElement = entry.target;
      if (entry.isIntersecting) {
        currentElement.classList.add("--animate");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);

  const animElements = document.querySelectorAll('[class*="--anim"]');
  animElements.forEach((animElement) => {
    observer.observe(animElement);
  });
}

function scrollAction() {
  const header = document.querySelector(".header");
  if (header) {
    header.classList.toggle("header--scroll", scrollY > 20);
  }
}

// Допоміжні модулі плавного розкриття та закриття об'єкта ======================================================================================================================================================================
let _slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty("height") : null;
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      !showmore ? target.style.removeProperty("overflow") : null;
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      // Створюємо подію
      document.dispatchEvent(
        new CustomEvent("slideUpDone", {
          detail: {
            target: target,
          },
        })
      );
    }, duration);
  }
};
let _slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty("height") : null;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      // Створюємо подію
      document.dispatchEvent(
        new CustomEvent("slideDownDone", {
          detail: {
            target: target,
          },
        })
      );
    }, duration);
  }
};
let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

// FAQ побудова структури
function columnBuild() {
  const listItem = document.querySelectorAll(".faq__item");
  const column1 = document.createElement("div");
  const column2 = document.createElement("div");
  if (listItem.length > 1) {
    const half = Math.ceil(listItem.length / 2) - 1;
    listItem.forEach((item, ind) => {
      if (ind <= half) column1.append(item);
      else column2.append(item);
    });
  }
  const body = document.querySelector(".faq__body");
  if (body) {
    body.append(column1);
    body.append(column2);
  }
}

//plan
async function getPlans(activeType) {
  try {
    const response = await fetch("json/plans.json");
    if (!response.ok) throw new Error("Сервер не відповів");
    const data = await response.json();
	plansShow(data, activeType);
  } catch (error) {
    console.error(error.message);
  }
}

function plansShow(data, activeType) {
  const plansPrices = document.querySelectorAll(".price");
  const prices = data.price;

  plansPrices.forEach((plansPrice, index) => {
    plansPrice.innerHTML = prices[index][activeType];
  });
}

function plansAction() {
  const activeType = document.querySelector(".switcher__item--active").dataset.type;
  if (activeType) {
    getPlans(activeType);
  }
}
