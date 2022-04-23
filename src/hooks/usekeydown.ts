import { useEffect, useState } from 'react';

function useKeydown(key: string, handler: Function) {
  useEffect(() => {
    const cb = (e: KeyboardEvent) => e.key === key && handler(e)
    document.body.addEventListener("keydown", cb)
    return () => {
      document.body.removeEventListener("keydown", cb)
    }
  }, [key, handler])
}

export default useKeydown;