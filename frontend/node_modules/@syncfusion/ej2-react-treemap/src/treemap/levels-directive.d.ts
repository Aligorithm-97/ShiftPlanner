import { ComplexBase } from '@syncfusion/ej2-react-base';
import { LevelSettingsModel } from '@syncfusion/ej2-treemap';
export interface LevelSettingsDirTypecast {
    headerTemplate?: string | Function | any;
}
/**
 * `LevelsDirective` directive represent a levels of the react treemap.
 * It must be contained in a TreeMap component(`TreeMapComponent`).
 * ```tsx
 * <TreeMapComponent>
 * <LevelsDirective>
 * <LevelDirective></LevelDirective>
 * </LevelsDirective>
 * </TreeMapComponent>
 * ```
 */
export declare class LevelDirective extends ComplexBase<LevelSettingsModel | LevelSettingsDirTypecast, LevelSettingsModel | LevelSettingsDirTypecast> {
    static moduleName: string;
}
export declare class LevelsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
