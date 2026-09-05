/**
 * CAPACITACIÓN INSTITUCIONAL: EDUCACIÓN FINANCIERA Y APUESTAS ONLINE
 * Plataforma interactiva de trabajo grupal para personal policial de Córdoba
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATOS DE LOS CASOS Y CONTENIDOS
  // ==========================================
  const CASES_DATA = {
    1: {
      id: 1,
      number: 'CASO 1',
      title: 'TODO ENTRA EN LA CUOTA',
      subtitle: 'Financiamiento continuo y gastos imprevistos.',
      paragraphs: [
        'Sebastián tiene 34 años, vive con su pareja y dos hijos. Entre ambos sostienen los gastos de la casa. Él tiene un ingreso mensual relativamente estable y suele hacer algunas horas adicionales, aunque no todos los meses cobra exactamente lo mismo. No lleva un presupuesto escrito: conoce aproximadamente cuánto gasta y, hasta ahora, siente que “se va acomodando”.',
        'En los últimos ocho meses cambió el teléfono en 12 cuotas, compró un televisor en 9 cuotas y financió parte de unas vacaciones familiares. Ninguna cuota, tomada por separado, le pareció excesiva. Además paga un préstamo personal que había pedido para arreglar el auto. A principio de mes, después de cobrar, todavía siente que tiene dinero disponible; el problema aparece hacia la tercera semana, cuando buena parte del ingreso ya está comprometida.',
        'Un viernes el auto vuelve a fallar. El mecánico calcula una reparación importante. Sebastián necesita el vehículo para trasladarse y no considera realista dejarlo parado. Tiene tres alternativas inmediatas: pagar con tarjeta en cuotas, aceptar un préstamo que le ofrecen desde una aplicación con acreditación casi instantánea o usar el pequeño ahorro familiar destinado a unas vacaciones. Su pareja propone postergar el viaje y usar ese dinero. Sebastián no está convencido: “para algo trabajo todo el año”. También piensa que el mes próximo probablemente tendrá más adicionales y podrá compensarlo.',
        'Antes de decidir mira solamente el monto de la nueva cuota. Entra dentro de lo que cree que puede pagar.'
      ]
    },
    2: {
      id: 2,
      number: 'CASO 2',
      title: 'EL RESUMEN QUE NUNCA TERMINA',
      subtitle: 'Uso de tarjeta de crédito y pago mínimo.',
      paragraphs: [
        'Verónica tiene ingresos regulares y siempre se consideró ordenada con el dinero. Nunca dejó de pagar una obligación y le preocupa especialmente “no quedar debiendo”. Durante algunos meses utilizó la tarjeta para supermercado, combustible, medicamentos y algunas compras personales. También aprovechó promociones en cuotas sin interés. Al principio pagaba el resumen completo.',
        'Después de dos meses con gastos familiares inesperados, el resumen llegó bastante más alto. Para no quedarse sin efectivo decidió pagar el mínimo. Pensó que sería solamente por un mes. Al siguiente, además del consumo nuevo, apareció el saldo financiado y los intereses. Volvió a pagar una parte. Desde entonces mira principalmente cuánto necesita pagar ese mes y no cuánto debe en total.',
        'Ahora recibe una oferta del banco para refinanciar el saldo de la tarjeta en cuotas fijas. Al mismo tiempo, otra entidad le ofrece un préstamo personal para cancelar todo. Una compañera le dice que saque el préstamo porque “por lo menos sabés cuánto pagás por mes”. Su hermano le aconseja no tomar ninguna deuda nueva y reducir gastos durante unos meses. Verónica siente que ambas propuestas tienen lógica, pero tampoco quiere dejar de usar la tarjeta porque la necesita para gastos habituales.',
        'Antes de elegir, descubre que no sabe con precisión la tasa, el costo financiero total de ninguna de las alternativas ni cuánto de su ingreso mensual ya está comprometido durante los próximos seis meses.'
      ]
    },
    3: {
      id: 3,
      number: 'CASO 3',
      title: 'UNA MÁS Y RECUPERO',
      subtitle: 'Apuestas deportivas individuales e ilusión de control.',
      paragraphs: [
        'Nicolás siempre siguió fútbol y conoce estadísticas, jugadores y equipos. Empezó a apostar con amigos durante algunos partidos importantes. Eran montos pequeños y la apuesta agregaba emoción al encuentro.',
        'Algunas veces ganó. Esas victorias le dejaron la sensación de que, prestando atención y eligiendo bien, podía obtener una ventaja.',
        'Una semana perdió $20.000. Al día siguiente hizo otra apuesta para recuperar y ganó una parte. Eso reforzó su idea de que podía corregir una mala racha. Dos semanas después perdió $45.000 en varias apuestas. Esa noche decidió hacer una última jugada con un monto mayor: “si sale, quedo casi hecho”. También perdió.',
        'Desde entonces mira cuotas y resultados con mucha más frecuencia. No apuesta todos los días, pero cuando pierde piensa bastante en cómo recuperar. Algunas veces utiliza dinero que originalmente tenía destinado a otros gastos y luego lo repone cuando cobra. No considera que tenga un problema porque cumple con su trabajo, no tiene grandes deudas y todavía puede pagar sus obligaciones.',
        'Un amigo le señala que últimamente habla mucho de apuestas. Nicolás se molesta: “yo sé lo que hago; problema tendría si apostara plata que no tengo”. Esa misma noche ve una apuesta que considera casi segura y piensa que podría recuperar buena parte de lo perdido.'
      ]
    },
    4: {
      id: 4,
      number: 'CASO 4',
      title: '¿ME METO O NO ME METO?',
      subtitle: 'Señales en el ámbito laboral y dilema entre pares.',
      paragraphs: [
        'En un grupo de compañeros, Martín empezó hace tiempo a apostar online por entretenimiento. Al principio comentaba sus jugadas abiertamente y se reía tanto de las ganancias como de las pérdidas. En los últimos meses algo cambió. Durante los descansos revisa resultados y cuotas con frecuencia. Algunas mañanas llega cansado porque se quedó siguiendo eventos deportivos de madrugada. También comenzó a hablar de “recuperar” dinero perdido.',
        'Dos compañeros notan otras situaciones. Una vez Martín pidió dinero prestado hasta el día de cobro. Lo devolvió puntualmente y nadie preguntó demasiado. Semanas después volvió a pedir. En una conversación reconoció que había perdido bastante el fin de semana, pero enseguida aclaró que ya tenía pensado cómo recuperarlo. Cuando otro compañero hizo una broma sobre que estaba “enviciado”, Martín se enojó y desde entonces casi no habla de cuánto juega.',
        'Laura, una compañera cercana, piensa que deberían hablar con él. Pablo no está de acuerdo: considera que Martín es adulto, sigue cumpliendo con sus obligaciones y meterse en sus finanzas sería invadir su vida privada. Otro integrante del grupo propone avisarle directamente a un superior. Laura teme que eso haga que Martín se cierre todavía más.',
        'Nadie sabe con certeza cuánto apuesta, cuánto perdió ni si tiene deudas. Lo único que conocen son los cambios que fueron observando.'
      ]
    }
  };

  const CLUES_LIST = [
    '¿Qué ingreso futuro ya está comprometido?',
    '¿Qué información todavía no conocen?',
    '¿Qué puede ocurrir si esta decisión se repite varias veces?',
    '¿Cuál de las opciones resuelve el problema de hoy pero podría generar otro mañana?',
    '¿Qué podría hacer que la persona pierda margen para decidir?',
    '¿Qué conducta está intentando solucionar una consecuencia con una nueva conducta similar?',
    '¿Qué alternativas no están considerando?'
  ];

  const STORAGE_KEY = 'capacitacion_policia_cba_v1';
  const TOTAL_WORKSHOP_SECONDS = 30 * 60; // 30 minutos

  // ==========================================
  // 2. ESTADO INICIAL Y PERSISTENCIA
  // ==========================================
  let state = {
    currentScreen: 1,
    assignedCaseId: null,
    timerStarted: false,
    timerStartTimestamp: null,
    timerElapsedSeconds: 0,
    answers: {}
  };

  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
      }
    } catch (e) {
      console.warn('No se pudo cargar localStorage:', e);
    }
  }

  function saveCurrentState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Error al guardar en localStorage:', e);
    }
  }

  // Cargar estado guardado al arrancar
  loadSavedState();

  // ==========================================
  // 3. REFERENCIAS DEL DOM
  // ==========================================
  const screens = document.querySelectorAll('.screen-view');
  const timerWrapper = document.getElementById('timerWrapper');
  const timerClock = document.getElementById('timerClock');
  const timerGuideMessage = document.getElementById('timerGuideMessage');
  const timerProgressBar = document.getElementById('timerProgressBar');
  const currentStepNum = document.getElementById('currentStepNum');

  // Pantalla 1
  const btnStartWorkshop = document.getElementById('btnStartWorkshop');

  // Pantalla 3
  const btnAssignCase = document.getElementById('btnAssignCase');
  const assignmentActionBox = document.getElementById('assignmentActionBox');
  const assignmentResultBox = document.getElementById('assignmentResultBox');
  const assignedCaseTitle = document.getElementById('assignedCaseTitle');
  const btnGoToCaseReading = document.getElementById('btnGoToCaseReading');
  const casePreviews = document.querySelectorAll('.case-card-preview');

  // Pantalla 4
  const readingCaseKicker = document.getElementById('readingCaseKicker');
  const readingCaseTitle = document.getElementById('title-screen-4');
  const caseNarrativeContainer = document.getElementById('caseNarrativeContainer');

  // Banner superior del caso en análisis (pantallas 5 a 10)
  const activeCaseTopBanner = document.getElementById('activeCaseTopBanner');
  const topActiveCaseTitle = document.getElementById('topActiveCaseTitle');
  const topActiveCaseNarrative = document.getElementById('topActiveCaseNarrative');
  const btnToggleActiveCase = document.getElementById('btnToggleActiveCase');
  const toggleActiveCaseLabel = document.getElementById('toggleActiveCaseLabel');
  const toggleCaseIcon = document.getElementById('toggleCaseIcon');
  const topActiveCaseBody = document.getElementById('topActiveCaseBody');

  // Pantalla 8
  const riskCycleCard = document.getElementById('riskCycleCard');

  // Pantalla 11
  const btnFinalizeWorkshop = document.getElementById('btnFinalizeWorkshop');
  const closureActionsArea = document.getElementById('closureActionsArea');
  const teamSummaryDrawer = document.getElementById('teamSummaryDrawer');
  const summaryContentContainer = document.getElementById('summaryContentContainer');
  const btnPrintSummary = document.getElementById('btnPrintSummary');

  // Modales
  const modalClue = document.getElementById('modalClue');
  const btnOpenClue = document.getElementById('btnOpenClue');
  const btnCloseClue = document.getElementById('btnCloseClue');
  const btnDismissClue = document.getElementById('btnDismissClue');
  const btnNextClue = document.getElementById('btnNextClue');
  const clueQuestionText = document.getElementById('clueQuestionText');

  const modalConcepts = document.getElementById('modalConcepts');
  const btnOpenConcepts = document.getElementById('btnOpenConcepts');
  const btnCloseConcepts = document.getElementById('btnCloseConcepts');
  const btnDismissConcepts = document.getElementById('btnDismissConcepts');

  const modalResetConfirm = document.getElementById('modalResetConfirm');
  const btnResetActivity = document.getElementById('btnResetActivity');
  const btnCancelReset = document.getElementById('btnCancelReset');
  const btnAbortReset = document.getElementById('btnAbortReset');
  const btnConfirmReset = document.getElementById('btnConfirmReset');

  // Campos de formulario para autosave
  const formInputs = document.querySelectorAll('input[type="text"], textarea');

  // ==========================================
  // 4. CRONÓMETRO DE 30 MINUTOS
  // ==========================================
  let timerInterval = null;

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function updateTimerUI(remainingSeconds) {
    timerClock.textContent = formatTime(remainingSeconds);

    const percentElapsed = Math.min(100, Math.max(0, ((TOTAL_WORKSHOP_SECONDS - remainingSeconds) / TOTAL_WORKSHOP_SECONDS) * 100));
    timerProgressBar.style.width = `${percentElapsed}%`;

    // Mensajes pedagógicos según tiempo restante:
    // 30 a 20 min (1800 a 1200 seg): "Lean y analicen la situación."
    // 20 a 10 min (1200 a 600 seg): "Construyan alternativas y analicen consecuencias."
    // Últimos 5 min (300 a 0 seg): "Preparen la idea que van a compartir."
    // 0 min: "El tiempo de trabajo terminó. Finalicen la idea que compartirán en la puesta en común."
    if (remainingSeconds > 1200) {
      timerGuideMessage.textContent = 'Lean y analicen la situación.';
    } else if (remainingSeconds > 600) {
      timerGuideMessage.textContent = 'Construyan alternativas y analicen consecuencias.';
    } else if (remainingSeconds > 300) {
      timerGuideMessage.textContent = 'Continúen evaluando opciones y consecuencias.';
    } else if (remainingSeconds > 0) {
      timerGuideMessage.textContent = 'Preparen la idea que van a compartir.';
    } else {
      timerGuideMessage.textContent = 'El tiempo de trabajo terminó. Finalicen la idea que compartirán en la puesta en común.';
    }
  }

  function calculateRemainingSeconds() {
    if (!state.timerStarted || !state.timerStartTimestamp) {
      return TOTAL_WORKSHOP_SECONDS;
    }
    const now = Date.now();
    const elapsedSeconds = Math.floor((now - state.timerStartTimestamp) / 1000);
    const remaining = TOTAL_WORKSHOP_SECONDS - elapsedSeconds;
    return Math.max(0, remaining);
  }

  function startTimer() {
    if (!state.timerStarted) {
      state.timerStarted = true;
      state.timerStartTimestamp = Date.now();
      saveCurrentState();
    }

    timerWrapper.style.display = 'block';

    if (timerInterval) clearInterval(timerInterval);

    // Actualización inmediata
    const currentRemaining = calculateRemainingSeconds();
    updateTimerUI(currentRemaining);

    timerInterval = setInterval(() => {
      const remaining = calculateRemainingSeconds();
      updateTimerUI(remaining);
      if (remaining <= 0) {
        // No bloquear la actividad, mantener mensaje orientativo sereno
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }, 1000);
  }

  // ==========================================
  // 5. GESTIÓN DE PANTALLAS Y NAVEGACIÓN
  // ==========================================
  function goToScreen(step) {
    if (step < 1) step = 1;
    if (step > 11) step = 11;

    state.currentScreen = step;
    saveCurrentState();

    screens.forEach(screen => {
      const screenNum = parseInt(screen.dataset.screen, 10);
      if (screenNum === step) {
        screen.classList.add('active');
      } else {
        screen.classList.remove('active');
      }
    });

    currentStepNum.textContent = step;

    // Mostrar cabecera del timer a partir del paso 2 o si ya fue iniciado
    if (step > 1 || state.timerStarted) {
      timerWrapper.style.display = 'block';
    } else {
      timerWrapper.style.display = 'none';
    }

    // Comportamientos específicos por pantalla
    if (step === 3) {
      renderScreen3Assignment();
    } else if (step === 4) {
      renderScreen4Reading();
    } else if (step === 8) {
      renderScreen8RiskCycle();
    } else if (step === 11) {
      renderScreen11Summary();
    }

    // Actualizar visibilidad del banner del caso en pantallas de preguntas
    renderActiveCaseTopBanner();

    // Scroll al inicio del contenido
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Asignar caso aleatoriamente
  function assignRandomCase() {
    // Si ya hay un caso asignado, se puede mantener o reasignar
    const randomCaseNum = Math.floor(Math.random() * 4) + 1;
    state.assignedCaseId = randomCaseNum;
    saveCurrentState();

    // Animación visual institucional y seria (resaltado pausado y deliberado)
    btnAssignCase.disabled = true;
    btnAssignCase.textContent = 'Asignando caso...';

    let counter = 0;
    const highlightInterval = setInterval(() => {
      casePreviews.forEach(card => card.classList.remove('selected', 'dimmed'));
      const activeIdx = counter % 4;
      casePreviews[activeIdx].classList.add('selected');
      counter++;
      if (counter > 6) {
        clearInterval(highlightInterval);
        finalizeAssignment(randomCaseNum);
      }
    }, 120);
  }

  function finalizeAssignment(caseId) {
    btnAssignCase.disabled = false;
    btnAssignCase.textContent = 'ASIGNAR CASO';

    casePreviews.forEach((card, idx) => {
      card.classList.remove('selected', 'dimmed');
      if (idx + 1 === caseId) {
        card.classList.add('selected');
      } else {
        card.classList.add('dimmed');
      }
    });

    const cData = CASES_DATA[caseId];
    assignedCaseTitle.textContent = `${cData.number} — ${cData.title}`;
    assignmentActionBox.style.display = 'none';
    assignmentResultBox.style.display = 'block';
    btnGoToCaseReading.style.display = 'inline-flex';
  }

  function renderScreen3Assignment() {
    if (state.assignedCaseId && CASES_DATA[state.assignedCaseId]) {
      finalizeAssignment(state.assignedCaseId);
    } else {
      casePreviews.forEach(card => card.classList.remove('selected', 'dimmed'));
      assignmentActionBox.style.display = 'block';
      assignmentResultBox.style.display = 'none';
      btnGoToCaseReading.style.display = 'none';
    }
  }

  function renderScreen4Reading() {
    // Si por algún motivo aún no hay caso asignado, asignar uno por defecto
    if (!state.assignedCaseId) {
      state.assignedCaseId = Math.floor(Math.random() * 4) + 1;
      saveCurrentState();
    }

    const cData = CASES_DATA[state.assignedCaseId];
    readingCaseKicker.textContent = `CASO ASIGNADO · ${cData.number}`;
    readingCaseTitle.textContent = `${cData.number} — ${cData.title}`;

    caseNarrativeContainer.innerHTML = '';
    cData.paragraphs.forEach(pText => {
      const p = document.createElement('p');
      p.textContent = pText;
      caseNarrativeContainer.appendChild(p);
    });
  }

  function renderActiveCaseTopBanner() {
    const isQuestionScreen = state.currentScreen >= 5 && state.currentScreen <= 10;
    if (!isQuestionScreen || !state.assignedCaseId) {
      if (activeCaseTopBanner) activeCaseTopBanner.style.display = 'none';
      return;
    }

    const cData = CASES_DATA[state.assignedCaseId];
    if (!cData) return;

    topActiveCaseTitle.textContent = `${cData.number} — ${cData.title}`;
    topActiveCaseNarrative.innerHTML = '';
    cData.paragraphs.forEach(pText => {
      const p = document.createElement('p');
      p.textContent = pText;
      topActiveCaseNarrative.appendChild(p);
    });

    activeCaseTopBanner.style.display = 'block';
  }

  let isCaseBannerExpanded = true;
  if (btnToggleActiveCase) {
    btnToggleActiveCase.addEventListener('click', () => {
      isCaseBannerExpanded = !isCaseBannerExpanded;
      if (isCaseBannerExpanded) {
        topActiveCaseBody.style.display = 'block';
        toggleActiveCaseLabel.textContent = 'Ocultar relato';
        btnToggleActiveCase.setAttribute('aria-expanded', 'true');
        toggleCaseIcon.style.transform = 'rotate(0deg)';
      } else {
        topActiveCaseBody.style.display = 'none';
        toggleActiveCaseLabel.textContent = 'Ver relato';
        btnToggleActiveCase.setAttribute('aria-expanded', 'false');
        toggleCaseIcon.style.transform = 'rotate(180deg)';
      }
    });
  }

  function renderScreen8RiskCycle() {
    // Casos 3 y 4 tratan sobre apuestas: mostrar tarjeta conceptual de dinámica de pérdidas
    if (state.assignedCaseId === 3 || state.assignedCaseId === 4) {
      riskCycleCard.style.display = 'block';
    } else {
      riskCycleCard.style.display = 'none';
    }
  }

  function renderScreen11Summary() {
    // La pantalla 11 muestra el mensaje de cierre y permite consultar el resumen al pulsar finalizar
    if (state.finishedWorkshop) {
      showSummaryDrawer();
    }
  }

  function showSummaryDrawer() {
    state.finishedWorkshop = true;
    saveCurrentState();

    const cData = CASES_DATA[state.assignedCaseId] || CASES_DATA[1];
    
    let html = `
      <div class="summary-block">
        <div class="summary-block-title">Caso analizado por el equipo</div>
        <div class="summary-block-text"><strong>${cData.number} — ${cData.title}</strong></div>
      </div>
      <div class="summary-block">
        <div class="summary-block-title">PARAR: Momentos de inflexión identificados</div>
        <div class="summary-block-text">${escapeHtml(state.answers['input_p1_momentos'] || '— Sin registro')}</div>
      </div>
      <div class="summary-block">
        <div class="summary-block-title">PARAR: ¿Por qué eligieron esos momentos?</div>
        <div class="summary-block-text">${escapeHtml(state.answers['input_p1_porque'] || '— Sin registro')}</div>
      </div>
      <div class="summary-block">
        <div class="summary-block-title">PARAR: Señales o situaciones llamativas</div>
        <div class="summary-block-text">${escapeHtml(state.answers['input_p1_senales'] || '— Sin registro')}</div>
      </div>
      <div class="summary-block">
        <div class="summary-block-title">MIRAR: Información faltante</div>
        <div class="summary-block-text">${escapeHtml(state.answers['input_p2_faltante'] || '— Sin registro')}</div>
      </div>
      <div class="summary-block">
        <div class="summary-block-title">MIRAR: ¿Qué sería importante conocer antes de aconsejar?</div>
        <div class="summary-block-text">${escapeHtml(state.answers['input_p2_conocer'] || '— Sin registro')}</div>
      </div>
      <div class="summary-block">
        <div class="summary-block-title">DECIDIR: Alternativas evaluadas</div>
        <div class="summary-block-text">
          <strong>Opción A:</strong> ${escapeHtml(state.answers['input_optA_desc'] || 'No completada')}<br>
          <em>Inmediato:</em> ${escapeHtml(state.answers['input_optA_inmediato'] || '—')}<br>
          <em>Corto plazo:</em> ${escapeHtml(state.answers['input_optA_corto'] || '—')}<br>
          <em>En meses:</em> ${escapeHtml(state.answers['input_optA_meses'] || '—')}<br><br>
          <strong>Opción B:</strong> ${escapeHtml(state.answers['input_optB_desc'] || 'No completada')}<br>
          <em>Inmediato:</em> ${escapeHtml(state.answers['input_optB_inmediato'] || '—')}<br>
          <em>Corto plazo:</em> ${escapeHtml(state.answers['input_optB_corto'] || '—')}<br>
          <em>En meses:</em> ${escapeHtml(state.answers['input_optB_meses'] || '—')}<br>
          ${state.answers['input_optC_desc'] ? `
          <br><strong>Opción C:</strong> ${escapeHtml(state.answers['input_optC_desc'])}<br>
          <em>Inmediato:</em> ${escapeHtml(state.answers['input_optC_inmediato'] || '—')}<br>
          <em>Corto plazo:</em> ${escapeHtml(state.answers['input_optC_corto'] || '—')}<br>
          <em>En meses:</em> ${escapeHtml(state.answers['input_optC_meses'] || '—')}
          ` : ''}
        </div>
      </div>
      <div class="summary-block">
        <div class="summary-block-title">Punto de inflexión: Momento para detenerse o pedir ayuda</div>
        <div class="summary-block-text">${escapeHtml(state.answers['input_p4_senial_ayuda'] || '— Sin registro')}</div>
      </div>
      <div class="summary-block">
        <div class="summary-block-title">Si fuera un compañero cercano</div>
        <div class="summary-block-text">
          <strong>Qué haríamos:</strong> ${escapeHtml(state.answers['input_p5_que_harian'] || '— Sin registro')}<br><br>
          <strong>Qué evitaríamos:</strong> ${escapeHtml(state.answers['input_p5_que_evitarian'] || '— Sin registro')}
        </div>
      </div>
      <div class="summary-block" style="border: 2px solid var(--blue-primary); background-color: #ffffff;">
        <div class="summary-block-title" style="color: var(--blue-primary); font-size: 0.9375rem; letter-spacing: 0.05em;">IDEA PRINCIPAL PARA LA PUESTA EN COMÚN</div>
        <div class="summary-block-text" style="font-size: 1.0625rem; font-weight: 600;">${escapeHtml(state.answers['input_p6_idea_compartir'] || '— Sin registro')}</div>
      </div>
    `;

    summaryContentContainer.innerHTML = html;
    teamSummaryDrawer.style.display = 'block';
    closureActionsArea.style.display = 'none';
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================
  // 6. AUTOSAVE DE FORMULARIO
  // ==========================================
  function restoreFormAnswers() {
    if (!state.answers) state.answers = {};
    formInputs.forEach(input => {
      const fieldId = input.id;
      if (state.answers[fieldId] !== undefined) {
        input.value = state.answers[fieldId];
      }
    });
  }

  formInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const fieldId = e.target.id;
      if (!state.answers) state.answers = {};
      state.answers[fieldId] = e.target.value;
      saveCurrentState();
    });
  });

  // ==========================================
  // 7. EVENT LISTENERS Y BOTONES DE FLUJO
  // ==========================================
  btnStartWorkshop.addEventListener('click', () => {
    startTimer();
    goToScreen(2);
  });

  btnAssignCase.addEventListener('click', () => {
    assignRandomCase();
  });

  // Delegación de navegación "Volver" y "Siguiente" en los botones de pantallas
  document.querySelectorAll('[data-action="next"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.currentScreen === 3 && !state.assignedCaseId) {
        assignRandomCase();
        return;
      }
      goToScreen(state.currentScreen + 1);
    });
  });

  document.querySelectorAll('[data-action="prev"]').forEach(btn => {
    btn.addEventListener('click', () => {
      goToScreen(state.currentScreen - 1);
    });
  });

  btnFinalizeWorkshop.addEventListener('click', () => {
    showSummaryDrawer();
  });

  btnPrintSummary.addEventListener('click', () => {
    window.print();
  });

  // ==========================================
  // 8. MODAL DE PISTAS (PREGUNTAS ORIENTADORAS)
  // ==========================================
  let lastClueIndex = -1;

  function showRandomClue() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * CLUES_LIST.length);
    } while (newIndex === lastClueIndex && CLUES_LIST.length > 1);

    lastClueIndex = newIndex;
    clueQuestionText.textContent = `“${CLUES_LIST[newIndex]}”`;
  }

  btnOpenClue.addEventListener('click', () => {
    showRandomClue();
    modalClue.style.display = 'flex';
  });

  btnNextClue.addEventListener('click', () => {
    showRandomClue();
  });

  function closeClueModal() {
    modalClue.style.display = 'none';
  }

  btnCloseClue.addEventListener('click', closeClueModal);
  btnDismissClue.addEventListener('click', closeClueModal);

  // ==========================================
  // 9. MODAL DE CONCEPTOS PARA RECORDAR
  // ==========================================
  btnOpenConcepts.addEventListener('click', () => {
    modalConcepts.style.display = 'flex';
  });

  function closeConceptsModal() {
    modalConcepts.style.display = 'none';
  }

  btnCloseConcepts.addEventListener('click', closeConceptsModal);
  btnDismissConcepts.addEventListener('click', closeConceptsModal);

  // ==========================================
  // 10. REINICIO DE LA ACTIVIDAD
  // ==========================================
  btnResetActivity.addEventListener('click', () => {
    modalResetConfirm.style.display = 'flex';
  });

  function closeResetModal() {
    modalResetConfirm.style.display = 'none';
  }

  btnCancelReset.addEventListener('click', closeResetModal);
  btnAbortReset.addEventListener('click', closeResetModal);

  btnConfirmReset.addEventListener('click', () => {
    // Limpiar localStorage
    localStorage.removeItem(STORAGE_KEY);

    // Reiniciar temporizador
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    // Resetear variables en memoria
    state = {
      currentScreen: 1,
      assignedCaseId: null,
      timerStarted: false,
      timerStartTimestamp: null,
      timerElapsedSeconds: 0,
      answers: {},
      finishedWorkshop: false
    };

    // Resetear formulario
    formInputs.forEach(input => {
      input.value = '';
    });

    closeResetModal();
    timerWrapper.style.display = 'none';
    timerProgressBar.style.width = '0%';
    timerClock.textContent = '30:00';
    closureActionsArea.style.display = 'flex';
    teamSummaryDrawer.style.display = 'none';

    goToScreen(1);
  });

  // Cerrar modales con tecla Escape y clic en backdrop
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeClueModal();
      closeConceptsModal();
      closeResetModal();
    }
  });

  [modalClue, modalConcepts, modalResetConfirm].forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeClueModal();
        closeConceptsModal();
        closeResetModal();
      }
    });
  });

  // ==========================================
  // 11. ACORDEONES DE RECURSOS (EXCLUSIVIDAD)
  // ==========================================
  const resourceAccordions = document.querySelectorAll('.resource-accordion-item');
  resourceAccordions.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        resourceAccordions.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });

  // ==========================================
  // 12. INICIALIZACIÓN GENERAL
  // ==========================================
  restoreFormAnswers();

  if (state.timerStarted) {
    startTimer();
  }

  // Cargar en la pantalla guardada o en la pantalla 1
  goToScreen(state.currentScreen || 1);

});
