// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile,  bodyLockStatus, bodyLock, bodyUnlock, bodyLockToggle  } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// 05/03/2024 - mouseenter/mouseleave, а также клик по prevButton/nextButton срабатывает только для Фрукторвых чаев, поскольку только там нет слайдера на разрешении выше чем 900.98px

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
      if (!isMobile.any()) {
  
      item.addEventListener("mouseenter", () => {
        item.classList.add("_hover");
      });
  
      item.addEventListener("mouseleave", () => {
        item.classList.remove("_hover");
      });
    } 
    // Код для третьей секции Фруктовых чаев =====================
    // Если Точскрин то добаляем _hover для єлемента .type-pack__item которому добален класс item-third:
    if (isMobile.any()) {
      if (item.classList.contains('item-third')) {
        item.classList.add('_hover');
      }
        // отдельно обрабатываем клик на кнопки для секцию фрукторвых чаев
        if (item.classList.contains('item-third')) {
          items.forEach((item, index) => {
            const prevButton = prevButtons[index];
            const nextButton = nextButtons[index];
        
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
    }
  });

}

// Получаем все контейнеры swiper__wrapper на странице
const wrappers = document.querySelectorAll(".swiper__wrapper");

wrappers.forEach((wrapper) => {
  setupBlock(wrapper);

  // Обработчик события на document для снятия класса _hover при клике вне всех контейнеров
  // document.addEventListener("click", (event) => {
  //   if (![...wrappers, ...Array.from(wrappers[0].querySelectorAll("*"))].some((el) => el.contains(event.target))) {
  //     removeAllHover(wrapper);
  //   }
  // });
});


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