import { ComplexBase } from '@syncfusion/ej2-react-base';
import { SheetModel } from '@syncfusion/ej2-spreadsheet';
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
export declare class SheetDirective extends ComplexBase<SheetModel, SheetModel> {
    static moduleName: string;
}
export declare class SheetsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
