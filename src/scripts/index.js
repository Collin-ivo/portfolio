/* eslint-disable */

// import jQuery from './vendor/jquery-3.2.1';
import {tagCloudSettings} from './parts/other/tagcloud-init';
import AOS from './parts/aos';
import Parallax from './parts/parallax';

// window.jQuery = window.$ = jQuery;

(() => {
  // не забыть удалить
  const hello = (input) => {
    console.log(input);
  };
  hello('Page is Ready');

  // инициализация плагина AOS
  AOS.init();


  // инициализация облака тегов на главной
  $('.js-tagcloud').svg3DTagCloud(tagCloudSettings.indexTagCloudSettings);

  // Инициализация параллакса на клиентов
  const clients = document.querySelector('.js-parallax');
  const parallaxInstance = new Parallax(clients);

})();

