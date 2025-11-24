// Events Module - Dynamic events loading
(function(){
  'use strict';
  
  // Events data - fácil de actualizar
  var eventsData = [
    { date: '12/2024', name: 'Conferencia de Fin de Año', icon: 'fa-calendar-alt', type: 'conferencia' },
    { date: '11/2024', name: 'Escuela para Padres', icon: 'fa-users', type: 'escuela' },
    { date: '10/2024', name: 'Conferencia de Adoración', icon: 'fa-music', type: 'conferencia' },
    { date: '09/2024', name: 'Retiro Espiritual', icon: 'fa-pray', type: 'retiro' },
    { date: '08/2024', name: 'Seminario de Intercesión', icon: 'fa-hands-praying', type: 'seminario' }
  ];
  
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

