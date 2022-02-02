import * as React from 'react';
import { BarcodeGenerator, BarcodeGeneratorModel } from '@syncfusion/ej2-barcode-generator';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * Represents react Barcode Component
 * ```tsx
 * <BarcodeGeneratorComponent></BarcodeGeneratorComponent>
 * ```
 */
export declare class BarcodeGeneratorComponent extends BarcodeGenerator {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<BarcodeGeneratorModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<BarcodeGeneratorModel & DefaultHtmlAttributes>;
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
