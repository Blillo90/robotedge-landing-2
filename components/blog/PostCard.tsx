import Link from 'next/link'
import type { Post } from '@/types'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col overflow-hidden" style={{ background: '#FFFFFF', border: '1px solid #E5E5E5' }}>
      <div
        className="w-full flex items-center justify-center overflow-hidden"
        style={{ height: 140, background: '#F5F5F3', flexShrink: 0 }}
      >
        {post.cover_image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <svg viewBox="0 0 200 100" fill="none" className="w-[140px]" aria-hidden>
            <defs>
              <linearGradient id={`card-fill-${post.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#148AFF" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#148AFF" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 85 C30 75 50 60 70 45 C90 30 110 35 130 22 C155 8 175 3 200 1 L200 100 L0 100 Z" fill={`url(#card-fill-${post.id})`}/>
            <path d="M0 85 C30 75 50 60 70 45 C90 30 110 35 130 22 C155 8 175 3 200 1" stroke="#148AFF" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="200" cy="1" r="3" fill="#148AFF"/>
          </svg>
        )}
      </div>

      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="h-px w-full" style={{ background: '#E5E5E5' }} />
        <time className="text-xs tabular-nums" style={{ fontFamily: 'var(--font-mono)', color: '#AAAAAA' }}>
          {formatDate(post.created_at)}
        </time>
        <h2 className="text-base font-semibold leading-snug" style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
          <Link href={`/blog/${post.slug}`} className="hover:text-[#148AFF] transition-colors">
            {post.title}
          </Link>
        </h2>
        {post.excerpt && (
          <p className="text-sm leading-relaxed line-clamp-3" style={{ color: '#666666' }}>
            {post.excerpt}
          </p>
        )}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto pt-1 text-xs font-medium transition-opacity hover:opacity-70"
          style={{ color: '#148AFF', fontFamily: 'var(--font-mono)' }}
        >
          Leer artículo →
        </Link>
      </div>
    </article>
  )
}
