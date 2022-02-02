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
 * `ProgressBarAnnotationsDirective` directive represent a annotation of the react progressbar.
 * ```tsx
 * <progressbarComponent>
 * <ProgressBarAnnotationsDirective>
 * <ProgressBarAnnotationDirective></ProgressBarAnnotationDirective>
 * </ProgressBarAnnotationsDirective>
 * </progressbarComponent>
 * ```
 */
var ProgressBarAnnotationDirective = /** @class */ (function (_super) {
    __extends(ProgressBarAnnotationDirective, _super);
    function ProgressBarAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBarAnnotationDirective.moduleName = 'progressBarAnnotation';
    return ProgressBarAnnotationDirective;
}(ComplexBase));
export { ProgressBarAnnotationDirective };
var ProgressBarAnnotationsDirective = /** @class */ (function (_super) {
    __extends(ProgressBarAnnotationsDirective, _super);
    function ProgressBarAnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBarAnnotationsDirective.propertyName = 'annotations';
    ProgressBarAnnotationsDirective.moduleName = 'progressBarAnnotations';
    return ProgressBarAnnotationsDirective;
}(ComplexBase));
export { ProgressBarAnnotationsDirective };
