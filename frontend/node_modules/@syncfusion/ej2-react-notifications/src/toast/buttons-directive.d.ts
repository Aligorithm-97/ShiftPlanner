import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ButtonModelPropsModel } from '@syncfusion/ej2-notifications';
/**
 * `ButtonDirective` represent a button of the react Toast.
 * It must be contained in a Toast component(`ToastrComponent`).
 * ```tsx
 * <ToastComponent>
 * <ButtonsDirective>
 * <ButtonDirective content='Ok' isPrimary=true></ButtonDirective>
 * <ButtonDirective content='Cancel'></ButtonDirective>
 * <ButtonsDirective>
 * </ToastComponent>
 * ```
 */
export declare class ButtonModelPropDirective extends ComplexBase<ButtonModelPropsModel, ButtonModelPropsModel> {
    static moduleName: string;
}
export declare class ButtonModelPropsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
