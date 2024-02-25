let push = document.querySelector('.container__movie-all');
let textPush =document.querySelector('.container__movie-all_text');
let buttons1 = document.querySelectorAll('.hidden-click-768');
let buttons2 = document.querySelectorAll('.hidden-click-1120');
let status = document.querySelector('.container__movie-all .container__movie-all_arrow');

let clicked = false;

if (window.innerWidth > 768 && window.innerWidth < 1120) {//По условию соответствия размера
    push.addEventListener("click", function(){
      if (!clicked) {//Если выключен состояние clicked при клике на кнопку
        buttons1.forEach(function(element) {
        element.classList.remove('hidden-click-768');//Если выключен..убрать класс
        })
        buttons2.forEach(function(element) {//Если выключен..убрать класс
        element.classList.remove('hidden-click-1120');
        });
        textPush.textContent = "Скрыть";//Если выключен..сменить текст
        status.classList.remove('open');//Если выключен..удалить класс
        status.classList.add('closed');//Если выключен..добавить класс
        clicked = true;//Если выключен..сменить индикатор в переменной
     } else {//Если включено состояние clicked при клике на кнопку
      buttons1.forEach(function(element) {
          element.classList.add('hidden-click-768');//Если вывключен..добавить класс
      });
      buttons2.forEach(function(element) {    
      element.classList.add('hidden-click-1120');//Если вывключен..добавить класс
          });
          textPush.textContent = "Показать все";//Если включен..сменить текст
          status.classList.remove('closed');//Если включен..удалить класс
          status.classList.add('open');//Если включен..добавить класс
              clicked = false;//Если включен сменить состояние clicked при клике на кнопку
      }
    })
} else if (window.innerWidth>1120){//По условию соответствия размера
  push.addEventListener("click", function(){
    if (!clicked) {//Если выключено состояние clicked при клике на кнопку
      buttons2.forEach(function(element) {
      element.classList.remove('hidden-click-1120');//Если выключен..убрать класс
      });
      textPush.textContent = "Скрыть";//Если выключен..сменить текст
        status.classList.remove('open');//Если выключен..удалить класс
        status.classList.add('closed');//Если выключен..добавить класс
              clicked = true;//Если выключен сменить состояние clicked при клике на кнопку
   } else {//Если включено состояние clicked при клике на кнопку
buttons2.forEach(function(element) {    
    element.classList.add('hidden-click-1120');
        });
        textPush.textContent = "Показать все";//Если включен..сменить текст
        status.classList.remove('closed');//Если включен..удалить класс
        status.classList.add('open');//Если включен..добавить класс
            clicked = false;//Если включен сменить состояние clicked при клике на кнопку
    }
  })
}


let swiper = null;

function initSwiper() {
  swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}

function destroySwiper() {
  if (swiper !== null) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function checkScreenWidth() {
  if (window.innerWidth < 768) {
    if (swiper === null) {
      initSwiper(); // Вызов функции initSwiper() при необходимости
    }
  } else {
    destroySwiper(); //Вызов функции destroySwiper() при необходимости
  }
}

function handleResize() {
  checkScreenWidth();
}

// Проверяем ширину экрана при загрузке страницы
checkScreenWidth();

// Обработчик события изменения размера окна
window.addEventListener('resize', handleResize);
