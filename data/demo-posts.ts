import type { Post } from '@/types'

export const demoPosts: Post[] = [
  {
    id: 'demo-1',
    title: 'Cómo construí mi primer robot de trading en Python paso a paso',
    slug: 'primer-robot-trading-python',
    cover_image: null,
    excerpt:
      'Desde la idea hasta el bot operando en live: te cuento exactamente qué hice, qué errores cometí y cómo evitarlos.',
    content: `
<h2>Por qué la mayoría fracasa con el trading manual</h2>
<p>El problema no es la falta de talento ni de información. El mercado está lleno de traders inteligentes que pierden dinero sistemáticamente. La causa real es estructural: las decisiones emocionales introducen un sesgo que ningún ser humano puede eliminar por completo.</p>
<p>Un robot de trading no tiene ego. No tiene miedo de perder, no tiene codicia cuando el mercado sube, no sale de una posición ganadora antes de tiempo porque "prefiere asegurar". Ejecuta las reglas exactamente como se definieron — las 24 horas del día, los 7 días de la semana.</p>

<h2>Los tres componentes de un sistema algorítmico</h2>
<ul>
  <li><strong>La señal</strong>: la lógica que determina cuándo entrar y salir del mercado.</li>
  <li><strong>La gestión de riesgo</strong>: el tamaño de cada posición, el stop loss, el drawdown máximo permitido.</li>
  <li><strong>La ejecución</strong>: la conexión con el broker, el manejo de órdenes, los logs.</li>
</ul>

<h2>El proceso correcto: de la idea al live trading</h2>
<ol>
  <li><strong>Define la hipótesis</strong>: ¿Qué ineficiencia del mercado intentas explotar?</li>
  <li><strong>Datos históricos de calidad</strong>: Los resultados del backtesting son tan buenos como los datos que usas.</li>
  <li><strong>Backtesting sin overfitting</strong>: Usa walk-forward testing, divide en in-sample y out-of-sample.</li>
  <li><strong>Paper trading</strong>: Antes de arriesgar dinero real, ejecuta la estrategia en simulado durante al menos 4-6 semanas.</li>
  <li><strong>Live con tamaño mínimo</strong>: El primer mes en real, usa el mínimo posible.</li>
</ol>

<h2>Python como punto de partida</h2>
<p>Python se ha convertido en el estándar de facto para el trading algorítmico: <code>pandas</code> para datos, <code>vectorbt</code> para backtesting, <code>ccxt</code> para exchanges.</p>

<blockquote>
  El objetivo no es tener razón. El objetivo es tener un proceso repetible que, aplicado con consistencia, genere una ventaja estadística sobre el tiempo.
</blockquote>
    `.trim(),
    published: true,
    created_at: '2025-04-07T00:00:00Z',
    updated_at: '2025-04-07T00:00:00Z',
  },
]
