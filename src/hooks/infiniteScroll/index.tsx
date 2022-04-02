import { forwardRef, useEffect, ReactNode } from 'react';
import useInfiniteScroll from './useInfiniteScroll';

type TInfiniteScroll = {
  rootMargin?: string;
  threshold?: number;
  contentKey: number;
  contentLength: number;
  children: ReactNode;
  callback?: () => void;
};

const InfiniteScroll = forwardRef<HTMLDivElement, TInfiniteScroll>(({
  children, ...props
}, ref: any) => {
  const { rootMargin, threshold, contentKey, contentLength, callback } = props;
  
  const lastContentRef = contentLength == (contentKey + 1) ? ref : null;
  const { entry } = useInfiniteScroll({
    contentRef: lastContentRef,
    entryProps: {
      rootMargin,
      threshold,
    },
  });
  
  const isVisible = !!entry?.isIntersecting;
  
  useEffect(() => {
    if (callback && isVisible) callback();
  }, [isVisible]);

  return (
    <div ref={ref}>{children}</div>
  );
})
export default InfiniteScroll;
