import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

const UNSPLASH_WIDTHS = [480, 800, 1080]

// Gera um srcset em WebP para imagens do Unsplash; outras origens passam sem alteração.
function unsplashSrcSet(src?: string) {
  if (!src || !src.startsWith('https://images.unsplash.com/')) return undefined
  const base = new URL(src)
  base.searchParams.set('fm', 'webp')
  base.searchParams.set('q', '72')
  return UNSPLASH_WIDTHS.map((w) => {
    base.searchParams.set('w', String(w))
    return `${base.toString()} ${w}w`
  }).join(', ')
}

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img
      src={src}
      srcSet={unsplashSrcSet(src)}
      sizes={rest.sizes ?? '100vw'}
      loading="lazy"
      decoding="async"
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  )
}
