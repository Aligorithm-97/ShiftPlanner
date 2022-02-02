import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AxisModel } from '@syncfusion/ej2-circulargauge';
/**
 * `Axis` directive represent a axes of the react circular gauge
 * It must be contained in a CircularGauge component(`CircularGauge`).
 * ```tsx
 * <CircularGaugeComponent>
 * <AxesDirective>
 * <AxisDirective></AxisDirective>
 * </AxesDirective>
 * </CircularGaugeComponent>
 * ```
 */
export declare class AxisDirective extends ComplexBase<AxisModel, AxisModel> {
    static moduleName: string;
}
export declare class AxesDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
