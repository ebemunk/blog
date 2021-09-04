/// <reference types="react" />
import { Props as SvgProps } from './Svg';
import { Margin } from './types';
export interface Props {
    margin?: Margin | number;
    aspectRatio?: number;
    maxWidth?: number;
    maxHeight?: number;
}
declare const ResponsiveSvg: ({ children, margin, aspectRatio, maxWidth, maxHeight, ...rest }: Props & Omit<SvgProps, 'width' | 'height'>) => JSX.Element;
export default ResponsiveSvg;
//# sourceMappingURL=ResponsiveSvg.d.ts.map