import * as React from 'react';
import { Gantt, GanttModel } from '@syncfusion/ej2-gantt';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface GanttTypecast {
    parentTaskbarTemplate?: string | Function | any;
    milestoneTemplate?: string | Function | any;
    taskbarTemplate?: string | Function | any;
    labelSettingsRightLabel?: string | Function | any;
    labelSettingsLeftLabel?: string | Function | any;
    labelSettingsTaskLabel?: string | Function | any;
    tooltipSettingsTaskbar?: string | Function | any;
    tooltipSettingsBaseline?: string | Function | any;
    tooltipSettingsConnectorLine?: string | Function | any;
    tooltipSettingsEditing?: string | Function | any;
}
/**
 * `GanttComponent` represents the react Gantt.
 * ```tsx
 * <GanttComponent dataSource={data} allowSelection={true} allowSorting={true}/>
 * ```
 */
export declare class GanttComponent extends Gantt {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<GanttModel & DefaultHtmlAttributes | GanttTypecast>;
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
    }> & Readonly<GanttModel & DefaultHtmlAttributes | GanttTypecast>;
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
