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
var CustomCursorDirective = /** @class */ (function (_super) {
    __extends(CustomCursorDirective, _super);
    function CustomCursorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomCursorDirective.moduleName = 'customCursor';
    return CustomCursorDirective;
}(ComplexBase));
export { CustomCursorDirective };
var CustomCursorsDirective = /** @class */ (function (_super) {
    __extends(CustomCursorsDirective, _super);
    function CustomCursorsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomCursorsDirective.propertyName = 'customCursor';
    CustomCursorsDirective.moduleName = 'customCursors';
    return CustomCursorsDirective;
}(ComplexBase));
export { CustomCursorsDirective };
