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
 * `SheetDirective` represent a sheet of the React Spreadsheet.
 * It must be contained in a Spreadsheet component(`SpreadsheetComponent`).
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective></SheetDirective>
 *    <SheetDirective></SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var SheetDirective = /** @class */ (function (_super) {
    __extends(SheetDirective, _super);
    function SheetDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SheetDirective.moduleName = 'sheet';
    return SheetDirective;
}(ComplexBase));
export { SheetDirective };
var SheetsDirective = /** @class */ (function (_super) {
    __extends(SheetsDirective, _super);
    function SheetsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SheetsDirective.propertyName = 'sheets';
    SheetsDirective.moduleName = 'sheets';
    return SheetsDirective;
}(ComplexBase));
export { SheetsDirective };
