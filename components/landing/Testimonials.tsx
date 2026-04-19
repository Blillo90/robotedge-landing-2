import Link from 'next/link'

const reviews = [
  {
    name: 'Bernardo Aguayo',
    date: 'Hace 2 meses',
    rating: 5,
    text: 'Llevaba años intentando operar de forma consistente sin lograrlo. El curso me dio el marco que me faltaba: cómo construir un sistema con lógica real, validarlo antes de arriesgar dinero y automatizarlo. Por primera vez entiendo lo que estoy haciendo y por qué funciona.',
  },
  {
    name: 'Mariano',
    date: 'Hace 3 meses',
    rating: 5,
    text: 'No tenía ningún conocimiento de programación y aun así pude seguir el proceso completo. Lo que más me sorprendió es que no te venden magia: te enseñan a construir ventaja estadística real y a operar con disciplina. El robot lleva semanas funcionando en demo y los resultados coinciden con el backtest.',
  },
  {
    name: 'Miguel B. Aguado',
    date: 'Hace 1 mes',
    rating: 5,
    text: 'Claridad total desde el primer módulo. Por fin entiendo la diferencia entre una idea de trading y un sistema de trading. El proceso de backtesting y la gestión del riesgo son los puntos que más valor me han aportado. Recomendable para cualquiera que quiera dejar de improvisar.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <rect width="16" height="16" fill="#00B67A" />
          <path d="M8 3l1.2 3.6H13l-3 2.2 1.1 3.4L8 10l-3.1 2.2L6 8.8 3 6.6h3.8L8 3z" fill="white" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#111111' }}>
            Opiniones reales
          </span>
          <div className="flex-1 h-px" style={{ background: '#E5E5E5' }} />
          <Link
            href="https://es.trustpilot.com/review/robotedge.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium shrink-0 transition-opacity hover:opacity-70"
            style={{ fontFamily: 'var(--font-mono)', color: '#00B67A' }}
          >
            Ver en Trustpilot →
          </Link>
        </div>

        <h2
          className="font-bold mb-14"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 3vw, 40px)',
            letterSpacing: '-0.03em',
            color: '#111111',
          }}
        >
          Lo que dicen los que ya construyeron su sistema.
        </h2>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: '#E5E5E5' }}>
          {reviews.map((r) => (
            <div key={r.name} className="p-8 flex flex-col gap-5" style={{ background: '#FAFAF8' }}>
              <Stars count={r.rating} />
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#333333' }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #E5E5E5' }}>
                <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
                  {r.name}
                </p>
                <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: '#AAAAAA' }}>
                  {r.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
