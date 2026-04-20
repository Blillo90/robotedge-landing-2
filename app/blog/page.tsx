import { getPublishedPosts } from '@/lib/posts'
import PostCard from '@/components/blog/PostCard'
import { demoPosts } from '@/data/demo-posts'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Blog — RobotEdge',
  description: 'Artículos sobre trading algorítmico, automatización y sistemas cuantitativos.',
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const displayPosts = posts.length > 0 ? posts : demoPosts
  const [featured, ...rest] = displayPosts

  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ fontFamily: 'var(--font-mono)', color: '#148AFF' }}>
            Blog
          </p>
          <h1 className="text-3xl font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
            Trading algorítmico
          </h1>
          <p className="mt-3 text-sm leading-relaxed max-w-xl" style={{ color: '#666666' }}>
            Guías prácticas, casos reales y análisis técnico sobre cómo construir y operar sistemas automatizados.
          </p>
        </div>

        <div className="h-px w-full mb-12" style={{ background: '#E5E5E5' }} />

        {displayPosts.length === 0 ? (
          <p className="text-sm" style={{ color: '#AAAAAA' }}>No hay artículos publicados todavía.</p>
        ) : (
          <>
            {featured && (
              <a
                href={`/blog/${featured.slug}`}
                className="group block mb-10 overflow-hidden transition-shadow hover:shadow-lg"
                style={{ border: '1px solid #E5E5E5', background: '#FFFFFF' }}
              >
                <div className="grid md:grid-cols-[1fr_360px]">
                  <div className="p-8 flex flex-col justify-between gap-6">
                    <div>
                      <span
                        className="inline-block text-xs px-2 py-0.5 font-medium mb-5"
                        style={{ background: '#EFF6FF', color: '#148AFF', border: '1px solid #BFDBFE', fontFamily: 'var(--font-mono)' }}
                      >
                        Artículo destacado
                      </span>
                      <h2
                        className="text-2xl font-semibold leading-snug mb-3 group-hover:text-[#148AFF] transition-colors"
                        style={{ fontFamily: 'var(--font-display)', color: '#111111' }}
                      >
                        {featured.title}
                      </h2>
                      {featured.excerpt && (
                        <p className="text-sm leading-relaxed" style={{ color: '#666666', maxWidth: '54ch' }}>
                          {featured.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <time className="text-xs tabular-nums" style={{ fontFamily: 'var(--font-mono)', color: '#AAAAAA' }}>
                        {new Date(featured.created_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                      <span className="text-xs font-medium group-hover:translate-x-0.5 transition-transform inline-block" style={{ color: '#148AFF', fontFamily: 'var(--font-mono)' }}>
                        Leer artículo →
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:block overflow-hidden" style={{ borderLeft: '1px solid #E5E5E5', minHeight: 220 }}>
                    {featured.cover_image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={featured.cover_image} alt={featured.title} className="w-full h-full object-cover" style={{ minHeight: 220 }} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ background: '#F5F5F3', minHeight: 220 }}>
                        <svg viewBox="0 0 200 160" fill="none" className="w-40" aria-hidden>
                          <defs>
                            <linearGradient id="feat-fill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#148AFF" stopOpacity="0.15"/>
                              <stop offset="100%" stopColor="#148AFF" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                          <path d="M0 130 C30 120 50 100 70 80 C85 65 90 75 110 55 C130 35 150 20 200 5 L200 160 L0 160 Z" fill="url(#feat-fill)"/>
                          <path d="M0 130 C30 120 50 100 70 80 C85 65 90 75 110 55 C130 35 150 20 200 5" stroke="#148AFF" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            )}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
