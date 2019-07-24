/* eslint-disable */

// import jQuery from './vendor/jquery-3.2.1';
import {tagCloudSettings} from './parts/other/tagcloud-init';

// window.jQuery = window.$ = jQuery;

(() => {

  // не забыть удалить
  const hello = (input) => {
    console.log(input);
  };
  hello('Page is Ready');

  console.log(tagCloudSettings);
  $('.js-tagcloud').svg3DTagCloud(tagCloudSettings.indexTagCloudSettings);

})();

