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
var ChartDirective = /** @class */ (function (_super) {
    __extends(ChartDirective, _super);
    function ChartDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartDirective.moduleName = 'chart';
    return ChartDirective;
}(ComplexBase));
export { ChartDirective };
var ChartsDirective = /** @class */ (function (_super) {
    __extends(ChartsDirective, _super);
    function ChartsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartsDirective.propertyName = 'chart';
    ChartsDirective.moduleName = 'charts';
    return ChartsDirective;
}(ComplexBase));
export { ChartsDirective };
