import * as React from 'react';
import { PivotFieldList, PivotFieldListModel } from '@syncfusion/ej2-pivotview';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * `PivotFieldListComponent` represents the react PivotFieldList.
 * ```tsx
 * <PivotFieldListComponent/>
 * ```
 */
export declare class PivotFieldListComponent extends PivotFieldList {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<PivotFieldListModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<PivotFieldListModel & DefaultHtmlAttributes>;
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
