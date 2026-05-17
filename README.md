# PsicoQuiz - Aprende Psicopatologia Jugando

## Descripcion

**PsicoQuiz** es una aplicacion web educativa interactiva disenada para estudiantes de Psicopatologia. Inspirada en plataformas como Kahoot, Quizlet y Duolingo, permite aprender y repasar conceptos de semiologia psiquiatrica y sindromes psicopatologicos de manera dinamica y entretenida.

La aplicacion incluye una base de datos con **50+ preguntas** sobre:
- Alteraciones de la conciencia
- Trastornos de la atencion
- Alteraciones de la memoria
- Trastornos de la percepcion
- Alteraciones del pensamiento
- Trastornos de la afectividad
- Sindromes psiquiatricos
- Alteraciones del lenguaje
- Trastornos de la conducta

## Caracteristicas

### Modos de Juego

| Modo | Descripcion |
|------|-------------|
| **Adivinar** | Preguntas de opcion multiple con palabras clave como pistas. Feedback inmediato con explicaciones detalladas. |
| **Flashcards** | Tarjetas volteables para memorizar conceptos. Opcion de marcar tarjetas como "aprendidas". |
| **Examen** | 20 preguntas aleatorias con temporizador de 10 minutos. Ideal para simular evaluaciones. |
| **Contrarreloj** | 60 segundos para responder la mayor cantidad de preguntas. Sistema de combos (hasta x5) que multiplican los puntos. |
| **Ranking** | Tabla de mejores puntajes filtrable por modo de juego. |
| **Admin** | Panel para crear, editar y eliminar preguntas. Incluye generador automatico desde texto. |

### Sistema de Puntuacion

- **Respuesta correcta:** +100 puntos (base)
- **Racha:** Sistema de racha que premia respuestas consecutivas correctas
- **Combo (Contrarreloj):** Multiplicador de puntos que aumenta con cada respuesta correcta consecutiva

### Generador Automatico de Preguntas

El modo Admin incluye un generador que convierte texto en formato simple a preguntas automaticamente:

```
Alucinacion - Percepcion sin objeto real
Delirio - Creencia falsa e incorregible
Anhedonia - Incapacidad de experimentar placer
```

Cada linea se convierte en una pregunta tipo: *"Que termino se define como: [definicion]?"* con opciones de respuesta generadas automaticamente.

## Instalacion y Uso

### Opcion 1: Uso Local (Sin servidor)

1. Descarga todos los archivos de la carpeta `standalone/`
2. Abre `index.html` en cualquier navegador moderno
3. ¡Listo! No requiere instalacion ni servidor

### Opcion 2: Servidor Local

Si prefieres usar un servidor local:

```bash
# Con Python 3
cd standalone
python -m http.server 8000

# Con Node.js (http-server)
npx http-server standalone
```

Luego abre `http://localhost:8000` en tu navegador.

## Estructura de Archivos

```
standalone/
├── index.html      # Estructura HTML de la aplicacion
├── styles.css      # Estilos CSS (tema oscuro moderno)
├── questions.js    # Base de datos de preguntas
├── app.js          # Logica principal de la aplicacion
└── README.md       # Este archivo
```

## Tecnologias Utilizadas

- **HTML5** - Estructura semantica
- **CSS3** - Estilos con variables CSS, flexbox, grid y animaciones
- **JavaScript (ES6+)** - Logica de la aplicacion sin dependencias externas
- **LocalStorage** - Persistencia de datos (puntajes, preguntas personalizadas)
- **Google Fonts** - Tipografia Inter

## Caracteristicas Tecnicas

- **100% Frontend** - No requiere backend ni base de datos
- **Responsive** - Adaptable a moviles y escritorio
- **Offline** - Funciona sin conexion a internet
- **Sin dependencias** - No requiere librerias externas
- **Tema oscuro** - Disenado para reducir fatiga visual

## Atajos de Teclado

| Tecla | Accion |
|-------|--------|
| `1-4` o `A-D` | Seleccionar opcion en quiz |
| `Enter` | Siguiente pregunta / Voltear tarjeta |
| `Espacio` | Voltear flashcard |
| `←` `→` | Navegar entre flashcards |
| `Escape` | Volver al menu |

## Agregar Nuevas Preguntas

### Metodo 1: Desde la Interfaz (Admin)

1. Ve al modo **Admin**
2. Selecciona la pestana **Crear**
3. Completa el formulario con la pregunta, opciones y explicacion
4. Haz clic en **Crear Pregunta**

### Metodo 2: Generador Automatico

1. Ve al modo **Admin** > **Generador**
2. Pega texto en formato `Concepto - Definicion`
3. Selecciona categoria y dificultad
4. Haz clic en **Procesar Texto**
5. Revisa la vista previa y haz clic en **Generar Preguntas**

### Metodo 3: Editar questions.js

Agrega nuevas preguntas al array `BASE_QUESTIONS`:

```javascript
{
  id: 'nueva-1',
  question: 'Tu pregunta aqui?',
  keywords: ['palabra1', 'palabra2'],
  options: [
    'Opcion correcta',
    'Opcion incorrecta 1',
    'Opcion incorrecta 2',
    'Opcion incorrecta 3'
  ],
  correctAnswer: 0, // Indice de la opcion correcta (0-3)
  explanation: 'Explicacion detallada de la respuesta.',
  category: 'Categoria',
  difficulty: 'facil' // facil, medio, dificil
}
```

## Contenido Academico

Las preguntas estan basadas en material de la catedra de **Psicopatologia I (2026)**, incluyendo:

- Semiologia de los procesos y funciones psicologicas
- Sindromes psiquiatricos principales
- Terminologia clinica estandarizada

## Licencia

Este proyecto es de uso educativo. Creado para estudiantes de Psicologia y Psiquiatria.


**¡Buena suerte en tus estudios!** 🧠
