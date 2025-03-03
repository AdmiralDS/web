import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';
import { menuCN, menuItemCN } from './styles.css.ts';

export type MenuProps = ComponentPropsWithoutRef<'menu'> & {
  /** Размеры компонента */
  'data-size'?: 's' | 'm' | 'l';
};
export const Menu = forwardRef<HTMLMenuElement, MenuProps>(({ className, ...props }, ref) => {
  props['data-size'] = props['data-size'] ?? 'm';
  return (
    <menu ref={ref} role="menu" aria-orientation="vertical" className={[menuCN, className].join(' ')} {...props} />
  );
});

export type MenuItemProps = ComponentPropsWithoutRef<'li'> & {
  // кастомные пропсы
};

export function MenuItem({ className, ...props }: MenuItemProps) {
  return <li role="menuitem" className={[menuItemCN, className].join(' ')} {...props} />;
}

export const menuClassName = menuCN;
export const menuItemClassName = menuItemCN;
