import { ReactNode } from 'react';
import { Margin } from './types';
export interface Props {
    margin?: Margin | number;
    children: ReactNode;
    width: number;
    height: number;
}
declare const Plot: ({ children, margin, width, height, ...rest }: Props) => JSX.Element | null;
export default Plot;
//# sourceMappingURL=Plot.d.ts.map