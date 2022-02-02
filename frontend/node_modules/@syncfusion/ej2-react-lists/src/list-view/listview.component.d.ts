import * as React from 'react';
import { ListView, ListViewModel } from '@syncfusion/ej2-lists';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface ListViewTypecast {
    template?: string | Function | any;
    groupTemplate?: string | Function | any;
    headerTemplate?: string | Function | any;
}
/**
 * Represents ListView component for React
 * ```
 * <ListViewComponent dataSource={data}/>
 * ```
 */
export declare class ListViewComponent extends ListView {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<ListViewModel & DefaultHtmlAttributes | ListViewTypecast>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<ListViewModel & DefaultHtmlAttributes | ListViewTypecast>;
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
