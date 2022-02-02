import * as React from 'react';
import { Toast, ToastModel } from '@syncfusion/ej2-notifications';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface ToastTypecast {
    title?: string | Function | any;
    content?: string | Function | any;
    template?: string | Function | any;
}
/**
 * Represents the React Toast Component
 * ```html
 * <Toast></Toast>
 * ```
 */
export declare class ToastComponent extends Toast {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<ToastModel & DefaultHtmlAttributes | ToastTypecast>;
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
    }> & Readonly<ToastModel & DefaultHtmlAttributes | ToastTypecast>;
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
