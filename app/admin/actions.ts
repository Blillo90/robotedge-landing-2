'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function createPost(formData: FormData) {
  const supabase = await createClient()
  const { error } = await supabase.from('posts').insert({
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    excerpt: (formData.get('excerpt') as string) || null,
    cover_image: (formData.get('cover_image') as string) || null,
    content: formData.get('content') as string,
    published: formData.get('published') === 'true',
  })
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/admin')
  redirect('/admin')
}

export async function updatePost(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string
  const { error } = await supabase.from('posts').update({
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    excerpt: (formData.get('excerpt') as string) || null,
    cover_image: (formData.get('cover_image') as string) || null,
    content: formData.get('content') as string,
    published: formData.get('published') === 'true',
    updated_at: new Date().toISOString(),
  }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/admin')
  redirect('/admin')
}

export async function deletePost(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string
  const { error } = await supabase.from('posts').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/admin')
}
