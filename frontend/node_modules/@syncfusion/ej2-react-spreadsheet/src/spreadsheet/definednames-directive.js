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
 * `DefinedNameDirective` represent a defined name of the React Spreadsheet.
 * It must be contained in a Spreadsheet component(`SpreadsheetComponent`).
 * ```tsx
 * <SpreadsheetComponent>
 *   <DefinedNamesDirective>
 *    <DefinedNameDirective></DefinedNameDirective>
 *    <DefinedNameDirective></DefinedNameDirective>
 *   </DefinedNamesDirective>
 * </SpreadsheetComponent>
 * ```
 */
var DefinedNameDirective = /** @class */ (function (_super) {
    __extends(DefinedNameDirective, _super);
    function DefinedNameDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedNameDirective.moduleName = 'definedName';
    return DefinedNameDirective;
}(ComplexBase));
export { DefinedNameDirective };
var DefinedNamesDirective = /** @class */ (function (_super) {
    __extends(DefinedNamesDirective, _super);
    function DefinedNamesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedNamesDirective.propertyName = 'definedNames';
    DefinedNamesDirective.moduleName = 'definedNames';
    return DefinedNamesDirective;
}(ComplexBase));
export { DefinedNamesDirective };
