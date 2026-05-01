'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  cover_image: string | null
  published: boolean
  created_at: string
  updated_at: string
}

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
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [title, setTitle] = useState(post?.title ?? '')
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [slugManual, setSlugManual] = useState(!!post)
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '')
  const [coverImage, setCoverImage] = useState(post?.cover_image ?? '')
  const [imagePreview, setImagePreview] = useState(post?.cover_image ?? '')
  const [uploading, setUploading] = useState(false)
  const [content, setContent] = useState(post?.content ?? '')
  const [published, setPublished] = useState(post?.published ?? false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleTitleChange(val: string) {
    setTitle(val)
    if (!slugManual) setSlug(slugify(val))
  }

  async function handleImageUpload(file: File) {
    if (!file.type.startsWith('image/')) return
    setUploading(true)
    const localUrl = URL.createObjectURL(file)
    setImagePreview(localUrl)

    try {
      const supabase = createClient()
      const ext = file.name.split('.').pop()
      const path = `posts/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('post-images')
        .upload(path, file, { upsert: false })

      if (uploadError) throw uploadError

      const { data } = supabase.storage.from('post-images').getPublicUrl(path)
      setCoverImage(data.publicUrl)
      setImagePreview(data.publicUrl)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al subir la imagen')
      setImagePreview(coverImage)
    } finally {
      setUploading(false)
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleImageUpload(file)
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
        <p className="mt-1 text-xs" style={{ color: '#AAAAAA' }}>/blog/{slug || '…'}</p>
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

      {/* Cover image upload */}
      <div>
        <label className={labelClass} style={{ color: '#111111' }}>Imagen de portada</label>

        {/* Drop zone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="relative cursor-pointer overflow-hidden"
          style={{
            border: '2px dashed #E5E5E5',
            background: '#FAFAF8',
            minHeight: 160,
            transition: 'border-color 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#148AFF')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = imagePreview ? '#148AFF' : '#E5E5E5')}
        >
          {imagePreview ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full object-cover"
                style={{ maxHeight: 240 }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(0,0,0,0.45)' }}
              >
                <span className="text-white text-xs font-medium">Cambiar imagen</span>
              </div>
              {uploading && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.8)' }}>
                  <span className="text-xs" style={{ color: '#148AFF' }}>Subiendo…</span>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 py-10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
              <p className="text-sm" style={{ color: '#AAAAAA' }}>
                {uploading ? 'Subiendo…' : 'Arrastra una imagen o haz clic para seleccionar'}
              </p>
              <p className="text-xs" style={{ color: '#CCCCCC' }}>JPG, PNG, WebP · máx. 5 MB</p>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(f) }}
        />

        {/* URL fallback */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs shrink-0" style={{ color: '#AAAAAA' }}>o pega una URL:</span>
          <input
            type="url"
            value={coverImage}
            onChange={(e) => { setCoverImage(e.target.value); setImagePreview(e.target.value) }}
            className="flex-1 px-2 py-1 text-xs border outline-none focus:border-[#148AFF]"
            style={{ borderColor: '#E5E5E5', color: '#111111', fontFamily: 'var(--font-mono)' }}
            placeholder="https://…"
          />
        </div>
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
        <label htmlFor="published" className="text-sm" style={{ color: '#111111' }}>Publicado</label>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={loading || uploading}
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
