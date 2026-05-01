import Link from 'next/link'
import { BrainCircuit, Cpu, ShieldCheck, ArrowRight } from 'lucide-react'

export const metadata = {
  title: '¿Por qué RobotEdge? — La diferencia entre jugar y operar',
  description:
    'Descubre por qué RobotEdge reemplaza la intuición con ventaja estadística, usa NinjaTrader 8 como infraestructura profesional y aplica protocolos de validación rigurosa para construir robots de trading robustos.',
}

const blocks = [
  {
    number: '01',
    Icon: BrainCircuit,
    tag: 'Metodología cuantitativa',
    title: 'Ingeniería sobre Intuición: El Fin de la "Bola de Cristal"',
    paragraphs: [
      'La mayoría de los cursos de trading enseñan a "leer el mercado" como si fuera una ciencia oculta. Patrones, velas, niveles de soporte dibujados a mano — una mezcla de subjetividad y sesgo de confirmación que no se puede reproducir ni escalar.',
      'RobotEdge parte de una premisa distinta: las decisiones de trading deben tener fundamento matemático. No intuición. No la sensación de que el precio "va a subir". Ventaja estadística medible, expresada en probabilidades históricas verificables.',
    ],
    bullets: [
      'Sin predicciones, sin caza del "trade perfecto"',
      'Sistemas construidos con edge estadístico demostrable',
      'Decisiones respaldadas por datos históricos y probabilidades medibles',
      '"Este sistema tiene un 65 % de éxito histórico bajo estas condiciones" en lugar de "creo que el mercado sube"',
      'Especulación emocional sustituida por metodología cuantificable',
    ],
    closing:
      'El objetivo no es eliminar el riesgo — es entenderlo, medirlo y gestionarlo con rigor.',
  },
  {
    number: '02',
    Icon: Cpu,
    tag: 'Infraestructura profesional',
    title: 'NinjaTrader 8: El Estándar Profesional (Sin Picar Código)',
    paragraphs: [
      'NinjaTrader 8 es la plataforma de referencia para traders de futuros a nivel profesional. No es software de aficionado con funciones recortadas — es la infraestructura real que usan operadores institucionales: datos de mercado de calidad, conexiones a brokers regulados y entorno de ejecución estable.',
      'Y aquí está la parte que cambia las reglas del juego: no necesitas ser un desarrollador senior de C# para automatizar tus estrategias. El Strategy Builder y las herramientas de automatización visual de NinjaTrader permiten convertir lógica operativa en bots funcionales sin errores de sintaxis ni horas perdidas depurando código.',
    ],
    bullets: [
      'Herramientas reales de profesional, no software limitado para principiantes',
      'Automatización visual: de la idea operativa al bot funcional',
      'Datos de mercado de calidad institucional',
      'Conexión a brokers reales con infraestructura regulada',
      'Operaciones desacopladas de tener el PC encendido mediante VPS',
    ],
    closing:
      'No vendemos teoría. Entregamos una infraestructura operativa profesional completa, lista para funcionar.',
  },
  {
    number: '03',
    Icon: ShieldCheck,
    tag: 'Validación rigurosa',
    title: 'Validación de Estrategias: Blindaje contra el Overfitting',
    paragraphs: [
      'La mayoría de los robots de trading fallan por la misma razón: overfitting. El sistema funciona en el pasado porque ha sido ajustado con precisión quirúrgica a datos históricos — pero en el momento en que el mercado cambia un milímetro, se desmorona.',
      'El backtesting no es el punto de llegada, es solo el punto de partida. Antes de considerar operativo cualquier sistema, debe sobrevivir a un protocolo de validación avanzado que ponga a prueba su robustez real, no su belleza estadística en papel.',
    ],
    bullets: [
      'Monte Carlo: miles de simulaciones con variaciones aleatorias para testear la distribución de resultados',
      'Walk-Forward Validation: el sistema se entrena en una ventana y se valida en datos que nunca ha visto',
      'Pruebas de robustez ante cambios de volatilidad y condiciones de mercado distintas',
      'Si el sistema no supera estas pruebas, no se opera — sin excepciones',
      'Aprenderás a distinguir una curva de equity bonita pero falsa de un sistema genuinamente sólido',
    ],
    closing:
      'Construir un robot que funciona en el pasado es fácil. Construir uno que sobrevive al futuro requiere metodología.',
  },
]

