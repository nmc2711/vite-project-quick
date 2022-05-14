import { useRef, useCallback, useEffect } from 'react';

function cumulativeOffset(el: HTMLElement) {
  let x = 0;
  let y = 0;
  
  do {
    x += el.offsetTop || 0;
    y += el.offsetLeft || 0;
    el = el.offsetParent as HTMLElement;
  } while(el);

  return { x, y };
}

function useSticky() {
  const _wrap = useRef<HTMLDivElement>(null);
  const _box = useRef<HTMLDivElement>(null);

  const resizeAndScroll = useCallback(() => {
    if (!_wrap.current || !_box.current) return;

    const y = window.scrollY;
    const wrapLocation = cumulativeOffset(_wrap.current);
    const yLimit = _wrap.current.clientHeight - _box.current.clientHeight - 2;

    if (y - wrapLocation.x <= 0) {
      _box.current.style.top = '0';
    } else if (y - wrapLocation.x >= 0 && y - wrapLocation.x < yLimit) {
      _box.current.style.top = y - wrapLocation.x + 'px';
    } else if (y - wrapLocation.x >= yLimit) {
      _box.current.style.top = yLimit + 'px';
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', resizeAndScroll);

    return () => {
      document.removeEventListener('scroll', resizeAndScroll);
    };
  }, []);

  return [_wrap, _box];
}

export default useSticky;
