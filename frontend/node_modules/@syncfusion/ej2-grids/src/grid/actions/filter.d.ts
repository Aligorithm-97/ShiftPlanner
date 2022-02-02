import { FilterSettings } from '../base/grid';
import { IGrid, IAction, NotifyArgs, IFilterOperator, FilterUI } from '../base/interface';
import { PredicateModel } from '../base/grid-model';
import { ServiceLocator } from '../services/service-locator';
import { Column } from '../models/column';
import { ResponsiveDialogRenderer } from '../renderer/responsive-dialog-renderer';
/**
 *
 * The `Filter` module is used to handle filtering action.
 */
export declare class Filter implements IAction {
    private filterSettings;
    private element;
    private value;
    private predicate;
    private operator;
    private column;
    private fieldName;
    private matchCase;
    private ignoreAccent;
    private timer;
    private filterStatusMsg;
    private currentFilterObject;
    private isRemove;
    private contentRefresh;
    private initialLoad;
    private filterByMethod;
    private refresh;
    private values;
    operators: Object;
    private cellText;
    private nextFlMenuOpen;
    private type;
    /** @hidden */
    filterModule: {
        openDialog: Function;
        closeDialog: Function;
        destroy: Function;
        isresetFocus: boolean;
        getFilterUIInfo: Function;
        clearCustomFilter: Function;
        closeResponsiveDialog: Function;
        applyCustomFilter: Function;
        renderCheckBoxMenu?: Function;
    };
    /** @hidden */
    filterOperators: IFilterOperator;
    private fltrDlgDetails;
    customOperators: Object;
    /** @hidden */
    skipNumberInput: string[];
    skipStringInput: string[];
    /** @hidden */
    parent: IGrid;
    /** @hidden */
    serviceLocator: ServiceLocator;
    private l10n;
    private valueFormatter;
    private actualPredicate;
    prevFilterObject: PredicateModel;
    filterObjIndex: number;
    /** @hidden */
    responsiveDialogRenderer: ResponsiveDialogRenderer;
    menuOperator: {
        [key: string]: Object;
    }[];
    private docClickHandler;
    /**
     * Constructor for Grid filtering module
     * @hidden
     */
    constructor(parent?: IGrid, filterSettings?: FilterSettings, serviceLocator?: ServiceLocator);
    /**
     * To render filter bar when filtering enabled.
     * @return {void}
     * @hidden
     */
    render(e?: NotifyArgs): void;
    /**
     * To show the responsive custom filter dialog
     * @return {void}
     * @hidden
     */
    showCustomFilter(): void;
    /** @hidden */
    setFilterModel(col: Column): void;
    /**
     * To destroy the filter bar.
     * @return {void}
     * @hidden
     */
    destroy(): void;
    private setFullScreenDialog;
    private generateRow;
    private generateCells;
    private generateCell;
    /**
     * To update filterSettings when applying filter.
     * @return {void}
     * @hidden
     */
    updateModel(): void;
    private getFilteredColsIndexByField;
    /**
     * To trigger action complete event.
     * @return {void}
     * @hidden
     */
    onActionComplete(e: NotifyArgs): void;
    private wireEvents;
    private unWireEvents;
    private enableAfterRender;
    private refreshFilterValue;
    private initialEnd;
    /**
     * @hidden
     */
    addEventListener(): void;
    /**
     * @hidden
     */
    removeEventListener(): void;
    private filterMenuClose;
    /**
     * Filters the Grid row by fieldName, filterOperator, and filterValue.
     * @param  {string} fieldName - Defines the field name of the filter column.
     * @param  {string} filterOperator - Defines the operator to filter records.
     * @param  {string | number | Date | boolean} filterValue - Defines the value which is used to filter records.
     * @param  {string} predicate - Defines the relationship of one filter query with another by using AND or OR predicate.
     * @param  {boolean} matchCase - If match case is set to true, then the filter records
     * the exact match or <br> filters records that are case insensitive (uppercase and lowercase letters treated the same).
     * @param {boolean} ignoreAccent - If ignoreAccent set to true, then filter ignores the diacritic characters or accents while filtering.
     * @param  {string} actualFilterValue - Defines the actual filter value for the filter column.
     * @param  {string} actualOperator - Defines the actual filter operator for the filter column.
     * @return {void}
     */
    filterByColumn(fieldName: string, filterOperator: string, filterValue: string | number | Date | boolean | number[] | string[] | Date[] | boolean[], predicate?: string, matchCase?: boolean, ignoreAccent?: boolean, actualFilterValue?: Object, actualOperator?: Object): void;
    private applyColumnFormat;
    private skipUid;
    private onPropertyChanged;
    private refreshFilterSettings;
    private updateFilterIcon;
    private getFilterBarElement;
    /**
     * @private
     */
    refreshFilter(): void;
    /**
     * Clears all the filtered rows of the Grid.
     * @return {void}
     */
    clearFiltering(fields?: string[]): void;
    private checkAlreadyColFiltered;
    private columnMenuFilter;
    private filterDialogOpen;
    /** @hidden */
    createOptions(col: Column, target: Element, left?: number, top?: number): Object;
    /**
     * Removes filtered column by field name.
     * @param  {string} field - Defines column field name to remove filter.
     * @param  {boolean} isClearFilterBar -  Specifies whether the filter bar value needs to be cleared.
     * @return {void}
     * @hidden
     */
    removeFilteredColsByField(field: string, isClearFilterBar?: boolean): void;
    /**
     * For internal use only - Get the module name.
     * @private
     */
    protected getModuleName(): string;
    private keyUpHandlerImmediate;
    private keyUpHandler;
    private updateCrossIcon;
    private updateFilterMsg;
    private setFormatForFlColumn;
    private checkForSkipInput;
    private processFilter;
    private startTimer;
    private stopTimer;
    private onTimerTick;
    private validateFilterValue;
    private getOperator;
    private columnPositionChanged;
    private getLocalizedCustomOperators;
    /** @hidden */
    openMenuByField(field: string): void;
    private filterIconClickHandler;
    private clickHandler;
    private filterHandler;
    private updateFilter;
    private refreshFilterIcon;
    private addFilteredClass;
    /**
     * @hidden
     */
    getFilterUIInfo(): FilterUI;
    /**
     * @hidden
     */
    private getOperatorName;
    /**
     * Renders checkbox items in Menu filter dialog.
     * @return {void}
     */
    renderCheckboxOnFilterMenu(): HTMLElement;
}
