import * as React from 'react';
import { LinearGauge, LinearGaugeModel } from '@syncfusion/ej2-lineargauge';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface LinearGaugeTypecast {
    tooltipTemplate?: string | Function | any;
}
/**
 * Represents react Linear Gauge Component
 * ```tsx
 * <LinearGaugeComponent></LinearGaugeComponent>
 * ```
 */
export declare class LinearGaugeComponent extends LinearGauge {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<LinearGaugeModel & DefaultHtmlAttributes | LinearGaugeTypecast>;
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
    }> & Readonly<LinearGaugeModel & DefaultHtmlAttributes | LinearGaugeTypecast>;
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
