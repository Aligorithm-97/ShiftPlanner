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
 * `RowDirective` represent a row of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RowsDirective>
 *    <RowDirective></RowDirective>
 *    </RowsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var RowDirective = /** @class */ (function (_super) {
    __extends(RowDirective, _super);
    function RowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowDirective.moduleName = 'row';
    return RowDirective;
}(ComplexBase));
export { RowDirective };
var RowsDirective = /** @class */ (function (_super) {
    __extends(RowsDirective, _super);
    function RowsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowsDirective.propertyName = 'rows';
    RowsDirective.moduleName = 'rows';
    return RowsDirective;
}(ComplexBase));
export { RowsDirective };
