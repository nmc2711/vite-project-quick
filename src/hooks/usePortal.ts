import ReactDOM from "react-dom";
import { useContainer, GetContainer } from "./useContainer";

export function usePortal(className: string, getContainer: GetContainer): [(node: React.ReactNode) => any, HTMLElement] {
  const container = useContainer(className, getContainer);

  function renderPortal(node: React.ReactNode) {
    if (!container) {
      return null;
    }
      return ReactDOM.createPortal(node, container);
    }

    return [renderPortal, container];
}