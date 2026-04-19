const problems = [
  {
    number: '01',
    title: 'Trading emocional',
    description:
      'Las decisiones se toman en caliente: por miedo, por euforia, por ego. Aguantas más de lo que deberías porque "seguro que rebota". Cierras con pérdida mayor. Luego el precio va exactamente donde pensabas.',
  },
  {
    number: '02',
    title: 'Sin sistema validado',
    description:
      'Una idea sobre el mercado no es una estrategia. Sin reglas claras, sin backtesting, sin datos históricos, estás improvisando. Y la improvisación tiene un coste. Racha buena un mes, mala el siguiente, sin saber por qué.',
  },
  {
    number: '03',
    title: 'Sin gestión de riesgo real',
    description:
      'No saber exactamente cuánto arriesgar en cada operación es la forma más rápida de destruir una cuenta. La posición correcta no es intuición, es matemática. Sin esa matemática, un mes borra lo que tardaste un año en ganar.',
  },
]

export default function Problem() {
  return (
    <section className="py-6 px-6">
      <div className="max-w-6xl mx-auto overflow-hidden" style={{ background: '#111111' }}>
        <div className="px-8 md:px-14 py-16 md:py-20">

          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: '#EF4444' }}
            >
              El Problema
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
          </div>

          <div className="mb-14 max-w-2xl">
            <h2
              className="font-bold mb-5"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3.5vw, 44px)',
                color: '#FAFAF8',
                letterSpacing: '-0.03em',
              }}
            >
              La razón real por la que sigues perdiendo
              <br />
              <span style={{ fontWeight: 400, color: '#555555', fontSize: '0.82em' }}>
                — y no tiene nada que ver con el mercado
              </span>
            </h2>
            <p className="leading-relaxed text-sm" style={{ color: '#666666', maxWidth: '56ch' }}>
              Si llevas tiempo en los mercados, ya conoces este patrón: días buenos,
              semanas malas, sin saber por qué. No es el mercado. Es que estás jugando
              con las reglas equivocadas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {problems.map((p) => (
              <div key={p.number} className="p-8 flex flex-col gap-5" style={{ background: '#111111' }}>
                <p
                  className="text-4xl font-bold leading-none"
                  style={{ fontFamily: 'var(--font-display)', color: 'rgba(239,68,68,0.18)', letterSpacing: '-0.04em' }}
                >
                  {p.number}
                </p>
                <h3 className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#FAFAF8' }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{p.description}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-6 px-8 py-5"
            style={{ background: 'rgba(20,138,255,0.06)', borderLeft: '3px solid #148AFF' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: '#999999' }}>
              <span className="font-semibold" style={{ color: '#FAFAF8' }}>No fracasaste por ser malo en esto.</span>{' '}
              Fracasaste porque nadie te enseñó que el trading emocional es un juego
              amañado desde el principio. Los que ganan de forma consistente no son más
              inteligentes — tienen un sistema que opera sin ellos.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
