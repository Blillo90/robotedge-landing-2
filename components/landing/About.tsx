const trustPoints = [
  { label: 'Resultados verificables', value: 'Track record auditado y público' },
  { label: 'Enseña lo que aplica',    value: 'Sistemas reales en operativa diaria' },
  { label: 'Sin promesas vacías',     value: 'Proceso riguroso, no atajos' },
  { label: 'Acompañamiento real',     value: 'Sesiones en directo con Pablo' },
]

export default function About() {
  return (
    <section id="sobre-pablo" className="py-24 px-6" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}>
            Quién enseña esto
          </span>
          <div className="flex-1 h-px" style={{ background: '#E5E5E5' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="font-bold mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3.5vw, 44px)',
                letterSpacing: '-0.03em',
                color: '#111111',
                lineHeight: 1.1,
              }}
            >
              Soy Pablo Carbonell:{' '}
              <span style={{ color: '#148AFF' }}>trader algorítmico
              <br />con amplia experiencia</span> en los mercados.
            </h2>

            <p className="text-sm leading-relaxed mb-5" style={{ color: '#555555' }}>
              Pablo Carbonell lleva muchos años operando en los mercados con sistemas de trading
              algorítmico. Con resultados verificados y públicos, ha demostrado su capacidad para
              dominar las herramientas más avanzadas del mercado. Su amplia experiencia y
              conocimiento te guiarán a lo largo del curso para que también puedas dominar cada
              una de las herramientas que aprenderás.
            </p>

            <p className="text-sm leading-relaxed mb-5" style={{ color: '#555555' }}>
              En el curso tendrás la oportunidad de participar en sesiones en directo con Pablo,
              donde podrás interactuar directamente, hacer preguntas y resolver todas tus dudas.
              Aprenderás a diseñar algoritmos y sistemas que funcionan como los que él mismo opera
              en real. No enseña teoría: enseña lo que está haciendo y lo que funciona de verdad.
            </p>

            <p className="text-sm leading-relaxed" style={{ color: '#555555' }}>
              Adquirirás las habilidades necesarias para desarrollar tus propias estrategias
              automatizadas que competirán al más alto nivel. El curso parte desde cero y te
              lleva paso a paso hasta convertirte en un trader algorítmico con criterio propio.
            </p>
          </div>

          <dl className="overflow-hidden" style={{ border: '1px solid #E5E5E5' }}>
            {trustPoints.map((s, i) => (
              <div
                key={s.label}
                className="flex items-start justify-between gap-8 px-8 py-5"
                style={{ borderBottom: i < trustPoints.length - 1 ? '1px solid #E5E5E5' : undefined }}
              >
                <dt className="text-xs tracking-widest uppercase shrink-0 pt-0.5"
                  style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}>
                  {s.label}
                </dt>
                <dd className="text-sm font-medium text-right leading-snug" style={{ color: '#111111' }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
