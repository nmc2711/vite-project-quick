import { RefObject, useState, useEffect } from 'react';

interface TIo extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

type TUseInfiniteScroll = {
  contentRef: RefObject<HTMLDivElement | null>;
  entryProps: TIo;
};

interface TEntry {
  entry: IntersectionObserverEntry | undefined;
}

function useInfiniteScroll({ contentRef, entryProps }: TUseInfiniteScroll): TEntry {
  const { 
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  } = entryProps;
    
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  
  useEffect(() => {
    if (!contentRef) return;
    const node = contentRef?.current;
    const hasIOsupport = window?.IntersectionObserver ?? false;
    if (!hasIOsupport || frozen || !node) return;

    const observer = new IntersectionObserver(updateEntry, { threshold, root, rootMargin });

    observer.observe(node);

    return () => hasIOsupport && observer.disconnect();
  }, [contentRef, threshold, root, rootMargin, frozen]);
  
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };
 
  return { entry };
}
export default useInfiniteScroll;

