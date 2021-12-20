import { ReactNode, SVGProps } from 'react';
import { Margin } from './types';
interface SvgProps {
    margin?: Margin | number;
    children: ReactNode;
    width: number;
    height: number;
}
export declare type Props = SvgProps & SVGProps<SVGSVGElement>;
declare const Svg: ({ children, margin, width, height, ...rest }: Props) => JSX.Element | null;
export default Svg;
//# sourceMappingURL=Svg.d.ts.map