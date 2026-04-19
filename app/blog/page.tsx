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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
