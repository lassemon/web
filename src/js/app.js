document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  u('.spinner').addClass('hidden');
  u('header').removeClass('hidden');
  u('main').removeClass('hidden');

  var tabs = require('./tabs/main.js');
  tabs();
  var es6  = require('./es6/main.js');
  es6();
});
