module.exports = function (){

  var fs = require('fs');
  var es6render = require('./es6render.js');
  var html5render = require('./html5render.js');

  var RENDER_TYPE_CLASS_NAMES = {
    HTML: 'js-render-type-html',
    ES6: 'js-render-type-es6'
  };

  var RENDER_TYPES = {
    HTML: 'html',
    ES6: 'es6'
  };

  (function(){
    var inputContainers = u('body .js-render-input-container');
    inputContainers.each(function(node, index){
      var inputContainer = u(node);
      var outputContainer = getRenderOutputContainer(inputContainer);
      if(outputContainer){
        var renderType = getRenderType(inputContainer);
        render(inputContainer, outputContainer, renderType);
      } else {
        console.warn('no output container found! doing nothing.')
      }
    });
  })();

  function getRenderOutputContainer(inputContainerNode){
    return u(inputContainerNode.siblings('.js-render-output-container').first());
  };

  function render(inputContainer, outputContainer, renderType){
    switch(renderType) {
      case RENDER_TYPES.HTML:
        renderHtml(inputContainer, outputContainer)
        break;
      case RENDER_TYPES.ES6:
        renderJavascript(inputContainer, outputContainer);
      default:
        console.warn('input has no render type! doing nothing.', inputContainer);
    };
  };

  function getRenderType(input){
    var renderType;
    _.each(RENDER_TYPE_CLASS_NAMES, function(value, key){
      if(input.hasClass(value)){
        renderType = RENDER_TYPES[key];
      }
    });
    return renderType;
  };

  function renderHtml(inputContainer, outputContainer){
    html5render.render(inputContainer, outputContainer);
  };

  function renderJavascript(){
    es6render.render('body .js-es6-section .js-render-container');
  };

};
