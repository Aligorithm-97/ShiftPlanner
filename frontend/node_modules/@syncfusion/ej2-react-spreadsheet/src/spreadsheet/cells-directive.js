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
 * `CellDirective` represent a cell of the React Spreadsheet.
 * It must be contained in a `RowDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RowsDirective>
 *    <RowDirective>
 *    <CellsDirective>
 *    <CellDirective value='A1'></CellDirective>
 *    </CellsDirective>
 *    </RowDirective>
 *    </RowsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var CellDirective = /** @class */ (function (_super) {
    __extends(CellDirective, _super);
    function CellDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellDirective.moduleName = 'cell';
    return CellDirective;
}(ComplexBase));
export { CellDirective };
var CellsDirective = /** @class */ (function (_super) {
    __extends(CellsDirective, _super);
    function CellsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellsDirective.propertyName = 'cells';
    CellsDirective.moduleName = 'cells';
    return CellsDirective;
}(ComplexBase));
export { CellsDirective };
