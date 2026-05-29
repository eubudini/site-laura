"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
};

export function Counter({ value, prefix = "", suffix = "", separator = "" }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    // Sem contagem animada quando o usuário pede menos movimento: mostra o valor final.
    if (reduced) {
      setCount(value);
      return;
    }
    const duration = 1800;
    const steps = 60;
    const inc = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += inc;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, value, reduced]);

  const formatted = separator
    ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    : count.toString();

  const finalLabel = `${prefix}${
    separator ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : value
  }${suffix}`;

  return (
    <span ref={ref} aria-label={finalLabel}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
