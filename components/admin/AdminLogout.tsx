'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminLogout() {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm transition-colors"
      style={{ color: '#AAAAAA' }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#111111')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}
    >
      Sign out
    </button>
  )
}
