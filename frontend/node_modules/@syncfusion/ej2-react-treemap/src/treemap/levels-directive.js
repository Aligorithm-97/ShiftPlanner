var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ComplexBase } from '@syncfusion/ej2-react-base';
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
var LevelDirective = /** @class */ (function (_super) {
    __extends(LevelDirective, _super);
    function LevelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelDirective.moduleName = 'level';
    return LevelDirective;
}(ComplexBase));
export { LevelDirective };
var LevelsDirective = /** @class */ (function (_super) {
    __extends(LevelsDirective, _super);
    function LevelsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelsDirective.propertyName = 'levels';
    LevelsDirective.moduleName = 'levels';
    return LevelsDirective;
}(ComplexBase));
export { LevelsDirective };
