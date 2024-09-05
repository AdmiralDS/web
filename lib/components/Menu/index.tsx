import type { ComponentPropsWithoutRef } from 'react';
import { menuCN, menuItemCN } from './styles.css.ts';

export type MenuProps = ComponentPropsWithoutRef<'menu'> & {
  /** Размеры компонента */
  'data-size'?: 's' | 'm' | 'l';
};
export function Menu({ className, ...props }: MenuProps) {
  props['data-size'] = props['data-size'] ?? 'm';
  return <menu role="menu" aria-orientation="vertical" className={[menuCN, className].join(' ')} {...props} />;
}

export type MenuItemProps = ComponentPropsWithoutRef<'li'> & {
  // кастомные пропсы
};

export function MenuItem({ className, ...props }: MenuItemProps) {
  return <li role="menuitem" className={[menuItemCN, className].join(' ')} {...props} />;
}

export const menuClassName = menuCN;
export const menuItemClassName = menuItemCN;
