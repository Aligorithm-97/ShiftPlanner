import * as React from 'react';
import { TreeMap, TreeMapModel } from '@syncfusion/ej2-treemap';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface TreeMapTypecast {
    tooltipSettingsTemplate?: string | Function | any;
    leafItemSettingsLabelTemplate?: string | Function | any;
}
/**
 * Represents react TreeMap Component
 * ```tsx
 * <TreeMapComponent></TreeMapComponent>
 * ```
 */
export declare class TreeMapComponent extends TreeMap {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<TreeMapModel & DefaultHtmlAttributes | TreeMapTypecast>;
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
    }> & Readonly<TreeMapModel & DefaultHtmlAttributes | TreeMapTypecast>;
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
