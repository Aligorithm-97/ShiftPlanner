import * as React from 'react';
import { HeatMap, HeatMapModel } from '@syncfusion/ej2-heatmap';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * Represents react HeatMap Component
 * ```tsx
 * <HeatMapComponent></HeatMapComponent>
 * ```
 */
export declare class HeatMapComponent extends HeatMap {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<HeatMapModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<HeatMapModel & DefaultHtmlAttributes>;
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
