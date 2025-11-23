// Small JS for menu toggle and contact form handling
function toggleMenu(id){
  var el = document.getElementById(id);
  if(!el) return;
  if(el.style.display === 'block') el.style.display = '';
  else el.style.display = 'block';
}

// For header menu on all pages
document.addEventListener('DOMContentLoaded', function(){
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
      var mensaje = document.getElementById('mensaje').value.trim();
      var msgEl = document.getElementById('formMessage');
      if(!nombre || !apellido || !mensaje){
        msgEl.textContent = 'Por favor completa todos los campos.';
        msgEl.style.color = 'crimson';
        msgEl.style.background = '#ffe6e6';
        return;
      }
      // Normally here you'd post to a server. We'll simulate success.
      msgEl.textContent = 'Gracias, tu mensaje fue enviado. Nos comunicaremos pronto.';
      msgEl.style.color = '#fff';
      msgEl.style.background = '#4b0f37';
      form.reset();
    });
  }
});


