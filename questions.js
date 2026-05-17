// ===== Questions Database =====
const CATEGORIES = [
  'Conciencia',
  'Atencion',
  'Memoria',
  'Percepcion',
  'Pensamiento',
  'Afectividad',
  'Sindromes',
  'Lenguaje',
  'Conducta',
  'Personalizada'
];

const BASE_QUESTIONS = [
  // ===== CONCIENCIA =====
  {
    id: 'con-1',
    question: 'Que es la obnubilacion de la conciencia?',
    keywords: ['conciencia', 'obnubilacion', 'disminucion'],
    options: [
      'Disminucion leve del nivel de alerta con dificultad para mantener la atencion',
      'Perdida total de la conciencia',
      'Estado de hipervigilancia constante',
      'Alteracion de la orientacion temporal unicamente'
    ],
    correctAnswer: 0,
    explanation: 'La obnubilacion es una disminucion leve del nivel de vigilia donde el paciente tiene dificultad para mantener la atencion y puede mostrar somnolencia.',
    category: 'Conciencia',
    difficulty: 'facil'
  },
  {
    id: 'con-2',
    question: 'Cual es la caracteristica principal del estado crepuscular?',
    keywords: ['crepuscular', 'automatismos', 'amnesia'],
    options: [
      'Estrechamiento del campo de conciencia con automatismos y amnesia posterior',
      'Aumento de la vigilia con hiperactividad motora',
      'Perdida completa de funciones cognitivas',
      'Alucinaciones visuales complejas'
    ],
    correctAnswer: 0,
    explanation: 'El estado crepuscular se caracteriza por un estrechamiento del campo de conciencia, donde el paciente puede realizar automatismos y luego no recordar lo ocurrido.',
    category: 'Conciencia',
    difficulty: 'medio'
  },
  {
    id: 'con-3',
    question: 'Que caracteriza al delirium o sindrome confusional agudo?',
    keywords: ['delirium', 'confusional', 'fluctuante'],
    options: [
      'Alteracion fluctuante de la conciencia con desorientacion, alucinaciones y agitacion',
      'Estado de conciencia preservado con ideas delirantes',
      'Perdida permanente de la memoria reciente',
      'Alteracion exclusiva del ciclo sueno-vigilia'
    ],
    correctAnswer: 0,
    explanation: 'El delirium es un sindrome caracterizado por alteracion fluctuante del nivel de conciencia, desorientacion, alteraciones perceptivas y del ciclo sueno-vigilia.',
    category: 'Conciencia',
    difficulty: 'medio'
  },
  {
    id: 'con-4',
    question: 'Que es el estado oniroide?',
    keywords: ['oniroide', 'ensonacion', 'vivencias'],
    options: [
      'Estado de ensonacion con vivencias fantasticas y participacion emocional intensa',
      'Estado de coma profundo sin respuesta a estimulos',
      'Alteracion de la memoria a largo plazo',
      'Trastorno exclusivo del pensamiento'
    ],
    correctAnswer: 0,
    explanation: 'El estado oniroide es un estado de ensonacion donde el paciente experimenta vivencias fantasticas con intensa participacion emocional, similar a un sueno.',
    category: 'Conciencia',
    difficulty: 'dificil'
  },
  {
    id: 'con-5',
    question: 'Como se define el estupor?',
    keywords: ['estupor', 'ausencia', 'respuesta'],
    options: [
      'Ausencia de respuesta a estimulos habituales pero responde a estimulos intensos',
      'Perdida total e irreversible de la conciencia',
      'Estado de hipervigilancia patologica',
      'Alteracion exclusiva de la atencion selectiva'
    ],
    correctAnswer: 0,
    explanation: 'El estupor es un estado de ausencia de respuesta a estimulos habituales, pero el paciente puede responder ante estimulos intensos o dolorosos.',
    category: 'Conciencia',
    difficulty: 'medio'
  },

  // ===== ATENCION =====
  {
    id: 'ate-1',
    question: 'Que es la aprosexia?',
    keywords: ['aprosexia', 'atencion', 'ausencia'],
    options: [
      'Ausencia total de la capacidad de atencion',
      'Aumento patologico de la atencion',
      'Dificultad para mantener la atencion en el tiempo',
      'Focalizacion excesiva en un solo estimulo'
    ],
    correctAnswer: 0,
    explanation: 'La aprosexia es la ausencia absoluta de la capacidad atencional, donde el sujeto es incapaz de fijar la atencion en ningun estimulo.',
    category: 'Atencion',
    difficulty: 'facil'
  },
  {
    id: 'ate-2',
    question: 'Que caracteriza a la hiperprosexia?',
    keywords: ['hiperprosexia', 'excesiva', 'focalizacion'],
    options: [
      'Focalizacion excesiva de la atencion en un estimulo con exclusion de otros',
      'Ausencia completa de atencion',
      'Cambio constante del foco atencional',
      'Incapacidad de filtrar estimulos irrelevantes'
    ],
    correctAnswer: 0,
    explanation: 'La hiperprosexia es la focalizacion excesiva de la atencion en determinados estimulos, con exclusion de otros aspectos del entorno.',
    category: 'Atencion',
    difficulty: 'medio'
  },
  {
    id: 'ate-3',
    question: 'Que es la hipoprosexia?',
    keywords: ['hipoprosexia', 'disminucion', 'concentracion'],
    options: [
      'Disminucion de la capacidad de atencion y concentracion',
      'Aumento excesivo de la atencion',
      'Perdida total de la capacidad atencional',
      'Cambio rapido e involuntario del foco atencional'
    ],
    correctAnswer: 0,
    explanation: 'La hipoprosexia es la disminucion de la capacidad atencional, donde el sujeto tiene dificultad para concentrarse y mantener la atencion.',
    category: 'Atencion',
    difficulty: 'facil'
  },
  {
    id: 'ate-4',
    question: 'Que es la paraprosexia?',
    keywords: ['paraprosexia', 'direccion', 'anomala'],
    options: [
      'Direccion anomala de la atencion hacia estimulos irrelevantes',
      'Ausencia total de atencion',
      'Aumento patologico de la concentracion',
      'Fluctuacion normal del nivel atencional'
    ],
    correctAnswer: 0,
    explanation: 'La paraprosexia es una alteracion cualitativa de la atencion donde esta se dirige de manera anomala hacia estimulos no relevantes.',
    category: 'Atencion',
    difficulty: 'dificil'
  },
  {
    id: 'ate-5',
    question: 'Que es la distraibilidad?',
    keywords: ['distraibilidad', 'cambio', 'involuntario'],
    options: [
      'Cambio frecuente e involuntario del foco de atencion ante cualquier estimulo',
      'Incapacidad total de prestar atencion',
      'Focalizacion excesiva en un solo tema',
      'Perdida de la atencion por fatiga'
    ],
    correctAnswer: 0,
    explanation: 'La distraibilidad es la tendencia a cambiar frecuente e involuntariamente el foco de atencion ante cualquier estimulo, por minimo que sea.',
    category: 'Atencion',
    difficulty: 'facil'
  },

  // ===== MEMORIA =====
  {
    id: 'mem-1',
    question: 'Que es la amnesia anterograda?',
    keywords: ['amnesia', 'anterograda', 'nuevos'],
    options: [
      'Incapacidad de formar nuevos recuerdos despues del evento causal',
      'Perdida de recuerdos previos al evento causal',
      'Olvido de la propia identidad',
      'Recuerdo falso de eventos que no ocurrieron'
    ],
    correctAnswer: 0,
    explanation: 'La amnesia anterograda es la incapacidad de almacenar nueva informacion o formar nuevos recuerdos despues del evento que causo el dano.',
    category: 'Memoria',
    difficulty: 'medio'
  },
  {
    id: 'mem-2',
    question: 'Que es la amnesia retrograda?',
    keywords: ['amnesia', 'retrograda', 'previos'],
    options: [
      'Perdida de recuerdos previos al evento causal',
      'Incapacidad de formar nuevos recuerdos',
      'Alteracion de la memoria procedimental',
      'Falsos reconocimientos de personas'
    ],
    correctAnswer: 0,
    explanation: 'La amnesia retrograda es la incapacidad de recuperar recuerdos almacenados antes del evento que produjo la alteracion.',
    category: 'Memoria',
    difficulty: 'medio'
  },
  {
    id: 'mem-3',
    question: 'Que es la confabulacion?',
    keywords: ['confabulacion', 'relleno', 'falso'],
    options: [
      'Relleno inconsciente de lagunas de memoria con informacion falsa',
      'Perdida total de la memoria autobiografica',
      'Recuerdo excesivamente detallado de eventos',
      'Incapacidad de olvidar experiencias traumaticas'
    ],
    correctAnswer: 0,
    explanation: 'La confabulacion es el relleno inconsciente de lagunas de memoria con informacion falsa que el paciente cree verdadera.',
    category: 'Memoria',
    difficulty: 'medio'
  },
  {
    id: 'mem-4',
    question: 'Que es el fenomeno de deja vu?',
    keywords: ['deja vu', 'familiaridad', 'nuevo'],
    options: [
      'Sensacion de haber vivido una experiencia nueva anteriormente',
      'Sensacion de que lo familiar es extrano',
      'Incapacidad de reconocer rostros conocidos',
      'Recuerdo involuntario de eventos traumaticos'
    ],
    correctAnswer: 0,
    explanation: 'El deja vu es la sensacion de que una experiencia nueva ya ha sido vivida anteriormente, generando una falsa sensacion de familiaridad.',
    category: 'Memoria',
    difficulty: 'facil'
  },
  {
    id: 'mem-5',
    question: 'Que es el fenomeno de jamais vu?',
    keywords: ['jamais vu', 'extraneza', 'familiar'],
    options: [
      'Sensacion de que algo familiar es completamente nuevo o extrano',
      'Sensacion de haber vivido algo nuevo antes',
      'Perdida de la memoria reciente',
      'Recuerdo excesivamente vivido de un evento'
    ],
    correctAnswer: 0,
    explanation: 'El jamais vu es la sensacion de que algo que deberia ser familiar se percibe como completamente nuevo o extrano.',
    category: 'Memoria',
    difficulty: 'facil'
  },
  {
    id: 'mem-6',
    question: 'Que es la ecmnesia?',
    keywords: ['ecmnesia', 'pasado', 'presente'],
    options: [
      'Vivencia de recuerdos pasados como si fueran experiencias presentes',
      'Perdida total de recuerdos autobiograficos',
      'Creacion consciente de recuerdos falsos',
      'Incapacidad de distinguir suenos de realidad'
    ],
    correctAnswer: 0,
    explanation: 'La ecmnesia es una paramnesia donde los recuerdos del pasado se viven como si fueran experiencias del presente.',
    category: 'Memoria',
    difficulty: 'dificil'
  },
  {
    id: 'mem-7',
    question: 'Que es la hipermnesia?',
    keywords: ['hipermnesia', 'aumento', 'evocacion'],
    options: [
      'Aumento patologico de la capacidad de evocacion de recuerdos',
      'Perdida total de la memoria',
      'Incapacidad de formar nuevos recuerdos',
      'Distorsion de recuerdos existentes'
    ],
    correctAnswer: 0,
    explanation: 'La hipermnesia es un aumento anormal de la capacidad de evocacion, donde el sujeto recuerda con excesivo detalle.',
    category: 'Memoria',
    difficulty: 'medio'
  },

  // ===== PERCEPCION =====
  {
    id: 'per-1',
    question: 'Que es una alucinacion?',
    keywords: ['alucinacion', 'percepcion', 'objeto'],
    options: [
      'Percepcion sensorial sin objeto externo que la produzca',
      'Distorsion de una percepcion real',
      'Interpretacion erronea de un estimulo',
      'Imaginacion voluntaria de un objeto'
    ],
    correctAnswer: 0,
    explanation: 'La alucinacion es una percepcion sensorial que ocurre sin la presencia de un estimulo externo correspondiente.',
    category: 'Percepcion',
    difficulty: 'facil'
  },
  {
    id: 'per-2',
    question: 'Que diferencia a las pseudoalucinaciones de las alucinaciones verdaderas?',
    keywords: ['pseudoalucinacion', 'espacio', 'interno'],
    options: [
      'Se perciben en el espacio subjetivo interno y el paciente reconoce su irrealidad',
      'Son mas intensas que las alucinaciones verdaderas',
      'Solo ocurren durante el sueno',
      'Se asocian exclusivamente a sustancias'
    ],
    correctAnswer: 0,
    explanation: 'Las pseudoalucinaciones se localizan en el espacio interno subjetivo y el paciente puede reconocer que no son reales, a diferencia de las alucinaciones verdaderas.',
    category: 'Percepcion',
    difficulty: 'dificil'
  },
  {
    id: 'per-3',
    question: 'Que es la ilusion?',
    keywords: ['ilusion', 'deformacion', 'estimulo'],
    options: [
      'Percepcion deformada de un estimulo externo real',
      'Percepcion sin estimulo externo',
      'Perdida total de la capacidad perceptiva',
      'Aumento de la intensidad perceptual'
    ],
    correctAnswer: 0,
    explanation: 'La ilusion es una percepcion alterada o deformada de un estimulo externo que realmente existe.',
    category: 'Percepcion',
    difficulty: 'facil'
  },
  {
    id: 'per-4',
    question: 'Que es la despersonalizacion?',
    keywords: ['despersonalizacion', 'extraneza', 'propio'],
    options: [
      'Sensacion de extraneza respecto al propio cuerpo o mente',
      'No reconocer a personas conocidas',
      'Sensacion de que el entorno es irreal',
      'Percepcion de multiples personalidades'
    ],
    correctAnswer: 0,
    explanation: 'La despersonalizacion es la sensacion de extraneza o irrealidad respecto al propio cuerpo, pensamientos o identidad.',
    category: 'Percepcion',
    difficulty: 'medio'
  },
  {
    id: 'per-5',
    question: 'Que es la desrealizacion?',
    keywords: ['desrealizacion', 'entorno', 'irreal'],
    options: [
      'Sensacion de que el entorno es irreal o artificial',
      'Sensacion de que el propio cuerpo es extrano',
      'Percepcion de objetos inexistentes',
      'Distorsion del tamano de los objetos'
    ],
    correctAnswer: 0,
    explanation: 'La desrealizacion es la sensacion de que el mundo externo es irreal, artificial o extrano.',
    category: 'Percepcion',
    difficulty: 'medio'
  },
  {
    id: 'per-6',
    question: 'Que son las alucinaciones hipnagogicas?',
    keywords: ['hipnagogicas', 'dormirse', 'sueno'],
    options: [
      'Alucinaciones que ocurren al quedarse dormido',
      'Alucinaciones que ocurren al despertar',
      'Alucinaciones inducidas por hipnosis',
      'Alucinaciones durante el sueno profundo'
    ],
    correctAnswer: 0,
    explanation: 'Las alucinaciones hipnagogicas son percepciones sin objeto que ocurren en el momento de transicion de la vigilia al sueno.',
    category: 'Percepcion',
    difficulty: 'medio'
  },
  {
    id: 'per-7',
    question: 'Que es la macropsia?',
    keywords: ['macropsia', 'tamano', 'mayor'],
    options: [
      'Percepcion de objetos de mayor tamano del que realmente tienen',
      'Percepcion de objetos mas pequenos',
      'Percepcion de colores alterados',
      'Percepcion de movimiento inexistente'
    ],
    correctAnswer: 0,
    explanation: 'La macropsia es una metamorfopsia donde los objetos se perciben de mayor tamano del que realmente tienen.',
    category: 'Percepcion',
    difficulty: 'medio'
  },
  {
    id: 'per-8',
    question: 'Que es la micropsia?',
    keywords: ['micropsia', 'tamano', 'menor'],
    options: [
      'Percepcion de objetos de menor tamano del que realmente tienen',
      'Percepcion de objetos mas grandes',
      'Incapacidad de percibir objetos pequenos',
      'Vision borrosa de objetos cercanos'
    ],
    correctAnswer: 0,
    explanation: 'La micropsia es una metamorfopsia donde los objetos se perciben de menor tamano del que realmente tienen.',
    category: 'Percepcion',
    difficulty: 'medio'
  },

  // ===== PENSAMIENTO =====
  {
    id: 'pen-1',
    question: 'Que es la bradipsiquia?',
    keywords: ['bradipsiquia', 'lentitud', 'pensamiento'],
    options: [
      'Enlentecimiento del curso del pensamiento',
      'Aceleracion del pensamiento',
      'Bloqueo subito del pensamiento',
      'Pensamiento desorganizado'
    ],
    correctAnswer: 0,
    explanation: 'La bradipsiquia es el enlentecimiento del ritmo del pensamiento, donde las ideas fluyen con lentitud.',
    category: 'Pensamiento',
    difficulty: 'facil'
  },
  {
    id: 'pen-2',
    question: 'Que caracteriza a la fuga de ideas?',
    keywords: ['fuga', 'ideas', 'rapido'],
    options: [
      'Pensamiento acelerado con cambios rapidos de tema siguiendo asociaciones superficiales',
      'Pensamiento extremadamente lento',
      'Incapacidad total de pensar',
      'Repeticion constante de la misma idea'
    ],
    correctAnswer: 0,
    explanation: 'La fuga de ideas es una aceleracion del pensamiento con cambios rapidos de tema, donde las asociaciones son superficiales pero comprensibles.',
    category: 'Pensamiento',
    difficulty: 'medio'
  },
  {
    id: 'pen-3',
    question: 'Que es un neologismo en psicopatologia?',
    keywords: ['neologismo', 'palabra', 'inventada'],
    options: [
      'Palabra inventada por el paciente con significado solo para el',
      'Uso incorrecto de palabras existentes',
      'Incapacidad de encontrar palabras',
      'Repeticion involuntaria de palabras'
    ],
    correctAnswer: 0,
    explanation: 'El neologismo es una palabra nueva creada por el paciente que tiene un significado particular solo para el.',
    category: 'Pensamiento',
    difficulty: 'medio'
  },
  {
    id: 'pen-4',
    question: 'Que es la perseveracion del pensamiento?',
    keywords: ['perseveracion', 'repeticion', 'idea'],
    options: [
      'Repeticion persistente de una misma idea o tema',
      'Cambio constante de un tema a otro',
      'Incapacidad de expresar pensamientos',
      'Pensamiento acelerado sin control'
    ],
    correctAnswer: 0,
    explanation: 'La perseveracion es la repeticion persistente e inapropiada de una misma idea, palabra o tema.',
    category: 'Pensamiento',
    difficulty: 'facil'
  },
  {
    id: 'pen-5',
    question: 'Que caracteriza a las ideas obsesivas?',
    keywords: ['obsesivas', 'intrusivas', 'repetitivas'],
    options: [
      'Pensamientos repetitivos, intrusivos y no deseados que generan ansiedad',
      'Ideas delirantes de persecucion',
      'Pensamientos acelerados incontrolables',
      'Ausencia total de pensamientos'
    ],
    correctAnswer: 0,
    explanation: 'Las ideas obsesivas son pensamientos, imagenes o impulsos recurrentes, intrusivos y no deseados que causan marcada ansiedad.',
    category: 'Pensamiento',
    difficulty: 'medio'
  },
  {
    id: 'pen-6',
    question: 'Que es el pensamiento disgregado?',
    keywords: ['disgregado', 'incoherente', 'asociaciones'],
    options: [
      'Perdida de la idea directriz con asociaciones laxas e incoherencia',
      'Pensamiento extremadamente lento pero coherente',
      'Repeticion excesiva de la misma idea',
      'Incapacidad de iniciar el pensamiento'
    ],
    correctAnswer: 0,
    explanation: 'El pensamiento disgregado se caracteriza por perdida de la idea directriz, asociaciones laxas y fragmentacion del hilo conductor.',
    category: 'Pensamiento',
    difficulty: 'dificil'
  },
  {
    id: 'pen-7',
    question: 'Que es un delirio?',
    keywords: ['delirio', 'creencia', 'falsa'],
    options: [
      'Creencia falsa, fija e incorregible a pesar de evidencia en contra',
      'Percepcion sin estimulo externo',
      'Alteracion del nivel de conciencia',
      'Pensamiento acelerado con euforia'
    ],
    correctAnswer: 0,
    explanation: 'El delirio es una creencia falsa, basada en una inferencia incorrecta, sostenida firmemente a pesar de la evidencia en contra.',
    category: 'Pensamiento',
    difficulty: 'facil'
  },
  {
    id: 'pen-8',
    question: 'Que caracteriza al bloqueo del pensamiento?',
    keywords: ['bloqueo', 'interrupcion', 'subita'],
    options: [
      'Interrupcion subita del curso del pensamiento',
      'Pensamiento extremadamente lento',
      'Cambio rapido entre ideas',
      'Repeticion de la misma idea'
    ],
    correctAnswer: 0,
    explanation: 'El bloqueo del pensamiento es una interrupcion subita e involuntaria del flujo del pensamiento.',
    category: 'Pensamiento',
    difficulty: 'medio'
  },

  // ===== AFECTIVIDAD =====
  {
    id: 'afe-1',
    question: 'Que es la anhedonia?',
    keywords: ['anhedonia', 'placer', 'incapacidad'],
    options: [
      'Incapacidad de experimentar placer en actividades antes gratificantes',
      'Estado de euforia constante',
      'Cambios rapidos del estado de animo',
      'Ausencia total de emociones'
    ],
    correctAnswer: 0,
    explanation: 'La anhedonia es la incapacidad de experimentar placer en actividades que normalmente resultaban gratificantes.',
    category: 'Afectividad',
    difficulty: 'facil'
  },
  {
    id: 'afe-2',
    question: 'Que caracteriza a la disforia?',
    keywords: ['disforia', 'malestar', 'irritabilidad'],
    options: [
      'Estado de animo displacentero con irritabilidad, malestar e inquietud',
      'Estado de bienestar y alegria constante',
      'Ausencia total de reactividad emocional',
      'Cambio rapido entre alegria y tristeza'
    ],
    correctAnswer: 0,
    explanation: 'La disforia es un estado de animo displacentero caracterizado por malestar, irritabilidad e inquietud.',
    category: 'Afectividad',
    difficulty: 'medio'
  },
  {
    id: 'afe-3',
    question: 'Que es el aplanamiento afectivo?',
    keywords: ['aplanamiento', 'expresion', 'reducida'],
    options: [
      'Reduccion marcada de la expresion emocional y reactividad afectiva',
      'Expresion emocional exagerada',
      'Cambios rapidos del afecto',
      'Incapacidad de sentir tristeza'
    ],
    correctAnswer: 0,
    explanation: 'El aplanamiento afectivo es una marcada reduccion en la expresion e intensidad de las emociones.',
    category: 'Afectividad',
    difficulty: 'medio'
  },
  {
    id: 'afe-4',
    question: 'Que es la labilidad afectiva?',
    keywords: ['labilidad', 'cambios', 'rapidos'],
    options: [
      'Cambios rapidos, frecuentes e inestables del estado de animo',
      'Ausencia total de cambios emocionales',
      'Incapacidad de experimentar alegria',
      'Estado de animo constantemente elevado'
    ],
    correctAnswer: 0,
    explanation: 'La labilidad afectiva son cambios rapidos, bruscos y frecuentes del estado emocional, sin proporcion con los estimulos.',
    category: 'Afectividad',
    difficulty: 'facil'
  },
  {
    id: 'afe-5',
    question: 'Que es la alexitimia?',
    keywords: ['alexitimia', 'identificar', 'emociones'],
    options: [
      'Dificultad para identificar y expresar las propias emociones',
      'Expresion emocional exagerada',
      'Cambios rapidos del estado de animo',
      'Incapacidad de sentir emociones'
    ],
    correctAnswer: 0,
    explanation: 'La alexitimia es la dificultad para identificar, describir y expresar los propios sentimientos y emociones.',
    category: 'Afectividad',
    difficulty: 'medio'
  },
  {
    id: 'afe-6',
    question: 'Que caracteriza a la eutimia?',
    keywords: ['eutimia', 'normal', 'equilibrio'],
    options: [
      'Estado de animo normal, equilibrado y estable',
      'Estado de tristeza profunda',
      'Euforia patologica',
      'Ausencia total de afecto'
    ],
    correctAnswer: 0,
    explanation: 'La eutimia es el estado de animo normal, equilibrado y estable, sin alteraciones patologicas.',
    category: 'Afectividad',
    difficulty: 'facil'
  },
  {
    id: 'afe-7',
    question: 'Que es la afectividad incongruente?',
    keywords: ['incongruente', 'discordancia', 'contenido'],
    options: [
      'Discordancia entre la emocion expresada y el contenido del pensamiento',
      'Expresion emocional exagerada pero apropiada',
      'Ausencia de expresion emocional',
      'Cambios rapidos del estado de animo'
    ],
    correctAnswer: 0,
    explanation: 'La afectividad incongruente es la falta de concordancia entre la expresion emocional y el contenido del pensamiento o la situacion.',
    category: 'Afectividad',
    difficulty: 'medio'
  },

  // ===== SINDROMES =====
  {
    id: 'sin-1',
    question: 'Cuales son los sintomas positivos del sindrome esquizofrenico?',
    keywords: ['esquizofrenia', 'positivos', 'alucinaciones'],
    options: [
      'Alucinaciones, delirios, pensamiento desorganizado y conducta catatonica',
      'Aplanamiento afectivo, alogia y abulia',
      'Tristeza, anhedonia e ideas de culpa',
      'Euforia, grandiosidad y disminucion del sueno'
    ],
    correctAnswer: 0,
    explanation: 'Los sintomas positivos de la esquizofrenia incluyen alucinaciones, delirios, pensamiento y conducta desorganizados.',
    category: 'Sindromes',
    difficulty: 'medio'
  },
  {
    id: 'sin-2',
    question: 'Cuales son los sintomas negativos del sindrome esquizofrenico?',
    keywords: ['esquizofrenia', 'negativos', 'abulia'],
    options: [
      'Aplanamiento afectivo, alogia, abulia, anhedonia y deficit atencional',
      'Alucinaciones y delirios de persecucion',
      'Euforia, irritabilidad y grandiosidad',
      'Tristeza, llanto y desesperanza'
    ],
    correctAnswer: 0,
    explanation: 'Los sintomas negativos incluyen aplanamiento afectivo, pobreza del lenguaje (alogia), falta de voluntad (abulia) y anhedonia.',
    category: 'Sindromes',
    difficulty: 'medio'
  },
  {
    id: 'sin-3',
    question: 'Que caracteriza al sindrome depresivo?',
    keywords: ['depresivo', 'tristeza', 'anhedonia'],
    options: [
      'Tristeza patologica, anhedonia, alteraciones del sueno y apetito, e ideacion de muerte',
      'Euforia, grandiosidad y aumento de energia',
      'Alucinaciones auditivas y delirios paranoides',
      'Ansiedad extrema con ataques de panico'
    ],
    correctAnswer: 0,
    explanation: 'El sindrome depresivo se caracteriza por tristeza patologica, perdida de interes, alteraciones neurovegetativas e ideacion suicida.',
    category: 'Sindromes',
    difficulty: 'facil'
  },
  {
    id: 'sin-4',
    question: 'Que caracteriza al sindrome maniaco?',
    keywords: ['maniaco', 'euforia', 'grandiosidad'],
    options: [
      'Euforia o irritabilidad, grandiosidad, disminucion del sueno y aumento de actividad',
      'Tristeza profunda y perdida de interes',
      'Alucinaciones y delirios de persecucion',
      'Ansiedad generalizada con preocupacion excesiva'
    ],
    correctAnswer: 0,
    explanation: 'El sindrome maniaco se caracteriza por animo elevado o irritable, grandiosidad, menor necesidad de sueno y aumento de la actividad.',
    category: 'Sindromes',
    difficulty: 'medio'
  },
  {
    id: 'sin-5',
    question: 'Que es el sindrome catatonico?',
    keywords: ['catatonico', 'motora', 'rigidez'],
    options: [
      'Alteracion psicomotora con inmovilidad, rigidez o agitacion extrema',
      'Alteracion exclusiva del pensamiento',
      'Sindrome caracterizado por alucinaciones visuales',
      'Estado de animo depresivo con ansiedad'
    ],
    correctAnswer: 0,
    explanation: 'El sindrome catatonico es una alteracion psicomotora que puede manifestarse como inmovilidad, rigidez, negativismo o agitacion.',
    category: 'Sindromes',
    difficulty: 'medio'
  },
  {
    id: 'sin-6',
    question: 'Que caracteriza al sindrome paranoide?',
    keywords: ['paranoide', 'persecucion', 'desconfianza'],
    options: [
      'Delirios de persecucion o perjuicio con desconfianza marcada',
      'Euforia con ideas de grandeza',
      'Tristeza con ideas de culpa',
      'Alucinaciones sin contenido persecutorio'
    ],
    correctAnswer: 0,
    explanation: 'El sindrome paranoide se caracteriza por ideas delirantes de contenido persecutorio o de perjuicio, con marcada desconfianza.',
    category: 'Sindromes',
    difficulty: 'facil'
  },
  {
    id: 'sin-7',
    question: 'Que es el sindrome de Korsakoff?',
    keywords: ['Korsakoff', 'amnesia', 'confabulacion'],
    options: [
      'Amnesia anterograda y retrograda con confabulacion, tipico de alcoholismo cronico',
      'Sindrome caracterizado por alucinaciones visuales',
      'Estado de agitacion psicomotora extrema',
      'Alteracion del pensamiento con delirios'
    ],
    correctAnswer: 0,
    explanation: 'El sindrome de Korsakoff se caracteriza por amnesia anterograda y retrograda con confabulacion, asociado a deficiencia de tiamina.',
    category: 'Sindromes',
    difficulty: 'dificil'
  },

  // ===== LENGUAJE =====
  {
    id: 'len-1',
    question: 'Que es la ecolalia?',
    keywords: ['ecolalia', 'repeticion', 'palabras'],
    options: [
      'Repeticion automatica de palabras o frases dichas por otros',
      'Incapacidad de producir lenguaje',
      'Creacion de palabras nuevas',
      'Habla extremadamente rapida'
    ],
    correctAnswer: 0,
    explanation: 'La ecolalia es la repeticion automatica e involuntaria de palabras o frases dichas por otra persona.',
    category: 'Lenguaje',
    difficulty: 'facil'
  },
  {
    id: 'len-2',
    question: 'Que es la verbigeracion?',
    keywords: ['verbigeracion', 'repeticion', 'estereotipada'],
    options: [
      'Repeticion estereotipada y sin sentido de palabras o frases',
      'Incapacidad de encontrar palabras',
      'Habla con significado pero desorganizada',
      'Ausencia total de lenguaje'
    ],
    correctAnswer: 0,
    explanation: 'La verbigeracion es la repeticion monotona, estereotipada y sin sentido de palabras, silabas o frases.',
    category: 'Lenguaje',
    difficulty: 'medio'
  },
  {
    id: 'len-3',
    question: 'Que es el mutismo?',
    keywords: ['mutismo', 'ausencia', 'habla'],
    options: [
      'Ausencia de lenguaje hablado sin causa organica que lo justifique',
      'Habla excesivamente rapida',
      'Repeticion de palabras de otros',
      'Dificultad para articular palabras'
    ],
    correctAnswer: 0,
    explanation: 'El mutismo es la ausencia del habla sin que exista una causa organica que impida la produccion del lenguaje.',
    category: 'Lenguaje',
    difficulty: 'facil'
  },
  {
    id: 'len-4',
    question: 'Que es la logorrea?',
    keywords: ['logorrea', 'exceso', 'habla'],
    options: [
      'Produccion excesiva e incontrolable de lenguaje',
      'Ausencia total del habla',
      'Repeticion de las mismas palabras',
      'Dificultad para encontrar palabras'
    ],
    correctAnswer: 0,
    explanation: 'La logorrea es la produccion excesiva e incontrolable de lenguaje, con habla rapida y dificil de interrumpir.',
    category: 'Lenguaje',
    difficulty: 'facil'
  },
  {
    id: 'len-5',
    question: 'Que es la coprolalia?',
    keywords: ['coprolalia', 'obscenas', 'involuntaria'],
    options: [
      'Emision involuntaria de palabras obscenas o socialmente inapropiadas',
      'Repeticion de palabras de otros',
      'Incapacidad de producir lenguaje',
      'Habla con tono monotono'
    ],
    correctAnswer: 0,
    explanation: 'La coprolalia es la emision involuntaria de palabras obscenas, vulgares o socialmente inapropiadas.',
    category: 'Lenguaje',
    difficulty: 'medio'
  },

  // ===== CONDUCTA =====
  {
    id: 'con-6',
    question: 'Que son los manierismos?',
    keywords: ['manierismos', 'movimientos', 'exagerados'],
    options: [
      'Movimientos voluntarios exagerados y estilizados que dan apariencia artificiosa',
      'Movimientos repetitivos sin proposito',
      'Ausencia total de movimiento',
      'Imitacion de movimientos de otros'
    ],
    correctAnswer: 0,
    explanation: 'Los manierismos son movimientos voluntarios que se realizan de forma exagerada, rebuscada o estilizada.',
    category: 'Conducta',
    difficulty: 'medio'
  },
  {
    id: 'con-7',
    question: 'Que son las estereotipias motoras?',
    keywords: ['estereotipias', 'repetitivos', 'sin proposito'],
    options: [
      'Movimientos repetitivos, ritmicos y sin proposito aparente',
      'Movimientos exagerados con finalidad expresiva',
      'Imitacion de movimientos ajenos',
      'Paralizacion de movimientos voluntarios'
    ],
    correctAnswer: 0,
    explanation: 'Las estereotipias son movimientos repetitivos, ritmicos, no propositivos y aparentemente sin finalidad.',
    category: 'Conducta',
    difficulty: 'medio'
  },
  {
    id: 'con-8',
    question: 'Que es la ecopraxia?',
    keywords: ['ecopraxia', 'imitacion', 'movimientos'],
    options: [
      'Imitacion automatica de los movimientos realizados por otras personas',
      'Repeticion de palabras de otros',
      'Movimientos estereotipados propios',
      'Resistencia a realizar movimientos'
    ],
    correctAnswer: 0,
    explanation: 'La ecopraxia es la imitacion automatica e involuntaria de los movimientos o gestos de otra persona.',
    category: 'Conducta',
    difficulty: 'facil'
  },
  {
    id: 'con-9',
    question: 'Que es el negativismo?',
    keywords: ['negativismo', 'resistencia', 'instrucciones'],
    options: [
      'Resistencia activa o pasiva a seguir instrucciones o realizar movimientos',
      'Imitacion de movimientos de otros',
      'Repeticion de los propios movimientos',
      'Movimientos excesivamente rapidos'
    ],
    correctAnswer: 0,
    explanation: 'El negativismo es la resistencia aparentemente sin motivo a las instrucciones o a ser movilizado.',
    category: 'Conducta',
    difficulty: 'medio'
  },
  {
    id: 'con-10',
    question: 'Que es la flexibilidad cerea?',
    keywords: ['flexibilidad', 'cerea', 'postura'],
    options: [
      'Mantenimiento de posturas impuestas externamente como si fuera de cera',
      'Incapacidad de mantener cualquier postura',
      'Movimientos rapidos y descontrolados',
      'Resistencia activa al movimiento'
    ],
    correctAnswer: 0,
    explanation: 'La flexibilidad cerea es cuando el paciente mantiene las posturas que le son impuestas, como si fuera una figura de cera.',
    category: 'Conducta',
    difficulty: 'dificil'
  },
  {
    id: 'con-11',
    question: 'Que es la agitacion psicomotora?',
    keywords: ['agitacion', 'psicomotora', 'aumento'],
    options: [
      'Aumento excesivo de la actividad motora con inquietud y movimientos sin proposito',
      'Disminucion marcada del movimiento',
      'Movimientos repetitivos ritmicos',
      'Imitacion de movimientos ajenos'
    ],
    correctAnswer: 0,
    explanation: 'La agitacion psicomotora es un aumento excesivo de la actividad motora, generalmente improductiva y asociada a tension interna.',
    category: 'Conducta',
    difficulty: 'facil'
  },
  {
    id: 'con-12',
    question: 'Que es el retardo psicomotor?',
    keywords: ['retardo', 'psicomotor', 'lentitud'],
    options: [
      'Enlentecimiento generalizado de los movimientos, el habla y las reacciones',
      'Aumento de la velocidad de movimientos',
      'Movimientos repetitivos involuntarios',
      'Ausencia total de movimiento'
    ],
    correctAnswer: 0,
    explanation: 'El retardo psicomotor es un enlentecimiento visible de los movimientos, del habla y de las reacciones del individuo.',
    category: 'Conducta',
    difficulty: 'facil'
  }
];

// Export for use in app.js
window.CATEGORIES = CATEGORIES;
window.BASE_QUESTIONS = BASE_QUESTIONS;
