// Ministries Module - Dynamic ministries loading
(function(){
  'use strict';
  
  // Get ministries data from dataconfig.js
  var ministriesData = window.ministriesData || [];
  
  // Render ministry card (simple version for home page)
  function renderMinistryCard(ministry, container, isDetailed){
    var article = document.createElement('article');
    article.className = isDetailed ? 'ministry-card' : 'card';
    
    if(isDetailed){
      // Detailed version for ministerios.html
      var imageHTML = '';
      if(ministry.image && ministry.image.trim() !== ''){
        imageHTML = '<div class="ministry-image">' +
          '<img src="' + ministry.image + '" alt="' + ministry.imageAlt + '" loading="lazy">' +
        '</div>';
      }
      article.innerHTML = 
        imageHTML +
        '<div class="ministry-content">' +
          '<h3>' + ministry.title + '</h3>' +
          '<p class="ministry-description">' + ministry.fullDescription + '</p>' +
          '<p class="ministry-details">' + ministry.details + '</p>' +
        '</div>';
    } else {
      // Simple version for index.html
      var imageHTML = '';
      if(ministry.image && ministry.image.trim() !== ''){
        imageHTML = '<img src="' + ministry.image + '" alt="' + ministry.imageAlt + '" loading="lazy">';
      }
      article.innerHTML = 
        imageHTML +
        '<h3>' + ministry.title + '</h3>' +
        '<p>' + ministry.description + '</p>';
    }
    
    container.appendChild(article);
  }
  
  // Load ministries for home page (simple cards)
  function loadMinistriesHome(){
    var cardsContainer = document.getElementById('ministriesCards');
    if(!cardsContainer) return;
    
    // Clear existing content
    cardsContainer.innerHTML = '';
    
    // Render each ministry (limit to 3 for home)
    var ministriesToShow = ministriesData.slice(0, 3);
    ministriesToShow.forEach(function(ministry){
      renderMinistryCard(ministry, cardsContainer, false);
    });
  }
  
  // Load ministries for ministerios.html (detailed cards)
  function loadMinistriesDetailed(){
    var detailedContainer = document.getElementById('ministriesDetailed');
    if(!detailedContainer) return;
    
    // Clear existing content
    detailedContainer.innerHTML = '';
    
    // Render all ministries with full details
    ministriesData.forEach(function(ministry){
      renderMinistryCard(ministry, detailedContainer, true);
    });
  }
  
  // Initialize on DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      loadMinistriesHome();
      loadMinistriesDetailed();
    });
  } else {
    loadMinistriesHome();
    loadMinistriesDetailed();
  }
})();

