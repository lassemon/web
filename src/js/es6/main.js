module.exports = function () {
  var fs = require('fs');

  var codeContainerClassName = '.js-code-container';
  var codeInputClassName = '.js-code-input';

  var es6Codes = {
    'custom' : fs.readFileSync('./src/js/es6/custom.js', 'utf8'),
    'let' : fs.readFileSync('./src/js/es6/let.js', 'utf8'),
    'const' : fs.readFileSync('./src/js/es6/const.js', 'utf8'),
    'blockScopedFunctions' : fs.readFileSync('./src/js/es6/blockScopedFunctions.js', 'utf8'),
    'arrowFunction' : fs.readFileSync('./src/js/es6/arrowFunction.js', 'utf8'),
    'destructuring' : fs.readFileSync('./src/js/es6/destructuring.js', 'utf8'),
    'defaults' : fs.readFileSync('./src/js/es6/defaults.js', 'utf8')
  };

  (function showCode() {
    var container = u('body .js-es6-section '+codeContainerClassName);
    _.forEach(es6Codes, function(value, key){
      var codeContainer = createCodeContainer(value, key);
      container.append(codeContainer);
      addChangeListener(container, key);
    });
  })();

  (function resizeDOM() {
    u('textarea.js-input').each(function(node){
      textAreaAdjust(node);
    });
  })();

  function textAreaAdjust(textarea) {
    textarea.style.height = '1px';
    textarea.style.height = (25+textarea.scrollHeight)+'px';
  };

  function addChangeListener(container, key){
    container.find('.' + key + ' .js-input').on('input propertychange', function(event){
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
      textAreaAdjust(textarea.nodes[0]);
    });
  };

  function getBabelContainerClassName(textarea){
    var codeInput = textarea.closest(codeInputClassName);
    var classes = codeInput.attr('class').split(' ');
    return classes[classes.length-1];
  };

  function createCodeContainer(es6Code, className){
    var template = u(document.createElement('div'));
    template.html(u('.js-template').html());

    template.find('.header').html(className);
    var es6Container = template.find('.js-es6');
    var es6codeContainer = u(document.createElement('div'));
    es6codeContainer.append(es6Code);
    es6Container.append(es6codeContainer.html());

    var es5Container = template.find('.js-es5');
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

    template.find(codeInputClassName).addClass(className);
    return template.html();
  };

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
};
