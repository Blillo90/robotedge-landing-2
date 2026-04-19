const forYes = [
  'Llevas tiempo en los mercados pero los resultados son irregulares o negativos',
  'Has probado estrategias de terceros y ninguna encaja con tu perfil ni capital',
  'Quieres dejar de operar por instinto y empezar a operar con un sistema replicable',
  'No tienes conocimientos de programación pero estás dispuesto a aprender lo necesario',
  'Buscas construir un sistema que pueda operar sin estar pendiente de él 24 horas',
  'Tienes mentalidad de largo plazo y entiendes que la ventaja se construye, no se encuentra',
]

const forNo = [
  'Buscas un sistema que "gana siempre" o promesas de rentabilidad garantizada',
  'Quieres resultados sin proceso ni aprendizaje real',
  'No estás dispuesto a dedicar tiempo real a entender lo que vas a operar',
]

export default function WhoIsFor() {
  return (
    <section className="py-24 px-6" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#111111' }}>
            Para quién es
          </span>
          <div className="flex-1 h-px" style={{ background: '#E5E5E5' }} />
        </div>

        <h2
          className="font-bold mb-14"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3.5vw, 44px)',
            letterSpacing: '-0.03em',
            color: '#111111',
          }}
        >
          Antes de continuar: sé honesto contigo mismo.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ fontFamily: 'var(--font-mono)', color: '#15803D' }}>
              ✓ Este método es para ti si:
            </p>
            <ul className="space-y-4">
              {forYes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-xs font-bold"
                    style={{ background: '#F0FDF4', color: '#15803D', border: '1px solid #BBF7D0' }}
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#444444' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8" style={{ background: '#FAFAF8', border: '1px solid #E5E5E5' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ fontFamily: 'var(--font-mono)', color: '#DC2626' }}>
              ✕ Este método NO es para ti si:
            </p>
            <ul className="space-y-4">
              {forNo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-xs font-bold"
                    style={{ background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA' }}
                  >
                    ✕
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#666666' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
