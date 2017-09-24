document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  u('.spinner').addClass('hidden');
  u('header').removeClass('hidden');
  u('main').removeClass('hidden');

  var tabs = require('./tabs.js');
  tabs();

  var renderer  = require('./render/render.js');
  renderer();

  var textareaResize = require('./textareaResize.js');
  textareaResize.resizeAll();
});