export default function GuiaPage() {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }}>

      {/* Page header */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="flex items-center gap-4 mb-10">
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
          >
            Guía editorial
          </span>
          <div className="flex-1 h-px" style={{ background: '#E5E5E5' }} />
        </div>

        <div className="max-w-3xl">
          <h1
            className="font-bold mb-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#111111',
            }}
          >
            ¿Por qué RobotEdge?
          </h1>
          <p
            className="text-lg leading-relaxed font-medium mb-4"
            style={{ color: '#148AFF', fontFamily: 'var(--font-display)' }}
          >
            La diferencia entre jugar y operar.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: '#888888', maxWidth: '64ch', fontFamily: 'var(--font-body)' }}
          >
            El mercado no premia la intuición. Premia la consistencia, la disciplina y los sistemas
            que sobreviven a condiciones que nunca han visto antes. Esto es lo que separa el trading
            profesional del juego con dinero.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px w-full" style={{ background: '#E5E5E5' }} />
      </div>

      {/* Content blocks */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-8">
        {blocks.map((block) => {
          const Icon = block.Icon
          return (
            <article
              key={block.number}
              style={{ border: '1px solid #E5E5E5', background: '#FFFFFF' }}
            >
              {/* Block header */}
              <div
                className="px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{ borderBottom: '1px solid #E5E5E5', background: '#FAFAF8' }}
              >
                <p
                  className="text-5xl font-bold leading-none shrink-0"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: '#F0F0EE',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {block.number}
                </p>
                <div className="flex flex-col gap-2">
                  <span
                    className="text-xs font-medium tracking-wider uppercase inline-block px-2 py-1 self-start"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      background: '#EFF6FF',
                      color: '#0E6FD4',
                      border: '1px solid #BFDBFE',
                    }}
                  >
                    {block.tag}
                  </span>
                  <h2
                    className="font-bold leading-snug"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      color: '#111111',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {block.title}
                  </h2>
                </div>
                <div className="hidden sm:flex sm:ml-auto shrink-0">
                  <Icon size={32} style={{ color: '#148AFF', opacity: 0.25 }} aria-hidden />
                </div>
              </div>

              {/* Block body */}
              <div className="px-8 py-8 grid lg:grid-cols-[1fr_320px] gap-10">

                {/* Paragraphs */}
                <div className="flex flex-col gap-5">
                  {block.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed"
                      style={{ color: '#444444', fontFamily: 'var(--font-body)' }}
                    >
                      {p}
                    </p>
                  ))}
                  <p
                    className="text-sm leading-relaxed font-medium mt-2"
                    style={{ color: '#111111', fontFamily: 'var(--font-body)' }}
                  >
                    {block.closing}
                  </p>
                </div>

                {/* Bullet points */}
                <div
                  className="py-6 px-6 self-start"
                  style={{ background: '#F8F8F6', border: '1px solid #EBEBEA' }}
                >
                  <p
                    className="text-xs font-medium tracking-widest uppercase mb-4"
                    style={{ fontFamily: 'var(--font-mono)', color: '#888888' }}
                  >
                    Puntos clave
                  </p>
                  <ul className="flex flex-col gap-3">
                    {block.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: '#148AFF' }}
                          aria-hidden
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: '#555555', fontFamily: 'var(--font-body)' }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Closing CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div
          className="px-8 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8"
          style={{ border: '1px solid #E5E5E5', background: '#111111' }}
        >
          <div className="max-w-xl">
            <p
              className="text-xs font-medium tracking-widest uppercase mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
            >
              Siguiente paso
            </p>
            <h2
              className="font-bold text-white mb-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                letterSpacing: '-0.02em',
              }}
            >
              ¿Listo para operar con sistema?
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#AAAAAA', fontFamily: 'var(--font-body)' }}
            >
              Si buscas resultados rápidos sin trabajo, RobotEdge no es para ti. Si quieres
              construir una metodología real con ventaja estadística verificable, empieza aquí.
            </p>
          </div>
          <Link
            href="/#guia-gratuita"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white shrink-0 transition-opacity hover:opacity-90"
            style={{ background: '#148AFF', fontFamily: 'var(--font-display)' }}
          >
            Acceder al curso
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>

    </div>
  )
}
