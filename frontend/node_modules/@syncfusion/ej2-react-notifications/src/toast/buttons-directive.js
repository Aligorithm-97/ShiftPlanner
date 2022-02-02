var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ComplexBase } from '@syncfusion/ej2-react-base';
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
var ButtonModelPropDirective = /** @class */ (function (_super) {
    __extends(ButtonModelPropDirective, _super);
    function ButtonModelPropDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonModelPropDirective.moduleName = 'buttonModelProp';
    return ButtonModelPropDirective;
}(ComplexBase));
export { ButtonModelPropDirective };
var ButtonModelPropsDirective = /** @class */ (function (_super) {
    __extends(ButtonModelPropsDirective, _super);
    function ButtonModelPropsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonModelPropsDirective.propertyName = 'buttons';
    ButtonModelPropsDirective.moduleName = 'buttonModelProps';
    return ButtonModelPropsDirective;
}(ComplexBase));
export { ButtonModelPropsDirective };
