import * as React from 'react';
import { ProgressBar, ProgressBarModel } from '@syncfusion/ej2-progressbar';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * Represents react ProgressBar Component
 * ```tsx
 * <ProgressBarComponent></ProgressBarComponent>
 * ```
 */
export declare class ProgressBarComponent extends ProgressBar {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<ProgressBarModel & DefaultHtmlAttributes>;
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
    }> & Readonly<ProgressBarModel & DefaultHtmlAttributes>;
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
