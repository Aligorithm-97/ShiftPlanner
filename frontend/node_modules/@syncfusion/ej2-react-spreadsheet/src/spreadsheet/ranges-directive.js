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
 * `RangeDirective` represent a range of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RangesDirective>
 *    <RangeDirective dataSource={data}></RangeDirective>
 *    </RangesDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var RangeDirective = /** @class */ (function (_super) {
    __extends(RangeDirective, _super);
    function RangeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeDirective.moduleName = 'range';
    return RangeDirective;
}(ComplexBase));
export { RangeDirective };
var RangesDirective = /** @class */ (function (_super) {
    __extends(RangesDirective, _super);
    function RangesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangesDirective.propertyName = 'ranges';
    RangesDirective.moduleName = 'ranges';
    return RangesDirective;
}(ComplexBase));
export { RangesDirective };
