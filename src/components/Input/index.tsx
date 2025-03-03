import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';
import { focusBox, inputLine } from './styles.css.ts';

export type FocusBoxProps = ComponentPropsWithoutRef<'div'> & {
  /** Размеры компонента, по умолчанию средний размер 'm'*/
  'data-size'?: 's' | 'm' | 'xl';
};

export const FocusBox = forwardRef<HTMLDivElement, FocusBoxProps>(({ className, ...props }, ref) => {
  props['data-size'] = props['data-size'] ?? 'm';
  return <div ref={ref} className={[focusBox, className].join(' ')} {...props}></div>;
});

export const inputlineClassName = inputLine;
