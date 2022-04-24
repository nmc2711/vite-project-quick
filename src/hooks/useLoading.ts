import { useEffect, useState, useRef } from 'react';

export function useLoading() {
  const [isLoading, setState] = useState(false)
  const mount = useRef(false)
  useEffect(() => {
    mount.current = true
    return () => void (mount.current = false)
  }, [])
  const load = (aPromise: Promise<any>) => {
    setState(true)
    return aPromise.finally(() => {
      if (mount.current) setState(false)
    })
  }
  return [isLoading, load] as const
}