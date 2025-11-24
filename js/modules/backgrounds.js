// Background Images Module - Apply backgrounds from data-bg attributes
(function(){
  'use strict';
  
  function applyBackgroundImages(){
    var elements = document.querySelectorAll('[data-bg]');
    elements.forEach(function(el){
      var bgImage = el.getAttribute('data-bg');
      var gradient = el.getAttribute('data-gradient');
      if(bgImage){
        if(gradient){
          el.style.backgroundImage = 'linear-gradient(' + gradient + '),url(' + bgImage + ')';
        } else {
          el.style.backgroundImage = 'url(' + bgImage + ')';
        }
      }
    });
  }
  
  // Initialize on DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', applyBackgroundImages);
  } else {
    applyBackgroundImages();
  }
})();

