import { ReactNode } from 'react';
import { Margin } from './types';
export interface Props {
    margin?: Margin | number;
    children: ReactNode;
    width: number;
    height: number;
}
declare const Svg: ({ children, margin, width, height, ...rest }: Props) => JSX.Element | null;
export default Svg;
//# sourceMappingURL=Svg.d.ts.map