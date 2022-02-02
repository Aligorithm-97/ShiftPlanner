import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RowModel } from '@syncfusion/ej2-spreadsheet';
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
export declare class RowDirective extends ComplexBase<RowModel, RowModel> {
    static moduleName: string;
}
export declare class RowsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
