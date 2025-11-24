// Events Module - Dynamic events loading
(function(){
  'use strict';
  
  // Get events data from dataconfig.js
  var eventsData = window.eventsData || [];
  
  function loadEvents(){
    var eventsList = document.getElementById('eventsList');
    if(!eventsList) return;
    
    // Clear existing content
    eventsList.innerHTML = '';
    
    // Render each event
    eventsData.forEach(function(event){
      var li = document.createElement('li');
      li.className = 'event-item';
      li.innerHTML = '<i class="fas ' + event.icon + ' event-icon"></i>' +
                     '<span class="event-date">' + event.date + '</span> - ' +
                     '<span class="event-name">' + event.name + '</span>';
      eventsList.appendChild(li);
    });
  }
  
  // Initialize on DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', loadEvents);
  } else {
    loadEvents();
  }
})();

