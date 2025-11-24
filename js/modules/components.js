// Components Module - Load HTML components dynamically
(function(){
  'use strict';
  
  function loadComponent(componentName, targetSelector){
    var target = document.querySelector(targetSelector);
    if(!target) return;
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'components/' + componentName + '.html', true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        target.innerHTML = xhr.responseText;
        // Dispatch custom event for component loaded
        var event = new CustomEvent('componentLoaded', {
          detail: { component: componentName }
        });
        document.dispatchEvent(event);
      }
    };
    xhr.send();
  }
  
  function initComponents(){
    // Load header if placeholder exists
    var headerPlaceholder = document.getElementById('header-placeholder');
    if(headerPlaceholder){
      loadComponent('header', '#header-placeholder');
    }
    
    // Load footer if placeholder exists
    var footerPlaceholder = document.getElementById('footer-placeholder');
    if(footerPlaceholder){
      loadComponent('footer', '#footer-placeholder');
    }
  }
  
  // Initialize on DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents();
  }
})();

