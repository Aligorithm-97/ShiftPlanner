/**
 * Defines types of Render
 *
 * @hidden

 */
export var RenderType;
(function (RenderType) {
    /* eslint-disable */
    /** Defines RenderType as Toolbar */
    RenderType[RenderType["Toolbar"] = 0] = "Toolbar";
    /** Defines RenderType as Content */
    RenderType[RenderType["Content"] = 1] = "Content";
    /** Defines RenderType as Popup */
    RenderType[RenderType["Popup"] = 2] = "Popup";
    /** Defines RenderType as LinkToolbar */
    RenderType[RenderType["LinkToolbar"] = 3] = "LinkToolbar";
    /** Defines RenderType as TextToolbar */
    RenderType[RenderType["TextToolbar"] = 4] = "TextToolbar";
    /** Defines RenderType as ImageToolbar */
    RenderType[RenderType["ImageToolbar"] = 5] = "ImageToolbar";
    /** Defines RenderType as InlineToolbar */
    RenderType[RenderType["InlineToolbar"] = 6] = "InlineToolbar";
    /** Defines RenderType as TableToolbar */
    RenderType[RenderType["TableToolbar"] = 7] = "TableToolbar";
    /* eslint-enable */
})(RenderType || (RenderType = {}));
/**
 * Defines types to be used as Toolbar.
 */
export var ToolbarType;
(function (ToolbarType) {
    /* eslint-disable */
    /** Defines ToolbarType as Standard */
    ToolbarType["Expand"] = "Expand";
    /** Defines ToolbarType as MultiRow */
    ToolbarType["MultiRow"] = "MultiRow";
    /** Defines ToolbarType as Scrollable */
    ToolbarType["Scrollable"] = "Scrollable";
    /* eslint-enable */
})(ToolbarType || (ToolbarType = {}));
