'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

function HeroForm() {
  const [status, setStatus]   = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const emailRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = emailRef.current?.value.trim() ?? ''
    if (!email) return
    setStatus('loading')
    try {
      const res  = await fetch('/api/lead', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      })
      const json = await res.json() as { success?: boolean; error?: string }
      if (!res.ok || !json.success) {
        setStatus('error')
        setMessage(json.error ?? 'Algo salió mal.')
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
      setMessage('Error de conexión.')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="py-4 px-6 text-sm"
        style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#9A3412' }}
      >
        ¡Listo! Revisa tu bandeja de entrada.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3">
      <label htmlFor="hero-email" className="sr-only">Tu email</label>
      <input
        id="hero-email"
        ref={emailRef}
        type="email"
        name="email"
        required
        placeholder="tu@email.com"
        autoComplete="email"
        disabled={status === 'loading'}
        className="flex-1 px-4 py-3 text-sm outline-none disabled:opacity-50"
        style={{
          border: '1px solid #E5E5E5',
          background: '#FFFFFF',
          fontFamily: 'var(--font-mono)',
          color: '#111111',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#148AFF')}
        onBlur={(e)  => (e.currentTarget.style.borderColor = '#E5E5E5')}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 shrink-0"
        style={{ background: '#148AFF', fontFamily: 'var(--font-display)' }}
      >
        {status === 'loading' ? 'Enviando…' : 'Quiero empezar →'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600 mt-1" role="alert">{message}</p>
      )}
    </form>
  )
}

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">

        {/* Top rule */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}
          >
            Trading Algorítmico
          </span>
          <div className="flex-1 h-px" style={{ background: '#E5E5E5' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <p
              className="text-xs font-medium mb-6 inline-block px-3 py-1.5"
              style={{
                fontFamily: 'var(--font-mono)',
                background: '#111111',
                color: '#FAFAF8',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              El Curso de Trading Algorítmico de RobotEdge
            </p>

            <h1
              className="font-bold mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 60px)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: '#111111',
              }}
            >
              Siéntate cara a cara
              <br />con <span style={{ color: '#148AFF' }}>un trader</span>
              <br />profesional.
            </h1>

            <p className="mb-8 text-base leading-relaxed" style={{ color: '#555555', maxWidth: '48ch' }}>
              ¿Te gustaría sentirte como un trader profesional con dominio total de tus estrategias?
              Soy Pablo Llobregat y llevo mucho tiempo dominando los mercados con sistemas algorítmicos.
              Te enseño exactamente lo que aplico en real todos los días.
            </p>

            <HeroForm />

            <p className="mt-4 text-xs" style={{ color: '#AAAAAA', fontFamily: 'var(--font-mono)' }}>
              Gratis. Sin spam. Sin excusas para no empezar.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 pt-10" style={{ borderTop: '1px solid #E5E5E5' }}>
              {[
                { value: '+48.28k', label: 'Retorno verificado' },
                { value: '64.94%',  label: 'Op. ganadoras' },
                { value: '<15%',    label: 'Drawdown máx.' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold leading-none mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
                    {s.value}
                  </p>
                  <p className="text-xs" style={{ color: '#888888', fontFamily: 'var(--font-mono)' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — results card */}
          <div id="resultados">
            <div className="overflow-hidden" style={{ border: '1px solid #E5E5E5', background: '#FFFFFF' }}>
              <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid #E5E5E5' }}>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase mb-0.5"
                    style={{ fontFamily: 'var(--font-mono)', color: '#888888' }}>
                    Nuestros Resultados
                  </p>
                  <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
                    Cuenta real · Kinfo verificado
                  </p>
                </div>
                <span
                  className="text-xs font-semibold px-2 py-1"
                  style={{ background: '#F0FDF4', color: '#15803D', border: '1px solid #BBF7D0', fontFamily: 'var(--font-mono)' }}
                >
                  ✓ Verificado
                </span>
              </div>

              <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/resultados.jpg"
                  alt="Resultados verificados en cuenta real — +48.28k, 64.94% operaciones ganadoras"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-6 py-4 flex items-center justify-between"
                style={{ borderTop: '1px solid #E5E5E5', background: '#FAFAF8' }}>
                <p className="text-xs" style={{ color: '#888888', fontFamily: 'var(--font-mono)' }}>
                  Sistema propio · 3 meses en vivo
                </p>
                <Link
                  href="https://es.trustpilot.com/review/robotedge.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium"
                  style={{ color: '#148AFF', fontFamily: 'var(--font-mono)' }}
                >
                  Ver reseñas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
