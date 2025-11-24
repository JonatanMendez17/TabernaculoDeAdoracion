// Scroll to Top Module - Back to top button functionality
(function(){
  'use strict';
  
  var scrollButton = document.getElementById('scrollToTop');
  if(!scrollButton) return;
  
  var scrollThreshold = 300; // Show button after scrolling 300px
  
  // Show/hide button based on scroll position
  function toggleScrollButton(){
    if(window.pageYOffset > scrollThreshold){
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  }
  
  // Smooth scroll to top
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Event listeners
  scrollButton.addEventListener('click', scrollToTop);
  
  // Throttle scroll event for better performance
  var ticking = false;
  window.addEventListener('scroll', function(){
    if(!ticking){
      window.requestAnimationFrame(function(){
        toggleScrollButton();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Initial check
  toggleScrollButton();
})();

