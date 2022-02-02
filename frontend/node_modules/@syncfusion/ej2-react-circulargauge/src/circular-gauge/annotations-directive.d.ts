import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AnnotationModel } from '@syncfusion/ej2-circulargauge';
export interface AnnotationDirTypecast {
    content?: string | Function | any;
}
/**
 * `Annotations` directive represent a annotations of the react circular gauge.
 * It must be contained in a CircularGauge component(`CircularGauge`).
 * ```tsx
 * <CircularGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </CircularGaugeComponent>
 * ```
 */
export declare class AnnotationDirective extends ComplexBase<AnnotationModel | AnnotationDirTypecast, AnnotationModel | AnnotationDirTypecast> {
    static moduleName: string;
}
export declare class AnnotationsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
