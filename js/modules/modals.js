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
        
        if(submitBtn){
          submitBtn.disabled = true;
          submitBtn.textContent = 'Procesando...';
        }
        
        // Simulate payment processing
        setTimeout(function(){
          showModalMessage(modal, '¡Gracias! Tu pago está siendo procesado. Recibirás un comprobante por email.', 'success');
          form.reset();
          
          if(submitBtn){
            submitBtn.disabled = false;
            submitBtn.textContent = submitBtn.textContent.includes('Donación') ? 'Procesar Donación' : 'Procesar Pago';
          }
        }, 2000);
      });
    });
    
    // Transfer forms
    var transferForms = document.querySelectorAll('.transfer-form');
    transferForms.forEach(function(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        var modal = form.closest('.modal');
        var submitBtn = form.querySelector('button[type="submit"]');
        
        if(submitBtn){
          submitBtn.disabled = true;
          submitBtn.textContent = 'Enviando...';
        }
        
        // Simulate form submission
        setTimeout(function(){
          showModalMessage(modal, '¡Gracias! Hemos recibido tu confirmación. Te contactaremos pronto.', 'success');
          form.reset();
          
          if(submitBtn){
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Confirmación';
          }
        }, 2000);
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

