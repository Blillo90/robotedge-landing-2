import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { deletePost } from './actions'

type Post = {
  id: string
  title: string
  slug: string
  published: boolean
  created_at: string
}

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data } = await supabase.from('posts').select('id,title,slug,published,created_at').order('created_at', { ascending: false })
  const posts: Post[] = data ?? []

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
          Artículos
        </h1>
        <Link
          href="/admin/posts/new"
          className="px-4 py-2 text-sm font-medium text-white"
          style={{ background: '#148AFF' }}
        >
          + Nuevo
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-sm" style={{ color: '#AAAAAA' }}>No hay artículos todavía.</p>
      ) : (
        <div className="border" style={{ borderColor: '#E5E5E5', background: '#FFFFFF' }}>
          {posts.map((post, i) => (
            <div
              key={post.id}
              className="flex items-center justify-between px-6 py-4"
              style={{ borderTop: i > 0 ? '1px solid #E5E5E5' : undefined }}
            >
              <div className="flex items-center gap-4 min-w-0">
                <span
                  className="shrink-0 text-xs px-2 py-0.5 font-medium"
                  style={{
                    background: post.published ? '#EFF6FF' : '#F5F5F3',
                    color: post.published ? '#148AFF' : '#AAAAAA',
                    border: `1px solid ${post.published ? '#BFDBFE' : '#E5E5E5'}`,
                  }}
                >
                  {post.published ? 'Publicado' : 'Borrador'}
                </span>
                <span className="text-sm truncate" style={{ color: '#111111' }}>
                  {post.title}
                </span>
                <span className="text-xs shrink-0 hidden md:inline" style={{ fontFamily: 'var(--font-mono)', color: '#AAAAAA' }}>
                  /blog/{post.slug}
                </span>
              </div>
              <div className="flex items-center gap-4 shrink-0 ml-4">
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="text-xs transition-colors hover:text-[#148AFF]"
                  style={{ color: '#666666' }}
                >
                  Editar
                </Link>
                <form action={deletePost}>
                  <input type="hidden" name="id" value={post.id} />
                  <button
                    type="submit"
                    className="text-xs transition-colors hover:text-red-600"
                    style={{ color: '#AAAAAA' }}
                    onClick={(e) => { if (!confirm('¿Eliminar este artículo?')) e.preventDefault() }}
                  >
                    Eliminar
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
