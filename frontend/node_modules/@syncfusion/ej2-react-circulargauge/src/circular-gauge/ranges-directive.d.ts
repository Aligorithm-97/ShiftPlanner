import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RangeModel } from '@syncfusion/ej2-circulargauge';
/**
 * `Ranges` directive represent a ranges of the react circular gauge.
 * It must be contained in a CircularGauge component(`CircularGauge`).
 * ```tsx
 * <CircularGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <RangesDirective>
 * <RangeDirective></RangeDirective>
 * </RangesDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </CircularGaugeComponent>
 * ```
 */
export declare class RangeDirective extends ComplexBase<RangeModel, RangeModel> {
    static moduleName: string;
}
export declare class RangesDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
