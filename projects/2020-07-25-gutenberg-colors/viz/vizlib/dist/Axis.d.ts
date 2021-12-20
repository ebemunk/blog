export declare type Orientation = 'top' | 'right' | 'bottom' | 'left';
export declare type Props = {
    orientation?: Orientation;
    scale: any;
    ticks?: number[];
    tickFormat?: Function;
    tickFontSize?: number;
    tickProps?: {};
    markLength?: number;
    markProps?: {};
    showDomain?: boolean;
    domainProps?: {};
    animate?: boolean;
    [key: string]: any;
};
export declare const Axis: ({ orientation, scale, ticks, tickFormat, tickFontSize, tickProps, markLength, markProps, showDomain, domainProps, animate, ...rest }: Props) => JSX.Element;
export default Axis;
//# sourceMappingURL=Axis.d.ts.map