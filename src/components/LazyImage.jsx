import React, { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, alt, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      }, { rootMargin: "300px" });
      io.observe(ref.current);
      return () => io.disconnect();
    } else setVisible(true);
  }, []);

  return (
    <div ref={ref} className={`relative ${className} bg-gradient-to-br from-white to-gray-100 dark:from-slate-800 dark:to-slate-700 overflow-hidden`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse" style={{background: "linear-gradient(90deg,#f3f4f6,#e6eef6,#f3f4f6)"}} />
      )}
      {visible && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}
