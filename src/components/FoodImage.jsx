import { useState } from "react";

export default function FoodImage({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="img img--fallback" role="img" aria-label={alt} />;
  return <img className="img" src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
