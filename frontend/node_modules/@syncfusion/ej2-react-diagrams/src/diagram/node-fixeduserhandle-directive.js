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
 * `Node` directive represent a annotation of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <NodesDirective>
 * <NodeDirective>
 * <NodeFixedUserHandlesDirective>
 * <NodeFixedUserHandleDirective>
 * </NodeFixedUserHandleDirective>
 * </NodeFixedUserHandlesDirective>
 * </NodeDirective>
 * </NodesDirective>
 * </DiagramComponent>
 * ```
 */
var NodeFixedUserHandleDirective = /** @class */ (function (_super) {
    __extends(NodeFixedUserHandleDirective, _super);
    function NodeFixedUserHandleDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeFixedUserHandleDirective.moduleName = 'nodeFixedUserHandle';
    return NodeFixedUserHandleDirective;
}(ComplexBase));
export { NodeFixedUserHandleDirective };
var NodeFixedUserHandlesDirective = /** @class */ (function (_super) {
    __extends(NodeFixedUserHandlesDirective, _super);
    function NodeFixedUserHandlesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeFixedUserHandlesDirective.propertyName = 'fixedUserHandles';
    NodeFixedUserHandlesDirective.moduleName = 'nodeFixedUserHandles';
    return NodeFixedUserHandlesDirective;
}(ComplexBase));
export { NodeFixedUserHandlesDirective };
