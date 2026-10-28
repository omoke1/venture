// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";

export const useSpring = ({
  from = { number: 0 },
  number = 0,
  onRest
}: {
  from?: { number: number };
  number: number;
  config?: any;
  onRest?: () => void;
}) => {
  const [val, setVal] = useState(from.number ?? 0);
  const startRef = useRef<number | null>(null);
  const fromRef = useRef<number>(from.number ?? 0);
  const onRestRef = useRef(onRest);
  onRestRef.current = onRest;

  useEffect(() => {
    if (number === fromRef.current) return;
    const startVal = val;
    const targetVal = number;
    const duration = 1200;
    startRef.current = null;
    let rafId: number;

    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const next = startVal + (targetVal - startVal) * eased;
      setVal(next);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        fromRef.current = targetVal;
        if (onRestRef.current) onRestRef.current();
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [number]);

  return {
    number: {
      to: (fn: (n: number) => any) => fn(val)
    }
  };
};

export const animated = {
  div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props}>{children}</div>
  )
};
