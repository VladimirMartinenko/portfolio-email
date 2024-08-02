/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'

import Swiper, { Navigation, Pagination } from 'swiper';
import BaseHelpers from './helpers/BaseHelpers';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion';
import onscroll from './helpers/activeNav';
import showScroll from './helpers/showScroll'
import send from './helpers/sendEmail'

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

onscroll();

showScroll();


/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();


new Tabs('tabs-example', {
  onChange: (data) => {
    console.log(data);
  },
});

new Accordion('.accordion', {
  shouldOpenAll: false, // true
  defaultOpen: [], // [0,1]
  collapsedClass: 'open',
});

new Swiper('.swiper', {
  
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');

// function sendEmail() {
//   const bodyMessage = `Name: ${name.value}<br> Email:${email.value}<br> Message: ${message.value}`;
//   Email.send({
//     Host: 'smtp.elasticemail.com',
//     Username: 'teslabest87@gmail.com',
//     Password: '703B30D98E9587C856DC76EC3A200BA62C36',
//     To: 'teslabest87@gmail.com',
//     From: 'teslabest87@gmail.com',
//     Subject: 'This is the subject',
//     Body: bodyMessage,
//   }).then((message) => {
//     if (message == 'OK') {
//       Swal.fire({
//         title: 'Succes!',
//         text: 'Message sent successfully!',
//         icon: 'success',
//       });
//     }else {console.log('error')}
//   });
// }

// function checkInputs() {
//   const items = document.querySelectorAll('.item');

//   for (const item of items) {
//     if (item.value == '') {
//       item.classList.add('error');
//       item.parentElement.classList.add('error');
//     }
//     if (items[1].value != '') {
//       checkEmail();
//     }

//     items[1].addEventListener('keyup', () => {
//       checkEmail();
//     });

//     item.addEventListener('keyup', () => {
//       if (item.value != '') {
//         item.classList.remove('error');
//         item.parentElement.classList.remove('error');
//       } else {
//         item.classList.add('error');
//         item.parentElement.classList.add('error');
//       }
//     });
//   }
// }

// function checkEmail() {
//   const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
//   const errorTxtEmail = document.querySelector('.error_text.email');

//   if (!email.value.match(emailRegex)) {
//     email.classList.add('error');
//     email.parentElement.classList.add('error');

//     if (email.value != '') {
//       errorTxtEmail.innerText = 'Enter avalid email address';
//     }
//     else {
//       errorTxtEmail.innerText = 'Email can`t be blank';
//     }
//   } else {
//     email.classList.remove('error');
//     email.parentElement.classList.remove('error');
//   }
// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   checkInputs();

//   if (!name.classList.contains("error") && !email.classList.contains("error") && !message.classList.contains("error")){
//     sendEmail();

//     form.reset();
//     return false;
//   }
// });
