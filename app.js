// ===== PsicoQuiz App - Main JavaScript =====

// ===== State Management =====
const state = {
  currentScreen: 'main-menu',
  currentMode: null,
  username: localStorage.getItem('psicoquiz_username') || '',
  maxStreak: parseInt(localStorage.getItem('psicoquiz_maxStreak')) || 0,
  rankings: JSON.parse(localStorage.getItem('psicoquiz_rankings')) || [],
  customQuestions: JSON.parse(localStorage.getItem('psicoquiz_customQuestions')) || [],
  
  // Quiz state
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  streak: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  bestStreak: 0,
  answered: false,
  timerInterval: null,
  timeRemaining: 0,
  combo: 1,
  
  // Flashcards state
  flashcards: [],
  currentFlashcardIndex: 0,
  learnedCards: new Set(),
  isFlipped: false,
  
  // Admin state
  currentAdminTab: 'list',
  generatorItems: [],
  rankingFilter: 'all'
};

// ===== Utility Functions =====
function getAllQuestions() {
  return [...BASE_QUESTIONS, ...state.customQuestions];
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function saveState() {
  localStorage.setItem('psicoquiz_username', state.username);
  localStorage.setItem('psicoquiz_maxStreak', state.maxStreak.toString());
  localStorage.setItem('psicoquiz_rankings', JSON.stringify(state.rankings));
  localStorage.setItem('psicoquiz_customQuestions', JSON.stringify(state.customQuestions));
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function generateId() {
  return 'custom-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

// ===== Screen Navigation =====
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
  state.currentScreen = screenId;
}

function goToMenu() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  showScreen('main-menu');
  state.currentMode = null;
  updateMenuStats();
}

function startMode(mode) {
  state.currentMode = mode;
  
  switch (mode) {
    case 'adivinar':
    case 'examen':
    case 'contrarreloj':
      initQuiz(mode);
      break;
    case 'flashcards':
      initFlashcards();
      break;
    case 'ranking':
      initRanking();
      break;
    case 'admin':
      initAdmin();
      break;
  }
}

// ===== Menu Functions =====
function updateMenuStats() {
  document.getElementById('max-streak').textContent = state.maxStreak;
  document.getElementById('questions-count').textContent = `${getAllQuestions().length} preguntas disponibles`;
  document.getElementById('username-input').value = state.username;
}

// ===== Quiz Functions =====
function initQuiz(mode) {
  const allQuestions = getAllQuestions();
  let numQuestions;
  
  switch (mode) {
    case 'examen':
      numQuestions = Math.min(20, allQuestions.length);
      state.timeRemaining = 600; // 10 minutes
      break;
    case 'contrarreloj':
      numQuestions = allQuestions.length;
      state.timeRemaining = 60; // 60 seconds
      state.combo = 1;
      break;
    default:
      numQuestions = Math.min(10, allQuestions.length);
  }
  
  state.questions = shuffleArray(allQuestions).slice(0, numQuestions);
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.correctAnswers = 0;
  state.incorrectAnswers = 0;
  state.bestStreak = 0;
  state.answered = false;
  
  showScreen('quiz-screen');
  updateQuizUI(mode);
  displayQuestion();
  
  // Setup timer for examen and contrarreloj
  if (mode === 'examen' || mode === 'contrarreloj') {
    document.getElementById('timer-container').style.display = 'flex';
    document.getElementById('quiz-timer').textContent = formatTime(state.timeRemaining);
    
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      document.getElementById('quiz-timer').textContent = formatTime(state.timeRemaining);
      
      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        endQuiz();
      }
    }, 1000);
  } else {
    document.getElementById('timer-container').style.display = 'none';
  }
  
  // Setup combo for contrarreloj
  if (mode === 'contrarreloj') {
    document.getElementById('combo-container').style.display = 'flex';
    document.getElementById('quiz-combo').textContent = 'x1';
  } else {
    document.getElementById('combo-container').style.display = 'none';
  }
}

function updateQuizUI(mode) {
  document.getElementById('quiz-score').textContent = state.score;
  document.getElementById('quiz-streak').textContent = state.streak;
  
  const progress = ((state.currentQuestionIndex) / state.questions.length) * 100;
  document.getElementById('quiz-progress').style.width = `${progress}%`;
}

