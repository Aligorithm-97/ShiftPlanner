import * as React from 'react';
import { InPlaceEditor, InPlaceEditorModel } from '@syncfusion/ej2-inplace-editor';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface InPlaceEditorTypecast {
    template?: string | Function | any;
}
/**
 * `InPlaceEditor` represents the react InPlaceEditor.
 * ```tsx
 * <InPlaceEditor />
 * ```
 */
export declare class InPlaceEditorComponent extends InPlaceEditor {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<InPlaceEditorModel & DefaultHtmlAttributes | InPlaceEditorTypecast>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<InPlaceEditorModel & DefaultHtmlAttributes | InPlaceEditorTypecast>;
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
