import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';


function initSliders() {
	// if (document.querySelector('.slider-first')) {
	// 	new Swiper('.slider-first', { 
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		//autoHeight: true,
	// 		speed: 800,
	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: '.slider-first .swiper-button-prev',
	// 			nextEl: '.slider-first .swiper-button-next',
	// 		},
	// 		/*
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }
	if (document.querySelector('.slider-first')) {
		new Swiper('.slider-first', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// slidesPerView: 3,
			// centeredSlides: true,
			spaceBetween: 0,
			loop: true,
			speed: 500,
			navigation: {
				prevEl: '.slider-first .swiper-button-prev',
				nextEl: '.slider-first .swiper-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				901: {
					slidesPerView: 3,
				}
				
			},
		});
	}
	if (document.querySelector('.slider-second')) {
		new Swiper('.slider-second', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// slidesPerView: 3,
			spaceBetween: 0,
			loop: true,
			speed: 500,
			navigation: {
				prevEl: '.slider-second .swiper-button-prev',
				nextEl: '.slider-second .swiper-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				901: {
					slidesPerView: 3,
				}
				
			},
		});
	}
	if (document.querySelector('.slider-third')) {
		new Swiper('.slider-third', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// slidesPerView: 3,
			spaceBetween: 0,
			loop: true,
			speed: 500,
			navigation: {
				prevEl: '.slider-third .swiper-button-prev',
				nextEl: '.slider-third .swiper-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				901: {
					slidesPerView: 3,
				}
				
			},
		});
	}
	if (document.querySelector('.slider-five')) {
		new Swiper('.slider-five', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// slidesPerView: 3,
			spaceBetween: 0,
			loop: true,
			speed: 500,
			navigation: {
				prevEl: '.slider-five .swiper-button-prev',
				nextEl: '.slider-five .swiper-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				901: {
					slidesPerView: 3,
				}
				
			},
		});
	}
}

window.addEventListener("load", function (e) {
		initSliders();
});

// ---------------------------------------------------------------------------------
// --- ИНИЦИАЛИЗАЦИЯ И ДЕСТРОЙ СВАЙПЕРА НА РАЗРЕШЕНИИ 900рх -----------

// const breakpoint = window.matchMedia('(min-width: 56.31125em)');
// let mySwipers = {};

// function initSlider(selector, options) {
//   if (!mySwipers[selector]) {
//     mySwipers[selector] = new Swiper(selector, options);
//   }
// }

// const breakpointChecker = function () {
//   if (breakpoint.matches === true) {
//     for (const selector in mySwipers) {
//       if (mySwipers[selector] !== undefined) {
//         mySwipers[selector].destroy(true, true);
//         mySwipers[selector] = undefined; // Сброс экземпляра
//       }
//     }
//     return;
//   } else if (breakpoint.matches === false) {
//     return enableSwipers();
//   }
// };

// const enableSwipers = function () {
	// if (document.querySelector('.slider-first')) {
	// 	initSlider('.slider-first', {
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		speed: 500,
	// 		navigation: {
	// 			prevEl: '.slider-first .swiper-button-prev',
	// 			nextEl: '.slider-first .swiper-button-next',
	// 		},
	// 	});
	// }
	// if (document.querySelector('.slider-second')) {
	// 	initSlider('.slider-second', {
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		speed: 500,
	// 		navigation: {
	// 			prevEl: '.slider-second .swiper-button-prev',
	// 			nextEl: '.slider-second .swiper-button-next',
	// 		},
	// 	});
	// }
	// if (document.querySelector('.slider-third')) {
	// 	initSlider('.slider-third', {
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		loop: true,
	// 		speed: 500,
	// 		navigation: {
	// 			prevEl: '.slider-third .swiper-button-prev',
	// 			nextEl: '.slider-third .swiper-button-next',
	// 		},
	// 	});
	// }
// };

// breakpoint.addListener(breakpointChecker);
// breakpointChecker();
