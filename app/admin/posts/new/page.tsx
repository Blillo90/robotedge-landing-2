import PostForm from '@/components/admin/PostForm'
import { createPost } from '../../actions'

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-8" style={{ fontFamily: 'var(--font-display)', color: '#111111' }}>
        Nuevo artículo
      </h1>
      <PostForm action={createPost} />
    </div>
  )
}
