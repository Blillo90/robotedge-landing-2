'use client'
import { useState } from 'react'

const faqs = [
  {
    q: '¿Necesito saber programar para hacer este curso?',
    a: 'No. El curso está diseñado para traders sin experiencia en programación. Aprenderás exactamente lo que necesitas para construir y automatizar tu sistema, paso a paso, sin asumir conocimientos previos.',
  },
  {
    q: '¿Esto realmente funciona o es otro curso de trading más?',
    a: 'Los resultados están verificados en cuenta real a través de Kinfo. No son capturas de pantalla editadas ni backtests teóricos: son operaciones reales ejecutadas por el sistema que aprenderás a construir. +48.26% de retorno, 64.94% de operaciones ganadoras, drawdown máximo inferior al 15%.',
  },
  {
    q: '¿Cuánto tiempo necesito dedicar por semana?',
    a: 'Con 5-8 horas semanales es suficiente para seguir el ritmo del curso. No necesitas estar delante de las pantallas todo el día: el objetivo es precisamente construir un sistema que opere sin ti.',
  },
  {
    q: '¿Con cuánto capital puedo empezar?',
    a: 'Puedes empezar con el capital que estés dispuesto a arriesgar. El sistema funciona con cuentas pequeñas y escala cuando tienes confianza en él. Lo importante es validar primero en demo antes de operar con dinero real.',
  },
  {
    q: '¿Qué pasa si ya tengo experiencia en trading?',
    a: 'Mejor. Tendrás contexto de mercado que te ayudará a entender más rápido el porqué de cada decisión. Muchos traders con experiencia descubren aquí lo que les faltaba para pasar de resultados irregulares a un sistema consistente.',
  },
  {
    q: '¿Hay soporte si tengo dudas durante el proceso?',
    a: 'Sí. Tendrás acceso a la comunidad y a sesiones de seguimiento donde puedes resolver dudas sobre tu sistema específico. No te quedas solo con el material.',
  },
  {
    q: '¿Se puede acceder desde cualquier país?',
    a: 'Sí. El curso es completamente online, solo necesitas conexión a internet. Puedes seguirlo desde cualquier país sin restricciones.',
  },
  {
    q: '¿Puedo ir a mi ritmo de forma autónoma?',
    a: 'Sí. El curso está diseñado para que puedas avanzar a tu ritmo, sin presión y con acompañamiento real. Tienes acceso completo al contenido desde el primer día y puedes verlo cuando quieras.',
  },
  {
    q: '¿Tendré contacto directo con Pablo Llobregat?',
    a: 'Sí. Pablo realiza sesiones en directo con los alumnos donde podrás interactuar directamente, hacer preguntas y resolver dudas sobre tu caso concreto. El acompañamiento personalizado es una parte fundamental del método.',
  },
  {
    q: '¿Si ya soy trader discrecional rentable, para qué sirve este curso?',
    a: 'Si ya obtienes resultados, enhorabuena. Aun así, creemos que si quieres una carrera larga y consistente, el salto hacia el trading algorítmico es lo que marca la diferencia. Usar la programación para agilizar tu backtesting ya justifica el curso por sí solo.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}>
            Preguntas frecuentes
          </span>
          <div className="flex-1 h-px" style={{ background: '#E5E5E5' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <h2
            className="font-bold lg:sticky lg:top-24"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3.5vw, 44px)',
              letterSpacing: '-0.03em',
              color: '#111111',
            }}
          >
            Las dudas que tienes antes de empezar.{' '}
            <span style={{ color: '#148AFF' }}>Resueltas.</span>
          </h2>

          <div style={{ borderTop: '1px solid #E5E5E5' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: '1px solid #E5E5E5' }}>
                <button
                  className="w-full flex items-start justify-between gap-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-semibold leading-snug"
                    style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
                    {f.q}
                  </span>
                  <span
                    className="shrink-0 w-5 h-5 flex items-center justify-center text-sm font-bold"
                    style={{
                      color: '#148AFF',
                      transition: 'transform 0.2s',
                      transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                    }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <p className="pb-5 text-sm leading-relaxed" style={{ color: '#555555' }}>
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
