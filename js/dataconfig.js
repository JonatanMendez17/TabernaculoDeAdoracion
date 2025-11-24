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
    },
    {
      id: 'casa-misericordia',
      title: 'Casa de Misericordia',
      image: '',
      imageAlt: 'Casa de Misericordia',
      description: 'Servicio y ayuda a quienes más lo necesitan.',
      fullDescription: 'La Casa de Misericordia es un ministerio dedicado a extender la compasión y el amor de Cristo a través de acciones concretas de servicio. Nos enfocamos en brindar apoyo integral a personas y familias que atraviesan momentos difíciles, ofreciendo recursos, acompañamiento y esperanza.',
      details: 'Desarrollamos programas de asistencia, acompañamiento espiritual y apoyo práctico para transformar vidas y restaurar esperanza en nuestra comunidad.',
      icon: 'fa-heart',
      category: 'social'
    },
    {
      id: 'grupo-jovenes',
      title: 'Grupo de Jóvenes',
      image: 'Imagenes/jovenes.jpg',
      imageAlt: 'Grupo de Jóvenes',
      description: 'Comunidad de jóvenes unidos en fe y propósito.',
      fullDescription: 'El Grupo de Jóvenes es un espacio dinámico donde los jóvenes se reúnen para crecer juntos en su relación con Dios, desarrollar amistades significativas y descubrir su propósito. A través de encuentros semanales, actividades recreativas y servicio comunitario, creamos un ambiente donde la fe cobra vida.',
      details: 'Organizamos reuniones, eventos especiales, retiros y proyectos de servicio que permiten a los jóvenes conectarse, crecer y hacer una diferencia positiva en su entorno.',
      icon: 'fa-user-friends',
      category: 'jovenes'
    },
    {
      id: 'grupo-adolescentes',
      title: 'Grupo de Adolescentes',
      image: 'Imagenes/adoslescentes.jpg',
      imageAlt: 'Grupo de Adolescentes',
      description: 'Un lugar seguro para adolescentes crecer en su fe.',
      fullDescription: 'El Grupo de Adolescentes está diseñado específicamente para jóvenes en esta etapa crucial de su vida. Ofrecemos un ambiente acogedor donde pueden hacer preguntas, explorar su fe, desarrollar relaciones saludables y encontrar su identidad en Cristo.',
      details: 'A través de enseñanzas relevantes, actividades dinámicas y mentoría, acompañamos a los adolescentes en su crecimiento espiritual y personal, preparándolos para enfrentar los desafíos de esta etapa con sabiduría y propósito.',
      icon: 'fa-user-graduate',
      category: 'jovenes'
    },
    {
      id: 'staff-musicos',
      title: 'Staff de Músicos',
      image: 'Imagenes/musicos.jpg',
      imageAlt: 'Staff de Músicos',
      description: 'Equipo de adoración y música para la gloria de Dios.',
      fullDescription: 'El Staff de Músicos es un grupo dedicado de músicos y adoradores que sirven con excelencia y pasión en los tiempos de adoración. Nos comprometemos a crear un ambiente donde la presencia de Dios se manifieste a través de la música y la adoración genuina.',
      details: 'Trabajamos en equipo para desarrollar habilidades musicales, profundizar en la adoración y servir con integridad, preparando cada presentación como una ofrenda de excelencia para el Señor.',
      icon: 'fa-music',
      category: 'adoracion'
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

