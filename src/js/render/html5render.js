module.exports = function (){
  var instance = {};

  instance.render = function(inputContainer, outputContainer){
    var htmlInput = inputContainer.find('.js-render-input').first().value;
    var output = createOutputElement();
    output.innerHTML = htmlInput;
    outputContainer.append(output);

    renderChange(inputContainer, outputContainer);
  }

  function createOutputElement(){
    var outputElement = document.createElement('pre');
    outputElement.classList.add('code-output');
    return outputElement;
  };

  function renderChange(inputContainer, outputContainer){
    u(inputContainer.find('.js-render-input').first()).on('input propertychange', function(event){
      var changedValue = event.target.value;
      var output = outputContainer.find('pre').first();
      output.innerHTML = changedValue;
    });
  };

  return instance;
}();
