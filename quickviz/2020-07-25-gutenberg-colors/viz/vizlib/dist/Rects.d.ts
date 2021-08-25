import React, { CSSProperties } from 'react';
declare type StyleFunction = (d: any) => CSSProperties;
export interface Props {
    data: any;
    style?: CSSProperties | StyleFunction;
    x?: (d: any) => number;
    y?: (d: any) => number;
    width?: (d: any) => number;
    height?: (d: any) => number;
    className?: string;
    keys?: (d: any) => string;
    [key: string]: any;
}
declare const Rects: React.FC<Props>;
export default Rects;
//# sourceMappingURL=Rects.d.ts.map