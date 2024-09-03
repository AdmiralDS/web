import type { ComponentPropsWithoutRef } from 'react';
import { focusBox, inputLine } from './styles.css.ts';

export type FocusBoxProps = ComponentPropsWithoutRef<'div'> & {
  /** Размеры компонента */
  'data-size'?: 's' | 'm' | 'xl';
};

export function FocusBox({ className, ...props }: FocusBoxProps) {
  props['data-size'] = props['data-size'] ?? 'm';
  return <div className={[focusBox, className].join(' ')} {...props}></div>;
}

export const inputlineClassName = inputLine;
