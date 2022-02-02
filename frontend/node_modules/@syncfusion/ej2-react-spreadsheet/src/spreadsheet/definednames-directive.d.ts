import { ComplexBase } from '@syncfusion/ej2-react-base';
import { DefineNameModel } from '@syncfusion/ej2-spreadsheet';
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
export declare class DefinedNameDirective extends ComplexBase<DefineNameModel, DefineNameModel> {
    static moduleName: string;
}
export declare class DefinedNamesDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
