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
 * `Connector` directive represent a annotation of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <ConnectorsDirective>
 * <ConnectorDirective>
 * <ConnectorFixedUserHandlesDirective>
 * <ConnectorFixedUserHandleDirective>
 * </ConnectorFixedUserHandleDirective>
 * </ConnectorFixedUserHandlesDirective>
 * </ConnectorDirective>
 * </ConnectorsDirective>
 * </DiagramComponent>
 * ```
 */
var ConnectorFixedUserHandleDirective = /** @class */ (function (_super) {
    __extends(ConnectorFixedUserHandleDirective, _super);
    function ConnectorFixedUserHandleDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorFixedUserHandleDirective.moduleName = 'connectorFixedUserHandle';
    return ConnectorFixedUserHandleDirective;
}(ComplexBase));
export { ConnectorFixedUserHandleDirective };
var ConnectorFixedUserHandlesDirective = /** @class */ (function (_super) {
    __extends(ConnectorFixedUserHandlesDirective, _super);
    function ConnectorFixedUserHandlesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorFixedUserHandlesDirective.propertyName = 'fixedUserHandles';
    ConnectorFixedUserHandlesDirective.moduleName = 'connectorFixedUserHandles';
    return ConnectorFixedUserHandlesDirective;
}(ComplexBase));
export { ConnectorFixedUserHandlesDirective };
