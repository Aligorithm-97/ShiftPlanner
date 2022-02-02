import { ComplexBase } from '@syncfusion/ej2-react-base';
import { PointerModel } from '@syncfusion/ej2-lineargauge';
/**
 * `Pointers` directive represent a pointers of the react linear gauge.
 * It must be contained in a LinearGauge component(`LinearGauge`).
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <PointersDirective>
 * <PointerDirective></PointerDirective>
 * </PointersDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
export declare class PointerDirective extends ComplexBase<PointerModel, PointerModel> {
    static moduleName: string;
}
export declare class PointersDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
