// Modals Module - Payment modals for Colaborar and Donar
(function(){
  'use strict';
  
  // Initialize modals
  function initModals(){
    // Get buttons
    var btnColaborar = document.getElementById('btnColaborar');
    var btnDonar = document.getElementById('btnDonar');
    
    // Get modals
    var modalColaborar = document.getElementById('modalColaborar');
    var modalDonar = document.getElementById('modalDonar');
    
    // Open modal functions
    if(btnColaborar && modalColaborar){
      btnColaborar.addEventListener('click', function(){
        openModal(modalColaborar);
      });
    }
    
    if(btnDonar && modalDonar){
      btnDonar.addEventListener('click', function(){
        openModal(modalDonar);
      });
    }
    
    // Close modals
    var closeButtons = document.querySelectorAll('.modal-close, .modal-overlay');
    closeButtons.forEach(function(btn){
      btn.addEventListener('click', function(e){
        var modal = e.target.closest('.modal');
        if(modal){
          closeModal(modal);
        }
      });
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        var openModal = document.querySelector('.modal.active');
        if(openModal){
          closeModal(openModal);
        }
      }
    });
    
    // Tab switching
    var tabButtons = document.querySelectorAll('.modal-tab');
    tabButtons.forEach(function(tab){
      tab.addEventListener('click', function(){
        var modal = this.closest('.modal');
        var tabName = this.getAttribute('data-tab');
        switchTab(modal, tabName);
      });
    });
    
    // Form submissions
    initFormHandlers();
    
    // Copy buttons for transfer data
    initCopyButtons();
    
    // Format inputs
    initInputFormatters();
  }
  
  function openModal(modal){
    if(!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus first input
    var firstInput = modal.querySelector('input, textarea, button');
    if(firstInput){
      setTimeout(function(){
        firstInput.focus();
      }, 100);
    }
  }
  
  function closeModal(modal){
    if(!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Reset forms
    var forms = modal.querySelectorAll('form');
    forms.forEach(function(form){
      form.reset();
    });
    
    // Reset tabs to first
    var firstTab = modal.querySelector('.modal-tab');
    if(firstTab){
      switchTab(modal, firstTab.getAttribute('data-tab'));
    }
  }
  
  function switchTab(modal, tabName){
    if(!modal || !tabName) return;
    
    // Remove active from all tabs and contents
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
    
    // Find the correct content based on modal ID
    var modalId = modal.id;
    var contentId = 'tab-' + tabName;
    if(modalId === 'modalDonar'){
      contentId = 'tab-' + tabName + '-donar';
    } else if(modalId === 'modalColaborar'){
      contentId = 'tab-' + tabName;
    }
    
    var selectedContent = modal.querySelector('.modal-tab-content#' + contentId);
    
    if(selectedTab){
      selectedTab.classList.add('active');
    }
    
    if(selectedContent){
      selectedContent.classList.add('active');
    }
  }
  
  function initFormHandlers(){
    // Colaborar forms
    var formColaborarTarjeta = document.getElementById('formColaborarTarjeta');
    var formColaborarTransferencia = document.getElementById('formColaborarTransferencia');
    var formColaborarEmail = document.getElementById('formColaborarEmail');
    
    // Donar forms
    var formDonarTarjeta = document.getElementById('formDonarTarjeta');
    var formDonarTransferencia = document.getElementById('formDonarTransferencia');
    var formDonarEmail = document.getElementById('formDonarEmail');
    
    // Handle form submissions
    if(formColaborarTarjeta){
      formColaborarTarjeta.addEventListener('submit', function(e){
        e.preventDefault();
        handlePaymentSubmit(this, 'colaboración', 'tarjeta');
      });
    }
    
    if(formColaborarTransferencia){
      formColaborarTransferencia.addEventListener('submit', function(e){
        e.preventDefault();
        handleTransferSubmit(this, 'colaboración');
      });
    }
    
    if(formColaborarEmail){
      formColaborarEmail.addEventListener('submit', function(e){
        e.preventDefault();
        handleEmailSubmit(this, 'colaboración');
      });
    }
    
    if(formDonarTarjeta){
      formDonarTarjeta.addEventListener('submit', function(e){
        e.preventDefault();
        handlePaymentSubmit(this, 'donación', 'tarjeta');
      });
    }
    
    if(formDonarTransferencia){
      formDonarTransferencia.addEventListener('submit', function(e){
        e.preventDefault();
        handleTransferSubmit(this, 'donación');
      });
    }
    
    if(formDonarEmail){
      formDonarEmail.addEventListener('submit', function(e){
        e.preventDefault();
        handleEmailSubmit(this, 'donación');
      });
    }
  }
  
  function handlePaymentSubmit(form, type, method){
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn ? submitBtn.textContent : '';
    
    // Disable button
    if(submitBtn){
      submitBtn.disabled = true;
      submitBtn.textContent = 'Procesando...';
    }
    
    // Simulate payment processing
    setTimeout(function(){
      // Simulate success (90% success rate)
      var success = Math.random() > 0.1;
      
      if(success){
        showMessage('¡' + (type === 'colaboración' ? 'Colaboración' : 'Donación') + ' exitosa! Te hemos enviado un comprobante a tu email.', 'success');
        form.reset();
        
        // Close modal after 2 seconds
        setTimeout(function(){
          var modal = form.closest('.modal');
          if(modal){
            closeModal(modal);
          }
        }, 2000);
      } else {
        showMessage('Hubo un error al procesar el pago. Por favor intenta nuevamente.', 'error');
      }
      
      // Re-enable button
      if(submitBtn){
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }, 2000);
  }
  
  function handleTransferSubmit(form, type){
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn ? submitBtn.textContent : '';
    
    // Disable button
    if(submitBtn){
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
    }
    
    // Simulate submission
    setTimeout(function(){
      showMessage('¡Confirmación enviada! Te contactaremos cuando recibamos tu transferencia.', 'success');
      form.reset();
      
      // Close modal after 2 seconds
      setTimeout(function(){
        var modal = form.closest('.modal');
        if(modal){
          closeModal(modal);
        }
      }, 2000);
      
      // Re-enable button
      if(submitBtn){
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }, 1500);
  }
  
  function handleEmailSubmit(form, type){
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn ? submitBtn.textContent : '';
    
    // Disable button
    if(submitBtn){
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
    }
    
    // Simulate email sending
    setTimeout(function(){
      showMessage('¡Mensaje enviado! Nos comunicaremos contigo pronto.', 'success');
      form.reset();
      
      // Close modal after 2 seconds
      setTimeout(function(){
        var modal = form.closest('.modal');
        if(modal){
          closeModal(modal);
        }
      }, 2000);
      
      // Re-enable button
      if(submitBtn){
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }, 1500);
  }
  
  function showMessage(message, type){
    // Remove existing messages
    var existingMsg = document.querySelector('.modal-message');
    if(existingMsg){
      existingMsg.remove();
    }
    
    // Create message element
    var msgEl = document.createElement('div');
    msgEl.className = 'modal-message ' + type;
    msgEl.textContent = message;
    msgEl.setAttribute('role', 'alert');
    
    // Find active modal
    var activeModal = document.querySelector('.modal.active');
    if(activeModal){
      var modalContent = activeModal.querySelector('.modal-content');
      if(modalContent){
        modalContent.insertBefore(msgEl, modalContent.firstChild);
        
        // Scroll to message
        msgEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Remove after 5 seconds
        setTimeout(function(){
          if(msgEl.parentNode){
            msgEl.remove();
          }
        }, 5000);
      }
    }
  }
  
  function initCopyButtons(){
    var copyButtons = document.querySelectorAll('.btn-copy');
    copyButtons.forEach(function(btn){
      btn.addEventListener('click', function(){
        var textToCopy = this.getAttribute('data-copy');
        if(textToCopy){
          // Copy to clipboard
          if(navigator.clipboard && navigator.clipboard.writeText){
            navigator.clipboard.writeText(textToCopy).then(function(){
              showCopyFeedback(this);
            }.bind(this));
          } else {
            // Fallback for older browsers
            var textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
              document.execCommand('copy');
              showCopyFeedback(this);
            } catch(err) {
              console.error('Error copying text:', err);
            }
            document.body.removeChild(textArea);
          }
        }
      });
    });
  }
  
  function showCopyFeedback(button){
    var icon = button.querySelector('i');
    var originalClass = icon ? icon.className : '';
    
    if(icon){
      icon.className = 'fas fa-check';
      button.classList.add('copied');
    }
    
    setTimeout(function(){
      if(icon){
        icon.className = originalClass;
      }
      button.classList.remove('copied');
    }, 2000);
  }
  
  function initInputFormatters(){
    // Format card number
    var cardInputs = document.querySelectorAll('input[name="tarjeta"]');
    cardInputs.forEach(function(input){
      input.addEventListener('input', function(e){
        var value = e.target.value.replace(/\s/g, '');
        var formatted = value.match(/.{1,4}/g);
        if(formatted){
          e.target.value = formatted.join(' ');
        } else {
          e.target.value = value;
        }
      });
    });
    
    // Format expiration date
    var expInputs = document.querySelectorAll('input[name="vencimiento"]');
    expInputs.forEach(function(input){
      input.addEventListener('input', function(e){
        var value = e.target.value.replace(/\D/g, '');
        if(value.length >= 2){
          e.target.value = value.substring(0, 2) + '/' + value.substring(2, 4);
        } else {
          e.target.value = value;
        }
      });
    });
    
    // Format CVV (numbers only)
    var cvvInputs = document.querySelectorAll('input[name="cvv"]');
    cvvInputs.forEach(function(input){
      input.addEventListener('input', function(e){
        e.target.value = e.target.value.replace(/\D/g, '');
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

