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

// ХОВЕРЫ, КЛИК ПРИ ПЕРЕКЛЮЧЕНИИ И УДАЛЕНИЯ КЛАССОВ С СОВЕДНИХ ЭЛЕМЕНТОВ И КЛИК НА ITEM И ВНЕ WRAPPER - ОДИН БЛОК НА СТРАНИЦЕ
// // Получаем все элементы type-pack__body
// const typePackBodies = document.querySelectorAll(".swiper__slide");
// const typePackWrapper = document.querySelector(".swiper__wrapper");

// // Функция для снятия класса _hover у всех элементов
// function removeAllHover() {
//   typePackBodies.forEach((body) => {
//     body.querySelector(".type-pack__item").classList.remove("_hover");
//   });
// }

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

//   // Обработчик события на document для снятия класса _hover при клике вне блока type-pack__wrapper
//   document.addEventListener("click", (event) => {
//     if (!typePackWrapper.contains(event.target)) {
//       removeAllHover();
//     }
//   });
// }

// ХОВЕРЫ, КЛИК ПРИ ПЕРЕКЛЮЧЕНИИ И УДАЛЕНИЯ КЛАССОВ С СОВЕДНИХ ЭЛЕМЕНТОВ И КЛИК НА ITEM И ВНЕ WRAPPER - НЕСКОЛЬКО БЛОКОВ НА СТРАНИЦЕ
// Функция для снятия класса _hover у всех элементов внутри заданного контейнера
function removeAllHover(container) {
  const items = container.querySelectorAll(".type-pack__item");
  items.forEach((item) => {
    item.classList.remove("_hover");
  });
}

// Функция для обработки блока с кнопками "prev" и "next"
function setupBlock(container) {
  const items = container.querySelectorAll(".type-pack__item");
  const prevButtons = container.querySelectorAll(".btn-prev");
  const nextButtons = container.querySelectorAll(".btn-next");

  items.forEach((item, index) => {
    const prevButton = prevButtons[index];
    const nextButton = nextButtons[index];

    item.addEventListener("mouseenter", () => {
      item.classList.add("_hover");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("_hover");
    });

    prevButton.addEventListener("click", () => {
      removeAllHover(container);
      const prevItem = item.parentElement.previousElementSibling;
      if (prevItem) {
        prevItem.querySelector(".type-pack__item").classList.add("_hover");
      }
    });

    nextButton.addEventListener("click", () => {
      removeAllHover(container);
      const nextItem = item.parentElement.nextElementSibling;
      if (nextItem) {
        nextItem.querySelector(".type-pack__item").classList.add("_hover");
      }
    });
  });
}

// Получаем все контейнеры swiper__wrapper на странице
const wrappers = document.querySelectorAll(".swiper__wrapper");

wrappers.forEach((wrapper) => {
  setupBlock(wrapper);

  // Обработчик события на document для снятия класса _hover при клике вне всех контейнеров
  document.addEventListener("click", (event) => {
    if (![...wrappers, ...Array.from(wrappers[0].querySelectorAll("*"))].some((el) => el.contains(event.target))) {
      removeAllHover(wrapper);
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Проверяем наличие элемента с классом "win-popup"
  var winPopup = document.querySelector('.win-popup');

  if (winPopup) {
      // Добавляем класс "opened" через 1 секунду после загрузки страницы
      setTimeout(function() {
          winPopup.classList.add('opened');
      }, 2500);

      // Получаем кнопку закрытия попапа
      var closeButton = document.querySelector('.win-popup__close');

      if (closeButton) {
          // Обработчик события для клика по кнопке
          closeButton.addEventListener('click', function() {
              // Убираем класс "opened" при клике на кнопку закрытия
              winPopup.classList.remove('opened');
          });
      }
  }
});