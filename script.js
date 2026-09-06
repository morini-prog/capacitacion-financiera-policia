/**
 * CAPACITACIÓN INSTITUCIONAL: EDUCACIÓN FINANCIERA Y APUESTAS ONLINE
 * Plataforma interactiva de trabajo grupal para personal policial de Córdoba
 * Flujo simplificado de 4 pasos:
 * 1. Bienvenida y organización
 * 2. Elección activa del caso
 * 3. Análisis y resolución en pantalla única (5 consignas clave)
 * 4. Devolución y síntesis grupal con exportación
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
      summary: 'Sebastián (34 años) acumula cuotas en 9 y 12 meses más un préstamo personal. Ante la rotura del auto familiar, evalúa pedir un crédito exprés por app fijándose solo si la cuota mensual "entra" en su bolsillo, sin calcular sus ingresos futuros ya comprometidos.',
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
      summary: 'Verónica, habitualmente ordenada, pagó el saldo mínimo de su tarjeta tras imprevistos familiares. Los intereses crecieron en espiral y ahora duda entre refinanciar con el banco o sacar un nuevo préstamo para cancelar todo, sin conocer las tasas ni el CFT.',
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
      summary: 'Nicolás empezó apostando en fútbol por diversión creyendo tener ventaja por sus conocimientos. Tras pérdidas de $20.000 y $45.000, decide arriesgar una suma mayor para "recuperar", usando fondos originalmente destinados a gastos del hogar.',
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
      title: 'EL DILEMA DE LA INTERVENCIÓN',
      subtitle: 'Señales en el ámbito laboral y dilema entre pares.',
      summary: 'Martín pasa las guardias apostando de madrugada en su celular, llega exhausto al servicio y pide dinero prestado a camaradas para tapar pérdidas. El grupo nota el deterioro pero discute si intervenir y ofrecer ayuda o si sería invadir su intimidad.',
      paragraphs: [
        'En un grupo de compañeros, Martín empezó hace tiempo a apostar online por entretenimiento. Al principio comentaba sus jugadas abiertamente y se reía tanto de las ganancias como de las pérdidas. En los últimos meses algo cambió. Durante los descansos revisa resultados y cuotas con frecuencia. Algunas mañanas llega cansado porque se quedó siguiendo eventos deportivos de madrugada. También comenzó a hablar de “recuperar” dinero perdido.',
        'Dos compañeros notan otras situaciones. Una vez Martín pidió dinero prestado hasta el día de cobro. Lo devolvió puntualmente y nadie preguntó demasiado. Semanas después volvió a pedir. En una conversación reconoció que había perdido bastante el fin de semana, pero enseguida aclaró que ya tenía pensado cómo recuperarlo. Cuando otro compañero hizo una broma sobre que estaba “enviciado”, Martín se enojó y desde entonces casi no habla de cuánto juega.',
        'Laura, una compañera cercana, piensa que deberían hablar con él. Pablo no está de acuerdo: considera que Martín es adulto, sigue cumpliendo con sus obligaciones y meterse en sus finanzas sería invadir su vida privada. Otro integrante del grupo propone avisarle directamente a un superior. Laura teme que eso haga que Martín se cierre todavía más.',
        'Nadie sabe con certeza cuánto apuesta, cuánto perdió ni si tiene deudas. Lo único que conocen son los cambios que fueron observando.'
      ]
    }
  };

  const QUESTIONS_DATA = [
    {
      id: 'answer_q1',
      number: 'Pregunta 1',
      title: 'Diagnóstico de la situación',
      prompt: '¿Cuáles son las principales señales de alerta y el error de apreciación o ilusión de control que comete el protagonista?'
    },
    {
      id: 'answer_q2',
      number: 'Pregunta 2',
      title: 'Impacto y consecuencias',
      prompt: '¿Qué consecuencias inmediatas y futuras puede tener esta decisión sobre su economía familiar, su bienestar emocional y su función policial?'
    },
    {
      id: 'answer_q3',
      number: 'Pregunta 3',
      title: 'Plan de contención: FRENAR y ORDENAR',
      prompt: '¿Qué medidas concretas y urgentes debería tomar la persona hoy mismo para detener el desfasaje y comenzar a ordenar sus números?'
    },
    {
      id: 'answer_q4',
      number: 'Pregunta 4',
      title: 'Red de apoyo y camaradería: PEDIR AYUDA',
      prompt: '¿A qué canales oficiales o asesoramiento legal y profesional recomendarían recurrir, y cómo debería actuar el grupo de camaradas para acompañar sin juzgar?'
    },
    {
      id: 'answer_q5',
      number: 'Pregunta 5',
      title: 'Criterio de discernimiento personal',
      prompt: 'Pensando en la propia vida cotidiana de ustedes, ¿qué aprendizaje o regla práctica les deja este caso para la prevención financiera familiar?'
    }
  ];

  const CLUES_LIST = [
    '¿Qué ingreso futuro ya está comprometido por las cuotas y compromisos previos?',
    '“Si hago esto hoy, ¿qué posibilidades me abre o me cierra mañana?”',
    '¿Esta decisión responde a una necesidad básica o a un deseo que puede esperar?',
    '¿Qué información financiera todavía no conocen con precisión (tasas, CFT, plazo total)?',
    '¿Se está considerando el límite de la tarjeta como si fuera un ingreso propio?',
    '¿Se está pagando el mínimo o refinanciando deuda con más deuda (efecto bola de nieve)?',
    '¿La persona está apostando para recuperar pérdidas pasadas? (La apuesta nunca es un plan de recuperación)',
    '¿Cuál de las opciones resuelve el problema de hoy pero debilita el margen de mañana?',
    '¿Qué alternativas permitirían FRENAR, ORDENAR y PEDIR AYUDA antes de empeorar la situación?',
    '¿Cómo podemos acompañar a un compañero sin juzgarlo ni prestarle dinero que prolongue el problema?'
  ];

  const STORAGE_KEY = 'capacitacion_policia_cba_v2';
  const TOTAL_WORKSHOP_SECONDS = 30 * 60; // 30 minutos

  // ==========================================
  // 2. ESTADO INICIAL Y PERSISTENCIA
  // ==========================================
  let state = {
    currentScreen: 1,
    assignedCaseId: null,
    timerStarted: false,
    timerStartTimestamp: null,
    answers: {
      answer_q1: '',
      answer_q2: '',
      answer_q3: '',
      answer_q4: '',
      answer_q5: ''
    }
  };

  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = {
          ...state,
          ...parsed,
          answers: { ...state.answers, ...(parsed.answers || {}) }
        };
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

  // Pantalla 2
  const caseSelectCards = document.querySelectorAll('.case-select-card');
  const btnSelectCaseList = document.querySelectorAll('.btn-select-case');
  const btnBackToStart = document.getElementById('btnBackToStart');

  // Pantalla 3
  const resCaseBadge = document.getElementById('resCaseBadge');
  const resCaseTitle = document.getElementById('resCaseTitle');
  const resCaseSubtitle = document.getElementById('resCaseSubtitle');
  const resCaseNarrative = document.getElementById('resCaseNarrative');
  const btnChangeCase = document.getElementById('btnChangeCase');
  const btnBackToCaseSelect = document.getElementById('btnBackToCaseSelect');
  const btnSubmitResolution = document.getElementById('btnSubmitResolution');

  // Pantalla 4
  const devolucionReportContainer = document.getElementById('devolucionReportContainer');
  const btnCopyReport = document.getElementById('btnCopyReport');
  const btnCopyReportText = document.getElementById('btnCopyReportText');
  const btnPrintReport = document.getElementById('btnPrintReport');
  const btnEditAnswers = document.getElementById('btnEditAnswers');

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
    if (!timerClock) return;
    timerClock.textContent = formatTime(remainingSeconds);

    const percentElapsed = Math.min(100, Math.max(0, ((TOTAL_WORKSHOP_SECONDS - remainingSeconds) / TOTAL_WORKSHOP_SECONDS) * 100));
    if (timerProgressBar) {
      timerProgressBar.style.width = `${percentElapsed}%`;
    }

    if (!timerGuideMessage) return;
    if (remainingSeconds > 1200) {
      timerGuideMessage.textContent = 'Lean y debatan el caso en equipo.';
    } else if (remainingSeconds > 600) {
      timerGuideMessage.textContent = 'Registren respuestas y evalúen consecuencias.';
    } else if (remainingSeconds > 300) {
      timerGuideMessage.textContent = 'Continúen respondiendo las consignas clave.';
    } else if (remainingSeconds > 0) {
      timerGuideMessage.textContent = 'Preparen las conclusiones para enviar la resolución.';
    } else {
      timerGuideMessage.textContent = 'Tiempo concluido. Finalicen sus respuestas y envíen para ver la devolución.';
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

    if (timerWrapper) timerWrapper.style.display = 'block';

    if (timerInterval) clearInterval(timerInterval);

    const currentRemaining = calculateRemainingSeconds();
    updateTimerUI(currentRemaining);

    timerInterval = setInterval(() => {
      const remaining = calculateRemainingSeconds();
      updateTimerUI(remaining);
      if (remaining <= 0) {
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
    if (step > 4) step = 4;

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

    if (currentStepNum) currentStepNum.textContent = step;

    // Mostrar cabecera del timer a partir del paso 2 o si ya fue iniciado
    if (timerWrapper) {
      if (step > 1 || state.timerStarted) {
        timerWrapper.style.display = 'block';
      } else {
        timerWrapper.style.display = 'none';
      }
    }

    // Acciones específicas por pantalla
    if (step === 2) {
      highlightActiveCaseInGrid();
    } else if (step === 3) {
      renderScreen3Resolution();
    } else if (step === 4) {
      renderScreen4Devolucion();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Resaltar el caso seleccionado en la grilla de selección
  function highlightActiveCaseInGrid() {
    caseSelectCards.forEach(card => {
      const cardCaseId = parseInt(card.dataset.selectCase, 10);
      if (state.assignedCaseId && cardCaseId === state.assignedCaseId) {
        card.classList.add('is-selected-case');
      } else {
        card.classList.remove('is-selected-case');
      }
    });
  }

  // Seleccionar caso activo
  function selectCase(caseId) {
    if (!CASES_DATA[caseId]) return;
    state.assignedCaseId = caseId;
    saveCurrentState();
    goToScreen(3);
  }

  // ==========================================
  // 6. RENDERIZADO DE PANTALLAS 3 Y 4
  // ==========================================
  function renderScreen3Resolution() {
    if (!state.assignedCaseId || !CASES_DATA[state.assignedCaseId]) {
      // Si por alguna razón no hay caso asignado, default a caso 1
      state.assignedCaseId = 1;
      saveCurrentState();
    }

    const cData = CASES_DATA[state.assignedCaseId];

    if (resCaseBadge) resCaseBadge.textContent = `${cData.number} SELECCIONADO`;
    if (resCaseTitle) resCaseTitle.textContent = `${cData.number} — ${cData.title}`;
    if (resCaseSubtitle) resCaseSubtitle.textContent = cData.subtitle;

    if (resCaseNarrative) {
      resCaseNarrative.innerHTML = '';
      cData.paragraphs.forEach(pText => {
        const p = document.createElement('p');
        p.textContent = pText;
        resCaseNarrative.appendChild(p);
      });
    }

    restoreFormAnswers();
  }

  function renderScreen4Devolucion() {
    const cData = CASES_DATA[state.assignedCaseId] || CASES_DATA[1];

    let html = `
      <div class="report-meta-header">
        <div class="report-badge-row">
          <span class="badge-assigned">${cData.number}</span>
          <span class="report-date-badge">Capacitación Institucional Policial</span>
        </div>
        <h3 class="report-case-title">${cData.number} — ${cData.title}</h3>
        <p class="report-case-subtitle">${cData.subtitle}</p>
      </div>

      <div class="report-case-narrative-box">
        <h4 class="report-box-label">Relato de la situación analizada:</h4>
        <div class="report-narrative-text">
          ${cData.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('')}
        </div>
      </div>

      <div class="report-section-divider">
        <h4 class="report-section-title">RESPUESTAS Y ANÁLISIS DEL EQUIPO DE TRABAJO</h4>
      </div>

      <div class="report-qa-stack">
    `;

    QUESTIONS_DATA.forEach(q => {
      const rawAns = (state.answers && state.answers[q.id]) ? state.answers[q.id].trim() : '';
      const hasAns = rawAns.length > 0;

      html += `
        <article class="qa-response-card">
          <div class="qa-card-header">
            <span class="qa-number-badge">${q.number}</span>
            <h5 class="qa-title">${escapeHtml(q.title)}</h5>
          </div>
          <p class="qa-prompt-text">${escapeHtml(q.prompt)}</p>
          <div class="qa-answer-wrapper">
            ${hasAns 
              ? `<div class="qa-user-answer">${escapeHtml(rawAns)}</div>` 
              : `<div class="qa-user-answer-empty">Sin respuesta registrada por el equipo.</div>`
            }
          </div>
        </article>
      `;
    });

    html += `
      </div>
    `;

    if (devolucionReportContainer) {
      devolucionReportContainer.innerHTML = html;
    }
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
  // 7. AUTOSAVE Y RESTAURACIÓN DE FORMULARIO
  // ==========================================
  function restoreFormAnswers() {
    if (!state.answers) state.answers = {};
    QUESTIONS_DATA.forEach(q => {
      const textarea = document.getElementById(q.id);
      if (textarea && state.answers[q.id] !== undefined) {
        textarea.value = state.answers[q.id];
      }
    });
  }

  QUESTIONS_DATA.forEach(q => {
    const textarea = document.getElementById(q.id);
    if (textarea) {
      textarea.addEventListener('input', (e) => {
        if (!state.answers) state.answers = {};
        state.answers[q.id] = e.target.value;
        saveCurrentState();
      });
    }
  });

  // ==========================================
  // 8. ACCIONES DE COPIADO E IMPRESIÓN
  // ==========================================
  function copyFullReport() {
    const cData = CASES_DATA[state.assignedCaseId] || CASES_DATA[1];

    let textToCopy = `==========================================================\n`;
    textToCopy += `CAPACITACIÓN INSTITUCIONAL: EDUCACIÓN FINANCIERA Y APUESTAS ONLINE\n`;
    textToCopy += `Policía de la Provincia de Córdoba\n`;
    textToCopy += `==========================================================\n\n`;

    textToCopy += `CASO ANALIZADO: ${cData.number} — ${cData.title}\n`;
    textToCopy += `Subtítulo: ${cData.subtitle}\n\n`;

    textToCopy += `RELATO DE LA SITUACIÓN:\n`;
    cData.paragraphs.forEach(p => {
      textToCopy += `${p}\n\n`;
    });

    textToCopy += `----------------------------------------------------------\n`;
    textToCopy += `RESPUESTAS Y ANÁLISIS DEL EQUIPO DE TRABAJO:\n`;
    textToCopy += `----------------------------------------------------------\n\n`;

    QUESTIONS_DATA.forEach(q => {
      const ans = (state.answers && state.answers[q.id]) ? state.answers[q.id].trim() : '— Sin respuesta';
      textToCopy += `${q.number.toUpperCase()}: ${q.title}\n`;
      textToCopy += `Consigna: ${q.prompt}\n`;
      textToCopy += `Respuesta del equipo:\n${ans}\n\n`;
    });

    textToCopy += `----------------------------------------------------------\n`;
    textToCopy += `CRITERIO RECTOR:\n`;
    textToCopy += `“Si hago esto hoy, ¿qué posibilidades me abre o me cierra mañana?”\n`;
    textToCopy += `==========================================================\n`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showCopyFeedback();
      }).catch(err => {
        fallbackCopyText(textToCopy);
      });
    } else {
      fallbackCopyText(textToCopy);
    }
  }

  function fallbackCopyText(text) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    tempTextArea.style.position = 'fixed';
    tempTextArea.style.left = '-9999px';
    document.body.appendChild(tempTextArea);
    tempTextArea.focus();
    tempTextArea.select();
    try {
      document.execCommand('copy');
      showCopyFeedback();
    } catch (e) {
      alert('Por favor copie el texto manualmente desde la pantalla.');
    }
    document.body.removeChild(tempTextArea);
  }

  function showCopyFeedback() {
    if (!btnCopyReportText) return;
    const originalText = btnCopyReportText.textContent;
    btnCopyReportText.textContent = '¡Informe copiado al portapapeles!';
    btnCopyReport.classList.add('btn-copied-success');
    setTimeout(() => {
      btnCopyReportText.textContent = originalText;
      btnCopyReport.classList.remove('btn-copied-success');
    }, 2800);
  }

  if (btnCopyReport) {
    btnCopyReport.addEventListener('click', copyFullReport);
  }

  if (btnPrintReport) {
    btnPrintReport.addEventListener('click', () => {
      window.print();
    });
  }

  if (btnEditAnswers) {
    btnEditAnswers.addEventListener('click', () => {
      goToScreen(3);
    });
  }

  // ==========================================
  // 9. EVENT LISTENERS DE FLUJO Y NAVEGACIÓN
  // ==========================================
  // Pantalla 1
  if (btnStartWorkshop) {
    btnStartWorkshop.addEventListener('click', () => {
      startTimer();
      goToScreen(2);
    });
  }

  // Pantalla 2: Selección de caso
  caseSelectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-select-case')) return;
      const caseId = parseInt(card.dataset.selectCase, 10);
      selectCase(caseId);
    });
  });

  btnSelectCaseList.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const caseId = parseInt(btn.dataset.selectCase, 10);
      selectCase(caseId);
    });
  });

  if (btnBackToStart) {
    btnBackToStart.addEventListener('click', () => {
      goToScreen(1);
    });
  }

  // Pantalla 3: Resolución
  if (btnChangeCase) {
    btnChangeCase.addEventListener('click', () => {
      goToScreen(2);
    });
  }

  if (btnBackToCaseSelect) {
    btnBackToCaseSelect.addEventListener('click', () => {
      goToScreen(2);
    });
  }

  if (btnSubmitResolution) {
    btnSubmitResolution.addEventListener('click', () => {
      saveCurrentState();
      goToScreen(4);
    });
  }

  // ==========================================
  // 10. MODAL DE PISTAS (PREGUNTAS ORIENTADORAS)
  // ==========================================
  let lastClueIndex = -1;

  function showRandomClue() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * CLUES_LIST.length);
    } while (newIndex === lastClueIndex && CLUES_LIST.length > 1);

    lastClueIndex = newIndex;
    if (clueQuestionText) {
      clueQuestionText.textContent = `“${CLUES_LIST[newIndex]}”`;
    }
  }

  if (btnOpenClue) {
    btnOpenClue.addEventListener('click', () => {
      showRandomClue();
      if (modalClue) modalClue.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  if (btnNextClue) {
    btnNextClue.addEventListener('click', () => {
      showRandomClue();
    });
  }

  function closeClueModal() {
    if (modalClue) modalClue.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (btnCloseClue) btnCloseClue.addEventListener('click', closeClueModal);
  if (btnDismissClue) btnDismissClue.addEventListener('click', closeClueModal);

  // ==========================================
  // 11. MODAL DE CONCEPTOS PARA RECORDAR
  // ==========================================
  if (btnOpenConcepts) {
    btnOpenConcepts.addEventListener('click', () => {
      if (modalConcepts) modalConcepts.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  function closeConceptsModal() {
    if (modalConcepts) modalConcepts.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (btnCloseConcepts) btnCloseConcepts.addEventListener('click', closeConceptsModal);
  if (btnDismissConcepts) btnDismissConcepts.addEventListener('click', closeConceptsModal);

  // Filtros temáticos del Marco Teórico
  const theoryTabBtns = document.querySelectorAll('.theory-tab-btn');
  const theoryCards = document.querySelectorAll('.theory-module-card');

  theoryTabBtns.forEach(tab => {
    tab.addEventListener('click', () => {
      theoryTabBtns.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-theory-filter');

      theoryCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // ==========================================
  // 12. REINICIO DE LA ACTIVIDAD
  // ==========================================
  if (btnResetActivity) {
    btnResetActivity.addEventListener('click', () => {
      if (modalResetConfirm) modalResetConfirm.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  function closeResetModal() {
    if (modalResetConfirm) modalResetConfirm.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (btnCancelReset) btnCancelReset.addEventListener('click', closeResetModal);
  if (btnAbortReset) btnAbortReset.addEventListener('click', closeResetModal);

  if (btnConfirmReset) {
    btnConfirmReset.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEY);

      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      state = {
        currentScreen: 1,
        assignedCaseId: null,
        timerStarted: false,
        timerStartTimestamp: null,
        answers: {
          answer_q1: '',
          answer_q2: '',
          answer_q3: '',
          answer_q4: '',
          answer_q5: ''
        }
      };

      QUESTIONS_DATA.forEach(q => {
        const el = document.getElementById(q.id);
        if (el) el.value = '';
      });

      closeResetModal();

      if (timerWrapper) timerWrapper.style.display = 'none';
      if (timerProgressBar) timerProgressBar.style.width = '0%';
      if (timerClock) timerClock.textContent = '30:00';

      goToScreen(1);
    });
  }

  // Cerrar modales con tecla Escape y clic en backdrop
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeClueModal();
      closeConceptsModal();
      closeResetModal();
      closeAllResourceModals();
    }
  });

  [modalClue, modalConcepts, modalResetConfirm].forEach(backdrop => {
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          closeClueModal();
          closeConceptsModal();
          closeResetModal();
        }
      });
    }
  });

  // ==========================================
  // 13. VENTANAS MODALES DE RECURSOS (POR NECESIDAD)
  // ==========================================
  const resourceModals = document.querySelectorAll('.modal-resource-backdrop');

  function openResourceModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      const closeBtn = targetModal.querySelector('.btn-close-modal') || targetModal.querySelector('[data-close-modal]');
      if (closeBtn) closeBtn.focus();
    }
  }

  function closeAllResourceModals() {
    resourceModals.forEach(modal => {
      modal.style.display = 'none';
    });
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-open-modal');
      if (targetId) {
        openResourceModal(targetId);
      }
    });
  });

  document.querySelectorAll('.modal-resource-backdrop [data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const parentModal = btn.closest('.modal-resource-backdrop');
      if (parentModal) {
        parentModal.style.display = 'none';
        const anyOpen = Array.from(resourceModals).some(m => m.style.display === 'flex');
        if (!anyOpen) {
          document.body.style.overflow = '';
        }
      }
    });
  });

  resourceModals.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.style.display = 'none';
        const anyOpen = Array.from(resourceModals).some(m => m.style.display === 'flex');
        if (!anyOpen) {
          document.body.style.overflow = '';
        }
      }
    });
  });

  // ==========================================
  // 14. INICIALIZACIÓN GENERAL
  // ==========================================
  restoreFormAnswers();

  if (state.timerStarted) {
    startTimer();
  }

  goToScreen(state.currentScreen || 1);

});
