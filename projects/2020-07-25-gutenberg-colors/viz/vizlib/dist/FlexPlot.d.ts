import { Props as PlotProps } from './Plot';
import { Margin } from './types';
export interface Props {
    margin?: Margin | number;
}
export declare const FlexPlot: ({ children, margin, ...rest }: Props & Omit<PlotProps, 'width' | 'height'>) => JSX.Element;
export default FlexPlot;
//# sourceMappingURL=FlexPlot.d.ts.map