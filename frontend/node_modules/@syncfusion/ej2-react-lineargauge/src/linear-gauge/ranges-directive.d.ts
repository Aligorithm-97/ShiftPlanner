import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RangeModel } from '@syncfusion/ej2-lineargauge';
/**
 * `Ranges` directive represent a ranges of the react linear gauge.
 * It must be contained in a LinearGauge component(`LinearGauge`).
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <RangesDirective>
 * <RangeDirective></RangeDirective>
 * </RangesDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
export declare class RangeDirective extends ComplexBase<RangeModel, RangeModel> {
    static moduleName: string;
}
export declare class RangesDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
