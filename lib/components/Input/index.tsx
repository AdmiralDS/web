import type { ComponentPropsWithoutRef } from 'react';
import { focusBox, inputLine } from './styles.css.ts';

export type SizeProps = {
  /** Размеры компонента */
  'data-size'?: 's' | 'm' | 'xl';
};

export type FocusBoxProps = SizeProps & ComponentPropsWithoutRef<'div'>;
export function FocusBox({ className, ...props }: FocusBoxProps) {
  return <div className={[focusBox, className].join(' ')} {...props}></div>;
}

export const inputlineClassName = inputLine;
