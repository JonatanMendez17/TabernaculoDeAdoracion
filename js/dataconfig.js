// Data Configuration - Centralized data for ministries and events
(function(){
  'use strict';
  
  // Ministries data - fácil de actualizar
  window.ministriesData = [
    {
      id: 'esencia',
      title: 'Escuela Ministerial Esencia',
      image: 'Imagenes/esencia.jpg',
      imageAlt: 'Escuela Ministerial Esencia',
      description: 'Formación y equipamiento para líderes y servidores.',
      fullDescription: 'La Escuela Ministerial Esencia es un espacio de formación y equipamiento integral para líderes y servidores que desean profundizar en su llamado y desarrollar sus dones ministeriales. A través de un programa estructurado, brindamos herramientas prácticas y fundamentos bíblicos sólidos para el servicio efectivo en el Reino de Dios.',
      details: 'Nuestro enfoque incluye formación en liderazgo, adoración, intercesión y servicio comunitario, preparando a los participantes para impactar sus comunidades con excelencia y pasión por el propósito divino.',
      icon: 'fa-graduation-cap',
      category: 'formacion'
    },
    {
      id: 'asociacion',
      title: 'Asociación Civil',
      image: 'Imagenes/asociacion.jpg',
      imageAlt: 'Asociación Civil',
      description: 'Apoyo a familias con necesidades en la comunidad.',
      fullDescription: 'La Asociación Civil es nuestro brazo de acción social, comprometido con el bienestar de las familias y comunidades más vulnerables. Trabajamos activamente para brindar apoyo, recursos y acompañamiento a quienes más lo necesitan, reflejando el amor de Cristo a través de acciones concretas.',
      details: 'Desarrollamos programas de ayuda alimentaria, asistencia social, acompañamiento familiar y proyectos comunitarios que buscan transformar vidas y construir un futuro mejor para nuestra comunidad.',
      icon: 'fa-hands-helping',
      category: 'social'
    },
    {
      id: 'junior',
      title: 'Escuela de Entrenamiento Juniors',
      image: 'Imagenes/junior.jpg',
      imageAlt: 'Escuela de Entrenamiento Juniors',
      description: 'Formación y equipamiento para jóvenes.',
      fullDescription: 'La Escuela de Entrenamiento Juniors está diseñada específicamente para jóvenes que desean crecer en su fe y desarrollar su potencial ministerial. Ofrecemos un ambiente seguro y dinámico donde los jóvenes pueden explorar sus dones, fortalecer su identidad en Cristo y prepararse para ser líderes del futuro.',
      details: 'A través de actividades prácticas, enseñanza bíblica relevante y mentoría personalizada, equipamos a la próxima generación para que sean agentes de cambio en sus escuelas, familias y comunidades.',
      icon: 'fa-users',
      category: 'jovenes'
    }
  ];
  
  // Events data - fácil de actualizar
  window.eventsData = [
    { date: '12/2024', name: 'Conferencia de Fin de Año', icon: 'fa-calendar-alt', type: 'conferencia' },
    { date: '11/2024', name: 'Escuela para Padres', icon: 'fa-users', type: 'escuela' },
    { date: '10/2024', name: 'Conferencia de Adoración', icon: 'fa-music', type: 'conferencia' },
    { date: '09/2024', name: 'Retiro Espiritual', icon: 'fa-pray', type: 'retiro' },
    { date: '08/2024', name: 'Seminario de Intercesión', icon: 'fa-hands-praying', type: 'seminario' }
  ];
})();

