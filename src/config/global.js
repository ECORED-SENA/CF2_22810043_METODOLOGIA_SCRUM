export default {
  global: {
    componenteFormativo: 'Planeación, ejecución y desarrollos ágiles',
    descripcionCurso:
      'Con el estudio de este componente el aprendiz estará en capacidad aplicar procesos de planeación, ejecución y desarrollos ágiles en el marco de proyectos de desarrollo de software. Afianzará sus conocimientos y habilidades en actividades Scrum, métodos ágiles, programación extrema, método Kanban, entre otras metodologías y enfoques, que buscan responder a requisitos y soluciones siempre cambiantes.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Actividades <i>Scrum</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<i>Sprint</i>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sprint planning',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<i>Sprint review</i>',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Listas',
            hash: 'listas',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métodos ágiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El Manifiesto ágil',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Video Motion',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diferentes métodos ágiles',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Programación extrema (XP)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Valores XP',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Principios XP',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Las prácticas XP',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: '<i>Scrum</i> y XP',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Kanban',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agilemanifesto. (2021). Manifiesto por el desarrollo ágil de software. Agilemanifesto. ',
      link: 'https://agilemanifesto.org/iso/es/manifesto.html',
    },
    {
      referencia:
        'Heras del Dedo, R. & Álvarez, A. (2017). Métodos ágiles: Scrum, Kanban, Lean. Difusora Larousse - Anaya Multimedia',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/122933?page=1',
    },
    {
      referencia: 'Monte, J. (2016). Implantar Scrum con éxito. Editorial UOC.',
    },
    {
      referencia:
        'Pérez, A. (2022). Las 5 etapas en los “Sprints” de un desarrollo Scrum. Obs Business School. ',
      link:
        'https://www.obsbusiness.school/blog/las-5-etapas-en-los-sprints-de-un-desarrollo-scrum',
    },
    {
      referencia:
        'Programaenlinea. (2018). ¿Cuáles son las metodologías ágiles más usadas? Programaenlinea. ',
      link:
        'https://www.programaenlinea.net/cuales-las-metodologias-agiles-mas-usadas',
    },
    {
      referencia:
        'Sánchez, P., Blanco, C. & López, P. (2021). Actividades de un sprint. Proyecto Integrado de Ingeniería del Sw.',
      link:
        'https://proyecto-integrado-ingenieria-del-sw.readthedocs.io/es/latest/scrum/actividadesScrum.html',
    },
  ],
  glosario: [
    {
      termino: 'Ágiles',
      significado:
        'Filosofía que propone una forma distinta de trabajar y de organizarse, de tal forma que cada proyecto se desintegra para lograr desarrollarlo.',
    },
    {
      termino: 'Extendido',
      significado:
        'Hace referencia a un método que puede ser fusionado con otro o se puede complementar con otro.',
    },
    {
      termino: 'Funcionalidad',
      significado:
        'En <i>software</i> es la capacidad de cumplir las funciones, logrando satisfacer las necesidades explícitas e implícitas cuando se utilizan en determinadas condiciones.',
    },
    {
      termino: 'Manifiesto',
      significado:
        'Es un documento firmado por pensadores del mundo del desarrollo de <i>software</i> con la intención de descubrir mejoras en este.',
    },
    {
      termino: 'Métodos',
      significado:
        'Son los procesos para realizar un conjunto de actividades de forma regular, cuyo objetivo principal es trabajar en equipo, colaborativamente, para lograr alcanzar el resultado deseado.',
    },
    {
      termino: 'Valores',
      significado:
        'Son principios, virtudes y cualidades que identifican a una persona de gran importancia social. ',
    },
  ],
  complementario: [
    {
      texto:
        'Métodos ágiles - Agile, M. (2019). [Clase 01] Metodologías ágiles. ¿Qué son? [video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mKtGo20tqjA&ab_channel=MundoAgile',
    },
    {
      texto:
        'Kanban - Henao, C. (2018). #4. KANBAN en 4 Minutos Usando Trello [video].',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=CfROfwnQgps&ab_channel=CristianHenao',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Eyder Ortiz',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
