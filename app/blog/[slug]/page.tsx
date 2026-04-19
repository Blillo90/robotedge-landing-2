import { notFound } from 'next/navigation'
import { getPostBySlug, getPublishedPosts } from '@/lib/posts'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — RobotEdge`,
    description: post.excerpt ?? undefined,
  }
}

export async function generateStaticParams() {
  const posts = await getPublishedPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-xs transition-colors hover:text-[#148AFF] mb-10"
          style={{ fontFamily: 'var(--font-mono)', color: '#AAAAAA' }}
        >
          ← Volver al blog
        </Link>

        {post.cover_image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full object-cover mb-10"
            style={{ maxHeight: 360 }}
          />
        )}

        <p className="text-xs tabular-nums mb-4" style={{ fontFamily: 'var(--font-mono)', color: '#AAAAAA' }}>
          {formatDate(post.created_at)}
        </p>

        <h1 className="text-3xl font-semibold leading-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
          {post.title}
        </h1>

        <div className="h-px w-full mb-10" style={{ background: '#E5E5E5' }} />

        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  )
}
