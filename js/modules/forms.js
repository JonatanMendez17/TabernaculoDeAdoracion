// Forms Module - Contact form handling with enhanced validations
(function(){
  'use strict';
  
  // Validation rules
  var validations = {
    nombre: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
      message: 'El nombre debe tener entre 2 y 50 caracteres y solo contener letras.'
    },
    apellido: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
      message: 'El apellido debe tener entre 2 y 50 caracteres y solo contener letras.'
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Por favor ingresa un correo electrónico válido.'
    },
    telefono: {
      required: false,
      pattern: /^[\d\s\-\+\(\)]+$/,
      minLength: 8,
      maxLength: 20,
      message: 'El teléfono debe tener entre 8 y 20 caracteres y solo números, espacios, guiones o paréntesis.'
    },
    mensaje: {
      required: true,
      minLength: 10,
      maxLength: 1000,
      message: 'El mensaje debe tener entre 10 y 1000 caracteres.'
    }
  };
  
  function showFieldError(field, message){
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    
    // Remove existing error message
    var existingError = field.parentNode.querySelector('.field-error');
    if(existingError){
      existingError.remove();
    }
    
    // Add error message
    var errorEl = document.createElement('span');
    errorEl.className = 'field-error';
    errorEl.textContent = message;
    errorEl.setAttribute('role', 'alert');
    field.parentNode.appendChild(errorEl);
  }
  
  function clearFieldError(field){
    field.classList.remove('error');
    field.removeAttribute('aria-invalid');
    var errorEl = field.parentNode.querySelector('.field-error');
    if(errorEl){
      errorEl.remove();
    }
  }
  
  function validateField(fieldId){
    var field = document.getElementById(fieldId);
    if(!field) return true;
    
    var value = field.value.trim();
    var rules = validations[fieldId];
    if(!rules) return true;
    
    // Clear previous errors
    clearFieldError(field);
    
    // Check required
    if(rules.required && !value){
      showFieldError(field, 'Este campo es obligatorio.');
      return false;
    }
    
    // Skip validation if field is empty and not required
    if(!value && !rules.required){
      return true;
    }
    
    // Check min length
    if(rules.minLength && value.length < rules.minLength){
      showFieldError(field, rules.message || 'El campo es demasiado corto.');
      return false;
    }
    
    // Check max length
    if(rules.maxLength && value.length > rules.maxLength){
      showFieldError(field, rules.message || 'El campo es demasiado largo.');
      return false;
    }
    
    // Check pattern
    if(rules.pattern && !rules.pattern.test(value)){
      showFieldError(field, rules.message || 'El formato no es válido.');
      return false;
    }
    
    return true;
  }
  
  function validateAllFields(){
    var isValid = true;
    var fields = ['nombre', 'apellido', 'email', 'telefono', 'mensaje'];
    
    fields.forEach(function(fieldId){
      if(!validateField(fieldId)){
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  function showMessage(message, type){
    var msgEl = document.getElementById('formMessage');
    if(!msgEl) return;
    
    msgEl.textContent = message;
    msgEl.className = 'form-message';
    msgEl.setAttribute('role', 'alert');
    
    if(type === 'success'){
      msgEl.classList.add('success');
      msgEl.style.color = '#fff';
      msgEl.style.background = '#4b0f37';
      msgEl.style.border = 'none';
    } else if(type === 'error'){
      msgEl.classList.add('error');
      msgEl.style.color = '#fff';
      msgEl.style.background = '#d32f2f';
      msgEl.style.border = 'none';
    } else {
      msgEl.style.color = '';
      msgEl.style.background = '';
      msgEl.style.border = '';
    }
    
    // Scroll to message
    msgEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  function initContactForm(){
    var form = document.getElementById('contactForm');
    if(!form) return;
    
    var submitButton = form.querySelector('button[type="submit"]');
    var fields = ['nombre', 'apellido', 'email', 'telefono', 'mensaje'];
    
    // Real-time validation on blur
    fields.forEach(function(fieldId){
      var field = document.getElementById(fieldId);
      if(field){
        field.addEventListener('blur', function(){
          validateField(fieldId);
        });
        
        field.addEventListener('input', function(){
          // Clear error on input if field is valid
          if(field.classList.contains('error')){
            var value = field.value.trim();
            var rules = validations[fieldId];
            if(rules){
              var isValid = true;
              if(rules.required && !value) isValid = false;
              else if(value && rules.pattern && !rules.pattern.test(value)) isValid = false;
              else if(value && rules.minLength && value.length < rules.minLength) isValid = false;
              else if(value && rules.maxLength && value.length > rules.maxLength) isValid = false;
              
              if(isValid){
                clearFieldError(field);
              }
            }
          }
        });
      }
    });
    
    // Form submission
    form.addEventListener('submit', function(e){
      e.preventDefault();
      
      // Clear previous messages
      showMessage('', '');
      
      // Validate all fields
      if(!validateAllFields()){
        showMessage('Por favor corrige los errores en el formulario antes de enviar.', 'error');
        // Focus first error field
        var firstError = form.querySelector('.error');
        if(firstError){
          firstError.focus();
        }
        return;
      }
      
      // Disable submit button
      if(submitButton){
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
      }
      
      // Simulate form submission (replace with actual API call)
      setTimeout(function(){
        // Simulate success
        var success = Math.random() > 0.1; // 90% success rate for demo
        
        if(success){
          showMessage('¡Gracias! Tu mensaje fue enviado correctamente. Nos comunicaremos contigo pronto.', 'success');
          form.reset();
          
          // Clear all field errors
          fields.forEach(function(fieldId){
            var field = document.getElementById(fieldId);
            if(field){
              clearFieldError(field);
            }
          });
          
          // Reset button after 3 seconds
          setTimeout(function(){
            if(submitButton){
              submitButton.disabled = false;
              submitButton.textContent = 'Enviar mensaje';
            }
          }, 3000);
        } else {
          showMessage('Hubo un error al enviar tu mensaje. Por favor intenta nuevamente o contáctanos directamente por teléfono o email.', 'error');
          
          // Re-enable button
          if(submitButton){
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar mensaje';
          }
        }
      }, 1500); // Simulate network delay
    });
  }
  
  // Initialize on DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }
})();
