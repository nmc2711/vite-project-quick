import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';

interface ReturnProps<T> {
  ref: MutableRefObject<T | null>;
  bounds: {
    width: number;
    height: number;
  };
}

export function useMeasure<T extends Element>(): ReturnProps<T> {
  const ref = useRef<T>(null);
  const [bounds, set] = useState({ width: 0, height: 0 });
  const [ro] = useState(() => new ResizeObserver(([entry]) => {
    const { blockSize, inlineSize } = entry.borderBoxSize[0];
    set({ width: inlineSize, height: blockSize });
  }));

  useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return {
    ref,
    bounds,
  };
}

export default useMeasure;
