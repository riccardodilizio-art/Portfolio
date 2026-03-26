import { useState } from 'react'

const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMS41Ij48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIi8+PGNpcmNsZSBjeD0iOC41IiBjeT0iOC41IiByPSIxLjUiLz48cGF0aCBkPSJNMjEgMTVsLTUtNUw1IDIxIi8+PC9zdmc+'

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
            loading="lazy"
            className={className}
            style={style}
            onError={() => setDidError(true)}
            {...rest}
        />
    )
}
