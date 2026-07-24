import { type ImgHTMLAttributes, useState } from "react";

export function ImageWithFallback(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  if (didError) {
    return (
      <div className={`image-fallback ${className ?? ""}`} style={style} role="img" aria-label={alt || "Imagem indisponível"}>
        <span>Imagem indisponível</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />;
}
