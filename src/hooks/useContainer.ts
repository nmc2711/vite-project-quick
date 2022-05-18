import { useEffect, useRef } from 'react';

export type GetDrawerContainerFuc = () => HTMLElement;
export type GetContainer = GetDrawerContainerFuc | HTMLElement;

export function useContainer( className: string, getContainer?: GetContainer) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    return () => {
      if (containerRef.current) {
        document.body.removeChild(containerRef.current);
      }
    };
  }, []);

  let container: HTMLElement;
  if (!getContainer) {
    if (!containerRef.current) {
      container = document.createElement("div");
      if (className) {
      container.classList.add(className);
    }
    document.body.appendChild(container);
    containerRef.current = container;
    } else {
      return containerRef.current;
    }
  } else if (getContainer instanceof Function) {
    container = getContainer();
  } else {
    container = getContainer;
  }
  return container;
}