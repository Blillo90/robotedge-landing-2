import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: '#E5E5E5', background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-7 h-7 flex items-center justify-center font-bold text-xs"
              style={{ background: '#111111', color: '#FAFAF8', fontFamily: 'var(--font-display)' }}
            >
              RE
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', letterSpacing: '-0.02em' }}>
              Robot<span style={{ color: '#148AFF' }}>Edge</span>
            </span>
          </div>
          <p className="text-sm" style={{ color: '#888888', maxWidth: '32ch' }}>
            Construye robots de trading con ventaja estadística real.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
          {[
            { label: 'Blog',       href: '/blog' },
            { label: 'Trustpilot', href: 'https://es.trustpilot.com/review/robotedge.tech' },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm transition-colors"
              style={{ color: '#888888', fontFamily: 'var(--font-display)' }}
              onMouseEnter={undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs" style={{ color: '#AAAAAA', fontFamily: 'var(--font-mono)' }}>
          © {new Date().getFullYear()} RobotEdge. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
