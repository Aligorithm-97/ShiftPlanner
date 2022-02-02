import * as React from 'react';
import { Spreadsheet, SpreadsheetModel } from '@syncfusion/ej2-spreadsheet';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface SpreadsheetTypecast {
    template?: string | Function | any;
}
/**
 * `SpreadsheetComponent` represents the react Spreadsheet.
 * ```tsx
 * <SpreadsheetComponent />
 * ```
 */
export declare class SpreadsheetComponent extends Spreadsheet {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<SpreadsheetModel & DefaultHtmlAttributes | SpreadsheetTypecast>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    directivekeys: {
        [key: string]: Object;
    };
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<SpreadsheetModel & DefaultHtmlAttributes | SpreadsheetTypecast>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    portals: any;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
