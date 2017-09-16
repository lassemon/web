module.exports = function(){
  const instance = {};

  u('input[name="tabs"]').on('change', function(event){
    var clickedTabId = u(event.currentTarget).attr('id');
    var targetTabContent = clickedTabId.replace('tab-', '');
    u('.tab__content').addClass('hidden')
    u('.tab__content').each(function(node, i){
      var tabContent = u(node);
      if(tabContent.attr('id') === targetTabContent){
        tabContent.removeClass('hidden')
      }
    });
  });

  return instance;
};
