import { useRef, useState, useEffect, ReactElement } from 'react';
import { popoverStyle } from './style.css.ts';

export type DropdownPosition =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

interface DropdownProps {
  position?: DropdownPosition;
  targetElement: ReactElement<HTMLElement>;
  children: ReactElement;
}

export default function Dropdown({ position = 'bottom-left', targetElement, children }: DropdownProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (popoverRef?.current) {
      popoverRef.current.setAttribute('popover', 'manual');
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!popoverRef.current?.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
        hidePopover();
      }
    };

    const handleResize = () => {
      if (isOpen) {
        positionPopover();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const positionPopover = () => {
    if (!buttonRef.current || !popoverRef.current) return;

    const targetRect = buttonRef.current.getBoundingClientRect();
    const popover = popoverRef.current;
    const spacing = 8;

    // Показать временно, чтобы рассчитать размер
    const previousDisplay = popover.style.display;
    const previousVisibility = popover.style.visibility;

    popover.style.visibility = 'hidden';
    popover.style.display = 'block';
    const popoverRect = popover.getBoundingClientRect();

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let resolvedPosition = position;

    if (position.startsWith('bottom') && targetRect.bottom + spacing + popoverRect.height > viewportHeight) {
      resolvedPosition = resolvedPosition.replace('bottom', 'top') as DropdownPosition;
    } else if (position.startsWith('top') && targetRect.top - spacing - popoverRect.height < 0) {
      resolvedPosition = resolvedPosition.replace('top', 'bottom') as DropdownPosition;
    }

    if (position.startsWith('right') && targetRect.right + spacing + popoverRect.width > viewportWidth) {
      resolvedPosition = resolvedPosition.replace('right', 'left') as DropdownPosition;
    } else if (position.startsWith('left') && targetRect.left - spacing - popoverRect.width < 0) {
      resolvedPosition = resolvedPosition.replace('left', 'right') as DropdownPosition;
    }

    const resolve = (pos: DropdownPosition) => {
      switch (pos) {
        case 'bottom-left':
          return { top: targetRect.bottom + spacing, left: targetRect.left };
        case 'bottom-center':
          return {
            top: targetRect.bottom + spacing,
            left: targetRect.left + targetRect.width / 2 - popoverRect.width / 2,
          };
        case 'bottom-right':
          return {
            top: targetRect.bottom + spacing,
            left: targetRect.right - popoverRect.width,
          };
        case 'top-left':
          return {
            top: targetRect.top - spacing - popoverRect.height,
            left: targetRect.left,
          };
        case 'top-center':
          return {
            top: targetRect.top - spacing - popoverRect.height,
            left: targetRect.left + targetRect.width / 2 - popoverRect.width / 2,
          };
        case 'top-right':
          return {
            top: targetRect.top - spacing - popoverRect.height,
            left: targetRect.right - popoverRect.width,
          };
        case 'left-top':
          return {
            top: targetRect.top,
            left: targetRect.left - spacing - popoverRect.width,
          };
        case 'left-center':
          return {
            top: targetRect.top + targetRect.height / 2 - popoverRect.height / 2,
            left: targetRect.left - spacing - popoverRect.width,
          };
        case 'left-bottom':
          return {
            top: targetRect.bottom - popoverRect.height,
            left: targetRect.left - spacing - popoverRect.width,
          };
        case 'right-top':
          return {
            top: targetRect.top,
            left: targetRect.right + spacing,
          };
        case 'right-center':
          return {
            top: targetRect.top + targetRect.height / 2 - popoverRect.height / 2,
            left: targetRect.right + spacing,
          };
        case 'right-bottom':
          return {
            top: targetRect.bottom - popoverRect.height,
            left: targetRect.right + spacing,
          };
        default:
          return { top: targetRect.bottom + spacing, left: targetRect.left };
      }
    };

    const coords = resolve(resolvedPosition);

    popover.style.top = `${coords.top}px`;
    popover.style.left = `${coords.left}px`;
    popover.style.visibility = 'visible';

    if (!isOpen) {
      popover.style.display = previousDisplay;
      popover.style.visibility = previousVisibility;
    }
  };

  const showPopover = () => {
    const popover = popoverRef.current;
    if (!popover) return;

    setIsOpen(true);

    requestAnimationFrame(() => {
      positionPopover();
      popover.showPopover();
    });
  };

  const hidePopover = () => {
    if (popoverRef.current) {
      popoverRef.current.hidePopover();
      setIsOpen(false);
    }
  };

  const togglePopover = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isOpen) {
      hidePopover();
    } else {
      showPopover();
    }
  };

  return (
    <div>
      <div ref={buttonRef} onClick={togglePopover}>
        {targetElement}
      </div>

      <div ref={popoverRef} className={popoverStyle}>
        {children}
      </div>
    </div>
  );
}
