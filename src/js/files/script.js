// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// ТОЛЬКО ХОВЕРЫ И КЛИК ДЛЯ ПЕРЕКЛЮЧЕНИЯ 
// // Получаем все элементы type-pack__body
// const typePackBodies = document.querySelectorAll(".type-pack__body");
// // Проверяем, существуют ли элементы
// if (typePackBodies) {
//   // Итерируемся по каждому элементу и добавляем обработчики событий
//   typePackBodies.forEach((body) => {
//     const item = body.querySelector(".type-pack__item");
    
//     // Получаем кнопку "prev" и "next" внутри текущего элемента
//     const prevButton = body.querySelector(".btn-prev");
//     const nextButton = body.querySelector(".btn-next");

//     // // Обработчик события при наведении курсора
//     // item.addEventListener("mouseenter", () => {
//     //   item.classList.add("_hover");
//     // });

//     // Обработчик события при уходе курсора
//     item.addEventListener("mouseleave", () => {
//       item.classList.remove("_hover");
//     });

//     // Обработчик события при клике на кнопку "prev"
//     prevButton.addEventListener("click", () => {
//       item.classList.remove("_hover");
//       const prevItem = item.parentElement.previousElementSibling;
//       if (prevItem) {
//         prevItem.querySelector(".type-pack__item").classList.add("_hover");
//       } else {
//         typePackBodies[typePackBodies.length - 1].querySelector(".type-pack__item").classList.add("_hover");
//       }
//     });

//     // Обработчик события при клике на кнопку "next"
//     nextButton.addEventListener("click", () => {
//       item.classList.remove("_hover");
//       const nextItem = item.parentElement.nextElementSibling;
//       if (nextItem) {
//         nextItem.querySelector(".type-pack__item").classList.add("_hover");
//       } else {
//         typePackBodies[0].querySelector(".type-pack__item").classList.add("_hover");
//       }
//     });
//   });
// }


// ХОВЕРЫ, КЛИК ПРИ ПЕРЕКЛЮЧЕНИИ И УДАЛЕНИЯ КЛАССОВ С СОВЕДНИХ ЭЛЕМЕНТОВ
// // Получаем все элементы type-pack__body
// const typePackBodies = document.querySelectorAll(".type-pack__body");
// // Проверяем, существуют ли элементы
// if (typePackBodies) {
//   // Итерируемся по каждому элементу и добавляем обработчики событий
//   typePackBodies.forEach((body, index, array) => {
//     const item = body.querySelector(".type-pack__item");

//     // Получаем кнопку "prev" и "next" внутри текущего элемента
//     const prevButton = body.querySelector(".btn-prev");
//     const nextButton = body.querySelector(".btn-next");

//     // Обработчик события при наведении курсора
//     item.addEventListener("mouseenter", () => {
//       item.classList.add("_hover");
//     });

//     // Обработчик события при уходе курсора
//     item.addEventListener("mouseleave", () => {
//       item.classList.remove("_hover");
//     });

//     // Обработчик события при клике на кнопку "prev"
//     prevButton.addEventListener("click", () => {
//       const prevItem = item.parentElement.previousElementSibling;
//       if (prevItem) {
//         prevItem.querySelector(".type-pack__item").classList.add("_hover");
//         item.classList.remove("_hover");
//       }
//       const nextItem = item.parentElement.nextElementSibling;
//       if (nextItem) {
//         nextItem.querySelector(".type-pack__item").classList.remove("_hover");
//       }
//     });

//     // Обработчик события при клике на кнопку "next"
//     nextButton.addEventListener("click", () => {
//       const prevItem = item.parentElement.previousElementSibling;
//       if (prevItem) {
//         prevItem.querySelector(".type-pack__item").classList.remove("_hover");
//       }
//       const nextItem = item.parentElement.nextElementSibling;
//       if (nextItem) {
//         nextItem.querySelector(".type-pack__item").classList.add("_hover");
//         item.classList.remove("_hover");
//       }
//     });
//   });
// }

// ХОВЕРЫ, КЛИК ПРИ ПЕРЕКЛЮЧЕНИИ И УДАЛЕНИЯ КЛАССОВ С СОВЕДНИХ ЭЛЕМЕНТОВ И КЛИК НА ITEM И ВНЕ WRAPPER
// Получаем все элементы type-pack__body
const typePackBodies = document.querySelectorAll(".swiper__slide");
const typePackWrapper = document.querySelector(".swiper__wrapper");

// Функция для снятия класса _hover у всех элементов
function removeAllHover() {
  typePackBodies.forEach((body) => {
    body.querySelector(".type-pack__item").classList.remove("_hover");
  });
}

// Проверяем, существуют ли элементы
if (typePackBodies) {
  // Итерируемся по каждому элементу и добавляем обработчики событий
  typePackBodies.forEach((body, index, array) => {
    const item = body.querySelector(".type-pack__item");

    // Получаем кнопку "prev" и "next" внутри текущего элемента
    const prevButton = body.querySelector(".btn-prev");
    const nextButton = body.querySelector(".btn-next");

    // Обработчик события при наведении курсора
    item.addEventListener("mouseenter", () => {
      item.classList.add("_hover");
    });

    // Обработчик события при уходе курсора
    item.addEventListener("mouseleave", () => {
      item.classList.remove("_hover");
    });

    // Обработчик события при клике на кнопку "prev"
    prevButton.addEventListener("click", () => {
      const prevItem = item.parentElement.previousElementSibling;
      if (prevItem) {
        prevItem.querySelector(".type-pack__item").classList.add("_hover");
        item.classList.remove("_hover");
      }
      const nextItem = item.parentElement.nextElementSibling;
      if (nextItem) {
        nextItem.querySelector(".type-pack__item").classList.remove("_hover");
      }
    });

    // Обработчик события при клике на кнопку "next"
    nextButton.addEventListener("click", () => {
      const prevItem = item.parentElement.previousElementSibling;
      if (prevItem) {
        prevItem.querySelector(".type-pack__item").classList.remove("_hover");
      }
      const nextItem = item.parentElement.nextElementSibling;
      if (nextItem) {
        nextItem.querySelector(".type-pack__item").classList.add("_hover");
        item.classList.remove("_hover");
      }
    });
  });

  // Обработчик события на document для снятия класса _hover при клике вне блока type-pack__wrapper
  document.addEventListener("click", (event) => {
    if (!typePackWrapper.contains(event.target)) {
      removeAllHover();
    }
  });
}
