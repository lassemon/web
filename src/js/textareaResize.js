module.exports = function (){
  var instance = {};

  instance.resize = function(textarea){
    if(textarea.offsetHeight > 0) {
      textarea.style['min-height'] = '1px';
      textarea.style['min-height'] = (25+textarea.scrollHeight)+'px';
    }
  };

  instance.resizeAll = function(){
    u('textarea').each(function(textarea){
      instance.resize(textarea);
    });
  };

  return instance;
}();
