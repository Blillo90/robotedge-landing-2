const steps = [
  {
    number: '01',
    title: 'Entiendes cómo funciona un sistema de trading',
    duration: 'Semana 1',
    description:
      'Antes de escribir una línea de código, aprendes qué hace que un sistema sea sólido: lógica de entrada y salida, gestión del riesgo, condiciones de mercado. Los cimientos correctos desde el principio.',
  },
  {
    number: '02',
    title: 'Diseñas tu primera estrategia con reglas claras',
    duration: 'Semana 2',
    description:
      'Transformas una idea de mercado en reglas objetivas y testeables. Sin ambigüedad, sin "depende". Si entra, cuándo sale, cuánto arriesga. Todo definido antes de mirar un solo dato histórico.',
  },
  {
    number: '03',
    title: 'Validas la estrategia con datos históricos reales',
    duration: 'Semana 3–4',
    description:
      'Haces backtesting con miles de escenarios. Ves exactamente cómo habría funcionado tu sistema en los últimos años. Aprendes a interpretar los resultados y a distinguir un edge real de un artefacto estadístico.',
  },
  {
    number: '04',
    title: 'Construyes el robot que ejecuta las reglas',
    duration: 'Semana 5–6',
    description:
      'Automatizas la estrategia validada. El robot entra, gestiona y sale según las reglas que tú definiste. Sin intervención manual, sin emociones, sin excusas para saltarse el sistema.',
  },
  {
    number: '05',
    title: 'Pruebas en demo antes de arriesgar capital real',
    duration: 'Semana 7',
    description:
      'El sistema opera en paper trading durante semanas. Verificas que el comportamiento real coincide con el backtest. Identificas errores sin coste. Solo cuando todo cuadra, das el siguiente paso.',
  },
  {
    number: '06',
    title: 'Lanzas en cuenta real con gestión de riesgo definida',
    duration: 'Semana 8+',
    description:
      'Empiezas con el capital que decides arriesgar y las reglas de gestión que ya tienes validadas. El robot opera. Tú supervisas. El sistema trabaja mientras vives tu vida.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#F97316' }}>
            Cómo funciona
          </span>
          <div className="flex-1 h-px" style={{ background: '#E5E5E5' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
          <h2
            className="font-bold"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3.5vw, 44px)',
              letterSpacing: '-0.03em',
              color: '#111111',
            }}
          >
            De cero al primer robot operando en cuenta real.{' '}
            <span style={{ color: '#F97316' }}>En 8 semanas.</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#555555' }}>
            Sin atajos. Sin promesas absurdas. Un proceso paso a paso que puedes
            seguir aunque nunca hayas programado en tu vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: '#E5E5E5' }}>
          {steps.map((s) => (
            <div key={s.number} className="p-8 flex flex-col gap-4" style={{ background: '#FFFFFF' }}>
              <div className="flex items-start justify-between gap-4">
                <p
                  className="text-4xl font-bold leading-none"
                  style={{ fontFamily: 'var(--font-display)', color: '#F3F3F1', letterSpacing: '-0.04em' }}
                >
                  {s.number}
                </p>
                <span
                  className="text-xs font-medium px-2 py-1 shrink-0"
                  style={{ fontFamily: 'var(--font-mono)', background: '#F5F5F3', color: '#888888', border: '1px solid #E5E5E5' }}
                >
                  {s.duration}
                </span>
              </div>
              <h3 className="text-sm font-semibold leading-snug"
                style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
