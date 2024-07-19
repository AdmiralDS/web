import type { ComponentPropsWithoutRef } from 'react';
import './button.css';

export type ButtonProps = {
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
export const Button = ({ primary = true, size = 'medium', backgroundColor, ...props }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    />
  );
};
