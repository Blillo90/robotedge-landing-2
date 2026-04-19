'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Post } from '@/types'

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

interface PostFormProps {
  post?: Post
  action: (formData: FormData) => Promise<void>
}

export default function PostForm({ post, action }: PostFormProps) {
  const router = useRouter()
  const [title, setTitle] = useState(post?.title ?? '')
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [slugManual, setSlugManual] = useState(!!post)
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '')
  const [coverImage, setCoverImage] = useState(post?.cover_image ?? '')
  const [content, setContent] = useState(post?.content ?? '')
  const [published, setPublished] = useState(post?.published ?? false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleTitleChange(val: string) {
    setTitle(val)
    if (!slugManual) setSlug(slugify(val))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const fd = new FormData()
      fd.set('title', title)
      fd.set('slug', slug)
      fd.set('excerpt', excerpt)
      fd.set('cover_image', coverImage)
      fd.set('content', content)
      fd.set('published', String(published))
      if (post?.id) fd.set('id', post.id)
      await action(fd)
      router.push('/admin')
      router.refresh()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
      setLoading(false)
    }
  }

  const inputClass = "w-full px-3 py-2 text-sm border bg-white outline-none transition-colors focus:border-[#148AFF]"
  const labelClass = "block text-xs font-medium mb-1"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-3xl">
      {error && (
        <div className="px-4 py-3 text-sm border" style={{ background: '#FEF2F2', borderColor: '#FCA5A5', color: '#B91C1C' }}>
          {error}
        </div>
      )}

      <div>
        <label className={labelClass} style={{ color: '#111111' }}>Título *</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className={inputClass}
          style={{ borderColor: '#E5E5E5', color: '#111111' }}
          placeholder="Título del artículo"
        />
      </div>

      <div>
        <label className={labelClass} style={{ color: '#111111' }}>Slug *</label>
        <input
          type="text"
          required
          value={slug}
          onChange={(e) => { setSlug(e.target.value); setSlugManual(true) }}
          className={inputClass}
          style={{ borderColor: '#E5E5E5', color: '#111111', fontFamily: 'var(--font-mono)' }}
          placeholder="url-del-articulo"
        />
        <p className="mt-1 text-xs" style={{ color: '#AAAAAA' }}>
          /blog/{slug || '…'}
        </p>
      </div>

      <div>
        <label className={labelClass} style={{ color: '#111111' }}>Extracto</label>
        <textarea
          rows={2}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className={inputClass}
          style={{ borderColor: '#E5E5E5', color: '#111111', resize: 'vertical' }}
          placeholder="Breve descripción para listados y SEO"
        />
      </div>

      <div>
        <label className={labelClass} style={{ color: '#111111' }}>URL imagen de portada</label>
        <input
          type="url"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className={inputClass}
          style={{ borderColor: '#E5E5E5', color: '#111111' }}
          placeholder="https://…"
        />
      </div>

      <div>
        <label className={labelClass} style={{ color: '#111111' }}>Contenido HTML *</label>
        <textarea
          required
          rows={20}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={inputClass}
          style={{ borderColor: '#E5E5E5', color: '#111111', resize: 'vertical', fontFamily: 'var(--font-mono)', fontSize: '12px' }}
          placeholder="<h2>Sección</h2><p>Contenido…</p>"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="published"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="w-4 h-4"
          style={{ accentColor: '#148AFF' }}
        />
        <label htmlFor="published" className="text-sm" style={{ color: '#111111' }}>
          Publicado
        </label>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50"
          style={{ background: '#148AFF' }}
        >
          {loading ? 'Guardando…' : (post ? 'Actualizar' : 'Crear artículo')}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="text-sm transition-colors hover:text-[#148AFF]"
          style={{ color: '#AAAAAA' }}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
