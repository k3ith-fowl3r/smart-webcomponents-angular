
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.gridpanel';

import { __decorate } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class BaseElement {
    constructor(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        const that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = () => {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = () => {
            that.onDetach.emit(that.nativeElement);
        };
    }
    addEventListener(type, listener, options = false) {
        this.nativeElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options = false) {
        this.nativeElement.removeEventListener(type, listener, options);
    }
    dispatchEvent(event) {
        return this.nativeElement.dispatchEvent(event);
    }
    blur() {
        this.nativeElement.blur();
    }
    click() {
        this.nativeElement.click();
    }
    focus(options) {
        this.nativeElement.focus(options);
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
}
__decorate([
    Output()
], BaseElement.prototype, "onCreate", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onReady", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onAttach", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onDetach", void 0);
__decorate([
    Input()
], BaseElement.prototype, "locale", null);
__decorate([
    Input()
], BaseElement.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], BaseElement.prototype, "messages", null);
__decorate([
    Input()
], BaseElement.prototype, "rightToLeft", null);
__decorate([
    Input()
], BaseElement.prototype, "theme", null);
const Smart = window.Smart;

let MultiColumnFilterPanelComponent = class MultiColumnFilterPanelComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the "Apply" button is clicked.
        *  @param event. The custom event. 	*/
        this.onApply = new EventEmitter();
        /** @description This event is triggered when the "Cancel" button is clicked.
        *  @param event. The custom event. 	*/
        this.onCancel = new EventEmitter();
        /** @description This event is triggered when the "Collapse all" button is clicked.
        *  @param event. The custom event. 	*/
        this.onCollapseAll = new EventEmitter();
        /** @description This event is triggered when the "Expand all" button is clicked.
        *  @param event. The custom event. 	*/
        this.onExpandAll = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-multi-column-filter-panel');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Sets or gets the position of the close button of multi column filter panel items. */
    get closeButtonPosition() {
        return this.nativeElement ? this.nativeElement.closeButtonPosition : undefined;
    }
    set closeButtonPosition(value) {
        this.nativeElement ? this.nativeElement.closeButtonPosition = value : undefined;
    }
    /** @description Determines the data source that will be loaded to the multi column filter panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be grouped.dataType - the data type of the column to be grouped.groupIndex - the group order of columns. If this value is -1, the grouping will not be applied by this column initially.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied when grouping. Possible values: 'ascending' and 'descending'. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Enables or disables the multi column filter panel. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description A callback function that can be used to modify the settings of value editors. */
    get editorCallback() {
        return this.nativeElement ? this.nativeElement.editorCallback : undefined;
    }
    set editorCallback(value) {
        this.nativeElement ? this.nativeElement.editorCallback = value : undefined;
    }
    /** @description Sets or gets the placeholder for the filter value editors. */
    get editorPlaceholder() {
        return this.nativeElement ? this.nativeElement.editorPlaceholder : undefined;
    }
    set editorPlaceholder(value) {
        this.nativeElement ? this.nativeElement.editorPlaceholder = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages. */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets the maximum number of columns to group by. If set to null, there is no limit. */
    get maxLevel() {
        return this.nativeElement ? this.nativeElement.maxLevel : undefined;
    }
    set maxLevel(value) {
        this.nativeElement ? this.nativeElement.maxLevel = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Determines the logical operator between the items. */
    get operator() {
        return this.nativeElement ? this.nativeElement.operator : undefined;
    }
    set operator(value) {
        this.nativeElement ? this.nativeElement.operator = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets of gets the initial value of the element. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
        this.listen();
    }
    ngOnDestroy() {
        this.unlisten();
    }
    ngOnChanges(changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (const propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    }
    /** @description Add event listeners. */
    listen() {
        const that = this;
        that.eventHandlers['applyHandler'] = (event) => { that.onApply.emit(event); };
        that.nativeElement.addEventListener('apply', that.eventHandlers['applyHandler']);
        that.eventHandlers['cancelHandler'] = (event) => { that.onCancel.emit(event); };
        that.nativeElement.addEventListener('cancel', that.eventHandlers['cancelHandler']);
        that.eventHandlers['collapseAllHandler'] = (event) => { that.onCollapseAll.emit(event); };
        that.nativeElement.addEventListener('collapseAll', that.eventHandlers['collapseAllHandler']);
        that.eventHandlers['expandAllHandler'] = (event) => { that.onExpandAll.emit(event); };
        that.nativeElement.addEventListener('expandAll', that.eventHandlers['expandAllHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['applyHandler']) {
            that.nativeElement.removeEventListener('apply', that.eventHandlers['applyHandler']);
        }
        if (that.eventHandlers['cancelHandler']) {
            that.nativeElement.removeEventListener('cancel', that.eventHandlers['cancelHandler']);
        }
        if (that.eventHandlers['collapseAllHandler']) {
            that.nativeElement.removeEventListener('collapseAll', that.eventHandlers['collapseAllHandler']);
        }
        if (that.eventHandlers['expandAllHandler']) {
            that.nativeElement.removeEventListener('expandAll', that.eventHandlers['expandAllHandler']);
        }
    }
};
MultiColumnFilterPanelComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "animation", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "closeButtonPosition", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "dataSource", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "disabled", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "editorCallback", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "editorPlaceholder", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "locale", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "maxLevel", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "messages", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "operator", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "readonly", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], MultiColumnFilterPanelComponent.prototype, "value", null);
__decorate([
    Output()
], MultiColumnFilterPanelComponent.prototype, "onApply", void 0);
__decorate([
    Output()
], MultiColumnFilterPanelComponent.prototype, "onCancel", void 0);
__decorate([
    Output()
], MultiColumnFilterPanelComponent.prototype, "onCollapseAll", void 0);
__decorate([
    Output()
], MultiColumnFilterPanelComponent.prototype, "onExpandAll", void 0);
MultiColumnFilterPanelComponent = __decorate([
    Directive({
        exportAs: 'smart-multi-column-filter-panel', selector: 'smart-multi-column-filter-panel, [smart-multi-column-filter-panel]'
    })
], MultiColumnFilterPanelComponent);

let MultiColumnFilterPanelModule = class MultiColumnFilterPanelModule {
};
MultiColumnFilterPanelModule = __decorate([
    NgModule({
        declarations: [MultiColumnFilterPanelComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [MultiColumnFilterPanelComponent]
    })
], MultiColumnFilterPanelModule);

/**
 * Generated bundle index. Do not edit.
 */

export { MultiColumnFilterPanelComponent, MultiColumnFilterPanelModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-multicolumnfilterpanel.js.map
