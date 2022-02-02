import { ComplexBase } from '@syncfusion/ej2-react-base';
import { CellModel } from '@syncfusion/ej2-spreadsheet';
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
export declare class CellDirective extends ComplexBase<CellModel, CellModel> {
    static moduleName: string;
}
export declare class CellsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
