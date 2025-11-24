// Header Module - Mobile menu functionality
(function(){
  'use strict';
  
  function initHeader(){
    var menuBtn = document.getElementById('menuToggle');
    if(!menuBtn) return;
    
    var nav = document.getElementById('mainNav');
    if(!nav) return;
    
    // Toggle menu on button click
    menuBtn.addEventListener('click', function(){
      nav.classList.toggle('active');
    });
    
    // Close menu when clicking on a link (mobile)
    var navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(function(link){
      link.addEventListener('click', function(){
        if(window.innerWidth <= 860){
          nav.classList.remove('active');
        }
      });
    });
    
    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e){
      if(window.innerWidth <= 860){
        if(!nav.contains(e.target) && !menuBtn.contains(e.target)){
          nav.classList.remove('active');
        }
      }
    });
  }
  
  // Initialize on DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initHeader);
  } else {
    initHeader();
  }
})();

