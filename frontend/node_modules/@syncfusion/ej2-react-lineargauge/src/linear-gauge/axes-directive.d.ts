import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AxisModel } from '@syncfusion/ej2-lineargauge';
/**
 * `Axis` directive represent a axes of the react linear gauge.
 * It must be contained in a LinearGauge component(`LinearGauge`).
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective></AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
export declare class AxisDirective extends ComplexBase<AxisModel, AxisModel> {
    static moduleName: string;
}
export declare class AxesDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
