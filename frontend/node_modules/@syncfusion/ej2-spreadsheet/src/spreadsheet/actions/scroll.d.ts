import { Spreadsheet } from '../base/index';
import { IOffset } from '../common/index';
/**
 * The `Scroll` module is used to handle scrolling behavior.
 *
 * @hidden
 */
export declare class Scroll {
    private parent;
    offset: {
        left: IOffset;
        top: IOffset;
    };
    private topIndex;
    private leftIndex;
    private clientX;
    private initScrollValue;
    /** @hidden */
    prevScroll: {
        scrollLeft: number;
        scrollTop: number;
    };
    /**
     * Constructor for the Spreadsheet scroll module.
     *
     * @param {Spreadsheet} parent - Constructor for the Spreadsheet scroll module.
     * @private
     */
    constructor(parent: Spreadsheet);
    private onContentScroll;
    private updateNonVirtualRows;
    private updateNonVirtualCols;
    private updateTopLeftCell;
    private getRowOffset;
    private getColOffset;
    private contentLoaded;
    private updateNonVirualScrollWidth;
    private onWheel;
    private scrollHandler;
    private mouseDownHandler;
    private mouseMoveHandler;
    private mouseUpHandler;
    private setScrollEvent;
    private initProps;
    /**
     * @hidden
     *
     * @returns {void} - To Set padding
     */
    setPadding(): void;
    private addEventListener;
    private destroy;
    private removeEventListener;
}
