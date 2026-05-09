"use client";

import { useEffect, useState } from "react";

/**
 * useReducedMotion
 *
 * Detecta a preferencia `prefers-reduced-motion: reduce` do sistema.
 * SSR-safe: durante o render do servidor (e na primeira render do cliente
 * antes do effect rodar) retorna `false`, evitando hydration mismatch.
 *
 * Uso:
 *   const reduced = useReducedMotion();
 *   <motion.div
 *     initial={reduced ? false : { opacity: 0, y: 28 }}
 *     animate={{ opacity: 1, y: 0 }}
 *     transition={{ duration: reduced ? 0 : 0.7 }}
 *   />
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => setReduced(mql.matches);

    handle();

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handle);
      return () => mql.removeEventListener("change", handle);
    }

    // Safari < 14 fallback
    mql.addListener(handle);
    return () => mql.removeListener(handle);
  }, []);

  return reduced;
}
