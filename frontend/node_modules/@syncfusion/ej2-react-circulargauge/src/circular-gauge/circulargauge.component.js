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
import { CircularGauge } from '@syncfusion/ej2-circulargauge';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
/**
 * Represents react Circular Gauge Component
 * ```tsx
 * <CircularGaugeComponent></CircularGaugeComponent>
 * ```
 */
var CircularGaugeComponent = /** @class */ (function (_super) {
    __extends(CircularGaugeComponent, _super);
    function CircularGaugeComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'axes': { 'axis': { 'annotations': 'annotation', 'ranges': 'range', 'pointers': 'pointer' } } };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    CircularGaugeComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return React.createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return CircularGaugeComponent;
}(CircularGauge));
export { CircularGaugeComponent };
applyMixins(CircularGaugeComponent, [ComponentBase, React.Component]);
