const features = [
  {
    number: '01',
    tag: 'Data-driven',
    title: 'Basado en Datos',
    description:
      'Cada decisión tiene un fundamento histórico. Antes de arriesgar un euro real, sabes cómo se habría comportado tu estrategia en miles de escenarios pasados. Sin suposiciones, solo evidencia.',
  },
  {
    number: '02',
    tag: 'Estadística aplicada',
    title: 'Probabilístico',
    description:
      'No buscamos certezas. Buscamos ventaja estadística: estrategias con esperanza matemática positiva, ejecutadas con la disciplina suficiente para que el edge se materialice en el tiempo.',
  },
  {
    number: '03',
    tag: 'Sin intervención manual',
    title: 'Automatizado',
    description:
      'Una vez validado, el sistema opera solo. Sin necesidad de estar pegado a la pantalla ni tomar decisiones bajo presión. El robot ejecuta las reglas; tú supervisas el proceso.',
  },
  {
    number: '04',
    tag: 'Proceso sistematizado',
    title: 'Replicable y Escalable',
    description:
      'Un sistema bien construido puede gestionarse, duplicarse y mejorarse con el tiempo. Aprendes a operar como un negocio, no como un apostador con suerte variable.',
  },
]

export default function Features() {
  return (
    <section id="metodo" className="py-24 px-6" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}>
            El Método
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
            Este es el método. Y funciona porque{' '}
            <span style={{ color: '#148AFF' }}>los números no mienten.</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#555555', maxWidth: '52ch' }}>
            No es intuición. No son señales. Es un robot que opera con reglas
            matemáticas exactas — las mismas que defines y validas tú antes de
            arriesgar un solo euro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: '#E5E5E5' }}>
          {features.map((f) => (
            <div key={f.number} className="p-8 flex flex-col gap-4" style={{ background: '#FFFFFF' }}>
              <p
                className="text-5xl font-bold leading-none"
                style={{ fontFamily: 'var(--font-display)', color: '#F3F3F1', letterSpacing: '-0.04em' }}
              >
                {f.number}
              </p>
              <span
                className="text-xs font-medium tracking-wider uppercase inline-block px-2 py-1 self-start"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: '#EFF6FF',
                  color: '#0E6FD4',
                  border: '1px solid #BFDBFE',
                }}
              >
                {f.tag}
              </span>
              <h3 className="text-sm font-semibold leading-snug"
                style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