function displayQuestion() {
  const question = state.questions[state.currentQuestionIndex];
  if (!question) return;
  
  state.answered = false;
  document.getElementById('explanation-card').style.display = 'none';
  
  document.getElementById('question-category').textContent = question.category;
  document.getElementById('question-number').textContent = 
    `${state.currentQuestionIndex + 1}/${state.questions.length}`;
  document.getElementById('question-text').textContent = question.question;
  
  // Keywords
  const keywordsContainer = document.getElementById('question-keywords');
  keywordsContainer.innerHTML = '';
  if (question.keywords && state.currentMode === 'adivinar') {
    question.keywords.forEach(keyword => {
      const span = document.createElement('span');
      span.className = 'keyword';
      span.textContent = keyword;
      keywordsContainer.appendChild(span);
    });
  }
  
  // Options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  const letters = ['A', 'B', 'C', 'D'];
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.innerHTML = `
      <span class="option-letter">${letters[index]}</span>
      <span class="option-text">${option}</span>
    `;
    button.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(button);
  });
  
  // Update progress
  const progress = ((state.currentQuestionIndex) / state.questions.length) * 100;
  document.getElementById('quiz-progress').style.width = `${progress}%`;
}

function selectAnswer(index) {
  if (state.answered) return;
  state.answered = true;
  
  const question = state.questions[state.currentQuestionIndex];
  const buttons = document.querySelectorAll('.option-btn');
  const isCorrect = index === question.correctAnswer;
  
  // Disable all buttons
  buttons.forEach(btn => btn.disabled = true);
  
  // Show correct/incorrect
  buttons[question.correctAnswer].classList.add('correct');
  if (!isCorrect) {
    buttons[index].classList.add('incorrect');
  }
  
  // Update score and streak
  if (isCorrect) {
    state.correctAnswers++;
    state.streak++;
    
    if (state.currentMode === 'contrarreloj') {
      state.combo = Math.min(state.combo + 0.5, 5);
      state.score += Math.floor(100 * state.combo);
      document.getElementById('quiz-combo').textContent = `x${state.combo.toFixed(1)}`;
      document.getElementById('combo-container').classList.add('pulse');
      setTimeout(() => document.getElementById('combo-container').classList.remove('pulse'), 500);
    } else {
      state.score += 100;
    }
    
    if (state.streak > state.bestStreak) {
      state.bestStreak = state.streak;
    }
    if (state.streak > state.maxStreak) {
      state.maxStreak = state.streak;
      saveState();
    }
  } else {
    state.incorrectAnswers++;
    state.streak = 0;
    if (state.currentMode === 'contrarreloj') {
      state.combo = 1;
      document.getElementById('quiz-combo').textContent = 'x1';
    }
    buttons[index].classList.add('shake');
  }
  
  // Update UI
  document.getElementById('quiz-score').textContent = state.score;
  document.getElementById('quiz-streak').textContent = state.streak;
  
  // Show explanation (not in contrarreloj mode)
  if (state.currentMode !== 'contrarreloj') {
    document.getElementById('explanation-text').textContent = question.explanation;
    document.getElementById('explanation-card').style.display = 'block';
    
    if (state.currentQuestionIndex >= state.questions.length - 1) {
      document.getElementById('next-btn').textContent = 'Ver Resultados';
    } else {
      document.getElementById('next-btn').textContent = 'Siguiente';
    }
  } else {
    // Auto advance in contrarreloj
    setTimeout(() => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
        displayQuestion();
      } else {
        endQuiz();
      }
    }, 500);
  }
}

function nextQuestion() {
  if (state.currentQuestionIndex >= state.questions.length - 1) {
    endQuiz();
  } else {
    state.currentQuestionIndex++;
    displayQuestion();
  }
}

function endQuiz() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  
  // Save to rankings
  if (state.username && state.score > 0) {
    state.rankings.push({
      username: state.username,
      score: state.score,
      mode: state.currentMode,
      date: new Date().toISOString()
    });
    state.rankings.sort((a, b) => b.score - a.score);
    state.rankings = state.rankings.slice(0, 50);
    saveState();
  }
  
  // Show results
  document.getElementById('results-score').textContent = state.score;
  document.getElementById('results-correct').textContent = state.correctAnswers;
  document.getElementById('results-incorrect').textContent = state.incorrectAnswers;
  document.getElementById('results-streak').textContent = state.bestStreak;
  
  document.getElementById('results-modal').classList.add('active');
}

