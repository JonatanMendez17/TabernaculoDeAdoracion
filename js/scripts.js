// Apply background images from data-bg attributes
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

// For header menu on all pages
document.addEventListener('DOMContentLoaded', function(){
  // Apply background images from data attributes
  applyBackgroundImages();
  
  var menuBtn = document.getElementById('menuToggle');
  if(menuBtn) menuBtn.addEventListener('click', function(){
    var nav = document.getElementById('mainNav');
    if(!nav) return;
    nav.classList.toggle('active');
  });
  
  // Close menu when clicking on a link (mobile)
  var navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(function(link){
    link.addEventListener('click', function(){
      var nav = document.getElementById('mainNav');
      if(nav && window.innerWidth <= 860){
        nav.classList.remove('active');
      }
    });
  });
  
  // Close menu when clicking outside (mobile)
  document.addEventListener('click', function(e){
    var nav = document.getElementById('mainNav');
    var menuBtn = document.getElementById('menuToggle');
    if(nav && menuBtn && window.innerWidth <= 860){
      if(!nav.contains(e.target) && !menuBtn.contains(e.target)){
        nav.classList.remove('active');
      }
    }
  });

  // Simple contact form submission (no backend) - shows success message
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var nombre = document.getElementById('nombre').value.trim();
      var apellido = document.getElementById('apellido').value.trim();
      var email = document.getElementById('email');
      var mensaje = document.getElementById('mensaje').value.trim();
      var msgEl = document.getElementById('formMessage');
      var emailValue = email ? email.value.trim() : '';
      if(!nombre || !apellido || !mensaje || (email && !emailValue)){
        msgEl.textContent = 'Por favor completa todos los campos requeridos.';
        msgEl.style.color = '#fff';
        msgEl.style.background = '#d32f2f';
        msgEl.style.border = 'none';
        return;
      }
      if(email && emailValue){
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(emailValue)){
          msgEl.textContent = 'Por favor ingresa un correo electrónico válido.';
          msgEl.style.color = '#fff';
          msgEl.style.background = '#d32f2f';
          msgEl.style.border = 'none';
          return;
        }
      }
      // Normally here you'd post to a server. We'll simulate success.
      msgEl.textContent = '¡Gracias! Tu mensaje fue enviado correctamente. Nos comunicaremos contigo pronto.';
      msgEl.style.color = '#fff';
      msgEl.style.background = '#4b0f37';
      msgEl.style.border = 'none';
      form.reset();
    });
  }

  // Load events dynamically
  loadEvents();
});

// Events data - fácil de actualizar
var eventsData = [
  { date: '12/2024', name: 'Conferencia de Fin de Año', icon: 'fa-calendar-alt', type: 'conferencia' },
  { date: '11/2024', name: 'Escuela para Padres', icon: 'fa-users', type: 'escuela' },
  { date: '10/2024', name: 'Conferencia de Adoración', icon: 'fa-music', type: 'conferencia' },
  { date: '09/2024', name: 'Retiro Espiritual', icon: 'fa-pray', type: 'retiro' },
  { date: '08/2024', name: 'Seminario de Intercesión', icon: 'fa-hands-praying', type: 'seminario' }
];

// Function to load and render events
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
