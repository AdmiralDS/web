import { useEffect, useMemo, useRef, useState } from 'react';
import './style.css';

export const Scrollbar = ({ children, className, ...props }: React.ComponentPropsWithRef<'div'>) => {
  const scrollAriaId = useMemo(() => `scroll-aria-${Math.random().toString(36).substring(2, 12)}`, []);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const observer = useRef<ResizeObserver | null>(null);

  const [thumbHeight, setThumbHeight] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollStartPosition, setScrollStartPosition] = useState<number>(0);
  const [initialContentScrollTop, setInitialContentScrollTop] = useState<number>(0);

  function handleResize() {
    if (scrollTrackRef.current && contentRef.current) {
      const { clientHeight: trackSize } = scrollTrackRef.current;
      const { clientHeight: contentVisible, scrollHeight: contentTotalHeight } = contentRef.current;
      setThumbHeight(Math.max((contentVisible / contentTotalHeight) * trackSize, 20));
    }
  }

  function handleThumbPosition() {
    if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) {
      return;
    }

    const { scrollTop: contentTop, scrollHeight: contentHeight } = contentRef.current;
    const { clientHeight: trackHeight } = scrollTrackRef.current;

    let newTop = (contentTop / contentHeight) * trackHeight;
    newTop = Math.min(newTop, trackHeight - thumbHeight);

    const thumb = scrollThumbRef.current;
    requestAnimationFrame(() => {
      thumb.style.top = `${newTop}px`;
    });
  }

  useEffect(() => {
    if (contentRef.current) {
      const content = contentRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize();
      });
      observer.current.observe(content);
      content.addEventListener('scroll', handleThumbPosition);
      setTimeout(handleThumbPosition);
      return () => {
        observer.current?.unobserve(content);
        content.removeEventListener('scroll', handleThumbPosition);
      };
    }
  }, []);

  function handleThumbMousedown(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY);
    if (contentRef.current) setInitialContentScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }

  function handleThumbMouseup(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (isDragging) {
      setIsDragging(false);
    }
  }

  function handleThumbMousemove(e: MouseEvent) {
    if (contentRef.current) {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        const { scrollHeight: contentScrollHeight, clientHeight: contentClientHeight } = contentRef.current;

        const deltaY = (e.clientY - scrollStartPosition) * (contentClientHeight / thumbHeight);

        const newScrollTop = Math.min(initialContentScrollTop + deltaY, contentScrollHeight - contentClientHeight);

        contentRef.current.scrollTop = newScrollTop;
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMousemove);
    document.addEventListener('mouseup', handleThumbMouseup);
    return () => {
      document.removeEventListener('mousemove', handleThumbMousemove);
      document.removeEventListener('mouseup', handleThumbMouseup);
    };
  }, [handleThumbMousemove, handleThumbMouseup]);

  function handleTrackClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    const { current: track } = scrollTrackRef;
    const { current: content } = contentRef;
    if (track && content) {
      const { clientY } = e;
      const target = e.target as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const trackTop = rect.top;
      const thumbOffset = -(thumbHeight / 2);
      const clickRatio = (clientY - trackTop + thumbOffset) / track.clientHeight;
      const scrollAmount = Math.floor(clickRatio * content.scrollHeight);
      content.scrollTo({
        top: scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <div id={scrollAriaId} ref={contentRef} className={['content', className].join(' ')} {...props}>
        {children}
      </div>
      <div className="scrollbar" role="scrollbar" aria-controls={scrollAriaId}>
        <div
          className="track"
          ref={scrollTrackRef}
          onClick={handleTrackClick}
          style={{ cursor: isDragging ? 'grabbing' : undefined }}
        ></div>
        <div
          className="thumb"
          ref={scrollThumbRef}
          onMouseDown={handleThumbMousedown}
          style={{
            height: `${thumbHeight}px`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        ></div>
      </div>
    </>
  );
};

// type ScrollBarsProps = {
//   /** Some coment */
//   some: string;
// };

// export function withScrollbars<T>(Component: React.ComponentType<T & React.RefAttributes<HTMLElement>>) {
//   return forwardRef<HTMLElement, T & ScrollBarsProps>(({ some, ...componentProps }, ref) => {
//     const contentRef = useRef<HTMLDivElement>(null);
//     console.log(some);
//     return <Component ref={refSetter(ref, contentRef)} {...componentProps} />;
//   }) as React.ComponentType<T & ScrollBarsProps & React.RefAttributes<HTMLElement>>;
// }
