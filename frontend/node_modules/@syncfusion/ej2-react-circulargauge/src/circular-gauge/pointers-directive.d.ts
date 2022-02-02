import { ComplexBase } from '@syncfusion/ej2-react-base';
import { PointerModel } from '@syncfusion/ej2-circulargauge';
/**
 * `Pointers` directive represent a pointers of the react circular gauge.
 * It must be contained in a CircularGauge component(`CircularGauge`).
 * ```tsx
 * <CircularGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <PointersDirective>
 * <PointerDirective></PointerDirective>
 * </PointersDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </CircularGaugeComponent>
 * ```
 */
export declare class PointerDirective extends ComplexBase<PointerModel, PointerModel> {
    static moduleName: string;
}
export declare class PointersDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
