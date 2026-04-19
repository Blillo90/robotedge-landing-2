import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import PostForm from '@/components/admin/PostForm'
import { updatePost } from '../../../actions'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: post, error } = await supabase.from('posts').select('*').eq('id', id).single()

  if (error || !post) notFound()

  return (
    <div>
      <h1 className="text-xl font-semibold mb-8" style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
        Editar artículo
      </h1>
      <PostForm post={post} action={updatePost} />
    </div>
  )
}
