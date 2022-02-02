import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { extend, isUndefined } from '@syncfusion/ej2-base';
/**
 * `numberfilterui` render number column.
 * @hidden
 */
var NumberFilterUI = /** @class */ (function () {
    function NumberFilterUI(parent, serviceLocator, filterSettings) {
        this.filterSettings = filterSettings;
        this.parent = parent;
        this.serviceLocator = serviceLocator;
    }
    NumberFilterUI.prototype.keyEventHandler = function (args) {
        if (args.keyCode === 13 || args.keyCode === 9) {
            var evt = document.createEvent('HTMLEvents');
            evt.initEvent('change', false, true);
            /* tslint:disable-next-line:no-any */
            this.dispatchEvent(evt);
        }
    };
    NumberFilterUI.prototype.create = function (args) {
        this.instance = this.parent.createElement('input', { className: 'e-flmenu-input', id: 'numberui-' + args.column.uid });
        args.target.appendChild(this.instance);
        this.numericTxtObj = new NumericTextBox(extend({
            format: typeof (args.column.format) === 'string' || isUndefined(args.column.format) ? args.column.format :
                args.column.format.format,
            locale: this.parent.locale,
            cssClass: 'e-popup-flmenu',
            placeholder: args.localizeText.getConstant('EnterValue'),
            enableRtl: this.parent.enableRtl,
        }, args.column.filter.params));
        this.numericTxtObj.appendTo(this.instance);
    };
    NumberFilterUI.prototype.write = function (args) {
        var numberuiObj = document.querySelector('#numberui-' + args.column.uid).ej2_instances[0];
        numberuiObj.element.addEventListener('keydown', this.keyEventHandler);
        numberuiObj.value = args.filteredValue;
    };
    NumberFilterUI.prototype.read = function (element, column, filterOptr, filterObj) {
        var numberuiObj = document.querySelector('#numberui-' + column.uid).ej2_instances[0];
        var filterValue = numberuiObj.value;
        filterObj.filterByColumn(column.field, filterOptr, filterValue, 'and', true);
    };
    return NumberFilterUI;
}());
export { NumberFilterUI };
