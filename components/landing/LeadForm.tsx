'use client'
import { useState, useRef, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function LeadForm() {
  const [status, setStatus]   = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const emailRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = emailRef.current?.value.trim() ?? ''
    if (!email) return
    setStatus('loading')
    setMessage('')
    try {
      const res  = await fetch('/api/lead', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      })
      const json = await res.json() as { success?: boolean; error?: string }
      if (!res.ok || !json.success) {
        setStatus('error')
        setMessage(json.error ?? 'Algo salió mal. Inténtalo de nuevo.')
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
      setMessage('Error de conexión. Inténtalo de nuevo.')
    }
  }

  return (
    <section id="guia-gratuita" className="py-6 px-6" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto overflow-hidden" style={{ background: '#111111' }}>
        <div className="px-8 md:px-14 py-16 md:py-20">

          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: '#F97316' }}>
              Recurso Gratuito
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-bold mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  letterSpacing: '-0.03em',
                  color: '#FAFAF8',
                }}
              >
                Para de improvisar.{' '}
                <span style={{ color: '#F97316' }}>Construye tu primer robot</span>{' '}
                de trading ahora.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#666666', maxWidth: '48ch' }}>
                Guía gratuita: de cero al primer bot operando en cuenta real. Sin
                experiencia previa en programación. Sin promesas absurdas. Solo el
                proceso exacto, paso a paso.
              </p>
            </div>

            <div>
              {status === 'success' ? (
                <div
                  className="py-6 px-8 text-sm"
                  style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)' }}
                >
                  <p className="font-semibold mb-1" style={{ color: '#FB923C' }}>¡Listo! Revisa tu bandeja de entrada.</p>
                  <p style={{ color: '#666666' }}>Te hemos enviado acceso a la guía. Si no la ves, comprueba spam.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Formulario de guía gratuita">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="cta-email" className="sr-only">Tu email</label>
                    <input
                      id="cta-email"
                      ref={emailRef}
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      autoComplete="email"
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3.5 text-sm outline-none disabled:opacity-50"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#FAFAF8',
                        fontFamily: 'var(--font-mono)',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#F97316')}
                      onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                      style={{ background: '#F97316', fontFamily: 'var(--font-display)' }}
                    >
                      {status === 'loading' ? 'Enviando…' : 'Quiero empezar ya →'}
                    </button>
                  </div>

                  {status === 'error' && (
                    <p className="mt-3 text-sm text-red-400" role="alert">{message}</p>
                  )}

                  <p className="mt-4 text-xs" style={{ color: '#444444', fontFamily: 'var(--font-mono)' }}>
                    Gratis. Sin spam. Sin excusas para no empezar.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
