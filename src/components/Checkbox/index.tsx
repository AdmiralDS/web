import React, { forwardRef } from 'react';
import {
  container,
  dimensionStyle,
  borderStyle,
  cursorStyle,
  background,
  svgStyle,
  inputStyle,
  hoveredStyle,
  activeStyle,
  noHoverStyle,
  disabledStyle,
  disabledCheckedStyle,
  indeterminateBackgroundStyle,
  svgDisabledNotCheckedStyle,
} from './style.css.ts';
import CheckSVG from './Success.svg?react';
import IndeterminateSVG from './Minus.svg?react';
import { ALL_DIMENSIONS_VALUES } from './CheckboxDimension.ts';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  dimension?: 'm' | 's';
  indeterminate?: boolean;
  error?: boolean;
  disabled?: boolean;
  hovered?: boolean;
  children?: never;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ dimension = 'm', indeterminate, error, disabled, readOnly, ...props }, ref) => {
    const dimensionValue = ALL_DIMENSIONS_VALUES.includes(dimension) ? dimension : 'm';

    const cursorClass = cursorStyle[disabled ? 'disabled' : readOnly ? 'readOnly' : 'pointer'];
    const containerClass = [container, cursorClass, dimensionStyle[dimensionValue]].join(' ');

    const disabledClass = disabled && props.defaultChecked ? disabledCheckedStyle : disabledStyle;
    const borderClass = error ? borderStyle['error'] : borderStyle['neutral'];
    const backgroundClass = [
      background,
      (disabled || readOnly) && disabledClass,
      (disabled || readOnly) && props.defaultChecked && disabledCheckedStyle,
      borderClass,
      indeterminate && indeterminateBackgroundStyle,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClass = [
      inputStyle,
      !readOnly && hoveredStyle,
      (!readOnly || !disabled) && activeStyle,
      disabled && noHoverStyle,
    ]
      .filter(Boolean)
      .join(' ');

    const svgClass = [svgStyle, disabled && props.defaultChecked ? svgStyle : svgDisabledNotCheckedStyle]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClass}>
        <input ref={ref} type="checkbox" className={inputClass} disabled={disabled} {...props} />
        <div className={backgroundClass}>
          {indeterminate ? (
            <IndeterminateSVG className={svgStyle} aria-hidden="true" focusable="false" />
          ) : !disabled ? (
            <CheckSVG className={svgClass} aria-hidden="true" focusable="false" />
          ) : disabled && props.defaultChecked ? (
            <CheckSVG className={svgClass} aria-hidden="true" focusable="false" />
          ) : null}
          {indeterminate}
        </div>
      </div>
    );
  },
);
