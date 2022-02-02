import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AnnotationModel } from '@syncfusion/ej2-lineargauge';
export interface AnnotationDirTypecast {
    content?: string | Function | any;
}
/**
 * `Annotations` directive represent a annotations of the react linear gauge.
 * It must be contained in a LinearGauge component(`LinearGauge`).
 * ```tsx
 * <LinearGaugeComponent>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </LinearGaugeComponent>
 * ```
 */
export declare class AnnotationDirective extends ComplexBase<AnnotationModel | AnnotationDirTypecast, AnnotationModel | AnnotationDirTypecast> {
    static moduleName: string;
}
export declare class AnnotationsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