function restartQuiz() {
  document.getElementById('results-modal').classList.remove('active');
  initQuiz(state.currentMode);
}

// ===== Flashcards Functions =====
function initFlashcards() {
  const allQuestions = getAllQuestions();
  state.flashcards = shuffleArray(allQuestions).map(q => ({
    front: q.options[q.correctAnswer],
    back: q.explanation || q.question,
    id: q.id
  }));
  state.currentFlashcardIndex = 0;
  state.learnedCards = new Set();
  state.isFlipped = false;
  
  showScreen('flashcards-screen');
  displayFlashcard();
}

function displayFlashcard() {
  const card = state.flashcards[state.currentFlashcardIndex];
  if (!card) return;
  
  document.getElementById('flashcard-front-text').textContent = card.front;
  document.getElementById('flashcard-back-text').textContent = card.back;
  document.getElementById('flashcard-progress').textContent = 
    `${state.currentFlashcardIndex + 1}/${state.flashcards.length}`;
  document.getElementById('flashcard-learned').textContent = state.learnedCards.size;
  
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.remove('flipped');
  state.isFlipped = false;
  
  // Update learned button
  const learnedBtn = document.getElementById('learned-btn');
  if (state.learnedCards.has(card.id)) {
    learnedBtn.classList.add('active');
  } else {
    learnedBtn.classList.remove('active');
  }
}

function flipCard() {
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.toggle('flipped');
  state.isFlipped = !state.isFlipped;
}

function prevCard() {
  if (state.currentFlashcardIndex > 0) {
    state.currentFlashcardIndex--;
    displayFlashcard();
  }
}

function nextCard() {
  if (state.currentFlashcardIndex < state.flashcards.length - 1) {
    state.currentFlashcardIndex++;
    displayFlashcard();
  }
}

function toggleLearned() {
  const card = state.flashcards[state.currentFlashcardIndex];
  if (state.learnedCards.has(card.id)) {
    state.learnedCards.delete(card.id);
  } else {
    state.learnedCards.add(card.id);
  }
  displayFlashcard();
}

// ===== Ranking Functions =====
function initRanking() {
  showScreen('ranking-screen');
  state.rankingFilter = 'all';
  updateRankingTabs();
  displayRanking();
}

function filterRanking(filter) {
  state.rankingFilter = filter;
  updateRankingTabs();
  displayRanking();
}

function updateRankingTabs() {
  document.querySelectorAll('#ranking-screen .tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(state.rankingFilter) || 
        (state.rankingFilter === 'all' && btn.textContent === 'Todos')) {
      btn.classList.add('active');
    }
  });
}

