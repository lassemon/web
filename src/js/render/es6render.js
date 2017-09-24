module.exports = function (){

  var instance = {};

  var fs = require('fs');
  var textareaResize = require('../textareaResize.js');

  var jsDOMAnchorPrefix = 'js-';

  var codeContainerClassName = jsDOMAnchorPrefix + 'code-container';
  var codeInputClassName = jsDOMAnchorPrefix + 'render-input-container';

  var es6Codes = {
    'custom' : fs.readFileSync('./src/view/es6/custom.js', 'utf8'),
    'let' : fs.readFileSync('./src/view/es6/let.js', 'utf8'),
    'const' : fs.readFileSync('./src/view/es6/const.js', 'utf8'),
    'blockScopedFunctions' : fs.readFileSync('./src/view/es6/blockScopedFunctions.js', 'utf8'),
    'arrowFunction' : fs.readFileSync('./src/view/es6/arrowFunction.js', 'utf8'),
    'destructuring' : fs.readFileSync('./src/view/es6/destructuring.js', 'utf8'),
    'defaults' : fs.readFileSync('./src/view/es6/defaults.js', 'utf8')
  };

  function createCodeContainer(es6Code, className){
    var template = createTemplate();
    insertHeader(template, className);

    var es6Container = template.find('.js-render-input');
    var es6codeContainer = u(document.createElement('div'));
    es6codeContainer.append(es6Code);
    es6Container.append(es6codeContainer.html());

    var es5Container = template.find('.js-render-output-container');
    var es5codeContainer = document.createElement('pre');
    es5codeContainer.classList.add(className);
    es5codeContainer.classList.add('code-output');
    var transformedCode = babelify(es6Code);
    if(typeof transformedCode === 'string' && !transformedCode.error){
      es5codeContainer.innerHTML = transformedCode;
    }
    else {
      es5codeContainer.innerHTML = createErrorDisplay(transformedCode);
    }

    es5Container.append(es5codeContainer.outerHTML);

    template.find('.'+codeInputClassName).addClass(className);
    return template.html();
  };

  function createTemplate(){
    var template = u(document.createElement('div'));
    template.html(u('.'+jsDOMAnchorPrefix+'template').html());
    return template;
  }

  function insertHeader(template, className){
    template.find('.'+jsDOMAnchorPrefix+'header').html(className.replace(jsDOMAnchorPrefix, ''));
  }

  function createErrorDisplay(transformedCode){
    var errorElement = document.createElement('div');
    var errorHeader = document.createElement('h5');
    var errorText = document.createElement('span');
    errorText.classList.add('error-text');
    if(transformedCode && transformedCode.error){
      errorText.innerHTML = transformedCode.error;
    }
    errorElement.appendChild(errorText);
    errorElement.classList.add('error');
    return errorElement.outerHTML;
  };

  function addChangeListener(container, key){
    container.find('.' + key + ' .'+jsDOMAnchorPrefix+'render-input').on('input propertychange', function(event){
      var textarea = u(event.target);
      var babelContainerClassName = getBabelContainerClassName(textarea);
      var babelContainer = u('pre.' + babelContainerClassName);
      var transformedCode = babelify(event.target.value);
      if(typeof transformedCode === 'string' && !transformedCode.error){
        babelContainer.html(transformedCode);
      }
      else {
        babelContainer.html(createErrorDisplay(transformedCode));
      }
      textareaResize.resize(textarea.nodes[0]);
    });
  };

  function getBabelContainerClassName(textarea){
    var codeInput = textarea.closest('.'+codeInputClassName);
    var classes = codeInput.attr('class').split(' ');
    return classes[classes.length-1];
  };

  function babelify(es6Code){
    try {
      return _.trim(Babel.transform(es6Code, {
        presets: ['es2015']
      }).code.replace('"use strict";', ''));
    }
    catch(err){
      console.log(err)
      return {error:err};
    }
  };

  instance.render = function(containerClass){
    var container = u(containerClass);
    _.forEach(es6Codes, function(value, key){
      var codeContainer = createCodeContainer(value, jsDOMAnchorPrefix+key);
      container.append(codeContainer);
      addChangeListener(container, jsDOMAnchorPrefix+key);
    });
  };

  return instance;

}();
