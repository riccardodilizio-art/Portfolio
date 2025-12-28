import { useState } from 'react'

const ERROR_IMG_SRC = 'data:image/svg+xml;base64,...'

export function ImageWithFallback({
                                      src,
                                      alt,
                                      className,
                                      style,
                                      ...rest
                                  }: React.ImgHTMLAttributes<HTMLImageElement>) {
    const [didError, setDidError] = useState(false)

    if (didError) {
        return (
            <div
                role="img"
                aria-label="Immagine non disponibile"
                className={`inline-flex items-center justify-center bg-gray-100 ${className ?? ''}`}
                style={style}
            >
                <img src={ERROR_IMG_SRC} alt="" aria-hidden="true" />
            </div>
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={style}
            onError={() => setDidError(true)}
            {...rest}
        />
    )
}
