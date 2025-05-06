import type { ComponentPropsWithoutRef } from 'react';
import './button.css';
import styles from './button.module.css';
import { buttonHover } from './button.css.ts';

export type ButtonProps = {
  innerRef?: React.LegacyRef<HTMLButtonElement>;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
} & ComponentPropsWithoutRef<'button'>;

/**
 * Primary UI component
 */
export const Button = ({
  type = 'button',
  primary = false,
  size = 'medium',
  backgroundColor,
  className,
  innerRef,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.primary : styles.secondary;
  return (
    <button
      ref={innerRef}
      type={type}
      className={['storybook-button', buttonHover, styles[size], mode, className].join(' ')}
      style={{ backgroundColor }}
      {...props}
    />
  );
};
