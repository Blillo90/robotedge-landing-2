import AdminLogout from '@/components/admin/AdminLogout'
import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }}>
      <header className="border-b" style={{ background: '#FFFFFF', borderColor: '#E5E5E5' }}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
              Admin
            </Link>
            <Link href="/admin/posts/new" className="text-sm transition-colors hover:text-[#148AFF]" style={{ color: '#666666' }}>
              Nuevo artículo
            </Link>
            <Link href="/blog" className="text-sm transition-colors hover:text-[#148AFF]" style={{ color: '#666666' }}>
              Ver blog →
            </Link>
          </div>
          <AdminLogout />
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  )
}
