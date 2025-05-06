import { useState, useEffect, ReactElement } from 'react';
import { popoverStyle } from './style.css.ts';

const positionPopover = (position: DropdownPosition, targetElement: HTMLElement, popover: HTMLElement) => {
  const targetRect = targetElement.getBoundingClientRect();
  const spacing = 8;

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
};

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

interface DropdownProps extends React.ComponentProps<'div'> {
  position?: DropdownPosition;
  targetElement: HTMLElement | null;
  children: ReactElement;
  onClickOutside?: (event: MouseEvent) => void;
}

export default function Dropdown({
  position = 'bottom-left',
  targetElement,
  children,
  className,
  onClickOutside = () => null,
  ...props
}: DropdownProps) {
  const [popoverElement, setPopoverElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (popoverElement && targetElement) {
      popoverElement.setAttribute('popover', 'manual');
      positionPopover(position, targetElement, popoverElement);
      popoverElement.showPopover();
      popoverElement.style.visibility = 'visible';
    }
  }, [popoverElement, position, targetElement]);

  useEffect(() => {
    if (popoverElement) {
      const handleClickOutside = (event: MouseEvent) => {
        if (!popoverElement.contains(event.target as Node) && !targetElement?.contains(event.target as Node)) {
          onClickOutside(event);
        }
      };

      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [popoverElement]);

  return (
    <div {...props} ref={(element) => setPopoverElement(element)} className={[popoverStyle, className].join(' ')}>
      {children}
    </div>
  );
}
