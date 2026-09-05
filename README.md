# Capacitación Provincial: Educación Financiera y Apuestas Online

Plataforma web educativa, responsive y sobria, diseñada para **personal policial adulto de la Provincia de Córdoba, Argentina**, para ser utilizada durante un taller presencial de capacitación grupal.

---

## 1. Contexto Pedagógico y Metodológico

La capacitación general dura **80 minutos** y está estructurada en tres momentos:

1. **Exposición teórica presencial del capacitador:** 40 minutos.
2. **Trabajo en equipos de 3 o 4 personas utilizando esta web:** 30 minutos.
3. **Puesta en común y cierre presencial:** 10 minutos.

> **Importante:** La web NO es un curso teórico autosuficiente ni repite la exposición del capacitador. Funciona como una herramienta para **organizar, guiar y enriquecer el análisis grupal de casos**.

### Ejes Formativos
- **Sin moralismo ni respuestas correctas:** El objetivo no es juzgar decisiones ajenas ni decir cómo gastar el dinero, sino comprender decisiones cotidianas, cadenas de riesgo y margen de maniobra futuro.
- **Eje metodológico transversal:**
  $$\text{PARAR} \longrightarrow \text{MIRAR} \longrightarrow \text{DECIDIR}$$
- **Idea central:**
  *“Las pequeñas decisiones pueden tener grandes consecuencias. Cuidar nuestras finanzas también es cuidar nuestro margen para decidir.”*
- **Pregunta de cierre:**
  *“Si hago esto hoy, ¿qué posibilidades me abre o me cierra mañana?”*

---

## 2. Estructura del Recorrido (11 Pantallas)

1. **Pantalla 1 — Inicio:** Título, tiempo estipulado (30 min) y objetivo pedagógico. Botón de inicio que activa el cronómetro.
2. **Pantalla 2 — Organización del Equipo:** Asignación de roles diferenciados (*Coordinador/a* y *Quien toma nota*) y recomendación de priorizar el debate sobre completar todo.
3. **Pantalla 3 — Asignación del Caso:** Presentación sobria de los 4 casos y asignación aleatoria seria (sin elementos de azar o ruletas).
4. **Pantalla 4 — Lectura del Caso:** Presentación exclusiva del relato asignado (Sebastián, Verónica, Nicolás o Martín). Pauta de lectura completa antes de resolver.
5. **Pantalla 5 — PARAR:** Reconstrucción de los hechos, identificación de momentos clave y señales de alerta.
6. **Pantalla 6 — MIRAR:** Identificación de información faltante, datos indispensables antes de emitir opinión y disparadores de pensamiento (*Ingresos, Gastos, Deudas, Cuotas, Tiempo, Costo Total, Personas Involucradas, Consecuencias*).
7. **Pantalla 7 — DECIDIR:** Construcción de al menos 2 alternativas con análisis de resolución inmediata, corto plazo y mediano plazo (en meses).
8. **Pantalla 8 — Detenerse o Pedir Ayuda:** Análisis del punto de inflexión. Si el caso asignado es el 3 o 4 (apuestas), se muestra el esquema del ciclo de riesgo (*Perder → querer recuperar → volver a apostar → arriesgar más → aumentar pérdidas*).
9. **Pantalla 9 — Si fuera un compañero cercano:** Reflexión vincular y profesional sobre qué hacer, qué evitar y cómo comunicar respetuosamente sin generar rechazo.
10. **Pantalla 10 — Preparar la Puesta en Común:** Selección y síntesis de UNA sola idea, desacuerdo o pregunta para exponer en el plenario final.
11. **Pantalla 11 — Cierre y Hoja de Ruta:** Síntesis metodológica, frase rectora y panel con el resumen completo de notas del grupo (con opción de imprimir/guardar o reiniciar).

---

## 3. Características Técnicas

- **100% Estático y Autónomo:** Desarrollado con HTML5 semántico, CSS3 moderno y JavaScript puro (vanilla).
- **Sin Dependencias ni Conexión a Internet:** No utiliza librerías externas, fuentes remotas ni CDNs. Funciona completamente offline una vez cargado el archivo.
- **Privacidad Total:** No solicita datos personales, correos, nombres ni DNI. No envía datos a ningún servidor externo.
- **Persistencia Local (`localStorage`):** Guarda automáticamente en tiempo real las respuestas del equipo, el caso asignado y el estado del cronómetro ante recargas accidentales.
- **Diseño Responsive Mobile-First:** Adaptado a pantallas de teléfonos celulares (Android, iOS) y computadoras de escritorio, con botones táctiles de más de 48px y tipografía de alto contraste (estándar WCAG AAA).
- **Herramientas de Apoyo Permanentes:**
  - **Cronómetro de 30 minutos:** Con barra de progreso y mensajes de orientación por tramos (30-20 min, 20-10 min, últimos 5 min y cierre, sin alarmas molestas ni bloqueos).
  - **Botón "Pista":** Modal con preguntas orientadoras aleatorias que fomentan el análisis sin dar respuestas.
  - **Botón "Conceptos":** Acceso rápido a los 5 conceptos clave (*Ingreso futuro comprometido, Costo total, Reserva y margen, Perseguir las pérdidas, Pedir ayuda*).
  - **Pie de página oficial:** Recursos de consulta institucional (BCRA, Lotería de Córdoba - Juego Responsable, Línea 141).

---

## 4. Instrucciones de Ejecución

### Opción A: Ejecución directa (Recomendada y más simple)
Hacer doble clic sobre el archivo `index.html` en el explorador de archivos para abrirlo directamente en Google Chrome, Safari, Firefox o Edge.

### Opción B: Mediante servidor local simple
Si se prefiere servir a través de un servidor web local:
```bash
# Navegar a la carpeta del proyecto
cd /Users/morinimarcelo/.gemini/antigravity/scratch/capacitacion-financiera-policia

# Iniciar servidor ligero con Python 3
python3 -m http.server 8080
```
Luego, abrir el navegador en:
```text
http://localhost:8080
```

---

## 5. Estructura de Archivos

```text
capacitacion-financiera-policia/
├── index.html     # Estructura semántica de las 11 pantallas y modales
├── styles.css     # Estilos sobrios, mobile-first, variables institucionales
├── script.js      # Lógica de estados, casos, cronómetro, autosave y resumen
└── README.md      # Documentación pedagógica y técnica
```
