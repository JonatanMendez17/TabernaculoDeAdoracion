// Modals Module - Payment modals functionality
(function(){
  'use strict';
  
  // Open modal function
  function openModal(modalId){
    var modal = document.getElementById(modalId);
    if(!modal) return;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus first input in active tab
    setTimeout(function(){
      var activeTab = modal.querySelector('.modal-tab-content.active');
      if(activeTab){
        var firstInput = activeTab.querySelector('input, textarea, button');
        if(firstInput) firstInput.focus();
      }
    }, 100);
  }
  
  // Close modal function
  function closeModal(modalId){
    var modal = document.getElementById(modalId);
    if(!modal) return;
    
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  // Switch tab function
  function switchTab(modal, tabName){
    // Remove active from all tabs and content
    var tabs = modal.querySelectorAll('.modal-tab');
    var contents = modal.querySelectorAll('.modal-tab-content');
    
    tabs.forEach(function(tab){
      tab.classList.remove('active');
    });
    contents.forEach(function(content){
      content.classList.remove('active');
    });
    
    // Add active to selected tab and content
    var selectedTab = modal.querySelector('.modal-tab[data-tab="' + tabName + '"]');
    // Try different ID patterns for the content
    var selectedContent = modal.querySelector('#tab-' + tabName) || 
                         modal.querySelector('#tab-' + tabName + '-donar') || 
                         modal.querySelector('#tab-' + tabName + '-colaborar');
    
    if(selectedTab) selectedTab.classList.add('active');
    if(selectedContent) selectedContent.classList.add('active');
  }
  
  // Format card number
  function formatCardNumber(input){
    var value = input.value.replace(/\s/g, '');
    var formattedValue = value.match(/.{1,4}/g);
    if(formattedValue){
      input.value = formattedValue.join(' ');
    } else {
      input.value = value;
    }
  }
  
  // Format expiration date
  function formatExpirationDate(input){
    var value = input.value.replace(/\D/g, '');
    if(value.length >= 2){
      input.value = value.substring(0, 2) + '/' + value.substring(2, 4);
    } else {
      input.value = value;
    }
  }
  
  // Copy to clipboard
  function copyToClipboard(text, button){
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){
        showCopyFeedback(button);
      }).catch(function(){
        fallbackCopy(text, button);
      });
    } else {
      fallbackCopy(text, button);
    }
  }
  
  function fallbackCopy(text, button){
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try{
      document.execCommand('copy');
      showCopyFeedback(button);
    } catch(err){
      console.error('Error copying:', err);
    }
    document.body.removeChild(textarea);
  }
  
  function showCopyFeedback(button){
    var originalHTML = button.innerHTML;
    button.classList.add('copied');
    button.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(function(){
      button.classList.remove('copied');
      button.innerHTML = originalHTML;
    }, 2000);
  }
  
  // Show modal message
  function showModalMessage(modal, message, type){
    var messageEl = document.createElement('div');
    messageEl.className = 'modal-message ' + (type || 'success');
    messageEl.textContent = message;
    messageEl.setAttribute('role', 'alert');
    
    var content = modal.querySelector('.modal-content');
    if(content){
      content.insertBefore(messageEl, content.firstChild);
      
      // Remove message after 5 seconds
      setTimeout(function(){
        if(messageEl.parentNode){
          messageEl.remove();
        }
      }, 5000);
    }
  }
  
  // Initialize modals
  function initModals(){
    // Open modal buttons
    var btnColaborar = document.getElementById('btnColaborar');
    var btnDonar = document.getElementById('btnDonar');
    
    if(btnColaborar){
      btnColaborar.addEventListener('click', function(e){
        e.preventDefault();
        openModal('modalColaborar');
      });
    }
    
    if(btnDonar){
      btnDonar.addEventListener('click', function(e){
        e.preventDefault();
        openModal('modalDonar');
      });
    }
    
    // Close modal buttons
    var closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(function(btn){
      btn.addEventListener('click', function(){
        var modal = btn.closest('.modal');
        if(modal){
          closeModal(modal.id);
        }
      });
    });
    
    // Close on overlay click
    var overlays = document.querySelectorAll('.modal-overlay');
    overlays.forEach(function(overlay){
      overlay.addEventListener('click', function(){
        var modal = overlay.closest('.modal');
        if(modal){
          closeModal(modal.id);
        }
      });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        var activeModal = document.querySelector('.modal.active');
        if(activeModal){
          closeModal(activeModal.id);
        }
      }
    });
    
    // Tab switching
    var tabButtons = document.querySelectorAll('.modal-tab');
    tabButtons.forEach(function(tab){
      tab.addEventListener('click', function(){
        var modal = tab.closest('.modal');
        var tabName = tab.getAttribute('data-tab');
        if(modal && tabName){
          switchTab(modal, tabName);
        }
      });
    });
    
    // Format card number inputs
    var cardInputs = document.querySelectorAll('input[name="tarjeta"]');
    cardInputs.forEach(function(input){
      input.addEventListener('input', function(){
        formatCardNumber(input);
      });
    });
    
    // Format expiration date inputs
    var expInputs = document.querySelectorAll('input[name="vencimiento"]');
    expInputs.forEach(function(input){
      input.addEventListener('input', function(){
        formatExpirationDate(input);
      });
    });
    
    // Copy buttons
    var copyButtons = document.querySelectorAll('.btn-copy');
    copyButtons.forEach(function(btn){
      btn.addEventListener('click', function(){
        var text = btn.getAttribute('data-copy');
        if(text){
          copyToClipboard(text, btn);
        }
      });
    });
    
    // Form submissions
    // Payment forms (tarjeta)
    var paymentForms = document.querySelectorAll('.payment-form');
    paymentForms.forEach(function(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        var modal = form.closest('.modal');
        var submitBtn = form.querySelector('button[type="submit"]');
        var isDonation = form.id.includes('Donar');
        
        if(submitBtn){
          submitBtn.disabled = true;
          submitBtn.textContent = 'Procesando...';
        }
        
        // Get form data
        var formData = {
          tipo: isDonation ? 'Donación' : 'Colaboración Construcción',
          monto: form.querySelector('input[name="monto"]').value,
          nombre: form.querySelector('input[name="nombre"]').value.trim(),
          email: form.querySelector('input[name="email"]').value.trim(),
          mensaje: form.querySelector('textarea[name="mensaje"]') ? form.querySelector('textarea[name="mensaje"]').value.trim() : ''
        };
        
        // Check if EmailJS is configured
        if(typeof emailjs === 'undefined' || !EMAILJS_CONFIG || !EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey === 'TU_PUBLIC_KEY_AQUI'){
          showModalMessage(modal, 'El formulario no está configurado correctamente. Por favor contacta al administrador.', 'error');
          if(submitBtn){
            submitBtn.disabled = false;
            submitBtn.textContent = isDonation ? 'Procesar Donación' : 'Procesar Pago';
          }
          return;
        }
        
        // Initialize EmailJS if not already done
        if(EMAILJS_CONFIG.publicKey){
          emailjs.init(EMAILJS_CONFIG.publicKey);
        }
        
        // Prepare email template parameters
        var templateParams = {
          to_email: EMAILJS_CONFIG.recipientEmail,
          tipo: formData.tipo,
          monto: '$' + parseFloat(formData.monto).toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2}),
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje || 'Sin mensaje adicional',
          reply_to: formData.email
        };
        
        // Send email using EmailJS
        emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.donationTemplateId,
          templateParams
        ).then(function(response){
          showModalMessage(modal, '¡Gracias! Tu pago está siendo procesado. Recibirás un comprobante por email.', 'success');
          form.reset();
          
          if(submitBtn){
            submitBtn.disabled = false;
            submitBtn.textContent = isDonation ? 'Procesar Donación' : 'Procesar Pago';
          }
        }, function(error){
          console.error('Error enviando email:', error);
          showModalMessage(modal, 'Hubo un error al procesar tu pago. Por favor intenta nuevamente o contáctanos directamente.', 'error');
          
          if(submitBtn){
            submitBtn.disabled = false;
            submitBtn.textContent = isDonation ? 'Procesar Donación' : 'Procesar Pago';
          }
        });
      });
    });
    
    // Transfer forms
    var transferForms = document.querySelectorAll('.transfer-form');
    transferForms.forEach(function(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        var modal = form.closest('.modal');
        var submitBtn = form.querySelector('button[type="submit"]');
        var isDonation = form.id.includes('Donar');
        
        if(submitBtn){
          submitBtn.disabled = true;
          submitBtn.textContent = 'Enviando...';
        }
        
        // Get form data
        var formData = {
          tipo: isDonation ? 'Donación - Transferencia' : 'Colaboración Construcción - Transferencia',
          monto: form.querySelector('input[name="monto"]').value,
          email: form.querySelector('input[name="email"]').value.trim(),
          comprobante: form.querySelector('input[name="comprobante"]') ? form.querySelector('input[name="comprobante"]').value.trim() : 'No proporcionado',
          mensaje: form.querySelector('textarea[name="mensaje"]') ? form.querySelector('textarea[name="mensaje"]').value.trim() : ''
        };
        
        // Check if EmailJS is configured
        if(typeof emailjs === 'undefined' || !EMAILJS_CONFIG || !EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey === 'TU_PUBLIC_KEY_AQUI'){
          showModalMessage(modal, 'El formulario no está configurado correctamente. Por favor contacta al administrador.', 'error');
          if(submitBtn){
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Confirmación';
          }
          return;
        }
        
        // Initialize EmailJS if not already done
        if(EMAILJS_CONFIG.publicKey){
          emailjs.init(EMAILJS_CONFIG.publicKey);
        }
        
        // Prepare email template parameters
        var templateParams = {
          to_email: EMAILJS_CONFIG.recipientEmail,
          tipo: formData.tipo,
          monto: '$' + parseFloat(formData.monto).toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2}),
          email: formData.email,
          comprobante: formData.comprobante,
          mensaje: formData.mensaje || 'Sin mensaje adicional',
          reply_to: formData.email
        };
        
        // Send email using EmailJS
        emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.donationTemplateId,
          templateParams
        ).then(function(response){
          showModalMessage(modal, '¡Gracias! Hemos recibido tu confirmación. Te contactaremos pronto.', 'success');
          form.reset();
          
          if(submitBtn){
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Confirmación';
          }
        }, function(error){
          console.error('Error enviando email:', error);
          showModalMessage(modal, 'Hubo un error al enviar tu confirmación. Por favor intenta nuevamente o contáctanos directamente.', 'error');
          
          if(submitBtn){
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Confirmación';
          }
        });
      });
    });
    
  }
  
  // Initialize on DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initModals);
  } else {
    initModals();
  }
})();

