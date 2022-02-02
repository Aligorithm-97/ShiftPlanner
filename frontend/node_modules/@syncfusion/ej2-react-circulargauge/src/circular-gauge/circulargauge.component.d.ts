import * as React from 'react';
import { CircularGauge, CircularGaugeModel } from '@syncfusion/ej2-circulargauge';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface CircularGaugeTypecast {
    tooltipTemplate?: string | Function | any;
}
/**
 * Represents react Circular Gauge Component
 * ```tsx
 * <CircularGaugeComponent></CircularGaugeComponent>
 * ```
 */
export declare class CircularGaugeComponent extends CircularGauge {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<CircularGaugeModel & DefaultHtmlAttributes | CircularGaugeTypecast>;
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
    }> & Readonly<CircularGaugeModel & DefaultHtmlAttributes | CircularGaugeTypecast>;
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
