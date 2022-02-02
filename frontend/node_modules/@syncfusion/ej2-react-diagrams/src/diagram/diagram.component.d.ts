import * as React from 'react';
import { Diagram, DiagramModel } from '@syncfusion/ej2-diagrams';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface DiagramTypecast {
    annotationTemplate?: string | Function | any;
    nodeTemplate?: string | Function | any;
    userHandleTemplate?: string | Function | any;
}
/**
 * Represents react Diagram Component
 * ```tsx
 * <DiagramComponent></DiagramComponent>
 * ```
 */
export declare class DiagramComponent extends Diagram {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<DiagramModel & DefaultHtmlAttributes | DiagramTypecast>;
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
    }> & Readonly<DiagramModel & DefaultHtmlAttributes | DiagramTypecast>;
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
