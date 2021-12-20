import React from 'react';
export declare type PathProps = {
    generator: (data: any[]) => string;
    data: any[];
    style?: React.CSSProperties;
    spring?: any;
    children?: React.ReactNode;
    [key: string]: any;
};
declare const Path: ({ generator, data, style, spring, children, ...rest }: PathProps) => JSX.Element;
export default Path;
//# sourceMappingURL=Path.d.ts.map