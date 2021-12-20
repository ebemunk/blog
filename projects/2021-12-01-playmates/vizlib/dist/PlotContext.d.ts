/// <reference types="react" />
import { Margin } from './types';
export interface PlotContextInterface {
    transform: string;
    chartWidth: number;
    chartHeight: number;
    margin: Margin;
    getBoundingClientRect?: () => DOMRect | undefined;
    [key: string]: any;
}
declare const PlotContext: import("react").Context<PlotContextInterface>;
export default PlotContext;
//# sourceMappingURL=PlotContext.d.ts.map