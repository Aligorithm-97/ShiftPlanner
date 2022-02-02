import { CellModel, ColumnModel } from './../base/index';
/**
 * Check whether the text is formula or not.
 *
 * @param {string} text - Specify the text.
 * @returns {boolean} - Check whether the text is formula or not.
 */
export declare function checkIsFormula(text: string): boolean;
/**
 * Check whether the value is cell reference or not.
 *
 * @param {string} value - Specify the value to check.
 * @returns {boolean} - Returns boolean value
 */
export declare function isCellReference(value: string): boolean;
/**
 * Check whether the value is character or not.
 *
 * @param {string} value - Specify the value to check.
 * @returns {boolean} - Returns boolean value
 */
export declare function isChar(value: string): boolean;
/**
 * @param {number[]} range - Specify the range
 * @param {number} rowIdx - Specify the row index
 * @param {number} colIdx - Specify the col index
 * @returns {boolean} - Returns boolean value
 */
export declare function inRange(range: number[], rowIdx: number, colIdx: number): boolean;
/** @hidden
 * @param {number[]} range - Specify the range
 * @param {number[]} testRange - Specify the test range
 * @param {boolean} isModify - Specify the boolean value
 * @returns {boolean} - Returns boolean value
 */
export declare function isInRange(range: number[], testRange: number[], isModify?: boolean): boolean;
/**
 * Check whether the cell is locked or not
 *
 * @param {CellModel} cell - Specify the cell.
 * @param {ColumnModel} column - Specify the column.
 * @returns {boolean} - Returns boolean value
 * @hidden
 */
export declare function isLocked(cell: CellModel, column: ColumnModel): boolean;
/**
 * Check whether the value is cell reference or not.
 *
 * @param {string} value - Specify the value to check.
 * @returns {boolean} - Returns boolean value
 * @hidden
 */
export declare function isValidCellReference(value: string): boolean;