function displayRanking() {
  const container = document.getElementById('ranking-list');
  let rankings = state.rankings;
  
  if (state.rankingFilter !== 'all') {
    rankings = rankings.filter(r => r.mode === state.rankingFilter);
  }
  
  if (rankings.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
        <p>No hay puntajes registrados</p>
        <span>Juega para aparecer en el ranking</span>
      </div>
    `;
    return;
  }
  
  container.innerHTML = rankings.map((entry, index) => `
    <div class="ranking-item">
      <div class="ranking-position">${index + 1}</div>
      <div class="ranking-info">
        <div class="ranking-name">${entry.username}</div>
        <div class="ranking-meta">${entry.mode} - ${new Date(entry.date).toLocaleDateString()}</div>
      </div>
      <div class="ranking-score">${entry.score}</div>
    </div>
  `).join('');
}

// ===== Admin Functions =====
function initAdmin() {
  showScreen('admin-screen');
  state.currentAdminTab = 'list';
  updateAdminTabs();
  populateCategorySelects();
  displayAdminQuestions();
}

function switchAdminTab(tab) {
  state.currentAdminTab = tab;
  updateAdminTabs();
}

function updateAdminTabs() {
  document.querySelectorAll('#admin-screen .tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.admin-tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  const tabMap = {
    'list': 'admin-list',
    'create': 'admin-create',
    'generator': 'admin-generator'
  };
  
  document.querySelector(`#admin-screen .tab-btn:nth-child(${Object.keys(tabMap).indexOf(state.currentAdminTab) + 1})`).classList.add('active');
  document.getElementById(tabMap[state.currentAdminTab]).classList.add('active');
}

function populateCategorySelects() {
  const selects = ['new-category', 'generator-category', 'admin-category-filter'];
  
  selects.forEach(selectId => {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    if (selectId === 'admin-category-filter') {
      select.innerHTML = '<option value="all">Todas las categorias</option>' +
        CATEGORIES.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    } else {
      select.innerHTML = CATEGORIES.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    }
  });
}

function filterAdminQuestions() {
  displayAdminQuestions();
}

function displayAdminQuestions() {
  const container = document.getElementById('admin-questions-list');
  const searchTerm = document.getElementById('admin-search').value.toLowerCase();
  const categoryFilter = document.getElementById('admin-category-filter').value;
  
  let questions = getAllQuestions();
  
  if (searchTerm) {
    questions = questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm) ||
      q.options[q.correctAnswer].toLowerCase().includes(searchTerm)
    );
  }
  
  if (categoryFilter !== 'all') {
    questions = questions.filter(q => q.category === categoryFilter);
  }
  
  if (questions.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>No se encontraron preguntas</p></div>';
    return;
  }
  
  container.innerHTML = questions.map(q => {
    const isCustom = q.id.startsWith('custom-');
    return `
      <div class="admin-question-item ${isCustom ? 'custom' : ''}">
        <div class="admin-question-header">
          <div class="admin-question-text">${q.question}</div>
          <div class="admin-question-badges">
            <span class="badge badge-category">${q.category}</span>
            ${isCustom ? '<span class="badge badge-custom">Personalizada</span>' : ''}
          </div>
        </div>
        <div class="admin-question-answer">R: ${q.options[q.correctAnswer]}</div>
        ${isCustom ? `<button class="delete-btn" onclick="deleteQuestion('${q.id}')">Eliminar</button>` : ''}
      </div>
    `;
  }).join('');
}

function deleteQuestion(id) {
  state.customQuestions = state.customQuestions.filter(q => q.id !== id);
  saveState();
  displayAdminQuestions();
  updateMenuStats();
}

// Create Question Form
document.getElementById('create-question-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const question = document.getElementById('new-question').value.trim();
  const keywords = document.getElementById('new-keywords').value.split(',').map(k => k.trim()).filter(k => k);
  const category = document.getElementById('new-category').value;
  const difficulty = document.getElementById('new-difficulty').value;
  const explanation = document.getElementById('new-explanation').value.trim();
  
  const options = [
    document.getElementById('new-option-0').value.trim(),
    document.getElementById('new-option-1').value.trim(),
    document.getElementById('new-option-2').value.trim(),
    document.getElementById('new-option-3').value.trim()
  ];
  
  if (!question || options.some(o => !o)) {
    alert('Por favor completa la pregunta y todas las opciones');
    return;
  }
  
  const newQuestion = {
    id: generateId(),
    question,
    keywords,
    options,
    correctAnswer: 0, // First option is always correct
    explanation: explanation || `La respuesta correcta es: ${options[0]}`,
    category,
    difficulty
  };
  
  // Shuffle options for storage
  const shuffledIndices = shuffleArray([0, 1, 2, 3]);
  newQuestion.options = shuffledIndices.map(i => options[i]);
  newQuestion.correctAnswer = shuffledIndices.indexOf(0);
  
  state.customQuestions.push(newQuestion);
  saveState();
  
  // Clear form
  this.reset();
  
  alert('Pregunta creada exitosamente!');
  switchAdminTab('list');
  displayAdminQuestions();
  updateMenuStats();
});

