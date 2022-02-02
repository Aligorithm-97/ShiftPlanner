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
 * `ConditionalFormatDirective` represent a conditionalformat of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <ConditionalFormatsDirective>
 *    <ConditionalFormatDirective dataSource={data}></ConditionalFormatDirective>
 *    </ConditionalFormatsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var ConditionalFormatDirective = /** @class */ (function (_super) {
    __extends(ConditionalFormatDirective, _super);
    function ConditionalFormatDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionalFormatDirective.moduleName = 'conditionalFormat';
    return ConditionalFormatDirective;
}(ComplexBase));
export { ConditionalFormatDirective };
var ConditionalFormatsDirective = /** @class */ (function (_super) {
    __extends(ConditionalFormatsDirective, _super);
    function ConditionalFormatsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionalFormatsDirective.propertyName = 'conditionalFormats';
    ConditionalFormatsDirective.moduleName = 'conditionalFormats';
    return ConditionalFormatsDirective;
}(ComplexBase));
export { ConditionalFormatsDirective };
