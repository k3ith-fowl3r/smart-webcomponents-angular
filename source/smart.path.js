
/* Smart UI v9.1.1 (2021-Feb) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=89)}({89:function(e,t){Smart("smart-path",class extends Smart.BaseElement{static get properties(){return{value:{value:"",type:"string"},hint:{value:"",type:"string"},label:{value:"",type:"string"},dataSource:{value:[{label:"notAPath"},{label:"validPath"}],type:"any",reflectToAttribute:!1},dropDownAppendTo:{value:null,type:"any"},dropDownPosition:{allowedValues:["auto","top","bottom","overlay-top","overlay-center","overlay-bottom","center-bottom","center-top"],value:"auto",type:"string"},dropDownMinHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMinWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownOverlay:{value:!1,type:"boolean"},messages:{extend:!0,value:{en:{incorrectArgument:"{{elementType}}: Incorrect argument {{argumentName}} in method {{methodName}}.",missingReference:"{{elementType}}: Missing reference to {{file}} in method {{methodName}}.",notAPath:"Set to not a path",validPath:"Set to valid path"}},type:"object"},name:{value:"",type:"string"},opened:{value:!1,type:"boolean"},placeholder:{value:"Enter a path",type:"string"},pathFormat:{allowedValues:["windows","unix"],value:"windows",type:"string"},indicator:{value:!1,type:"boolean"},displayMember:{value:"",type:"string"},valueMember:{value:"",type:"string"},wrap:{value:!1,type:"boolean"}}}template(){return'<div id="container" role="presentation">\n                    <span class="smart-label" id="label">[[label]]</span>\n                    <div id="content" class="smart-content" role="presentation">\n                        <div class="smart-buttons-container" id="buttonsContainer" role="presentation">\n                            <span id="dropDownButton" class="smart-drop-down-button" role="button" aria-label="Open popup">\n                                <span id="icon" aria-hidden="true"></span>\n                            </span>\n                            <div id="inputContainer" class="smart-path-input-container" role="presentation">\n                                <div id="pathWrapper" class="smart-path-input-wrapper" role="presentation"></div>\n                                <input id="input" autocomplete="off" spellcheck="false" type="text" name="[[name]]" class="smart-input smart-path-input" role="textbox" aria-autocomplete="none" aria-label="[[placeholder]]" />\n                                <div class="smart-path-multiline-container smart-hidden" id="multilineContainer" role="presentation">\n                                    <div id="multiline" contenteditable="true" spellcheck="false" class="smart-input smart-path-input" role="textbox" aria-autocomplete="none" aria-label="[[placeholder]]"></div>\n                                </div>\n                            </div>\n                            <span id="browseButton" class="smart-browse-button" role="button" aria-label="Browse">\n                                <span id="icon" aria-hidden="true"></span>\n                            </span>\n                        </div>\n                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden" role="listbox"></div>\n                    </div>\n                    <span class="smart-hint" id="hint">[[hint]]</span>\n                </div>'}static get listeners(){return{"inputContainer.change":"_inputChangeHandler","inputContainer.keydown":"_inputKeyDownHandler","inputContainer.keyup":"_inputKeyUpHandler","document.down":"_documentDownHandler","document.up":"_documentUpHandler","container.mouseover":"_mouseOverEventHandler","container.mouseout":"_mouseOverEventHandler","dropDownContainer.mouseover":"_mouseOverEventHandler","dropDownContainer.mouseout":"_mouseOverEventHandler","inputContainer.focusin":"_focusHandler","inputContainer.focusout":"_focusHandler",resize:"_resizeHandler",styleChanged:"_styleChangedHandler"}}static get styleUrls(){return["smart.dropdown.css","smart.path.css"]}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n);const o=this;switch(e){case"dropDownAppendTo":o._positionDetection.dropDownAppendToChangedHandler(),o.rightToLeft?o.$.dropDownContainer.setAttribute("right-to-left",""):o.$.dropDownContainer.removeAttribute("right-to-left");break;case"dataSource":o._dataBind(),o._setDropDownSize(),o._positionDetection.checkBrowserBounds("vertically"),o._positionDetection.positionDropDown(),o._positionDetection.checkBrowserBounds("horizontally");break;case"dropDownMinWidth":case"dropDownWidth":case"dropDownMaxWidth":case"dropDownHeight":case"dropDownMinHeight":case"dropDownMaxHeight":o._setDropDownSize();break;case"dropDownOverlay":n||o._positionDetection.removeOverlay();break;case"wrap":o._setInput(),o._handleValue(o.value),(o.getRootNode()||document).activeElement!==o&&o._trim();break;case"readonly":o.$.multiline.readOnly=o.$.input.readOnly=n,n?(o.$.multiline.setAttribute("aria-readonly",!0),o.$.input.setAttribute("aria-readonly",!0)):(o.$.multiline.removeAttribute("aria-readonly"),o.$.input.removeAttribute("aria-readonly"));break;case"rightToLeft":n?o.$.dropDownContainer.setAttribute("right-to-left",""):o.$.dropDownContainer.removeAttribute("right-to-left");break;case"value":case"pathFormat":o._handleValue(o.value),"value"===e&&o.value!==t&&o.$.fireEvent("change",{oldValue:t,value:o.value}),(o.getRootNode()||document).activeElement!==o&&o._trim();break;case"placeholder":o.$.input.placeholder=o.$.multiline.placeholder=o.placeholder}}attached(){super.attached(),this.isCompleted&&this.$.dropDownContainer&&(this._positionDetection.dropDownAttached("_setDropDownSize"),this._positionDetection.checkBrowserBounds())}detached(){super.detached(),this.$.dropDownContainer&&(this.close(),this._positionDetection.dropDownDetached())}render(){const e=this;e._setInput(),e._positionDetection=new Smart.Utilities.PositionDetection(e,e.$.dropDownContainer,e.$.container,"close"),e._positionDetection.getDropDownParent(!0),e._positionDetection.setDropDownPosition(),e._calculateDropDownSize(),e._positionDetection.handleAutoPositioning(),e._setDropDownSize(),e.$.label.id||(e.$.label.id=e.id+"Label"),e.$.dropDownContainer.id||(e.$.dropDownContainer.id=e.id+"DropDown"),e.$.hint.id||(e.$.hint.id=e.id+"Hint"),e.setAttribute("role","combobox"),e.setAttribute("aria-describedby",e.$.hint.id),e.setAttribute("aria-expanded",!1),e.setAttribute("aria-labelledby",e.$.label.id),e.setAttribute("aria-owns",e.$.dropDownContainer.id),e.$.dropDownButton.setAttribute("aria-controls",e.$.dropDownContainer.id),e.rightToLeft&&e.$.dropDownContainer.setAttribute("right-to-left",""),e.wrap?e._wrapRefresh():e._handleValue(e.value),e._trim(),e.opened&&e.open(),super.render()}blur(){this.$[this.wrap?"multiline":"input"].blur()}focus(){this.$[this.wrap?"multiline":"input"].focus()}setToNotAPath(){this._setPathTo("//")}setToEmptyPath(){this._setPathTo("////")}_setPathTo(e){const t=this,n=t.value;t.set("value",e),t.$.input.value=t.$.multiline.value="",n!==t.value&&t.$.fireEvent("change",{oldValue:n,value:t.value})}close(){const e=this;e.$dropDownContainer.hasClass("smart-visibility-hidden")||e.$.fireEvent("closing").defaultPrevented||(e.$dropDownContainer.addClass("smart-visibility-hidden"),e.$.fireEvent("close"),e.opened=e._isDropDownClicked=e._preventDropDownClose=!1,e.setAttribute("aria-expanded",!1),e._positionDetection.removeOverlay(!0),e._edgeMacFF&&!e.hasAnimation&&e.$.dropDownContainer&&(e.$.dropDownContainer.style.top=e.$.dropDownContainer.style.left="",e.$dropDownContainer.addClass("not-in-view")))}open(){const e=this;if(!e.disabled&&e.offsetHeight&&e.$dropDownContainer.hasClass("smart-visibility-hidden")){if(e.dataSource.length&&!e.$.dropDownContainer.firstElementChild&&e._dataBind(),e._handleItemSelection(),e._updateDropDown(),e.$dropDownContainer.hasClass("not-in-view")&&e.$dropDownContainer.removeClass("not-in-view"),e.$.dropDownContainer.style.transition=null,e.dropDownAppendTo&&e.dropDownAppendTo.length>0){const t=e.getBoundingClientRect();if(e.$.container.contains(e.$.dropDownContainer)){let t=0;const n=setInterval((function(){const o=e.getBoundingClientRect();t++,o.top===e._positionTop&&t<10||(e.open(),clearInterval(n),e._positionTop=o.top)}),100);return}t.top!==e._positionTop&&(e._positionTop=t.top)}e.$.fireEvent("opening").defaultPrevented||(e.opened=!0,e.setAttribute("aria-expanded",!0),e._positionDetection.placeOverlay(),e._positionDetection.checkBrowserBounds("vertically"),e._positionDetection.positionDropDown(),e._positionDetection.checkBrowserBounds("horizontally"),e.$dropDownContainer.removeClass("smart-visibility-hidden"),e.$.fireEvent("open"),e._handleKeyStrokes("Home"),Smart.Utilities.Core.isMobile||(e.wrap?e.$.multiline.focus():e.$.input.focus()))}}_calculateDropDownSize(){const e=this;e._dropDownSize={};const t=window.getComputedStyle(e.$.dropDownContainer),n=parseFloat(t.getPropertyValue("border-top-width").trim()),o=parseFloat(t.getPropertyValue("border-bottom-width").trim()),i=parseFloat(t.getPropertyValue("margin-top").trim()),r=parseFloat(t.getPropertyValue("margin-bottom").trim()),a=parseFloat(t.getPropertyValue("padding-top").trim()),l=parseFloat(t.getPropertyValue("padding-bottom").trim());Smart.Utilities.Core.CSSVariablesSupport()&&(e._dropDownSize.width=t.getPropertyValue("--smart-drop-down-list-drop-down-width").trim(),e._dropDownSize.height=t.getPropertyValue("--smart-drop-down-list-drop-down-height").trim()),(!e._dropDownSize.width||e._dropDownSize.width.indexOf("initial")>-1)&&(e._dropDownSize.width=e.offsetWidth),e._dropDownSize.height||(e._dropDownSize.height="auto"),e._dropDownSize.minHeight=parseFloat(t.getPropertyValue("min-height").trim()),e._dropDownSize.maxHeight=parseFloat(t.getPropertyValue("max-height").trim()),e._dropDownSize.borderWidth=(isNaN(n)?0:n)+(isNaN(o)?0:o),e._dropDownSize.paddingWidth=(isNaN(a)?0:a)+(isNaN(l)?0:l),e._dropDownSize.marginWidth=(isNaN(i)?0:i)+(isNaN(r)?0:r)}_focusHandler(e){const t=this;if("focusin"===e.type)return t.setAttribute("focus",""),t.wrap?t._wrapRefresh():t._handleValue(t.value),void t._refreshInputSelection(!0);if(t._buttonClicked||t._isDropDownClicked)t.focus();else{if(t.removeAttribute("focus"),t.wrap){const e=t.value;t._handleValue(t.$.multiline.value,!0),t.value!==e&&t.$.fireEvent("change",{oldValue:e,value:t.value})}else t._handleValue(t.$.input.value,!0);t._buttonClicked||t._isDropDownClicked||t.close(),t._trim()}}_setInput(){const e=this;let t=e.$.input,n=e.$.multiline;n.value||Object.defineProperty(n,"value",{get(){return this.textContent},set(e){this.innerHTML=e,e?this.removeAttribute("show-placeholder"):this.setAttribute("show-placeholder",""),t.value=this.textContent}}),n.readOnly||Object.defineProperty(n,"readOnly",{get(){return this.getAttribute("contenteditable")},set(e){this.setAttribute("contenteditable",!e)}}),e.wrap?(t.$.addClass("smart-hidden"),e.$multilineContainer.removeClass("smart-hidden")):(t.$.removeClass("smart-hidden"),e.$multilineContainer.addClass("smart-hidden")),t.placeholder=n.placeholder=e.placeholder,t.readOnly=n.readOnly=e.readonly,n.value="",n.setAttribute("placeholder",e.placeholder),n.setAttribute("readonly",e.readonly)}_handleItemSelection(e,t){const n=this,o=n.$.dropDownContainer.getElementsByClassName("smart-path-item");for(let e=0;e<o.length;e++)o[e].removeAttribute("active");if(!e||e.hasAttribute("disabled"))return;t&&n.$.fireEvent(t,{label:e.label,value:e.value});const i=n.value;e.setAttribute("active",""),"notAPath"===e.value?(n.set("value","//"),n.$.input.value=n.$.multiline.value=""):"validPath"===e.value&&(n.set("value","////"),n.$.input.value=n.$.multiline.value=""),i!==n.value&&n.$.fireEvent("change",{oldValue:i,value:n.value}),n.close()}_handleKeyStrokes(e){const t=this,n=[].slice.call(t.$.dropDownContainer.children),o=n.find(e=>e.hasAttribute("focus")),i=function(e,t){if(!e)return;let n;for(n=e[t+"ElementSibling"];n;){if(!n.hasAttribute("disabled"))return n;n=n[t+"ElementSibling"]}};let r;if(n.length){switch(e){case"ArrowDown":r=o?i(o,"next"):n.find(e=>!e.hasAttribute("disabled"));break;case"ArrowUp":r=o?i(o,"previous"):n.find(e=>!e.hasAttribute("disabled"));break;case"Home":r=n.find(e=>!e.hasAttribute("disabled"));break;case"End":for(let e=n.length-1;e>=0;e--)if(!n[e].hasAttribute("disabled")){r=n[e];break}}r&&(n.map(e=>e.removeAttribute("focus")),r.setAttribute("focus",""),t.setAttribute("aria-activedescendant",r.id))}}_getPathType(e){if(e&&e.length)return 0===e.indexOf("//rel//")?"rel":0===e.indexOf("//abs//")?"abs":0===e.indexOf("//unc//")?"unc":/(^|[\/\\])(\.{1,2})[\/\\]/g.test(e)?"rel":/^[\w\d]{1}:\\/gim.test(e)||/^\/[\w\d]+\//gim.test(e)?"abs":/^\\\\[\w\d]+\\/gim.test(e)||/^\/\/[\w\d]+\//gim.test(e)?"unc":"rel"}_getDriveName(e,t){const n=this;let o;return"rel"===t?(o=e[0].replace(/[:\\\/]+|\s/gim,""),e[0]=o):"abs"===t?(o=e[0].replace(/[:\\\/]+|[.]{1,}|\s/gim,""),"windows"===n.pathFormat?o+=":":"unix"===n.pathFormat&&(o="/"+o),e[0]=o):"unc"===t&&(o=e[0].replace(/[:\\/]+|[.]{1,}|\s/gim,""),o="windows"===n.pathFormat?"\\\\"+o:"//"+o,e[0]=o),o}_handleValue(e){const t=this;if("//"===e||"////"===e)return void(t.$.multiline.value=t.$.input.value="");e=e.trim();const n=t._getPathType(e);if(!e||!e.length||!n)return t.set("value","//"),void(t.$.multiline.value=t.$.input.value="");const o=(e=(e=e.replace(/^(\/+((abs)|(rel)|(unc))\/+)|([?*"<>|]+)/gim,"")).replace(/[\\|\/]+/gim,">")).split(">").filter(e=>e.length);if(!o.length)return t.$.multiline.value=t.$.input.value="",void t.set("value",t._formatValue(n));for(let e=0;e<o.length-1;e++)if("..."!==o[e]){if(!1===/^\.+$/g.test(o[e]))for(;"."===o[e].charAt(o[e].length-1);)o[e]=o[e].slice(0,o[e].length-1)}else o[e]="";if("rel"===n)for(let e=0;e<o.length-1;e++)/^\.{3,}$/g.test(o[e])&&(o[e]="");else for(let e=0;e<o.length-1;e++)/^\.+$/g.test(o[e])&&(o[e]="");const i=t._getDriveName(o,n);t.set("value",t._formatValue(t._constructPath(o,">",i),n)),t.$.multiline.value=t.$.input.value=t._constructPath(o,"windows"===t.pathFormat?"\\":"/",i)}_constructPath(e,t,n){let o="";for(let i=0;i<e.length;i++){let r=e[i];const a=0===r.indexOf("<div>");r=r.replace(/(<div>)|(<\/div>)/gim,""),r!==n&&(r=r.replace(/[:\\\/]+|\s+$/gim,"")),this.wrap?r=r!==n?t+r:r:r+=t,a&&(r='<div role="presentation">'+r+"</div>"),o+=r}return!this.wrap&&(e.length>1||1===e.length&&e[0].indexOf(":")<0)&&(o=o.slice(0,-1)),o}_trim(){const e=this;if((e.getRootNode()||document).activeElement===e)return;const t="windows"===e.pathFormat?"\\":"/",n=e.value;if(!n||"//"===n||"////"===n)return void(e.$.multiline.value=e.$.input.value="");const o=e.$.pathWrapper,i=e.wrap?e.$.multiline:e.$.input;let r=n.replace(/^(\/+((abs)|(rel)|(unc))\/+)|([?*"<>]+)/gim,"").split("/");const a=e._getDriveName(r,e._getPathType(n));if(e.wrap){let n=e._trimVertically(r,a);for(;o.offsetHeight>e.offsetHeight;){const i=n.length<=2?0:1;if(!n.length)break;n.splice(i,1,"..."),n=e._trimVertically(n,a),o.innerHTML=e._constructPath(n,t,a?n[0]:void 0),o.offsetHeight>e.offsetHeight&&n.splice(i,1)}r=n}for(o.innerHTML=e._constructPath(r,t,a?r[0]:void 0);o.offsetWidth>i.offsetWidth;){const n=r.length<=2?0:1;if(!r.length)break;r.splice(n,1,"..."),o.innerHTML=e._constructPath(r,t,a?r[0]:void 0),o.offsetWidth>i.offsetWidth&&r.splice(n,1)}r.length||(o.innerHTML="..."),e.$.multiline.value=e.$.input.value=o.innerHTML}_trimVertically(e,t){const n=this,o=n.$.pathWrapper,i=n.wrap?n.$.multiline:n.$.input,r="windows"===n.pathFormat?"\\":"/",a=()=>{let t=-1;for(let n=0;n<e.length;n++)0!==n&&e[n].indexOf("<div>")<0&&(t=n);return t};for(let t=0;t<e.length;t++)e[t]=e[t].replace(/(<div>)|(<\/div>)/gim,"");for(o.innerHTML=n._constructPath(e,r,t?e[0]:void 0);o.offsetWidth>i.offsetWidth;){let i=a();if(i<=1||"..."===e[i])break;e[i]="<div>"+e[i]+"</div>",o.innerHTML=n._constructPath(e,r,t?e[0]:void 0)}return e.length||(o.innerHTML="..."),n.$.multiline.value=n.$.input.value=o.innerHTML,e}_formatValue(e,t){const n=this;return e||(e=n.wrap?n.$.multiline.value:n.$.input.value),t?"//"+t+"//"+e.replace(/[:]+|\\+|\/+/gim,"").replace(/>/g,"/"):"//"}_inputChangeHandler(e){const t=this,n=t.value;e.preventDefault(),e.stopPropagation(),t._handleValue((t.wrap?t.$.multiline:t.$.input).value,!0),n!==t.value&&t.$.fireEvent("change",{oldValue:n,value:t.value}),t._updateDropDown()}_updateDropDown(){const e=this,t=e.$.dropDownContainer.children,n=e.wrap?e.$.multiline:e.$.input;let o,i;for(let e=0;e<t.length;e++){const n=t[e];if("notAPath"===n.value?o=n:"validPath"===n.value&&(i=n),o&&i)break}o&&(!n.value.length||e.indicator?(o.setAttribute("disabled",""),o.setAttribute("aria-disabled",!0),o.hasAttribute("focus")&&o.removeAttribute("focus")):(o.removeAttribute("disabled"),o.removeAttribute("aria-disabled"))),i&&(n.value.length||e.indicator?(i.setAttribute("disabled",""),i.setAttribute("aria-disabled",!0),i.hasAttribute("focus")&&i.removeAttribute("focus")):(i.removeAttribute("disabled"),i.removeAttribute("aria-disabled")))}_dataBind(){const e=this,t=e.dataSource;let n=[];if(e.$.dropDownContainer.innerHTML="",t&&t.length&&("string"==typeof t&&(e.dataSource=JSON.parse(t)),Array.isArray(t))){const o=document.createDocumentFragment();for(let i=0;i<t.length;i++){const r=t[i],a=e._createItem(r);n.push(a),o&&o.appendChild(a)}e.$.dropDownContainer.appendChild(o)}}_documentDownHandler(e){const t=this;if(t.disabled||t.readonly)return;let n=e.originalEvent.target;if(n===t._overlay&&(t._overlayDown=!0),t.shadowRoot||t.isInShadowDOM){n=e.originalEvent.composedPath()[0];let o=n;for(;o;){if(o.closest(".smart-drop-down-container")===t.$.dropDownContainer){t._isDropDownClicked=!0;break}o=o.getRootNode().host}}else t._isDropDownClicked=n.closest(".smart-drop-down-container")===t.$.dropDownContainer;(t.shadowRoot||t).contains(n)&&(t._buttonClicked=n.closest(".smart-browse-button")||n.closest(".smart-drop-down-button"),t._isPathInputDown=n.closest(".smart-path-input"));let o=n.closest(".smart-path-item");t.$.dropDownContainer.contains(o)||(o=void 0),o&&(!t.hasRippleAnimation||o.hasAttribute("disabled")||o.hasAttribute("readonly")||Smart.Utilities.Animation.Ripple.animate(o,e.pageX,e.pageY),t._itemClicked=o,t._preventDropDownClose=!0),t._isDropDownClicked&&(t._preventDropDownClose=!0)}_documentUpHandler(e){if("pointercancel"===e.originalEvent.type)return;const t=this;let n=t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;const o=n.closest(".smart-path-item");if(o!==t._itemClicked){if(t._itemClicked=void 0,t._buttonClicked&&(t.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(t._buttonClicked,e.pageX+t._buttonClicked.offsetWidth/4,e.pageY+t._buttonClicked.offsetHeight/4),n.closest(".smart-browse-button")===t._buttonClicked&&t._buttonClicked===t.$.browseButton?t.$.fireEvent("browseButtonClick"):n.closest(".smart-drop-down-button")===t._buttonClicked&&t._buttonClicked===t.$.dropDownButton&&t.$.fireEvent("dropDownButtonClick")),n.closest(".smart-drop-down-button")===t._buttonClicked&&t._buttonClicked===t.$.dropDownButton)return t.$dropDownContainer.hasClass("smart-visibility-hidden")?t.open():t.close(),void(t._buttonClicked=void 0);t._buttonClicked=void 0,t._isDropDownClicked&&(t._isDropDownClicked=!1),t._isPathInputDown!==t.$.input&&t._isPathInputDown!==t.$.multiline?(n=t._getUpEventTarget(n),void 0!==n&&("dropDownContainer"!==n&&"item"!==n||"item"===n)&&t.close()):t._isPathInputDown=void 0}else t._handleItemSelection(o,"itemClick")}_inputKeyDownHandler(e){const t=this;if(t.opened)switch(e.key){case"ArrowDown":case"ArrowUp":case"Home":case"End":return e.preventDefault(),e.altKey&&"ArrowUp"===e.key?void t.close():void t._handleKeyStrokes(e.key)}else{if(e.altKey&&"ArrowDown"===e.key)return e.preventDefault(),void t.open();if("PageDown"===e.key||"PageUp"===e.key)return void e.preventDefault()}if("Enter"===e.key)return t.wrap&&e.preventDefault(),void(t.opened&&(t._handleItemSelection(t._focusedItem(),"itemClick"),t.close()));if(t.opened&&"Escape"===e.key)return e.preventDefault(),void t.close();/^[a-z0-9\/\\.:\s]$/gim.test(e.key)&&t.$.multiline.removeAttribute("show-placeholder")}_focusedItem(){const e=this.$.dropDownContainer.children;for(let t=0;t<e.length;t++)if(e[t].hasAttribute("focus"))return e[t]}_inputKeyUpHandler(e){const t=this;if(t.wrap){const n=t.$.multiline.value;if(n||t.$.multiline.setAttribute("show-placeholder",""),t.$.input.value=n,"Enter"===e.key){const e=t.value;t._handleValue(n),n||(t.set("value","//"),t.$.multiline.value=t.$.input.value=""),n&&t._refreshInputSelection(),t.value!==e&&t.$.fireEvent("change",{oldValue:e,value:n})}t._updateDropDown()}else t.opened&&t._inputChangeHandler(e),"Enter"!==e.key||t.$.input.value.length||t.set("value","//")}_refreshInputSelection(e){const t=this;if(t.disabled||t.readonly)return;if(!t.wrap)return void t.$.input.setSelectionRange(0,t.$.input.value.length);const n=new Range,o=window.getSelection(),i=t.$.multiline.childNodes[t.$.multiline.childNodes.length-1];i&&(n.setStart(i,i.length),n.collapse(!0),e&&n.selectNodeContents(i),o.removeAllRanges(),o.addRange(n))}_getUpEventTarget(e){const t=this;let n=e;for(n=void 0===n.parentElement?n.getRootNode().host:n.parentElement;n;){if(n===t.$.dropDownContainer){n="dropDownContainer";break}n=void 0===n.parentElement?n.getRootNode().host:n.parentElement}return n}_mouseOverEventHandler(e){const t=this.shadowRoot||this.isInShadowDOM?e.composedPath()[0]:e.target,n=t.closest(".smart-drop-down-button")||t.closest(".smart-browse-button")||t.closest(".smart-input")||t.closest(".smart-path-item");n&&!n.hasAttribute("disabled")&&("mouseover"===e.type?n.setAttribute("hover",""):n.removeAttribute("hover"))}_createItem(e){const t=this,n=document.createElement("div");"number"==typeof e&&(e=""+e);const o=function(t,n){return void 0!==e[t]?""+e[t]:e[n]};let i=("string"==typeof e?e:o(t.displayMember,"label"))||"",r=("string"==typeof e?e:o(t.valueMember,"value"))||"";return n.label=n.innerHTML=""+(t.localize(i)||i),n.value=""+(r||i),e.disabled?n.setAttribute("disabled",""):n.removeAttribute("disabled"),n.classList.add("smart-path-item"),n.setAttribute("role","option"),n.id||(n.id=t.id+"Item"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)),n}_resizeHandler(){const e=this;e._wrapRefresh(),"none"===e.resizeMode&&(e._calculateDropDownSize(),e._setDropDownSize()),e._trim()}_wrapRefresh(){const e=this;e.wrap&&(e._handleValue(e.value),e.$.multiline.removeAttribute("position-absolute"),e.offsetHeight<e.$.multiline.offsetHeight&&e.$.multiline.setAttribute("position-absolute",""))}_styleChangedHandler(){this._trim()}_setDropDownSize(){const e=this;e._dropDownSize||e._calculateDropDownSize(),["dropDownMinWidth","dropDownMinHeight","dropDownMaxWidth","dropDownMaxHeight"].forEach(t=>{e.$.dropDownContainer.style[t.replace("dropDown","").replace(/^./,"m")]=e[t]?e[t]+(e[t].toString().endsWith("%")?"%":"px"):null}),e.dropDownWidth?"auto"!==e.dropDownWidth?e.$.dropDownContainer.style.width=("initial"===e.dropDownWidth?e.offsetWidth:parseFloat(e.dropDownWidth))+"px":e.$.dropDownContainer.style.width="auto":e.$.dropDownContainer.style.width="auto"===e._dropDownSize.width?"auto":(parseFloat(e._dropDownSize.width)||0)+"px",e.dropDownHeight&&"auto"!==e.dropDownHeight?e.$.dropDownContainer.style.height=parseFloat(e.dropDownHeight)+((e.dropDownHeight+"").indexOf("%")>-1?"%":"px"):e.$.dropDownContainer.style.height=e._dropDownSize.height}})}});