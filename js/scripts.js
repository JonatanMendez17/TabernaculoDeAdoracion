// Small JS for menu toggle and contact form handling
function toggleMenu(id){
  var el = document.getElementById(id);
  if(!el) return;
  if(el.style.display === 'block') el.style.display = '';
  else el.style.display = 'block';
}

// For header menu on index page
document.addEventListener('DOMContentLoaded', function(){
  var menuBtn = document.getElementById('menuToggle');
  if(menuBtn) menuBtn.addEventListener('click', function(){
    var nav = document.getElementById('mainNav');
    if(!nav) return;
    nav.style.display = nav.style.display === 'block' ? '' : 'block';
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


