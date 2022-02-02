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
import * as React from 'react';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
/**
 * `SpreadsheetComponent` represents the react Spreadsheet.
 * ```tsx
 * <SpreadsheetComponent />
 * ```
 */
var SpreadsheetComponent = /** @class */ (function (_super) {
    __extends(SpreadsheetComponent, _super);
    function SpreadsheetComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'sheets': { 'sheet': { 'rows': { 'row': { 'cells': { 'cell': { 'images': 'image', 'charts': 'chart' } } } }, 'columns': 'column', 'ranges': 'range', 'conditionalFormats': 'conditionalFormat' } }, 'definedNames': 'definedName' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    SpreadsheetComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return React.createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return SpreadsheetComponent;
}(Spreadsheet));
export { SpreadsheetComponent };
applyMixins(SpreadsheetComponent, [ComponentBase, React.Component]);
