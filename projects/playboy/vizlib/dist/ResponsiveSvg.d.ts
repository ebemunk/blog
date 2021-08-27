/// <reference types="react" />
import { Props as SvgProps } from './Svg';
import { Margin } from './types';
export interface Props {
    margin?: Margin | number;
}
declare const ResponsiveSvg: ({ children, margin, ...rest }: Props & Omit<SvgProps, 'width' | 'height'>) => JSX.Element;
export default ResponsiveSvg;
//# sourceMappingURL=ResponsiveSvg.d.ts.map