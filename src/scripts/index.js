/* eslint-disable */

import debugMenu from './frontend-debug-menu';
import {tagCloudSettings} from './parts/other/tagcloud-init';
import AOS from './parts/aos';
import Parallax from './parts/parallax';


(() => {
  // дебаг меню
  // debugMenu();

  // инициализация плагина AOS
  AOS.init();

  // инициализация облака тегов на главной
  $('.js-tagcloud').svg3DTagCloud(tagCloudSettings.indexTagCloudSettings);

  // Инициализация параллакса на клиентов
  const clients = document.querySelector('.js-parallax');
  const parallaxInstance = new Parallax(clients);

})();

