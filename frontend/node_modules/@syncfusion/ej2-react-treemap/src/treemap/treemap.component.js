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
import { TreeMap } from '@syncfusion/ej2-treemap';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
/**
 * Represents react TreeMap Component
 * ```tsx
 * <TreeMapComponent></TreeMapComponent>
 * ```
 */
var TreeMapComponent = /** @class */ (function (_super) {
    __extends(TreeMapComponent, _super);
    function TreeMapComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'levels': { 'level': { 'colorMappings': 'colorMapping' } } };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    TreeMapComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return React.createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return TreeMapComponent;
}(TreeMap));
export { TreeMapComponent };
applyMixins(TreeMapComponent, [ComponentBase, React.Component]);
