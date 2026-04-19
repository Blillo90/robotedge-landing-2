'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) {
      setError('Credenciales incorrectas')
      setLoading(false)
      return
    }
    router.push('/admin')
    router.refresh()
  }

  const inputClass = "w-full px-3 py-2 text-sm border bg-white outline-none transition-colors focus:border-[#148AFF]"

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: '#FAFAF8' }}>
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <div
            className="inline-flex items-center justify-center w-8 h-8 font-bold text-sm text-white mb-6"
            style={{ background: '#111111', fontFamily: 'var(--font-display)' }}
          >
            RE
          </div>
          <h1 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
            Panel de administración
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="px-4 py-3 text-sm border" style={{ background: '#FEF2F2', borderColor: '#FCA5A5', color: '#B91C1C' }}>
              {error}
            </div>
          )}
          <div>
            <label className="block text-xs font-medium mb-1" style={{ color: '#111111' }}>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              style={{ borderColor: '#E5E5E5', color: '#111111' }}
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" style={{ color: '#111111' }}>Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              style={{ borderColor: '#E5E5E5', color: '#111111' }}
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50 mt-2"
            style={{ background: '#148AFF' }}
          >
            {loading ? 'Entrando…' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
