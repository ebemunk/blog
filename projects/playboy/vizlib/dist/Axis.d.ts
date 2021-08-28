import React, { SVGProps } from 'react';
import { axisTop, axisRight, axisBottom, axisLeft } from 'd3';
declare const AXIS_TYPE: {
    top: typeof axisTop;
    right: typeof axisRight;
    bottom: typeof axisBottom;
    left: typeof axisLeft;
};
declare const Axis: ({ orientation, scale, ticks, tickSize, tickSizeInner, tickSizeOuter, tickFormat, tickValues, tickPadding, tickArguments, offset, transitionDuration, ...otherProps }: {
    orientation: keyof typeof AXIS_TYPE;
    scale: d3.AxisScale<any>;
    ticks?: any;
    tickSize?: number | undefined;
    tickSizeInner?: number | undefined;
    tickSizeOuter?: number | undefined;
    tickFormat?: any;
    tickValues?: any;
    tickPadding?: number | undefined;
    tickArguments?: any;
    offset?: any;
    transitionDuration?: number | undefined;
} & React.SVGProps<SVGGElement>) => JSX.Element;
export default Axis;
//# sourceMappingURL=Axis.d.ts.map