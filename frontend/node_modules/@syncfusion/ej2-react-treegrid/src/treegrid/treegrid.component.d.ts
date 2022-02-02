import * as React from 'react';
import { TreeGrid, TreeGridModel } from '@syncfusion/ej2-treegrid';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface TreeGridTypecast {
    toolbarTemplate?: string | Function | any;
    pagerTemplate?: string | Function | any;
    rowTemplate?: string | Function | any;
    detailTemplate?: string | Function | any;
    editSettingsTemplate?: string | Function | any;
}
/**
 * `TreeTreeGridComponent` represents the react TreeTreeGrid.
 * ```tsx
 * <TreeTreeGridComponent dataSource={data} allowPaging={true} allowSorting={true}/>
 * ```
 */
export declare class TreeGridComponent extends TreeGrid {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<TreeGridModel & DefaultHtmlAttributes | TreeGridTypecast>;
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
    }> & Readonly<TreeGridModel & DefaultHtmlAttributes | TreeGridTypecast>;
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
