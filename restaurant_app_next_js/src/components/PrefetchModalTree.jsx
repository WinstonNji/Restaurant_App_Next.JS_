'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function PrefetchModalTree() {
  const router = useRouter()

  useEffect(() => {
    // Preload a dummy modal route to hydrate the @modal tree
    router.prefetch('/MenuItem/placeholder-id')
  }, [])

  return null
}
