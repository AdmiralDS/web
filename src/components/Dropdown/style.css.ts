import { style } from '@vanilla-extract/css';

export const popoverStyle = style({
  margin: 0,
  padding: 0,
  border: 'none',
  background: 'none',
  pointerEvents: 'none',
  position: 'fixed',
  overflow: 'visible',
});
