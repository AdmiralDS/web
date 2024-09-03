import type { ComponentPropsWithoutRef } from 'react';
import { menuClassName, menuItem } from './styles.css.ts';

export type MenuProps = ComponentPropsWithoutRef<'menu'> & {
  /** Размеры компонента */
  'data-size'?: 's' | 'm' | 'l';
};
export function Menu({ className, ...props }: MenuProps) {
  props['data-size'] = props['data-size'] ?? 'm';
  return <menu className={[menuClassName, className].join(' ')} {...props}></menu>;
}

export const menuItemClassName = menuItem;
