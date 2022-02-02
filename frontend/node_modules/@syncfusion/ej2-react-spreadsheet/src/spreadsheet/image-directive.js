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
var ImageDirective = /** @class */ (function (_super) {
    __extends(ImageDirective, _super);
    function ImageDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageDirective.moduleName = 'image';
    return ImageDirective;
}(ComplexBase));
export { ImageDirective };
var ImagesDirective = /** @class */ (function (_super) {
    __extends(ImagesDirective, _super);
    function ImagesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagesDirective.propertyName = 'image';
    ImagesDirective.moduleName = 'images';
    return ImagesDirective;
}(ComplexBase));
export { ImagesDirective };
