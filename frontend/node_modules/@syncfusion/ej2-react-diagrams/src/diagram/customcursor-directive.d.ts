import { ComplexBase } from '@syncfusion/ej2-react-base';
import { CustomCursorActionModel } from '@syncfusion/ej2-diagrams';
/**
 * `custormaps Directive` directive represent a connectors of the react diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <CustormapsDirective>
 * <CustormapDirective></CustormapDirective>
 * </CustormapsDirective>
 * </DiagramComponent>
 * ```
 */
export declare class CustomCursorDirective extends ComplexBase<CustomCursorActionModel, CustomCursorActionModel> {
    static moduleName: string;
}
export declare class CustomCursorsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
