export default {
  global: {
    componenteFormativo:
      'Técnicas de revisión, corrección y verificación en la traducción',
    descripcionCurso:
      'Traducir textos de acuerdo con las metodologías y la normativa técnica tiene toda la intencionalidad de encontrar una uniformidad en el acceso a los diferentes contenidos; sin embargo, hay pocas opciones formales para atender necesidades tan específicas como las que se presentan en aquellos textos que tienen la lengua de señas como lengua principal y que presentan dificultades para entenderse en el lenguaje oral respectivo, especialmente en textos que contienen un alto grado de tecnicismo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/float-4.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        /*icono: 'far fa-file-alt',*/
        numero: '1',
        titulo: 'Verificación de los procesos de traducción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas de revisión del texto meta',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Métodos y normas técnicas de revisión y corrección',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        /*icono: 'far fa-file-alt',*/
        numero: '2',
        titulo: 'Acciones correctivas y de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Selección de métodos, gramática y hablantes nativos',
            hash: 't_1_1',
          },
          {
            numero: '2.2',
            titulo:
              'Técnicas empleadas para las acciones correctivas y de mejora',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estilos de expresión',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/512400_CF07_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Acciones correctivas y de mejora',
      referencia:
        'Resolución 5274 de 2017. [Ministerio de Educación Nacional]. Por la cual se reglamenta el proceso de reconocimiento oficial de intérpretes oficiales de la Lengua de Señas Colombiana - Español. Marzo 21 de 2017.',
      tipo: 'Resolución ',
      link:
        'https://www.mineducacion.gov.co/1780/articles-360342_recurso_1.pdf',
    },
    {
      tema: 'Acciones correctivas y de mejora',
      referencia:
        'Zalca, I. (s.f). <em>Método de enseñanza de elocución para intérpretes.</em> Boletín AEPE Nº 25.',
      tipo: 'Artículo',
      link:
        'https://cvc.cervantes.es/ensenanza/biblioteca_ele/aepe/pdf/boletin_25_14_81/boletin_25_14_81_06.pdf',
    },
    {
      tema: 'Acciones correctivas y de mejor',
      referencia:
        'TEDx Talks. (2019). <em>El lenguaje de señas. De un problema a una oportunidad</em> [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=90fM3LQztPU',
    },
  ],
  glosario: [
    {
      termino: 'Acciones correctivas',
      significado:
        'Consisten en mejoras a los procesos de una organización tomadas para eliminar las causas de las no conformidades u otras situaciones indeseables.',
    },
    {
      termino: 'Cuantitativo',
      significado: 'De naturaleza numérica o cantidad.',
    },
    {
      termino: 'Elocución',
      significado:
        'Elección y distribución de las palabras y los pensamientos en un discurso determinado.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'Parte de la Lingüística que estudia el orden de las palabras y la relación entre ellas.',
    },
    {
      termino: 'Traducción',
      significado:
        'Expresar en una lengua algo que se ha enunciado anteriormente o que está escrito en otra diferente.',
    },
  ],
  referencias: [
    {
      referencia:
        'INSOR. (2019). <em>Caracterización de ciudadanos, usuarios y grupos de interés.</em> INSOR.',
      link:
        'http://www.insor.gov.co/home/descargar/Caracterizacion_ciudadano_usuarios_grupos_interes_2019.pdf',
    },
    {
      referencia:
        'Ley 324 de 1996. [Congreso de Colombia]. Por la cual se crean algunas normas a favor de la población sorda. Octubre 11 de 1996.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=349',
    },
    {
      referencia:
        'Parra, S. (2005). <em>La revisión de traducciones en traductología: aproximación a la práctica de la revisión en el ámbito profesional mediante el estudio de casos y propuestas de investigación.</em> Universidad de Granada.',
      link:
        'https://digibug.ugr.es/flexpaper/handle/10481/660/15472905.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Zalca, I. (s.f). <em>Método de enseñanza de elocución para intérpretes.</em> Boletín AEPE Nº 25.',
      link:
        'https://cvc.cervantes.es/ensenanza/biblioteca_ele/aepe/pdf/boletin_25_14_81/boletin_25_14_81_06.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié Atehortúa',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Manuel Alejandro Garzón',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'German Albeiro Saldarriga ',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Adriana María Bustamante',
          cargo: 'Profesional Diseño Curricular',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nidian Yarume Ortiz Buitrago',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación en Talento Humano y Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Luz Mila Pacheco Fuentes',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Evaluador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
