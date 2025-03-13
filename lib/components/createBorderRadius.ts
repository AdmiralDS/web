import { borderRadiusMap } from './theme/values/borderRadiusMap';
import { vars } from './theme/vars.css';

export function createBorderRadius(index: keyof typeof borderRadiusMap) {
  return {
    [vars.borderRadius.Small]: borderRadiusMap[index].Small,
    [vars.borderRadius.Medium]: borderRadiusMap[index].Medium,
    [vars.borderRadius.Large]: borderRadiusMap[index].Large,
  } as const;
}
