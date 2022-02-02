import * as React from 'react';
import { PivotView, PivotViewModel } from '@syncfusion/ej2-pivotview';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface PivotViewTypecast {
    cellTemplate?: string | Function | any;
}
/**
 * `PivotViewComponent` represents the react PivotView.
 * ```tsx
 * <PivotViewComponent/>
 * ```
 */
export declare class PivotViewComponent extends PivotView {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<PivotViewModel & DefaultHtmlAttributes | PivotViewTypecast>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<PivotViewModel & DefaultHtmlAttributes | PivotViewTypecast>;
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