// Generator Functions
function parseGeneratorText() {
  const text = document.getElementById('generator-input').value.trim();
  if (!text) {
    alert('Por favor ingresa texto para procesar');
    return;
  }
  
  const lines = text.split('\n').filter(line => line.trim());
  state.generatorItems = [];
  
  lines.forEach(line => {
    // Try different separators: —, -, :
    let parts = null;
    
    if (line.includes(' — ')) {
      parts = line.split(' — ');
    } else if (line.includes(' - ')) {
      parts = line.split(' - ');
    } else if (line.includes(': ')) {
      parts = line.split(': ');
    }
    
    if (parts && parts.length >= 2) {
      const concept = parts[0].trim();
      const definition = parts.slice(1).join(': ').trim();
      if (concept && definition) {
        state.generatorItems.push({ concept, definition, id: generateId() });
      }
    }
  });
  
  if (state.generatorItems.length === 0) {
    alert('No se detectaron items validos. Usa el formato: Concepto - Definicion');
    return;
  }
  
  displayGeneratorPreview();
}

function displayGeneratorPreview() {
  const previewContainer = document.getElementById('generator-preview');
  const previewList = document.getElementById('preview-list');
  
  document.getElementById('preview-count').textContent = state.generatorItems.length;
  
  previewList.innerHTML = state.generatorItems.map(item => `
    <div class="preview-item" data-id="${item.id}">
      <div class="preview-item-text">
        <strong>${item.concept}</strong>: ${item.definition}
      </div>
      <button class="preview-remove" onclick="removeGeneratorItem('${item.id}')">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  `).join('');
  
  previewContainer.style.display = 'block';
}

function removeGeneratorItem(id) {
  state.generatorItems = state.generatorItems.filter(item => item.id !== id);
  if (state.generatorItems.length === 0) {
    document.getElementById('generator-preview').style.display = 'none';
  } else {
    displayGeneratorPreview();
  }
}

function generateQuestions() {
  if (state.generatorItems.length === 0) {
    alert('No hay items para generar');
    return;
  }
  
  const category = document.getElementById('generator-category').value;
  const difficulty = document.getElementById('generator-difficulty').value;
  
  // Get all concepts for generating wrong answers
  const allConcepts = state.generatorItems.map(item => item.concept);
  
  state.generatorItems.forEach(item => {
    // Create wrong answers from other concepts
    const wrongAnswers = shuffleArray(
      allConcepts.filter(c => c !== item.concept)
    ).slice(0, 3);
    
    // If not enough wrong answers, add generic ones
    while (wrongAnswers.length < 3) {
      wrongAnswers.push(`Opcion ${wrongAnswers.length + 2}`);
    }
    
    const options = [item.concept, ...wrongAnswers];
    const shuffledIndices = shuffleArray([0, 1, 2, 3]);
    const shuffledOptions = shuffledIndices.map(i => options[i]);
    const correctIndex = shuffledIndices.indexOf(0);
    
    const newQuestion = {
      id: generateId(),
      question: `Que termino se define como: "${item.definition}"?`,
      keywords: item.concept.toLowerCase().split(' ').slice(0, 3),
      options: shuffledOptions,
      correctAnswer: correctIndex,
      explanation: `${item.concept}: ${item.definition}`,
      category,
      difficulty
    };
    
    state.customQuestions.push(newQuestion);
  });
  
  saveState();
  
  alert(`Se generaron ${state.generatorItems.length} preguntas exitosamente!`);
  
  // Clear generator
  document.getElementById('generator-input').value = '';
  document.getElementById('generator-preview').style.display = 'none';
  state.generatorItems = [];
  
  switchAdminTab('list');
  displayAdminQuestions();
  updateMenuStats();
}

// ===== Event Listeners =====
document.getElementById('username-input').addEventListener('input', function(e) {
  state.username = e.target.value.trim();
  saveState();
});

document.getElementById('results-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('active');
    goToMenu();
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (state.currentScreen === 'quiz-screen' && !state.answered) {
    const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
    if (keyMap.hasOwnProperty(e.key.toLowerCase())) {
      selectAnswer(keyMap[e.key.toLowerCase()]);
    }
  }
  
  if (state.currentScreen === 'quiz-screen' && state.answered && e.key === 'Enter') {
    nextQuestion();
  }
  
  if (state.currentScreen === 'flashcards-screen') {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      flipCard();
    } else if (e.key === 'ArrowLeft') {
      prevCard();
    } else if (e.key === 'ArrowRight') {
      nextCard();
    }
  }
  
  if (e.key === 'Escape') {
    if (document.getElementById('results-modal').classList.contains('active')) {
      document.getElementById('results-modal').classList.remove('active');
    }
    goToMenu();
  }
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
  updateMenuStats();
});
