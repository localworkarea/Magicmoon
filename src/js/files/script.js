// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile,  bodyLockStatus, bodyLock, bodyUnlock, bodyLockToggle  } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// 05/03/2024 - mouseenter/mouseleave, а также клик по prevButton/nextButton срабатывает только для Фрукторвых чаев, поскольку только там нет слайдера на разрешении выше чем 900.98px

// ХОВЕРЫ, КЛИК ПРИ ПЕРЕКЛЮЧЕНИИ И УДАЛЕНИЯ КЛАССОВ С СОВЕДНИХ ЭЛЕМЕНТОВ И КЛИК НА ITEM И ВНЕ WRAPPER - НЕСКОЛЬКО БЛОКОВ НА СТРАНИЦЕ
// Функция для снятия класса _hover у всех элементов внутри заданного контейнера
// function removeAllHover(container) {
//   const items = container.querySelectorAll(".type-pack__item");
//   items.forEach((item) => {
//     item.classList.remove("_hover");
//   });
// }

// // Функция для обработки блока с кнопками "prev" и "next"
// function setupBlock(container) {

//   const items = container.querySelectorAll(".type-pack__item");
//   const prevButtons = container.querySelectorAll(".btn-prev");
//   const nextButtons = container.querySelectorAll(".btn-next");
//   items.forEach((item, index) => {
//       if (!isMobile.any()) {
  
//       item.addEventListener("mouseenter", () => {
//         item.classList.add("_hover");
//       });
  
//       item.addEventListener("mouseleave", () => {
//         item.classList.remove("_hover");
//       });
//     } 
//     // Код для третьей секции Фруктовых чаев =====================
//     // Если Точскрин то добаляем _hover для єлемента .type-pack__item которому добален класс item-third:
//     if (isMobile.any()) {
//       if (item.classList.contains('item-third')) {
//         item.classList.add('_hover');
//       }
//         // отдельно обрабатываем клик на кнопки для секцию фрукторвых чаев
//         if (item.classList.contains('item-third')) {
//           items.forEach((item, index) => {
//             const prevButton = prevButtons[index];
//             const nextButton = nextButtons[index];
        
//             prevButton.addEventListener("click", () => {
//               removeAllHover(container);
//               const prevItem = item.parentElement.previousElementSibling;
//               if (prevItem) {
//                 prevItem.querySelector(".type-pack__item").classList.add("_hover");
//               }
//             });
        
//             nextButton.addEventListener("click", () => {
//               removeAllHover(container);
//               const nextItem = item.parentElement.nextElementSibling;
//               if (nextItem) {
//                 nextItem.querySelector(".type-pack__item").classList.add("_hover");
//               }
//             });
//           });
//         }
//     }
//   });

// }

// // Получаем все контейнеры swiper__wrapper на странице
// const wrappers = document.querySelectorAll(".swiper__wrapper");

// wrappers.forEach((wrapper) => {
//   setupBlock(wrapper);

//   // Обработчик события на document для снятия класса _hover при клике вне всех контейнеров
//   // document.addEventListener("click", (event) => {
//   //   if (![...wrappers, ...Array.from(wrappers[0].querySelectorAll("*"))].some((el) => el.contains(event.target))) {
//   //     removeAllHover(wrapper);
//   //   }
//   // });
// });


// POPUP - WIN ==========================================================================
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


document.addEventListener('DOMContentLoaded', function() {


  // КЛОНИРУЕМ BG =====================================================
      //   Этот код выполняет следующие шаги:
      // Ждет полной загрузки DOM.
      // Находит первый элемент с классом bg-main__bg.
      // Проверяет, есть ли у этого элемента дочерний элемент.
      // Клонирует этого ребенка.
      // Находит все элементы с классом bg-main__bg.
      // Вставляет клонированного ребенка во все последующие элементы с классом bg-main__bg, начиная со второго.
      // Этот подход гарантирует, что каждый элемент получит отдельную копию дочернего элемента первого bg-main__bg.
  const firstBgMainElement = document.querySelector('.bg-main__bg');
  if (firstBgMainElement && firstBgMainElement.firstElementChild) {
      const childToClone = firstBgMainElement.firstElementChild.cloneNode(true);
      const bgMainElements = document.querySelectorAll('.bg-main__bg');
      bgMainElements.forEach((element, index) => {
          if (index !== 0) {
              element.appendChild(childToClone.cloneNode(true));
          }
      });
  }
  // ===================================================================

  const listPcBody = document.querySelector('.list-pc__body');
  const listPcBtn = document.querySelector('.list-pc__btn');
  const listPcList = document.querySelector('.list-pc__list');
  const listPcLinks = document.querySelectorAll('.list-pc__link');
  const listPcBtnSpan = listPcBtn.querySelector('span');

  const secBlack = document.querySelector('.sec-black');
  const secGreen = document.querySelector('.sec-green');
  const secFruit = document.querySelector('.sec-fruit');
  const secConct = document.querySelector('.sec-conct');

  // Устанавливаем минимальную ширину для list-pc__body
  if (listPcList) {
      const listWidth = listPcList.offsetWidth;
      listPcBody.style.minWidth = `${listWidth}px`;
  }

  // Добавляем обработчик события клика на кнопку
  listPcBtn.addEventListener('click', function () {
      listPcBody.classList.toggle('_active');
  });

  // Добавляем обработчик события клика на каждую ссылку
  listPcLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          listPcBody.classList.remove('_active');
          
          // Обновляем текстовое содержимое span внутри list-pc__btn
          listPcBtnSpan.textContent = link.textContent;
      });
  });

  // Функция для обновления текста span в зависимости от класса
  function updateSpanTextBasedOnClass() {
      const htmlElement = document.documentElement;

      if (htmlElement.classList.contains('fp-section-1') && secBlack) {
          listPcBtnSpan.textContent = secBlack.textContent;
      } else if (htmlElement.classList.contains('fp-section-2') && secGreen) {
          listPcBtnSpan.textContent = secGreen.textContent;
      } else if (htmlElement.classList.contains('fp-section-3') && secFruit) {
          listPcBtnSpan.textContent = secFruit.textContent;
      } else if (htmlElement.classList.contains('fp-section-4') && secConct) {
          listPcBtnSpan.textContent = secConct.textContent;
      }
  }

  // Настройка MutationObserver для отслеживания изменений классов на теге html
  const observer = new MutationObserver(function (mutationsList) {
      for (const mutation of mutationsList) {
          if (mutation.attributeName === 'class') {
              updateSpanTextBasedOnClass();
          }
      }
  });

  observer.observe(document.documentElement, { attributes: true });

  // Первоначальное обновление текста span на случай, если класс уже установлен
  updateSpanTextBasedOnClass();


});
