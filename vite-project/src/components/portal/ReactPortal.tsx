import { useState, useLayoutEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

export default function ReactPortal({
  children,
  wrapperId = 'react-portal-wrapper',
  onClick,
}: {
  children: ReactNode;
  wrapperId: string;
  onClick: () => void;
}) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    element.addEventListener('click', onClick);
    setWrapperElement(element);

    return () => {
      if (element && systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [onClick, wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('class', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}
