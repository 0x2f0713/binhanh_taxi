/* Minification failed. Returning unminified contents.
(3829,98-99): run-time error JS1195: Expected expression: >
(3829,131-132): run-time error JS1004: Expected ';': )
(3841,13-14): run-time error JS1002: Syntax error: }
(3855,55-56): run-time error JS1195: Expected expression: )
(3855,57-58): run-time error JS1004: Expected ';': {
(5768,90-91): run-time error JS1195: Expected expression: >
(5768,102-103): run-time error JS1004: Expected ';': )
(5794,10-11): run-time error JS1004: Expected ';': )
(5806,166-167): run-time error JS1004: Expected ';': {
(5819,86-87): run-time error JS1195: Expected expression: >
(5819,111-112): run-time error JS1004: Expected ';': )
(5985,98-99): run-time error JS1195: Expected expression: >
(5985,129-130): run-time error JS1004: Expected ';': )
(5997,17-18): run-time error JS1002: Syntax error: }
(6001,15-16): run-time error JS1197: Too many errors. The file might not be a JavaScript file: )
 */
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);;
function RouteMap(opts) {
    this.isInit = false;                                                                                                            // Hạn chế splitter content load 2 lần 
    this.displayMap = null;                                                                                                         // obj bản đồ
    this.carUrl = (opts != null && opts.carUrl != undefined) ? opts.carUrl : "/Images/VehicleOnline/xe{0}.png";                     // Link ảnh cho phần xe và hướng. 0: Hướng xe
    this.imageMarkerUrl = (opts != null && opts.imageMarkerUrl != undefined) ? opts.imageMarkerUrl : "/Images/LoTrinh/{0}.png";     // Link ảnh cho marker. 0 là tên file.
    this.routeBody = (opts != null && opts.routeBody != undefined) ? opts.routeBody : "route-body";                                 // Dùng để trỏ đến khung chứa phần lộ trình => resize
    this.gridName = (opts != null && opts.gridName != undefined) ? opts.gridName : "MainGrid";                                      // Tên lưới
    this.getWarningUrl = (opts != null && opts.getWarningUrl != undefined) ? opts.getWarningUrl : "/Route/GetWarning";
    this.customerContent = LanguageManager.getText('Route_CustomerPoint');                                                          // Nội dung marker khách. 0: đón/trả theo key DB. 1: số hiệu xe. 2: thời gian. 3: địa điểm.
    this.directionContent = LanguageManager.getText('Route_DirectionContent');                                                      // Nội dung mỗi tên chỉ hướng mỗi meterInterval
    this.colorArray = ["Red", "Blue", "Yellow"];
    this.meterDirectInterval = (opts != null && opts.meterInterval != undefined) ? opts.meterInterval : 300;                        // Xác định sau bao nhiêu mét thì ghi mũi tên
    this.meterCarDistance = (opts != null && opts.meterCarDistance != undefined) ? opts.meterCarDistance : 50;                      // Khoảng cách nhả icon xe, mặc định là 50 mét
    this.LoTrinhLen = (opts != null && opts.LoTrinhLen != undefined) ? opts.LoTrinhLen : "LoTrinhLen";                              // Tên file ảnh đón khách
    this.LoTrinhXuong = (opts != null && opts.LoTrinhXuong != undefined) ? opts.LoTrinhXuong : "LoTrinhXuong";                      // Tên file ảnh trả khách
    this.LoTrinhPartFileName = (opts != null && opts.LoTrinhPartFileName != undefined) ? opts.LoTrinhPartFileName : "LoTrinh";      // Một phần tên của file ảnh lộ trình
    this.mapProviderTypes = (opts != null && opts.MapProviderTypes != undefined) ? opts.MapProviderTypes : "googlev3";              // Cấu hình mặc định là dùng google map   
    this.markers = [];                                                                                                              // Lưu các marker để xóa
    this.customerMarkers = [];
    this.page = 1;                                                                                                                  // Trang hiện tại của lưới
    this.currentVehiclePlate = null;
    this.currentPrivateCode = null;
    this.binhAnhPoint = new mxn.LatLonPoint(20.974035, 105.846848);
    this.landMarkControlObj = null;
    this.markerPageSize = 20000;
    this.listWarning = [];
    this.carMarker = null;                                                                                                          // obj marker xe
    this.previousRoute = null;                                                                                                      // Lộ trình ko mất gps, gsm trước
    this.isPreviousStop = false;                                                                                                    // Bản ghi trước có phải đỗ không
    this.movedDistance = 0;                                                                                                         // Lưu số km đi được để kiểm tra vẽ mũi tên hay có đổi hướng xe không
    this.isPreviousLostGPS = false;
    this.isDrawStartMarker = false;
    RouteMap.super_.call(this, opts); // Gọi kế thừa
    this.prevMaxlimit = false;
};

// trungtq: Gọi kế thừa map.
inherits(RouteMap, TaxiMapBase);

/* 
* $Author$		luanbh
* Khởi tạo map trang lộ trình
*/
RouteMap.prototype.initMap = function () {
    this.initMapGeneral();
    this.initLandMark();
};

RouteMap.prototype.initMapPrint = function () {
    this.initMapGeneral();
};

RouteMap.prototype.initMapGeneral = function () {
    if (this.isInit) return;
    this.isInit = true;

    RouteMap.super_.prototype.initMap.call(this);
    this.displayMap = RouteMap.super_.prototype.getmapStraction.call(this);

    //this.displayMap.setZoomPosition('topright');
    this.currentVehiclePlate = common.GetURLParameter("vplate");
}

RouteMap.prototype.getMapProvider = function () {
    return this.mapProviderTypes;
};

/* 
* $Author$		luanbh
* Khởi tạo map trang in lộ trình
*/
RouteMap.prototype.initPrintPage = function () {
    var infoDivHeight = $("#infoDiv").outerHeight();
    $(document).ready(function () {
        var height = $(window).height() - map.headerHeight - infoDivHeight - 55;
        $("#" + map.elementMap).css("height", height);
        $(".row-fluid").css("height", height);
        map.drawAllRoutePrint();
    });
};

/* 
* $Author$		luanbh
* Event khi resize màn hình
*/
RouteMap.prototype.resizeMap = function () {
    // Gọi lại hàm resize map từ thằng cha.
    RouteMap.super_.prototype.resizeMap.call(this);
    if (typeof navigation == 'undefined') return;
    navigation.resizeLeftPanel(false);

};



/* 
* $Author$		luanbh
* Vẽ toàn bộ lộ trình, tốc độ max
*/
RouteMap.prototype.drawAllRoute = function () {
    this.prevMaxlimit = true;
    try {
        var self = this;
        var comboBox = common.GetKendoComboBox("VehiclePlate");
        self.currentVehiclePlate = comboBox.value();
        self.currentPrivateCode = comboBox.text();
        var vehicleId = comboBox.dataSource.view()[comboBox.select()].VehicleId;
        var fromDate = common.GetKendoDatePickerValue("FromDate");
        var toDate = common.GetKendoDatePickerValue("ToDate");
        var fromTime = kendo.parseDate(fromDate.getFullYear() + "/" + parseInt(fromDate.getMonth() + 1) + "/" + fromDate.getDate() + " " + $("#FromTime").val());
        var toTime = kendo.parseDate(toDate.getFullYear() + "/" + parseInt(toDate.getMonth() + 1) + "/" + toDate.getDate() + " " + $("#ToTime").val());
        var obj = {
            FromDate: fromTime.toStringJS(),
            ToDate: toTime.toStringJS(),
            VehiclePlate: comboBox.value(),
            VehicleId: vehicleId,
            page: 1,
            pageSize: self.markerPageSize
        };
        var data = common.ExcuteAjax_ReturnData("/Route/DrawAllRoute", obj);
        if (data.markers.length === 0) return;
        self.createStartMarkerWithList(data.markers[0]);
        var accessControllerTimes = Math.ceil(data.total / self.markerPageSize);
        if (accessControllerTimes > 1) {
            for (var i = 0; i < accessControllerTimes; i++) {
                if (i === 0) {
                    this.drawMarkers(data.markers);
                }
                else {
                    obj.page = i + 1;
                    obj.pageSize = self.markerPageSize;
                    this.drawMarkers(common.ExcuteAjax_ReturnData("/Route/DrawAllRoute", obj).markers);
                }
            }
        }
        else {
            this.drawMarkers(data.markers);
        }

        if (data.markers.length > 0) {
            var firstObj = data.markers[0];
            if (firstObj.FileName != '') {
                this.displayMap.setCenter(new mxn.LatLonPoint(firstObj.ToLat, firstObj.ToLng));
            }
            else {
                this.displayMap.setCenter(new mxn.LatLonPoint(firstObj.FromLat, firstObj.FromLng));
            }
        }
        common.DisplayNotification(LanguageManager.getText("Route_FinishDrawing"), common.notification_type_success);

    }
    catch (err) {
        console.log("RouteMap.prototype.drawAllRoute:" + err);
    }
};

/* 
* $Author$		luanbh
* Vẽ các marker cho phương thức vẽ toàn bộ lộ trình
*/
RouteMap.prototype.drawMarkers = function (dataMarkers) {
    try {
        var self = this;

        if (dataMarkers.length > 0) {
            var lastValidPoint = new mxn.LatLonPoint(0, 0);
            for (var i = 0; i < dataMarkers.length; i++) {
                var currentMarker = dataMarkers[i];
                self.drawMarker(currentMarker);

                if (currentMarker.ToLat != 0 || currentMarker.ToLng != 0) {
                    lastValidPoint = new mxn.LatLonPoint(currentMarker.ToLat, currentMarker.ToLng);
                }
            }
            if (lastValidPoint.k == 0) {
                lastValidPoint = self.binhAnhPoint;
            }
            if (self.carMarker == null) {
                self.carMarker = self.createCarMarker(lastValidPoint, "2");
            }
            else {
                this.setPosition(self.carMarker, lastValidPoint);
            }
            navigation.isPlaying(false);
        }
        else {
            if (self.carMarker == null) {
                self.carMarker = self.createCarMarker(self.binhAnhPoint, "2");
            }
            else {
                this.setPosition(self.carMarker, self.binhAnhPoint);
            }

            navigation.isPlaying(false);
        }
        this.drawWarningAll();
    }
    catch (err) {
        console.log("RouteMap.prototype.drawMarkers:" + err);
    }
};

/* 
* $Author$		luanbh
* Vẽ toàn bộ lộ trình trang in
*/
RouteMap.prototype.drawAllRoutePrint = function (map, fromDate, toDate, vId, vPlate, vPrivateCode, doFitBound) {

    try {
        //*sign Vẽ hết lộ trình khi link từ trang khác đến!
        if (vId == undefined || fromDate == undefined || toDate == undefined || vPlate == undefined || vPrivateCode == undefined) {
            fromDate = common.GetURLParameter("fromDate");
            toDate = common.GetURLParameter("toDate");
            vId = common.GetURLParameter("Id");
            vPlate = common.GetURLParameter("VehiclePlate");
            vPrivateCode = common.GetURLParameter("PrivateCode");

        }
        doFitBound = (doFitBound != null && doFitBound != undefined) ? doFitBound : true;
        if (this.displayMap == null && map != undefined) {
            this.displayMap = map;
        }
        // Clear map trước khi vẽ
        if (this.markers.length > 0) {
            this.clearMarkers();
        }

        var self = this;
        self.currentVehiclePlate = vPlate;
        self.currentPrivateCode = vPrivateCode;
        self.listWarning = self.getListRouteWarning(fromDate, toDate, vId);
        if ($("#vehiclePlatePanel").length && $("#DatePanel").length) {
            var pp = LanguageManager.getText("Common_VehiclePlate") + ": " + vPlate;
            $("#vehiclePlatePanel").html();
            if (vPrivateCode != null && vPrivateCode !== '') {
                pp = LanguageManager.getText("Common_VehiclePlate") + ": " + decodeURIComponent(vPrivateCode);
            }
            $("#vehiclePlatePanel").html(pp);

            $("#DatePanel").html(LanguageManager.getText("Common_FromDate") + ": " + fromDate.replace("%20", " ") + " " + LanguageManager.getText("Common_ToDate") + ": " + toDate.replace("%20", " "));
        }
        if (fromDate == undefined || toDate == undefined || vId == undefined || vPlate == undefined) return;
        var obj = null;
        if (typeof fromDate.getMonth === 'function') {
            obj = {
                FromDate: fromDate.toStringJS(),
                ToDate: toDate.toStringJS(),
                VehiclePlate: vPlate,
                VehicleId: vId,
                page: 1,
                pageSize: self.markerPageSize
            };
        }
        else {
            obj = {
                FromDate: (kendo.parseDate(fromDate.replace("%20", " "))).toStringJS(),
                ToDate: (kendo.parseDate(toDate.replace("%20", " "))).toStringJS(),
                VehiclePlate: vPlate,
                VehicleId: vId,
                page: 1,
                pageSize: self.markerPageSize
            };
        }
        var data = common.ExcuteAjax_ReturnData("/Route/DrawAllRoute", obj);
        if (data.markers.length == 0) return;
        self.createStartMarkerWithList(data.markers[0]);
        var points = [];
        var accessControllerTimes = Math.ceil(data.total / self.markerPageSize);
        if (accessControllerTimes > 1) {
            for (var i = 0; i < accessControllerTimes; i++) {
                if (i == 0) {
                    self.drawMarkerPrint(data.markers, points);
                }
                else {
                    obj.page = i;
                    this.drawMarkerPrint(common.ExcuteAjax_ReturnData("/Route/DrawAllRoute", obj).markers, points);
                    if (i == accessControllerTimes - 1) {
                        var lastPoint = new mxn.LatLonPoint(dataMarkers[dataMarkers.length - 1].ToLat, dataMarkers[dataMarkers.length - 1].ToLng);
                        if (self.carMarker == null) self.carMarker = self.createCarMarker(lastPoint, "2");
                        else this.setPosition(self.carMarker, lastPoint);
                    }
                }
            }
        }
        else {
            self.drawMarkerPrint(data.markers, points);
        }
        if (points.length > 0) {
            if (doFitBound) {
                this.displayMap.fitBoundForListPoint(points);
            }
            else {
                //this.displayMap.setCenter(points[0]);
            }
        }
    }
    catch (err) {
        console.log("RouteMap.prototype.drawAllRoutePrint:" + err);
    }
};

/* 
* $Author$		luanbh
* Vẽ marker cho trang in
*/
RouteMap.prototype.drawMarkerPrint = function (dataMarkers, points) {
    var self = this;
    if (dataMarkers.length > 0) {
        for (var i = 0; i < dataMarkers.length; i++) {
            var currentMarker = dataMarkers[i];
            self.drawMarker(currentMarker);
            if (currentMarker.ToLat > 0) {
                points.push(new mxn.LatLonPoint(currentMarker.ToLat, currentMarker.ToLng));
            }
        }
    }
    this.drawWarningAll();
};

/* 
* $Author$		luanbh
* Vẽ cảnh báo cho trang lộ trình và trang in
*/
RouteMap.prototype.drawWarningAll = function () {
    var self = this;
    try {
        if (typeof navigation == 'undefined') {
            var listWarning = [];
            if (self.listWarning == []) {
                listWarning = this.getListRouteWarning();
            }
            else {
                listWarning = self.listWarning;
            }
            if (listWarning != null && listWarning.length > 0) {
                for (var i = 0; i < listWarning.length; i++) {
                    var currentWarning = listWarning[i];
                    var obj = {
                        Content: currentWarning.Content,
                        FileName: "CanhBao",
                        ToLat: currentWarning.Latitude,
                        ToLng: currentWarning.Longitude,
                        RowIndex: -1,
                        Label: ''
                    };
                    this.drawMarker(obj);
                }
            }
        }
        else {
            if (navigation.listWarning != null && navigation.listWarning != undefined && navigation.listWarning.length > 0) {
                for (var i = 0; i < navigation.listWarning.length; i++) {
                    var currentWarning = navigation.listWarning[i];
                    var obj = {
                        Content: currentWarning.Content,
                        FileName: "CanhBao",
                        ToLat: currentWarning.Latitude,
                        ToLng: currentWarning.Longitude,
                        RowIndex: -1,
                        Label: ''
                    };
                    this.drawMarker(obj);
                }
            }
        }
    }
    catch (err) {
        console.log("RouteMap.prototype.drawWarningAll:" + err);
    }
};

/* 
* $Author$		luanbh
* Vẽ toàn bộ lộ trình trang online
*/
RouteMap.prototype.drawAllRouteOnline = function (vehicleId, vehiclePlate, time) {
    
    var unit = time.slice(-1);
    this.currentVehiclePlate = vehiclePlate;
    var value = time.substring(0, time.length - 1);
    var date = new Date();
    var currentDate = new Date();
    var fromTime = "";
    if (unit == 'm') {
        date = new Date(currentDate.getTime() - (value * 60000));
        fromTime = date.getHours() + ":" + date.getMinutes();
    }
    else if (unit == 'h') {
        date = new Date(currentDate.getTime() - (value * 60000 * 60));
        fromTime = date.getHours() + ":" + date.getMinutes();
    }
    else if (unit == 'd') {
        fromTime = "00:00";
    }
    else return;
    var fromDate = kendo.parseDate(currentDate.getFullYear() + "/" + parseInt(currentDate.getMonth() + 1) + "/" + currentDate.getDate() + " " + fromTime);
    var obj = {
        FromDate: fromDate.toStringJS(),
        ToDate: (new Date()).toStringJS(),
        VehiclePlate: vehiclePlate,
        VehicleId: vehicleId,
        page: 1,
        pageSize: 10000
    };
    var data = common.ExcuteAjax_ReturnData("/Route/DrawAllRoute", obj);
    var dataMarkers = data.markers;
    if (data.total > 0) {
        this.displayMap.setCenter(new mxn.LatLonPoint(dataMarkers[0].ToLat, dataMarkers[0].ToLng));
        var self = this;
        for (var i = 0; i < dataMarkers.length; i++) {
            self.drawMarker(dataMarkers[i]);
        }
    }
    else {
        common.DisplayNotification(LanguageManager.getText('Common_EmptyData'), common.notification_type_error);
        return;
    }
};

/* 
* $Author$		luanbh
* Hàm gán các marker trong danh sách marker trả về từ controller
*/
RouteMap.prototype.drawMarker = function (currentMarker) {
    if (currentMarker.Content != null) // Trường hợp là marker
    {
        if (currentMarker.FileName.indexOf('LoTrinh') === 0 && isNaN(currentMarker.FileName.replace(this.LoTrinhPartFileName, '')) === true) // Trường hợp là đón/trả khách
        {
            currentMarker.Content = currentMarker.Content.format(this.currentVehiclePlate);
            this.createMapMarkerMax(
                new mxn.LatLonPoint(currentMarker.ToLat, currentMarker.ToLng),
                currentMarker.FileName,
                currentMarker.Content,
                currentMarker.Label,
                currentMarker.RowIndex, true, currentMarker.LabelClass);
        }
        else {
            this.createMapMarkerMax(new mxn.LatLonPoint(currentMarker.ToLat, currentMarker.ToLng),
                currentMarker.FileName, currentMarker.Content, currentMarker.Label, currentMarker.RowIndex, false);
        }
    }
    else // Polyline
    {
        this.drawPolylineMaxSpeed(currentMarker);
    }
};

/* 
* $Author$		trungtq
* Hàm bắt điều chỉnh lại tốc độ vẽ
*/
RouteMap.prototype.changeSpeedByDataCount = function (dataCount) {
    try {
        var speed = 800;

        if (dataCount > 5000 && dataCount <= 10000) {
            // Gán lại tốc độ
            speed = 400;

            // Gán lại khoảng khách đặt mũi tên trên đường lộ trình
            this.meterDirectInterval = 700;
        }
        else if (dataCount > 10000) {
            speed = 200;

            // Gán lại khoảng khách đặt mũi tên trên đường lộ trình
            this.meterDirectInterval = 1000;
        }

        navigation.waitTimeSpeed(speed);

        console.log("speed: " + speed);
    }
    catch (err) {
        console.log("RouteMap.prototype.changeSpeedByDataCount:" + err);
    }
};

/* 
* $Author$		luanbh
* Hàm bắt đầu vẽ lộ trình khi ấn vào nút play
*/
RouteMap.prototype.drawRoutes = function () {
    try {

        if (this.prevMaxlimit) {
            this.clearMarkers();
        }


        this.previousRoute = null; // Cho các biến kiểm tra về lại giá trị ban đầu
        this.isPreviousStop = false;
        var data = navigation.tableManager.getData();
        if (data.length === 0) {
            return;
        }
        else {
            // trungtq thêm đoạn thay đổi tốc độ vẽ dựa vào số lượng dữ liệu
            this.changeSpeedByDataCount(data.length);

        }
        // Lấy lại index hiện tại
        var index = navigation.selectedGridIndex();
        if (index < 0 || this.prevMaxlimit) {
            index = 0;
            this.prevMaxlimit = false;
        }

        navigation.selectedGridIndex(index + 1);

        if (index === 0) {
            navigation.gridSelectByIndex(index);
        }
        if (index > 0) {
            this.previousRoute = navigation.tableManager.getDataItem(index - 1);
        }
        else {
            this.previousRoute = navigation.tableManager.getDataItem(0);
        }
        var firstPoint = new mxn.LatLonPoint(this.previousRoute.Lat, this.previousRoute.Lng);
        if (firstPoint.k === 0) {
            firstPoint = this.binhAnhPoint;
        }
        //this.displayMap.setCenter(firstPoint);
        //if (this.markers.length == 0) {
        //    this.createStartMarker(firstPoint);
        //}
        if (this.carMarker == null) {
            this.carMarker = this.createCarMarker(firstPoint, "2");
        }
        else {
            this.setPosition(this.carMarker, firstPoint);
        }
        if (navigation.currentSpeed() === navigation.maxLimit) {
            this.drawAllRoute();
        }
        else {
            this.drawEachRoute(data.length);
        }
    }
    catch (err) {
        console.log("RouteMap.prototype.drawRoutes:" + err);
    }
};

/* 
* $Author$		luanbh
* Hàm vẽ từ từ lộ trình
*/
RouteMap.prototype.drawEachRoute = function (dataCount) {
    try {
        var self = map; // Khi chạy vòng lặp đến lần 2 thì this sẽ thành Window
        if (navigation.selectedGridIndex() > dataCount) {
            navigation.isPlaying(false);
            common.DisplayNotification(LanguageManager.getText("Route_FinishDrawing"), common.notification_type_success);

            // Gán lại LastIndex
            navigation.lastSelectedIndex = null;

            return;
        }

        var dataItem = navigation.tableManager.getDataItem(navigation.selectedGridIndex() - 1);
        if (dataItem == undefined) {
            return;
        }
        if (dataItem.Lat != 0 && dataItem.Lng != 0 && !self.isDrawStartMarker) {
            self.createStartMarker(new mxn.LatLonPoint(dataItem.Lat, dataItem.Lng));
            self.isDrawStartMarker = true;
        }
        // Nếu có dữ liệu thì mới duyệt qua
        if (navigation.listWarning != null && navigation.listWarning != undefined && navigation.listWarning.length > 0) {
            for (var i = 0; i < navigation.listWarning.length; i++) {
                var currentWarning = navigation.listWarning[i];
                if (currentWarning.drew == undefined && dataItem.Time > kendo.parseDate(FormatHelper.formatDateTime(currentWarning.Time))) {
                    var obj = {
                        Content: currentWarning.Content,
                        FileName: "CanhBao",
                        ToLat: currentWarning.Latitude,
                        ToLng: currentWarning.Longitude,
                        RowIndex: -1,
                        Label: ''
                    };
                    self.drawMarker(obj);
                    currentWarning.drew = true;
                }
            }
        }
        var check = self.isPreviousStop && dataItem.IsStoped;
        if (dataItem.IsLostGPS) {
            self.isPreviousLostGPS = true;
        }
        if (!dataItem.IsLostGSM && !dataItem.IsLostGPS && !check) // Chỉ kiểm tra lộ trình khi bản ghi ko mất GPS hay GSM
        {
            self.isPreviousLostGPS = false;
            var currentPoint = new mxn.LatLonPoint(dataItem.Lat, dataItem.Lng);
            var previousPoint = new mxn.LatLonPoint(self.previousRoute.Lat, self.previousRoute.Lng);
            if (!self.isPreviousStop && dataItem.IsStoped) // Trường hợp xe bắt đầu dừng đỗ
            {
                self.isPreviousStop = true;
                self.drawPolyline(previousPoint, currentPoint, self.previousRoute);
                var label = "";
                if (dataItem.Color === "Yellow") label = "!";
                self.createMapMarker(currentPoint, "stop", dataItem.Message, label);
            }
            else if (self.isPreviousStop && !dataItem.IsStoped) { // Đi tiếp
                self.isPreviousStop = false;
                self.drawPolyline(previousPoint, currentPoint, dataItem);
            }
            else { // đi bình thường
                self.drawPolyline(previousPoint, currentPoint, dataItem);
            }
            if (!self.isPreviousLostGPS) {
                self.moveCar(dataItem);
            }
            self.previousRoute = dataItem;
        }

        navigation.selectedGridIndex(navigation.selectedGridIndex() + 1);

        // Gọi tiếp đoạn scroll và vẽ
        self.scrollAndDraw(dataCount);
        //Thay đổi màu mắt thần *sign
        var dataCurrent = navigation.tableManager.getDataItem(navigation.selectedGridIndex());
        if (navigation.useModuleGenieEyes)
            navigation.tableManager.displayGenieEyes(dataCurrent.GenieEyes);//*sign
    }
    catch (err) {
        console.log("RouteMap.prototype.drawEachRoute:" + err);
    }
};

/* 
* $Author$		phongnc
* cuộn grid và draw route
*/
RouteMap.prototype.scrollAndDraw = function (dataCount) {
    try {
        var stopwatch = new StopWatch();
        stopwatch.start();

        var self = map; // Khi chạy vòng lặp đến lần 2 thì this sẽ thành Window
        if (navigation.selectedGridIndex() > dataCount) {
            navigation.isPlaying(false);
            common.DisplayNotification(LanguageManager.getText("Route_FinishDrawing"), common.notification_type_success);

            navigation.gridSelectByIndex(dataCount - 1);
            navigation.selectedGridIndex(dataCount - 1);

            // Gán lại LastIndex
            navigation.lastSelectedIndex = null;

            return;
        }

        // Scroll tới vị trí index
        navigation.tableManager.scrollToPosition(navigation.selectedGridIndex());

        if (navigation.currentSpeed() == navigation.maxLimit) {
            self.clearMarkers();
            self.drawAllRoute();
        }
        else {
            navigation.motionTimer = setTimeout(function () {
                self.drawEachRoute(dataCount);
            }, navigation.calcCurrentSpeed());
        }

        stopwatch.stop();
        stopwatch.printElapsed("RouteMap.prototype.scrollAndDraw:");
    }
    catch (err) {
        console.log("RouteMap.prototype.scrollAndDraw:" + err);
    }
};

/* 
* $Author$		luanbh
* Hàm vẽ điểm bắt đầu lộ trình
*/
RouteMap.prototype.createStartMarker = function (point) {
    point.lat = point.lat + 0.00001;
    point.lng = point.lng + 0.00001;
    point.lon = point.lon + 0.00001;
    var marker = new mxn.MarkerLabel(point);

    var markerOptions = {
        icon: "/Images/s_icon_latlng.png",
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        zIndex: 1,
        label: LanguageManager.getText('Route_StartPoint'),
        labelClass: "normal-text blue-stroke",
        labelAnchor: [10, 42],
        labelZIndex: 2,
        labelVisible: true
    };
    this.displayMap.addMarkerWithData(marker, markerOptions);
    marker.hideWhenPopupClose = false;
    this.markers.push(marker);
};

/* 
* $Author$		hanhth
* So sanh cac trang thai mat tin hieu
* Uu tien so sanh GSM (su dung vehicleTime)-> GPS (gpsTime)
* Gia tri tra ve 0 binh thuong - (-1) Tin hieu yeu - (-2) mat GSM - (-3) Mat GPS
*/
RouteMap.prototype.getLostStatusVehicle = function (gpsTime, vehicleTime) {
    var that = this;

    // Lấy ra số phút mất GPS (VehicleTime - GPSTime)
    var minuteOfLostGPS = Math.abs(DateDiff.inMinutes(new Date(parseInt(vehicleTime.substr(6))), new Date(parseInt(gpsTime.substr(6)))));

    // Lấy ra số phút mất tín hiệu (Now - VehicleTime)
    var minuteOfLostConnect = Math.abs(DateDiff.inMinutes(this.getServerTime(), new Date(parseInt(vehicleTime.substr(6)))));


    // Trường hợp số phút mất tín hiệu >= 150 phút => Mất tín hiệu 
    if (minuteOfLostConnect >= that.configLostGSM && that.configLostGSM > 0)
        return -2;
    else {
        // Trường hợp yếu GPS (>= 5 phút và <=150 phút)
        if (minuteOfLostGPS >= that.configMinuteWeakGPS && minuteOfLostGPS < that.configMinuteLostGPS && that.configMinuteWeakGPS > 0 && that.configMinuteLostGPS > 0)
            return -1;
            // Trả về mất GPS
        else if (minuteOfLostGPS >= that.configMinuteLostGPS && that.configMinuteLostGPS > 0)
            return -3;
    }
    return 0;
};

/* 
* $Author$		hanhth
* Tinh toan lay icon xe
* Thu tu la: huong + cho ngoi + co/khong khach
*/
RouteMap.prototype.setIcon = function (icon, seat, status, gpsTime, direction, vehicleTime) {
    var seats = seat < 7 ? 4 : 7;
    var wifi = this.getLostStatusVehicle(gpsTime, vehicleTime);
    switch (wifi) {
        case 0: {
            return "/Images/VehicleOnline/" + icon + "/xe" + direction + seats + this.getVehicleStatus(status) + ".png";
        }
        case -1: {
            return "/Images/VehicleOnline/" + icon + "/GPS_NO.png";
        }
        default: {
            return "/Images/VehicleOnline/" + icon + "/Xe6" + seats + "01.png";
        }
    }
};
/* 
* $Author$		hanhth
* 0 -> khong khach mo may
* 1 -> Co khach mo may
* 2 -> Ko khach tat may
* 3 -> Co khach tat may 
* (sXe & 8) == 0 =>  may bat 
* (sXe & 3) == 0 => ko khach
*/
RouteMap.prototype.getVehicleStatus = function (status) {
    // May bat
    if ((status & 8) == 0) {
        if ((status & 3) == 0)
            return 0;
        else
            return 1;
    } else {
        if ((status & 3) == 0)
            return 2;
        else
            return 3;
    }
};

/* 
* $Author$		luanbh
* Hàm vẽ điểm bắt đầu lộ trình theo danh sách trả về từ controller
*/
RouteMap.prototype.createStartMarkerWithList = function (firstMaker) {
    var firstPoint = null;
    if (firstMaker.FileName == null) firstPoint = new mxn.LatLonPoint(firstMaker.ToLat, firstMaker.ToLng);
    else firstPoint = new mxn.LatLonPoint(firstMaker.FromLat, firstMaker.FromLng);
    this.createStartMarker(firstPoint);
};

/* 
* $Author$		luanbh
* Hàm vẽ marker xe lên bản đồ
*/
RouteMap.prototype.createCarMarker = function (latlng, direction, item) {
    var self = this;
    debugger;
    var marker = new mxn.MarkerLabel(latlng);
    var url = self.carUrl.format(direction);
    if (navigation && navigation.displayRouteSecond && item) {
        url = "";
    }
    var markerOptions = {
        icon: self.carUrl.format(direction),
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        zIndex: 9999,
        label: this.currentPrivateCode,
        labelClass: "normal-text red-stroke",
        labelAnchor: [10, 42],
        labelZIndex: 2,
        labelVisible: true
    };
    this.displayMap.addMarkerWithData(marker, markerOptions);
    this.markers.push(marker);
    return marker;
};

/* 
* $Author$		luanbh
* Hàm vẽ chung cho các marker
*/
RouteMap.prototype.createMapMarker = function (myLatlng, image, content, label) {
    try {
        var self = this;
        var marker;
        var markerOptions;
        if (label != null && label !== '') {
            var labelClass = "red-stroke";
            if (label === "!") {
                labelClass = "warning-stroke";
            }
            marker = new mxn.MarkerLabel(myLatlng);
            markerOptions = {
                icon: this.imageMarkerUrl.format(image),
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                zIndex: 1,
                label: label,
                labelClass: "normal-text " + labelClass,
                labelAnchor: [10, 42],
                labelZIndex: 2,
                labelVisible: true
            };
        }
        else {
            marker = new mxn.Marker(myLatlng);
            markerOptions = {
                icon: this.imageMarkerUrl.format(image),
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                zIndex: 1
            };
        }

        marker.index = navigation.selectedGridIndex();
        marker.click.addHandler(self.displayAddress(myLatlng, content, marker));
        this.displayMap.addMarkerWithData(marker, markerOptions);
        marker.hideWhenPopupClose = false;
        this.markers.push(marker);
    }
    catch (err) {
        console.log("RouteMap.prototype.createMapMarker:" + err);
    }
};

/* 
* $Author$		luanbh
* Hàm vẽ chung cho các marker khi vẽ tốc độ max
*/
RouteMap.prototype.createMapMarkerMax = function (myLatlng, image, content, label, index, isCustomer, customerLabelClass) {
    var self = this;
    var marker = null;
    var markerOptions = null;
    if (label != null && label !== '') {
        var labelClass = "red-stroke";
        if (isCustomer) labelClass = customerLabelClass;
        if (label === "!") {
            labelClass = "warning-stroke";
        }
        marker = new mxn.MarkerLabel(myLatlng);
        markerOptions = {
            icon: this.imageMarkerUrl.format(image),
            //iconSize: [20, 20],
            iconAnchor: [12, 12],
            zIndex: 1,
            label: label,
            labelClass: "normal-text " + labelClass,
            labelAnchor: [10, 42],
            labelZIndex: 2,
            labelVisible: true
        };
    }
    else {
        marker = new mxn.Marker(myLatlng);
        markerOptions = {
            icon: this.imageMarkerUrl.format(image),
            iconSize: [20, 20],
            iconAnchor: [10, 10],
            zIndex: 1
        };
    }
    if ($("#" + this.gridName).length && index !== -1) marker.index = index;
    marker.click.addHandler(self.displayAddress(myLatlng, content, marker));
    this.displayMap.addMarkerWithData(marker, markerOptions);
    marker.hideWhenPopupClose = false;
    this.markers.push(marker);
};

/* 
* $Author$		luanbh
* Hàm vẽ đường đi của xe (Chạy từng dòng)
*/
RouteMap.prototype.drawPolyline = function (previousPoint, currentPoint, currentRoute) {
    try {
        if (previousPoint.lat == 0 || previousPoint.lng == 0 || currentPoint.lat == 0 || currentPoint.lng == 0) return;
        var arrayPoints = [previousPoint, currentPoint];
        var color = "blue";
        if (this.previousRoute.IsOverSpeed) color = "yellow";
        else if (!this.previousRoute.IsHasGuest) color = "red";
        var polyline = new mxn.Polyline(arrayPoints);
        var polylineOption = {
            color: color,
            opacity: 1.0,
            width: 2
        };

        if (!currentRoute.NotDrawRoute) {
            this.displayMap.addPolylineWithData(polyline, polylineOption);
            this.markers.push(polyline);
        }
        this.drawCustomerPoint(currentRoute);
    }
    catch (err) {
        console.log("RouteMap.prototype.drawPolyline:" + err);
    }
};

/* 
* $Author$		luanbh
* Hàm vẽ đường đi của xe (Chạy tốc độ max/Là marker trong danh sách từ Controller)
*/
RouteMap.prototype.drawPolylineMaxSpeed = function (objMarker) {
    //try {
    if (objMarker.FromLat == 0 || objMarker.FromLng == 0 || objMarker.ToLat == 0 || objMarker.ToLng == 0) return;
    var arrayPoints = [new mxn.LatLonPoint(objMarker.FromLat, objMarker.FromLng), new mxn.LatLonPoint(objMarker.ToLat, objMarker.ToLng)];
    var polyline = new mxn.Polyline(arrayPoints);
    var polylineOption = {
        color: this.colorArray[objMarker.Color],
        opacity: 1.0,
        width: 2
    };
    this.displayMap.addPolylineWithData(polyline, polylineOption);
    this.markers.push(polyline);
    //}
    //catch (err) {
    //    console.log("RouteMap.prototype.drawPolylineMaxSpeed:" + err);
    //}
};

/* 
* $Author$		luanbh
* Hàm vẽ điểm đón trả khách
*/
RouteMap.prototype.drawCustomerPoint = function (currentRoute) {
    try {
        var self = this;
        var content = "";
        var image = this.imageMarkerUrl.format(this.LoTrinhLen);
        var labelClass = "normal-text blue-stroke";
        var t = new Date(currentRoute.Time); // Thời gian của bản ghi trước
        //if (t != null && t != undefined) {
        var time = t.getHours() + ":" + t.getMinutes() + " " + t.getDate() + "/" + parseInt(t.getMonth() + 1);
        if (!this.previousRoute.IsHasGuest && currentRoute.IsHasGuest) {
            content = this.customerContent.format(LanguageManager.getText('Route_PickUpCustomer'), common.GetKendoComboBox("VehiclePlate").text(), time);
        }
        else if (this.previousRoute.IsHasGuest && !currentRoute.IsHasGuest) {
            content = this.customerContent.format(LanguageManager.getText('Route_DropOffCustomer'), common.GetKendoComboBox("VehiclePlate").text(), time);
            image = this.imageMarkerUrl.format(this.LoTrinhXuong);
            labelClass = "normal-text yellow-stroke";
        }
        else return;
        //}
        var point = new mxn.LatLonPoint(currentRoute.Lat, currentRoute.Lng);
        var marker = new mxn.MarkerLabel(point);
        var lbl = currentRoute.CustomerNumber != undefined ? currentRoute.CustomerNumber.toString() : '';
        var markerOptions = {
            icon: image,
            iconSize: [24, 24],
            iconAnchor: [24, 24],
            zIndex: 1,
            //label: currentRoute.CustomerNumber,
            label: lbl,
            labelClass: labelClass,
            labelAnchor: [10, 42],
            labelZIndex: 2,
            labelVisible: true
        };
        marker.index = navigation.selectedGridIndex();
        marker.click.addHandler(self.displayAddress(point, content, marker));
        this.displayMap.addMarkerWithData(marker, markerOptions);
        marker.hideWhenPopupClose = false;
        this.customerMarkers.push(marker);
    }
    catch (err) {
        console.log("RouteMap.prototype.drawCustomerPoint:" + err);
    }
};

/* 
* $Author$		luanbh
* Hàm di chuyển xe. Vẽ hướng và vẽ marker phương hướng
*/
RouteMap.prototype.moveCar = function (currentRoute) {
    try {

        var currentPoint = new mxn.LatLonPoint(currentRoute.Lat, currentRoute.Lng);
        var color = "red";
        if (currentRoute.IsHasGuest) color = "blue"
        this.carMarker.setOptions({ labelClass: "normal-text " + color + "-stroke" });
        if (this.previousRoute.IsLostGPS) return;
        var distance = MapHelper.distanceCalculate(this.previousRoute.Lat, this.previousRoute.Lng, currentRoute.Lat, currentRoute.Lng);
        this.movedDistance += distance;
        // Xác định khoảng cách bao nhiêu thì nhả 1 icon xe.
        if (distance > this.meterCarDistance) {
            this.carMarker.setIcon(this.carUrl.format(MapHelper.getDirection(this.previousRoute.Lat, this.previousRoute.Lng, currentRoute.Lat, currentRoute.Lng)));
        }
        this.setPosition(this.carMarker, currentPoint);
        // Khoảng cách nhả mũi tên chỉ đường.
        if (this.movedDistance >= this.meterDirectInterval) {
            var status = 2;
            if (!currentRoute.IsHasGuest) status = 4;
            else if (currentRoute.IsOverSpeed) status = 3;
            var direction = MapHelper.getDirection(this.previousRoute.Lat, this.previousRoute.Lng, currentRoute.Lat, currentRoute.Lng);
            var t = new Date(currentRoute.Time);
            this.createMapMarker(
                currentPoint
                , this.LoTrinhPartFileName + status + direction
                , this.directionContent.format(t.getDate(), t.getMonth() + 1, t.getFullYear(), t.getHours(), t.getMinutes(), t.getSeconds(),
                currentRoute.VelocityGPS),


                '');
            this.movedDistance = 0;
        }
        if (this.isOutMapBounds(currentRoute.Lat, currentRoute.Lng)) {
            this.displayMap.setCenter(currentPoint);
        }
    }
    catch (err) {
        console.log("RouteMap.prototype.moveCar:" + err);
    }
};

/* 
* $Author$		luanbh
* Kiểm tra điểm nhập vào có ngoài vùng bản đồ không
*/
RouteMap.prototype.isOutMapBounds = function (lat, lng) {
    var map = this.displayMap;
    var allowed_ne_lng = map.getBounds().getNorthEast().lon;
    var allowed_ne_lat = map.getBounds().getNorthEast().lat;
    var allowed_sw_lng = map.getBounds().getSouthWest().lon;
    var allowed_sw_lat = map.getBounds().getSouthWest().lat;
    if (allowed_ne_lat < lat) {
        return true;
    }
    if (allowed_sw_lat > lat) {
        return true;
    }
    if (allowed_ne_lng < lng) {
        return true;
    }
    if (allowed_sw_lng > lng) {
        return true;
    }
    return false;
};

/* 
* $Author$		luanbh
* Xóa marker
*/
RouteMap.prototype.clearMarkers = function () {
    try {
        for (var i = 0; i < this.markers.length; i++) {
            this.displayMap.removeGeneralMarker(this.markers[i]);
        }
        this.markers = new Array();
        for (var j = 0; j < this.customerMarkers.length; j++) {
            this.displayMap.removeGeneralMarker(this.customerMarkers[j]);
        }
        this.customerMarkers = new Array();
        this.carMarker = null;
        if (typeof navigation == 'undefined') return;
        if (navigation.listWarning != null && navigation.listWarning != undefined && navigation.listWarning.length > 0) {
            for (var i = 0; i < navigation.listWarning.length; i++) {
                navigation.listWarning[i].drew = undefined;
            }
        }
        this.isDrawStartMarker = false;
    }
    catch (err) {
        console.log("RouteMap.prototype.clearMarkers:" + err);
    }
};

/* 
* $Author$		luanbh
* Di chuyển tới tọa độ của dòng chọn trên lưới
*/
RouteMap.prototype.panToSelectedRow = function (index) {
    try {
        var dataItem = navigation.tableManager.getDataItem(index);
        var selectedPoint = new mxn.LatLonPoint(dataItem.Lat, dataItem.Lng);
        if (this.carMarker == null) {
            this.carMarker = this.createCarMarker(selectedPoint, "2", dataItem);
        }
        else {
            this.setPosition(this.carMarker, selectedPoint);
        }
        this.carMarker.setIcon(this.carUrl.format("2"));
        this.displayMap.setCenter(selectedPoint);
    }
    catch (err) {
        console.log("RouteMap.prototype.panToSelectedRow:" + err);
    }
};

/* 
* $Author$		luanbh
* Hiển thị địa chỉ vào content khi ấn vào marker
*/
RouteMap.prototype.displayAddress = function (latlng, content, marker) {
    var self = this;
    return function () {
        if (content.indexOf("<b></b>") === -1) {
            var address = MapHelper.getAddress(latlng.lat, latlng.lon);
            marker.setInfoBubble("<div class='scrollFix' style='white-space: nowrap;'>"
                + content.replace(/<p>/g, '<div>').replace(/<\/p>/g, '</div>')
                + " </br>" + LanguageManager.getText('Common_Address') + ": " + address + "</div><b></b>");
        }
        marker.openBubble();
        if ($("#" + self.gridName).length && marker.index !== -1) {
            clearTimeout(navigation.motionTimer);
            navigation.isPlaying(false);
            setTimeout(function () {
                navigation.tableManager.setActiveRow(marker.index > 1 ? marker.index - 1 : marker.index, true);
            }, 100);
        }
    }
};

/* 
* $Author$		luanbh
* Ấn hiện điểm đón/trả khách
*/
RouteMap.prototype.hideShowCustomerPoints = function (checked) {
    try {
        for (var j = 0; j < this.customerMarkers.length; j++) {
            this.customerMarkers[j].setVisible(checked);
        }
    }
    catch (err) {
        console.log("RouteMap.prototype.hideShowCustomerPoints:" + err);
    }
};

/* 
* $Author$		luanbh
* Khởi tạo điểm, vùng trên bản đồ
*/
RouteMap.prototype.initLandMark = function () {
    //try {
    var opt = new Object();
    // opt.map = this.displayMap;
    opt.map = this.map; //longtq sửa
    opt.mapStraction = this.mapStraction;
    this.landMarkControlObj = SingletonLandmarkOnline.getInstance(opt);
    this.landMarkControlObj.initAll();
    //}
    //catch (err) {
    //    console.log("RouteMap.prototype.initLandMark" + err);
    //}
};

/* 
* $Author$		luanbh
* Load danh sách cảnh báo dựa trên dữ liệu trên query string. Dùng cho trang in.
*/
RouteMap.prototype.getListRouteWarning = function (fromDate, toDate, vId) {
    try {
        if (vId == undefined || fromDate == undefined || toDate == undefined) {
            fromDate = common.GetURLParameter("fromDate");
            toDate = common.GetURLParameter("toDate");
            vId = common.GetURLParameter("Id");
        }
        var obj = null;
        if (common.isDate(fromDate)) {
            obj = {
                FromDate: fromDate.toStringJS(),
                ToDate: toDate.toStringJS(),
                VehicleID: vId
            };
        }
        else {
            obj = {
                FromDate: (kendo.parseDate(fromDate.replace("%20", " "))).toStringJS(),
                ToDate: (kendo.parseDate(toDate.replace("%20", " "))).toStringJS(),
                VehicleID: vId
            };
        }
        return common.ExcuteAjax_ReturnData(this.getWarningUrl, obj);
    }
    catch (err) {
        console.log("RouteMap.prototype.getListRouteWarning" + err);
    }
};

RouteMap.prototype.setPosition = function (marker, position) {
    // Cập nhật lại vị trí cuar marker
    marker.location = position;
    // Set lại position cho marker
    marker.update();
};;
/* 
* $Author$		trungtq
* Class quản lý tab lộ trình trên trang online
*/
var RouteTabManager = {};
RouteTabManager.vehiclePlateUrl = "/Common/AutoCompletePrivateCodeByUser"; // Link lấy danh sách lái xe
RouteTabManager.displayDayLimit = 7; // Giới hạn lộ trình 7 ngày

/* 
* $Author$		trungtq
* Khởi tạo 
*/
RouteTabManager.init = function (listVehicleOnline) {

    $("#RouteFromTime").mask("99:99"); //
    $("#RouteToTime").mask("99:99");
    $("#RouteFromDate").mask("99/99/9999");
    $("#RouteToDate").mask("99/99/9999");

    // Time picker event
    $("#RouteFromTime").timepicker();
    $("#RouteToTime").timepicker();

    //common.GetKendoDatePicker("RouteFromDate").value(new Date());
    //common.GetKendoDatePicker("RouteToDate").value(new Date());
    // Lấy về dữ liệu cho combobox chọn xe

    //LinhNX : Load 1 lan data thoi
    if (listVehicleOnline != null && listVehicleOnline.length > 0)
        common.GetKendoComboBox("VehiclePlate").dataSource.data(listVehicleOnline);
    else
        common.GetKendoComboBox("VehiclePlate").dataSource.data(common.ExcuteAjax_ReturnData(RouteTabManager.vehiclePlateUrl, null));
};

/* 
* $Author$		trungtq, copy bên lộ trình của luanbh.
* Kiểm tra thời gian nhập có hợp lệ không
*/
RouteTabManager.timeOnChange = function (obj) {
    var time = $(obj).val().split(':');
    var hours = time[0];
    if (hours > 23) {
        $(obj).val("00:00");
        return;
    }
    var minutes = time[1];
    if (minutes > 59) {
        $(obj).val("00:00");
        return;
    }
};

/* 
* $Author$		trungtq
* Tìm kiếm
*/
RouteTabManager.search = function () {
    // Nếu nhập giá trị hợp lệ
    if (RouteTabManager.validateInput()) {
        var fromDate = common.GetKendoDatePickerValue("RouteFromDate");
        var toDate = common.GetKendoDatePickerValue("RouteToDate");
        var fromDate = fromDate.getFullYear() + "/" + parseInt(fromDate.getMonth() + 1) + "/" + fromDate.getDate() + " " + $("#RouteFromTime").val();
        var toDate = toDate.getFullYear() + "/" + parseInt(toDate.getMonth() + 1) + "/" + toDate.getDate() + " " + $("#RouteToTime").val();
        var comboBox = common.GetKendoComboBox("VehiclePlate");
        var vehicleId = comboBox.dataSource.view()[comboBox.select()].VehicleID;
        var vehiclePlate = comboBox.value();
        var privateCode = comboBox.text();
        var newWindow = window.open("/Route/Index?fromDate=" + fromDate + "&toDate=" + toDate + "&Id=" + vehicleId + "&VehiclePlate=" + vehiclePlate + "&PrivateCode=" + privateCode, "target"); // open a new window
    }
};

/* 
* $Author$		trungtq
* Kiểm tra dữ liệu
*/
RouteTabManager.validateInput = function () {
    if (common.GetKendoComboBox("VehiclePlate").selectedIndex == -1) {
        common.DisplayNotification(LanguageManager.getText('Common_PrivateCodeRequired'), common.notification_type_error);
        return false;
    }
    var fromDate = common.GetKendoDatePickerValue("RouteFromDate");
    var toDate = common.GetKendoDatePickerValue("RouteToDate");

    if (toDate < fromDate) {
        common.DisplayNotification(LanguageManager.getText('Common_FromDateBigger'), common.notification_type_error);
        return false;
    }

    // trungtq: sửa lại đoạn validate củ chuối quá
    if (DateDiff.inDays(fromDate, toDate) > RouteTabManager.displayDayLimit) {
        common.DisplayNotification("Chỉ được phép xem trong vòng 7 ngày, vui lòng chọn lại.", common.notification_type_error);
        return false;
    }
    return true;
};


;
/* 
* $Author$		trungtq
* Class quản lý thanh toolbar trên online
*/
var ToolbarManager = {};

ToolbarManager.online = null;

/* 
* $Author$		trungtq
* Khởi tạo 
*/
ToolbarManager.init = function (opts) {
    ToolbarManager.online = (opts != null && opts.online != undefined) ? opts.online : null; // Đối tượng online
};

/* 
* $Author$		trungtq
* Danh sách cảnh báo
*/
ToolbarManager.warning = function () {
    if (ToolbarManager.online != null && ToolbarManager.online != undefined) {
        ToolbarManager.online.openWarningOnline();
    }
};

/* 
* $Author$		trungtq
* Lịch hẹn
*/
ToolbarManager.appointmentOnline = function () {
    //var app = new Appointment();
    appointment.addNewOnline();
};

//Sự kiện tìm kiếm
//Author: Longtq
ToolbarManager.SearchClick = function () {
    var map = window.onlineMap.mapStraction.getMap();
    var center;
    var win;
    try {
        if (google == null) {
            center = map.getCenter();
            if (center.lon != null) {
                win = window.open("https://www.google.com/maps/@" + center.lat + "," + center.lon + "," + map.getZoom() + "z", '_blank');

            } else {
                win = window.open("https://www.google.com/maps/@" + center.lat + "," + center.lng + "," + map.getZoom() + "z", '_blank');
            }
            win.focus();
        }

        //Nếu đang hiện textbox tìm kiếm thì ẩn đi
        if ($('#SearchElement').is(":visible")) {
            $('#SearchElement').hide();
        }
        //chưa có thì hiện textbox tìm kiếm ra
        else {
            $('#SearchElement').show();
            $('#txtSearch').focus();
           
            //auto complete khai báo 1 lần
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('txtSearch'));
            autocomplete.bindTo('bounds', map);
            //Sự kiện nhấn nút
            $(function() {
                $("#txtSearch").bind("keypress",
                    function(e) {
                        //Sự kiện nhấn nút Enter
                        if (e.keyCode === 13) {
                            ToolbarManager.SearchSubmitClick();
                        }
                        // phục vụ cho việc suggest dữ liệu
                        else {
                            //set auto compete
                            ToolbarManager.SetAutoComplete(map, autocomplete);
                        }
                    });
            });
        }
    }
    catch(ex)
    {
        center = map.getCenter();
        if (center.lon != null) {
            win = window.open("https://www.google.com/maps/@" + center.lat + "," + center.lon + "," + map.getZoom() + "z", '_blank');

        } else {
            win = window.open("https://www.google.com/maps/@" + center.lat + "," + center.lng + "," + map.getZoom() + "z", '_blank');
        }
        win.focus();
    }
}

// Click nút xác nhận tìm kiếm
//Longtq
ToolbarManager.SearchSubmitClick = function () {
    var textInput = $('#txtSearch').val();
    if (textInput == '') {
        alert('Bạn chưa nhập thông tin tìm kiếm!');
        return;
    }
    var arrText = textInput.split(',');
    //Tìm theo tọa độ
    if (arrText.length == 2 && parseFloat(arrText[0]) >= 0 && parseFloat(arrText[1]) >= 0) {
        ToolbarManager.SearchByLatLong();
    }
        //Thử tìm theo landmark của công ty (nếu không thấy sẽ tìm theo địa chỉ)
    else {
        ToolbarManager.SearchByLandmark();
    }
}

//CLick nút làm mới
//Longtq
ToolbarManager.RefreshClick = function () {
    $("#txtSearch").val('');
    $('#txtSearch').focus();
}
// Phần gợi ý khi nhập địa chỉ 
//Longtq
ToolbarManager.SetAutoComplete = function (map, autocomplete) {
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        //Khi nhập địa chỉ không thuộc danh sách hỗ trợ
        //if (!place.geometry) {
        //window.alert("Autocomplete's returned place contains no geometry");
        //return;
        // }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
           // map.fitBounds(place.geometry.viewport);
        } else {
            //map.setCenter(place.geometry.location);
            // map.setZoom(17);  // Why 17? Because it looks good.
        }
        $('#txtSearch').focus();
        marker.setIcon(/** @type {google.maps.Icon} */({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        // marker.setPosition(place.geometry.location);
        //marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
       // infowindow.open(map, marker);
    });

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    autocomplete.setTypes(['address']); // [] for all / ['address'] for address online / ['establishment']  for Establishments /  ['geocode'] for geocode

}

//Tìm theo địa chỉ
//Author: Longtq
ToolbarManager.SearchByAddress = function () {
    var geocoder = new google.maps.Geocoder();
    var address = $("#txtSearch").val();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                onlineMap.setCenter(results[i].geometry.location);
                var currentLatLng = new mxn.LatLonPoint(results[i].geometry.location.lat(), results[i].geometry.location.lng());
                var options = {
                    mapStraction: onlineMap.mapStraction,
                    latLng: currentLatLng
                };
                return new ShowAddress(options).openInfowindow();
            }

        } else {
            alert('Không tìm thấy địa chỉ phù hợp!');
        }
    });
}

//Tìm kiếm theo tọa độ
//Author: Longtq
ToolbarManager.SearchByLatLong = function () {
    var latlong = $("#txtSearch").val().match(/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/);
    if (latlong == null || latlong[1] == undefined || latlong[3] == undefined) {
        common.DisplayNotification("Tọa độ không hợp lệ hãy thử lại", common.notification_type_error);
    }
    else {
        var lat = latlong[1];
        var lng = latlong[3];
        onlineMap.setCenter(new google.maps.LatLng(lat, lng));
        var currentLatLng = new mxn.LatLonPoint(lat, lng);
        var options = {
            mapStraction: onlineMap.mapStraction,
            latLng: currentLatLng
        };
        return new ShowAddress(options).openInfowindow();
    }
}

//Tìm kiếm theo tên điểm
//Author: Longtq
ToolbarManager.SearchByLandmark = function () {
    $.ajax({
        type: 'POST',
        url: "/Online/GetLandmarkByName",
        data: { 'name': $("#txtSearch").val() },
        dataType: 'json',
        success: function (data) {
            if (data.PK_LandmarkID > 0) {
                var objLandmark = SingletonLandmarkOnline.getInstance(null);
                objLandmark.panToAndShowInfo(data.PK_LandmarkID);
            }
            else ToolbarManager.SearchByAddress();
        },
        error: function (err) {
            console.log("ToolbarManager.SearchByLandmark:" + err);
        }
    });

}

/* 
* $Author$		trungtq
* Danh sách lịch hẹn
*/
ToolbarManager.appointmentList = function () {
    window.open("/Appointment/Index", "target");
};

/* 
* $Author$		trungtq
* Đo khoảng cách
*/
ToolbarManager.distanceMeasure = function () {
    if (ToolbarManager.online != null && ToolbarManager.online != undefined) {
        ToolbarManager.online.distanceMeasure();
    }
};

/* 
* $Author$		trungtq
* Tra cước
*/
ToolbarManager.priceSearch = function () {
    SingletonPriceCheckManager.getInstance().init();
};

ToolbarManager.zoneWarning = function () {
    SingletonZoneWarningManager.getInstance().init();
};

ToolbarManager.vehicleDeclarationClick = function () {
    SingletonVehicleDeclarationManager.getInstance().init();
};

/* 
* $Author$		trungtq
* Cước thỏa thuận
*/
ToolbarManager.tripAgree = function () {
    alert('Cước thỏa thuận');
};


/* 
* $Author$		trungtq
* Dẫn đường
*/
ToolbarManager.directiveGuide = function () {
    if (ToolbarManager.online != null && ToolbarManager.online != undefined) {
        ToolbarManager.online.directiveGuide();
    }
};
;
// Model quản lý các phương thức cho control trên view
function Appointment() {
    var self = this;
    self.displayColumns = null;


    self.Document_Ready = function () {
        // trungtq: bổ xung đoạn gọi ẩn hiện cột.
        var options = { displayColumns: self.displayColumns, gridName: "MainGrid" };
        var reportColumOption = new ReportColumOptionHelper(options);
        reportColumOption.visibleColumn();
    };

    self.HandleErrorVehicle = function (args) {
        common.HandleError(args, "MainGrid", false);
    };

    self.getDate = function (type) {
        var date = common.GetKendoDatePickerValue(type + "Date");
        var time = '1900-01-01 00:00:00';
        if (common.GetKendoDatePickerValue(type + "Date") != '' && $("#" + type + "Time").val() != '' &&
            common.GetKendoDatePickerValue(type + "Date") != undefined && $("#" + type + "Time").val() != undefined) {
            time = new Date(date.getFullYear() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getDate() + " " + $("#" + type + "Time").val());
        }
        return time;
    };

    self.searchData = function () {
        var fromMoney = common.GetKendoNumericTextBoxValue("FromMoney");
        var fm = 0;
        var tm = 0;
        if (fromMoney != '') {
            fm = parseFloat(fromMoney);
        }

        var toMoney = common.GetKendoNumericTextBoxValue("ToMoney");
        if (toMoney != '') {
            tm = parseFloat(toMoney);
        }

        return {
            FromDate: self.getDate("From") != "1900-01-01 00:00:00" ? self.getDate("From").toStringJS() : new Date(),
            ToDate: self.getDate("To") != "1900-01-01 00:00:00" ? self.getDate("To").toStringJS() : (new Date()).addDays(1), // add cho đồng bộ với bên view
            FromMoney: fm,
            ToMoney: tm,
            AppointmentLogTypeId: parseInt(common.GetKendoDropDownValue("ddlOperationStatus")),
            SearchType: common.GetKendoDropDownValue("ddlSearchType"),
            SearchText: $("#txtSearchText").val(),
            SingleOrder: " CustomerName"
        };
    };

    self.search = function () {

        var fromDate = self.getDate("From");
        if (fromDate == '1900-01-01 00:00:00') {
            common.DisplayNotification(LanguageManager.getText('Appointment_StartDateRequired'), common.notification_type_error);
            return;
        }

        var toDate = self.getDate("To");
        if (toDate == '1900-01-01 00:00:00') {
            common.DisplayNotification(LanguageManager.getText('Appointment_EndDateRequired'), common.notification_type_error);
            return;
        }

        if (fromDate > toDate) {
            common.DisplayNotification(LanguageManager.getText('Common_FromDateBigger'), common.notification_type_error);
            return;
        }

        common.RefreshKendoGrid("MainGrid");
    };

    self.exportExcel = function () {
        // Danh sách cột của Grid
        var columns = $("#MainGrid").data("kendoGrid").columns;

        var options = {
            data: {
                GridColumns: JSON.stringify(columns),
                ReportContent: "",
                FromDate: self.getDate("From"),
                ToDate: self.getDate("To"),
                FromMoney: common.GetKendoNumericTextBoxValue("FromMoney"),
                ToMoney: common.GetKendoNumericTextBoxValue("ToMoney"),
                AppointmentLogTypeId: common.GetKendoDropDownValue("ddlOperationStatus"),
                SearchText: $("#txtSearchText").val(),
                SingleOrder: " CustomerName"
            },
            createExcelUrl: "/Appointment/DoExportExcel",
            downloaExcelUrl: "/Appointment/ExportExcel",
            createPDFUrl: "",
            downloaPDFUrl: "",
            title: "ExportHelper"
        };
        // Khởi tạo đối tượng hỗ trợ Export
        var exportHelper = new ExportHelper(options);
        exportHelper.exportToExcel();
    };

    self.deleteAppointment = function (obj) {
        if (confirm(LanguageManager.getText('Appointment_ConfirmDelete'))) {
            var grid = common.GetKendoGrid("MainGrid");
            var row = grid.dataItem($(obj).closest("tr"));
            var appointmentId = row.AppointmentID;

            var mes;
            var isSuccess;
            $.ajax({
                type: 'POST',
                url: "/Appointment/DeleteAppointment",
                data: { 'appointmentId': appointmentId },
                dataType: 'json',
                async: false,
                success: function (data) {
                    mes = data.message;
                    isSuccess = data.isSuccess;
                },
                error: function (xhr, status, error) {
                    alert(error.responseText);
                }
            });

            if (isSuccess) {
                common.DisplayNotification(LanguageManager.getText('Common_DeleteSuccess'),
                    common.notification_type_success);
                common.RefreshKendoGrid("MainGrid");
            } else {
                common.DisplayNotification(mes, common.notification_type_error);
            }
        }


    };

    self.deleteOperationVehicle = function (obj) {
        if (confirm(LanguageManager.getText('Appointment_ConfirmDeleteOp'))) {
            var grid = common.GetKendoGrid("MainGrid");
            var row = grid.dataItem($(obj).closest("tr"));
            var opId = row.PK_OperationVehicleID;

            var mes;
            var isSuccess;
            $.ajax({
                type: 'POST',
                url: "/Appointment/DeleteOperationVehicle",
                data: { 'operationId': opId },
                dataType: 'json',
                async: false,
                success: function (data) {
                    mes = data.message;
                    isSuccess = data.isSuccess;
                },
                error: function (xhr, status, error) {
                    alert(error.responseText);
                }
            });

            if (isSuccess) {
                common.DisplayNotification(LanguageManager.getText('Common_DeleteSuccess'),
                    common.notification_type_success);
                common.RefreshKendoGrid("MainGrid");
            } else {
                common.DisplayNotification(mes, common.notification_type_error);
            }

        }


    };

    self.editAppointment = function (obj) {
        var grid = common.GetKendoGrid("MainGrid");
        var row = grid.dataItem($(obj).closest("tr"));
        var appointmentId = row.AppointmentID;

        if ($('#divEditAppointment').length == 0) {
            $('body').append('<div id="divEditAppointment" style="display:none;"></div>');
        }

        var kendo = $("#divEditAppointment").kendoWindow({
            title: LanguageManager.getText('Online_UpdateTime') + " " + LanguageManager.getText('Appointment_Info').toLowerCase(),
            modal: false,
            visible: false,
            resizable: false,
            draggable: true,
            width: 700,
            open: function () {
                this.wrapper.css({ top: 50 });
            }

        }).data("kendoWindow");

        //Mở popup thêm mới
        kendo.refresh({
            url: "/Appointment/GetPartialViewCrudAppointment/" + appointmentId
        });

        //update title form
        $("#divEditAppointment_wnd_title").text(LanguageManager.getText("Common_Update") + " " + LanguageManager.getText("Appointment_Info").toLowerCase());

        kendo.center();
        kendo.open();
    };

    self.updateStatusVehicleOperation = function (obj) {
        var grid = common.GetKendoGrid("MainGrid");
        var row = grid.dataItem($(obj).closest("tr"));
        var opId = row.PK_OperationVehicleID;

        if ($('#divUpdateStatusVehicleOperation').length == 0) {
            $('body').append('<div id="divUpdateStatusVehicleOperation" style="display:none;"></div>');
        }

        var kendo = $("#divUpdateStatusVehicleOperation").kendoWindow({
            title: LanguageManager.getText('Appointment_StatusOperator'),
            modal: false,
            visible: false,
            resizable: false,
            width: 570,
            open: function () {
                this.wrapper.css({ top: 10 });
            }
        }).data("kendoWindow");

        //Mở popup thêm mới
        kendo.refresh({
            url: "/Appointment/GetPartialViewUpdateStatusOperationVehicle/" + opId
        });

        kendo.center();
        kendo.open();
    };

    self.updateAppointmentSuccess = function () {
        //Nếu không có trường nào bị lỗi
        if ($('.field-validation-error:visible').length == 0) {
            //Nếu là trường hợp sửa , kiểm tra thêm điều kiện
            if ($('#AppointmentID').val() != undefined && $('#AppointmentID').val() != '') {
                var id = parseInt($('#AppointmentID').val());
                //Nếu là trường hợp sửa
                if (id <= 0) {
                    common.DisplayNotification(LanguageManager.getText('Common_ImportSuccessfully'), common.notification_type_success);
                }
                //Nếu là TH thêm mới
                else {
                    common.DisplayNotification(LanguageManager.getText('Common_UpdateSuccess'), common.notification_type_success);
                }
            }
            //Nếu là TH thêm mới
            else {
                common.DisplayNotification(LanguageManager.getText('Common_ImportSuccessfully'), common.notification_type_success);
            }

            common.DisplayNotification(LanguageManager.getText('Common_UpdateSuccess'), common.notification_type_success);

            //Chỗ này kiểm tra xem nút nào đang được active
            //Nút lưu và đóng được active
            if ($('body').data("activeBtn") == "0") {
                $("#divEditAppointment").data("kendoWindow").close();
            } else {
                //Set lại các control về trạng thái ban đầu
                $('#frmCrudAppointment #AppointmentID').val(0);
                $('#frmCrudAppointment #IsUnprocess').val(true);
                $('#frmCrudAppointment #CustomerName').val('');
                $('#frmCrudAppointment #PhoneNumber').val('');
                $('#frmCrudAppointment #Address').val('');
                $('#frmCrudAppointment #TimeToComeStr').val('');
                $('#frmCrudAppointment #TimeToCome').val(0);
                $('#frmCrudAppointment #MinutesWarning').data("kendoNumericTextBox").value(0);
                var startDate = new Date();
                $('#frmCrudAppointment #StartDate').data("kendoDatePicker").value(startDate);
                $('#frmCrudAppointment #StartDate').data("kendoDatePicker").enable(true);
                $('#frmCrudAppointment #EndDate').data("kendoDatePicker").value(startDate);
                $('#frmCrudAppointment #EndDate').data("kendoDatePicker").enable(false);
                $('#frmCrudAppointment #IsMultiDays').prop('checked', false);

                $('#frmCrudAppointment .cssDay').prop('checked', false);
                $('#frmCrudAppointment .cssDay').each(function () {
                    if (startDate.getDay() + 1 == $(this).val()) {
                        $(this).prop('checked', true);
                        $('#frmCrudAppointment #DaysOfWeek').val($(this).val());
                    }
                });

                $('#frmCrudAppointment #Route').val('');
                $('#frmCrudAppointment #RequestVehicles').val('');
                $('#frmCrudAppointment #PrivateCodes').val('');
                $('#frmCrudAppointment #PaymentTypeId').data("kendoDropDownList").select(0);
                $('#frmCrudAppointment #CustomerTypeId').data("kendoDropDownList").select(0);
                $('#frmCrudAppointment #DepositMoney').data("kendoNumericTextBox").value(0);
                $('#frmCrudAppointment #TotalMoney').data("kendoNumericTextBox").value(0);
                $('#frmCrudAppointment #TotalFee').data("kendoNumericTextBox").value(0);
                $('#frmCrudAppointment #Note').val('');
            }

            if ($("#MainGrid").data("kendoGrid") != undefined) {
                common.RefreshKendoGrid("MainGrid");
            }
        } else {
            $('#frmCrudAppointment #btnSubmitForm').prop("disabled", false);
            $('#frmCrudAppointment #btnSubmitFormContinue').prop("disabled", false);
        }
    };

    // Kiểm tra nhập thời gian
    self.timeOnChange = function (obj) {
        var time = $(obj).val().split(':');
        var hours = time[0];
        if (hours > 23) {
            $(obj).val("00:00");
            return;
        }
        var minutes = time[1];
        if (minutes > 59) {
            $(obj).val("00:00");
            return;
        }
    };

    self.addNew = function () {
        if ($('#divEditAppointment').length == 0) {
            $('body').append('<div id="divEditAppointment" style="display:none;overflow:hidden;"></div>');
        }

        var kendo = $("#divEditAppointment").kendoWindow({
            title: LanguageManager.getText('Common_Add') + " " + LanguageManager.getText('Appointment_Info').toLowerCase(),
            modal: false,
            visible: false,
            resizable: false,
            draggable: true,
            width: 700,
            open: function () {
                this.wrapper.css({ top: 50 });
            }

        }).data("kendoWindow");

        //Mở popup thêm mới
        kendo.refresh({
            url: "/Appointment/GetPartialViewCrudAppointment/0"
        });

        //update title form
        $("#divEditAppointment_wnd_title").text(LanguageManager.getText("Common_Add") + " " + LanguageManager.getText("Appointment_Info").toLowerCase());

        kendo.center();
        kendo.open();
        setTimeout(function () {
            $("#CustomerName").focus();
        }, 2000);
        //
        //check box cho ngày hiện tại
        setTimeout(function () {
            var d = new Date();
            $(".dayofWeek input[type=checkbox]").each(function () {
                if ((d.getDay() + 1) == $(this).attr("value")) {
                    $(this).prop("checked", true);
                }
            });
        }, 1000);

    };

    //popup thêm mới cho trang online
    self.addNewOnline = function () {
        if ($('#divEditAppointment').length == 0) {
            $('body').append('<div id="divEditAppointment"></div>');
        }

        var kendo = $("#divEditAppointment").kendoWindow({
            title: LanguageManager.getText('Common_Add') + " " + LanguageManager.getText('Appointment_Info').toLowerCase(),
            modal: false,
            visible: false,
            resizable: false,
            draggable: true,
            width: 700,
            open: function () {
                this.wrapper.css({ top: 50 });
            }

        }).data("kendoWindow");

        //Mở popup thêm mới
        kendo.refresh({
            url: "/Appointment/GetPartialViewCrudAppointment/0"
        });

        kendo.center().open();
        setTimeout(function () {
            $("#CustomerName").focus();
        }, 2000);

        //check box cho ngày hiện tại
        setTimeout(function () {
            var d = new Date();
            $(".dayofWeek input[type=checkbox]").each(function () {
                if ((d.getDay() + 1) == $(this).attr("value")) {
                    $(this).prop("checked", true);
                }
            });
        }, 1000);
    };

    //self.autocompalete = function () {//Sonnl Khong dung o dau ca
    //    var configTreeViewObj = new ConfigTreeViewControl();
    //    var configACMObj = new ConfigACPlusMultiSelectControl();
    //    configACMObj.vehicleId = "PrivateCodes";
    //    configACMObj.inputValueField = "PrivateCode";
    //    configACMObj.editingVariable = "PrivateCodes";
    //    configACMObj.separator = ',';
    //    configTreeViewObj.groupId = "drlGroup";
    //    configTreeViewObj.searchTextField = "GroupName";
    //    configTreeViewObj.searchValueField = "VehicleGroupID";
    //    configTreeViewObj.seperator = ',';
    //    kendoMultiSelectBoxHelper.InitTreeViewPlusACM(configTreeViewObj, configACMObj);
    //}
}

var appointment = new Appointment();
var wnPopUp = null;
var _grid = new KendoHelper.InGrid("MainGrid");

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


$(function () {
    $("#FromTime").mask("99:99"); // Ghi masked cho các lựa chọn thời gian
    $("#ToTime").mask("99:99");
    $("#FromDate").mask("99/99/9999");
    $("#ToDate").mask("99/99/9999");
    _grid.init();
    appointment.Document_Ready();
});;
// scrollsaver.js
// Copyright (C) 2009-2014 M. Mahdi Hasheminezhad http://hasheminezhad.com
// Maintain scroll position of every element on postbacks and partial updates
// This source is licensed under Common Public License Version 1.0 (CPL)
// You can reach me at hasheminezhad at gmail dot com
// History:
// 2014-08-04 Third Release
// - Add loadScroll and saveScroll to the window object
// - Code cleanup
// 2011-08-24 Second Release
// - Support for localStorage
// - Consider window.location
// - Other minor tweaks
// 2009-08-21 First Public Release

(function (window, undefined) {
    var document = window.document,
        location = window.location,
        key = window.escape('scrollPosition|' + location.pathname + location.search);

    window.loadScroll = function () {
        var positions;
        //load scroll positions
        try {
            positions = (localStorage.getItem(key) || '').split('|');
        } catch (ex) {
            var cookieList = document.cookie.split(';');
            for (var i = cookieList.length - 1; i >= 0 && !positions; i--) {
                var cookieParts = cookieList[i].split('=');
                if (cookieParts[0] == key) {
                    positions = window.unescape(cookieParts[1]).split('|');
                }
            }
        }
        positions = positions || [];

        //set scroll positions
        for (var j = positions.length - 1; j >= 0 ; j--) {
            var currentValue = positions[j].split(',');
            try {
                if ('' == currentValue[0]) {    //no id for window
                    window.scrollTo(currentValue[1], currentValue[2]);
                } else if (currentValue[0]) {
                    var elm = document.getElementById(currentValue[0]);
                    elm.scrollLeft = currentValue[1];
                    elm.scrollTop = currentValue[2];
                }
            } catch (ex) { }
        }
    };

    window.saveScroll = function () {
        var positions = [];
        //windows scroll position
        var wl, wt;
        if (undefined !== window.pageXOffset) {
            wl = window.pageXOffset;
            wt = window.pageYOffset;
        } else if (undefined !== document.documentElement && document.documentElement.scrollLeft) {
            wl = document.documentElement.scrollLeft;
            wt = document.documentElement.scrollTop;
        } else {
            wl = document.body.scrollLeft;
            wt = document.body.scrollTop;
        }
        if (wl || wt) positions.push(['', wl, wt].join(','));   //no id for window

        //other elements
        var elements = document.getElementById('tblVehicleList');//document.all || document.getElementsByTagName('*');
        for (var i = 0; i < elements.length; i++) {
            var e = elements[i];
            if (e.id && (e.scrollLeft || e.scrollTop)) {
                positions.push([e.id, e.scrollLeft, e.scrollTop].join(','));
            }
        }

        //save scroll positions
        try {
            localStorage.setItem(key, positions.join('|'));
        } catch (ex) {
            document.cookie = key + '=' + positions.join('|') + ';';
        }
    };
})(window);

// Attach to page load and unload
(function (window) {
    var addEvent, eventPrefix;
    if (window.attachEvent) {
        addEvent = window.attachEvent;
        eventPrefix = 'on';
    } else {
        addEvent = window.addEventListener;
        eventPrefix = '';
    }
    addEvent(eventPrefix + 'load', window.loadScroll, false);
    addEvent(eventPrefix + 'unload', window.saveScroll, false);
})(window);

// Only for Partial PostBacks (UpdatePanel in ASP.NET)
setTimeout(function () {
    if ('undefined' != typeof Sys && 'undefined' != typeof Sys.WebForms) {
        var instance = Sys.WebForms.PageRequestManager.getInstance();
        instance.add_beginRequest(window.saveScroll);
        instance.add_endRequest(window.loadScroll);
    }
}, 0);
;
/*!
 * $.fn.scrollIntoView - similar to the default browser scrollIntoView
 * The default browser behavior always places the element at the top or bottom of its container. 
 * This override is smart enough to not scroll if the element is already visible.
 *
 * Copyright 2011 Arwid Bancewicz
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * @date 8 Jan 2013
 * @author Arwid Bancewicz http://arwid.ca
 * @version 0.3
 */
(function(a){a.fn.scrollIntoView=function(f,j,c){var b=a.extend({},a.fn.scrollIntoView.defaults);if(a.type(f)=="object"){a.extend(b,f)}else{if(a.type(f)=="number"){a.extend(b,{duration:f,easing:j,complete:c})}else{if(f==false){b.smooth=false}}}var h=Infinity,e=0;if(this.size()==1){((h=this.get(0).offsetTop)==null||(e=h+this.get(0).offsetHeight))}else{this.each(function(m,n){(n.offsetTop<h?h=n.offsetTop:n.offsetTop+n.offsetHeight>e?e=n.offsetTop+n.offsetHeight:null)})}e-=h;var k=this.commonAncestor().get(0);var g=a(window).height();while(k){var d=k.scrollTop,l=k.clientHeight;if(l>g){l=g}if(l==0&&k.tagName=="BODY"){l=g}if((k.scrollTop!=((k.scrollTop+=1)==null||k.scrollTop)&&(k.scrollTop-=1)!=null)||(k.scrollTop!=((k.scrollTop-=1)==null||k.scrollTop)&&(k.scrollTop+=1)!=null)){if(h<=d){i(k,h)}else{if((h+e)>(d+l)){i(k,h+e-l)}else{i(k,undefined)}}return}k=k.parentNode}function i(n,m){if(m===undefined){if(a.isFunction(b.complete)){b.complete.call(n)}}else{if(b.smooth){a(n).stop().animate({scrollTop:m},b)}else{n.scrollTop=m;if(a.isFunction(b.complete)){b.complete.call(n)}}}}return this};a.fn.scrollIntoView.defaults={smooth:true,duration:null,easing:a.easing&&a.easing.easeOutExpo?"easeOutExpo":null,complete:a.noop(),step:null,specialEasing:{}};a.fn.isOutOfView=function(b){var c=true;this.each(function(){var h=this.parentNode,d=h.scrollTop,g=h.clientHeight,f=this.offsetTop,e=this.offsetHeight;if(b?(f)>(d+g):(f+e)>(d+g)){}else{if(b?(f+e)<d:f<d){}else{c=false}}});return c};a.fn.commonAncestor=function(){var c=[];var f=Infinity;a(this).each(function(){var g=a(this).parents();c.push(g);f=Math.min(f,g.length)});for(var d=0;d<c.length;d++){c[d]=c[d].slice(c[d].length-f)}for(var d=0;d<c[0].length;d++){var e=true;for(var b in c){if(c[b][d]!=c[0][d]){e=false;break}}if(e){return a(c[0][d])}}return a([])}})(jQuery);;
/* 
* $Author$		trungtq
* Class quản lý thông tin cơ bản trên map
*/
var VehicleOnlineModel = function () { 
    this.VehicleID = 0;                 // ID xe
    this.VehiclePlate = "";             // Biển số xe
    this.PrivateCode = "";              // Số hiệu xe
    this.VehicleTime = "";              // Thời gian xe trả về 
    this.GpsTime = "";                  // Thời gian GPS
    this.Longitude = 0;                 // Kinh độ
    this.Latitude = 0;                  // Vĩ độ
    this.VelocityGPS = 0;               // Vận tốc GPS
    this.VelocityMechanical = 0;        // Vận tốc cơ
    this.VehicleDirection = 0;          // Hướng
    this.VehicleState = 0;              // Trạng thái xe
    this.OtherState = 0;                // Trạng thái khác
    this.Seat = 0;                      // Số chỗ
    this.VehicleGroupID = 0;            // ID nhóm xe
    this.MinuteOfManchineOnWhenStop = 0;// So phut dung do
    this.HighEmptyKm = 0;               // Cảnh báo km rỗng cao
    this.LimitMinutes = 0;              // Giới hạn cảnh báo dừng đỗ
    this.KmEmpty = 0;                   // Km rỗng trong ngày
    this.Stopped = 0;                   // Số phút dừng đỗ trong ngày/ ca
    this.IsLocked = false;
    this.LevelID = 0;
    this.CurrentEmptyKM = 0;            //Km dừng đỗ hiện thời
    this.IsLostVehicleInfo = 0;
    this.Icon = "";                     // IconCode
    this.VehicleTypeID = 0;             // ID loại xe
    this.OutOfFeeDate = "";            //  Ngày gia hạn
    this.MaturityDate = "";             // Ngày hết hạn
};

;
/* 
* $Author$		trungtq
* Class hỗ trợ format trong javascript
* http://software.dzhuvinov.com/jsworld-date-time-formatting.html
* http://momentjs.com/
*/
var FormatHelper = {};

FormatHelper.culture = "vi";


/* 
* $Author$		trungtq
* Format ngày
*/
FormatHelper.formatDate = function (jsonDate) {
    var dt = new Date(parseInt(jsonDate.substr(6)));
    return FormatHelper.formatTwoDigits(dt.getDate()) + "/" + FormatHelper.formatTwoDigits((dt.getMonth() + 1)) + "/" + dt.getFullYear();
};

/* 
* $Author$		trungtq
* Format ngày giờ
*/
FormatHelper.formatDateTime = function (jsonDate) {
    var dt;
    if (typeof jsonDate === 'string') {
        dt = new Date(parseInt(jsonDate.substr(6)));
    } else dt = jsonDate;
    return FormatHelper.formatTwoDigits(dt.getHours()) + ":" + FormatHelper.formatTwoDigits(dt.getMinutes()) + "  " + FormatHelper.formatTwoDigits(dt.getDate()) + "/" + FormatHelper.formatTwoDigits((dt.getMonth() + 1)) + "/" + dt.getFullYear();
    
};

/* 
* $Author$		sonnl
* Format ngày giờ truyền sang trang lộ trình
*/
FormatHelper.formatDateTimeRoute = function (dt) {
    return dt.getFullYear() + "/" + FormatHelper.formatTwoDigits((dt.getMonth() + 1))
        + "/" + FormatHelper.formatTwoDigits(dt.getDate()) + " " +
        FormatHelper.formatTwoDigits(dt.getHours()) + ":" + FormatHelper.formatTwoDigits(dt.getMinutes());

    //return FormatHelper.formatTwoDigits(dt.getHours()) + ":" + FormatHelper.formatTwoDigits(dt.getMinutes()) + "  " + FormatHelper.formatTwoDigits(dt.getDate()) + "/" + FormatHelper.formatTwoDigits((dt.getMonth() + 1)) + "/" + dt.getFullYear();
};

/* 
* $Author$		trungtq
* Format ngày giờ
* LuanBH thêm isIncludeSecond để kiểm tra có convert ra giây ko
*/
FormatHelper.formatTime = function (jsonDate, isIncludeSecond) {
    isIncludeSecond = typeof isIncludeSecond !== 'undefined' ? isIncludeSecond : true;
    var dt = new Date(parseInt(jsonDate.substr(6)));
    if (isIncludeSecond)
    {
        return FormatHelper.formatTwoDigits(dt.getHours()) + ":" + FormatHelper.formatTwoDigits(dt.getMinutes()) + ":" + FormatHelper.formatTwoDigits(dt.getSeconds());
    }
    else
    {
        return FormatHelper.formatTwoDigits(dt.getHours()) + ":" + FormatHelper.formatTwoDigits(dt.getMinutes());
    }
};

/* 
* $Author$		hanhth
* Format ngày giờ với điều kiện
*/
FormatHelper.formatTimeConfigs = function (jsonDate, isMillisecond) {    
    var dt = new Date(parseInt(jsonDate.substr(6)));
    if (isMillisecond) {
        return FormatHelper.formatTwoDigits(dt.getHours()) + ":" + FormatHelper.formatTwoDigits(dt.getMinutes()) + ":" + FormatHelper.formatTwoDigits(dt.getSeconds());
    }
    return FormatHelper.formatTwoDigits(dt.getHours()) + ":" + FormatHelper.formatTwoDigits(dt.getMinutes());
};

/* 
* $Author$		trungtq
* Format lại đoạn hiển thị số, nếu < 10 thì bổ xung thêm số 0 vào trước
*/
FormatHelper.formatTwoDigits = function (number) {
    return (number < 10 ? "0" : "") + number;
};

/* 
* $Author$		luanbh
* Format chuỗi số thành hiện dấu phân cách đơn vị
*/
FormatHelper.formatTextToCurrency = function (str, n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return str.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.');
};

/* 
* http://ditio.net/2010/05/02/javascript-date-difference-calculation/
* $Author$		trungtq
* JavaScript date difference calculation
*/
var DateDiff = (function () {
    var that = this;
    that.inSeconds = function (date1, date2) {
        var time1 = date1.getTime();
        var time2 = date2.getTime();
        return Math.floor(parseInt((time2 - time1) / (1000)));
    };
    that.inMinutes = function (date1, date2) {
        var time1 = date1.getTime();
        var time2 = date2.getTime();
        return Math.floor(parseInt((time2 - time1) / (60 * 1000)));
    };
    that.inHours = function (date1, date2) {
        var time1 = date1.getTime();
        var time2 = date2.getTime();
        return Math.floor(parseInt((time2 - time1) / (60 * 60 * 1000)));
    };
    that.inDays = function (date1, date2) {
        var time1 = date1.getTime();
        var time2 = date2.getTime()
        return parseInt((time2 - time1) / (24 * 3600 * 1000));
    };
    that.inWeeks = function (date1, date2) {
        var time1 = date1.getTime();
        var time2 = date2.getTime();

        return Math.floor(parseInt((time2 - time1) / (24 * 3600 * 1000 * 7)));
    };

    that.inMonths = function (date1, date2) {
        var d1Y = date1.getFullYear();
        var d2Y = date2.getFullYear();
        var d1M = date1.getMonth();
        var d2M = date2.getMonth();

        return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
    };

    that.inYears = function (date1, date2) {
        return d2.getFullYear() - d1.getFullYear();
    };
    return that;
})();


;
/* 
* $Author$		sonnl
* Class hỗ trợ trong javascript dành cho bản đồ
*/
var MapHelper = {};

/* 
* $Author$		
*Lấy địa chỉ theo đối tượng LatLng
*/
MapHelper.getAddressByPosition = function (latlng) {
    var address = "Đang cập nhật địa chỉ.";
    try {
        address = MapHelper.getAddress(latlng.lat(), latlng.lng());
    }
    catch (e) {
        console.log("error" + e);
    }
    return address;
}

/* 
* $Author$		
* Lấy địa chỉ theo tọa độ
* lat: kinh độ
* lng: vĩ độ
*/
MapHelper.getAddress = function (lat, lng) {
    var address = "";
    try {
        address = MapHelper._getAddress(lat, lng);
    } catch (e) {
        console.log("error" + e);
    }
    return address;
};

/* 
* $Author$		trungtq
* Lấy thông tin địa chỉ. 
* Hàm để 2 hàm trên gọi ra.
*/
MapHelper._getAddress = function (lat, lng) {
    var data = '';
    $.ajax({
        type: 'GET',
        url: "/Address/GetAddressByLatLng",
        dataType: 'json',
        data: { latitude: lat, longitude: lng },
        async: false,
        success: function (result) {
            if (result != null) {
                data = result;
            }
        },
        error: function (error) {
            console.log("Error: MapHelper._getAddress: " + error);
        }
    });
    return data;
};

/* 
* $Author$		trungtq
* Tính khoảng cách copy từ bên lộ trình của luanbh
* Đơn vị tính theo mét (m)
*/
MapHelper.distanceCalculate = function (x1, y1, x2, y2) {
    if (x1 == x2 && y1 == y2) return 0;
    var kc, t;
    var p1X = x1 * (Math.PI) / 180;
    var p1Y = y1 * (Math.PI) / 180;
    var p2X = x2 * (Math.PI) / 180;
    var p2Y = y2 * (Math.PI) / 180;
    kc = p2X - p1X;
    t = Math.cos(kc);
    t = t * Math.cos(p2Y);
    t = t * Math.cos(p1Y);
    kc = Math.sin(p1Y);
    kc = kc * Math.sin(p2Y);
    t = t + kc;
    kc = Math.acos(t);
    kc = kc * 6378137;
    return kc;
};


/* 
* $Author$		luanbh
* Lấy về phương hướng
*/
MapHelper.getDirection = function (x1, y1, x2, y2) {
    var x, y, g, s;
    x = x2 - x1;
    y = y2 - y1;
    s = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    g = Math.acos(x / s);
    if (y < 0) g = 2 * Math.PI - g;
    g = Math.round(4 * g / (Math.PI));
    if (g > 7) g = 0;
    return g;
};
;
/// <reference path="MapManager.js" />
/// <reference path="~/Scripts/language/LanguageManager.js" />
/// <reference path="~/Scripts/Map/Functions/ShowAddress.js" />
/// <reference path="~/Scripts/App/Common.js" />
/// <reference path="~/Scripts/jquery-1.11.1.js" />
/// <reference path="~/Scripts/Map/Functions/FindCar.js" />
var isProcessRefress = false;

/* 
* $Author$		hanhth
* Đối tượng quản lý trang online
* Tên variable: chu_cai_thuong_co_dau_gach_chan
* Tên methods, properties: in-caps.
*/
var VehicleOnlineManager = function (opts) {
    VehicleOnlineManager.super_.call(this, opts);// trungtq: Kế thừa constructor.

    this.listCurrentDisplay = new Hashtable();//SontKT: lưu trữ danh sách xe đang hiện
    this.isServerPush = (opts != null && opts.IsPushOnlineData != undefined) ? opts.IsPushOnlineData : true;                                           // Có sử dụng server push không? nếu không cấu hình mặc định sẽ là dùng request.
    this.secondConfigRequest = (opts != null && opts.SecondOfTimerOnlineRequest != undefined) ? opts.SecondOfTimerOnlineRequest * 1000 : 15000;         // Số giây request, mặc định là 5 giây                                                                                           
    //this.secondConfigRequest = 5000;
    this.statusConfig = (opts != null && opts.statusConfig != undefined) ? opts.statusConfig : 8;                                                       // Cấu hình trạng thái 4: các xe hoạt động
    this.configMinuteWeakGPS = (opts != null && opts.GPS != undefined) ? opts.GPS : 0;                                                                  // Cấu hình số phút yếu GPS
    this.configMinuteLostGPS = (opts != null && opts.GPSToGSM != undefined) ? opts.GPSToGSM : 0;                                                        // Cấu hình số phút mất GPS
    this.configLostGSM = (opts != null && opts.GSM != undefined) ? opts.GSM : 0;                                                                        // Cấu hình số phút mất GSM
    this.speedOver = (opts != null && opts.SpeedOver != undefined) ? opts.SpeedOver : 0;                                                                 // Cấu hình quá tốc độ
    this.map = null;                                                                                                                                    // Đối tượng map làm việc
    this.mapStraction = null;                                                                                                                           // Đối tượng Map Straction
    this.mapManager = null;                                                                                                                             // Đối tượng quản lý map
    this.rightMenuMap = null;                                                                                                                           // Menu chuột phải trên bản đồ
    this.rightMenuVehicle = null;                                                                                                                       // Menu chuột phải lên đối tượng xe, từng 
    this.overlay = null;                                                                                                                                // Right menu
    this.isDisplaySeconds = (opts != null && opts.OnlineIsShowSeconds != undefined) ? opts.OnlineIsShowSeconds : 0;
    this.dicItems = new Hashtable();                                                                                                                    // Đối tượng quản lý xe
    this.dicMarkers = new Hashtable();                                                                                                                  // Từ điển chứa markers
    this.dicPrivateCode = new Hashtable();                                                                                                              // Từ điển chưa key: PrivateCode, value: VehicleID
    this.keyPanTo = 0;                                                                                                                                  // Key cần panto tới
    this.velocityBoundaryMoveStop = (opts != null && opts.velocityBoundaryMoveStop != undefined) ? opts.velocityBoundaryMoveStop : 3;                   // Ranh giới vận tốc giữa dừng và di chuyển
    this.currentVehicle = null;                                                                                                                         // Đối tượng xe đang làm việc
    this.mapProviderTypes = (opts != null && opts.MapProviderTypes != undefined) ? opts.MapProviderTypes : "googlev3";                                  // Cấu hình mặc định là dùng google map
    this.warningManager = null;
    this.autocomplete = null;
    this.routeMap = null;                                                                                                                                                   // Phần quản lý lộ trình
    this.showMissingVehicleInfo = (opts != null && opts.EnableShowMissingVehicleInfo != undefined) ? opts.EnableShowMissingVehicleInfo : false;                             // Bật tắt lấy thông tin BGT (mặc định là không lấy)
    this.enableModuleWarning = (opts != null && opts.EnableModuleWarning != undefined) ? opts.EnableModuleWarning : false;                                                  // Có sử dụng module cảnh báo không (Mặc định là không?)
    this.enableModuleAppointment = (opts != null && opts.EnableModuleAppointment != undefined) ? opts.EnableModuleAppointment : false;                                      // Có sử dụng module lịch hẹn không (Mặc định là không?)
    this.secondsToRefreshModuleWarning = (opts != null && opts.SecondsToRefreshModuleWarning != undefined) ? opts.SecondsToRefreshModuleWarning : 300;                      // Số giây refresh lại dữ liệu cảnh báo
    this.secondsToRefreshModuleAppointment = (opts != null && opts.SecondsToRefreshModuleAppointment != undefined) ? opts.SecondsToRefreshModuleAppointment : 300;          // Số giây refresh lại dữ liệu lịch hẹn
    this.secondsToHideNotificationWarning = (opts != null && opts.SecondsToHideNotificationWarning != undefined) ? opts.SecondsToHideNotificationWarning : 60;              // Số giây ẩn khung cảnh báo
    this.secondsToHideNotificationAppointment = (opts != null && opts.SecondsToHideNotificationAppointment != undefined) ? opts.SecondsToHideNotificationAppointment : 60;  // Số giây ẩn khung lịch hẹn
    this.currentXNCode = (opts != null && opts.CurrentXNCode != undefined) ? parseInt(opts.CurrentXNCode) : 0;                                                              // XN code công ty đăng nhập hệ thống
    this.currentCompanyID = (opts != null && opts.CurrentCompanyID != undefined) ? parseInt(opts.CurrentCompanyID) : 0;                                                     // ID công ty đăng nhập hệ thống
    this.isRightPanelShow = true;
    this.windowDetailInfo = null;                                                                                                                                           // Cửa sổ cấu hình hiện trạng
    this.isRunning = false;                                                                                                                                                 // Có đang chạy hay không
    this.enableVehicleInactivity = (opts != null && opts.EnableDriverInform != undefined) ? opts.EnableDriverInform : false;                                                // Chức năng lái xe báo nghỉ/hoạt động lại ở menu chuột phải
    this.isBinhAnhUser = (opts != null && opts.IsBinhAnhUser != undefined) ? opts.IsBinhAnhUser : false;                                                                    // Có phải là người dùng bình anh => loại bỏ trường hợp mất xe khi xe chưa gán nhóm đội.
    this.enableOnlineFindVehicleType = (opts != null && opts.EnableOnlineFindVehicleType != undefined) ? opts.EnableOnlineFindVehicleType : false;                          //Có cho phép lọc loại xe trên trang online không?, mặc định là không, chỉ dùng cho TaxiGroup
    this.secondRefreshRightPanelRequest = 180000;                                                                                                                           // Số giây request danh sách xe bên phải, mặc định là 3 phút
    this.limitVehicleRefreshRightPanel = 1500;                                                                                                                              // Số xe nhiều => refresh right panel định kỳ tay vì liên tục
    this.markerCluster = null;
    this.BAP_CONFIG = (opts != null && opts.BAConfig != undefined) ? opts.BAConfig : false;
    this.IsHoangGia = (opts != null && opts.IsHoangGia != undefined) ? opts.IsHoangGia : false;

    this.IsUseClusterOnlineFinal = (opts != null && opts.IsUseClusterOnlineFinal != undefined) ? opts.IsUseClusterOnlineFinal : false;//*sign
    this.IsUseClusterForLandmark = (opts != null && opts.IsUseClusterForLandmark != undefined) ? opts.IsUseClusterForLandmark : false;//*sign
    //this.IsUseClusterOnlineFinal = false;
    if (this.IsUseClusterOnlineFinal) {
        this.heatMapMobile = new HeatMapMobile(opts); //Khởi tạo đối tượng cluster.
    }

    // MessageIDs BAPService
    this.messageIds = { Level1: 1, Level2: 2, Level3: 3, LevelViewData: 127, LevelLock: 128 };
    this.dicSplitPoint = new Hashtable(); // trungtq: tam viet cho chay. Key: ID xe, Value: mang poing
    this.velocityUseKienBoConfig = (opts != null && opts.VelocityUseKienBoConfig != undefined) ? opts.VelocityUseKienBoConfig : 4;
    this.enableCompanyUseKienBoConfig = (opts != null && opts.EnableCompanyUseKienBoConfig != undefined) ? opts.EnableCompanyUseKienBoConfig : false;
    this.countStepPoint = 0;
    this.stepPointConfig = (opts != null && opts.StepPointConfig != undefined) ? opts.StepPointConfig : 10;             // So phan tu chay kien bo
    this.stepPointDelta = 1.5; // He so cau hinh.
    this.inteTime = 0;

    //Thêm hệ số mặc định khi thay đổi các giá trị tìm kiếm
    this.currentState = 0;
    this.currentGroupID = 0;
    this.currentDefaultGroupID = 0;
    this.currentEnableRefreshRightPanel = true;
    this.currentVehicleTypeID = -1;
    this.numberRecord = 0;

    //LinhNX: Cac bien dung cho cluster  de tang UX
    //> Muc zoom cho phep update vehicle trong cluster
    this.maxZoomUpdate = (opts != null && opts.MaxZoomUpdate != undefined) ? parseInt(opts.MaxZoomUpdate) : 15;

    // chi update marker 1 khoang gioi han cho phep trong cluster
    this.countMaxVehicleUpdate = 30;

    //danh sach cac marker An/Hien dung cho cluster
    this.dicMarkerHS = new Hashtable();

    // level zoom toi da phep de gom xe
    this.disableClusteringAtZoom = (opts != null && opts.DisableClusteringAtZoom != undefined) ? parseInt(opts.DisableClusteringAtZoom) : 21;

    //Danh sach marker xe lich su k duoc update trong cluster marker
    this.dicVehicleOld = new Hashtable();
    this.UseMeterState = (opts != null && opts.UseMeterState != undefined) ? opts.UseMeterState : false;
    this.tblCountByState = [];
};



// trungtq: Kế thừa lại class TaxiMapBase
inherits(VehicleOnlineManager, TaxiMapBase);

/* 
* $Author$		trungtq
* Nhà cung cấp dịch vụ map, mặc định là google.
*/
VehicleOnlineManager.prototype.getMapProvider = function () {
    return this.mapProviderTypes;
};

/* 
* $Author$		trungtq
* Vị trí của panel bên trái hay phải.
* Online măc định là bên phải
*/
VehicleOnlineManager.prototype.isRightPanelPosition = function () {
    return true;
};

/* 
* $Author$		trungtq
* Khởi tạo phần tử DOM
*/
VehicleOnlineManager.prototype.initDOMElelment = function () {
    // Khởi tạo window cho cau hinh landmark
    var windowLandMarkConfig = $("#LandMarkConfig");
    if (!windowLandMarkConfig.data("kendoWindow")) {
        windowLandMarkConfig.kendoWindow({
            draggable: true,
            position: {
                top: 100,
                left: 100
            },
            visible: false,
            resizable: false,
            title: LanguageManager.getText("Online_LandmarkConfiguration"),
            width: "750px"
        });
    }

    // Khởi tạo window cho cau hinh landmark
    var windowHelpDialog = $("#helpWindow");
    if (!windowHelpDialog.data("kendoWindow")) {
        windowHelpDialog.kendoWindow({
            draggable: true,
            position: {
                top: 100,
                left: 100
            },
            visible: false,
            resizable: false,
            title: LanguageManager.getText("Online_TitleHelp"),
            width: "850px"
        });
    }
};

/* 
  * $Author$		trungtq
  * Ẩn hiện panel bên phải
  */
VehicleOnlineManager.prototype.tooglePanel = function () {
    if (this.isRightPanelShow) {
        $("#onlineRightPanel").animate({ 'right': '-=250px' });
        $("#onlineRightPanelToggle i").removeClass("fa-caret-right");
        $("#onlineRightPanelToggle i").addClass("fa-caret-left");
        $("#onlineRightPanelToggle").attr("title", "Bấm nút này để hiện panel.");

        // Đánh dấu là đã ẩn
        this.isRightPanelShow = false;
    }
    else {
        $("#onlineRightPanel").animate({ 'right': '0px' });
        $("#onlineRightPanelToggle i").removeClass("fa-caret-left");
        $("#onlineRightPanelToggle i").addClass("fa-caret-right");
        $("#onlineRightPanelToggle").attr("title", "Bấm nút này để ẩn panel.");

        // Đánh dấu là đang hiện
        this.isRightPanelShow = true;
    }
};


/* 
* $Author$		trungtq
* Đăng ký sự kiện cho các controls.
*/
VehicleOnlineManager.prototype.invokeEvents = function () {
    var that = this;
    // Sự kiện thay đổi nhóm xe
    $("#Online_VehicleGroup").on("change", function (e) {
        that.vehicleGroupChange();
        that.reloadSearchConfig();
    });

    // Sự kiện thay đổi trạng thái hoạt động
    $("#Online_VehicleStatus").on("change", function (e) {
        that.vehicleStatusChange();
        that.reloadSearchConfig();
    });

    // Nếu cho phép tìm kiếm theo nhóm đội.
    if (that.enableOnlineFindVehicleType) {
        // Sự kiện thay đổi nhóm đội
        $("#Online_VehicleType").on("change", function (e) {
            that.vehicleTypeChange();
        });
    }

    $("#cbLandMark").on("change", function (e) {
        that.searchLandMarkChange(this.value);
    });

    // Sự kiện thay đổi tiêu chí tìm kiếm
    $("#ddlSearchProperty").on("change", function (e) {
        that.searchPropertyOnChange(this.value);
    });

    // Sự kiện click button tìm kiếm
    $("#btnVehicleSearch").on("click", function (e) {
        if (that.IsUseClusterOnlineFinal) {
            setTimeout(function () {
                that.inits.refresh(that.secondConfigRequest);
            }, 200);
        }

        var ddlVehicleType = common.GetKendoDropDownValue("ddlSearchProperty");
        if (ddlVehicleType == "0") {
            // Bật cờ đang chạy lên
            that.isRunning = true;

            // Thực hiện tìm kiếm xe
            that.vehicleSearch();

            // Tắt cờ đang chạy đi
            that.isRunning = false;
        }
        else if (ddlVehicleType === "1") {
            that.setAutoComplete();
        }
        else if (ddlVehicleType === "2") {

            var combo = common.GetKendoComboBoxValue("cbLandMark");
            if (combo !== "" && common.GetKendoComboBox("cbLandMark").selectedIndex !== "-1") {
                that.searchLandMarkChange(common.GetKendoComboBoxValue("cbLandMark"));
            }
            else {
                common.DisplayNotification("Hãy nhập tên điểm chính xác", common.notification_type_error);
            }
        }
        else if (ddlVehicleType === "3") {
            var latlong = $("#txtPointSearch").val().match(/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/);
            if (latlong == null || latlong[1] == undefined || latlong[3] == undefined) {
                common.DisplayNotification("Tọa độ không hợp lệ hãy thử lại", common.notification_type_error);
            }
            else {
                var lat = latlong[1];
                var lng = latlong[3];
                var ll = new window.mxn.LatLonPoint(lat, lng);
                that.map.panTo(ll);
                var options = {
                    mapStraction: that.mapStraction,
                    latLng: ll
                };
                return new ShowAddress(options).openInfowindow();
            }
        }
        return false;
    });

    // Sự kiện refresh lưới
    $("#btnRefreshRequest").on("click", function (e) {
        that.refreshMap();
    });

    // Sự kiện hiện trạng hệ thống
    $("#btnSystemStatus").on("click", function (e) {
        new SystemStatusManager().init();
    });

    // Sự kiện trợ giúp
    $("#btnHelp").on("click", function (e) {
        that.showHelpDialog();
    });

    $('#Online_Vehicles').closest('.k-combobox.k-widget').keydown(function (e) {
        if (e.which === 13) {
            // Bật cờ đang chạy lên
            that.isRunning = true;

            // Thực hiện tìm kiếm
            that.vehicleSearch();

            // Tắt cờ đang chạy đi
            that.isRunning = false;
        }
    });
    var InfoRevenue = $("#infoRevenue");
    if (!InfoRevenue.data("kendoWindow")) {
        InfoRevenue.kendoWindow({
            draggable: true,
            position: {
                top: 100,
                left: 100
            },
            visible: false,
            resizable: false,
            title: "Thông tin doanh thu",
            width: "400px"
        });
    }


};

/*
* Load thông tin tìm kiếm theo điểm
*/
VehicleOnlineManager.prototype.getListLandMark = function (searchText, categoryId) {
    var that = this;
    try {
        var cbLandMark = common.GetKendoComboBox("cbLandMark");

        that.getListLandMarkCallback(searchText, categoryId, function (data) {
            cbLandMark.dataSource.data(data);
        });
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.getListLandMark:" + err);
    }
};


/*
* Load thông tin tìm kiếm theo điểm
*/
VehicleOnlineManager.prototype.getListLandMarkCallback = function (searchText, categoryId, callback) {
    $.ajax({
        type: 'POST',
        url: "/Online/GetListLandmark",
        data: { 'searchText': searchText, 'categoryId': categoryId },
        dataType: 'json',
        success: function (data) {
            callback(data.landmarkResult);
        },
        error: function (err) {
            console.log("VehicleOnlineManager.prototype.getListLandMarkCallback:" + err);
        }
    });
};

VehicleOnlineManager.prototype.searchLandMarkChange = function (id) {
    var that = this;
    var objLandmark = window.SingletonLandmarkOnline.getInstance(null);
    objLandmark.panToAndShowInfo(id);

    $.each(objLandmark.lstLandmark, function (t) {
        if (this.Id.toString() == id) {
            var opt = new Object();
            opt.online = onlineMap;
            var objFindcar = SingletonFindCar.getInstance(opt);
            objFindcar.initNearestNew(this.info.Latitude, this.info.Longitude);
            //that.mapStraction.setCenter(new mxn.LatLonPoint(this.info.Latitude, this.info.Longitude));
            return;
        }
    });
}

//Sự kiện thay đổi trạng thái tìm kiếm
VehicleOnlineManager.prototype.searchPropertyOnChange = function (val) {
    // Tìm theo xe
    if (val === "0") {
        $("#vehicleSearch").show();
        $("#addressSearch").hide();
        $("#LandMarkSearch").hide();
        $("#pointSeach").hide();
    }
    // Tìm theo tọa độ
    else if (val === "1") {
        $("#txtAddressSearch").val("");
        $("#vehicleSearch").hide();
        $("#addressSearch").show();
        $("#LandMarkSearch").hide();
        $("#pointSeach").hide();
        this.setAutoComplete();
    }
    // Tìm theo điểm (Landmark)
    else if (val === "2") {
        $("#vehicleSearch").hide();
        $("#addressSearch").hide();
        $("#LandMarkSearch").show();
        $("#pointSeach").hide();

        // trungtq: Load lại tìm theo điểm
        this.getListLandMark("", 0);
    }
    // Tìm theo tên điểm
    else if (val === "3") {
        $("#vehicleSearch").hide();
        $("#addressSearch").hide();
        $("#LandMarkSearch").hide();
        $("#pointSeach").show();
    }
}

/* 
* $Author$		hanhth
* khởi tạo điểm
*/
VehicleOnlineManager.prototype.initLandMark = function () {
    var that = this;
    var opt = new Object();
    opt.map = this.mapStraction.getMap();
    opt.mapStraction = this.mapStraction;
    opt.IsUseClusterForLandmark = that.IsUseClusterForLandmark;

    var landmark = window.SingletonLandmarkOnline.getInstance(opt);
    landmark.initAll();
};

/* 
* $Author$		trungtq
* Đăng ký trước khi khởi tạo bản đồ
*/
VehicleOnlineManager.prototype.beforeInitMap = function () {
    // Khởi tạo DOM
    this.initDOMElelment();

    // Đăng ký sự kiện
    this.invokeEvents();
};

/* 
* $Author$		hanhth
* Khoi tao init cho tat ca dich vu (push & request)
*/
VehicleOnlineManager.prototype.initMap = function () {
    var that = this;
    try {

        // trungtq: Khởi tạo menu chuột phải trên map
        that.rightMenuMap = new binhanhManager.menu({
            focusColor: '#00356A',
            textColor: '#FFFFFF',
            hideMouseOut: true,
            scope: this,
            index: 20005,
            items: mapMenu
        });

        // trungtq: Khởi tạo menu chuột phải trên đối tượng xe, từng dòng trên danh sách xe.
        that.rightMenuVehicle = new binhanhManager.menu({
            focusColor: '#00356A',
            textColor: '#FFFFFF',
            hideMouseOut: true,
            scope: this,
            index: 20005,
            items: vehicleMenu
        });

        // trungtq: Gọi hàm khởi tạo cơ bản trong TaxiMapBase.
        VehicleOnlineManager.super_.prototype.initMap.call(that);

        // trungtq: Gán lại đối tượng map quản lý.
        that.map = VehicleOnlineManager.super_.prototype.getMap.call(that);

        // Gọi lại bản đồ
        that.mapStraction = VehicleOnlineManager.super_.prototype.getmapStraction.call(that);

        // Khởi tạo đối tượng quản lý map
        this.mapManager = this;

        // Đăng ký sự kiện click lên bản đồ
        that.mapStraction.click.addHandler(function (event_name, event_source, event_args) {
            that.rightMenuMap.hide();
            that.rightMenuVehicle.hide();
            that.overlay = null;

            // Set lại tọa độ tâm.
            that.currentLatLng = event_args.location;

            //Longtq bổ sung theo yêu cầu : http://192.168.1.16:8089/browse/TAXINEW-26
            onlineMap.closePopup();//đóng khung hiện trạng lại
        });

        // trungtq: Đăng ký sự kiện chuột phải với google map.
        that.mapStraction.rightclick.addHandler(function (event_name, event_source, event_args) {
            var x = event_args.pixel.x;
            var y = event_args.pixel.y;

            var screenWidth = $(document).width();
            var screenHeight = $(document).height();

            // Nếu ở ngoài màn hình => set lại vị trí giữa màn hình.
            if ((x < 0 || x > screenWidth) || (y < 0 || screenHeight > screenHeight)) {
                x = screenWidth / 2;
                y = screenHeight / 2;
            }

            that.rightMenuMap.showAt({ x: x, y: y });

            that.rightMenuMap.latLng = event_args.location;

            // Set lại tọa độ tâm.
            that.currentLatLng = event_args.location;
        });

        var timeout_drag = null;

        // trungtq: Đăng ký sự kiện bắt đầu kéo bản đồ
        that.mapStraction.startPan.addHandler(function (event_name, event_source, event_args) {
            // Clear timeout cũ đi
            if (timeout_drag != null) {
                clearTimeout(timeout_drag);
            }

            // Bật cờ đang chạy lên
            that.isRunning = true;

            that.rightMenuMap.hide();
        });

        // trungtq: Đăng ký sự kiện kết thúc kéo bản đồ
        that.mapStraction.endPan.addHandler(function (event_name, event_source, event_args) {
            //LinhNX: neu su dung cluster + muc zoom cho phep thy refresh lai phat
            if (that.IsUseClusterOnlineFinal && that.mapStraction.getZoom() >= that.maxZoomUpdate)
                setTimeout(function () {
                    that.inits.refresh(that.secondConfigRequest);
                }, 200);


            that.rightMenuMap.hide();

            timeout_drag = setTimeout(function () {
                // Tắt cờ đang chạy đi
                that.isRunning = false;
            }, 3000);
        });

        var timeout_zoom = null;

        // trungtq: Đăng ký sự kiện idle (fired when the map becomes idle after panning or zooming)
        that.mapStraction.idle.addHandler(function (event_name, event_source, event_args) {
            // Delay 1 lúc rồi mới cho chạy
            timeout_zoom = setTimeout(function () {
                // Tắt cờ đang chạy đi
                that.isRunning = false;
            }, 3000);

            console.log('that.mapStraction.idle.addHandler:');
        });

        // trungtq: Đăng ký sự kiện thay đổi mức zoom bản đồ
        that.mapStraction.changeZoom.addHandler(function (event_name, event_source, event_args) {
            // Clear timeout cũ đi
            if (timeout_zoom != null) {
                clearTimeout(timeout_zoom);
            }

            //LinhNX: neu su dung cluster + muc zoom cho phep thy refresh lai phat
            if (that.IsUseClusterOnlineFinal && that.mapStraction.getZoom() >= that.maxZoomUpdate)
                setTimeout(function () {
                    that.inits.refresh(that.secondConfigRequest);
                }, 200);

            // Bật cờ đang chạy lên
            that.isRunning = true;
            that.rightMenuMap.hide();
        });

        if (that.mapStraction.api === "googlev3") {

            // trungtq: Delay sau khi load xong map.
            that.mapStraction.load.addHandler(function (event_name, event_source, event_args) {
                // Khởi tạo dữ liệu
                that.initData();

                // Resize lại kích thước.
                that.resizeMap();

                // Nếu cho phép refresh định kỳ
                if (that.enableRefreshRightPanel()) {
                    $(document).everyTime(that.secondRefreshRightPanelRequest, "refreshRightPanel", function () {
                        if (!that.isRunning) {
                            // Bật cờ đang chạy
                            that.isRunning = true;

                            // Gọi lại hàm đồng bộ.
                            that.refreshRightPanel();

                            // Tắt cờ đang chạy đi
                            that.isRunning = false;
                        }
                    });
                }

                // Load điểm 
                that.initLandMark();
            });
        }
        else {
            // Khởi tạo dữ liệu
            that.initData();

            // Resize lại kích thước.
            that.resizeMap();

            // Nếu cho phép refresh định kỳ
            if (that.enableRefreshRightPanel()) {
                $(document).everyTime(that.secondRefreshRightPanelRequest, "refreshRightPanel", function () {
                    if (!that.isRunning) {
                        // Bật cờ đang chạy
                        that.isRunning = true;

                        // Gọi lại hàm đồng bộ.
                        that.refreshRightPanel();

                        // Tắt cờ đang chạy đi
                        that.isRunning = false;
                    }
                });
            }

            // Load điểm 
            that.initLandMark();
        }
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.initMap():" + err);
    }
};

/* 
* $Author$		trungtq
* Có bật chức năng refresh right panel định kỳ không?
* >=1500 xe và là XN 6666 và trạng thái !=0 => Thì mới bật.
*/
VehicleOnlineManager.prototype.enableRefreshRightPanel =
    function () {
        if (this.dicMarkers.size() >= this.limitVehicleRefreshRightPanel) {
            return true;
        }
        return false;
    };

/* 
* $Author$		trungtq
* Refresh danh sách xe bên phải, tránh phải refresh nhiều khi đồng bộ.
*/
VehicleOnlineManager.prototype.refreshRightPanel = function () {
    var that = this;
    try {
        var stateID = parseInt($("#Online_VehicleStatus").data("kendoDropDownList").value());
        var groupID = $("#Online_VehicleGroup").data("kendoDropDownList").value();
        // Index 0 là nhóm "Tất cả" 
        // Longtq thêm để không phải lọc khi nhóm đội không thay đổi (với user thường nhóm này cực nhiều nhóm con > gây chậm hệ thống)
        var defaultGroup = common.GetKendoDropDown('Online_VehicleGroup').selectedIndex;

        var vehicleTypeID = -1;
        // Nếu cho phép tìm kiếm theo loại xe
        if (that.enableOnlineFindVehicleType) {
            vehicleTypeID = parseInt($("#Online_VehicleType").data("kendoDropDownList").value());
        }

        // Thêm cái này để sửa user thường của BA mất xe dần trên online sau mỗi lần refresh
        if (that.isBinhAnhUser) {
            groupID = "";
        }

        // Duyệt qua từ điển
        that.dicMarkers.each(function (key, value) {
            that.addOrRemoveRow(groupID, defaultGroup, stateID, vehicleTypeID, value);
        });
        var count = that.listCurrentDisplay.keys().length;
        $("#spCurrent").html(count);
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.refreshRightPanel:" + err);
    }
};

/* 
* $Author$		trungtq
* Khởi tạo dữ liệu
*/
VehicleOnlineManager.prototype.initData = function () {
    try {
        var that = this;

        // Đánh dấu là chưa đọc.
        that.isRunning = false;

        // Bật cờ đang chạy 
        that.isRunningAppointment = false;

        // Nếu không phải là đang chạy => Cho phép khởi tạo
        if (!that.isRunning) {

            // Bật cờ đang chạy
            that.isRunning = true;

            // Khởi tạo đối tượng request, init lần đầu tiên để lấy danh danh sách từ xe full đã
            that.inits = new window.VehicleOnlineRequestServer(that.mapManager);

            // Gọi hàm khởi tạo
            that.inits.init();
            if (this.isServerPush) {
                var push = new window.VehicleOnlinePushManager(this.mapManager, this.warningManager);
                push.init();
                $("#contentData").html("<img src='/Images/PushData.gif' style='margin-top: 5px' alt='Dữ liệu push' title='Dữ liệu push' />");
            }
            else {
                // Nếu là request
                // Tự động request theo số giây cấu hình
                /*LinhNX: neu su dung cluster se load kieu #*/
                if (!that.IsUseClusterOnlineFinal) {
                    $(document).everyTime(that.secondConfigRequest, "SynVehicleList", function () {
                        if (!that.isRunning) {
                            // Bật cờ đang chạy
                            that.isRunning = true;
                            // Gọi lại hàm đồng bộ.
                            that.inits.refresh(that.secondConfigRequest);
                            // Tắt cờ đang chạy đi
                            that.isRunning = false;
                        }
                    });

                }
                $("#contentData").html("<img src='/Images/RequestData.gif' alt='Dữ liệu request' title='Dữ liệu request' style='margin-top: 5px' />");
            }

            var options = {
                isAllowSoundAlertSOS: window.GeneralHelper.getConfigWarningSound(),
                secondsToRefreshModuleWarning: that.secondsToRefreshModuleWarning,
                secondsToRefreshModuleAppointment: that.secondsToRefreshModuleAppointment,
                enableModuleWarning: that.enableModuleWarning,
                enableModuleAppointment: that.enableModuleAppointment,
                secondsToHideNotificationWarning: that.secondsToHideNotificationWarning,
                secondsToHideNotificationAppointment: that.secondsToHideNotificationAppointment,
                currentXNCode: that.currentXNCode
            };
            that.warningManager = window.SingletonWarning.getInstance(options);
            that.warningManager.init();

            // Nếu bật module cảnh báo *sign
            if (that.enableModuleWarning) {
                setInterval(function () {
                    setTimeout(function () {
                        that.isRunning = true;
                        that.requestHallData();
                        that.isRunning = false;
                    }, 1000);
                }, 300000);

                if (that.warningManager.intervalWarning == null || that.warningManager.intervalWarning == undefined) {
                    that.warningManager.intervalWarning = setInterval(function () {
                        if (!that.isRunning) {
                            // Bật cờ đang chạy
                            that.isRunning = true;

                            var isHide = $("#warningOnlineWrapperDiv").data("kendoWindow").element.is(":hidden");
                            if (isHide) {
                                that.warningManager.openPopUpHasNewWarningEdit();
                            }

                            // Tắt cờ đang chạy đi
                            that.isRunning = false;
                        }
                    }, that.warningManager.secondsToRefreshModuleWarning * 1000);
                }
            }

            // Nếu bật module lịch hẹn => thì mới xử lý
            if (that.enableModuleAppointment) {
                if (that.warningManager.intervalAppointment == null || that.warningManager.intervalAppointment == undefined) {
                    that.warningManager.intervalAppointment = setInterval(function () {
                        if (!that.isRunningAppointment) {
                            // Bật cờ đang chạy
                            that.isRunningAppointment = true;
                            var isHide = $("#warningOnlineWrapperDiv").data("kendoWindow").element.is(":hidden");
                            if (isHide) {
                                that.warningManager.openPopUpHasNewWarningAppointmentEdit();
                            }
                            // Tắt cờ đang chạy đi
                            that.isRunningAppointment = false;
                        }
                    }, that.warningManager.secondsToRefreshModuleAppointment * 1000);
                }
            }

            // Tắt cờ đang chạy đi
            that.isRunning = false;
        }
        //Chạy phần heatmap trên online thì mở ra :D
        //  that.initMarkerCluster(); 
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.initData:" + err);
    }
};

VehicleOnlineManager.prototype.requestHallData = function () {
    var that = this;
    try {
        $.ajax({
            type: 'GET',
            url: "/Online/RequestHallData",
            data: {},
            dataType: 'json',
            cache: false,
            success: function (result) {
                if (result != null) {
                }
            },
            error: function (error) {
                console.log("VehicleOnlineManager.prototype.requestHallData(): " + error);
            }
        });
    }
    catch (err) {
        that.isRunning = false;
        console.log("catch VehicleOnlineManager.prototype.requestHallData():" + err);
    }
}

/* 
* $Author$		hanhth
* Gen cluster
*/
VehicleOnlineManager.prototype.initMarkerCluster = function () {
    var that = this;
    that.markerCluster = new MarkerClusterer(that.map, [], {
        maxZoom: 24,//Mức zoom cho phép hiển thị          
        zoomOnClick: false,//Sự kiện click vào nhóm cluster		  
        minimumClusterSize: 1,//Giới hạn gộp nhỏ nhất          
        imagePath: '/Images/MarkerClusters/m'//đường dẫn thư mục ghép file
    });
    that.onMarkerClusterCreate(null, null, 10, 5);
}

VehicleOnlineManager.prototype.onMarkerClusterCreate = function (start, end, radius, limit) {
    var that = this;
    that.onMarkerClusterClear();
    that.markerCluster.minClusterSize_ = limit;
    $.ajax({
        type: 'POST',
        url: "/Online/GetDataCluster",
        data: { startDate: FormatHelper.formatDateTime('00:00:00 06/10/2016 '), endDate: FormatHelper.formatDateTime('00:00:00 07/10/2016') },
        dataType: 'json',
        async: false,
        success: function (data) {
            if (data) {
                var mkt = [];
                var markerImage = new google.maps.MarkerImage('/Images/MarkerClusters/FFFFFF-0.png', new google.maps.Size(1, 1));
                $.each(data, function (res) {
                    var m = new google.maps.Marker({
                        position: new google.maps.LatLng(this.sl, this.sln),
                        draggable: false,
                        icon: markerImage
                    });
                    mkt.push(m);
                });
                that.markerCluster.addMarkers(mkt);
            }
            else {
                common.DisplayNotification("Chưa có dữ liệu cuốc khách nào", common.notification_type_success);
            }

        },
        error: function (error) {
            console.log("VehicleOnlineManager.prototype.onMarkerClusterCreate: " + error);
        }
    });
}

VehicleOnlineManager.prototype.onMarkerClusterClear = function () {
    var that = this;
    if (that.markerCluster) {
        that.markerCluster.clearMarkers();
    }
}

/* 
* $Author$		trungtq
* Event khi resize màn hình
*/
VehicleOnlineManager.prototype.resizeMap = function () {
    try {
        // Gọi lại hàm resize map từ thằng cha.
        VehicleOnlineManager.super_.prototype.resizeMap.call(this);

        var item = this.numberRecord;

        // Nếu có nhỏ hơn 5 xe => cho danh sách ngắn lại.
        if (item > 0) {
            if (item <= 5) {
                // Tính lại độ cao của grid;
                var searchHeight = 200;
                var contentHeight = item * 26; // Độ cao 1 dòng = 26px;
                var headerHeight = $("#OnlineGrid .k-grid-header").height();
                $("#OnlineGrid .k-grid-content").css("height", contentHeight);
                $("#OnlineGrid").css("height", headerHeight + contentHeight + 10);
            }
            else {
                // Tính lại độ cao của grid;
                var height = $(window).height() - (360);
                var headerHeight = $("#OnlineGrid .k-grid-header").height();
                $("#OnlineGrid .k-grid-content").css("height", height - headerHeight);
                $("#OnlineGrid").css("height", height);
            }
        }
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.resizeMap:" + err);
    }
}

/* 
* $Author$	hanhth
*  Tìm kiếm xe
*/
VehicleOnlineManager.prototype.vehicleSearch = function () {
    try {
        var that = this;
        var vehicles = common.GetKendoComboBox("Online_Vehicles");
        if (vehicles == '') {
            this.closePopup();
            common.DisplayNotification("Bạn nhập số hiệu xe hoặc biển số xe cần tìm", common.notification_type_success);
            return;
        }
        var marker = null;
        var obj;
        var vehicleID = /^[0-9]*$/.test(vehicles.value()) ? parseInt(vehicles.value()) : this.searchVehicleByVehiclePlate(vehicles.text().toUpperCase().trim());
        obj = this.dicMarkers.get(vehicleID);
        if (!that.IsUseClusterOnlineFinal) {
            marker = obj.marker;
            if (marker != null) {
                if (obj.isShowMarker == true) {
                    // Nếu marker đang ẩn trên map
                    if (!marker.getVisible()) {
                        var vehicle = obj.vehicle;

                        if (vehicle != null) {
                            // trungtq: Chỉ hiện các marker có LevelID <> 3 và LevelID <> 128
                            if (obj.isShowMarker) {
                                marker.show();// Hiện marker
                            }

                            // Nếu không có trong điều kiện tìm kiếm.
                            var currentGroup = vehicle.VehicleGroupID;

                            // Lấy lại trạng thái của xe được chọn
                            var currentStatus = this.getVehicleCurrentStatus(vehicle);

                            // Set lại giá trị cho combobox nhóm xe
                            $("#Online_VehicleGroup").data("kendoDropDownList").value(currentGroup);

                            // Set lại giá trị cho combox trạng thái xe
                            $("#Online_VehicleStatus").data("kendoDropDownList").value(currentStatus);

                            // Nếu cho phép tìm kiếm theo loại xe
                            if (this.enableOnlineFindVehicleType) {
                                $("#Online_VehicleType").data("kendoDropDownList").value(vehicle.VehicleTypeID);
                            }

                            // Gọi lại hàm tìm kiếm xe.
                            this.filterProcess(obj);
                        }
                    }

                    var currentLabel = marker.getAttribute("labelClass");

                    // Gọi hàm panTo
                    this.panTo(vehicleID);

                    // Set lại option cho marker.
                    marker.setOptions({ labelClass: currentLabel });

                    setTimeout(function () {
                        marker.setOptions({ labelClass: currentLabel });
                    }, 3000);
                }
                else {
                    $("#CurrentStatus").hide();
                    this.infoWindoGeneratorCallback(obj.vehicle);
                }
            } else {
                this.closePopup();
                common.DisplayNotification("Xe không thuộc vùng lọc hãy thử lại với xe khác", common.notification_type_success);
            }
        } else {
            //Xử lý khi có cluster!
            // Bỏ hết màu active cho các dòng
            /*
                        $('#tblVehicleList tbody tr').each(function () {
                            if ($(this).hasClass('colorActive')) {
                                $(this).removeClass('colorActive');
                            }
                        });
                        // Gán lại màu cho các dòng.
                        $(this).addClass('colorActive');
            */
            //that.heatMapMobile.markerCluster.KEY_PAN_TO = 0;
            let markerShow = that.dicMarkerHS.get(obj.vehicle.VehicleID);
            if (markerShow != null) {
                this.closePopup();
                common.DisplayNotification("Xe không thuộc vùng lọc hãy thử lại với xe khác", common.notification_type_success);
            } else {
                // Panto đến xe
                that.panTo(obj.vehicle.VehicleID);
            }
        }
    }
    catch (err) {
        common.DisplayNotification("Không tìm thấy xe", common.notification_type_error);
    }
};

/* 
* $Author$		hanhth
* Tìm theo nhóm xe
*/
VehicleOnlineManager.prototype.vehicleGroupChange = function () {
    // Gọi lại hàm read
    var gid = $("#Online_VehicleGroup").val();
    var vehicleData = common.ExcuteAjax_ReturnData("/Common/AutoCompletePrivateCodeByGroups", { groupIds: gid });

    $('#Online_Vehicles').text('');
    // Set lại dữ liệu cho combobox
    var cboLstVehicle = common.GetKendoComboBox("Online_Vehicles");
    cboLstVehicle.dataSource.data(vehicleData);
    cboLstVehicle.value(null);
    // Xử lý lọc xe ở đây
    this.filterProcess();
};

/* 
* $Author$		hanhth
* Tìm theo trạng thái xe
*/
VehicleOnlineManager.prototype.vehicleStatusChange = function () {
    // Xử lý lọc xe ở đây
    this.filterProcess();
};

/* 
* $Author$		trungtq
* Lấy trạng thái ẩn hiện theo nhóm xe
*/
VehicleOnlineManager.prototype.getVisbleByGroupID = function (groupID, defaultGroupIndex, vehicle) {
    var ret = false;
    try {
        var that = this;
        if (groupID == 0 || groupID == "" || (groupID != 0 && defaultGroupIndex == 0)) {
            ret = true;
        }
        else {
            // Lấy mảng giá trị nhóm là con của nhóm cần lấy
            var groups = groupID;
            if (groups != null && groups.length > 0) {
                var childGroups = groups.split(",");

                // http://stackoverflow.com/questions/1883663/should-i-use-jquery-inarray 
                if (childGroups != null && childGroups.length > 0) {
                    if (childGroups.lastIndexOf(vehicle.VehicleGroupID.toString()) > -1) {
                        ret = true;
                    }
                }
            }
        }
    }
    catch (err) {
        console.log("Error: VehicleOnlineManager.prototype.getVisbleByGroupID():" + err);
    }

    return ret;
};

/* 
* $Author$		trungtq
* Lấy trạng thái ẩn hiện theo loại xe
*/
VehicleOnlineManager.prototype.getVisbleByVehicleTypeID = function (vehicleTypeID, vehicle) {
    var ret = false;
    try {
        var that = this;
        if (vehicleTypeID == -1 || vehicleTypeID == "") {
            ret = true;
        }

        // Nếu ID loại xe trùng với ID của xe // 
        if (vehicleTypeID == vehicle.VehicleTypeID) {
            return true;
        }
        // Tìm theo số chỗ
        if (vehicleTypeID.indexOf("_") >= 0) {
            if (vehicle.Seat == vehicleTypeID.split('_')[0])
                return true;
        }
    }
    catch (err) {
        console.log("Error: VehicleOnlineManager.prototype.getVisbleByVehicleTypeID():" + err);
    }

    return ret;
};

/* 
* $Author$		trungtq
* Tìm theo loại xe
*/
VehicleOnlineManager.prototype.vehicleTypeChange = function () {
    // Xử lý lọc xe ở đây
    this.filterProcess();
};

/* 
* $Author$		trungtq
* Lấy trạng thái ẩn hiện theo trạng thái xe
*/
VehicleOnlineManager.prototype.getVisibleByStateID = function (selectedStateID, vehicle) {
    try {
        var stateID = parseInt(selectedStateID);

        // Trường hợp chọn tất cả
        if (stateID == 0 || stateID == -1) return true;

        //linhnx - Dang bi conflict prototype => Dung try catch nhu if else de xu ly cho ca 2 TH nay
        try {
            var vehicleTime = new Date(parseInt(vehicle.VehicleTime.substr(6)));
        } catch (e) {
            vehicleTime = vehicle.VehicleTime;
        }

        try {
            var gpsTime = new Date(parseInt(vehicle.GpsTime.substr(6)));
        } catch (e) {
            gpsTime = vehicle.GpsTime;
        }

        // Lấy ra số phút mất tín hiệu
        var minuteOfLostConnect = Math.abs(DateDiff.inMinutes(this.getServerTime(), vehicleTime));

        // Lấy ra số phút mất GPS (VehicleTime - GPSTime)
        var minuteOfLostGPS = Math.abs(DateDiff.inMinutes(vehicleTime, gpsTime));

        switch (stateID) {
            case 3:// Nếu xe mất tín hiệu (Mất GSM hoặc mất GPS > 150 phút)
                return ((minuteOfLostConnect >= this.configLostGSM) || (minuteOfLostGPS >= this.configMinuteLostGPS));
            case 8: // Xe hoạt động (Xe không bị mất tín hiệu) 
                // trungtq: Nếu sử dụng chức năng lái xe báo nghỉ => lọc các xe báo nghỉ khỏi danh sách xe hoạt động
                if (this.enableVehicleInactivity)
                    return (minuteOfLostConnect < this.configLostGSM) && (minuteOfLostGPS < this.configMinuteLostGPS) && (vehicle.OtherState != -1);
                else
                    return (minuteOfLostConnect < this.configLostGSM) && (minuteOfLostGPS < this.configMinuteLostGPS);
            case 9:// Xe báo nghỉ
                return vehicle.OtherState == -1;
            case 10:// Xe khóa đồng hồ
                return vehicle.IsLockMeter;
            case 11:// Xe mất kết nối đồng hồ
                return (vehicle.VehicleState & 2048) > 0;
            default:
                // Xe không mất tín hiệu (Không bị mất GSM và không bị mất GPS > 150 phút)
                if ((minuteOfLostConnect < this.configLostGSM) && (minuteOfLostGPS < this.configMinuteLostGPS)) {
                    switch (stateID) {
                        case 1:// Không khách: trạng thái & 3 = 0
                            return (vehicle.VehicleState & 3) == 0;
                        case 2:// (Có khách: trạng thái & 3 > 0)
                            return (vehicle.VehicleState & 3) > 0;
                        case 4: // Di chuyển: phải là máy luôn bật (trạng thái xe & 8 = 0), v gps > 3
                            return ((vehicle.VehicleState & 8) == 0) && (vehicle.VelocityGPS > this.velocityBoundaryMoveStop);
                        case 5: // Dừng đỗ : phải là máy bật hoặc tắt, vgps < = 3
                            return vehicle.VelocityGPS <= this.velocityBoundaryMoveStop;
                        case 6: //Tắt máy: trạng thái & 8 > 0
                            return (vehicle.VehicleState & 8) > 0;
                        case 7: //Nổ máy: trạng thái & 8 = 0
                            return (vehicle.VehicleState & 8) == 0;
                    }
                }
                else {
                    return false; // Mất tín hiệu
                }
        }
    }
    catch (err) {
        console.log("Error: VehicleOnlineManager.prototype.checkShowHideStatus(): " + err);
        return true;
    }
};

/* 
* $Author$		sonnl 
* Đếm số lượng xe của mỗi trạng thái
*/
VehicleOnlineManager.prototype.countByState = function (vehicle) {
    var that = this;

    try {
        //linhnx - Dang bi conflict prototype => Dung try catch nhu if else de xu ly cho ca 2 TH nay
        try {
            var vehicleTime = new Date(parseInt(vehicle.VehicleTime.substr(6)));
        } catch (e) {
            vehicleTime = vehicle.VehicleTime;
        }

        try {
            var gpsTime = new Date(parseInt(vehicle.GpsTime.substr(6)));
        } catch (e) {
            gpsTime = vehicle.GpsTime;
        }

        // Lấy ra số phút mất tín hiệu
        var minuteOfLostConnect = Math.abs(DateDiff.inMinutes(that.getServerTime(), vehicleTime));

        // Lấy ra số phút mất GPS (VehicleTime - GPSTime)
        var minuteOfLostGPS = Math.abs(DateDiff.inMinutes(vehicleTime, gpsTime));

        if ((minuteOfLostConnect >= that.configLostGSM) || (minuteOfLostGPS >= that.configMinuteLostGPS)) {
            that.tblCountByState[2] = that.tblCountByState[2] + 1;
        }

        if ((minuteOfLostConnect < that.configLostGSM) && (minuteOfLostGPS < that.configMinuteLostGPS))
        {
            if (!that.enableVehicleInactivity) {
                that.tblCountByState[7] = that.tblCountByState[7] + 1;
            }
            else if (vehicle.OtherState != -1)
                that.tblCountByState[7] = that.tblCountByState[7] + 1;
        }

        if (vehicle.OtherState == -1) that.tblCountByState[8] = that.tblCountByState[8] + 1;
        if (vehicle.IsLockMeter) that.tblCountByState[9] = that.tblCountByState[9] + 1;
        if ((vehicle.VehicleState & 2048) > 0) that.tblCountByState[10] = that.tblCountByState[10] + 1;

        // Xe không mất tín hiệu (Không bị mất GSM và không bị mất GPS > 150 phút)
        if ((minuteOfLostConnect < that.configLostGSM) && (minuteOfLostGPS < that.configMinuteLostGPS)) {
            if ((vehicle.VehicleState & 3) == 0) that.tblCountByState[0] = that.tblCountByState[0] + 1;
            else that.tblCountByState[1] = that.tblCountByState[1] + 1;
            if (((vehicle.VehicleState & 8) == 0) && (vehicle.VelocityGPS > that.velocityBoundaryMoveStop)) that.tblCountByState[3] = that.tblCountByState[3] + 1;
            if (vehicle.VelocityGPS <= that.velocityBoundaryMoveStop) that.tblCountByState[4] = that.tblCountByState[4] + 1;
            if ((vehicle.VehicleState & 8) > 0) that.tblCountByState[5] = that.tblCountByState[5] + 1;
            else that.tblCountByState[6] = that.tblCountByState[6] + 1;
        }
    }
    catch (err) {
        console.log("Error: VehicleOnlineManager.prototype.countByState(): " + err);
    }
};

/* 
* $Author$		trungtq
* Lọc lại theo điều kiện tìm kiếm
*/
VehicleOnlineManager.prototype.filterProcess = function () {

    var that = this;
    that.listCurrentDisplay.clear();
    var stateID = parseInt($("#Online_VehicleStatus").data("kendoDropDownList").value());
    var groupID = $("#Online_VehicleGroup").data("kendoDropDownList").value();
    var vehicleTypeID = -1;

    // Nếu cho phép tìm kiếm theo loại xe
    if (that.enableOnlineFindVehicleType) {
        vehicleTypeID = $("#Online_VehicleType").data("kendoDropDownList").value().indexOf("_") >= 0 ? $("#Online_VehicleType").data("kendoDropDownList").value() : parseInt($("#Online_VehicleType").data("kendoDropDownList").value());
    }
    var count = 0;

    // Duyệt qua từ điển
    that.dicMarkers.each(function (key, value) {
        var isShow = true;
        var obj = value.vehicle;
        // Nếu chọn lại  -> Khởi tạo lại giá trị từ đầu
        if (groupID == 0 && stateID == 0 && vehicleTypeID == -1) {
            setTimeout(function () {
                // Hiện tất cả các dòng
                that.setVisibleRow(key, true);
            }, 1);

            count = that.dicMarkers.size();

            // Chỉ hiện các marker có LevelID <> 3 và LevelID <> 128
            if (value.isShowMarker == true) {
                that.listCurrentDisplay.put(obj.PrivateCode, obj.VehicleID);
                if (!that.IsUseClusterOnlineFinal) {
                    // Set lại position cho marker
                    value.marker.update();
                    // Hiện tất cả các marker
                    value.marker.show();
                }
                // LinhNX show marker in cluster
                else {
                    let markerShow = that.dicMarkerHS.get(value.vehicle.VehicleID);
                    if (markerShow != null) {
                        setTimeout(function () {
                            that.heatMapMobile.markerCluster.addMarker(markerShow);
                        }, 1);
                        that.dicMarkerHS.remove(value.vehicle.VehicleID);
                    }
                }
            }
        }
        // Nếu xe không bị khóa
        else if (!value.vehicle.IsLocked) {
            // Longtq thêm để không phải lọc khi nhóm đội không thay đổi (với user thường nhóm này cực nhiều nhóm con > gây chậm hệ thống)
            var defaultGroup = common.GetKendoDropDown('Online_VehicleGroup').selectedIndex;

            // Thỏa mãn theo nhóm không?
            var isShowGroup = that.getVisbleByGroupID(groupID, defaultGroup, obj);

            // Thỏa mãn theo trạng thái không?
            var isShowState = that.getVisibleByStateID(stateID, obj);

            // Thỏa mãn theo loại xe
            var isShowVehicleType = that.getVisbleByVehicleTypeID(vehicleTypeID, obj);

            // Thỏa mãn cả 2 điều kiện tìm kiếm => hiện dòng dữ liệu trên lưới
            if ((isShowGroup && isShowState && isShowVehicleType)) {
                // Hiện dòng
                setTimeout(function () {
                    that.setVisibleRow(key, true);
                }, 1);

                that.listCurrentDisplay.put(obj.PrivateCode, obj.VehicleID);
                // Tăng biến đếm
                count++;

                // Chỉ hiện các marker có LevelID <> 3 và LevelID <> 128
                if (value.isShowMarker) {
                    if (!that.IsUseClusterOnlineFinal) {
                        // Set lại position cho marker
                        value.marker.update();

                        // Hiện tất cả các marker
                        value.marker.show();
                    }
                    // LinhNX show marker in cluster
                    else {
                        // show ban chat la add
                        let markerShow = that.dicMarkerHS.get(value.vehicle.VehicleID);
                        if (markerShow != null) {
                            setTimeout(function () {
                                that.heatMapMobile.markerCluster.addMarker(markerShow);
                            }, 1);
                            that.dicMarkerHS.remove(value.vehicle.VehicleID);
                        }
                    }
                }
            } else {
                setTimeout(function () {
                    // Ẩn dòng khi điều kiện không thỏa mãn
                    that.setVisibleRow(key, false);
                }, 1);
                if (!that.IsUseClusterOnlineFinal) {
                    // Chỉ hiện các marker có LevelID <> 3 và LevelID <> 128
                    if (value.isShowMarker) {
                        // Ẩn marker khỏi bản đồ.
                        value.marker.hide();
                    }
                }
                // LinhNX hide marker in cluster
                else {
                    let markerHide = that.heatMapMobile.markerCluster.listClusterMarkers.find(x => x.id == value.vehicle.VehicleID);

                    //hide thuc chat la remove di
                    //va add vao list marker dc delete 
                    if (markerHide != null) {
                        // neu dang dc panto thy clear no di va dong form info
                        if (value.vehicle.VehicleID == that.keyPanTo)
                            that.closePopup();
                        that.heatMapMobile.markerCluster.removeMarker(markerHide);
                        that.dicMarkerHS.put(value.vehicle.VehicleID, markerHide);
                    }
                }
            }
        }

    });

    // Cập nhật tổng số xe thỏa mãn điều kiện tìm kiếm
    $("#spCurrent").html(count);

};

/* 
* $Author$		hanhth
* Huy che do panto
*/
VehicleOnlineManager.prototype.clearPanto = function () {
    this.mapManager.keyPanTo = 0;
};

/* 
* $Author$		hanhth
* Dong popup + clear panto
*/
VehicleOnlineManager.prototype.closePopup = function () {
    this.clearPanto();
    $("#CurrentStatus").hide();
};

/* 
* $Author$		hanhth
* Hien thi popup cho phep cau hinh hien thi chi tiet xe
*/
VehicleOnlineManager.prototype.showConfigVehicleDetail = function () {
    var that = this;

    // Khai báo đối tượng popup
    var popup = $("<div id=\"windowDetailInfo\"></div>");
    $("body").append(popup);

    // Đăng ký sự kiện mở window
    that.windowDetailInfo = $("#windowDetailInfo").kendoWindow({
        title: LanguageManager.getText("Online_VehicleDisplayConfiguration"),
        draggable: true,
        visible: false,
        resizable: false,
        width: "500px"
    }).data("kendoWindow");

    // Mở khung đo khoảng cách
    that.windowDetailInfo.refresh({
        url: "/Online/LoadVehicleDetailInfo"
    });

    that.windowDetailInfo.center().open();
};

/* 
* $Author$		hanhth
* Hien thi popup chi tiet xe
*/
VehicleOnlineManager.prototype.showPopupVehicleDetail = function (vehicleID) {
    this.mapManager.showPopupVehicleDetail(this.mapManager.get(parseInt(vehicleID)).obj);
};

/* 
* $Author$		hanhth
* Khi user click refress trang
*/
VehicleOnlineManager.prototype.refreshMap = function () {
    var that = this;
    if (!isProcessRefress) {
        isProcessRefress = true;
        this.inits.refresh();
        setTimeout(function () {
            isProcessRefress = false;
        }, 5000);
    }
    else
        window.common.DisplayNotification(LanguageManager.getText("Online_MessageNotify"), window.common.notification_type_error);
};

/* 
* $Author$		hanhth
* Lay trang thai cua xe
*/
VehicleOnlineManager.prototype.parseVehicleStatus = function (status) {
    return this.mapManager.getVehicleStatus(status);
};

/* 
* $Author$		hanhth
* Lay icon xe cho grid ko can huong
*/
VehicleOnlineManager.prototype.parseVehicleIcon = function (vehicle) {
    return this.mapManager.setIconWithNoDir(vehicle);
};

/* 
* $Author$		hanhth
* Lay icon xe cho grid ko can huong
*/
VehicleOnlineManager.prototype.showHelpDialog = function () {
    $("#helpWindow").data("kendoWindow").center().open();
};

/* 
* $Author$		hanhth
* ẩn help
*/
VehicleOnlineManager.prototype.closeHelpDialog = function () {
    $("#HelpDialog").hide();
};

/* 
* $Author$		hanhth
* Thông báo thành công
*/
VehicleOnlineManager.prototype.saveConfigMessageSuccess = function (data) {
    if (data.indexOf("MvcDynamicFieldError") > -1) return;

    common.DisplayNotification(LanguageManager.getText('Common_SaveSuccess'), common.notification_type_success);
    $("#windowDetailInfo").data("kendoWindow").close();
}

/* 
* $Author$		hanhth
* Thông báo lưu lỗi
*/
VehicleOnlineManager.prototype.saveConfigMessageError = function () {
    common.DisplayNotification(LanguageManager.getText('Common_ErrorOccurred'), common.notification_type_error);
}

/* 
* $Author$		hanhth
* Load treeview 
*/
VehicleOnlineManager.prototype.LoadTreeView = function () {
    var that = this;
    var data = this.getDataTreeView(true);
    var treeView = $("#tvLMPoint").kendoTreeView({
        animation: {
            expand: true
        },
        dataSource: eval(data),
        select: that.onNodeChange,
        loadOnDemand: false
    }).data("kendoTreeView");
    // Expand all node
    treeView.expand('.k-item');
}

/* 
* $Author$		hanhth
* Load data treeview 
*/
VehicleOnlineManager.prototype.getDataTreeView = function (isPolygon) {
    var returns = null;
    $.ajax({
        type: 'POST',
        url: "/Online/GetDataTreeView",
        data: { isPolygon: isPolygon },
        dataType: 'json',
        async: false,
        success: function (data) {
            returns = data.treeView;
        },
        error: function (error) {
            console.log("VehicleOnlineManager.prototype.getDataTreeView: " + error);
        }
    });
    return returns;
};

/* 
* $Author$		hanhth
* Onchange treeview save db
*/
VehicleOnlineManager.prototype.onNodeChange = function (e) {

}

//Sonnl 18-11-2017 
//Tính năng chỉ có trên google , leaflet có nhưng gọi qua google hoặc service giới hạn request khác nên fix chỉ support google
VehicleOnlineManager.prototype.setAutoComplete = function () {
    var self = this;
    if (window.google != null) {
        if (self.autocomplete != undefined) {
            window.google.maps.event.clearListeners(self.autocomplete, 'place_changed');
        }
        if (this.map != undefined) {
            self.autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('txtAddressSearch'));
            self.autocomplete.bindTo('bounds', this.map);
            self.suggestGoogleMap();
        }
    } else {
        var center = self.map.getCenter();
        var win;
        if (center.lon != null) {
            win = window.open("https://www.google.com/maps/@" + center.lat + "," + center.lon + "," + self.map.getZoom() + "z", '_blank');

        } else {
            win = window.open("https://www.google.com/maps/@" + center.lat + "," + center.lng + "," + self.map.getZoom() + "z", '_blank');
        }
        win.focus();
        //window.common.DisplayNotification(LanguageManager.getText("MAP_MODULE_BUILDING"), window.common.notification_type_error);
    }
};

VehicleOnlineManager.prototype.suggestGoogleMap = function () {
    var self = this;
    window.google.maps.event.addListener(self.autocomplete, 'place_changed', function () {
        var place = self.autocomplete.getPlace();

        self.map.setCenter(place.geometry.location);
        var currentLatLng = new mxn.LatLonPoint(place.geometry.location.lat(), place.geometry.location.lng());
        var options = {
            mapStraction: self.mapStraction,
            latLng: currentLatLng
        };
        return new ShowAddress(options).openInfowindow();
    });
};

VehicleOnlineManager.prototype.searchVehicleByVehiclePlate = function (vehiclePlate) {
    var vehicleID = 0;
    try {
        var searchs = [];
        if (vehiclePlate && vehiclePlate.indexOf('-') > -1) {
            searchs = vehiclePlate.split('-');
        }

        $.when(this.dicMarkers.each(function (e, t) {
            if (searchs.length > 0) {
                for (i = 0; i < searchs.length; i++) {
                    if (t.vehicle.VehiclePlate == $.trim(searchs[i].toString()) || t.vehicle.PrivateCode == $.trim(searchs[i].toString())) {
                        vehicleID = e;
                        return;
                    }
                }
            }
            else {
                if (t.vehicle.PrivateCode == vehiclePlate.toString() || t.vehicle.VehiclePlate == vehiclePlate.toString()) {
                    vehicleID = e;
                    return;
                }
            }
        })).done(function (arg) {
        });
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.searchVehicleByVehiclePlate" + err);
    }
    return vehicleID;
};

VehicleOnlineManager.prototype.DisplayErrorMessage = function (ctl, msg) {
    $(".submit-progress").removeClass("hidden");
    $("body").addClass("submit-progress-bg");
    return true;
};

VehicleOnlineManager.prototype.reloadSearchConfig = function () {
    this.currentState = parseInt($("#Online_VehicleStatus").data("kendoDropDownList").value());
    this.currentGroupID = $("#Online_VehicleGroup").data("kendoDropDownList").value();
    this.currentDefaultGroupID = common.GetKendoDropDown('Online_VehicleGroup').selectedIndex;
    this.currentEnableRefreshRightPanel = this.enableRefreshRightPanel();
    if ($("#Online_VehicleType").data("kendoDropDownList"))
        this.currrentVehicleTypeID = parseInt($("#Online_VehicleType").data("kendoDropDownList").value());
};
var VehicleAntPathManager = function (obj) {

    this.prevTimeRefresh = obj.prevTimeRefresh;
    this.currTimeRefresh = obj.currTimeRefresh;
    this.inteTimeRefresh = obj.currTimeRefresh - obj.prevTimeRefresh;
    this.currStep = 0;
    this.stepConfig = obj.stepConfig;
    this.arrPoints = obj.arrPoints;

    this.marker = obj.marker;
    this.vehicle = obj.vehicle;
    this.iconUrl = obj.iconUrl;

    VehicleAntPathManager.prototype.init = function () {
        var that = this;
        var inte = Math.floor(that.inteTimeRefresh / (that.stepConfig));
        $(document).everyTime(inte, "exxAntPath" + that.vehicle.PrivateCode, function () { that.proccessAntPath(); });
    }

    VehicleAntPathManager.prototype.proccessAntPath = function () {
        var that = this;
        if (that.currStep == that.stepConfig) {
            that.currStep = 0;
            that.arrPoints.length = 0;
            //console.log("exxAntPath" + that.vehicle.PrivateCode);
            $(document).stopTime("exxAntPath" + that.vehicle.PrivateCode);
            return;
        }
        //console.log(that.currStep);
        if (that.currStep == 0) {
            console.log("!!");
        }
        var point = that.arrPoints[that.currStep];

        that.marker.location = new mxn.LatLonPoint(point.lat, point.lng);

        // Set lại position cho marker
        that.marker.update();
        //console.log("Plate: " + that.vehicle.PrivateCode + "Pre: "+ that.prevTimeRefresh+ " Curr: " + that.currTimeRefresh+ " Inte: " + that.inteTimeRefresh);
        that.currStep++;

    };

};
/// <version>2013.04.14</version>
/// <summary>Works with the Kendo UI 2013 Q1 and jQuery 1.9.1</summary>

(function (kendo, $) {
    kendo.arrays = {

        find: function (array, criteria) {
            /// <signature>
            ///   <summary>Find a JSON Object in an array.</summary>
            ///   <param name="array" type="Array">Array of JSON objects.</param>
            ///   <param name="criteria" type="Object">
            ///     Criteria to find the JSON Object.
            ///     - attr: the name of the JSON attribute to search on.
            ///     - value: the value of to find.
            ///   </param>
            ///   <returns type="JSON Object or null if not found" />
            /// </signature>

            var result = null;
            $.each(array, function (idx, item) {
                if (item[criteria.attr] != undefined) {
                    if (item[criteria.attr].toString() == criteria.value) {
                        result = item;
                        return false;
                    }
                }
            });
            return result;
        },

        findAll: function (array, criteria) {
            /// <signature>
            ///   <summary>Find a JSON Object in an array.</summary>
            ///   <param name="array" type="Array">Array of JSON objects.</param>
            ///   <param name="criteria" type="Object">
            ///     Criteria to find the JSON Objects.
            ///     - attr: the name of the JSON attribute to search on.
            ///     - value: the value of to find.
            ///   </param>
            ///   <returns type="JSON Objects or null if not found" />
            /// </signature>

            var results = [];
            $.each(array, function (idx, item) {
                if (item[criteria.attr] != undefined) {
                    if (item[criteria.attr].toString() == criteria.value) {
                        results.push(item);
                    }
                }
            });
            return results.length == 0 ? null : results;
        }
    };


    /*
     *
     * ExtBorderLayout
     *
     */

    var ExtLayoutTitleBar = function (splitter, pane, options) {
        /// <signature>
        ///   <summary>
        ///   Create a "titlebar" to be used specifically with a pane within the ExtLayoutSplitter.
        ///   </summary>
        /// </signature>

        this._splitter = splitter;
        this._pane = pane;
        this._options = options;
        this._options.title = this._options.title || "";
        this._options.expandedSize = options.size;
        this._template = kendo.template('<div class="k-window-titlebar k-header k-ext-layout-header"><span class="k-window-title k-ext-layout-title">#= title #</span> #if (arrowsCss.length > 0) { # <div class="k-window-actions"><a href="\\#" class="k-window-action k-link k-ext-toggle k-ext-expanded"><span class="k-icon #= arrowsCss #">Collapse</span></a></div></div> # } #');
        this._callback = null;
        this.element = null;

        this._vertTitle = "";
        this.vertTitleName();
    };
    ExtLayoutTitleBar.prototype = {
        init: function () {
            /// <signature>
            ///   <summary>
            ///   Initialize and display a title for a splitter pane.
            ///   </summary>
            /// </signature>

            var that = this;
            var $pane = $(that._pane);

            // Based on the region, determine the initial image to display for
            // the toggle button.
            that._options.arrowsCss = that._options.collapsible
                ? that._options.region == "north"
                    ? "k-ext-arrows-up"
                    : that._options.region == "south"
                        ? "k-ext-arrows-down"
                        : that._options.region == "east"
                            ? "k-ext-arrows-right"
                            : "k-ext-arrows-left"
                : "";
            if (that._options.collapsed) {
                that._options.arrowsCss = that._options.arrowsCss == "k-ext-arrows-up"
                    ? "k-ext-arrows-down"
                    : that._options.arrowsCss == "k-ext-arrows-down"
                        ? "k-ext-arrows-up"
                        : that._options.arrowsCss == "k-ext-arrows-right"
                            ? "k-ext-arrows-left"
                            : that._options.arrowsCss == "k-ext-arrows-left"
                                ? "k-ext-arrows-right"
                                : "";
            }

            // Add the title bar to the pane.
            $pane.prepend(that._template(that._options));

            that.element = $pane.children("div.k-window-titlebar");

            // When the user clicks on the "toggle" button, expand / collapse
            // the pane.
            that.element.find(".k-ext-toggle").on("click", function () {
                var $toggle = $(this);
                var action = $toggle.hasClass("k-ext-expanded")
                    ? "collapse"
                    : "expand";
                that._splitter.toggle(that._pane, action == "expand");

                that.toggle(action, $toggle);
            });
        },

        toggle: function (action, $toggle) {
            /// <signature>
            ///   <summary>
            ///   Change the display of the titlebar.
            ///   </summary>
            /// </signature>

            var that = this;
            var $pane = $(that._pane);

            if (!$toggle) {
                $toggle = that.element.find(".k-ext-toggle");
            }

            that._options.collapsed = action == "collapse";

            that.update();

            var $icon = $toggle.children(".k-icon");

            if (that._splitter.orientation == "horizontal") {
                if ($icon.hasClass("k-ext-arrows-left")) {
                    $icon.removeClass("k-ext-arrows-left").addClass("k-ext-arrows-right");
                } else {
                    $icon.removeClass("k-ext-arrows-right").addClass("k-ext-arrows-left");
                }
            } else {
                if ($icon.hasClass("k-ext-arrows-up")) {
                    $icon.removeClass("k-ext-arrows-up").addClass("k-ext-arrows-down");
                } else {
                    $icon.removeClass("k-ext-arrows-down").addClass("k-ext-arrows-up");
                }
            }
        },

        vertTitleName: function (title) {
            title = title || this._options.title;

            for (var idx = 0; idx < this._options.title.length; idx++) {
                this._vertTitle += this._options.title[idx] + "<br/>";
            }
        },

        update: function () {
            var that = this;

            var $pane = $(that._pane);
            var $titlebar = that.element;
            var $toggle = $titlebar.find(".k-ext-toggle");

            var $splitbar;
            var $otherPane;
            var position;

            if ($pane.next().hasClass("k-splitbar")) {
                $splitbar = $pane.next();
                $otherPane = $splitbar.next();
            } else {
                $splitbar = $pane.prev();
                $otherPane = $splitbar.prev();
            }

            if (that._options.collapsed) {
                // Resize the pane so that it is 25px wide/high.
                if (that._splitter.orientation == "horizontal") {
                    if ($pane.width() < 32) {
                        $pane.css("width", "32px");
                        if (that._options.region == "west") {
                            $splitbar.css("left", "32px");
                            $otherPane.css("left", "39px").width($otherPane.width() - 39);
                        } else {
                            $pane.css("left", parseInt($pane.css("left")) - 34);
                            $splitbar.css("left", parseInt($splitbar.css("left")) - 34);
                            $otherPane.css("right", "39px").width($otherPane.width() - 39);
                        }
                        // Hide the horizontal title.
                        $titlebar.children("span.k-ext-layout-title").css("display", "none");

                        // Resize the titlebar to extend the entire height of the pane.
                        $titlebar.css("height", $splitbar.height());

                        // If the vertical title is not displayed, then display it.
                        if ($titlebar.find("div.k-ext-vertical-layout-title").length == 0) {
                            $titlebar.append(kendo.format("<div style='position: absolute; top: 40px;' class='k-window-title k-ext-layout-title k-ext-vertical-layout-title'>{0}</div>", that._vertTitle));
                        }
                    }
                } else {
                    if ($pane.height() < 32) {
                        $pane.css("height", "32px");
                        if (that._options.region == "north") {
                            $splitbar.css("top", "32px");
                            $otherPane.css("top", "39px").height($otherPane.height() - 32);
                        } else {
                            $pane.css("top", parseInt($pane.css("top")) - 34);
                            $splitbar.css("top", parseInt($splitbar.css("top")) - 34);
                            $otherPane.css("bottom", "39px").height($otherPane.height() - 32);
                        }
                    }
                }
                $toggle.removeClass("k-ext-expanded").addClass("k-ext-collapsed");
            } else {
                // Show the horizontal titlebar, and if this is a horizontal splitter, then
                // hide the verticle title.
                $titlebar.height(18);
                $toggle.removeClass("k-ext-collapsed").addClass("k-ext-expanded");
                $toggle.closest(".k-window-titlebar").children(".k-window-title").css("display", "");
                $titlebar.find(".k-ext-vertical-layout-title").remove();
            }
        }
    };

    var ExtLayoutSplitter = kendo.ui.Splitter.extend({
        /// <signature>
        ///   <summary>
        ///   Create a splitter to be used specifically with the ExtBorderLayout.
        ///   </summary>
        /// </signature>

        _height: null,

        init: function (element, options) {
            /// <signature>
            ///   <summary>
            ///   Initialize the splitter.
            ///   </summary>
            /// </signature>

            var that = this;

            kendo.ui.Splitter.fn.init.call(that, element, options);

            that.element.data("kendoSplitter", that);
            $.each(that._panes(), function (idx, pane) {
                var paneOptions = $(pane).data("pane");

                if (paneOptions.collapsible || paneOptions.showTitlebar) {
                    var extLayoutTitleBar = new ExtLayoutTitleBar(that, pane, paneOptions);
                    extLayoutTitleBar.init();
                    $(pane).data("titlebar", extLayoutTitleBar);
                }
            });

            // setTimeout(function () { that.resize(); }, 100);

            setInterval(function () { that.updateCollapsedPanes(); }, 50);
        },

        _triggerAction: function () {
            /// <signature>
            ///   <summary>
            ///   Override the default behavior when the user clicks on the expand / collapse
            ///   icon in the splitterbar and call the ExtLayoutTitle.toggle function.
            ///   </summary>
            /// </signature>

            this.toggle(arguments[1], arguments[0] == "expand");
            arguments[1].data("titlebar").toggle(arguments[0]);
        },

        updateCollapsedPanes: function (e) {
            /// <signature>
            ///   <summary>
            ///   Loop through all the panes.  If the pane has a titlebar and is collapsed, then resize 
            //    the pane to 25px to display the titlebar.
            ///   </summary>
            /// </signature>

            var that = this;

            var panes = that._panes();

            $.each(panes, function (idx, pane) {
                var title = $(pane).data("titlebar");
                if (title && (e == undefined || title.element[0] != e.target)) {
                    if (title._options.collapsed) {
                        title.update();
                    }
                }
            });
        },

        resize: function () {
            /// <signature>
            ///   <summary>
            ///   Resize the splitter to fit within the parent.
            ///   </summary>
            /// </signature>

            var that = this;
            var $parent = that.element.parent();
            var height = $parent.height();

            if (that._height != height) {
                that._height = height;

                // Get any margins or padding applied to the body and the border for the splitter.
                var mt = parseInt($parent.css("margin-top"));
                var mb = parseInt($parent.css("margin-bottom"))
                var pt = parseInt($parent.css("padding-top"))
                var pb = parseInt($parent.css("padding-bottom"))
                var btw = parseInt(that.element.css("border-top-width"))
                var bbw = parseInt(that.element.css("border-bottom-width"));
                var offset = (isNaN(mt) ? 0 : mt) + (isNaN(mb) ? 0 : mb) + (isNaN(pt) ? 0 : pt) +
                    (isNaN(pb) ? 0 : pb) + (isNaN(btw) ? 0 : btw) + (isNaN(bbw) ? 0 : bbw);
                that.element.height(that._height - offset).resize();

                if (that.options.orientation == "vertical") {
                    var panes = that.element.children("div.k-pane, div.k-splitbar");
                    $.each(panes, function (idx, pane) {
                        $(pane).css("width", "100%");
                    });
                }
            }
        },

        options: {
            name: "ExtLayoutSplitter"
        }
    });
    kendo.ui.plugin(ExtLayoutSplitter);

    var ExtBorderLayout = kendo.ui.Widget.extend({
        /// <signature>
        ///   <summary>
        ///   Create a border layout.
        ///   </summary>
        /// </signature>

        _outerSplitter: null,
        _innerSplitter: null,

        init: function (element, options) {
            /// <signature>
            ///   <summary>
            ///   Initialize the border layout using splitters.
            ///   </summary>
            /// </signature>

            var that = this;

            kendo.ui.Widget.fn.init.call(that, element, options);

            var horizontalPanes = [];
            var verticalPanes = [];

            // No regions, no layout.
            if (!options.items) {
                throw "The items array must be defined";
            }

            // Get the regions passed in.
            var north = kendo.arrays.find(options.items, { attr: "region", value: "north" });
            var south = kendo.arrays.find(options.items, { attr: "region", value: "south" });
            var east = kendo.arrays.find(options.items, { attr: "region", value: "east" });
            var west = kendo.arrays.find(options.items, { attr: "region", value: "west" });
            var center = kendo.arrays.find(options.items, { attr: "region", value: "center" });

            /* Validate the regions. */

            if (center == null) {
                throw "A center item must be defined";
            }

            if (north == null && south == null && east == null && west == null) {
                throw "A region of north, south, east or west must be defined";
            }

            var $layout = $(element);

            /* Move the regions into the correct position and add them to the appropriate arrays. */

            // If there are north or south regions defined, then add them to the vertical array.
            if (north != null || south != null) {
                if (north != null) verticalPanes.push(north);

                // If east and west are not defined then add the center region to the vertical array.
                if (east == null && west == null) {
                    verticalPanes.push(center);
                    // If east and west are not defined, then create a center region for the "inner" splitter.
                } else {
                    var innerSplitterId = kendo.format("{0}_innerSplitterContents", element.id);
                    $layout.append($(kendo.format("<div id='{0}'/>", innerSplitterId)).attr("class", "k-ext-inner-splitter-contents"));
                    verticalPanes.push({
                        content: kendo.format("#{0}", innerSplitterId)
                    });
                }

                if (south != null) verticalPanes.push(south);
            }

            // If there are east or west regions defined, then add them to the horizontal array and add the center
            // region to the horizontal array.
            if (west != null) horizontalPanes.push(west);
            if (east != null || west != null) horizontalPanes.push(center);
            if (east != null) horizontalPanes.push(east);

            // Create a div for the outer splitter.
            var $outerDiv = $(kendo.format("<div id='{0}_outerSplitter'/>", element.id));
            $layout.append($outerDiv);

            // If there are east or west regions...
            if (verticalPanes.length > 0) {
                // Add the north and south regions to the outer splitter.
                $.each(verticalPanes, function (idx, pane) {
                    $outerDiv.append($(pane.content));
                });
                // Get the div that was created for the innter splitter and add the
                // east, center and west regions.
                var $innerDiv = $(kendo.format("#{0}_innerSplitterContents", element.id));
                $.each(horizontalPanes, function (idx, pane) {
                    $innerDiv.append($(pane.content));
                });

                // Initialize the outer splitter.
                that._outerSplitter = $outerDiv.kendoExtLayoutSplitter({ orientation: "vertical", panes: verticalPanes }).data("kendoExtLayoutSplitter");

                // Initialize the inner splitter.
                that._innerSplitter = $innerDiv.kendoExtLayoutSplitter({ panes: horizontalPanes }).data("kendoExtLayoutSplitter");
                // There are no east and west regions.
            } else {
                // Add the north, center and south regions to the outer splitter.
                $.each(horizontalPanes, function (idx, pane) {
                    $outerDiv.append($(pane.content));
                });

                // Initialize the outer splitter.
                that._outerSplitter = $outerDiv.kendoExtLayoutSplitter({ panes: horizontalPanes }).data("kendoExtLayoutSplitter");
            }

            if (that._outerSplitter != null) {
                setTimeout(function () { that.resize(); }, 100);
            }
        },

        resize: function () {
            /// <signature>
            ///   <summary>
            ///   Resize the border layout to fit within the parent.
            ///   </summary>
            /// </signature>

            var that = this;
            var $parent = that.element.parent();
            var height = parseInt(that.options.height);
            if (isNaN(height)) {
                if ($parent[0] == document.body) {
                    height = $(window).height();
                } else {
                    height = $parent.height();
                }
            }
            // Resize if the height has changed.
            if (that._height != height) {
                that._height = height;

                // Get any margins or padding applied to the body and the border for the splitter.
                var mt = parseInt($parent.css("margin-top"));
                var mb = parseInt($parent.css("margin-bottom"))
                var pt = parseInt($parent.css("padding-top"))
                var pb = parseInt($parent.css("padding-bottom"))
                var btw = parseInt(that.element.css("border-top-width"))
                var bbw = parseInt(that.element.css("border-bottom-width"));
                var offset = (isNaN(mt) ? 0 : mt) + (isNaN(mb) ? 0 : mb) + (isNaN(pt) ? 0 : pt) +
                    (isNaN(pb) ? 0 : pb) + (isNaN(btw) ? 0 : btw) + (isNaN(bbw) ? 0 : bbw);
                that.element.height(that._height - offset).resize();

                // Resize the layout splitters.
                that._outerSplitter.resize();
                if (that._innerSplitter != null) {
                    that._innerSplitter.resize();
                }
            }

            if (that.options.height == "fill") {
                setTimeout(function () { that.resize(); }, 100);
            }
        },

        setTitle: function (region, title) {
            var paneOptions = kendo.arrays.find(this.options.items, { attr: "region", value: region });

            if (paneOptions != null) {
                var $pane = $(paneOptions.content);
                var titlebar = $pane.data("titlebar");
                titlebar.vertTitleName(title);
                $pane.find(".k-ext-layout-title").text(title);
            }
        },

        options: {
            name: "ExtBorderLayout",
            height: "fill"
        }
    });
    kendo.ui.plugin(ExtBorderLayout);


    /*
     *
     * ExtDialog
     *
     */

    var ExtDialog = kendo.ui.Window.extend({
        _buttonTemplate: kendo.template('<div class="k-ext-dialog-buttons" style="position:absolute; bottom:10px; text-align:center; width:#= parseInt(width) - 14 #px;"><div style="display:inline-block"># $.each (buttons, function (idx, button) { # <button class="k-button" style="margin-right:5px; width:100px;">#= button.name #</button> # }) # </div></div>'),
        _contentTemplate: kendo.template('<div class="k-ext-dialog-content" style="height:#= parseInt(height) - 55 #px;; width:#= parseInt(width) - 14 #px;overflow:auto;">'),

        init: function (element, options) {
            /// <signature>
            ///   <summary>
            ///   Initialize the dialog.
            ///   </summary>
            /// </signature>

            var that = this;

            options.visible = options.visible || false;

            kendo.ui.Window.fn.init.call(that, element, options);
            $(element).data("kendoWindow", that);

            var html = $(element).html();
            $(element).html(that._contentTemplate(options));
            $(element).find("div.k-ext-dialog-content").append(html);

            $(element).after(that._buttonTemplate(options));

            $.each(options.buttons, function (idx, button) {
                if (button.click) {
                    $($(element).parent().find(".k-ext-dialog-buttons .k-button")[idx]).on("click", { handler: button.click }, function (e) {
                        e.data.handler({ button: this, dialog: that });
                    });
                }
            });

            that.bind("resize", function (e) {
                that.resizeDialog();
            });
        },

        resizeDialog: function () {
            var that = this;
            var $dialog = $(that.element);
            var width = $dialog.width();
            var height = $dialog.height();
            $dialog.parent().find(".k-ext-dialog-buttons").width(width);
            $dialog.parent().find(".k-ext-dialog-content").width(width).height(height - 39);
        },

        options: {
            name: "ExtDialog"
        }
    });
    kendo.ui.plugin(ExtDialog);



    /*
     *
     * AlertDialog
     *
     */

    kendo.ui.ExtAlertDialog = {
        show: function (options) {
            return new $.Deferred(function (deferred) {
                var dialog = null;

                if ($("#extAlertDialog").length > 0) {
                    $("#extAlertDialog").parent().remove();
                }

                options = $.extend({
                    width: "300px",
                    height: "100px",
                    buttons: [{
                        name: "OK",
                        click: function (e) {
                            dialog.close();
                            deferred.resolve({ button: "OK" });
                        }
                    }],
                    modal: true,
                    visible: false,
                    message: "",
                    icon: "k-ext-information"
                }, options);

                $(document.body).append(kendo.format("<div id='extAlertDialog' style='position:relative;'><div style='position:absolute;left:10px;top:10px;' class='{0}'></div><div style='display:inline-block;margin-left:45px;'>{1}</div></div>", options.icon, options.message));
                dialog = $("#extAlertDialog").kendoExtDialog(options).data("kendoExtDialog");
                $("#extAlertDialog").parent().find("div.k-window-titlebar div.k-window-actions").empty();
                dialog.center().open();
            });
        },

        hide: function () {
            $("#extAlertDialog").data("kendoExtDialog").close();
        }
    };



    /*
     *
     * OkCancelDialog
     *
     */

    kendo.ui.ExtOkCancelDialog = {
        show: function (options) {
            return new $.Deferred(function (deferred) {
                if ($("#extOkCancelDialog").length > 0) {
                    $("#extOkCancelDialog").parent().remove();
                }

                options = $.extend({
                    width: "300px",
                    height: "100px",
                    buttons: [{
                        name: "OK",
                        click: function (e) {
                            $("#extOkCancelDialog").data("kendoExtDialog").close();
                            deferred.resolve({ button: "OK" });
                        }
                    }, {
                        name: "Cancel",
                        click: function (e) {
                            $("#extOkCancelDialog").data("kendoExtDialog").close();
                            deferred.resolve({ button: "Cancel" });
                        }
                    }],
                    modal: true,
                    visible: false,
                    message: "",
                    icon: "k-ext-information"
                }, options);

                $(document.body).append(kendo.format("<div id='extOkCancelDialog' style='position:relative;'><div style='position:absolute;left:10px;top:10px;' class='{0}'></div><div style='display:inline-block;margin-left:45px;'>{1}</div></div>", options.icon, options.message));
                $("#extOkCancelDialog").kendoExtDialog(options);
                $("#extOkCancelDialog").parent().find("div.k-window-titlebar div.k-window-actions").empty();
                $("#extOkCancelDialog").data("kendoExtDialog").center().open();
            });
        }
    };



    /*
     *
     * YesNoDialog
     *
     */

    kendo.ui.ExtYesNoDialog = {
        show: function (options) {
            return new $.Deferred(function (deferred) {
                if ($("#extYesNoDialog").length > 0) {
                    $("#extYesNoDialog").parent().remove();
                }

                options = $.extend({
                    width: "300px",
                    height: "100px",
                    buttons: [{
                        name: "Yes",
                        click: function (e) {
                            $("#extYesNoDialog").data("kendoExtDialog").close();
                            deferred.resolve({ button: "Yes" });
                        }
                    }, {
                        name: "No",
                        click: function (e) {
                            $("#extYesNoDialog").data("kendoExtDialog").close();
                            deferred.resolve({ button: "No" });
                        }
                    }],
                    modal: true,
                    visible: false,
                    message: "",
                    icon: "k-ext-information"
                }, options);

                $(document.body).append(kendo.format("<div id='extYesNoDialog' style='position:relative;'><div style='position:absolute;left:10px;top:10px;' class='{0}'></div><div style='display:inline-block;margin-left:45px;'>{1}</div></div>", options.icon, options.message));
                $("#extYesNoDialog").kendoExtDialog(options);
                $("#extYesNoDialog").parent().find("div.k-window-titlebar div.k-window-actions").empty();
                $("#extYesNoDialog").data("kendoExtDialog").center().open();
            });
        },

        hide: function () {
            $("#extYesNoDialog").data("kendoExtDialog").close();
        }
    };



    /*
     *
     * InputDialog
     *
     */

    kendo.ui.ExtInputDialog = {
        show: function (options) {
            return new $.Deferred(function (deferred) {
                var dialog = null;

                if ($("#extInputDialog").length > 0) {
                    $("#extInputDialog").parent().remove();
                }

                options = $.extend({
                    width: "300px",
                    height: "100px",
                    buttons: [{
                        name: "OK",
                        click: function (e) {
                            var $inputText = $("#extInputDialog .k-ext-input-dialog-input");
                            if (dialog.options.required && $inputText.val().length == 0) {
                                $inputText.addClass(dialog.options.requiredCss);
                            } else {
                                dialog.close();
                                deferred.resolve({ button: "OK", input: $inputText.val() });
                            }
                        }
                    }, {
                        name: "Cancel",
                        click: function (e) {
                            dialog.close();
                            deferred.resolve({ button: "Cancel" });
                        }
                    }],
                    modal: true,
                    visible: false,
                    message: "",
                    required: false,
                    requiredCss: "k-ext-required"
                }, options);

                $(document.body).append(kendo.format("<div id='extInputDialog' style='position:relative;'><div style='display:block;margin-left:10px;right-margin:10px;'>{0}</div><div style='display:block;margin-left:10px;margin-right:15px;'><input type='text' class='k-ext-input-dialog-input' style='width:100%;'</input></div></div>", options.message));
                dialog = $("#extInputDialog").kendoExtDialog(options).data("kendoExtDialog");
                $("#extInputDialog").parent().find("div.k-window-titlebar div.k-window-actions").empty();
                dialog.center().open();
            });
        },

        hide: function () {
            $("#extInputDialog").data("kendoExtDialog").close();
        }
    };



    /*
     *
     * WaitDialog
     *
     */

    kendo.ui.ExtWaitDialog = {
        show: function (options) {
            return new $.Deferred(function (deferred) {
                if ($("#extWaitDialog").length > 0) {
                    $("#extWaitDialog").parent().remove();
                }

                options = $.extend({
                    width: "300px",
                    height: "100px",
                    modal: true,
                    visible: false,
                    message: ""
                }, options);

                $(document.body).append(kendo.format("<div id='extWaitDialog' style='position:relative;'><div style='position:absolute;left:10px;top:10px;' class='k-ext-wait'></div><div style='display:inline-block;margin-left:45px;'>{0}</div></div>", options.message));
                $("#extWaitDialog").kendoWindow(options);
                $("#extWaitDialog").parent().find("div.k-window-titlebar div.k-window-actions").empty();
                $("#extWaitDialog").data("kendoWindow").center().open();

                return deferred.resolve();
            });
        },

        hide: function () {
            $("#extWaitDialog").data("kendoWindow").close();
        }
    };



    /*
     *
     * ExtDropDownGrid
     *
     */

    var ExtDropDownGrid = kendo.ui.Widget.extend({
        _uid: null,
        _grid: null,
        _dropdown: null,

        init: function (element, options) {
            var that = this;

            kendo.ui.Widget.fn.init.call(that, element, options);

            that._uid = new Date().getTime();

            $(element).append(kendo.format("<div id='extGrid{0}' class='k-ext-grid' style='{1};z-index:1;'/>",
                that._uid, options.gridWidth
                    ? kendo.format("width:{0}", options.gridWidth)
                    : ""));
            $(element).append(kendo.format("<input id='extDropDown{0}' class='k-ext-dropdown'/>", that._uid));

            that._grid = $(kendo.format("#extGrid{0}", that._uid)).kendoGrid(options.grid).data("kendoGrid");
            that._grid.bind("change", function (e) {
                setTimeout(function () {
                    var tr = $(that._grid.element).find("tr.k-state-selected");

                    if (tr.length > 0 && tr.hasClass("k-grid-edit-row") === false) {
                        // Get the selected row.
                        var item = that._grid.dataItem(tr);
                        // Display the text for the selected row in the dropdownlist.
                        $dropdownRootElem.find("span.k-input").text(item[that.options.dataTextField]);

                        $(that._grid.element).slideToggle('fast', function () {
                            $(that._grid.element).removeClass("k-custom-visible");
                        });

                        that.trigger("change", e);
                    }
                });
            });

            that._dropdown = $(kendo.format("#extDropDown{0}", that._uid)).kendoDropDownList({
                dataSource: [{ text: "", value: "" }],
                dataTextField: "text",
                dataValueField: "value",
                open: function (e) {
                    //to prevent the dropdown from opening or closing.
                    e.preventDefault();
                    // If the grid is not visible, then make it visible.
                    if (!$(that._grid.element).hasClass("k-custom-visible")) {
                        // Position the grid so that it is below the dropdown.
                        $(that._grid.element).css({
                            "top": $dropdownRootElem.position().top + $dropdownRootElem.height(),
                            "left": $dropdownRootElem.position().left
                        });
                        // Display the grid.
                        $(that._grid.element).slideToggle('fast', function () {
                            that._dropdown.close();
                            $(that._grid.element).addClass("k-custom-visible");
                        });
                    }
                }
            }).data("kendoDropDownList");

            if (options.dropDownWidth) {
                that._dropdown._focused.width(options.dropDownWidth);
            }

            var $dropdownRootElem = $(that._dropdown.element).closest("span.k-dropdown");

            $(that._grid.element).hide().css({
                "border": "1px solid grey",
                "position": "absolute"
            });

            $(document).click(function (e) {
                // Ignore clicks on the grid.
                if ($(e.target).closest(kendo.format("#extGrid{0}", that._uid)).length == 0 &&
                    ($(e.target).closest("form.k-filter-menu").length == 0) &&  /* Filter form */
                    ($(e.target).hasClass("k-link") && $(e.target).data("page") > 0) == false /* Pager */) {
                    // If visible, then close the grid.
                    if ($(that._grid.element).hasClass("k-custom-visible")) {
                        $(that._grid.element).slideToggle('fast', function () {
                            $(that._grid.element).removeClass("k-custom-visible");
                        });
                    }
                }
            });
        },

        dropDownList: function () {
            return this._dropdown;
        },

        grid: function () {
            return this._grid;
        },

        options: {
            name: "ExtDropDownGrid"
        }
    });
    kendo.ui.plugin(ExtDropDownGrid);



    /*
     *
     * ExtDropDownTreeView
     *
     */

    var ExtDropDownTreeView = kendo.ui.Widget.extend({
        _uid: null,
        _treeview: null,
        _dropdown: null,

        init: function (element, options) {
            var that = this;

            kendo.ui.Widget.fn.init.call(that, element, options);

            that._uid = new Date().getTime();

            $(element).append(kendo.format("<input id='extDropDown{0}' class='k-ext-dropdown'/>", that._uid));
            $(element).append(kendo.format("<div id='extTreeView{0}' class='k-ext-treeview' style='z-index:1;'/>", that._uid));

            // Create the dropdown.
            that._dropdown = $(kendo.format("#extDropDown{0}", that._uid)).kendoDropDownList({
                dataSource: [{ text: "", value: "" }],
                dataTextField: "text",
                dataValueField: "value",
                open: function (e) {
                    //to prevent the dropdown from opening or closing. A bug was found when clicking on the dropdown to 
                    //"close" it. The default dropdown was visible after the treeview had closed.
                    e.preventDefault();
                    // If the treeview is not visible, then make it visible.
                    if (!$treeviewRootElem.hasClass("k-custom-visible")) {
                        // Position the treeview so that it is below the dropdown.
                        $treeviewRootElem.css({
                            "top": $dropdownRootElem.position().top + $dropdownRootElem.height(),
                            "left": $dropdownRootElem.position().left
                        });
                        // Display the treeview.
                        $treeviewRootElem.slideToggle('fast', function () {
                            that._dropdown.close();
                            $treeviewRootElem.addClass("k-custom-visible");
                        });
                    }
                }
            }).data("kendoDropDownList");

            if (options.dropDownWidth) {
                that._dropdown._inputWrapper.width(options.dropDownWidth);
            }

            var $dropdownRootElem = $(that._dropdown.element).closest("span.k-dropdown");

            // Create the treeview.
            that._treeview = $(kendo.format("#extTreeView{0}", that._uid)).kendoTreeView(options.treeview).data("kendoTreeView");
            that._treeview.bind("select", function (e) {
                // When a node is selected, display the text for the node in the dropdown and hide the treeview.
                $dropdownRootElem.find("span.k-input").text($(e.node).children("div").text());
                $treeviewRootElem.slideToggle('fast', function () {
                    $treeviewRootElem.removeClass("k-custom-visible");
                    that.trigger("select", e);
                });
            });

            var $treeviewRootElem = $(that._treeview.element).closest("div.k-treeview");

            // Hide the treeview.
            $treeviewRootElem
                .width($dropdownRootElem.width())
                .css({
                    "border": "1px solid grey",
                    "display": "none",
                    "position": "absolute",
                    "background-color": that._dropdown.list.css("background-color")
                });

            $(document).click(function (e) {
                // Ignore clicks on the treetriew.
                if ($(e.target).closest("div.k-treeview").length == 0) {
                    // If visible, then close the treeview.
                    if ($treeviewRootElem.hasClass("k-custom-visible")) {
                        $treeviewRootElem.slideToggle('fast', function () {
                            $treeviewRootElem.removeClass("k-custom-visible");
                        });
                    }
                }
            });
        },

        dropDownList: function () {
            return this._dropdown;
        },

        treeview: function () {
            return this._treeview;
        },

        options: {
            name: "ExtDropDownTreeView"
        }
    });
    kendo.ui.plugin(ExtDropDownTreeView);



    /*
     *
     * ExtEditor
     *
     */

    var ExtEditor = kendo.ui.Editor.extend({
        init: function (element, options) {
            var that = this;

            kendo.ui.Editor.fn.init.call(that, element, options);
            $(element).data("kendoEditor", that);
        },

        options: {
            name: "ExtEditor"
        }
    });
    kendo.ui.plugin(ExtEditor);



    /*
     *
     * ExtTextBox
     *
     */

    var ExtTextBox = kendo.ui.Widget.extend({
        init: function (element, options) {
            var that = this;
            var $input = $(element);

            kendo.ui.Widget.fn.init.call(that, element, options);

            $input.before(kendo.format('<div class="k-input k-textbox k-ext-textbox {0}" {1}></div>',
                that.options.textboxClass,
                that.options.width
                    ? kendo.format("style='width:{0};'", that.options.width)
                    : ""));
            var $div = $input.prev();
            $div.append($input);

            $input.before(kendo.format("<span {0}>{1}</span>",
                that.options.placeholderClass
                    ? kendo.format("class='{0}'", that.options.placeholderClass)
                    : "",
                $input.val().length == 0
                    ? that.options.placeholder
                    : ""));

            $input.on("blur", function () {
                if (that.options.placeholder) {
                    var $input = $(this);

                    if ($input.val().length == 0) {
                        $input.prev("span").text(that.options.placeholder);
                    } else {
                        $input.prev("span").text("");
                    }
                }
            }).on("focus", function () {
                if (that.options.placeholder) {
                    $(this).prev("span").text("");
                }
            });
        },

        options: {
            name: "ExtTextBox"
        }
    });
    kendo.ui.plugin(ExtTextBox);



    /*
     *
     * ExtContextMenu
     *
     */

    var ExtContextMenu = kendo.ui.Menu.extend({
        _itemTemplate: "<li># if (iconCss.length > 0) { #<span class=' #=iconCss # k-icon'></span># } # #= text #</li>",

        init: function (element, options) {
            var that = this;

            $(element).appendTo("body").hide();

            options = $.extend(options,
                {
                    orientation: "vertical"
                });

            // If the list of items has been passed in...
            if (options.items) {
                var itemTemplate = kendo.template(that._itemTemplate);
                $.each(options.items, function (idx, item) {
                    var html = "";
                    if (item.separator) {
                        html = "<li class='k-ext-menu-separator'><hr/><li>";
                    } else {
                        item = $.extend({ iconCss: "" }, item);
                        html = itemTemplate(item);
                    }
                    $(element).append(html);
                });
            }

            // Call the base class init.
            kendo.ui.Menu.fn.init.call(that, element, options);

            // If there are any separators, then remove the k-link class.
            $(that.element).find("li.k-ext-menu-separator span").removeClass("k-link");

            // When the user right-clicks on any of the targets, then display the context menu.
            $(document).on("contextmenu", options.targets, function (e) {
                e.preventDefault();
                that.trigger("beforeopen", e);
                that._currentTarget = e.currentTarget;
                that.show(e.pageX, e.pageY);
                return false;
            });

            if (that.options.beforeOpen) {
                that.bind("beforeopen", that.options.beforeOpen);
            }

            that.bind("select", that._select);

            $(that.element).css({ "width": that.options.width, "position": "absolute" }).addClass("k-block").addClass("k-ext-contextmenu");

            // If the user is not clicking on the context menu, then hide the menu.
            $(document).click(function (e) {
                // Ignore clicks on the contextmenu.
                if ($(e.target).closest(".k-ext-contextmenu").length == 0) {
                    // If visible, then close the contextmenu.
                    if ($(that.element).hasClass("k-custom-visible")) {
                        that.hide();
                    }
                }
            });
        },

        show: function (left, top) {
            var that = this;

            // Position the context menu.
            $(that.element).css({
                "top": top,
                "left": left
            });
            // Display the context menu.
            $(that.element).slideToggle('fast', function () {
                $(that.element).addClass("k-custom-visible");
            });
        },

        hide: function () {
            var that = this;

            $(that.element).slideToggle('fast', function () {
                $(that.element).removeClass("k-custom-visible");
            });
        },

        _select: function (e) {
            if (this.options.itemSelect != undefined) {
                e.target = this._currentTarget;
                this.options.itemSelect.apply(this, [e]);
            }
            this.hide();
        },

        options: {
            name: "ExtContextMenu",
            width: "100px"
        }
    });
    kendo.ui.plugin(ExtContextMenu);
})(window.kendo, window.kendo.jQuery);;
/// <reference path="VehicleOnlineManager.js" />
/* 
* $Author$		hanhth
* Khởi tạo lần đầu
* Input: Danh sách xe trả về từ database hoặc WCF
*/
VehicleOnlineManager.prototype.init = function (listVehicle) {
    try {
        var that = this;
        that.listCurrentDisplay.clear();

        var checkDistinct = "";
        if (listVehicle != null && listVehicle.length > 0) {
            if (that.currentXNCode != 819)//*sign
                listVehicle = listVehicle.sort(that.compare);
            else listVehicle = listVehicle.sort(that.compareABC);

            // Lấy ra table để render dòng
            var table = $('#tblVehicleList tbody');

            // Xóa nội dung cũ đi
            table.empty();

            var row = null;

            // Đối tượng online có tên thuộc tính đầy đủ
            var vehicleOnline = null;
            that.numberRecord = listVehicle.length;

            /*LinhNX multithreading*/
            var dicMarkerCluster = [];

            //var sw = new StopWatch();
            //sw.start();
            //var counter = 0;
            var listTableRender = [];

            if (that.UseMeterState) {
                for (var c = 0; c < 11; c++) {
                    that.tblCountByState.push(0);
                }
            }

            $.each(listVehicle, function (i, vehicle) {
                vehicleOnline = that.mapJsonVehicleToVehicleOnlineInit(vehicle);
                // Add vào từ điển lưu trữ
                if (vehicleOnline.VehicleID == null || vehicleOnline.VehicleID == undefined) {

                }

                // Nếu chưa chứa key này => Add vào từ điển lưu trữ
                if (that.dicPrivateCode.containsKey(vehicleOnline.PrivateCode) == false) {
                    that.dicPrivateCode.put(vehicleOnline.PrivateCode, vehicleOnline.VehicleID);
                }

                if (!that.listCurrentDisplay.containsKey(vehicleOnline.PrivateCode)) {
                    that.listCurrentDisplay.put(vehicleOnline.PrivateCode, vehicleOnline.VehicleID);
                } else {
                    checkDistinct += "|" + vehicleOnline.PrivateCode;
                }

                // Nếu không sử dụng Cluster!
                if (!that.mapManager.IsUseClusterOnlineFinal) {
                    that.createMarker(vehicleOnline);// Add vào từ điển marker
                } else {
                    // Add marker vào từ điển
                    var obj = new Object();
                    obj.vehicle = vehicleOnline;
                    //obj.marker = marker;

                    // trungtq: nếu LevelID = 3, hoặc 128 => không cho hiển thị marker
                    obj.isShowMarker = (vehicleOnline.LevelID == that.messageIds.Level3 || vehicleOnline.LevelID == that.messageIds.LevelLock) ? false : true;

                    that.dicMarkers.put(vehicleOnline.VehicleID, obj);
                    that.heatMapMobile.dicMarker.put(vehicleOnline.VehicleID, obj);

                    //push listData
                    dicMarkerCluster.push(vehicleOnline);
                }
                //Sonnl thêm 2021.03.17
                if (that.UseMeterState) that.countByState(vehicleOnline);
                row = that.renderRow(vehicleOnline);// Render panel danh sách xe

                // Neu su dung cluster se render ra table sau
                if (that.mapManager.IsUseClusterOnlineFinal) {
                    listTableRender.push(row);
                }
                else {
                    table.append(row);// Append vào bảng
                }
            });

            if (that.UseMeterState) {
                $('#useMeterStatus').show();
                for (var s = 0; s < that.tblCountByState.length; s++) {
                    $('#useMeterStatus span[status="' + (s + 1) + '"]').html(that.tblCountByState[s]);
                }
                console.log("init: " + that.tblCountByState);
            }

            // Cập nhật thông số tóm tắt dưới cùng lưới
            $("#spCurrent").html(that.listCurrentDisplay.keys().length);
            $("#spTotal").html(that.listCurrentDisplay.keys().length);

            var hideTotalRow = $('#hideTotalVehicle').text();
            if (hideTotalRow.indexOf('True') >= 0) $("#spCurrent").parent().parent().hide();

            if (that.IsUseClusterOnlineFinal) {
                that.heatMapMobile.map = that.mapStraction; /*that.map;*/
                that.heatMapMobile.mapManager = that.mapManager;
                that.heatMapMobile.listVehicle = listTableRender;
                var hc = new Hashtable();
                hc.put(1, dicMarkerCluster);
                that.heatMapMobile.dicMarkerCluster = hc;
                that.heatMapMobile.initMap();//*sign        
                //that.heatMapMobile.onMarkerClusterCreate()
            }
        }
    }
    catch (err) {
        console.log("Error: VehicleOnlineManager.prototype.init(): " + err);
    }
};

/* 
* $Author$		trungtq
* Tạo marker (Cắt từ method init của @hanhth)
*/
VehicleOnlineManager.prototype.createMarker = function (vehicle) {
    try {
        var that = this;
        // Nếu xe không bị khóa và (LevelID = 1,2,3,128) thì mới thêm vào từ điển
        if (!vehicle.IsLocked && (vehicle.LevelID <= that.messageIds.Level3 || vehicle.LevelID == that.messageIds.LevelLock)) {
            // Khởi tạo marker label qua MapStraction
            var marker = new mxn.MarkerLabel(new mxn.LatLonPoint(vehicle.Latitude, vehicle.Longitude));
            var markerOptions = {
                label: vehicle.PrivateCode,
                labelClass: that.getCssClass(vehicle),
                icon: that.setIcon(vehicle.Icon, vehicle.Seat, vehicle.VehicleState, vehicle.GpsTime, vehicle.VehicleDirection, vehicle.VehicleTime),
                iconSize: [24, 24],
                iconAnchor: [12, 12],
                labelAnchor: [12, 30],
                draggable: false,
                labelZIndex: 2,
                zIndex: 1,
                labelVisible: true
            };

            // Add marker vào từ điển
            var obj = new Object();
            obj.vehicle = vehicle;
            obj.marker = marker;

            // trungtq: nếu LevelID = 3, hoặc 128 => không cho hiển thị marker
            obj.isShowMarker = (vehicle.LevelID == that.messageIds.Level3 || vehicle.LevelID == that.messageIds.LevelLock) ? false : true;

            that.dicMarkers.put(vehicle.VehicleID, obj);

            // trungtq: Kiểm tra thêm là nếu hiển thị marker thì mới add vào bản đồ
            if (obj.isShowMarker == true) {
                // trungtq: Add marker vào bản đồ với options cho marker label
                that.mapStraction.addMarkerWithData(marker, markerOptions);
            }

            var timeout_click = null;

            // Đăng ký sự kiện click chuột phải lên marker
            marker.mousedown.addHandler(function (event_name, event_source, event_args) {

                // Khi BAP == true và xe hết hạn + khóa dịch vụ
                if (that.BAP_CONFIG && vehicle.LevelID > that.messageIds.Level1) return;

                that.isMarkerClicked = false;

                timeout_click = setTimeout(function () {
                    var e = e ? e : event_args.e;
                    if (e.button == 2 || e.button == 3) {
                        var x = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
                        var y = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));

                        that.rightMenuVehicle.showAt({ x: x, y: y });

                        // Set toa do hien tai.
                        that.currentLatLng = marker.location;
                        that.currentVehicle = vehicle;//*sign Lấy xe hiện tại đúng nhất!
                    }
                    else {
                        try {
                            if (that.isMarkerClicked == false) {
                                that.overlay = new google.maps.OverlayView();
                                that.overlay.draw = function () { };

                                that.overlay.setMap(that.map);

                                var coordinate = that.overlay.getProjection().fromLatLngToContainerPixel(e.latLng);

                                that.rightMenuVehicle.showAt({ x: coordinate.x, y: coordinate.y });

                                that.currentVehicle = vehicle;
                            }
                            else {
                                that.rightMenuVehicle.hide();
                            }
                        }
                        catch (ex1) {
                            //console.log("marker.mousedown.addHandler(function (event_name, event_source, event_args):" + ex1);

                            if (!that.isMarkerClicked) {
                                that.rightMenuVehicle.showAt({ x: e.containerPoint.x, y: e.containerPoint.y });
                                that.currentVehicle = vehicle;
                            }
                            else {
                                that.rightMenuVehicle.hide();
                            }
                        }
                    }

                }, 300);
            });

            // Đăng ký sự kiện click vào marker
            marker.click.addHandler(function (event_name, event_source, event_args) {

                // Clear timeout su kien "mousedown"
                clearTimeout(timeout_click);

                that.isMarkerClicked = true; // Marker duoc click

                // Gán ID xe làm key để panto
                that.keyPanTo = vehicle.VehicleID;

                // Gọi hàm panto
                that.panTo(vehicle.VehicleID);

                // Gán ComboBox xe được chọn.
                $("#Online_Vehicles").data("kendoComboBox").text(vehicle.PrivateCode + " - " + vehicle.VehiclePlate);

                // Set toa do hien tai.
                that.currentLatLng = event_args.e.location;
            });
        }
    }
    catch (err) {
        console.log("Error: VehicleOnlineManager.prototype.createMarker: " + err);
    }
};

/* 
* $Author$		hanhth
* Lam moi vi tri xe, thong tin chi tiet va infowindow
*/
VehicleOnlineManager.prototype.refresh = function (groupID, defaultGroup, stateID, vehicleTypeID, enableRefreshRightPanel, newVehicle) {
    //try {

    var that = this;

    // Lấy đối tượng trong từ điển ra theo ID xe
    // 1: VehicleID
    var obj = that.dicMarkers.get(newVehicle["1"]);
    // Nếu đã có trong từ điển và được phép hiển thị marker trên bản đồ => thì mới update
    if (obj != null && obj.isShowMarker == true) {
        var marker = obj.marker;

        // Set lại icon cho marker.
        // 2: VehicleTime 3: GpsTime, 8: VehicleDirection, 9: VehicleState
        var iconUrl = that.setIcon(obj.vehicle.Icon, obj.vehicle.Seat, newVehicle["9"], newVehicle["3"], newVehicle["8"], newVehicle["2"]);
        if (marker.iconUrl != iconUrl)
            marker.setIcon(
                iconUrl,
                [24, 24],
                [12, 12]
            );

        // Gọi hàm map lại đối tượng (xem lại mem phải chỉnh lại tí)
        var oldVehicle = that.mapJsonVehicleToVehicleOnlineRefresh(obj.vehicle, newVehicle);

        //Check cảnh báo SOS
        if (oldVehicle.ttk == 10) {
            var dataSOS = new Object;
            dataSOS.FK_AlertTypeID = 2;
            dataSOS.PrivateCode = oldVehicle.PrivateCode;
            that.listDataSOS.push(dataSOS);
            //SingletonWarning.getInstance().dataPush(dataSOS);
        }

        // Comment Set lại thuộc tính cho marker
        var cssClass = that.getCssClass(oldVehicle);
        if (marker.attributes.labelClass != cssClass)
            marker.setOptions({ labelClass: cssClass });

        if (!enableRefreshRightPanel) {
            // trungtq: xử lý trong trường hợp xe thay đổi trạng thái => thêm hoặc loại bỏ xe khỏi danh sách
            that.addOrRemoveRow(groupID, defaultGroup, stateID, vehicleTypeID, obj);
        }

        if (that.enableCompanyUseKienBoConfig == false) {
            // Nếu marker hiện thì mới set position
            if (marker.getVisible()) {

                // Cập nhật lại vị trí cuar marker
                marker.location = new mxn.LatLonPoint(oldVehicle.Latitude, oldVehicle.Longitude);

                // Set lại position cho marker
                marker.update();

                // Kiểm tra xem xe có được panto không?
                that.checkPanTo(oldVehicle.VehicleID);
            } else {
                // Cập nhật lại vị trí cuar marker
                marker.location = new mxn.LatLonPoint(oldVehicle.Latitude, oldVehicle.Longitude);
            }
        }
        // Cập nhật lại giá trị trên lưới nếu có thay đổi
        that.updateDataRow(oldVehicle);
    }
    //}
    //catch (err) {
    //    console.log("Lỗi: VehicleOnlineManager.prototype.refresh: " + err);
    //}
};

/*
Author: LinhNX
Xac dinh 1 diem co' thuoc screen map view
*/
VehicleOnlineManager.prototype.IsInMapScreen = function (Latitude, Longitude) {
    var that = this;

    var result = true;
    try {
        // dieu kien:   > se and <nw
        // nw: Goc trai tren
        // sw: Goc phai duoi
        that.mapStraction.getBounds();

        //nhỏ hơn góc trái ở trên và lớn hơn góc phải ở dưới
        if ((Latitude <= that.mapStraction.getBounds().nw.lat && Longitude >= that.mapStraction.getBounds().nw.lng) &&
            (Latitude >= that.mapStraction.getBounds().se.lat && Longitude <= that.mapStraction.getBounds().se.lng))
            result = true;
    }
    catch (ex) {
        console.log("VehicleOnlineManager.prototype.IsInMapScreen: " + ex);
        result = false;
    }
    return result
}

/* 
* $Author$		linhnx copy hanhth chinh sua them 1 chut
* Lam moi vi tri xe, thong tin chi tiet va infowindow
*/

VehicleOnlineManager.prototype.checkPointInRetangle = function (lat, lng, latsw, lngsw, latne, lngne) {
    if (latsw <= lat && lat <= latne || latne <= lat && lat <= latsw) {
        if (lngsw <= lng && lng <= lngne || lngne <= lng && lng <= lngsw) {
            return true;
        }
    }
    return false;
}

VehicleOnlineManager.prototype.updateInPath = function (path) {
    var that = this;

    //var sw1 = new StopWatch();
    //sw1.start();

    that.thaydoi = 0;
    that.khongthaydoi = 0;

    if (path != null && path.length > 2) {
        var maxLat = path[0].lat;
        var minLat = path[0].lat;
        var maxLng = path[0].lng;
        var minLng = path[0].lng;
        for (var i = 1; i < path.length; i++) {
            if (path[i].lat > maxLat) {
                maxLat = path[i].lat;
            }
            else if (path[i].lat < minLat) {
                minLat = path[i].lat;
            }

            if (path[i].lng > maxLng) {
                maxLng = path[i].lng;
            }
            else if (path[i].lng < minLng) {
                minLng = path[i].lng;
            }
        }

        var sw = new mxn.LatLonPoint(minLat, minLng);
        var ne = new mxn.LatLonPoint(maxLat, maxLng);

        var arrVehicleId = that.dicPrivateCode.values();
        $.each(arrVehicleId, function (j, id) {
            if (that.heatMapMobile && that.heatMapMobile.markerCluster.listClusterMarkers != undefined && that.heatMapMobile.markerCluster.listClusterMarkers.length > 0) {
                // Lấy đối tượng trong từ điển ra theo ID xe
                var marker = that.heatMapMobile.markerCluster.listClusterMarkers.find(x => x.id == id);//marker in cluster
                var objDic = that.dicMarkers.get(id);//marker trong tu dien
                // Nếu đã có trong từ điển và được phép hiển thị marker trên bản đồ và chưa được update => thì mới update
                if (marker != null && objDic != null && objDic.isShowMarker) {
                    if (marker.IsUpdated == null || marker.prevLocation == null) {
                        marker.IsUpdated = true;
                        marker.prevLocation = marker.location;
                        return;
                    }
                    // Gọi hàm map lại đối tượng (xem lại mem phải chỉnh lại tí)
                    //if (!that.enableCompanyUseKienBoConfig && !marker.IsUpdated) {
                    //Vị trí này hoặc vị trí trước trong vùng bound mới chơi không thì thôi (cho cả 2 TH vào hoặc ra khỏi vùng)
                    if (that.checkPointInRetangle(marker.location.lat, marker.location.lng, sw.lat, sw.lng, ne.lat, ne.lng)
                        || that.checkPointInRetangle(marker.prevLocation.lat, marker.prevLocation.lng, sw.lat, sw.lng, ne.lat, ne.lng)
                    ) {
                        marker.update();
                        that.thaydoi = that.thaydoi + 1;
                        marker.prevLocation = marker.location;
                        marker.IsUpdated = true;
                    }
                    else {
                        that.khongthaydoi = that.khongthaydoi + 1;
                    }
                    //}
                }
            }
        });
    }

    //sw1.stop();
    //console.log(" ");
    //console.log("Cập nhật xe trong vùng tìm kiếm : " + (sw1.stopTime - sw1.startTime) / 1000);
    //console.log("Thay đổi: " + that.thaydoi + " xe");
    //console.log("Không thay đổi: " + that.khongthaydoi + " xe");

}


VehicleOnlineManager.prototype.refreshItemInCluster = function (groupID, defaultGroup, stateID, vehicleTypeID, enableRefreshRightPanel, newVehicle, distance, bound) {
    //Lấy 4 góc của vùng bao
    var sw = bound.getSouthWest();
    var ne = bound.getNorthEast();
    //var se = bound.getSouthEast();
    //var nw = bound.getNorthWest();

    try {
        var that = this;
        if (that.heatMapMobile && that.heatMapMobile.markerCluster.listClusterMarkers != undefined && that.heatMapMobile.markerCluster.listClusterMarkers.length > 0) {
            // Lấy đối tượng trong từ điển ra theo ID xe
            // 1: VehicleID

            var marker = that.heatMapMobile.markerCluster.listClusterMarkers.find(x => x.id == newVehicle["1"]); //marker in cluster
            var objDic = that.dicMarkers.get(newVehicle["1"]);                                                           //marker trong tu dien
            // Nếu đã có trong từ điển và được phép hiển thị marker trên bản đồ => thì mới update
            if (marker != null && objDic != null && objDic.isShowMarker) {
                // Set lại icon cho marker.
                // 2: VehicleTime 3: GpsTime, 8: VehicleDirection, 9: VehicleState
                var iconUrl = that.setIcon(objDic.vehicle.Icon, objDic.vehicle.Seat, newVehicle["9"], newVehicle["3"], newVehicle["8"], newVehicle["2"]);
                if (marker.iconUrl != iconUrl)
                    marker.setIcon(
                        iconUrl,
                        [24, 24],
                        [12, 12]
                    );

                // Gọi hàm map lại đối tượng (xem lại mem phải chỉnh lại tí)
                var oldVehicle = that.mapJsonVehicleToVehicleOnlineRefresh(objDic.vehicle, newVehicle);

                //Check cảnh báo SOS
                if (oldVehicle.ttk == 10) {
                    var dataSOS = new Object;
                    dataSOS.FK_AlertTypeID = 2;
                    dataSOS.PrivateCode = oldVehicle.PrivateCode;
                    that.listDataSOS.push(dataSOS);
                }

                // Comment Set lại thuộc tính cho marker
                var cssClass = that.getCssClass(oldVehicle);
                if (marker.attributes.labelClass != cssClass)
                    marker.setOptions({ labelClass: cssClass });

                if (!enableRefreshRightPanel) {
                    // trungtq: xử lý trong trường hợp xe thay đổi trạng thái => thêm hoặc loại bỏ xe khỏi danh sách
                    that.addOrRemoveRow(groupID, defaultGroup, stateID, vehicleTypeID, objDic);
                }

                if (!that.enableCompanyUseKienBoConfig) {
                    marker.location = new mxn.LatLonPoint(oldVehicle.Latitude, oldVehicle.Longitude);
                    if (marker.prevLocation == null) {
                        marker.prevLocation = marker.location;
                    }

                    //Đang focus thì kiểu gì phải thay đổi
                    if (that.keyPanTo == oldVehicle.VehicleID) {
                        marker.update();
                        that.thaydoi = that.thaydoi + 1;
                        marker.prevLocation = marker.location;
                        marker.IsUpdated = true;
                    }
                    //Tính đến khoảng cách
                    else {
                        var dc = that.map.distance(marker.prevLocation, marker.location);
                        //Lớn hơn khoảng cách
                        if (dc > distance) {
                            //Nằm trong vùng bound mới chơi không thì thôi
                            if (that.checkPointInRetangle(marker.location.lat, marker.location.lng, sw.lat, sw.lng, ne.lat, ne.lng)
                                || that.checkPointInRetangle(marker.prevLocation.lat, marker.prevLocation.lng, sw.lat, sw.lng, ne.lat, ne.lng)
                            ) {
                                marker.update();
                                that.thaydoi = that.thaydoi + 1;
                                marker.prevLocation = marker.location;
                                marker.IsUpdated = true;
                            }
                            else {
                                that.khongthaydoi = that.khongthaydoi + 1;
                                marker.IsUpdated = false;
                            }
                        }
                        else {
                            that.khongthaydoi = that.khongthaydoi + 1;
                            marker.IsUpdated = false;
                        }
                    }
                    // Kiểm tra xem xe có được panto không?
                    // Neu user dang chon xe khac => k panto nua
                    if (!isFocusVehicle) {
                        that.checkPanTo(oldVehicle.VehicleID);
                    }
                }
                //SonnlTest20191015 bo cap nhat luoi ben phai 
                // Cập nhật lại giá trị trên lưới nếu có thay đổi
                that.updateDataRow(oldVehicle);
            }
        }
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.refreshCluster: " + err);
    }
};

/* 
* $Author$		trungtq
* trungtq: Kiểm tra xem trạng thái xe có thỏa mãn để hiển thị trên lưới không? 
* longtq: Hiện đang để thế này là user vào ko chọn lọc theo cái gì là nhanh nhất
* nếu chọn lọc càng nhiều đk sẽ càng chậm >> sẽ tối ưu sau (phương án tạm tính là ghép 3 function thành 1 thôi)
* that.getVisbleByGroupID && that.getVisibleByStateID && that.getVisbleByVehicleTypeID
*/
VehicleOnlineManager.prototype.addOrRemoveRow = function (groupID, defaultGroup, stateID, vehicleTypeID, obj) {
    var that = this;
    try {
        // Nếu đã chọn nhóm hoặc chọn trạng thái.
        if ((groupID != 0 && defaultGroup != 0) || stateID != 0 || vehicleTypeID != -1) {
            // Thỏa mãn theo nhóm không?
            var isShowGroup = that.getVisbleByGroupID(groupID, defaultGroup, obj.vehicle);

            // Thỏa mãn theo trạng thái không?
            var isShowState = that.getVisibleByStateID(stateID, obj.vehicle);

            // Thỏa mãn theo loại xe
            var isShowVehicleType = that.getVisbleByVehicleTypeID(vehicleTypeID, obj.vehicle);

            // Thỏa mãn cả 3 điều kiện tìm kiếm => hiện dòng dữ liệu trên lưới
            if ((isShowGroup && isShowState && isShowVehicleType) == true) {
                // Nếu dòng đang ẩn  => Hiện dòng
                // SonKT: Bỏ việc kiểm tra dòng có hiển thị hay không để tránh giật. Việc kiểm tra này chỉ có tác dụng cập nhật bộ đếm. Bộ đếm được xử lý qua biến listCurrentDisplay
                //if ($("#tr_" + obj.vehicle.VehicleID).is(':visible') == false) {

                //Thêm vào trong danh sách hiển thị để cập nhật bộ đếm nếu có
                if (!that.listCurrentDisplay.containsKey(obj.vehicle.PrivateCode)) {
                    that.listCurrentDisplay.put(obj.vehicle.PrivateCode, obj.vehicle.VehicleID)
                }
                setTimeout(function () {
                    that.setVisibleRow(obj.vehicle.VehicleID, true);
                }, 1);
                // Tăng biến đếm
                //var count = parseInt($('#spCurrent').html()) + 1;
                //$('#spCurrent').html(count);
                if (!that.IsUseClusterOnlineFinal) {
                    // Hiện marker
                    obj.marker.show();
                }
                // LinhNX show marker in cluster
                else {
                    // show ban chat la add
                    var markerShow = that.dicMarkerHS.get(obj.vehicle.VehicleID);
                    if (markerShow != null) {
                        setTimeout(function () {
                            that.heatMapMobile.markerCluster.addMarker(markerShow);
                        }, 1);
                        that.dicMarkerHS.remove(obj.vehicle.VehicleID);
                    }
                }

                //}
            }
            else {

                if (that.listCurrentDisplay.containsKey(obj.vehicle.PrivateCode)) {
                    that.listCurrentDisplay.remove(obj.vehicle.PrivateCode);
                }
                // Nếu dòng đang hiện  => Ẩn dòng

                //if ($("#tr_" + obj.vehicle.VehicleID).is(':visible')) {
                // Ẩn dòng khi điều kiện không thỏa mãn
                setTimeout(function () {
                    that.setVisibleRow(obj.vehicle.VehicleID, false);
                }, 1);
                // Giảm  biến đếm
                //var count = parseInt($('#spCurrent').html()) - 1;
                // $('#spCurrent').html(count > 0 ? count : 0);
                if (!that.IsUseClusterOnlineFinal) {
                    // Ẩn marker
                    obj.marker.hide();
                }
                //}
                // LinhNX hide marker in cluster
                else {
                    var markerHide = that.heatMapMobile.markerCluster.listClusterMarkers.find(x => x.id == obj.vehicle.VehicleID);

                    //hide thuc chat la remove di
                    //va add vao list marker dc delete 
                    if (markerHide != null) {
                        // neu dang dc panto thy clear no di va dong form info
                        if (obj.vehicle.VehicleID == that.keyPanTo)
                            that.closePopup();

                        that.heatMapMobile.markerCluster.removeMarker(markerHide);
                        that.dicMarkerHS.put(obj.vehicle.VehicleID, markerHide);
                    }
                }
            }
        }
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.addOrRemoveRow:" + err);
    }
};

VehicleOnlineManager.prototype.convertPointToArray = function (p1, p2) {
    var that = this;
    var stepPoint = that.stepPointConfig;
    var dx = (p2.lng - p1.lng) / stepPoint;
    var dy = (p2.lat - p1.lat) / stepPoint;

    var aryPoint = [];

    for (var i = 0; i < stepPoint; i++) {
        aryPoint[i] = new mxn.LatLonPoint(p1.lat + dy * (i + 1), p1.lng + dx * (i + 1));
    }
    return aryPoint;
}


VehicleOnlineManager.prototype.processKienBo = function (velocyConfig) {
    try {
        var that = this;
        //console.log(that.inteTime);
        that.inteTime = velocyConfig;
        var stepPoint = that.stepPointConfig;
        if (that.countStepPoint == stepPoint) {

            that.dicSplitPoint.clear();

            that.countStepPoint = 0;

            $(document).stopTime("XuLyKienBo");

            return;
        }

        that.dicSplitPoint.each(function (key, value) {

            var objVehicle = that.dicMarkers.get(key);

            var vehicle = objVehicle.vehicle;
            if (vehicle.VelocityGPS >= that.velocityUseKienBoConfig) {
                var marker = objVehicle.marker;
                var point = value[that.countStepPoint];
                // Set lại icon cho marker.
                // 2: VehicleTime 3: GpsTime, 8: VehicleDirection, 9: VehicleState

                var direction = MapHelper.getDirection(point.lat, point.lng, vehicle.Latitude, vehicle.Longitude);

                if (isNaN(direction)) {
                    direction = vehicle.direction;
                }

                if (that.countStepPoint != 0 && direction != undefined) {
                    var iconUrl = that.setIcon(vehicle.Icon, vehicle.Seat, vehicle.VehicleState, vehicle.GpsTime, direction, vehicle.VehicleTime);
                    if (marker.iconUrl != iconUrl)
                        marker.setIcon(
                            iconUrl,
                            [24, 24],
                            [12, 12]
                        );
                }


                // Cập nhật lại vị trí cuar marker
                marker.location = new mxn.LatLonPoint(point.lat, point.lng);

                // Set lại position cho marker
                marker.update();

                that.checkPanTo(vehicle.VehicleID);
            }
        });

        that.countStepPoint++;
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.processKienBo: " + err);
    }
}
/*
 * $Author$ MinhND
 * Hàm refresh 1 list xe trong Cluster!
 */
VehicleOnlineManager.prototype.refreshMultipleCluster = function (listVehicle) {
    var that = this;
    that.heatMapMobile.refreshCluster(listVehicle);
}
/* 

* $Author$		MinhND
* Map thuộc tính trả về dạng json từ server sang dạng client có thể hiểu! Cho HeatMap!
*/
VehicleOnlineManager.prototype.mapJsonVehicleToVehicleOnlineRefreshHeat = function (obj, jsonVehicle) {
    try {
        obj.VehicleTime = new Date(parseInt(jsonVehicle.VehicleTime.substr(6)));                // Thời gian xe trả về 
        obj.GpsTime = new Date(parseInt(jsonVehicle.GpsTime.substr(6)));                        // Thời gian GPS      
        obj.Longitude = jsonVehicle.Longitude;
        obj.Latitude = jsonVehicle.Latitude;
        obj.VelocityGPS = jsonVehicle.VelocityGPS;
        obj.VelocityMechanical = jsonVehicle.VelocityMechanical;
        obj.VehicleDirection = jsonVehicle.VehicleDirection;                // Hướng
        obj.VehicleState = jsonVehicle.VehicleState;                     // Trạng thái xe
        obj.OtherState = jsonVehicle.OtherState;                      // Trạng thái khác
        obj.MinuteOfManchineOnWhenStop = jsonVehicle.MinuteOfManchineOnWhenStop;       // Số phút dừng đỗ bật máy
        obj.KmEmpty = jsonVehicle.KmEmpty;                             // Km rỗng trong ngày/ ca
        obj.Stopped = jsonVehicle.Stopped;
        obj.CurrentEmptyKM = jsonVehicle.CurrentEmptyKM;                     //KM rỗng hiện thời
        return obj;
    } catch (err) {
        console.log("AllVehicle.prototype.mapJsonVehicleToVehicleOnlineRefresh: " + err);
    }
    return null;
};

/**
 * Author LinhNX
 * Function refresh Làm mới trạng thái các xe trong lưới tìm kiếm sau khi đã hiển thị trên bản đồ
 * @param {any} pListPushVehicle
 * @param {any} keyPanTo
 * Add: Tam thoi k su dung nua
 */
VehicleOnlineManager.prototype.refreshGridWithCluster = function (pListPushVehicle) {
    try {
        //console.log("refreshGridWithCluster");
        var that = this;

        //Kiem tra xem su kien Panto xe la click from icon map hay select xe tren thanh grid vehicle
        if (that.keyPanTo == 0) {
            that.keyPanTo = that.keyPanToCluster;
        }

        for (var i = 0; i < pListPushVehicle.length; i++) {
            var pVehicle = pListPushVehicle[i];
            that.checkPanTo(pVehicle.id);
            that.updateDataRow(pVehicle);// Cập nhật lại giá trị trên lưới nếu có thay đổi
        }
    } catch (ex) {
        console.log("Error at VehicleOnlineManager.prototype.refreshGridWithCluster: " + ex);
    }
}

/*
 * Author LinhNX
 * Keypanto in cluster khi su kien click vao icon xe tren map 
 * Chi danh rieng cho System chay cluster
 * Add: Tam thoi k su dung nua
 */
VehicleOnlineManager.prototype.keyPanToCluster = 0;

/* 
* $Author$		trungtq
* Hàm refresh 1 list xe thay vì 1 object
*/
VehicleOnlineManager.prototype.refreshMultiple = function (listVehicle) {
    //var sw = new StopWatch();
    //sw.start();
    var that = this;
    var stateID = parseInt($("#Online_VehicleStatus").data("kendoDropDownList").value());
    var groupID = $("#Online_VehicleGroup").data("kendoDropDownList").value();
    // Index 0 là nhóm "Tất cả" 
    // Longtq thêm để không phải lọc khi nhóm đội không thay đổi (với user thường nhóm này cực nhiều nhóm con > gây chậm hệ thống)
    var defaultGroup = common.GetKendoDropDown('Online_VehicleGroup').selectedIndex;
    var enableRefreshRightPanel = that.enableRefreshRightPanel();

    var vehicleTypeID = -1;
    // Nếu cho phép tìm kiếm theo loại xe
    if (that.enableOnlineFindVehicleType) {
        vehicleTypeID = parseInt($("#Online_VehicleType").data("kendoDropDownList").value());
    }

    // Duyệt qua danh sách và refresh từng object
    if (listVehicle != null && listVehicle.length > 0) {
        if (that.listDataSOS == null)
            that.listDataSOS = [];

        //Làm thế này thiếu thằng focus nên sẽ làm thêm 1 cái riêng cho nó Sonnl 2019
        var bound = that.mapStraction.getBounds();
        //Có thể mở rộng bound sau , để todo
        var zoom = that.mapStraction.getZoom();
        //Quá khoảng cách này mới thay đổi vị trí xe nhá, gấp đôi khoảng cách của mức zoom
        //var distance = 591657550.5 / Math.pow(2, zoom + 4);//Công thức khoảng cách là 591657550.5 / Math.pow(2, zoom - 1) nhưng gấp 8 nên nhân 2 lên luôn đây là chuẩn
        //Đây là gần đúng
        var distance = 8 * Math.pow(2, 22 - zoom);
        //console.log("");
        //console.log("-----------------------------------------------");
        //console.log("Khoảng cách để thay đổi (m): " + distance);

        that.thaydoi = 0;
        that.khongthaydoi = 0;

        var arrVehicleId = that.dicPrivateCode.values();
        var indexed = -1;
        $.each(listVehicle, function (i, vehicle) {
            // Gọi hàm refresh từng object xe
            // su dung cluster
            if (that.IsUseClusterOnlineFinal) {
                that.isRunning = true;
                // R = center -> _northEast  Sonnl có cách dùng center và cách dùng distance dùng distance trước
                that.refreshItemInCluster(groupID, defaultGroup, stateID, vehicleTypeID, enableRefreshRightPanel, vehicle, distance, bound);//, bound, zoom

                indexed = arrVehicleId.indexOf(vehicle["1"]);
                if (indexed > -1) {
                    arrVehicleId.splice(indexed, 1);
                }

                //if (i == listVehicle.length - 1) {
                //    sw.stop();
                //    console.log("zoom: " + zoom);
                //    console.log("Total vehicle request: " + listVehicle.length);
                //    console.log("Time Duyet qua update lai marker + danh sach xe : " + (sw.stopTime - sw.startTime) / 1000);
                //    console.log("Thay đổi: " + that.thaydoi + " xe");
                //    console.log("Không thay đổi: " + that.khongthaydoi + " xe");
                //}
                that.isRunning = false;
            }
            // binh thuong
            else {
                that.refresh(groupID, defaultGroup, stateID, vehicleTypeID, enableRefreshRightPanel, vehicle);
            }

            //
            if (that.enableCompanyUseKienBoConfig) {
                var obj = that.dicMarkers.get(vehicle["1"]);

                // Duyet va khoi tao dicSplitPoint
                var oldPoint = {
                    lat: obj.marker.location.lat,
                    lng: obj.marker.location.lon

                };
                var newPoint = {
                    lat: obj.vehicle.Latitude,
                    lng: obj.vehicle.Longitude
                };

                var arrayPoint = that.convertPointToArray(oldPoint, newPoint);
                that.dicSplitPoint.put(obj.vehicle.VehicleID, arrayPoint);
            }
        });
        that.khongthaydoi = 0;
        that.thaydoi = 0;

        //var sw1 = new StopWatch();
        //sw1.start();

        //Nếu dùng cluster cập nhật lại những xe ko có cập nhật trong lượt nhưng do thay đổi vùng bao phải cập nhật lại
        if (that.IsUseClusterOnlineFinal && arrVehicleId.length > 0) {
            var sw = bound.getSouthWest();
            var ne = bound.getNorthEast();
            $.each(arrVehicleId, function (j, id) {
                if (that.heatMapMobile && that.heatMapMobile.markerCluster.listClusterMarkers != undefined && that.heatMapMobile.markerCluster.listClusterMarkers.length > 0) {
                    // Lấy đối tượng trong từ điển ra theo ID xe
                    // 1: VehicleID
                    var marker = that.heatMapMobile.markerCluster.listClusterMarkers.find(x => x.id == id);//marker in cluster
                    var objDic = that.dicMarkers.get(id);//marker trong tu dien
                    // Nếu đã có trong từ điển và được phép hiển thị marker trên bản đồ và chưa được update => thì mới update
                    if (marker != null && objDic != null && objDic.isShowMarker) {
                        if (marker.IsUpdated == null || marker.prevLocation == null) {
                            marker.IsUpdated = true;
                            marker.prevLocation = marker.location;
                            return;
                        }
                        // Gọi hàm map lại đối tượng (xem lại mem phải chỉnh lại tí)
                        if (!that.enableCompanyUseKienBoConfig && !marker.IsUpdated) {
                            var dc = that.map.distance(marker.prevLocation, marker.location);
                            //Lớn hơn khoảng cách
                            if (dc > distance) {
                                //Nằm trong vùng bound mới chơi không thì thôi
                                if (that.checkPointInRetangle(marker.location.lat, marker.location.lng, sw.lat, sw.lng, ne.lat, ne.lng)
                                    || that.checkPointInRetangle(marker.prevLocation.lat, marker.prevLocation.lng, sw.lat, sw.lng, ne.lat, ne.lng)
                                ) {
                                    marker.update();
                                    that.thaydoi = that.thaydoi + 1;
                                    marker.prevLocation = marker.location;
                                    marker.IsUpdated = true;
                                }
                                else {
                                    that.khongthaydoi = that.khongthaydoi + 1;
                                }
                            }
                            else {
                                that.khongthaydoi = that.khongthaydoi + 1;
                            }
                        }
                    }
                }
            });
        }

        if (that.listDataSOS.length > 0) {
            SingletonWarning.getInstance().dataPushList(that.listDataSOS);
            that.listDataSOS = [];
        }

        var count = that.listCurrentDisplay.keys().length;
        $("#spCurrent").html(count);
    }

    if (that.enableCompanyUseKienBoConfig) {

        if (that.dicSplitPoint.size() > 0) {
            $(document).stopTime("XuLyKienBo");
            var velocyConfig = (that.stepPointDelta) * (that.secondConfigRequest / that.stepPointConfig);

            //console.log("velocyConfig: " + velocyConfig);
            that.inteTime = 0;
            $(document).everyTime(that.inteTime.toString() + "ms", "XuLyKienBo", function () { that.processKienBo(velocyConfig); });
        }
    }

    //var current = new Date();
    //10p cập nhật 1 lần thôi
    if (that.UseMeterState) {// && (current - that.lastSyncMeterState) > 60000
        that.tblCountByState = [];
        for (var i = 0; i < 11; i++) {
            that.tblCountByState.push(0);
        }
        that.dicMarkers.each(function (key, value) {
            that.countByState(value.vehicle);
        });

        //that.lastSyncMeterState = current;
        for (var s = 0; s < that.tblCountByState.length; s++) {
            $('#useMeterStatus span[status="' + (s + 1) + '"]').html(that.tblCountByState[s]);
        }
        console.log("Sync: " + that.tblCountByState);
    }
    //sw.stop();
    //console.log("RS: " + (sw.stopTime - sw.startTime) / 1000);
};

/* 
* $Author$		trungtq
* Tạo từng dòng dữ liệu
*/
VehicleOnlineManager.prototype.renderRow = function (vehicle) {
    var that = this;

    // Tạo table row
    var tr = $(document.createElement('tr'));
    tr.attr("id", "tr_" + vehicle.VehicleID);
    tr.css({ "display": "" });

    // td icon xe
    var td_Icon = $(document.createElement('td'));
    td_Icon.attr("role", "gridcell");

    var img = $(document.createElement('img'));
    img.attr("id", vehicle.VehicleID + "_icon");
    img.attr("src", that.parseVehicleIcon(vehicle));
    img.attr("alt", "");
    img.attr("width", "25px");
    img.attr("height", "25px");
    td_Icon.append(img);

    // td số hiệu xe
    var td_privateCode = $(document.createElement('td'));
    td_privateCode.attr("id", vehicle.VehicleID + "_plate");
    td_privateCode.addClass('text-center');
    td_privateCode.attr("role", "gridcell");
    td_privateCode.html(vehicle.PrivateCode);

    // Nếu Xe thiếu thông tin TCĐB và cấu hình cho phép hiển thị thông tin ! *sign Đăng kí sự kiện click!
    if (onlineMap.showMissingVehicleInfo && vehicle.IsLostVehicleInfo) {
        tr.bind({
            mousedown: function (e) {
                e = e ? e : event;
                if (e.button == 2 || e.button == 3) {
                    var x = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
                    var y = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
                    that.rightMenuVehicle.showAt({
                        x: x, y: y
                    });

                    // Lay doi tuong lam viec hien tai.
                    that.currentVehicle = vehicle;
                }
            },
            contextmenu: function () {
                return false;
            },
            click: function (e) {
                // Nếu chưa có  thông tin BGT //*sign
                $('#tblVehicleList tbody tr').each(function () {
                    if ($(this).hasClass('colorActive')) {
                        $(this).removeClass('colorActive');
                    }
                });

                // Active color
                $(this).addClass('colorActive');

                // Panto đến xe
                //that.panTo(vehicle.VehicleID);
                //mở form khai báo thông tin
                SingletonVehicleDeclarationManager.getInstance().init(vehicle.VehicleID + ',' + vehicle.PrivateCode + ',' + vehicle.VehiclePlate);
                $("#Online_Vehicles").data("kendoComboBox").text(vehicle.PrivateCode + " - " + vehicle.VehiclePlate);

                if (that.IsUseClusterOnlineFinal) {
                    setTimeout(function () {
                        that.inits.refresh();
                    }, 0.1);
                }
            }
        });
        var td_lock = $(document.createElement('td'));
        td_lock.attr('colspan', "2");
        td_lock.attr('style', "color:red");
        td_lock.addClass('text-center');
        td_lock.attr("role", "gridcell");
        td_lock.html("Xe thiếu thông tin");
        tr.append(td_Icon);
        tr.append(td_privateCode);
        tr.append(td_lock);
    }

    else { // Xe đã cung cấp thông tin BGT rồi
        // Nếu xe không bị khóa và còn phí dịch vụ
        if (!vehicle.IsLocked && vehicle.LevelID < that.messageIds.Level3) {
            tr.bind({
                mousedown: function (e) {
                    e = e ? e : event;
                    if (e.button == 2 || e.button == 3) {
                        var x = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
                        var y = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));

                        // Hiện menu chuột phải
                        that.rightMenuVehicle.showAt({
                            x: x, y: y
                        });

                        // Lấy đối tượng xe làm việc hiện tại.
                        that.currentVehicle = vehicle;
                    }
                },
                contextmenu: function () {
                    return false;
                },
                click: function (e) {
                    // Bỏ hết màu active cho các dòng
                    $('#tblVehicleList tbody tr').each(function () {
                        if ($(this).hasClass('colorActive')) {
                            $(this).removeClass('colorActive');
                        }
                    });
                    // Gán lại màu cho các dòng.
                    $(this).addClass('colorActive');

                    // Panto đến xe
                    that.panTo(vehicle.VehicleID);



                    // Gán ComboBox xe nào hoạt động
                    $("#Online_Vehicles").data("kendoComboBox").text(vehicle.PrivateCode + " - " + vehicle.VehiclePlate);

                    if (that.IsUseClusterOnlineFinal) {
                        setTimeout(function () {
                            that.inits.refresh();
                        }, 0.1);
                    }
                }
            });

            // Xe sắp đến hạn thu phí
            if (vehicle.LevelID == that.messageIds.Level1) {
                var td_lock = $(document.createElement('td'));
                td_lock.attr('colspan', "2");
                td_lock.attr('style', "color:red");
                td_lock.addClass('text-center');
                td_lock.addClass('markID');
                td_lock.attr("role", "gridcell");
                td_lock.html(LanguageManager.getText("VehicleCharge_NearExpiryService"));
                tr.append(td_Icon);
                tr.append(td_privateCode);
                tr.append(td_lock);
                if (that.BAP_CONFIG) {
                    td_lock.css('color', 'blue');
                }
            }
            // Maybe Level == 0 normal
            else if (vehicle.LevelID != that.messageIds.Level2) {
                // td vận tốc
                var td_velocity = $(document.createElement('td'));
                td_velocity.attr('id', vehicle.VehicleID + "_velocity");
                td_velocity.addClass('text-center');
                td_velocity.attr("role", "gridcell");
                td_velocity.html(vehicle.VelocityGPS);

                // td thời gian GpsTime
                var td_time = $(document.createElement('td'));
                td_time.attr('id', vehicle.VehicleID + '_time');
                td_time.addClass('text-center');
                td_time.attr("role", "gridcell");
                // GpsTime > VehicleTime
                td_time.html(FormatHelper.formatTimeConfigs(vehicle.VehicleTime, this.isDisplaySeconds));      // Format lại đoạn này
                // Add vào tr
                tr.append(td_Icon);
                tr.append(td_privateCode);
                tr.append(td_velocity);
                tr.append(td_time);
            }
            // Level == 2, Xe hết phí dịch vụ - giới hạn
            else {
                var td_lock = $(document.createElement('td'));
                td_lock.attr('colspan', "2");
                td_lock.attr('style', "color:red");
                td_lock.addClass('text-center');
                td_lock.attr("role", "gridcell");
                //*sign
                if (that.BAP_CONFIG) {
                    var date = new Date(parseInt(vehicle.MaturityDate.substr(6)));
                    date.setDate(date.getDate() + 1);//http://jira.binhanh.com.vn:82/browse/TAXINEW-381
                    var datefull = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + '/' + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + '/' + date.getFullYear();
                    td_lock.html(' Xe nợ phí từ: ' + datefull);
                    if (that.IsHoangGia) {
                        td_lock.html(' Xe nợ phí ');
                    }
                } else {
                    var vehicleServiceInfo = common.ExcuteAjax_ReturnData("/Online/GetVehicleServiceChargeByVehicleID", {
                        vehicleID: vehicle.VehicleID.toString()
                    });
                    if (vehicleServiceInfo != null) {
                        var date = new Date(parseInt(vehicleServiceInfo.ExpiredDate.substr(6)));
                        date.setDate(date.getDate() + 1);//http://jira.binhanh.com.vn:82/browse/TAXINEW-381
                        var datefull = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + '/' + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + '/' + date.getFullYear();
                        td_lock.html(' Xe nợ phí từ: ' + datefull);
                        if (that.IsHoangGia) {
                            td_lock.html(' Xe nợ phí ');
                        }
                    }
                    else td_lock.html(LanguageManager.getText("VehicleCharge_ExpiredService"));
                }
                tr.append(td_Icon);
                tr.append(td_privateCode);
                tr.append(td_lock);
            }
        }

        // Trường hợp xe không bị khóa và (LevelID = 3 hoặc LevelID = 128k)
        else if ((vehicle.LevelID == that.messageIds.Level3 || vehicle.LevelID == that.messageIds.LevelLock) && !vehicle.IsLocked) {
            if (that.BAP_CONFIG) { // Khi bật BA_config
                tr.bind({
                    //*sign Sự kiện click ra hiện trạng xe
                    click: function (e) {
                        // Nếu chưa có  thông tin BGT
                        $('#tblVehicleList tbody tr').each(function () {
                            if ($(this).hasClass('colorActive')) {
                                $(this).removeClass('colorActive');
                            }
                        });
                        // Active color
                        $(this).addClass('colorActive');
                        that.keyPanTo = 0;
                        $("#CurrentStatus").hide();
                        that.infoWindoGeneratorCallback(vehicle);
                    }
                });
                // td vận tốc
                var td_lock = $(document.createElement('td'));
                td_lock.attr('colspan', "2");
                td_lock.attr('style', "color:red");
                td_lock.addClass('text-center');
                td_lock.attr("role", "gridcell");

                // LevelID = 128 => Thông báo xe dừng dịch vụ
                if (vehicle.LevelID == that.messageIds.LevelLock) {
                    td_lock.html("Xe đã dừng dịch vụ.");
                    if (that.currentXNCode === 819)//*sign
                        td_lock.html("Tạm dừng dịch vụ.");
                } else {
                    td_lock.html("Xe bị khóa, chưa đóng phí");
                }

                // Add vào tr
                tr.append(td_Icon);
                tr.append(td_privateCode);
                tr.append(td_lock);
            } else {
                tr.bind({
                    mousedown: function (e) {
                        e = e ? e : event;
                        if (e.button == 2 || e.button == 3) {
                            var x = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
                            var y = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));

                            // Hiện menu chuột phải
                            that.rightMenuVehicle.showAt({
                                x: x, y: y
                            });

                            // Lấy đối tượng xe làm việc hiện tại.
                            that.currentVehicle = vehicle;
                        }
                    },
                    contextmenu: function () {
                        return false;
                    },
                    click: function (e) {
                        // Nếu chưa có  thông tin BGT
                        $('#tblVehicleList tbody tr').each(function () {
                            if ($(this).hasClass('colorActive')) {
                                $(this).removeClass('colorActive');
                            }
                        });

                        // Active color
                        $(this).addClass('colorActive');
                        that.keyPanTo = 0;
                        $("#CurrentStatus").show();
                        that.infoWindoGeneratorCallback(vehicle);
                    }
                });

                // td vận tốc
                var td_velocity = $(document.createElement('td'));
                td_velocity.attr('id', vehicle.VehicleID + "_velocity");
                td_velocity.addClass('text-center');
                td_velocity.attr("role", "gridcell");
                td_velocity.html(vehicle.VelocityGPS);

                // td thời gian GpsTime
                var td_time = $(document.createElement('td'));
                td_time.attr('id', vehicle.VehicleID + '_time');
                td_time.addClass('text-center');
                td_time.attr("role", "gridcell");
                //GpsTime > VehicleTime
                td_time.html(FormatHelper.formatTimeConfigs(vehicle.VehicleTime, this.isDisplaySeconds));      // Format lại đoạn này
                // Add vào tr
                tr.append(td_Icon);
                tr.append(td_privateCode);
                tr.append(td_velocity);
                tr.append(td_time);
            }

        }
        else {
            tr.bind({
                click: function (e) {
                    // Nếu chưa có  thông tin BGT
                    $('#tblVehicleList tbody tr').each(function () {
                        if ($(this).hasClass('colorActive')) {
                            $(this).removeClass('colorActive');
                        }
                    });

                    // Active color
                    $(this).addClass('colorActive');
                    that.keyPanTo = 0;
                    $("#CurrentStatus").show();
                    that.infoWindoGeneratorCallback(vehicle);
                }
            });
            // td vận tốc
            var td_lock = $(document.createElement('td'));
            td_lock.attr('colspan', "2");
            td_lock.attr('style', "color:red");
            td_lock.addClass('text-center');
            td_lock.attr("role", "gridcell");
            td_lock.html(LanguageManager.getText("Online_VehicleLock"));
            // Add vào tr
            tr.append(td_Icon);
            tr.append(td_privateCode);
            tr.append(td_lock);
        }
    }
    return tr;
};


/* 
* $Author$		trungtq
* Set ẩn hiện từng dòng
*/
VehicleOnlineManager.prototype.setVisibleRow = function (vehicleID, isShow) {
    if (isShow == true) {
        $("#tr_" + vehicleID).show();
    }
    else {
        $("#tr_" + vehicleID).hide();
    }
}

/* 
* $Author$		trungtq
* Đổi màu của active row và scroll tới
*/
VehicleOnlineManager.prototype.setActiveRow = function (vehicle) {
    try {

        // Scroll tới vị trí dựa vào id;
        $("#tr_" + vehicle.VehicleID).scrollIntoView(true);
        //window.saveScroll();
        // Move all css active row
        $('#tblVehicleList tbody tr').each(function () {
            $(this).removeClass();
        });

        // Add class active.
        $("#tr_" + vehicle.VehicleID).addClass('colorActive');

        //Remove notify row by v and t
        var trNew = $("#tr_" + vehicle.VehicleID);
        if (this.BAP_CONFIG && vehicle.LevelID == this.messageIds.Level1 && trNew.find('.markID').length == 1) {
            //Turn on V and time
            trNew.find('.markID').remove();
            //VT
            var td_velocity = $(document.createElement('td'));
            td_velocity.attr('id', vehicle.VehicleID + "_velocity");
            td_velocity.addClass('text-center');
            td_velocity.attr("role", "gridcell");
            td_velocity.html(vehicle.VelocityGPS);
            // td thời gian GpsTime
            var td_time = $(document.createElement('td'));
            td_time.attr('id', vehicle.VehicleID + '_time');
            td_time.addClass('text-center');
            td_time.attr("role", "gridcell");
            //GpsTime > VehicleTime
            td_time.html(FormatHelper.formatTimeConfigs(vehicle.VehicleTime, this.isDisplaySeconds));      // Format lại đoạn này
            // Add vào tr
            trNew.append(td_velocity);
            trNew.append(td_time);
        }
    }
    catch (err) {
        console.log("Error: VehicleOnlineManager.prototype.setActiveRow():" + err);
    }
};

/* 
* $Author$		trungtq
* Cập nhật dữ liệu trên lưới
*/
VehicleOnlineManager.prototype.updateDataRow = function (vehicle) {
    var that = this;
    try {
        if ($('#tr_' + vehicle.VehicleID).hasClass('colorActive')) $('#tr_' + vehicle.VehicleID).scrollIntoView(true);
        // Cập nhật lại giá trị trên lưới nếu có thay đổi
        //window.loadScroll();
        $('#' + vehicle.VehicleID + '_icon').attr('src', that.setIconWithNoDir(vehicle));
        $('#' + vehicle.VehicleID + '_velocity').empty().html(vehicle.VelocityGPS);
        $('#' + vehicle.VehicleID + '_time').empty().html(FormatHelper.formatTimeConfigs(vehicle.VehicleTime, this.isDisplaySeconds));
    } catch (err) {
        console.log("VehicleOnlineManager.prototype.updateDataRow():" + err);
    }
}

/* 
* $Author$		hanhth
* So sanh cac trang thai mat tin hieu
* Uu tien so sanh GSM (su dung vehicleTime)-> GPS (gpsTime)
* Gia tri tra ve 0 binh thuong - (-1) Tin hieu yeu - (-2) mat GSM - (-3) Mat GPS
*/
VehicleOnlineManager.prototype.getLostStatusVehicle = function (gpsTime, vehicleTime) {
    var that = this;

    // Lấy ra số phút mất GPS (VehicleTime - GPSTime)
    var minuteOfLostGPS = Math.abs(DateDiff.inMinutes(new Date(parseInt(vehicleTime.substr(6))), new Date(parseInt(gpsTime.substr(6)))));

    // Lấy ra số phút mất tín hiệu (Now - VehicleTime)
    var minuteOfLostConnect = Math.abs(DateDiff.inMinutes(this.getServerTime(), new Date(parseInt(vehicleTime.substr(6)))));


    // Trường hợp số phút mất tín hiệu >= 150 phút => Mất tín hiệu 
    if (minuteOfLostConnect >= that.configLostGSM && that.configLostGSM > 0)
        return -2;
    else {
        // Trường hợp yếu GPS (>= 5 phút và <=150 phút)
        if (minuteOfLostGPS >= that.configMinuteWeakGPS && minuteOfLostGPS < that.configMinuteLostGPS && that.configMinuteWeakGPS > 0 && that.configMinuteLostGPS > 0)
            return -1;
        // Trả về mất GPS
        else if (minuteOfLostGPS >= that.configMinuteLostGPS && that.configMinuteLostGPS > 0)
            return -3;
    }
    return 0;
};

/* 
* $Author$		MinhND
* So sanh cac trang thai mat tin hieu
* Uu tien so sanh GSM (su dung vehicleTime)-> GPS (gpsTime)
* Gia tri tra ve 0 binh thuong - (-1) Tin hieu yeu - (-2) mat GSM - (-3) Mat GPS
*/
VehicleOnlineManager.prototype.getLostStatusVehicleCluster = function (gpsTime, vehicleTime) {
    var that = this;
    if (typeof gpsTime === 'string' || gpsTime instanceof String) {
        gpsTime = new Date(parseInt(gpsTime.substr(6)));
        vehicleTime = new Date(parseInt(vehicleTime.substr(6)));

    }

    // Lấy ra số phút mất GPS (VehicleTime - GPSTime)
    var minuteOfLostGPS = Math.abs(DateDiff.inMinutes(vehicleTime, gpsTime));

    // Lấy ra số phút mất tín hiệu (Now - VehicleTime)
    var minuteOfLostConnect = Math.abs(DateDiff.inMinutes(this.getServerTime(), vehicleTime));

    // Trường hợp số phút mất tín hiệu >= 150 phút => Mất tín hiệu 
    if (minuteOfLostConnect >= that.configLostGSM && that.configLostGSM > 0)
        return -2;
    else {
        // Trường hợp yếu GPS (>= 5 phút và <=150 phút)
        if (minuteOfLostGPS >= that.configMinuteWeakGPS && minuteOfLostGPS < that.configMinuteLostGPS && that.configMinuteWeakGPS > 0 && that.configMinuteLostGPS > 0)
            return -1;
        else if (minuteOfLostGPS >= that.configMinuteLostGPS && that.configMinuteLostGPS > 0)            // Trả về mất GPS
            return -3;
    }
    return 0;
};

/* 
* $Author$		hanhth
* Tinh toan lay icon xe
* Thu tu la: huong + cho ngoi + co/khong khach
*/
VehicleOnlineManager.prototype.setIcon = function (icon, seat, status, gpsTime, direction, vehicleTime) {
    var seats = seat < 7 ? 4 : 7;
    var wifi = this.getLostStatusVehicle(gpsTime, vehicleTime);
    switch (wifi) {
        case 0: {
            return "/Images/VehicleOnline/" + icon + "/xe" + direction + seats + this.getVehicleStatus(status) + ".png";
        }
        case -1: {
            return "/Images/VehicleOnline/" + icon + "/GPS_NO.png";
        }
        default: {
            return "/Images/VehicleOnline/" + icon + "/Xe6" + seats + "01.png";
        }
    }
};

/* 
* $Author$		hanhth
* Lay icon xe cho grid
*/
VehicleOnlineManager.prototype.setIconWithNoDir = function (vehicle) {
    var that = this;
    var seats = this.getSeat(vehicle.Seat);
    var wifi = this.getLostStatusVehicle(vehicle.GpsTime, vehicle.VehicleTime);
    switch (wifi) {
        case 0: {
            // xe quá tốc độ
            if (that.speedOver > 0 && vehicle.VelocityGPS >= that.speedOver) {
                var obj = new Object();
                obj.FK_AlertTypeID = 16;
                obj.PrivateCode = vehicle.PrivateCode;
                if (warningManager) {
                    warningManager.dataPush(obj);
                };
                return "/Images/VehicleOnline/" + vehicle.Icon + "/XeOS_" + seats + ".png";
            } else if (vehicle.Stopped >= vehicle.LimitMinutes && vehicle.LimitMinutes > 0) {
                return "/Images/VehicleOnline/" + vehicle.Icon + "/XeCBDungDoLau_" + seats + ".png";
            } else if (vehicle.CurrentEmptyKM > 0) { //sửa lại theo y/c (http://192.168.1.16:8089/browse/TAXINEW-149) bên Mem xử lý trả về 1 hoặc 0
                return "/Images/VehicleOnline/" + vehicle.Icon + "/XeCB_" + seats + ".png";
            } else
                return "/Images/VehicleOnline/" + vehicle.Icon + "/xe0" + seats + this.getVehicleStatus(vehicle.VehicleState) + ".png";
        }
        case -1: {
            return "/Images/VehicleOnline/" + vehicle.Icon + "/GPS_NO.png";
        }
        default: {
            return "/Images/VehicleOnline/" + vehicle.Icon + "/Xe6" + seats + "01.png";
        }
    }
};

/* 
* $Author$		hanhth
* Tra ve class css hien thi label (Copy tu longml)
*/
VehicleOnlineManager.prototype.getCssClass = function (vehicle) {
    var that = this;
    var cssClass = "";
    // Dung xe va acc on    
    if ((vehicle.MinuteOfManchineOnWhenStop != 0) && (vehicle.VelocityGPS <= 3)) cssClass = "stoppedandaccon";
    // Dung xe
    else if (vehicle.VelocityGPS <= 3) cssClass = "stopped";
    // Xe di chuyen
    else if (vehicle.VelocityGPS > 3 && vehicle.VelocityGPS <= this.speedOver) cssClass = "moving";
    // Canh bao
    else if (vehicle.VelocityGPS > this.speedOver && vehicle.VelocityGPS <= 100) cssClass = "warning";
    // Bao dong //if (vehicle.VelocityGPS > 100 && vehicle.VelocityGPS <= 150)
    else cssClass = "error";

    if (that.UseMeterState) {
        if ((vehicle.VehicleState & 2048) > 0) {
            cssClass += " meterlostconnect";
        }

        else if (vehicle.IsLockMeter) {
            cssClass += " meterlock";
        }
    }
    return cssClass;
}

/* 
* $Author$		hanhth
* 0 -> khong khach mo may
* 1 -> Co khach mo may
* 2 -> Ko khach tat may
* 3 -> Co khach tat may 
* (sXe & 8) == 0 =>  may bat 
* (sXe & 3) == 0 => ko khach
*/
VehicleOnlineManager.prototype.getVehicleStatus = function (status) {
    // May bat
    if ((status & 8) == 0) {
        if ((status & 3) == 0)
            return 0;
        else
            return 1;
    } else {
        if ((status & 3) == 0)
            return 2;
        else
            return 3;
    }
};

/* 
* $Author$		hanhth
* Di chuyen xe den giua man hinh
*/
VehicleOnlineManager.prototype.panTo = function (vehicleId) {
    try {

        isFocusVehicle = false;

        var that = this;
        vehicleId = parseFloat(vehicleId);
        // Gán ID xe cần theo dõi!
        that.keyPanTo = vehicleId;

        // Neu co su dung cluster

        if (that.IsUseClusterOnlineFinal) {
            if (that.heatMapMobile && that.heatMapMobile.markerCluster.listClusterMarkers != undefined && that.heatMapMobile.markerCluster.listClusterMarkers.length > 0) {
                var item = that.heatMapMobile.markerCluster.listClusterMarkers.find(x => x.id == vehicleId);
                if (item != null && item != undefined) {

                    // Set center tại vị trí marker
                    that.mapStraction.setCenter(item.location);
                    var obj = that.heatMapMobile.dicMarkerCluster.get(1).find(x => x.VehicleID == vehicleId);
                    if (obj == null || obj == undefined) {
                        return;
                    }

                    if (obj != null && obj != undefined) {
                        that.showPopupVehicleDetail(obj);
                        //  set active row
                        this.setActiveRow(obj);
                    }
                    // Nhấp nháy báo hiệu chọn xe
                    var currentLabel = item.attributes.labelClass;
                    item.setOptions({ labelClass: currentLabel + ' onclickMarker' });
                    item.update();
                    setTimeout(function () {
                        item.setOptions({ labelClass: currentLabel });
                        item.update();
                    }, 3000);
                    /*break;*/
                }
            }
        }
        else {

            // Lấy marker trong từ điển theo ID xe! Luồng bt
            var obj = that.dicMarkers.get(vehicleId);
            if (obj != null) {

                // Set center tại vị trí marker
                that.mapStraction.setCenter(obj.marker.location);

                // Nhấp nháy báo hiệu chọn xe
                var currentLabel = obj.marker.getAttribute("labelClass");
                obj.marker.setOptions({ labelClass: currentLabel + ' onclickMarker' });
                obj.marker.update();
                setTimeout(function () {
                    obj.marker.setOptions({ labelClass: currentLabel });
                    obj.marker.update();
                }, 3000);

                // Hiển thị khung hiện trạng chi tiết xe
                this.showPopupVehicleDetail(obj.vehicle);

                // trungtq: set active row
                this.setActiveRow(obj.vehicle);
            }
        }
    } catch (err) {
        console.log("VehicleOnlineManager.prototype.panTo:" + err);
    }
};

/* 
* $Author$		hanhth
* Kiem tra xe panto hay khong
*/
VehicleOnlineManager.prototype.checkPanTo = function (PK_VehicleID) {
    if (this.keyPanTo == PK_VehicleID) {
        this.panTo(PK_VehicleID);
    }
}

/* 
* $Author$		trungtq
* trungtq edit lại ngày 1/12/2014
* Kiểm tra trạng thái hiện tại của xe 
*/
VehicleOnlineManager.prototype.getVehicleCurrentStatus = function (vehicle) {
    try {
        var stateID = 0;
        // Lấy ra số phút mất tín hiệu
        var minuteOfLostConnect = Math.abs(DateDiff.inMinutes(this.getServerTime(), new Date(parseInt(vehicle.VehicleTime.substr(6)))));

        // Lấy ra số phút mất GPS (VehicleTime - GPSTime)
        var minuteOfLostGPS = Math.abs(DateDiff.inMinutes(new Date(parseInt(vehicle.VehicleTime.substr(6))), new Date(parseInt(vehicle.GpsTime.substr(6)))));

        // Xe mất tín hiệu
        if ((minuteOfLostConnect >= this.configLostGSM) || (minuteOfLostGPS >= this.configMinuteLostGPS)) {
            stateID = 3;
        }
        // Xe hoạt động (Xe không bị mất tín hiệu) 
        else if ((minuteOfLostConnect < this.configLostGSM) && (minuteOfLostGPS < this.configMinuteLostGPS)) {
            // Không khách: trạng thái & 3 = 0
            if ((vehicle.VehicleState & 3) == false) {
                stateID = 1;
            }
            // (Có khách: trạng thái & 3 > 0)
            else if (vehicle.VehicleState & 3 > 0) {
                stateID = 2;
            }
            // Di chuyển: phải là máy luôn bật (trạng thái xe & 8 = 0), v gps > 3
            else if (((vehicle.VehicleState & 8) == 0) && (vehicle.VelocityGPS > this.velocityBoundaryMoveStop)) {
                stateID = 4;
            }
            // Dừng đỗ : phải là máy bật hoặc tắt, vgps < = 3
            else if (vehicle.VelocityGPS <= this.velocityBoundaryMoveStop) {
                stateID = 5;
            }
            // Tắt máy: trạng thái & 8 > 0
            else if ((vehicle.VehicleState & 8) > 0) {
                stateID = 6;
            }
            // Nổ máy: trạng thái & 8 = 0
            else if ((vehicle.VehicleState & 8) == 0) {
                stateID = 7;
            }
        }
    }
    catch (err) {
        console.log("Error: VehicleOnlineManager.prototype.getVehicleCurrentStatus(): " + err);
    }
    return stateID;
};

/* 
* $Author$		hanhth
* Gen thong tin chi tiet xe *sign
*/
VehicleOnlineManager.prototype.infoWindoGenerator = function (obj, callback) {
    $("#VehicleStatus").html(LanguageManager.getText('VehicleOnline_Name') + ": " + obj.PrivateCode + "-" + obj.VehiclePlate);
    var that = this;
    $.ajax({
        type: 'GET',
        url: "/Online/InfoWindoGenerator",
        data: {
            isLocked: obj.IsLocked,
            privateCode: obj.PrivateCode,
            vehiclePlate: obj.VehiclePlate,
            latitude: obj.Latitude,
            longitude: obj.Longitude,
            gpsTime: FormatHelper.formatDateTime(obj.GpsTime),
            vehicleTime: FormatHelper.formatDateTime(obj.VehicleTime),
            seat: obj.Seat,
            vehicleID: obj.VehicleID,
            vehicleState: obj.VehicleState,
            minuteOfManchineOnWhenStop: obj.MinuteOfManchineOnWhenStop,
            velocityGPS: obj.VelocityGPS,
            velocityMechanical: obj.VelocityMechanical,
            configLostGSM: that.configLostGSM,
            configMinuteWeakGPS: that.configMinuteWeakGPS,
            configMinuteLostGPS: that.configMinuteLostGPS,
            levelID: obj.LevelID
        },
        cache: false,
        success: function (result) {
            callback(result);
        }
    });
};

/* 
* $Author$		hanhth
* Gen thong tin chi tiet xe
*/
var lastIdVehicle = 0;

VehicleOnlineManager.prototype.infoWindoGeneratorCallback = function (obj) {
    var that = this;
    that.infoWindoGenerator(obj, function (result) {
        $("#StatusContent").html(result).promise().done(function () {
            // Chặn thông báo
            if (obj.LevelID == that.messageIds.Level2 || obj.LevelID == that.messageIds.Level3 || obj.LevelID == that.messageIds.LevelLock) {
                if (obj.LevelID == that.messageIds.Level2 && lastIdVehicle == obj.VehicleID) {
                } else {
                    // Hiện thị thông báo
                    wdnContent.open();
                    wdnContent.center();
                }
            }
            if (that.IsUseClusterOnlineFinal) {
                $("#CurrentStatus").show();
                $("#Online_Vehicles").data("kendoComboBox").text(obj.PrivateCode + " - " + obj.VehiclePlate);// Gán ComboBox xe được chọn lên text box xe.
            }
            lastIdVehicle = obj.VehicleID;

            $('#popupInfoID').unbind('click');

            $('#popupInfoID').bind('click', function () {

                $('div#AlertExpiredService.k-window-content.k-content').css('color', obj.LevelID == that.messageIds.Level1 ? 'black' : 'red');

                // Hiện thị thông báo
                wdnContent.open();
                wdnContent.center();
            });
        });
        $("#CurrentStatus").draggable({ cancel: "#VehicleStatus,#infoHelp", cursor: "text" });
        that.changeTab();
    });
};

/* 
* $Author$		longtq
* gen tab trên hiện trạng xe
*/
VehicleOnlineManager.prototype.changeTab = function () {
    var that = this;
    if (that.currentTab == "#tab2") {//nếu đang Tab2 (thông tin BGT đang được active)
        $('ul.tabs li:last-child').addClass('active');
        $('.block article').hide();
        $('.block article:last-child').show();
        $('ul.tabs li').on('click', function () {
            $('ul.tabs li').removeClass('active');
            $(this).addClass('active');
            $('.block article').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).show();
            that.currentTab = activeTab;
            return false;
        });
    }
    else {//Nếu tab1 (hiện trạng đang được active)
        $('ul.tabs li:first').addClass('active');
        $('.block article').hide();
        $('.block article:first').show();
        $('ul.tabs li').on('click', function () {
            $('ul.tabs li').removeClass('active');
            $(this).addClass('active');
            $('.block article').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).show();
            that.currentTab = activeTab;
            return false;
        });
    }

}

/* 
* $Author$		hanhth
* Lay dia chi theo google
*/
VehicleOnlineManager.prototype.getAddress = function (lat, lng) {
    var addressLang = LanguageManager.getText('Online_Address');
    addressLang = addressLang + ": " + MapHelper.getAddress(lat, lng);
    $("#VehicleAddressOnline").html(addressLang);
};

/* 
* $Author$		hanhth
* Hien thi popup chi tiet xe
*/

VehicleOnlineManager.prototype.showPopupVehicleDetail = function (obj) {
    this.infoWindoGeneratorCallback(obj);
    $("#CurrentStatus").css('top', '30%');
    $("#CurrentStatus").css('left', '28%');
    $("#CurrentStatus").show();
    if (this.BAP_CONFIG && (obj.LevelID == this.messageIds.Level3 || obj.LevelID == this.messageIds.LevelLock))
        $("#CurrentStatus").hide();
    else $("#CurrentStatus").show();
};

/* 
* $Author$		hanhth
* Hien thi popup chi tiet xe và focus trên lưới!
*/

VehicleOnlineManager.prototype.showPopupVehicleDetailCluster = function (obj) {
    var that = this;
    that.heatMapMobile.markerCluster.gridSize_ = that.heatMapMobile.gridSmallSizeCluster;
    that.map.setCenter(new google.maps.LatLng(obj.Latitude, obj.Longitude));
    that.map.setZoom(20);
    this.infoWindoGeneratorCallback(obj);
    $("#CurrentStatus").css('top', '30%');
    $("#CurrentStatus").css('left', '28%');
    $("#CurrentStatus").show();
    if (this.BAP_CONFIG && (obj.LevelID == this.messageIds.Level3 || obj.LevelID == this.messageIds.LevelLock))
        $("#CurrentStatus").hide();
    else $("#CurrentStatus").show();
};



/* 
* $Author$		hanhth
* Lay trang thai xe
*/
VehicleOnlineManager.prototype.getMachineStatus = function (status) {
    if ((status & 8) == 0)
        return LanguageManager.getText('Online_On');
    else
        return LanguageManager.getText('Online_Off');
};

/* 
* $Author$		hanhth
* Tra ve co khach hay ko (text)
*/
VehicleOnlineManager.prototype.getVehicleTripStatus = function (status) {
    if ((status & 3) == 0)
        return LanguageManager.getText('Online_EmptyPasseger');
    else
        return LanguageManager.getText('Online_WithPasseger');
};

/* 
* $Author$		hanhth
* Khi socket timeout
*/
VehicleOnlineManager.prototype.sendMessageTimeOut = function () {
    common.DisplayNotification("Server không có phản hồi. Hãy thử tải lại trang", common.notification_type_error);
};

/* 
* $Author$		hanhth
* Tinh toan so ghe cua xe
*/
VehicleOnlineManager.prototype.getSeat = function (seat) {
    return (seat < 7 ? 4 : 7);
};

/* 
* $Author$		hanhth
* Tra ve server time
*/
VehicleOnlineManager.prototype.getServerTime = function () {
    // trungtq: lấy thời gian từ server thay vì từ client
    return SingletonServerTimeHelper.getInstance().getDateTime();
};

/* 
* $Author$		trungtq
* Map thuộc tính trả về dạng json từ server sang dạng client có thể hiểu và dễ code
*/
VehicleOnlineManager.prototype.mapJsonVehicleToVehicleOnlineInit = function (jsonVehicle) {
    var vehicleOnline = new VehicleOnlineModel();
    vehicleOnline.VehicleID = jsonVehicle["1"];                   // ID xe => p1
    vehicleOnline.VehicleTime = jsonVehicle["2"];                 // Thời gian xe trả về 
    vehicleOnline.GpsTime = jsonVehicle["3"];                     // Thời gian GPS
    vehicleOnline.Longitude = jsonVehicle["4"];                   // Kinh độ
    vehicleOnline.Latitude = jsonVehicle["5"];                    // Vĩ độ
    vehicleOnline.VelocityGPS = jsonVehicle["6"];                 // Vận tốc GPS
    vehicleOnline.VelocityMechanical = jsonVehicle["7"];          // Vận tốc cơ
    vehicleOnline.VehicleDirection = jsonVehicle["8"];            // Hướng
    vehicleOnline.VehicleState = jsonVehicle["9"];                // Trạng thái xe
    vehicleOnline.OtherState = jsonVehicle["10"];                 // Trạng thái khác
    vehicleOnline.MinuteOfManchineOnWhenStop = jsonVehicle["11"]; // Số phút dừng đỗ bật máy
    vehicleOnline.HighEmptyKm = jsonVehicle["12"];                // Cảnh báo km rỗng cao
    vehicleOnline.LimitMinutes = jsonVehicle["13"];               // Giới hạn số phút dừng đỗ
    vehicleOnline.KmEmpty = jsonVehicle["14"];                    // Km rỗng trong ngày/ ca
    vehicleOnline.Stopped = jsonVehicle["15"];                    // Số phút dừng đỗ
    vehicleOnline.IsLocked = jsonVehicle["16"];                   // Có bị khóa không? 
    vehicleOnline.LevelID = jsonVehicle["17"] == null ? 0 : jsonVehicle["17"];
    vehicleOnline.CurrentEmptyKM = jsonVehicle["18"];                                                 //KM rỗng hiện thời
    vehicleOnline.IsLostVehicleInfo = jsonVehicle["19"] == null ? true : jsonVehicle["19"];           // Xe thieu thong tin 
    vehicleOnline.VehiclePlate = jsonVehicle["40"];                                                   // Biển số xe
    vehicleOnline.PrivateCode = jsonVehicle["41"];                                                    // Số hiệu xe
    vehicleOnline.Seat = jsonVehicle["42"];                                                           // Số chỗ
    vehicleOnline.VehicleGroupID = jsonVehicle["43"];                                                 // ID nhóm xe
    vehicleOnline.Icon = jsonVehicle["44"];                                                           // Đường dẫn Icon
    vehicleOnline.VehicleTypeID = jsonVehicle["45"];                                                  // Gán ID loại xe
    // ChargeFee
    vehicleOnline.OutOfFeeDate = jsonVehicle["51"];                                                     // Ngày gia hạn
    vehicleOnline.MaturityDate = jsonVehicle["54"];                                                     // Ngày hết hạn
    vehicleOnline.IsLockMeter = jsonVehicle["56"];                                                      //Khóa đồng hồ
    return vehicleOnline;
};

/* 
* $Author$		trungtq
* Map thuộc tính trả về dạng json từ server sang dạng client có thể hiểu và dễ code
*/
VehicleOnlineManager.prototype.mapJsonVehicleToVehicleOnlineRefresh = function (obj, jsonVehicle) {
    try {
        obj.VehicleTime = jsonVehicle["2"];                       // Thời gian xe trả về 
        obj.GpsTime = jsonVehicle["3"];                           // Thời gian GPS
        obj.Longitude = jsonVehicle["4"];                         // Kinh độ
        obj.Latitude = jsonVehicle["5"];                          // Vĩ độ
        obj.VelocityGPS = jsonVehicle["6"];                       // Vận tốc GPS
        obj.VelocityMechanical = jsonVehicle["7"];                // Vận tốc cơ
        obj.VehicleDirection = jsonVehicle["8"];                  // Hướng
        obj.VehicleState = jsonVehicle["9"];                      // Trạng thái xe
        obj.OtherState = jsonVehicle["10"];                       // Trạng thái khác
        obj.MinuteOfManchineOnWhenStop = jsonVehicle["11"];       // Số phút dừng đỗ bật máy
        obj.CurrentEmptyKM = jsonVehicle["18"];                   // KM rỗng hiện thời
        obj.KmEmpty = jsonVehicle["14"];                          // Km rỗng trong ngày/ ca
        obj.Stopped = jsonVehicle["15"];                          // Số phút dừng đỗ
        obj.ttk = jsonVehicle["20"];                              // Đang dùng check có cảnh báo SOS ko.
        obj.tgsos = jsonVehicle["21"];                            // Thời gian cảnh báo SOS
        obj.kdsos = jsonVehicle["22"];                            // Kinh độ SOS
        obj.vdsos = jsonVehicle["23"];                            // Vĩ độ SOS

        //obj.PrivateCode = jsonVehicle["25"];
        //obj.Icon = "";
        //obj.Icon = this.setIconWithNoDir(obj);                   
        // ChargeFee
        obj.OutOfFeeDate = jsonVehicle["51"];                     // Ngày gia hạn
        obj.MaturityDate = jsonVehicle["54"];                     // Ngày hết hạn
        obj.IsLockMeter = jsonVehicle["56"] == null ? obj.IsLockMeter : jsonVehicle["56"];
        return obj;
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.mapJsonVehicleToVehicleOnlineRefresh: " + err);
    }
    return null;
};

/* 
* $Author$		hanhth
* Lấy thông tin chi tiết xe
*/
VehicleOnlineManager.prototype.getVehicleDetail = function (vehiclePlate) {
    var that = this;
    var data = '';

    that.getVehicleDetailCallback(vehiclePate, function (datas) {
        data = datas;
    });
    return data;
};

/* 
* $Author$		hanhth
* Lấy thông tin chi tiết xe
*/
VehicleOnlineManager.prototype.getVehicleDetailCallback = function (vehiclePlate, callback) {
    $.ajax({
        type: 'GET',
        url: "/Online/GetVehicleDetail",
        dataType: 'json',
        data: {
            vehiclePlate: vehiclePlate
        },
        async: false,
        success: function (result) {
            if (result != null) {
                callback(result);
            }
        },
        error: function (error) {
            console.log("VehicleOnlineRequestServer.prototype.getVehicleDetail(): " + error);
        }
    });
};

/* 
* $Author$		hanhth
* Lấy thông tin chi tiết xe
*/
VehicleOnlineManager.prototype.checkViewVehicleDetail = function () {
    var data = '';
    $.ajax({
        type: 'GET',
        url: "/Online/CheckViewVehicleDetail",
        dataType: 'json',
        async: false,
        success: function (result) {
            if (result != null) {
                data = result;
            }
        },
        error: function (error) {
            console.log("VehicleOnlineRequestServer.prototype.checkViewVehicleDetail(): " + error);
        }
    });
    return data;
};

showInfoRevenue = function () {
    $("#infoRevenue").data("kendoWindow").center().open();
}

VehicleOnlineManager.prototype.naturalCompare = function (aa, bb) {
    // So sánh theo PrivateCode (trả về Json tên thuộc tính là P41
    var a = aa["41"];
    var b = bb["41"];
    var ax = [], bx = [];

    a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
        ax.push([$1 || Infinity, $2 || ""]);
    });

    b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
        bx.push([$1 || Infinity, $2 || ""]);
    });

    while (ax.length && bx.length) {
        var an = ax.shift();
        var bn = bx.shift();
        var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
        if (nn) return nn;
    }

    return ax.length - bx.length;
}

VehicleOnlineManager.prototype.naturalCompare1 = function (aa, bb) {
    // So sánh theo PrivateCode (trả về Json tên thuộc tính là P41
    var aParts = aa["41"];
    var bParts = bb["41"];
    partCount = aParts.length, i;

    if (aParts.length != bParts.length)
        return aParts.length - bParts.length;

    for (i = 0; i < partCount; i++) {
        if (aParts[i] != bParts[i])
            return +aParts[i] - +bParts[i];
    }
    //Exactly the same
    return 0;
}

VehicleOnlineManager.prototype.compare = function (aa, bb) {
    // So sánh theo PrivateCode (trả về Json tên thuộc tính là P41
    var a = aa["41"];
    var b = bb["41"];
    if ($.isNumeric(a) && $.isNumeric(b)) {
        if (parseInt(a) > parseInt(b)) return 1;
        if (parseInt(a) < parseInt(b)) return -1;
        if (parseInt(a) > parseInt(b)) return 0;
    }
    if ($.isNumeric(a) && !$.isNumeric(b))
        return -1;
    if (!$.isNumeric(a) && $.isNumeric(b))
        return 1;
    return a.toLowerCase().localeCompare(b.toLowerCase());
}

VehicleOnlineManager.prototype.compareABC = function (aa, bb) {
    // So sánh loại khóa trước!
    var levelA = aa["17"];
    var levelB = bb["17"];
    if (levelA === 128 && levelB !== 128)
        return 1;
    if (levelA !== 128 && levelB === 128)
        return -1;

    // So sánh theo PrivateCode (trả về Json tên thuộc tính là P41
    var a = aa["41"];
    var b = bb["41"];
    if ($.isNumeric(a) && $.isNumeric(b)) {
        if (parseInt(a) > parseInt(b)) return 1;
        if (parseInt(a) < parseInt(b)) return -1;
        if (parseInt(a) > parseInt(b)) return 0;
    }
    if ($.isNumeric(a) && !$.isNumeric(b))
        return -1;
    if (!$.isNumeric(a) && $.isNumeric(b))
        return 1;

    return a.toLowerCase().localeCompare(b.toLowerCase());
};
var mapManager;
var warningManager;
//socket.event = new Object();
//socket.event.subs = new Object();
//socket.event.data = new Object();
//socket.on('subs', function (data) {
//    if (socket.event.subs.begin && typeof socket.event.subs.begin == 'function')
//        socket.event.subs.begin();
//    if (socket.event.subs.each && typeof socket.event.subs.each == 'function')
//        for (var x in data)
//            socket.event.subs.each(data[x]);
//    if (socket.event.subs.end && typeof socket.event.subs.end == 'function')
//        socket.event.subs.end();
//});
//socket.on('error', function () {
//    common.DisplayNotification("Lỗi kết nối đến server. Hãy thử tải lại trang", common.notification_type_error);
//});

//// trungtq comment Chi co cho nay de client nhan
//socket.on('data', function (data) {
//    if (mapManager) {
//        mapManager.refresh(mapManager.currentGroupID, mapManager.currentDefaultGroupID,mapManager.currentState, mapManager.currentVehicleTypeID, mapManager.currentEnableRefreshRightPanel, data);
//    }
//});

/* 
* $Author$		hanhth
* Đối tượng Push 
* Tên variable: chu_cai_thuong_co_dau_gach_chan
* Tên methods, properties: in-caps.
*/
var VehicleOnlinePushManager = function (map, warning) {
    mapManager = map;
    warningManager = warning;
};

/* 
* $Author$		hanhth
* Init khoi tao dang ky cac channel voi server nodejs
*/
VehicleOnlinePushManager.prototype.init = function () {
    //Bỏ đi không cần nữa vì đã init ở quickmenu
    //var that = this;
    //// Duyệt qua từ điển và đăng ký sub
    //mapManager.dicMarkers.each(function (key, value) {
    //    if (!value.IsLocked) {
    //        that.add(key, 'sub');
    //    }
    //});

    //$.each(mapManager.dicMarkers.keys(), function (index, value) {
    //    that.add(value, 'sub');
    //});
};


/* 
* $Author$		hanhth
* Goi toi server thuc hien lenh: 
* t =  sub | subs
* e = key
*/
VehicleOnlinePushManager.prototype.add = function (e, t) {
    //socket.emit(t, e);
}
;
/* 
* $Author$		hanhth
* Đối tượng Request
* Tên variable: chu_cai_thuong_co_dau_gach_chan
* Tên methods, properties: in-caps.
* http://stackoverflow.com/questions/1457690/jquery-ajax-success-anonymous-function-scope
*/
var VehicleOnlineRequestServer = function (map) {
    this.mapManager = map;
    this.isRunning = false;
};

/* 
* $Author$		hanhth
* Khởi tạo đối tượng request 
* trungtq sửa lại 1 tí để cho chạy bất đồng bộ
*  http://stackoverflow.com/questions/1457690/jquery-ajax-success-anonymous-function-scope
*/
VehicleOnlineRequestServer.prototype.init = function () {
    var that = this;
    that.getdata(function (datas) {
        // Gọi MapManager khởi tạo
        that.mapManager.init(datas);
    });
};

/* 
* $Author$		hanhth
* Click chi tiết xe
*/
VehicleOnlineRequestServer.prototype.detail = function () {
    this.mapManager.detail();
};

/* 
* $Author$		hanhth
* Lấy dữ liệu từ server
*/
VehicleOnlineRequestServer.prototype.getdata = function (callback) {
    try {
        $.ajax({
            type: 'GET',
            url: "/Online/RequestInit",
            dataType: 'json', 
            async: false,
            success: function (result) {                
                if (result != null) {
                    callback(result.data);
                }                
            },
            error: function (error) {
                console.log("VehicleOnlineRequestServer.prototype.getdata(): " + error);
            }
        });
    }
    catch (err) {
        console.log("VehicleOnlineRequestServer.prototype.getdata():" + err);
    }
}


/* 
* $Author$		trungtq
* Lấy dữ liệu từ server
* http://stackoverflow.com/questions/1457690/jquery-ajax-success-anonymous-function-scope
*/
VehicleOnlineRequestServer.prototype.getdataSyn = function (callback, secondConfigRequest) {
    var that = this;
    try {
        that.isRunning = true;
        $.ajax({
            type: 'GET',
            url: "/Online/RequestSyn",
            data: {},
            dataType: 'json',
            cache: false,
            timeout: secondConfigRequest * 0.9,
            success: function (result) {
                if (result != null) {
                    callback(result.data);
                }                
            },
            error: function (error) {
                that.isRunning = false;
                console.log("VehicleOnlineRequestServer.prototype.getdataSyn(): " + error);
            }
        });
    }
    catch (err) {
        that.isRunning = false;
        console.log("catch VehicleOnlineRequestServer.prototype.getdataSyn():" + err);
    }
};

/* 
* $Author$		hanhth
* Refresh 
*/
VehicleOnlineRequestServer.prototype.refresh = function (secondConfigRequest) {
    secondConfigRequest == null ? 15000 : secondConfigRequest;
    var that = this;
    if (!that.isRunning) {
        //Khai báo call back trước!
        var callback = function (datas) {
            that.isRunning = false;
            /*if(that.mapManager.IsUseClusterOnlineFinal) {
                //console.log('Refresh : ' + that.mapManager.IsUseClusterOnlineFinal);
                //Phải map lại object trước khi truyền vào Cluster!
                var convertData = [];
                if (datas != null) {
                    for (var i = 0; i < datas.length; i++) {
                        var vehicle = new VehicleOnlineModel();
                        var convert = that.mapManager.mapJsonVehicleToVehicleOnlineRefresh(vehicle, datas[i]);
                        convert.VehicleID = datas[i]["1"];
                        convert.id = convert.VehicleID;
                        convertData.push(convert);
                    }
                }                
                that.mapManager.refreshMultipleCluster(convertData);
            } else {
                that.mapManager.refreshMultiple(datas);
            } */
            that.mapManager.refreshMultiple(datas);
        };
        that.getdataSyn(callback, secondConfigRequest);
    }
};
;
/*! jPlayer 2.8.1 for jQuery ~ (c) 2009-2014 Happyworm Ltd ~ MIT License */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b(a.jQuery?a.jQuery:a.Zepto)}(this,function(a,b){a.fn.jPlayer=function(c){var d="jPlayer",e="string"==typeof c,f=Array.prototype.slice.call(arguments,1),g=this;return c=!e&&f.length?a.extend.apply(null,[!0,c].concat(f)):c,e&&"_"===c.charAt(0)?g:(this.each(e?function(){var e=a(this).data(d),h=e&&a.isFunction(e[c])?e[c].apply(e,f):e;return h!==e&&h!==b?(g=h,!1):void 0}:function(){var b=a(this).data(d);b?b.option(c||{}):a(this).data(d,new a.jPlayer(c,this))}),g)},a.jPlayer=function(b,c){if(arguments.length){this.element=a(c),this.options=a.extend(!0,{},this.options,b);var d=this;this.element.bind("remove.jPlayer",function(){d.destroy()}),this._init()}},"function"!=typeof a.fn.stop&&(a.fn.stop=function(){}),a.jPlayer.emulateMethods="load play pause",a.jPlayer.emulateStatus="src readyState networkState currentTime duration paused ended playbackRate",a.jPlayer.emulateOptions="muted volume",a.jPlayer.reservedEvent="ready flashreset resize repeat error warning",a.jPlayer.event={},a.each(["ready","setmedia","flashreset","resize","repeat","click","error","warning","loadstart","progress","suspend","abort","emptied","stalled","play","pause","loadedmetadata","loadeddata","waiting","playing","canplay","canplaythrough","seeking","seeked","timeupdate","ended","ratechange","durationchange","volumechange"],function(){a.jPlayer.event[this]="jPlayer_"+this}),a.jPlayer.htmlEvent=["loadstart","abort","emptied","stalled","loadedmetadata","canplay","canplaythrough"],a.jPlayer.pause=function(){a.each(a.jPlayer.prototype.instances,function(a,b){b.data("jPlayer").status.srcSet&&b.jPlayer("pause")})},a.jPlayer.timeFormat={showHour:!1,showMin:!0,showSec:!0,padHour:!1,padMin:!0,padSec:!0,sepHour:":",sepMin:":",sepSec:""};var c=function(){this.init()};c.prototype={init:function(){this.options={timeFormat:a.jPlayer.timeFormat}},time:function(a){a=a&&"number"==typeof a?a:0;var b=new Date(1e3*a),c=b.getUTCHours(),d=this.options.timeFormat.showHour?b.getUTCMinutes():b.getUTCMinutes()+60*c,e=this.options.timeFormat.showMin?b.getUTCSeconds():b.getUTCSeconds()+60*d,f=this.options.timeFormat.padHour&&10>c?"0"+c:c,g=this.options.timeFormat.padMin&&10>d?"0"+d:d,h=this.options.timeFormat.padSec&&10>e?"0"+e:e,i="";return i+=this.options.timeFormat.showHour?f+this.options.timeFormat.sepHour:"",i+=this.options.timeFormat.showMin?g+this.options.timeFormat.sepMin:"",i+=this.options.timeFormat.showSec?h+this.options.timeFormat.sepSec:""}};var d=new c;a.jPlayer.convertTime=function(a){return d.time(a)},a.jPlayer.uaBrowser=function(a){var b=a.toLowerCase(),c=/(webkit)[ \/]([\w.]+)/,d=/(opera)(?:.*version)?[ \/]([\w.]+)/,e=/(msie) ([\w.]+)/,f=/(mozilla)(?:.*? rv:([\w.]+))?/,g=c.exec(b)||d.exec(b)||e.exec(b)||b.indexOf("compatible")<0&&f.exec(b)||[];return{browser:g[1]||"",version:g[2]||"0"}},a.jPlayer.uaPlatform=function(a){var b=a.toLowerCase(),c=/(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/,d=/(ipad|playbook)/,e=/(android)/,f=/(mobile)/,g=c.exec(b)||[],h=d.exec(b)||!f.exec(b)&&e.exec(b)||[];return g[1]&&(g[1]=g[1].replace(/\s/g,"_")),{platform:g[1]||"",tablet:h[1]||""}},a.jPlayer.browser={},a.jPlayer.platform={};var e=a.jPlayer.uaBrowser(navigator.userAgent);e.browser&&(a.jPlayer.browser[e.browser]=!0,a.jPlayer.browser.version=e.version);var f=a.jPlayer.uaPlatform(navigator.userAgent);f.platform&&(a.jPlayer.platform[f.platform]=!0,a.jPlayer.platform.mobile=!f.tablet,a.jPlayer.platform.tablet=!!f.tablet),a.jPlayer.getDocMode=function(){var b;return a.jPlayer.browser.msie&&(document.documentMode?b=document.documentMode:(b=5,document.compatMode&&"CSS1Compat"===document.compatMode&&(b=7))),b},a.jPlayer.browser.documentMode=a.jPlayer.getDocMode(),a.jPlayer.nativeFeatures={init:function(){var a,b,c,d=document,e=d.createElement("video"),f={w3c:["fullscreenEnabled","fullscreenElement","requestFullscreen","exitFullscreen","fullscreenchange","fullscreenerror"],moz:["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror"],webkit:["","webkitCurrentFullScreenElement","webkitRequestFullScreen","webkitCancelFullScreen","webkitfullscreenchange",""],webkitVideo:["webkitSupportsFullscreen","webkitDisplayingFullscreen","webkitEnterFullscreen","webkitExitFullscreen","",""]},g=["w3c","moz","webkit","webkitVideo"];for(this.fullscreen=a={support:{w3c:!!d[f.w3c[0]],moz:!!d[f.moz[0]],webkit:"function"==typeof d[f.webkit[3]],webkitVideo:"function"==typeof e[f.webkitVideo[2]]},used:{}},b=0,c=g.length;c>b;b++){var h=g[b];if(a.support[h]){a.spec=h,a.used[h]=!0;break}}if(a.spec){var i=f[a.spec];a.api={fullscreenEnabled:!0,fullscreenElement:function(a){return a=a?a:d,a[i[1]]},requestFullscreen:function(a){return a[i[2]]()},exitFullscreen:function(a){return a=a?a:d,a[i[3]]()}},a.event={fullscreenchange:i[4],fullscreenerror:i[5]}}else a.api={fullscreenEnabled:!1,fullscreenElement:function(){return null},requestFullscreen:function(){},exitFullscreen:function(){}},a.event={}}},a.jPlayer.nativeFeatures.init(),a.jPlayer.focus=null,a.jPlayer.keyIgnoreElementNames="A INPUT TEXTAREA SELECT BUTTON";var g=function(b){var c,d=a.jPlayer.focus,e=document.activeElement;d&&("undefined"!=typeof e?null!==e&&"BODY"!==e.nodeName.toUpperCase()&&(c=!0):a.each(a.jPlayer.keyIgnoreElementNames.split(/\s+/g),function(a,d){return b.target.nodeName.toUpperCase()===d.toUpperCase()?(c=!0,!1):void 0}),c||a.each(d.options.keyBindings,function(c,e){return e&&b.which===e.key&&a.isFunction(e.fn)?(b.preventDefault(),e.fn(d),!1):void 0}))};a.jPlayer.keys=function(b){var c="keydown.jPlayer";a(document.documentElement).unbind(c),b&&a(document.documentElement).bind(c,g)},a.jPlayer.keys(!0),a.jPlayer.prototype={count:0,version:{script:"2.8.1",needFlash:"2.8.0",flash:"unknown"},options:{swfPath:"js",solution:"html, flash",supplied:"mp3",preload:"metadata",volume:.8,muted:!1,remainingDuration:!1,toggleDuration:!1,captureDuration:!0,playbackRate:1,defaultPlaybackRate:1,minPlaybackRate:.5,maxPlaybackRate:4,wmode:"opaque",backgroundColor:"#000000",cssSelectorAncestor:"#jp_container_1",cssSelector:{videoPlay:".jp-video-play",play:".jp-play",pause:".jp-pause",stop:".jp-stop",seekBar:".jp-seek-bar",playBar:".jp-play-bar",mute:".jp-mute",unmute:".jp-unmute",volumeBar:".jp-volume-bar",volumeBarValue:".jp-volume-bar-value",volumeMax:".jp-volume-max",playbackRateBar:".jp-playback-rate-bar",playbackRateBarValue:".jp-playback-rate-bar-value",currentTime:".jp-current-time",duration:".jp-duration",title:".jp-title",fullScreen:".jp-full-screen",restoreScreen:".jp-restore-screen",repeat:".jp-repeat",repeatOff:".jp-repeat-off",gui:".jp-gui",noSolution:".jp-no-solution"},stateClass:{playing:"jp-state-playing",seeking:"jp-state-seeking",muted:"jp-state-muted",looped:"jp-state-looped",fullScreen:"jp-state-full-screen",noVolume:"jp-state-no-volume"},useStateClassSkin:!1,autoBlur:!0,smoothPlayBar:!1,fullScreen:!1,fullWindow:!1,autohide:{restored:!1,full:!0,fadeIn:200,fadeOut:600,hold:1e3},loop:!1,repeat:function(b){b.jPlayer.options.loop?a(this).unbind(".jPlayerRepeat").bind(a.jPlayer.event.ended+".jPlayer.jPlayerRepeat",function(){a(this).jPlayer("play")}):a(this).unbind(".jPlayerRepeat")},nativeVideoControls:{},noFullWindow:{msie:/msie [0-6]\./,ipad:/ipad.*?os [0-4]\./,iphone:/iphone/,ipod:/ipod/,android_pad:/android [0-3]\.(?!.*?mobile)/,android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,iemobile:/iemobile/,webos:/webos/},noVolume:{ipad:/ipad/,iphone:/iphone/,ipod:/ipod/,android_pad:/android(?!.*?mobile)/,android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,iemobile:/iemobile/,webos:/webos/,playbook:/playbook/},timeFormat:{},keyEnabled:!1,audioFullScreen:!1,keyBindings:{play:{key:32,fn:function(a){a.status.paused?a.play():a.pause()}},fullScreen:{key:13,fn:function(a){(a.status.video||a.options.audioFullScreen)&&a._setOption("fullScreen",!a.options.fullScreen)}},muted:{key:8,fn:function(a){a._muted(!a.options.muted)}},volumeUp:{key:38,fn:function(a){a.volume(a.options.volume+.1)}},volumeDown:{key:40,fn:function(a){a.volume(a.options.volume-.1)}}},verticalVolume:!1,verticalPlaybackRate:!1,globalVolume:!1,idPrefix:"jp",noConflict:"jQuery",emulateHtml:!1,consoleAlerts:!0,errorAlerts:!1,warningAlerts:!1},optionsAudio:{size:{width:"0px",height:"0px",cssClass:""},sizeFull:{width:"0px",height:"0px",cssClass:""}},optionsVideo:{size:{width:"480px",height:"270px",cssClass:"jp-video-270p"},sizeFull:{width:"100%",height:"100%",cssClass:"jp-video-full"}},instances:{},status:{src:"",media:{},paused:!0,format:{},formatType:"",waitForPlay:!0,waitForLoad:!0,srcSet:!1,video:!1,seekPercent:0,currentPercentRelative:0,currentPercentAbsolute:0,currentTime:0,duration:0,remaining:0,videoWidth:0,videoHeight:0,readyState:0,networkState:0,playbackRate:1,ended:0},internal:{ready:!1},solution:{html:!0,flash:!0},format:{mp3:{codec:"audio/mpeg",flashCanPlay:!0,media:"audio"},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',flashCanPlay:!0,media:"audio"},m3u8a:{codec:'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',flashCanPlay:!1,media:"audio"},m3ua:{codec:"audio/mpegurl",flashCanPlay:!1,media:"audio"},oga:{codec:'audio/ogg; codecs="vorbis, opus"',flashCanPlay:!1,media:"audio"},flac:{codec:"audio/x-flac",flashCanPlay:!1,media:"audio"},wav:{codec:'audio/wav; codecs="1"',flashCanPlay:!1,media:"audio"},webma:{codec:'audio/webm; codecs="vorbis"',flashCanPlay:!1,media:"audio"},fla:{codec:"audio/x-flv",flashCanPlay:!0,media:"audio"},rtmpa:{codec:'audio/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"audio"},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!0,media:"video"},m3u8v:{codec:'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!1,media:"video"},m3uv:{codec:"audio/mpegurl",flashCanPlay:!1,media:"video"},ogv:{codec:'video/ogg; codecs="theora, vorbis"',flashCanPlay:!1,media:"video"},webmv:{codec:'video/webm; codecs="vorbis, vp8"',flashCanPlay:!1,media:"video"},flv:{codec:"video/x-flv",flashCanPlay:!0,media:"video"},rtmpv:{codec:'video/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"video"}},_init:function(){var c=this;if(this.element.empty(),this.status=a.extend({},this.status),this.internal=a.extend({},this.internal),this.options.timeFormat=a.extend({},a.jPlayer.timeFormat,this.options.timeFormat),this.internal.cmdsIgnored=a.jPlayer.platform.ipad||a.jPlayer.platform.iphone||a.jPlayer.platform.ipod,this.internal.domNode=this.element.get(0),this.options.keyEnabled&&!a.jPlayer.focus&&(a.jPlayer.focus=this),this.androidFix={setMedia:!1,play:!1,pause:!1,time:0/0},a.jPlayer.platform.android&&(this.options.preload="auto"!==this.options.preload?"metadata":"auto"),this.formats=[],this.solutions=[],this.require={},this.htmlElement={},this.html={},this.html.audio={},this.html.video={},this.flash={},this.css={},this.css.cs={},this.css.jq={},this.ancestorJq=[],this.options.volume=this._limitValue(this.options.volume,0,1),a.each(this.options.supplied.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.format[e]){var f=!1;a.each(c.formats,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.formats.push(e)}}),a.each(this.options.solution.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.solution[e]){var f=!1;a.each(c.solutions,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.solutions.push(e)}}),this.internal.instance="jp_"+this.count,this.instances[this.internal.instance]=this.element,this.element.attr("id")||this.element.attr("id",this.options.idPrefix+"_jplayer_"+this.count),this.internal.self=a.extend({},{id:this.element.attr("id"),jq:this.element}),this.internal.audio=a.extend({},{id:this.options.idPrefix+"_audio_"+this.count,jq:b}),this.internal.video=a.extend({},{id:this.options.idPrefix+"_video_"+this.count,jq:b}),this.internal.flash=a.extend({},{id:this.options.idPrefix+"_flash_"+this.count,jq:b,swf:this.options.swfPath+(".swf"!==this.options.swfPath.toLowerCase().slice(-4)?(this.options.swfPath&&"/"!==this.options.swfPath.slice(-1)?"/":"")+"jquery.jplayer.swf":"")}),this.internal.poster=a.extend({},{id:this.options.idPrefix+"_poster_"+this.count,jq:b}),a.each(a.jPlayer.event,function(a,d){c.options[a]!==b&&(c.element.bind(d+".jPlayer",c.options[a]),c.options[a]=b)}),this.require.audio=!1,this.require.video=!1,a.each(this.formats,function(a,b){c.require[c.format[b].media]=!0}),this.options=this.require.video?a.extend(!0,{},this.optionsVideo,this.options):a.extend(!0,{},this.optionsAudio,this.options),this._setSize(),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this.status.noFullWindow=this._uaBlocklist(this.options.noFullWindow),this.status.noVolume=this._uaBlocklist(this.options.noVolume),a.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled&&this._fullscreenAddEventListeners(),this._restrictNativeVideoControls(),this.htmlElement.poster=document.createElement("img"),this.htmlElement.poster.id=this.internal.poster.id,this.htmlElement.poster.onload=function(){(!c.status.video||c.status.waitForPlay)&&c.internal.poster.jq.show()},this.element.append(this.htmlElement.poster),this.internal.poster.jq=a("#"+this.internal.poster.id),this.internal.poster.jq.css({width:this.status.width,height:this.status.height}),this.internal.poster.jq.hide(),this.internal.poster.jq.bind("click.jPlayer",function(){c._trigger(a.jPlayer.event.click)}),this.html.audio.available=!1,this.require.audio&&(this.htmlElement.audio=document.createElement("audio"),this.htmlElement.audio.id=this.internal.audio.id,this.html.audio.available=!!this.htmlElement.audio.canPlayType&&this._testCanPlayType(this.htmlElement.audio)),this.html.video.available=!1,this.require.video&&(this.htmlElement.video=document.createElement("video"),this.htmlElement.video.id=this.internal.video.id,this.html.video.available=!!this.htmlElement.video.canPlayType&&this._testCanPlayType(this.htmlElement.video)),this.flash.available=this._checkForFlash(10.1),this.html.canPlay={},this.flash.canPlay={},a.each(this.formats,function(a,b){c.html.canPlay[b]=c.html[c.format[b].media].available&&""!==c.htmlElement[c.format[b].media].canPlayType(c.format[b].codec),c.flash.canPlay[b]=c.format[b].flashCanPlay&&c.flash.available}),this.html.desired=!1,this.flash.desired=!1,a.each(this.solutions,function(b,d){if(0===b)c[d].desired=!0;else{var e=!1,f=!1;a.each(c.formats,function(a,b){c[c.solutions[0]].canPlay[b]&&("video"===c.format[b].media?f=!0:e=!0)}),c[d].desired=c.require.audio&&!e||c.require.video&&!f}}),this.html.support={},this.flash.support={},a.each(this.formats,function(a,b){c.html.support[b]=c.html.canPlay[b]&&c.html.desired,c.flash.support[b]=c.flash.canPlay[b]&&c.flash.desired}),this.html.used=!1,this.flash.used=!1,a.each(this.solutions,function(b,d){a.each(c.formats,function(a,b){return c[d].support[b]?(c[d].used=!0,!1):void 0})}),this._resetActive(),this._resetGate(),this._cssSelectorAncestor(this.options.cssSelectorAncestor),this.html.used||this.flash.used?this.css.jq.noSolution.length&&this.css.jq.noSolution.hide():(this._error({type:a.jPlayer.error.NO_SOLUTION,context:"{solution:'"+this.options.solution+"', supplied:'"+this.options.supplied+"'}",message:a.jPlayer.errorMsg.NO_SOLUTION,hint:a.jPlayer.errorHint.NO_SOLUTION}),this.css.jq.noSolution.length&&this.css.jq.noSolution.show()),this.flash.used){var d,e="jQuery="+encodeURI(this.options.noConflict)+"&id="+encodeURI(this.internal.self.id)+"&vol="+this.options.volume+"&muted="+this.options.muted;if(a.jPlayer.browser.msie&&(Number(a.jPlayer.browser.version)<9||a.jPlayer.browser.documentMode<9)){var f='<object id="'+this.internal.flash.id+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>',g=['<param name="movie" value="'+this.internal.flash.swf+'" />','<param name="FlashVars" value="'+e+'" />','<param name="allowScriptAccess" value="always" />','<param name="bgcolor" value="'+this.options.backgroundColor+'" />','<param name="wmode" value="'+this.options.wmode+'" />'];d=document.createElement(f);for(var h=0;h<g.length;h++)d.appendChild(document.createElement(g[h]))}else{var i=function(a,b,c){var d=document.createElement("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)};d=document.createElement("object"),d.setAttribute("id",this.internal.flash.id),d.setAttribute("name",this.internal.flash.id),d.setAttribute("data",this.internal.flash.swf),d.setAttribute("type","application/x-shockwave-flash"),d.setAttribute("width","1"),d.setAttribute("height","1"),d.setAttribute("tabindex","-1"),i(d,"flashvars",e),i(d,"allowscriptaccess","always"),i(d,"bgcolor",this.options.backgroundColor),i(d,"wmode",this.options.wmode)}this.element.append(d),this.internal.flash.jq=a(d)}this.status.playbackRateEnabled=this.html.used&&!this.flash.used?this._testPlaybackRate("audio"):!1,this._updatePlaybackRate(),this.html.used&&(this.html.audio.available&&(this._addHtmlEventListeners(this.htmlElement.audio,this.html.audio),this.element.append(this.htmlElement.audio),this.internal.audio.jq=a("#"+this.internal.audio.id)),this.html.video.available&&(this._addHtmlEventListeners(this.htmlElement.video,this.html.video),this.element.append(this.htmlElement.video),this.internal.video.jq=a("#"+this.internal.video.id),this.internal.video.jq.css(this.status.nativeVideoControls?{width:this.status.width,height:this.status.height}:{width:"0px",height:"0px"}),this.internal.video.jq.bind("click.jPlayer",function(){c._trigger(a.jPlayer.event.click)}))),this.options.emulateHtml&&this._emulateHtmlBridge(),this.html.used&&!this.flash.used&&setTimeout(function(){c.internal.ready=!0,c.version.flash="n/a",c._trigger(a.jPlayer.event.repeat),c._trigger(a.jPlayer.event.ready)},100),this._updateNativeVideoControls(),this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),a.jPlayer.prototype.count++},destroy:function(){this.clearMedia(),this._removeUiClass(),this.css.jq.currentTime.length&&this.css.jq.currentTime.text(""),this.css.jq.duration.length&&this.css.jq.duration.text(""),a.each(this.css.jq,function(a,b){b.length&&b.unbind(".jPlayer")}),this.internal.poster.jq.unbind(".jPlayer"),this.internal.video.jq&&this.internal.video.jq.unbind(".jPlayer"),this._fullscreenRemoveEventListeners(),this===a.jPlayer.focus&&(a.jPlayer.focus=null),this.options.emulateHtml&&this._destroyHtmlBridge(),this.element.removeData("jPlayer"),this.element.unbind(".jPlayer"),this.element.empty(),delete this.instances[this.internal.instance]},enable:function(){},disable:function(){},_testCanPlayType:function(a){try{return a.canPlayType(this.format.mp3.codec),!0}catch(b){return!1}},_testPlaybackRate:function(a){var b,c=.5;a="string"==typeof a?a:"audio",b=document.createElement(a);try{return"playbackRate"in b?(b.playbackRate=c,b.playbackRate===c):!1}catch(d){return!1}},_uaBlocklist:function(b){var c=navigator.userAgent.toLowerCase(),d=!1;return a.each(b,function(a,b){return b&&b.test(c)?(d=!0,!1):void 0}),d},_restrictNativeVideoControls:function(){this.require.audio&&this.status.nativeVideoControls&&(this.status.nativeVideoControls=!1,this.status.noFullWindow=!0)},_updateNativeVideoControls:function(){this.html.video.available&&this.html.used&&(this.htmlElement.video.controls=this.status.nativeVideoControls,this._updateAutohide(),this.status.nativeVideoControls&&this.require.video?(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})):this.status.waitForPlay&&this.status.video&&(this.internal.poster.jq.show(),this.internal.video.jq.css({width:"0px",height:"0px"})))},_addHtmlEventListeners:function(b,c){var d=this;b.preload=this.options.preload,b.muted=this.options.muted,b.volume=this.options.volume,this.status.playbackRateEnabled&&(b.defaultPlaybackRate=this.options.defaultPlaybackRate,b.playbackRate=this.options.playbackRate),b.addEventListener("progress",function(){c.gate&&(d.internal.cmdsIgnored&&this.readyState>0&&(d.internal.cmdsIgnored=!1),d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.progress))},!1),b.addEventListener("loadeddata",function(){c.gate&&(d.androidFix.setMedia=!1,d.androidFix.play&&(d.androidFix.play=!1,d.play(d.androidFix.time)),d.androidFix.pause&&(d.androidFix.pause=!1,d.pause(d.androidFix.time)),d._trigger(a.jPlayer.event.loadeddata))},!1),b.addEventListener("timeupdate",function(){c.gate&&(d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.timeupdate))},!1),b.addEventListener("durationchange",function(){c.gate&&(d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.durationchange))},!1),b.addEventListener("play",function(){c.gate&&(d._updateButtons(!0),d._html_checkWaitForPlay(),d._trigger(a.jPlayer.event.play))},!1),b.addEventListener("playing",function(){c.gate&&(d._updateButtons(!0),d._seeked(),d._trigger(a.jPlayer.event.playing))},!1),b.addEventListener("pause",function(){c.gate&&(d._updateButtons(!1),d._trigger(a.jPlayer.event.pause))},!1),b.addEventListener("waiting",function(){c.gate&&(d._seeking(),d._trigger(a.jPlayer.event.waiting))},!1),b.addEventListener("seeking",function(){c.gate&&(d._seeking(),d._trigger(a.jPlayer.event.seeking))},!1),b.addEventListener("seeked",function(){c.gate&&(d._seeked(),d._trigger(a.jPlayer.event.seeked))},!1),b.addEventListener("volumechange",function(){c.gate&&(d.options.volume=b.volume,d.options.muted=b.muted,d._updateMute(),d._updateVolume(),d._trigger(a.jPlayer.event.volumechange))},!1),b.addEventListener("ratechange",function(){c.gate&&(d.options.defaultPlaybackRate=b.defaultPlaybackRate,d.options.playbackRate=b.playbackRate,d._updatePlaybackRate(),d._trigger(a.jPlayer.event.ratechange))},!1),b.addEventListener("suspend",function(){c.gate&&(d._seeked(),d._trigger(a.jPlayer.event.suspend))},!1),b.addEventListener("ended",function(){c.gate&&(a.jPlayer.browser.webkit||(d.htmlElement.media.currentTime=0),d.htmlElement.media.pause(),d._updateButtons(!1),d._getHtmlStatus(b,!0),d._updateInterface(),d._trigger(a.jPlayer.event.ended))},!1),b.addEventListener("error",function(){c.gate&&(d._updateButtons(!1),d._seeked(),d.status.srcSet&&(clearTimeout(d.internal.htmlDlyCmdId),d.status.waitForLoad=!0,d.status.waitForPlay=!0,d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"}),d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show(),d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show(),d._error({type:a.jPlayer.error.URL,context:d.status.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL})))},!1),a.each(a.jPlayer.htmlEvent,function(e,f){b.addEventListener(this,function(){c.gate&&d._trigger(a.jPlayer.event[f])},!1)})},_getHtmlStatus:function(a,b){var c=0,d=0,e=0,f=0;isFinite(a.duration)&&(this.status.duration=a.duration),c=a.currentTime,d=this.status.duration>0?100*c/this.status.duration:0,"object"==typeof a.seekable&&a.seekable.length>0?(e=this.status.duration>0?100*a.seekable.end(a.seekable.length-1)/this.status.duration:100,f=this.status.duration>0?100*a.currentTime/a.seekable.end(a.seekable.length-1):0):(e=100,f=d),b&&(c=0,f=0,d=0),this.status.seekPercent=e,this.status.currentPercentRelative=f,this.status.currentPercentAbsolute=d,this.status.currentTime=c,this.status.remaining=this.status.duration-this.status.currentTime,this.status.videoWidth=a.videoWidth,this.status.videoHeight=a.videoHeight,this.status.readyState=a.readyState,this.status.networkState=a.networkState,this.status.playbackRate=a.playbackRate,this.status.ended=a.ended},_resetStatus:function(){this.status=a.extend({},this.status,a.jPlayer.prototype.status)},_trigger:function(b,c,d){var e=a.Event(b);e.jPlayer={},e.jPlayer.version=a.extend({},this.version),e.jPlayer.options=a.extend(!0,{},this.options),e.jPlayer.status=a.extend(!0,{},this.status),e.jPlayer.html=a.extend(!0,{},this.html),e.jPlayer.flash=a.extend(!0,{},this.flash),c&&(e.jPlayer.error=a.extend({},c)),d&&(e.jPlayer.warning=a.extend({},d)),this.element.trigger(e)},jPlayerFlashEvent:function(b,c){if(b===a.jPlayer.event.ready)if(this.internal.ready){if(this.flash.gate){if(this.status.srcSet){var d=this.status.currentTime,e=this.status.paused;this.setMedia(this.status.media),this.volumeWorker(this.options.volume),d>0&&(e?this.pause(d):this.play(d))}this._trigger(a.jPlayer.event.flashreset)}}else this.internal.ready=!0,this.internal.flash.jq.css({width:"0px",height:"0px"}),this.version.flash=c.version,this.version.needFlash!==this.version.flash&&this._error({type:a.jPlayer.error.VERSION,context:this.version.flash,message:a.jPlayer.errorMsg.VERSION+this.version.flash,hint:a.jPlayer.errorHint.VERSION}),this._trigger(a.jPlayer.event.repeat),this._trigger(b);if(this.flash.gate)switch(b){case a.jPlayer.event.progress:this._getFlashStatus(c),this._updateInterface(),this._trigger(b);break;case a.jPlayer.event.timeupdate:this._getFlashStatus(c),this._updateInterface(),this._trigger(b);break;case a.jPlayer.event.play:this._seeked(),this._updateButtons(!0),this._trigger(b);break;case a.jPlayer.event.pause:this._updateButtons(!1),this._trigger(b);break;case a.jPlayer.event.ended:this._updateButtons(!1),this._trigger(b);break;case a.jPlayer.event.click:this._trigger(b);break;case a.jPlayer.event.error:this.status.waitForLoad=!0,this.status.waitForPlay=!0,this.status.video&&this.internal.flash.jq.css({width:"0px",height:"0px"}),this._validString(this.status.media.poster)&&this.internal.poster.jq.show(),this.css.jq.videoPlay.length&&this.status.video&&this.css.jq.videoPlay.show(),this.status.video?this._flash_setVideo(this.status.media):this._flash_setAudio(this.status.media),this._updateButtons(!1),this._error({type:a.jPlayer.error.URL,context:c.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL});break;case a.jPlayer.event.seeking:this._seeking(),this._trigger(b);break;case a.jPlayer.event.seeked:this._seeked(),this._trigger(b);break;case a.jPlayer.event.ready:break;default:this._trigger(b)}return!1},_getFlashStatus:function(a){this.status.seekPercent=a.seekPercent,this.status.currentPercentRelative=a.currentPercentRelative,this.status.currentPercentAbsolute=a.currentPercentAbsolute,this.status.currentTime=a.currentTime,this.status.duration=a.duration,this.status.remaining=a.duration-a.currentTime,this.status.videoWidth=a.videoWidth,this.status.videoHeight=a.videoHeight,this.status.readyState=4,this.status.networkState=0,this.status.playbackRate=1,this.status.ended=!1},_updateButtons:function(a){a===b?a=!this.status.paused:this.status.paused=!a,a?this.addStateClass("playing"):this.removeStateClass("playing"),!this.status.noFullWindow&&this.options.fullWindow?this.addStateClass("fullScreen"):this.removeStateClass("fullScreen"),this.options.loop?this.addStateClass("looped"):this.removeStateClass("looped"),this.css.jq.play.length&&this.css.jq.pause.length&&(a?(this.css.jq.play.hide(),this.css.jq.pause.show()):(this.css.jq.play.show(),this.css.jq.pause.hide())),this.css.jq.restoreScreen.length&&this.css.jq.fullScreen.length&&(this.status.noFullWindow?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.hide()):this.options.fullWindow?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.show()):(this.css.jq.fullScreen.show(),this.css.jq.restoreScreen.hide())),this.css.jq.repeat.length&&this.css.jq.repeatOff.length&&(this.options.loop?(this.css.jq.repeat.hide(),this.css.jq.repeatOff.show()):(this.css.jq.repeat.show(),this.css.jq.repeatOff.hide()))},_updateInterface:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.width(this.status.seekPercent+"%"),this.css.jq.playBar.length&&(this.options.smoothPlayBar?this.css.jq.playBar.stop().animate({width:this.status.currentPercentAbsolute+"%"},250,"linear"):this.css.jq.playBar.width(this.status.currentPercentRelative+"%"));var a="";this.css.jq.currentTime.length&&(a=this._convertTime(this.status.currentTime),a!==this.css.jq.currentTime.text()&&this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)));var b="",c=this.status.duration,d=this.status.remaining;this.css.jq.duration.length&&("string"==typeof this.status.media.duration?b=this.status.media.duration:("number"==typeof this.status.media.duration&&(c=this.status.media.duration,d=c-this.status.currentTime),b=this.options.remainingDuration?(d>0?"-":"")+this._convertTime(d):this._convertTime(c)),b!==this.css.jq.duration.text()&&this.css.jq.duration.text(b))},_convertTime:c.prototype.time,_seeking:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.addClass("jp-seeking-bg"),this.addStateClass("seeking")},_seeked:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.removeClass("jp-seeking-bg"),this.removeStateClass("seeking")},_resetGate:function(){this.html.audio.gate=!1,this.html.video.gate=!1,this.flash.gate=!1},_resetActive:function(){this.html.active=!1,this.flash.active=!1},_escapeHtml:function(a){return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")},_qualifyURL:function(a){var b=document.createElement("div");return b.innerHTML='<a href="'+this._escapeHtml(a)+'">x</a>',b.firstChild.href},_absoluteMediaUrls:function(b){var c=this;return a.each(b,function(a,d){d&&c.format[a]&&(b[a]=c._qualifyURL(d))}),b},addStateClass:function(a){this.ancestorJq.length&&this.ancestorJq.addClass(this.options.stateClass[a])},removeStateClass:function(a){this.ancestorJq.length&&this.ancestorJq.removeClass(this.options.stateClass[a])},setMedia:function(b){var c=this,d=!1,e=this.status.media.poster!==b.poster;this._resetMedia(),this._resetGate(),this._resetActive(),this.androidFix.setMedia=!1,this.androidFix.play=!1,this.androidFix.pause=!1,b=this._absoluteMediaUrls(b),a.each(this.formats,function(e,f){var g="video"===c.format[f].media;return a.each(c.solutions,function(e,h){if(c[h].support[f]&&c._validString(b[f])){var i="html"===h;return g?(i?(c.html.video.gate=!0,c._html_setVideo(b),c.html.active=!0):(c.flash.gate=!0,c._flash_setVideo(b),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.show(),c.status.video=!0):(i?(c.html.audio.gate=!0,c._html_setAudio(b),c.html.active=!0,a.jPlayer.platform.android&&(c.androidFix.setMedia=!0)):(c.flash.gate=!0,c._flash_setAudio(b),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.hide(),c.status.video=!1),d=!0,!1}}),d?!1:void 0}),d?(this.status.nativeVideoControls&&this.html.video.gate||this._validString(b.poster)&&(e?this.htmlElement.poster.src=b.poster:this.internal.poster.jq.show()),"string"==typeof b.title&&(this.css.jq.title.length&&this.css.jq.title.html(b.title),this.htmlElement.audio&&this.htmlElement.audio.setAttribute("title",b.title),this.htmlElement.video&&this.htmlElement.video.setAttribute("title",b.title)),this.status.srcSet=!0,this.status.media=a.extend({},b),this._updateButtons(!1),this._updateInterface(),this._trigger(a.jPlayer.event.setmedia)):this._error({type:a.jPlayer.error.NO_SUPPORT,context:"{supplied:'"+this.options.supplied+"'}",message:a.jPlayer.errorMsg.NO_SUPPORT,hint:a.jPlayer.errorHint.NO_SUPPORT})},_resetMedia:function(){this._resetStatus(),this._updateButtons(!1),this._updateInterface(),this._seeked(),this.internal.poster.jq.hide(),clearTimeout(this.internal.htmlDlyCmdId),this.html.active?this._html_resetMedia():this.flash.active&&this._flash_resetMedia()},clearMedia:function(){this._resetMedia(),this.html.active?this._html_clearMedia():this.flash.active&&this._flash_clearMedia(),this._resetGate(),this._resetActive()},load:function(){this.status.srcSet?this.html.active?this._html_load():this.flash.active&&this._flash_load():this._urlNotSetError("load")},focus:function(){this.options.keyEnabled&&(a.jPlayer.focus=this)},play:function(a){var b="object"==typeof a;b&&this.options.useStateClassSkin&&!this.status.paused?this.pause(a):(a="number"==typeof a?a:0/0,this.status.srcSet?(this.focus(),this.html.active?this._html_play(a):this.flash.active&&this._flash_play(a)):this._urlNotSetError("play"))
},videoPlay:function(){this.play()},pause:function(a){a="number"==typeof a?a:0/0,this.status.srcSet?this.html.active?this._html_pause(a):this.flash.active&&this._flash_pause(a):this._urlNotSetError("pause")},tellOthers:function(b,c){var d=this,e="function"==typeof c,f=Array.prototype.slice.call(arguments);"string"==typeof b&&(e&&f.splice(1,1),a.each(this.instances,function(){d.element!==this&&(!e||c.call(this.data("jPlayer"),d))&&this.jPlayer.apply(this,f)}))},pauseOthers:function(a){this.tellOthers("pause",function(){return this.status.srcSet},a)},stop:function(){this.status.srcSet?this.html.active?this._html_pause(0):this.flash.active&&this._flash_pause(0):this._urlNotSetError("stop")},playHead:function(a){a=this._limitValue(a,0,100),this.status.srcSet?this.html.active?this._html_playHead(a):this.flash.active&&this._flash_playHead(a):this._urlNotSetError("playHead")},_muted:function(a){this.mutedWorker(a),this.options.globalVolume&&this.tellOthers("mutedWorker",function(){return this.options.globalVolume},a)},mutedWorker:function(b){this.options.muted=b,this.html.used&&this._html_setProperty("muted",b),this.flash.used&&this._flash_mute(b),this.html.video.gate||this.html.audio.gate||(this._updateMute(b),this._updateVolume(this.options.volume),this._trigger(a.jPlayer.event.volumechange))},mute:function(a){var c="object"==typeof a;c&&this.options.useStateClassSkin&&this.options.muted?this._muted(!1):(a=a===b?!0:!!a,this._muted(a))},unmute:function(a){a=a===b?!0:!!a,this._muted(!a)},_updateMute:function(a){a===b&&(a=this.options.muted),a?this.addStateClass("muted"):this.removeStateClass("muted"),this.css.jq.mute.length&&this.css.jq.unmute.length&&(this.status.noVolume?(this.css.jq.mute.hide(),this.css.jq.unmute.hide()):a?(this.css.jq.mute.hide(),this.css.jq.unmute.show()):(this.css.jq.mute.show(),this.css.jq.unmute.hide()))},volume:function(a){this.volumeWorker(a),this.options.globalVolume&&this.tellOthers("volumeWorker",function(){return this.options.globalVolume},a)},volumeWorker:function(b){b=this._limitValue(b,0,1),this.options.volume=b,this.html.used&&this._html_setProperty("volume",b),this.flash.used&&this._flash_volume(b),this.html.video.gate||this.html.audio.gate||(this._updateVolume(b),this._trigger(a.jPlayer.event.volumechange))},volumeBar:function(b){if(this.css.jq.volumeBar.length){var c=a(b.currentTarget),d=c.offset(),e=b.pageX-d.left,f=c.width(),g=c.height()-b.pageY+d.top,h=c.height();this.volume(this.options.verticalVolume?g/h:e/f)}this.options.muted&&this._muted(!1)},_updateVolume:function(a){a===b&&(a=this.options.volume),a=this.options.muted?0:a,this.status.noVolume?(this.addStateClass("noVolume"),this.css.jq.volumeBar.length&&this.css.jq.volumeBar.hide(),this.css.jq.volumeBarValue.length&&this.css.jq.volumeBarValue.hide(),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.hide()):(this.removeStateClass("noVolume"),this.css.jq.volumeBar.length&&this.css.jq.volumeBar.show(),this.css.jq.volumeBarValue.length&&(this.css.jq.volumeBarValue.show(),this.css.jq.volumeBarValue[this.options.verticalVolume?"height":"width"](100*a+"%")),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.show())},volumeMax:function(){this.volume(1),this.options.muted&&this._muted(!1)},_cssSelectorAncestor:function(b){var c=this;this.options.cssSelectorAncestor=b,this._removeUiClass(),this.ancestorJq=b?a(b):[],b&&1!==this.ancestorJq.length&&this._warning({type:a.jPlayer.warning.CSS_SELECTOR_COUNT,context:b,message:a.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.ancestorJq.length+" found for cssSelectorAncestor.",hint:a.jPlayer.warningHint.CSS_SELECTOR_COUNT}),this._addUiClass(),a.each(this.options.cssSelector,function(a,b){c._cssSelector(a,b)}),this._updateInterface(),this._updateButtons(),this._updateAutohide(),this._updateVolume(),this._updateMute()},_cssSelector:function(b,c){var d=this;if("string"==typeof c)if(a.jPlayer.prototype.options.cssSelector[b]){if(this.css.jq[b]&&this.css.jq[b].length&&this.css.jq[b].unbind(".jPlayer"),this.options.cssSelector[b]=c,this.css.cs[b]=this.options.cssSelectorAncestor+" "+c,this.css.jq[b]=c?a(this.css.cs[b]):[],this.css.jq[b].length&&this[b]){var e=function(c){c.preventDefault(),d[b](c),d.options.autoBlur?a(this).blur():a(this).focus()};this.css.jq[b].bind("click.jPlayer",e)}c&&1!==this.css.jq[b].length&&this._warning({type:a.jPlayer.warning.CSS_SELECTOR_COUNT,context:this.css.cs[b],message:a.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.css.jq[b].length+" found for "+b+" method.",hint:a.jPlayer.warningHint.CSS_SELECTOR_COUNT})}else this._warning({type:a.jPlayer.warning.CSS_SELECTOR_METHOD,context:b,message:a.jPlayer.warningMsg.CSS_SELECTOR_METHOD,hint:a.jPlayer.warningHint.CSS_SELECTOR_METHOD});else this._warning({type:a.jPlayer.warning.CSS_SELECTOR_STRING,context:c,message:a.jPlayer.warningMsg.CSS_SELECTOR_STRING,hint:a.jPlayer.warningHint.CSS_SELECTOR_STRING})},duration:function(a){this.options.toggleDuration&&(this.options.captureDuration&&a.stopPropagation(),this._setOption("remainingDuration",!this.options.remainingDuration))},seekBar:function(b){if(this.css.jq.seekBar.length){var c=a(b.currentTarget),d=c.offset(),e=b.pageX-d.left,f=c.width(),g=100*e/f;this.playHead(g)}},playbackRate:function(a){this._setOption("playbackRate",a)},playbackRateBar:function(b){if(this.css.jq.playbackRateBar.length){var c,d,e=a(b.currentTarget),f=e.offset(),g=b.pageX-f.left,h=e.width(),i=e.height()-b.pageY+f.top,j=e.height();c=this.options.verticalPlaybackRate?i/j:g/h,d=c*(this.options.maxPlaybackRate-this.options.minPlaybackRate)+this.options.minPlaybackRate,this.playbackRate(d)}},_updatePlaybackRate:function(){var a=this.options.playbackRate,b=(a-this.options.minPlaybackRate)/(this.options.maxPlaybackRate-this.options.minPlaybackRate);this.status.playbackRateEnabled?(this.css.jq.playbackRateBar.length&&this.css.jq.playbackRateBar.show(),this.css.jq.playbackRateBarValue.length&&(this.css.jq.playbackRateBarValue.show(),this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate?"height":"width"](100*b+"%"))):(this.css.jq.playbackRateBar.length&&this.css.jq.playbackRateBar.hide(),this.css.jq.playbackRateBarValue.length&&this.css.jq.playbackRateBarValue.hide())},repeat:function(a){var b="object"==typeof a;this._loop(b&&this.options.useStateClassSkin&&this.options.loop?!1:!0)},repeatOff:function(){this._loop(!1)},_loop:function(b){this.options.loop!==b&&(this.options.loop=b,this._updateButtons(),this._trigger(a.jPlayer.event.repeat))},option:function(c,d){var e=c;if(0===arguments.length)return a.extend(!0,{},this.options);if("string"==typeof c){var f=c.split(".");if(d===b){for(var g=a.extend(!0,{},this.options),h=0;h<f.length;h++){if(g[f[h]]===b)return this._warning({type:a.jPlayer.warning.OPTION_KEY,context:c,message:a.jPlayer.warningMsg.OPTION_KEY,hint:a.jPlayer.warningHint.OPTION_KEY}),b;g=g[f[h]]}return g}e={};for(var i=e,j=0;j<f.length;j++)j<f.length-1?(i[f[j]]={},i=i[f[j]]):i[f[j]]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(b,c){var d=this;switch(b){case"volume":this.volume(c);break;case"muted":this._muted(c);break;case"globalVolume":this.options[b]=c;break;case"cssSelectorAncestor":this._cssSelectorAncestor(c);break;case"cssSelector":a.each(c,function(a,b){d._cssSelector(a,b)});break;case"playbackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate,this.options.maxPlaybackRate),this.html.used&&this._html_setProperty("playbackRate",c),this._updatePlaybackRate();break;case"defaultPlaybackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate,this.options.maxPlaybackRate),this.html.used&&this._html_setProperty("defaultPlaybackRate",c),this._updatePlaybackRate();break;case"minPlaybackRate":this.options[b]=c=this._limitValue(c,.1,this.options.maxPlaybackRate-.1),this._updatePlaybackRate();break;case"maxPlaybackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate+.1,16),this._updatePlaybackRate();break;case"fullScreen":if(this.options[b]!==c){var e=a.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;(!e||e&&!this.status.waitForPlay)&&(e||(this.options[b]=c),c?this._requestFullscreen():this._exitFullscreen(),e||this._setOption("fullWindow",c))}break;case"fullWindow":this.options[b]!==c&&(this._removeUiClass(),this.options[b]=c,this._refreshSize());break;case"size":this.options.fullWindow||this.options[b].cssClass===c.cssClass||this._removeUiClass(),this.options[b]=a.extend({},this.options[b],c),this._refreshSize();break;case"sizeFull":this.options.fullWindow&&this.options[b].cssClass!==c.cssClass&&this._removeUiClass(),this.options[b]=a.extend({},this.options[b],c),this._refreshSize();break;case"autohide":this.options[b]=a.extend({},this.options[b],c),this._updateAutohide();break;case"loop":this._loop(c);break;case"remainingDuration":this.options[b]=c,this._updateInterface();break;case"toggleDuration":this.options[b]=c;break;case"nativeVideoControls":this.options[b]=a.extend({},this.options[b],c),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this._restrictNativeVideoControls(),this._updateNativeVideoControls();break;case"noFullWindow":this.options[b]=a.extend({},this.options[b],c),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this.status.noFullWindow=this._uaBlocklist(this.options.noFullWindow),this._restrictNativeVideoControls(),this._updateButtons();break;case"noVolume":this.options[b]=a.extend({},this.options[b],c),this.status.noVolume=this._uaBlocklist(this.options.noVolume),this._updateVolume(),this._updateMute();break;case"emulateHtml":this.options[b]!==c&&(this.options[b]=c,c?this._emulateHtmlBridge():this._destroyHtmlBridge());break;case"timeFormat":this.options[b]=a.extend({},this.options[b],c);break;case"keyEnabled":this.options[b]=c,c||this!==a.jPlayer.focus||(a.jPlayer.focus=null);break;case"keyBindings":this.options[b]=a.extend(!0,{},this.options[b],c);break;case"audioFullScreen":this.options[b]=c;break;case"autoBlur":this.options[b]=c}return this},_refreshSize:function(){this._setSize(),this._addUiClass(),this._updateSize(),this._updateButtons(),this._updateAutohide(),this._trigger(a.jPlayer.event.resize)},_setSize:function(){this.options.fullWindow?(this.status.width=this.options.sizeFull.width,this.status.height=this.options.sizeFull.height,this.status.cssClass=this.options.sizeFull.cssClass):(this.status.width=this.options.size.width,this.status.height=this.options.size.height,this.status.cssClass=this.options.size.cssClass),this.element.css({width:this.status.width,height:this.status.height})},_addUiClass:function(){this.ancestorJq.length&&this.ancestorJq.addClass(this.status.cssClass)},_removeUiClass:function(){this.ancestorJq.length&&this.ancestorJq.removeClass(this.status.cssClass)},_updateSize:function(){this.internal.poster.jq.css({width:this.status.width,height:this.status.height}),!this.status.waitForPlay&&this.html.active&&this.status.video||this.html.video.available&&this.html.used&&this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):!this.status.waitForPlay&&this.flash.active&&this.status.video&&this.internal.flash.jq.css({width:this.status.width,height:this.status.height})},_updateAutohide:function(){var a=this,b="mousemove.jPlayer",c=".jPlayerAutohide",d=b+c,e=function(){a.css.jq.gui.fadeIn(a.options.autohide.fadeIn,function(){clearTimeout(a.internal.autohideId),a.internal.autohideId=setTimeout(function(){a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)},a.options.autohide.hold)})};this.css.jq.gui.length&&(this.css.jq.gui.stop(!0,!0),clearTimeout(this.internal.autohideId),this.element.unbind(c),this.css.jq.gui.unbind(c),this.status.nativeVideoControls?this.css.jq.gui.hide():this.options.fullWindow&&this.options.autohide.full||!this.options.fullWindow&&this.options.autohide.restored?(this.element.bind(d,e),this.css.jq.gui.bind(d,e),this.css.jq.gui.hide()):this.css.jq.gui.show())},fullScreen:function(a){var b="object"==typeof a;b&&this.options.useStateClassSkin&&this.options.fullScreen?this._setOption("fullScreen",!1):this._setOption("fullScreen",!0)},restoreScreen:function(){this._setOption("fullScreen",!1)},_fullscreenAddEventListeners:function(){var b=this,c=a.jPlayer.nativeFeatures.fullscreen;c.api.fullscreenEnabled&&c.event.fullscreenchange&&("function"!=typeof this.internal.fullscreenchangeHandler&&(this.internal.fullscreenchangeHandler=function(){b._fullscreenchange()}),document.addEventListener(c.event.fullscreenchange,this.internal.fullscreenchangeHandler,!1))},_fullscreenRemoveEventListeners:function(){var b=a.jPlayer.nativeFeatures.fullscreen;this.internal.fullscreenchangeHandler&&document.removeEventListener(b.event.fullscreenchange,this.internal.fullscreenchangeHandler,!1)},_fullscreenchange:function(){this.options.fullScreen&&!a.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement()&&this._setOption("fullScreen",!1)},_requestFullscreen:function(){var b=this.ancestorJq.length?this.ancestorJq[0]:this.element[0],c=a.jPlayer.nativeFeatures.fullscreen;c.used.webkitVideo&&(b=this.htmlElement.video),c.api.fullscreenEnabled&&c.api.requestFullscreen(b)},_exitFullscreen:function(){var b,c=a.jPlayer.nativeFeatures.fullscreen;c.used.webkitVideo&&(b=this.htmlElement.video),c.api.fullscreenEnabled&&c.api.exitFullscreen(b)},_html_initMedia:function(b){var c=a(this.htmlElement.media).empty();a.each(b.track||[],function(a,b){var d=document.createElement("track");d.setAttribute("kind",b.kind?b.kind:""),d.setAttribute("src",b.src?b.src:""),d.setAttribute("srclang",b.srclang?b.srclang:""),d.setAttribute("label",b.label?b.label:""),b.def&&d.setAttribute("default",b.def),c.append(d)}),this.htmlElement.media.src=this.status.src,"none"!==this.options.preload&&this._html_load(),this._trigger(a.jPlayer.event.timeupdate)},_html_setFormat:function(b){var c=this;a.each(this.formats,function(a,d){return c.html.support[d]&&b[d]?(c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1):void 0})},_html_setAudio:function(a){this._html_setFormat(a),this.htmlElement.media=this.htmlElement.audio,this._html_initMedia(a)},_html_setVideo:function(a){this._html_setFormat(a),this.status.nativeVideoControls&&(this.htmlElement.video.poster=this._validString(a.poster)?a.poster:""),this.htmlElement.media=this.htmlElement.video,this._html_initMedia(a)},_html_resetMedia:function(){this.htmlElement.media&&(this.htmlElement.media.id!==this.internal.video.id||this.status.nativeVideoControls||this.internal.video.jq.css({width:"0px",height:"0px"}),this.htmlElement.media.pause())},_html_clearMedia:function(){this.htmlElement.media&&(this.htmlElement.media.src="about:blank",this.htmlElement.media.load())},_html_load:function(){this.status.waitForLoad&&(this.status.waitForLoad=!1,this.htmlElement.media.load()),clearTimeout(this.internal.htmlDlyCmdId)},_html_play:function(a){var b=this,c=this.htmlElement.media;if(this.androidFix.pause=!1,this._html_load(),this.androidFix.setMedia)this.androidFix.play=!0,this.androidFix.time=a;else if(isNaN(a))c.play();else{this.internal.cmdsIgnored&&c.play();try{if(c.seekable&&!("object"==typeof c.seekable&&c.seekable.length>0))throw 1;c.currentTime=a,c.play()}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.play(a)},250))}}this._html_checkWaitForPlay()},_html_pause:function(a){var b=this,c=this.htmlElement.media;if(this.androidFix.play=!1,a>0?this._html_load():clearTimeout(this.internal.htmlDlyCmdId),c.pause(),this.androidFix.setMedia)this.androidFix.pause=!0,this.androidFix.time=a;else if(!isNaN(a))try{if(c.seekable&&!("object"==typeof c.seekable&&c.seekable.length>0))throw 1;c.currentTime=a}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.pause(a)},250))}a>0&&this._html_checkWaitForPlay()},_html_playHead:function(a){var b=this,c=this.htmlElement.media;this._html_load();try{if("object"==typeof c.seekable&&c.seekable.length>0)c.currentTime=a*c.seekable.end(c.seekable.length-1)/100;else{if(!(c.duration>0)||isNaN(c.duration))throw"e";c.currentTime=a*c.duration/100}}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.playHead(a)},250))}this.status.waitForLoad||this._html_checkWaitForPlay()},_html_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})))},_html_setProperty:function(a,b){this.html.audio.available&&(this.htmlElement.audio[a]=b),this.html.video.available&&(this.htmlElement.video[a]=b)},_flash_setAudio:function(b){var c=this;try{a.each(this.formats,function(a,d){if(c.flash.support[d]&&b[d]){switch(d){case"m4a":case"fla":c._getMovie().fl_setAudio_m4a(b[d]);break;case"mp3":c._getMovie().fl_setAudio_mp3(b[d]);break;case"rtmpa":c._getMovie().fl_setAudio_rtmp(b[d])}return c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_setVideo:function(b){var c=this;try{a.each(this.formats,function(a,d){if(c.flash.support[d]&&b[d]){switch(d){case"m4v":case"flv":c._getMovie().fl_setVideo_m4v(b[d]);break;case"rtmpv":c._getMovie().fl_setVideo_rtmp(b[d])}return c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_resetMedia:function(){this.internal.flash.jq.css({width:"0px",height:"0px"}),this._flash_pause(0/0)},_flash_clearMedia:function(){try{this._getMovie().fl_clearMedia()}catch(a){this._flashError(a)}},_flash_load:function(){try{this._getMovie().fl_load()}catch(a){this._flashError(a)}this.status.waitForLoad=!1},_flash_play:function(a){try{this._getMovie().fl_play(a)}catch(b){this._flashError(b)}this.status.waitForLoad=!1,this._flash_checkWaitForPlay()},_flash_pause:function(a){try{this._getMovie().fl_pause(a)}catch(b){this._flashError(b)}a>0&&(this.status.waitForLoad=!1,this._flash_checkWaitForPlay())},_flash_playHead:function(a){try{this._getMovie().fl_play_head(a)}catch(b){this._flashError(b)}this.status.waitForLoad||this._flash_checkWaitForPlay()},_flash_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.flash.jq.css({width:this.status.width,height:this.status.height})))},_flash_volume:function(a){try{this._getMovie().fl_volume(a)}catch(b){this._flashError(b)}},_flash_mute:function(a){try{this._getMovie().fl_mute(a)}catch(b){this._flashError(b)}},_getMovie:function(){return document[this.internal.flash.id]},_getFlashPluginVersion:function(){var a,b=0;if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")){var c=a.GetVariable("$version");c&&(c=c.split(" ")[1].split(","),b=parseInt(c[0],10)+"."+parseInt(c[1],10))}}catch(d){}else navigator.plugins&&navigator.mimeTypes.length>0&&(a=navigator.plugins["Shockwave Flash"],a&&(b=navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/,"$1")));return 1*b},_checkForFlash:function(a){var b=!1;return this._getFlashPluginVersion()>=a&&(b=!0),b},_validString:function(a){return a&&"string"==typeof a},_limitValue:function(a,b,c){return b>a?b:a>c?c:a},_urlNotSetError:function(b){this._error({type:a.jPlayer.error.URL_NOT_SET,context:b,message:a.jPlayer.errorMsg.URL_NOT_SET,hint:a.jPlayer.errorHint.URL_NOT_SET})},_flashError:function(b){var c;c=this.internal.ready?"FLASH_DISABLED":"FLASH",this._error({type:a.jPlayer.error[c],context:this.internal.flash.swf,message:a.jPlayer.errorMsg[c]+b.message,hint:a.jPlayer.errorHint[c]}),this.internal.flash.jq.css({width:"1px",height:"1px"})},_error:function(b){this._trigger(a.jPlayer.event.error,b),this.options.errorAlerts&&this._alert("Error!"+(b.message?"\n"+b.message:"")+(b.hint?"\n"+b.hint:"")+"\nContext: "+b.context)},_warning:function(c){this._trigger(a.jPlayer.event.warning,b,c),this.options.warningAlerts&&this._alert("Warning!"+(c.message?"\n"+c.message:"")+(c.hint?"\n"+c.hint:"")+"\nContext: "+c.context)},_alert:function(a){var b="jPlayer "+this.version.script+" : id='"+this.internal.self.id+"' : "+a;this.options.consoleAlerts?window.console&&window.console.log&&window.console.log(b):alert(b)},_emulateHtmlBridge:function(){var b=this;a.each(a.jPlayer.emulateMethods.split(/\s+/g),function(a,c){b.internal.domNode[c]=function(a){b[c](a)}}),a.each(a.jPlayer.event,function(c,d){var e=!0;a.each(a.jPlayer.reservedEvent.split(/\s+/g),function(a,b){return b===c?(e=!1,!1):void 0}),e&&b.element.bind(d+".jPlayer.jPlayerHtml",function(){b._emulateHtmlUpdate();var a=document.createEvent("Event");a.initEvent(c,!1,!0),b.internal.domNode.dispatchEvent(a)})})},_emulateHtmlUpdate:function(){var b=this;a.each(a.jPlayer.emulateStatus.split(/\s+/g),function(a,c){b.internal.domNode[c]=b.status[c]}),a.each(a.jPlayer.emulateOptions.split(/\s+/g),function(a,c){b.internal.domNode[c]=b.options[c]})},_destroyHtmlBridge:function(){var b=this;this.element.unbind(".jPlayerHtml");var c=a.jPlayer.emulateMethods+" "+a.jPlayer.emulateStatus+" "+a.jPlayer.emulateOptions;a.each(c.split(/\s+/g),function(a,c){delete b.internal.domNode[c]})}},a.jPlayer.error={FLASH:"e_flash",FLASH_DISABLED:"e_flash_disabled",NO_SOLUTION:"e_no_solution",NO_SUPPORT:"e_no_support",URL:"e_url",URL_NOT_SET:"e_url_not_set",VERSION:"e_version"},a.jPlayer.errorMsg={FLASH:"jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",FLASH_DISABLED:"jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",NO_SOLUTION:"No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",NO_SUPPORT:"It is not possible to play any media format provided in setMedia() on this browser using your current options.",URL:"Media URL could not be loaded.",URL_NOT_SET:"Attempt to issue media playback commands, while no media url is set.",VERSION:"jPlayer "+a.jPlayer.prototype.version.script+" needs Jplayer.swf version "+a.jPlayer.prototype.version.needFlash+" but found "},a.jPlayer.errorHint={FLASH:"Check your swfPath option and that Jplayer.swf is there.",FLASH_DISABLED:"Check that you have not display:none; the jPlayer entity or any ancestor.",NO_SOLUTION:"Review the jPlayer options: support and supplied.",NO_SUPPORT:"Video or audio formats defined in the supplied option are missing.",URL:"Check media URL is valid.",URL_NOT_SET:"Use setMedia() to set the media URL.",VERSION:"Update jPlayer files."},a.jPlayer.warning={CSS_SELECTOR_COUNT:"e_css_selector_count",CSS_SELECTOR_METHOD:"e_css_selector_method",CSS_SELECTOR_STRING:"e_css_selector_string",OPTION_KEY:"e_option_key"},a.jPlayer.warningMsg={CSS_SELECTOR_COUNT:"The number of css selectors found did not equal one: ",CSS_SELECTOR_METHOD:"The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",CSS_SELECTOR_STRING:"The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",OPTION_KEY:"The option requested in jPlayer('option') is undefined."},a.jPlayer.warningHint={CSS_SELECTOR_COUNT:"Check your css selector and the ancestor.",CSS_SELECTOR_METHOD:"Check your method name.",CSS_SELECTOR_STRING:"Check your css selector is a string.",OPTION_KEY:"Check your option name."}});;

var LandMarkConfig = function (opt) {
    this.map = opt != undefined ? opt.map : null;
    this.mapStraction = opt != undefined ? opt.mapStraction : null;
    var that = this;

    $("#btnCancel").on("click", function (e) {
        $("#LandMarkConfig").data("kendoWindow").close();
    });
    $("#btnAccept").on("click", function (e) {
        that.onSave();
    });
}

/* 
* $Author$		hanhth
* Load treeview 
*/
LandMarkConfig.prototype.LoadTreeView = function () {
    $("#LandMarkConfig").data("kendoWindow").center().open();
    var that = this;
    var data = this.getDataTreeView(false);
    var builHTML = '<div class="row">';
    var htmlZones = '<div class="row">';
    var count = 0;
    $.each(eval(data), function () {
        count++;
        if (count == 1) {
            builHTML += '<div class="col-sm-3" style="padding-left: 15px;">';
        }
        builHTML += '<div class="k-mid">';
        builHTML += '<span class="k-checkbox">';
        if (this.checked)
            builHTML += '<input type="checkbox" value="' + this.id + '" checked="' + this.checked + '">';
        else
            builHTML += '<input type="checkbox" value="' + this.id + '">';
        builHTML += '</span>';
        builHTML += '<span class="k-in" style="padding-left: 8px;">';
        builHTML += '<img src="' + this.imageUrl + '" alt="" class="k-image" style="width: 20px;height: 20px;" />';
        builHTML += '<span class="k-sprite rootfolder">';
        builHTML += '</span>' + this.text + '</span>';
        builHTML += '</div>';

        if (count == 7) { builHTML += '</div>'; count = 0; }
    });
    var zones = this.getDataTreeView(true);
    var zCount = 0;
    $.each(eval(zones), function () {
        zCount++;
        if (zCount == 1) {
            htmlZones += '<div class="col-sm-3" style="padding-left: 15px;">';
        }
        htmlZones += '<div class="k-mid">';
        htmlZones += '<span class="k-checkbox">';
        if (this.checked)
            htmlZones += '<input type="checkbox" value="' + this.id + '" checked="' + this.checked + '">';
        else
            htmlZones += '<input type="checkbox" value="' + this.id + '">';
        htmlZones += '</span>';
        htmlZones += '<span class="k-in" style="padding-left: 8px;">';
        htmlZones += '<img src="' + this.imageUrl + '" alt="" class="k-image" style="width: 20px;height: 20px;" />';
        htmlZones += '<span class="k-sprite rootfolder">';
        htmlZones += '</span>' + this.text + '</span>';
        htmlZones += '</div>';

        if (zCount == 1) { htmlZones += '</div>'; zCount = 0; }
    });

    builHTML += '</div>';
    htmlZones += '</div>';
    $("#tvLandMarkPoint").html(builHTML);
    $("#tvLandMarkZones").html(htmlZones);
    that.getIsShowLandMarkConfig();
}

/* 
* $Author$		hanhth
* Load data treeview 
*/
LandMarkConfig.prototype.getDataTreeView = function (isPolygon) {
    var returns = null;
    $.ajax({
        type: 'POST',
        url: "/Online/GetDataTreeView",
        data: { isPolygon: isPolygon },
        dataType: 'json',
        async: false,
        success: function (data) {
            returns = data.treeView;
        },
        error: function (error) {
            alert(error);
        }
    });
    return returns;
};

/* 
* $Author$		hanhth
* Onchange treeview save db
*/
LandMarkConfig.prototype.onSave = function () {
    var that = this;
    var data = "";
    $("#lstLandMarkIds").find("input[type=checkbox]").each(function () {
        if (this.checked == true) data += this.value + ':1,';
        else data += this.value + ':0,';
    });
    var landMarkLabel = $("#chkIsShowLabel").is(":checked");
    $.ajax({
        type: 'POST',
        url: "/Online/SaveLandMarkConfig",
        data: { data: data, landMarkLabel: landMarkLabel },
        dataType: 'json',
        async: false,
        success: function (result) {
            common.DisplayNotification(LanguageManager.getText("Company_SaveSuccess"), common.notification_type_success);
            $("#LandMarkConfig").data("kendoWindow").close();
            that.refresh();
        },
        error: function (error) {
            common.DisplayNotification(LanguageManager.getText("Common_UpdateFail"), common.notification_type_error);
        }
    });


}

LandMarkConfig.prototype.refresh = function () {
    var opt = new Object();
    opt.map = this.map;
    opt.mapStraction = this.mapStraction ;
    var landmark = SingletonLandmarkOnline.getInstance(opt);
    landmark.initAll();
}

LandMarkConfig.prototype.getIsShowLandMarkConfig = function () {
    $.ajax({
        type: 'POST',
        url: "/Online/GetLandMarkLableConfig",
        dataType: 'json',
        async: false,
        success: function (result) {
            if (result.result != null)
                $("#chkIsShowLabel").prop("checked", result.result);
            else
                $("#chkIsShowLabel").prop("checked", false);
        },
        error: function (error) {
            $("#chkIsShowLabel").prop("checked", false)
        }
    });
}
;
var ShowAddress = function (opt) {
    this.mapStraction = (opt != undefined && opt.mapStraction != undefined) ? opt.mapStraction : null;
    this.latLng = (opt != undefined && opt.latLng != undefined) ? opt.latLng : null;
    this.marker = null;
};

ShowAddress.prototype.openInfowindow = function () {
    var self = this;

    var location = null;

    // Kiểm tra xem có đúng là function không? (Hơi củ chuối nhưng chưa biết tại sao)
    if ($.isFunction(self.latLng.lat) && $.isFunction(self.latLng.lng)) {
        location = new mxn.LatLonPoint(self.latLng.lat(), self.latLng.lng());
    }
    else {
        location = new mxn.LatLonPoint(self.latLng.lat, self.latLng.lng);
    }

    // Lấy địa chỉ theo kinh độ vĩ độ hiện tại
    var address = MapHelper.getAddress(location.lat, location.lng);
    //var content = LanguageManager.getText('Common_ErrorProcessing');
    var content = "<div style='width:300px;'><div><a target='_blank' href='http://maps.google.com/maps?q=description+(name)+%40" + location.lat + ','
                + location.lng + "'>" + LanguageManager.getText('Common_Address') + ' : ' + address +
                '</a></div>' + '<div>' + LanguageManager.getText('ListLandmarks_Latitude') + ' : ' + location.lat.toFixed(6) + ' , ' +
                 LanguageManager.getText('ListLandmarks_Longitude') + ' : ' + location.lng.toFixed(6) +
                 '</div></div>';

    if (self.marker != null) {
        self.marker.closeBubble();
        self.mapStraction.removeMarker(self.marker);
    }

    // Tạo marker.
    self.marker = new mxn.Marker(new mxn.LatLonPoint(location.lat, location.lng));

    // Add marker vào bản đồ
    self.mapStraction.addMarker(self.marker);
    self.marker.setInfoBubble(content);
    self.marker.openBubble();
   
    

    // Khi đóng khung thì remove luôn marker.
    self.marker.closeInfoBubble.addHandler(function (eventName, eventSource, eventArgs) {
        self.mapStraction.removeMarker(self.marker);
    });
};

ShowAddress.prototype.openInfowindowLatlng = function (latLng) {
    var self = this;
    self.latLng = latLng;

    var location = null;

    // Kiểm tra xem có đúng là function không? (Hơi củ chuối nhưng chưa biết tại sao)
    if ($.isFunction(self.latLng.lat) && $.isFunction(self.latLng.lng)) {
        location = new mxn.LatLonPoint(self.latLng.lat(), self.latLng.lng());
    }
    else {
        location = new mxn.LatLonPoint(self.latLng.lat, self.latLng.lng);
    }

    // Lấy địa chỉ theo kinh độ vĩ độ hiện tại
    var address = MapHelper.getAddress(location.lat, location.lng);
    //var content = LanguageManager.getText('Common_ErrorProcessing');
    var content = "<div style='width:300px;'><div><a target='_blank' href='http://maps.google.com/maps?q=description+(name)+%40" + location.lat + ','
        + location.lng + "'>" + LanguageManager.getText('Common_Address') + ' : ' + address +
        '</a></div>' + '<div>' + LanguageManager.getText('ListLandmarks_Latitude') + ' : ' + location.lat.toFixed(6) + ' , ' +
        LanguageManager.getText('ListLandmarks_Longitude') + ' : ' + location.lng.toFixed(6) +
        '</div></div>';

    if (self.marker != null) {
        self.marker.closeBubble();
        self.mapStraction.removeMarker(self.marker);
    }

    // Tạo marker.
    self.marker = new mxn.Marker(new mxn.LatLonPoint(location.lat, location.lng));

    // Add marker vào bản đồ
    self.mapStraction.addMarker(self.marker);
    self.marker.setInfoBubble(content);
    self.marker.openBubble();



    // Khi đóng khung thì remove luôn marker.
    self.marker.closeInfoBubble.addHandler(function (eventName, eventSource, eventArgs) {
        self.mapStraction.removeMarker(self.marker);
    });
};

ShowAddress.prototype.openInfowindowGoogle = function (address) {
    var self = this;

    var location;

    // Kiểm tra xem có đúng là function không? (Hơi củ chuối nhưng chưa biết tại sao)
    if ($.isFunction(self.latLng.lat) && $.isFunction(self.latLng.lng)) {
        location = new mxn.LatLonPoint(self.latLng.lat(), self.latLng.lng());
    }
    else {
        location = new mxn.LatLonPoint(self.latLng.lat, self.latLng.lng);
    }

    // Lấy địa chỉ theo kinh độ vĩ độ hiện tại
    //var address = MapHelper.getAddress(location.lat, location.lng);
    //var content = LanguageManager.getText('Common_ErrorProcessing');
    var content = "<div style='width:300px;'><div><a target='_blank' href='http://maps.google.com/maps?q=description+(name)+%40" + location.lat + ','
                + location.lng + "'>" + LanguageManager.getText('Common_Address') + ' : ' + address +
                '</a></div>' + '<div>' + LanguageManager.getText('ListLandmarks_Latitude') + ' : ' + location.lat.toFixed(6) + ' , ' +
                 LanguageManager.getText('ListLandmarks_Longitude') + ' : ' + location.lng.toFixed(6) +
                 '</div></div>';
    // Tạo marker.
    var marker = new mxn.Marker(new mxn.LatLonPoint(location.lat, location.lng));

    // Add marker vào bản đồ
    self.mapStraction.addMarker(marker);

    marker.setInfoBubble(content);
    marker.openBubble();

    // Khi đóng khung thì remove luôn marker.
    marker.closeInfoBubble.addHandler(function (eventName, eventSource, eventArgs) {
        self.mapStraction.removeMarker(marker);
    });
};

ShowAddress.prototype.gotoGoogleMaps = function (lat, lng) {
    return 'http://maps.google.com/maps?q=description+(name)+%40' + lat + ',' + lng;
};

var SingletonShowAddress = (function () {
    var instance = null; // Đối tượng quản lý
    return new function () {
        this.getInstance = function (opt) {
            if (instance == null) {
                instance = new ShowAddress(opt);
                instance.constructor = null;
            }
            return instance;
        };
    };
})();;
/* 
* $Author$		trungtq
* Class đo khoảng cách giữa các điểm
* Cơ bản dùng cách đo như hiện tại (Tổng khoảng cách giưa các điểm rồi cộng dồn)
* Tên variable: chu_cai_thuong_co_dau_gach_chan
* Tên methods, properties: in-caps
*/
var DistanceManager = function (map) {
    this.map = map;                                                                 // Đối tượng bản đồ làm việc
    this.polyline = null;                                                           // Đối tượng polyline trên bản đồ
    this.markers = [];                                                              // Danh sách marker được add lên trên bản đồ
    this.selectedMode = false;                                                      // Chế độ đang vẽ
    this.units = "km";                                                              // Đơn vị tính khoảng cách (Mặc định vẫn theo km)
    this.windowPopUp = null;                                                        // Khung cửa sổ 
    this.mapEventClick = null;                                                      // Sự kiện map click
    this.mapEventMouseup = null;                                                    // Sự kiện mouseup
    this.mapEventDoubleClick = null;                                                   // Sự kiện double click
    this.directions = window.google != null ? new window.google.maps.DirectionsRenderer() : null;
    this.directionsService =  window.google != null ? new window.google.maps.DirectionsService() : null;
    this.firstPoint = null;
    //sử dụng tính năng đo khoảng cách tự động hiển thị form tra cước không?
    this.checkDistance = common.ExcuteAjax_ReturnData("/Online/checkDistanceToPriceCheck");
};

/* 
* $Author$		trungtq
* Khởi tạo khung popup
*/
DistanceManager.prototype.initWindow = function () {
    var that = this;

    // Khai báo đối tượng popup
    var popup = $("<div id=\"distanceWindow\"></div>");
    $("body").append(popup);

    // Đăng ký sự kiện mở window
    that.windowPopUp = $("#distanceWindow").kendoWindow({
        title: LanguageManager.getText("RIGHT_MENU_DISTANCE_MEASURE"),
        visible: false,
        width: "450px",
        height: "180px",
        open: function () {
            this.wrapper.css({ top: "65px", left: 10 });
        },
        close: function () {
            that.close();
        }
    }).data("kendoWindow");

    // Mở khung đo khoảng cách
    that.windowPopUp.refresh({
        url: "/Common/RenderDistancePatialView"
    });

    setTimeout(function() {
        if (window.google == null) {
            $('input[name="radDistanceType"]').each(function() {
                if ($(this).val() === "2") {
                    $(this).parent().hide();
                }
            });
        }
    },1000);

    // Đổi lại z-index khung popup để cho khung tìm kiếm nằm lên trên.
    $('#distanceWindow').parent().css({ "z-index": "0" });

    that.windowPopUp.open();
};

/* 
* $Author$		trungtq
* Khởi tạo form đo khoảng cách
*/
DistanceManager.prototype.init = function () {
    var that = this;

    // Gán lại chế độ select
    that.selectedMode = true;

    // Khởi tạo đối tượng polyline.
    var polyOptions = {
        color: "#ff0000",
        opacity: 1,
        width: 3,
        closed: false,
        geodesic: true,
        dragable: false,
        editable: true,
        map: that.map
    }

    that.polyline = new mxn.Polyline();

    // Add polyline vào bản đồ.
    that.map.addPolylineWithData(that.polyline, polyOptions);
    var fn = function (eventName, eventSource, eventArgs) {
        if (that.selectedMode) {
            // Thêm marker vào bản đồ
            var marker = new mxn.Marker(eventArgs.location);
            that.map.addMarker(marker);
            //Đo điểm
            if ($('input[name="radDistanceType"]:checked').val() === "1") {
                // Push vào polyline
                that.polyline.addLatLng(eventArgs.location);
                if (that.markers == null || that.markers.length == 0) {
                    that.markers = [];
                    marker.IndexNew = 0;
                } else {
                    marker.IndexNew = that.markers[that.markers.length - 1].IndexNew + 1;
                }
                that.markers.push(marker);
            } else {
                if (that.firstPoint != null) that.DistanceByRoad(that.firstPoint, eventArgs.location, that.map);
                if (that.firstPoint == null) {
                    that.firstPoint = eventArgs.location;
                    //sử dụng tính năng đo khoảng cách tự động hiển thị form tra cước không?
                    if (that.checkDistance.Allow) {
                        //Init cửa sổ tính cước
                        SingletonPriceCheckManager.getInstance().init();
                    }
                }
            }

            // Cập nhật lại khoảng cách
            that.updateDistance();
            var content = "<div style='white-space:nowrap;' class='scrollFix'>" +
                LanguageManager.getText("ListLandmarks_Latitude") + ": " + eventArgs.location.lat.toFixed(6) + "; "
                + LanguageManager.getText("ListLandmarks_Longitude") + " : " + eventArgs.location.lng.toFixed(6) + "</div>";
            marker.setInfoBubble(content);

            marker.click.addHandler(function (event_name, event_source, event_args) {
                //marker.openBubble();

                // Nếu dbclick => remove phần tử cuối cùng.
                if (that.markers.length > 0) {
                    for (var j = 0; j < that.markers.length; j++) {
                        if (that.markers[j].IndexNew === marker.IndexNew) {
                            that.markers.splice(j, 1);
                            break;
                        }
                    }

                    // Remove marker khỏi bản đồ
                    that.map.removeMarker(marker);

                    // Remove đoạn
                    //that.polyline.proprietary_polyline.getPath().pop();

                    that.polyline.hide();

                    var path = [];

                    for (var i = 0; i < that.markers.length; i++) {
                        path.push(that.markers[i].location);
                    }

                    var polyOptions = {
                        color: "#ff0000",
                        opacity: 1,
                        width: 3,
                        closed: false,
                        geodesic: true,
                        dragable: false,
                        editable: true,
                        map: that.map,
                        paths: path,
                        points: path
                    }

                    that.polyline = new mxn.Polyline();
                    // Add polyline vào bản đồ.
                    that.map.addPolylineWithData(that.polyline, polyOptions);

                    // Cập nhật lại khoảng cách
                    that.updateDistance();
                }
            });
        }
    }// End fn!

    fn.fnName = 'handleDistanceManagerMap';

    that.map.click.removeHandlerByName(fn.fnName);
    // Đăng ký sự kiện khi click vào map.
    that.map.click.addHandler(fn);

    // Hiển thị khung popup đo khoảng cách
    that.initWindow();
};

//Đo khoảng cách theo đường đi ngắn nhất
//longtq
DistanceManager.prototype.DistanceByRoad = function (startPoint, endPoint, map) {
    if (window.google != null) {
        var that = this;
        if (that.directions != undefined) that.directions.setMap(null);

        that.directionsService = new google.maps.DirectionsService();
        that.directions = new google.maps.DirectionsRenderer();
        that.directions.setMap(map.getMap()); //new google.maps.Map(document.getElementById('basic-map'), null)

        var request = {
            origin: startPoint,
            destination: endPoint,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };

        that.directionsService.route(request,
            function(response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    var distance = response.routes[0].legs[0].distance.value / 1000;
                    // Cập nhật giá trị lên khung popup
                    var kmDistance = that.thousands(Math.floor(distance)) +
                        (distance % 1).toFixed(2).toString().substring(1);
                    $("#distanceMajor").text(kmDistance);
                    that.directions.setDirections(response);
                    // Remove marker trên bản đồ
                    that.removeMarker();
                    // Set khoảng cách = quãng đường bên khing tính cước
                    $('#txtEnterKmNumber').val(kmDistance).change();
                } else {
                    alert("không thể tìm được đường đi ngắn nhất giữa 2 điểm này.");
                }
            });
    } else {
        alert("Chức năng đang được xây dựng.");
    }
}
/* 
* $Author$		trungtq
* Thay đổi đơn vị đo
* Mặc định vẫn là theo Km
*/
DistanceManager.prototype.changeUnits = function (unit) {
    try {
        // Đơn vị là km
        if (unit === "km") {
            $("#unitsDropdown").html('km <span class="caret"></span>');
        }
            // Đơn vị là mét
        else if (unit === "meters") {
            $("#unitsDropdown").html('mét <span class="caret"></span>');
        }
            // Đơn vị là dặm
        else if (unit === "miles") {
            $("#unitsDropdown").html('dặm <span class="caret"></span>');
        }

        this.units = unit;

        this.updateDistance();
    }
    catch (err) {
        console.log("DistanceManager.prototype.changeUnits: " + err);
    }
}

/* 
* $Author$		trungtq
* Cập nhật khoảng cách
*/
DistanceManager.prototype.updateDistance = function () {
    var that = this;
    try {
        if (that.selectedMode) {
            var distance = 0;
            if (that.units === "km") {
                distance = that.polyline.inKm();
            }
            else if (that.units === "meters") {
                distance = 1e3 * that.polyline.inKm();
            }
            else if (that.units === "miles") {
                distance = that.polyline.inMiles();
            }

            // Cập nhật giá trị lên khung popup
            $("#distanceMajor").text(that.thousands(Math.floor(distance)) + (distance % 1).toFixed(2).toString().substring(1));
        }
    }
    catch (err) {
        console.log("DistanceManager.prototype.updateDistance: " + err);
    }
};

// Clear đo khoảng cách
DistanceManager.prototype.clear = function () {
    var that = this;

    if (that.directions != undefined) that.directions.setMap(null);
    if (that.firstPoint != null) that.firstPoint = null;
    // Duyệt qua và bỏ các đỉnh trong polyline => cập nhật lại khoảng cách.
    that.polyline.removeLatLng();

    // Cập nhật lại khoảng cách
    that.updateDistance();


    // Remove marker trên bản đồ
    that.removeMarker();
};

/* 
* $Author$		trungtq
* Reset lại chế độ đo khoảng cách
*/
DistanceManager.prototype.close = function () {
    var that = this;
    this.clear();
    if (that.directions != undefined) that.directions.setMap(null);
    if (that.firstPoint != null) that.firstPoint = null;
    // Remove polyline khỏi bản đồ
    this.map.removePolyline(this.polyline);

    // Set lại chế độ
    this.selectedMode = false;

    // Remove marker trên bản đồ
    this.removeMarker();
};

DistanceManager.prototype.removeMarker = function () {
    var that = this;
    if (that.markers != null && that.markers.length > 0) {
        for (var i = 0; i < that.markers.length; i++) {
            that.map.removeMarker(that.markers[i]);
        }
        that.markers = [];
    }

    if (that.map.markers != null && that.map.markers.length > 0) {
        for (var k = 0; k < that.map.markers.length; k++) {
            if (that.map.markers[k].iconUrl == null) {
                that.map.removeMarker(that.map.markers[k]);              
            }
        }
    }
}

/* 
* $Author$		trungtq
* Format số
*/
DistanceManager.prototype.thousands = function (distance) {
    distance += "";
    var x = distance.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    for (var e = /(\d+)(\d{3})/; e.test(x1) ;) {
        x1 = x1.replace(e, "$1,$2");
    }
    return x1 + x2;
}


/* 
* $Author$	trungtq
* Singleton pattern for class SingletonDistanceManager
* Ten variable: chu_cai_thuong_co_dau_gach_chan
* Ten methods, properties: in-caps.
*/
var SingletonDistanceManager = (function () {
    //var that = this;
    var instance = null; // Đối tượng quản lý

    return new function () {
        this.getInstance = function (map) {
            if (instance == null) {
                instance = new DistanceManager(map);

                instance.constructor = null;
            }
            return instance;
        };
    };
})();;
/* 
* $Author$		trungtq
* Class chỉ đường
* Cơ bản dùng service của google trả về đường đi ngắn nhất giữa 2 điểm
* Tên variable: chu_cai_thuong_co_dau_gach_chan
* Tên methods, properties: in-caps.
*/
var DirectiveManager = function (map){
    this.map = map;                                 // Đối tượng bản đồ làm việc
    this.points = [];
    this.rendererOptions = { draggable: true };     // Cho phép di chuyển các điểm
    this.directionsDisplay = null;
    this.directionsService = null;
    this.mapEventClick = null;
    this.directionsDisplayChanged = null;
    this.windowPopUp = null;                       // Khung cửa sổ 
    this.autoSrc = null;                           // Autocomplete source
    this.autoDest = null;                          // Autocomplete destination
    this.mapProviderTypes = "googlev3";            // Cấu hình mặc định là dùng google map
    this.geocoder = this.map.api=== 'leafletbamap' ? null : new google.maps.Geocoder();    // Đối tượng Geocoder
    this.isActive = false;                         // Khung popup đang bật không?
    this.clickCount = 0;                           // Số lần click trên bản đồ
};

/* 
* $Author$		trungtq
* Khởi tạo khung popup
*/
DirectiveManager.prototype.initWindow = function () {
    var that = this;

    // Khai báo đối tượng popup
    var popup = $("#directiveWindow");
    if (popup.length == 0) {
        popup = $("<div id='directiveWindow'>");
        var popupInputForm = "<div class=\"directionInputs\">";
        popupInputForm += "<form>";
        popupInputForm += "<p style='margin-bottom:0px;'><label style='margin-bottom:0px !important;'>A</label><input type=\"text\" value=\"\" id=\"dirSource\" placeholder='" + LanguageManager.getText("DirectiveManager_StartAddress") + "'></p>";
        popupInputForm += "<p style='width:40px; height:15px; text-align:center;margin-bottom:0;'><a href='#' id='btnSwap' title='" + LanguageManager.getText("DirectiveManager_Swap") + "'><i class='fa icon-resize-vertical'></i><i class='fa icon-resize-vertical'></i></a></p>";
        popupInputForm += "<p><label>B</label><input type=\"text\" value=\"\" id=\"dirDestination\"  placeholder='" + LanguageManager.getText("DirectiveManager_EndAddress") + "'></p>";
        popupInputForm += "<a href=\"#\" id=\"getDirections\" class='btn btn-sm btn-primary' ><i class=\"fa icon-random\"></i>&nbsp;" + LanguageManager.getText("RIGHT_MENU_GUIDE") + "</a>&nbsp;";
        popupInputForm += "<a href=\"#\" id=\"panelReset\" class='btn btn-sm' ><i class=\"fa icon-retweet\"></i>&nbsp;" + LanguageManager.getText("SMS_Cancel") + "</a>";
        popupInputForm += "</form>";
        popupInputForm += " </div>";
        popupInputForm += " <div id='divDirectiveGuide' style='width:100%; padding-top:10px; font-size:12px; font-weight:bold;'>";
        popupInputForm += "Vui lòng chọn điểm A và B hoặc click chuột lên bản đồ để lấy địa chỉ.";
        popupInputForm += " </div>";
        // Nội dung của form
        popup.append($(popupInputForm));

        var popupContent = $("<div id='directions' style='overflow:auto;text-align:left; height:50px; '>")

        // Add vào khung popup
        popup.append(popupContent);

        // Append vào body.
        $("body").append(popup);
    }
};

DirectiveManager.prototype.resetWindow = function () {
    var that = this;

    $('#directions').html("");
    $('#dirSource').val("");
    $('#dirDestination').val("");

    // Ẩn khung hướng dẫn
    $('#divDirectiveGuide').show();

    $('#divDirectiveGuide').css({ "color": "#000000" });

    that.directionsDisplay.setMap(null);

    // Remove chỉ hướng khỏi bản đồ
    if (that.directionsDisplay != null) {
        that.directionsDisplay.setMap(null);
    }

    // Xóa dữ liệu trong map
    that.points = [];

    // Reset số lần click trên bản đồ về 0
    that.clickCount = 0;

    // Set lại chiều cao của khung dẫn đường
    $("#directions").css({ "height": "50px" });
};

/* 
* $Author$		trungtq
* Mở khung popup
*/
DirectiveManager.prototype.openWindow = function () {
    var that = this;

    // Đăng ký sự kiện mở window
    if (!that.windowPopUp) {
        that.windowPopUp = $("#directiveWindow").kendoWindow({
            title: LanguageManager.getText("RIGHT_MENU_GUIDE"),
            visible: false,
            width: "300px",
            open: function () {
                this.wrapper.css({ top: "45px", left: 10 });
            },
            close: function () {
                that.stop();
            }
        }).data("kendoWindow");
    }

    // Đổi lại z-index khung popup để cho khung tìm kiếm nằm lên trên.
    setTimeout(function () {
        $('#directiveWindow').parent().css({ "z-index": "0" });
    }, 100);


    // Hiện khung hướng dẫn
    $('#divDirectiveGuide').show();

    that.windowPopUp.open();
};

/* 
* $Author$		trungtq
* Khởi tạo autocomplete 
*/
DirectiveManager.prototype.autoCompleteSetup = function () {
    var that = this;
    that.autoSrc = new google.maps.places.Autocomplete($("#dirSource")[0]);
    that.autoDest = new google.maps.places.Autocomplete($("#dirDestination")[0]);
};

/* 
* $Author$		trungtq
* Khởi tạo dẫn đường 
*/
DirectiveManager.prototype.directionsSetup = function () {
    var that = this;

    // Khởi tạo dịch vụ của google 
    that.directionsDisplay = new google.maps.DirectionsRenderer(that.rendererOptions);
    that.directionsService = new google.maps.DirectionsService();

    // Hiển thị panel dẫn đường
    that.directionsDisplay.setPanel($('#directions')[0]);

    // Sự kiện thay đổi vị trí điểm bắt đầu và kết thúc
    that.directionsDisplayChanged = google.maps.event.addListener(that.directionsDisplay, 'directions_changed', function () {
        var directions = that.directionsDisplay.directions;
        var overview_path = directions.routes[0].overview_path;

        // Lấy ra tọa độ điểm đầu và cuối.
        var startingPoint = overview_path[0];
        var destinationPoint = overview_path[overview_path.length - 1];

        // Lấy địa chỉ từ tọa độ.
        that.getStartAddress(startingPoint);
        that.getEndAddress(destinationPoint);

        setTimeout(function () {
            var startAddress = $('#dirSource').val();
            var endAddress = $('#dirDestination').val();

            that.computeTotalDistance(that.directionsDisplay.directions);
        }, 500);
    });
};

/* 
* $Author$		trungtq
* Đăng ký sự kiện
*/
DirectiveManager.prototype.invokeEvents = function () {
    var that = this;
    try {
        // Get Directions
        $("#getDirections").on("click", function (e) {
            var from = $('#dirSource').val();
            var to = $('#dirDestination').val();

            if (from.length > 0 && to.length > 0) {
                e.preventDefault();

                // Ẩn khung hướng dẫn
                $('#divDirectiveGuide').hide();

                // Set lại map
                that.directionsDisplay.setMap(that.map.getMap());

                $("#directions").css({ "height": "400px" });

                // Tính đường đi.
                that.calculateRoute(from, to);

                $('#divDirectiveGuide').css({ "color": "#000000" });
            }
            else {
                $('#divDirectiveGuide').css({ "color": "#cc0000" });
            }
        });

        $("#btnSwap").on('click', function (e) {
            e.preventDefault();

            // Ẩn khung hướng dẫn
            $('#divDirectiveGuide').hide();

            // Set lại map
            that.directionsDisplay.setMap(that.map.getMap());

            $("#directions").css({ "height": "400px" });

            // Đổi giá trị của 2 ô textbox.
            var tg = $('#dirSource').val();
            $('#dirSource').val($('#dirDestination').val());
            $('#dirDestination').val(tg);

            var from = $('#dirSource').val();
            var to = $('#dirDestination').val();

            // Tính đường đi.
            that.calculateRoute(from, to);
        });

        // Reset Btn
        $("#panelReset").on('click', function (e) {
            that.resetWindow();
        });

        // Phương thức thiết lập sự kiện chọn điểm 1 và điểm 2 để đo khoảng cách
        // Đăng ký sự kiện click lên bản đồ
        that.mapEventClick = that.map.click.addHandler(function (event_name, event_source, event_args) {
            if (that.isActive == true) {
                // Tăng biến đếm click lên 1
                that.clickCount += 1;

                // Nếu đã có đủ 2 điểm mới dẫn lại đường.
                if (that.points.length < 2) {
                    // Tạo marker và add vào bản đồ.
                    var marker = new mxn.Marker(event_args.location);
                    that.map.addMarker(marker);

                    // Push vào mảng quản lý
                    that.points.push({ marker: marker, point: new google.maps.LatLng(event_args.location.lat, event_args.location.lng) });

                }
                if (that.points.length == 1) {
                    // Lấy địa chỉ từ tọa độ.
                    that.getStartAddress(that.points[0].point);
                }
                if (that.points.length == 2) {
                    // Chỉ nhận click lên bản đồ 2 điểm đầu và cuối.
                    if (that.clickCount == 2) {
                        var startAddress = "";
                        var endAddress = "";

                        // Lấy địa chỉ cuối cùng
                        that.getEndAddress(that.points[1].point);

                        setTimeout(function () {
                            startAddress = $('#dirSource').val();
                            endAddress = $('#dirDestination').val();

                            // Ẩn khung hướng dẫn
                            $('#divDirectiveGuide').hide();

                            // Set lại map
                            that.directionsDisplay.setMap(that.map.getMap());

                            $("#directions").css({ "height": "400px" });

                            // Remove sự kiện click
                            that.mapEventClick = null;
                        }, 500)

                        setTimeout(function () {
                            // Gọi hàm dẫn đường.
                            that.calculateRoute(startAddress, endAddress);

                            // Remove 2 marker khỏi map
                            that.map.removeMarker(that.points[0].marker);
                            that.map.removeMarker(that.points[1].marker);

                        }, 600);
                    }
                }
            }
        });
    }
    catch (ex) {
        console.log("DirectiveManager.prototype.invokeEvents: " + ex);
    }
};

/* 
* $Author$		trungtq
* Khởi tạo form dẫn đường
*/
DirectiveManager.prototype.init = function () {
    var that = this;
    if (that.map.api == that.mapProviderTypes) {

        // Kiểm tra nếu chưa active cửa sổ thì mới cho phép bật
        if (that.isActive == false) {
            // Hiển thị khung popup đo khoảng cách
            that.initWindow();

            // Đăng ký autocomplete
            that.autoCompleteSetup();

            // Đăng ký service dẫn đường
            that.directionsSetup();

            // Đăng ký sự kiện
            that.invokeEvents();

            // Mở cửa sổ.
            that.openWindow();

            // Bật lại cờ popup đang active.
            that.isActive = true;
        }
    } else {

        var center = that.map.getCenter();

        if (center.lon != null) {
            // trungtq: link sang trang map của google.
            window.open("https://www.google.com/maps/dir///@" + center.lat + "," + center.lon + "," + that.map.getZoom() + "z", "target");
        } else {
            window.open("https://www.google.com/maps/dir///@" + center.lat + "," + center.lng + "," + +that.map.getZoom() + "z", "target");
        }
    }
};

/* 
* $Author$		trungtq
* Bắt đầu chỉ đường
*/
DirectiveManager.prototype.start = function () {
    // Stop
    this.stop();

    // Khởi tạo lại
    this.init();
};

/* 
* $Author$		trungtq
* Dừng 
*/
DirectiveManager.prototype.stop = function () {
    var that = this;
    try {
        // Remove chỉ hướng khỏi bản đồ
        if (that.directionsDisplay != null) {
            that.directionsDisplay.setMap(null);
        }

        // Remove 2 marker khỏi map
        if (that.points != null && that.points.length == 2) {
            that.map.removeMarker(that.points[0].marker);
            that.map.removeMarker(that.points[1].marker);
        }
        // Xóa dữ liệu trong map
        that.points = [];

        // Reset số lần click trên bản đồ về 0
        that.clickCount = 0;

        // clear event
        that.mapEventClick == null;

        if (that.directionsDisplayChanged == null) {
            google.maps.event.removeListener(that.directionsDisplayChanged);
            that.directionsDisplayChanged = null;
        }

        // Hiện khung hướng dẫn
        $('#divDirectiveGuide').show();

        // Reset lại window
        that.resetWindow();

        // Gán lại trạng thái active về false.
        that.isActive = false;
    }
    catch (ex) {
        console.log("DirectiveManager.prototype.stop: " + ex);
    }
};

/* 
* $Author$		trungtq
* Tính tổng khoảng cách theo Km
*/
DirectiveManager.prototype.computeTotalDistance = function (result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
        total += myroute.legs[i].distance.value;
    }
    return total / 1000;
};

/* 
* $Author$		trungtq
* Lấy chỉ dẫn đường đi từ google giữa 2 điểm
*/
DirectiveManager.prototype.calculateRoute = function (from, to) {
    var that = this;
    try {
        var request = {
            origin: from,
            destination: to,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };

        that.directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                that.directionsDisplay.setDirections(response);
            }
        });
    }
    catch (ex) {
        console.log("DirectiveManager.prototype.calculateRoute: " + ex);
    }
};

/* 
* $Author$		trungtq
* Lấy chỉ bắt đầu
*/
DirectiveManager.prototype.getStartAddress = function (latLng) {
    var that = this;
    try {
        that.geocoder.geocode({ 'latLng': latLng },
           function (results, status) {
               if (status == google.maps.GeocoderStatus.OK) {
                   if (results[0]) {
                       $('#dirSource').val(results[0].formatted_address);
                   }
                   else {
                       $('#dirSource').val('No results');
                   }
               }
           });
    }
    catch (ex) {
        console.log("DirectiveManager.prototype.getStartAddress:" + ex);
    }
};

/* 
* $Author$		trungtq
* Lấy chỉ kết thúc.
*/
DirectiveManager.prototype.getEndAddress = function (latLng) {
    var that = this;
    try {
        that.geocoder.geocode({ 'latLng': latLng },
           function (results, status) {
               if (status == google.maps.GeocoderStatus.OK) {
                   if (results[0]) {
                       $('#dirDestination').val(results[0].formatted_address);
                   }
                   else {
                       $('#dirDestination').val('No results');
                   }
               }
           });
    }
    catch (ex) {
        console.log("DirectiveManager.prototype.getEndAddress:" + ex);
    }
};

/* 
* $Author$	trungtq
* Singleton pattern for class DirectiveManager
* Tên variable: chu_cai_thuong_co_dau_gach_chan
* Tên methods, properties: in-caps.
*/
var SingletonDirectiveManager = (function () {
    var that = this;
    var instance = null; // Đối tượng quản lý

    return new function () {
        this.getInstance = function (map) {
            if (instance == null) {
                instance = new DirectiveManager(map);

                instance.constructor = null;
            }
            return instance;
        }
    }
    return that;
})();;
if (typeof (document.attachEvent) != 'undefined') {
    document.attachEvent('onmouseup', BAMenuMouseUp);
} else if (typeof (document.addEventListener) != 'undefined') {
    document.addEventListener('mouseup', BAMenuMouseUp, false);
};

function BAMenuMouseUp() {
    if (!binhanhManager.sm) {
        if (binhanhManager.rt)
            binhanhManager.rt.hide();
    }
    binhanhManager.sm = false;
};

function BAContextMenu(o) {
    var ua = navigator.userAgent.toLowerCase();
    this.isFF = (ua.indexOf("mozilla") > -1) && (ua.indexOf("firefox") > -1);
    this.isIE = !this.isOpera && ua.indexOf("msie") > -1;
    this.pr = null;
    this.sc = o.scope;
    this.cf = { fc: o.focusColor || '#c6cfe7', tc: o.textColor || '#000000', hd: typeof (o.hideMouseOut) != undefined ? o.hideMouseOut : true, it: [], dx: o.index || 10, lv: o.level || 1 };
    this.it = {};
    this.isNotEmpty = false;
    this.initItems(o);
    this.calSize();
    this.initBound();
    this.drawListMenuItems();
};

BAContextMenu.prototype.initItems = function (o) {
    try {
        if (o.items != null && o.items != undefined) {
            for (var i = 0; i < o.items.length; i++) {
                if (typeof (o.items[i]) == 'string')
                    this.cf.it[i] = new BAMenuSeparator();
                else {
                    if (o.items[i].peid) {
                        if (permissionIDArray != null && permissionIDArray.indexOf(o.items[i].peid) != -1) {
                            this.cf.it[i] = new BAMenuItem(o.items[i], this, this.sc, this.cf.fc, this.cf.tc, this.cf.dx, this.cf.lv);
                            this.isNotEmpty = true;
                        }
                    }
                    else {
                        this.cf.it[i] = new BAMenuItem(o.items[i], this, this.sc, this.cf.fc, this.cf.tc, this.cf.dx, this.cf.lv);
                        this.isNotEmpty = true;
                    }
                }
            }
        }
    }
    catch (err) {
        console.log('BAContextMenu.prototype.initItems: ' + err);
    }
};

BAContextMenu.prototype.calSize = function () {
    var nLength = 0;
    var nHeight = 0;
    for (var i = 0; i < this.cf.it.length; i++) {
        if (this.cf.it[i] != undefined) {
            if (this.cf.it[i].isMenuItem) {
                nLength = Math.max(nLength, this.cf.it[i].text.length);
                nHeight += 23;
            } else {
                nHeight += 6;
            }
        }
    }
    this.size = { w: nLength * 5 + 58, h: nHeight + 2 }
};

BAContextMenu.prototype.initBound = function () {
    var tl = this.createObject(8, 8, 'x-menu-bound-top-left');
    var tm = this.createObject(this.size.w - 20, 8, 'x-menu-bound-top-midd');
    var tr = this.createObject(12, 8, 'x-menu-bound-top-right');
    var tb = this.createObject(0, 0, 'x-menu-clear');
    var dt = this.createObject(0, 8, 'x-menu-bound-top');

    var cl = this.createObject(2, this.size.h, 'x-menu-bound-content-left');
    this.it.ct = this.createObject(this.size.w - 10, this.size.h, 'x-menu-bound-content-midd');
    var cr = this.createObject(8, this.size.h, 'x-menu-bound-content-right');
    var cb = this.createObject(0, 0, 'x-menu-clear');
    var dc = this.createObject(0, 0, 'x-menu-bound-content');

    var bl = this.createObject(12, 12, 'x-menu-bound-bottom-left');
    var bm = this.createObject(this.size.w - 24, 12, 'x-menu-bound-bottom-midd');
    var br = this.createObject(12, 12, 'x-menu-bound-bottom-right');
    var bb = this.createObject(0, 0, 'x-menu-clear');
    var db = this.createObject(0, 12, 'x-menu-bound-bottom');

    dt.appendChild(tl);
    dt.appendChild(tm);
    dt.appendChild(tr);
    dt.appendChild(tb);

    dc.appendChild(cl);
    dc.appendChild(this.it.ct);
    dc.appendChild(cr);
    dc.appendChild(cb);

    db.appendChild(bl);
    db.appendChild(bm);
    db.appendChild(br);
    db.appendChild(bb);

    this.it.bd = this.createObject(this.size.w, 0, 'x-menu-bound');
    this.it.bd.appendChild(dt);
    this.it.bd.appendChild(dc);
    this.it.bd.appendChild(db);
    this.it.bd.style.zIndex = this.cf.dx;
    this.it.bd.style.display = 'none';
    this.it.bd.oncontextmenu = this.contextMenu;

    document.body.appendChild(this.it.bd);
};

BAContextMenu.prototype.drawListMenuItems = function () {
    for (var i = 0; i < this.cf.it.length; i++) {
        if (this.cf.it[i] != undefined) {
            if (this.cf.it[i].isMenuItem) {
                this.createMenuItem(this.cf.it[i]);
            } else {
                this.createMenuSeparator(this.cf.it[i]);
            }
        }
    }
};

BAContextMenu.prototype.createMenuItem = function (itm) {
    var il = this.createObject(16, 16, itm.iconCls);
    var im = this.createObject(this.size.w - 48, 16, 'x-menu-items-text');
    var ir = this.createObject(6, 16, itm.sm ? 'x-menu-items-arrow' : 'x-menu-items-icon');
    var ib = this.createObject(0, 0, 'x-menu-clear');
    var de = this.createObject(this.size.w - 10, 25, 'x-menu-items-event');
    var di = this.createObject(0, 20, 'x-menu-items');

    im.innerHTML = itm.text;
    di.mn = this;
    di.im = im;
    itm.di = di;
    di.cf = itm;
    de.di = di;
    de.oncontextmenu = this.contextMenu;
    de.onmouseout = this.menuItemMouseOut;
    de.onmouseover = this.menuItemMouseOver;
    de.onclick = this.menuItemOnClick;

    di.appendChild(il);
    di.appendChild(im);
    di.appendChild(ir);
    di.appendChild(ib);
    di.appendChild(de);

    this.it.ct.appendChild(di);
};

BAContextMenu.prototype.createMenuSeparator = function (i) {
    var di = this.createObject(this.size.w - 10, 6, 'x-menu-separator');
    di.onmouseout = function () { binhanhManager.sp = false };
    di.onmouseover = function () { binhanhManager.sp = true };
    di.onmousedown = function () { binhanhManager.sm = true };
    this.it.ct.appendChild(di);
};

BAContextMenu.prototype.menuItemMouseOut = function (e) {
    binhanhManager.it = this.di;
    binhanhManager.id = binhanhManager.qu.enqueue(0, 2000, this.di.mn, this.di.mn.timerMenuItemMouseOut, [0])
};

BAContextMenu.prototype.timerMenuItemMouseOut = function () {
    if (!binhanhManager.it.cf.sm) {
        binhanhManager.it.style.backgroundColor = '#ffffff';
        binhanhManager.it.im.style.color = '#000000';
    }
    if (binhanhManager.rt && binhanhManager.rt.cf.hd && !binhanhManager.sp)
        binhanhManager.rt.hide();
};

BAContextMenu.prototype.menuItemMouseOver = function (e) {
    binhanhManager.qu.dequeue(0, binhanhManager.id);
    if (binhanhManager.it) {
        if (!binhanhManager.it.cf.sm) {
            binhanhManager.it.style.backgroundColor = '#ffffff';
            binhanhManager.it.im.style.color = '#000000';
            if (this.di.mn.cf.lv < binhanhManager.it.mn.cf.lv) {
                for (var i = this.di.mn.cf.lv - 1; i < binhanhManager.it.mn.cf.lv; i++) {
                    if (binhanhManager.mn[i]) {
                        binhanhManager.mn[i].it.style.backgroundColor = '#ffffff';
                        binhanhManager.mn[i].it.im.style.color = '#000000';
                        binhanhManager.mn[i].sm.hide(true);
                    }
                }
                //document.getElementById('tmp').value = '1';
                binhanhManager.it.mn.hide(true);
                binhanhManager.it.mn.pr.di.style.backgroundColor = '#ffffff';
                binhanhManager.it.mn.pr.di.im.style.color = '#000000';
                if (binhanhManager.it.cf.sm)
                    binhanhManager.it.cf.sm.hide(true);
            }
        } else {
            if (this.di.mn != binhanhManager.it.cf.sm) {
                for (var i = this.di.mn.cf.lv - 1; i < binhanhManager.it.mn.cf.lv; i++) {
                    if (binhanhManager.mn[i]) {
                        binhanhManager.mn[i].it.style.backgroundColor = '#ffffff';
                        binhanhManager.mn[i].it.im.style.color = '#000000';
                        binhanhManager.mn[i].sm.hide(true);
                    }
                }
                //document.getElementById('tmp').value = '2';
                binhanhManager.it.style.backgroundColor = '#ffffff';
                binhanhManager.it.im.style.color = '#000000';
                binhanhManager.it.cf.sm.hide(true);
                if (this.di.mn.cf.lv < binhanhManager.it.mn.cf.lv) {
                    binhanhManager.it.style.backgroundColor = '#ffffff';
                    binhanhManager.it.im.style.color = '#000000';
                    binhanhManager.it.mn.hide(true);
                }
            } else {
                if (this.di.mn.cf.lv < binhanhManager.it.mn.cf.lv) {
                    //document.getElementById('tmp').value = '3';
                    binhanhManager.it.mn.hide(true);
                    binhanhManager.it.mn.pr.di.style.backgroundColor = '#ffffff';
                    binhanhManager.it.mn.pr.di.im.style.color = '#000000';
                    if (binhanhManager.it.cf.sm)
                        binhanhManager.it.cf.sm.hide(true);
                }
            }
        }
        //document.getElementById('tmp').value = this.di.mn.menu.level;

        binhanhManager.it = null;
    }
    this.di.style.backgroundColor = this.di.mn.cf.fc;
    if (!this.di.cf.ds)
        this.di.im.style.color = this.di.mn.cf.tc;
    if (this.di.cf.sm) {
        var ps = this.di.mn.adjustPosition(this.di);
        ps.x = ps.x + this.di.mn.size.w - 10;
        this.di.cf.sm.showAt(ps, true);
        binhanhManager.mn[this.di.mn.cf.lv - 1] = { it: this.di, sm: this.di.cf.sm };
    }
};

BAContextMenu.prototype.menuItemOnClick = function () {
    if (this.di.cf.handler != null)
        this.di.cf.handler.apply(this.di.mn.sc != null ? this.di.mn.sc : this, []);
    if (binhanhManager.rt)
        binhanhManager.rt.hide();
};

BAContextMenu.prototype.createObject = function (w, h, c) {
    var d = document.createElement('div');
    if (w > 0)
        d.style.width = w + 'px';
    if (h > 0)
        d.style.height = h + 'px';
    d.style.float = 'left';
    if (c.length > 0)
        d.className = c;
    d.oncontextmenu = this.contextMenu;
    return d;
};

BAContextMenu.prototype.contextMenu = function (e) {
    return false;
};

BAContextMenu.prototype.getWindowSize = function () {
    var ww = 0, hh = 0;
    if (window.innerWidth)
        ww = window.innerWidth;
    else if (this.isIE)
        ww = document.body.parentElement.clientWidth;
    else if (document.body && document.body.clientWidth)
        ww = document.body.clientWidth;

    if (window.innerHeight)
        hh = window.innerHeight;
    else if (this.isIE)
        hh = document.body.parentElement.clientHeight;
    else if (document.body && document.body.clientHeight)
        hh = document.body.clientHeight;

    return { w: ww, h: hh };
};

BAContextMenu.prototype.showAt = function (p, s) {
    if (!s) {
        if (binhanhManager.rt)
            binhanhManager.rt.hide();
        binhanhManager.rt = this;
        binhanhManager.sm = true;
    }
    var ws = this.getWindowSize();
    if (p.x + this.size.w > (ws.w - (this.isIE ? 5 : 0))) {
        p.x = p.x - this.size.w;
        if (this.pr != null)
            p.x = p.x - this.pr.mn.size.w + 20;
    }
    if (p.y + this.size.h + 20 > ws.h)
        p.y = p.y - this.size.h + 15;
    this.it.bd.style.display = '';
    this.it.bd.style.top = p.y + 'px';
    this.it.bd.style.left = p.x + 'px';
};

BAContextMenu.prototype.hide = function (s) {
    if (!s) {
        for (var i = 0; i < binhanhManager.mn.length; i++) {
            if (binhanhManager.mn[i]) {
                binhanhManager.mn[i].it.style.backgroundColor = '#ffffff';
                binhanhManager.mn[i].it.im.style.color = '#000000';
                binhanhManager.mn[i].sm.hide(true);
            }
        }
        binhanhManager.rt = null;
    }
    this.it.bd.style.display = 'none';
};

BAContextMenu.prototype.adjustPosition = function (obj) {
    var offsetLeft = 0;
    var offsetTop = 0;
    while (obj) {
        offsetLeft += parseInt(obj.offsetLeft);
        offsetTop += parseInt(obj.offsetTop);
        obj = obj.offsetParent;
    }
    return { x: offsetLeft, y: offsetTop };
};

function BAMenuItem(config, menu, scope, focusColor, textColor, index, level) {
    this.isMenuItem = true;
    this.iconCls = config.iconCls ? ('x-menu-items-icon ' + config.iconCls) : 'x-menu-items-icon';
    this.text = config.text || '&nbsp;';
    this.scope = config.scope || null;
    this.handler = config.handler || null;
    this.ds = config.disabled || false;
    this.mn = menu;
    this.dx = index;
    this.lv = level;
    if (config.menu) {
        config.menu.focusColor = focusColor;
        config.menu.textColor = textColor;
        config.menu.index = index + 1;
        config.menu.level = level + 1;
        config.menu.scope = config.menu.scope || scope;
        this.sm = new BAContextMenu(config.menu);
        this.sm.pr = this;
    } else {
        this.sm = null;
    }
};

function BAMenuSeparator() {
    this.isMenuItem = false;
};

function BAQueueManager() {
    this.Queue = [[]];
};

BAQueueManager.prototype.enqueue = function (objectID, timeout, obj, func, args) {
    var pos = this.Queue.length;
    for (var i = 0; i < this.Queue.length; i++) {
        if (this.Queue[objectID][i] == null) {
            pos = i;
            break;
        }
    }
    var id = window.setTimeout("BAQueueManager_Execute(" + objectID + "," + pos + ")", timeout);
    this.Queue[objectID][pos] = new Array(id, obj, func, args);
    return pos;
};

BAQueueManager.prototype.dequeue = function (objectID, pos) {
    if (this.Queue[objectID][pos] != null) {
        window.clearTimeout(this.Queue[objectID][pos][0]);
        this.Queue[objectID][pos] = null;
    }
};

function BAQueueManager_Execute(objectID, pos) {
    if (binhanhManager.qu.Queue[objectID][pos] != null) {
        var obj = binhanhManager.qu.Queue[objectID][pos][1];
        var func = binhanhManager.qu.Queue[objectID][pos][2];
        if (binhanhManager.qu.Queue[objectID][pos][3] != null) {
            func.apply(obj, binhanhManager.qu.Queue[objectID][pos][3]);
        } else {
            func.apply(obj);
        }
        binhanhManager.qu.Queue[objectID][pos] = null;
    }
};

binhanhManager = {
    rt: null,
    id: -1,
    it: null,
    mn: [],
    sp: true,
    qu: new BAQueueManager(),
    menu: BAContextMenu
};
;
//***************************mapMenu****************************************************************************************************/
//Các chức năng hiện khi chuột phải trên bản đồ online!
var mapMenu = [
    {
        text: LanguageManager.getText("RIGHT_MENU_NEAREST_VEHICLES") + '    ',
        iconCls: 'x-menu-items-search-vehicle-nearest',
        handler: function () {
            this.findCarNearest.apply(this, []);
        }
    },
    {
        peid: '5',
        text: LanguageManager.getText("RIGHT_MENU_FIND_THINGS"),
        iconCls: 'x-menu-items-search',
        handler: function () {
            //alert(LanguageManager.getText("RIGHT_MENU_FIND_THINGS"));
            this.searchCar.apply(this, []);
        }
    },
    {
        text: LanguageManager.getText("RIGHT_MENU_LIST_DRIVER_NOT_LOGIN") + '    ',
        iconCls: 'x-menu-items-list-driver-not-login',
        handler: function () {
         
           this.listDriverNotLogin.apply(this, []);
        }
    },
    {
        peid: '549',
        text: LanguageManager.getText("RIGHT_MENU_CREATE_LANDMARK"),
        iconCls: 'x-menu-items-creat_point',
        handler: function () {
            this.addNewLandMarkOnline.apply(this, []);
        }
    },
    {
        text: LanguageManager.getText("RIGHT_MENU_VIEW_ADDRESS"),
        iconCls: 'x-menu-items-view_add',
        handler: function () {
            this.showAddress.apply(this, []);
        }
    },
     {
         text: LanguageManager.getText("RIGHT_MENU_DISTANCE_MEASURE"),
         iconCls: 'x-menu-items-distance_measure',
         handler: function () {
             // Gọi module đo khoảng cách từ class TaxiMapBase.
             this.distanceMeasure.apply(this, []);
         }
     },
     {
         text: LanguageManager.getText("RIGHT_MENU_GUIDE"),
         iconCls: 'x-menu-items-arrow',
         handler: function () {
             this.directiveGuide.apply(this, []);
         }
     },
     '-',
      {
          text: LanguageManager.getText("RIGHT_MENU_VEHICLE_GARA"),
          iconCls: 'x-menu-items-vehicle-gara',
          handler: function () {
              this.findCarGara.apply(this, []);
          }
      },
    {
        text: LanguageManager.getText("RIGHT_MENU_VEHICLE_IN_REGION"),
        iconCls: 'x-menu-items-search-vehicle',
        handler: function () {
            this.findCarArea.apply(this, []);
        }
    },
    {
        text: LanguageManager.getText("RIGHT_MENU_VEHICLE_IN_OPERATEAREA") + '    ',
        iconCls: 'x-menu-items-search-vehicle-in-operate-area',
        handler: function () {
            this.findVehiclesInOperateArea.apply(this, []);
        }
    },
     {
         peid: '549',
         text: LanguageManager.getText("ListLandmarks_ShowHideLandmark"),
         iconCls: 'x-menu-items-visible-boundary',
         handler: function () {
             this.showConfigLandMark.apply(this, []);
         }
     },
       {
           peid: '549',
           text: LanguageManager.getText("RIGHT_MENU_VISIBLE_BOUNDARY"),
           iconCls: 'x-menu-items-visible-boundary',
           handler: function () {
               this.showHideLandMarkbound.apply(this, []);;
           }
       },
    {
        text: LanguageManager.getText("RIGHT_MENU_BOOT_CONFIGURATION"),
        iconCls: 'x-menu-items-start_config',
        handler: function () {
            this.openPopupConfigOnline.apply(this, []);
        }
    }
];


//********************vehicleMenu***********************************************************************************************************/
//Các chức năng hiện khi chuột phải vào icon của xe trên bản đồ!
var vehicleMenu = [{
    peid: '2',
    text: LanguageManager.getText("RIGHT_MENU_VIEW_ROUTE"),
    iconCls: 'x-menu-items-history_route',
    handler: function () {
        this.drawInlineRoute15Minute.apply(this, []);
    },
    menu: {
        items: [{
            text: LanguageManager.getText("RIGHT_MENU_RECENTMINUTES_15"),
            iconCls: 'x-menu-items-history_route',
            menu: {
                items: [
                 {
                     text: LanguageManager.getText("RIGHT_MENU_VIEW_QUICK"),
                     iconCls: 'x-menu-items-quick_view',
                     handler: function () {
                         this.drawInlineRoute15Minute.apply(this, []);
                     }
                 },

                 {
                     text: LanguageManager.getText("RIGHT_MENU_VIEW_NEW_WINDOW"),
                     iconCls: 'x-menu-items-new_window',
                     handler: function () {
                         this.viewNewRoute15Minute.apply(this, []);
                     }
                 }
                ]
            }

        }, {
            text: LanguageManager.getText("RIGHT_MENU_RECENTMINUTES_30"),
            iconCls: 'x-menu-items-history_route'
            , menu: {
                items: [
                      {
                          text: LanguageManager.getText("RIGHT_MENU_VIEW_QUICK"),
                          iconCls: 'x-menu-items-quick_view',
                          handler: function () {
                              this.drawInlineRoute30Minute.apply(this, []);
                          }
                      },
                     {
                         text: LanguageManager.getText("RIGHT_MENU_VIEW_NEW_WINDOW"),
                         iconCls: 'x-menu-items-new_window',
                         handler: function () {
                             this.viewNewRoute30Minute.apply(this, []);
                         }
                     }
                ]
            }

        }, '-', {
            text: LanguageManager.getText("RIGHT_MENU_RECENTMINUTES_60"),
            iconCls: 'x-menu-items-history_route'
             , menu: {
                 items: [
                      {
                          text: LanguageManager.getText("RIGHT_MENU_VIEW_QUICK"),
                          iconCls: 'x-menu-items-quick_view',
                          handler: function () {
                              this.drawInlineRoute1Hour.apply(this, []);
                          }
                      },

                     {
                         text: LanguageManager.getText("RIGHT_MENU_VIEW_NEW_WINDOW"),
                         iconCls: 'x-menu-items-new_window',
                         handler: function () {
                             this.viewNewRoute1Hour.apply(this, []);
                         }
                     }

                 ]
             }
        }
        , {
            text: LanguageManager.getText("RIGHT_MENU_RECENTMINUTES_120"),
            iconCls: 'x-menu-items-history_route'
           , menu: {
               items: [
                      {
                          text: LanguageManager.getText("RIGHT_MENU_VIEW_QUICK"),
                          iconCls: 'x-menu-items-quick_view',
                          handler: function () {
                              this.drawInlineRoute2Hour.apply(this, []);
                          }
                      },

                     {
                         text: LanguageManager.getText("RIGHT_MENU_VIEW_NEW_WINDOW"),
                         iconCls: 'x-menu-items-new_window',
                         handler: function () {
                             this.viewNewRoute2Hour.apply(this, []);
                         }
                     }
               ]
           }
        }
        , {
            text: LanguageManager.getText("RIGHT_MENU_RECENTMINUTES_240"),
            iconCls: 'x-menu-items-history_route'
             , menu: {
                 items: [
                      {
                          text: LanguageManager.getText("RIGHT_MENU_VIEW_QUICK"),
                          iconCls: 'x-menu-items-quick_view',
                          handler: function () {
                              this.drawInlineRoute4Hour.apply(this, []);
                          }
                      },

                     {
                         text: LanguageManager.getText("RIGHT_MENU_VIEW_NEW_WINDOW"),
                         iconCls: 'x-menu-items-new_window',
                         handler: function () {
                             this.viewNewRoute4Hour.apply(this, []);
                         }
                     }

                 ]
             }
        }

        , {
            text: LanguageManager.getText("RIGHT_MENU_RECENTMINUTES_480"),
            iconCls: 'x-menu-items-history_route'
             , menu: {
                 items: [
                      {
                          text: LanguageManager.getText("RIGHT_MENU_VIEW_QUICK"),
                          iconCls: 'x-menu-items-quick_view',
                          handler: function () {
                              this.drawInlineRoute8Hour.apply(this, []);
                          }
                      },

                     {
                         text: LanguageManager.getText("RIGHT_MENU_VIEW_NEW_WINDOW"),
                         iconCls: 'x-menu-items-new_window',
                         handler: function () {
                             this.viewNewRoute8Hour.apply(this, []);
                         }
                     }

                 ]
             }
        }
        , '-', {
            text: LanguageManager.getText("RIGHT_MENU_VIEW_TODAY"),
            iconCls: 'x-menu-items-history_route',
            handler: function () {
                this.viewNewRouteInDay.apply(this, []);
            }
        }

        , {
            text: LanguageManager.getText("RIGHT_MENU_VIEW_OPTION"),
            iconCls: 'x-menu-items-history_route',
            handler: function () {
                this.viewNewRouteOption.apply(this, []);
            }
        }
        ]
    }
}
, {
    text: LanguageManager.getText("RIGHT_MENU_VEHICLE_STATUS"),
    iconCls: 'x-menu-items-from',
    handler: function () {
        this.showVehicleStatus.apply(this, []);
    }
},
{
    peid: '493',
    text: LanguageManager.getText("RIGHT_MENU_DEVICE_INFO"),
    iconCls: 'x-menu-items-device_info',
    handler: function () {
        this.deviceInfo.apply(this, []);
    }
},
{
    peid: '752',
    text: LanguageManager.getText("RIGHT_MENU_CAMERA_IMAGE"),
    iconCls: 'x-menu-items-device_info',
    handler: function () {
        this.cameraImage.apply(this, []);
    }
}
, {
    peid: '572',
    text: LanguageManager.getText("InputSubRoute_InputSubRoute"),
    iconCls: 'x-menu-items-from',
    handler: function () {
        this.openInputSubRoute.apply(this, []);
    }
}
,
{
    peid: '760',
    text: LanguageManager.getText("RIGHT_MENU_DRIVER_INFORM"),
    iconCls: 'x-menu-items-driver_inform',
    menu: {
        items: [
            {
                text: LanguageManager.getText("RIGHT_MENU_LEAVE"),
                iconCls: 'x-menu-items-driver_leave',
                handler: function () {
                    this.driverLeave.apply(this, []);
                }
            }

        , {
            text: LanguageManager.getText("RIGHT_MENU_WAKEUP"),
            iconCls: 'x-menu-items-driver_wakeup',
            handler: function () {
                this.driverWakeup.apply(this, []);
            }
        }
        ]
    }
}

];

//************routeMenu*******************************************************************************************************************/
var routeMenu = [
    {
        text: LanguageManager.getText("RIGHT_MENU_ZOOM_IN"),
        iconCls: 'x-menu-items-zoon-in',
        handler: function () {
            this.zoomIn.apply(this, []);
        }
    },
    {
        text: LanguageManager.getText("RIGHT_MENU_ZOOM_OUT"),
        iconCls: 'x-menu-items-zoon-out',
        handler: function () {
            this.zoomOut.apply(this, []);
        }
    },
    {
        text: LanguageManager.getText("RIGHT_MENU_CENTER_HERE"),
        iconCls: 'x-menu-items-save',
        handler: function () {
            this.setCenter.apply(this, []);
        }
    },
     {
         text: LanguageManager.getText("RIGHT_MENU_GUIDE"),
         iconCls: 'x-menu-items-arrow',
         handler: function () {
             this.directiveGuide.apply(this, []);
         }
     },
    '-',
     {
         text: LanguageManager.getText("RIGHT_MENU_DISTANCE_MEASURE"),
         iconCls: 'x-menu-items-distance_measure',
         handler: function () {
             // Gọi module đo khoảng cách từ class TaxiMapBase.
             this.distanceMeasure.apply(this, []);
         }
     },
    {
        peid: '549',
        text: LanguageManager.getText("RIGHT_MENU_CREATE_LANDMARK"),
        iconCls: 'x-menu-items-creat_point',
        handler: function () {
            this.addNewLandMarkOnline.apply(this, []);
        }
    },
    '-',
    {
        text: LanguageManager.getText("RIGHT_MENU_BOOT_CONFIGURATION"),
        iconCls: 'x-menu-items-start_config',
        handler: function () {
            this.openPopupConfigOnline.apply(this, []);
        }
    }
];

//***********landmarkMenu********************************************************************************************************************/
var landmarkMenu = [
      {
          text: LanguageManager.getText("RIGHT_MENU_ZOOM_IN"),
          iconCls: 'x-menu-items-zoon-in',
          handler: function () {
              this.zoomIn.apply(this, []);
          }
      },
    {
        text: LanguageManager.getText("RIGHT_MENU_ZOOM_OUT"),
        iconCls: 'x-menu-items-zoon-out',
        handler: function () {
            this.zoomOut.apply(this, []);
        }
    },
    {
        text: LanguageManager.getText("RIGHT_MENU_CENTER_HERE"),
        iconCls: 'x-menu-items-save',
        handler: function () {
            this.panTo.apply(this, []);
        }
    },
     {
         text: LanguageManager.getText("RIGHT_MENU_GUIDE"),
         iconCls: 'x-menu-items-arrow',
         handler: function () {
             this.directiveGuide.apply(this, []);
         }
     },
    '-',
     {
         text: LanguageManager.getText("RIGHT_MENU_DISTANCE_MEASURE"),
         iconCls: 'x-menu-items-distance_measure',
         handler: function () {
             // Gọi module đo khoảng cách từ class TaxiMapBase.
             this.distanceMeasure.apply(this, []);
         }
     },
    {
        peid: '549',
        text: LanguageManager.getText("RIGHT_MENU_CREATE_LANDMARK"),
        iconCls: 'x-menu-items-start_config',
        handler: function () {
            this.addNewLandMark.apply(this, []);
        }
    },
    '-',
    {
        text: LanguageManager.getText("RIGHT_MENU_BOOT_CONFIGURATION"),
        iconCls: 'x-menu-items-start_config',
        handler: function () {
            this.openPopupConfigOnline.apply(this, []);
        }
    },
    {
        text: LanguageManager.getText("RIGHT_MENU_VIEW_ADDRESS"),


        iconCls: 'x-menu-items-start_config',
        handler: function () {
            this.showAddress.apply(this, []);
        }
    }
];
//*******************************************************************************************************************************/
;
/* 
* $Author$		luanbh
* Lấy về giá trị biển số và id xe
*/
VehicleOnlineManager.prototype.getVehicleObj = function () {
    var plate = (this.currentVehicle != null && this.currentVehicle != undefined) ? this.currentVehicle.VehiclePlate : '';
    var vehicleID = (this.currentVehicle != null && this.currentVehicle != undefined) ? this.currentVehicle.VehicleID : 0;
    return {
        VehiclePlate: plate,
        VehicleID: vehicleID
    };
}

/* 
* $Author$		luanbh
* Mở cửa sổ Lộ Trình mới và truyền data qua query string
*/
VehicleOnlineManager.prototype.openWindowRoute = function (time) {
    var obj = this.getVehicleObj();
    window.open("/Route/Index?VehiclePlate=" + obj.VehiclePlate + "&Time=" + time + "&VehicleID=" + obj.VehicleID, "target");
}

/* 
* $Author$		trungtq
* Xem lo trinh 15 phut gan day
*/
VehicleOnlineManager.prototype.viewNewRoute15Minute = function () {
    this.openWindowRoute("15m");
};

/* 
* $Author$		trungtq
* Xem lo trinh 30 phut gan day
*/
VehicleOnlineManager.prototype.viewNewRoute30Minute = function () {
    this.openWindowRoute("30m");
};

/* 
* $Author$		trungtq
* Xem lo trinh 1 gio phut gan day
*/
VehicleOnlineManager.prototype.viewNewRoute1Hour = function () {
    this.openWindowRoute("60m");
};

/* 
* $Author$		trungtq
* Xem lo trinh 2 gio gan day
*/
VehicleOnlineManager.prototype.viewNewRoute2Hour = function () {
    this.openWindowRoute("120m");
};

/* 
* $Author$		trungtq
* Xem lo trinh 4 gio gan day
*/
VehicleOnlineManager.prototype.viewNewRoute4Hour = function () {
    this.openWindowRoute("240m");
};

/* 
* $Author$		trungtq
* Xem lo trinh 8 gio gan day
*/
VehicleOnlineManager.prototype.viewNewRoute8Hour = function () {
    this.openWindowRoute("480m");
};

/* 
* $Author$		trungtq
* Xem lo trinh trong ngay
*/
VehicleOnlineManager.prototype.viewNewRouteInDay = function () {
    this.openWindowRoute("1d");
};

/* 
* $Author$		trungtq
* Xem lo trinh tuy chon
*/
VehicleOnlineManager.prototype.viewNewRouteOption = function () {
    this.openWindowRoute("-1");
};

/* 
* $Author$		trungtq
* Xem nhanh lo trinh 15 phut gan day
*/
VehicleOnlineManager.prototype.drawInlineRoute15Minute = function () {
    this.drawInlineRoute("15m");
};

/* 
* $Author$		trungtq
* Xem nhanh lo trinh 30 phut gan day
*/
VehicleOnlineManager.prototype.drawInlineRoute30Minute = function () {
    this.drawInlineRoute("30m");
};

/* 
* $Author$		trungtq
* Xem nhanh lo trinh 1 gio phut gan day
*/
VehicleOnlineManager.prototype.drawInlineRoute1Hour = function () {
    this.drawInlineRoute("60m");
};

/* 
* $Author$		trungtq
* Xem nhanh lo trinh 2 gio gan day
*/
VehicleOnlineManager.prototype.drawInlineRoute2Hour = function () {
    this.drawInlineRoute("120m");
};

/* 
* $Author$		trungtq
* Xem nhanh lo trinh 4 gio gan day
*/
VehicleOnlineManager.prototype.drawInlineRoute4Hour = function () {
    this.drawInlineRoute("240m");
};

/* 
* $Author$		trungtq
* Xem nhanh lo trinh 8 gio gan day
*/
VehicleOnlineManager.prototype.drawInlineRoute8Hour = function () {
    this.drawInlineRoute("480m");
};

VehicleOnlineManager.prototype.showVehicleStatus = function () {
    var vehicleID = (this.currentVehicle != null && this.currentVehicle != undefined) ? this.currentVehicle.VehicleID : '0';
    this.panTo(vehicleID);
};

// Vẽ lộ trình trong 1 khoảng thời gian
VehicleOnlineManager.prototype.drawInlineRoute = function (time) {
    var obj = this.getVehicleObj();
    if (this.routeMap == null) {
        this.routeMap = new RouteMap(null);
        this.routeMap.displayMap = this.mapStraction;
        this.initWdnDeleteRoute();
    }
    this.routeMap.drawAllRouteOnline(obj.VehicleID, obj.VehiclePlate, time);
    $("#divDeleteWrapper").data("kendoWindow").open();
};

// Init cửa sổ xóa lộ trình
VehicleOnlineManager.prototype.initWdnDeleteRoute = function () {
    if ($('#divDeleteWrapper').length == 0) {
        var popup = "<div id='divDeleteWrapper' style='display: none;'>" +
            "<div id='divDeleteRoute' style='text-align:center'>" +
            "<input type='button' value='" + LanguageManager.getText("Common_Delete") + "' onclick='onlineMap.deleteInlineRoute()' class='btn btn-primary' />" +
            "</div>" +
            "</div>";
        $("body").append(popup);
        $("#divDeleteWrapper").kendoWindow({
            title: LanguageManager.getText("Common_Delete") + " " + LanguageManager.getText("Common_Route"),
            visible: false,
            width: "300px",
            open: function (e) {
                this.wrapper.css({ top: 200 });
            },
            close: function () {
                onlineMap.deleteInlineRouteOnClose();
            }
        }).data("kendoWindow");
        $($("#divDeleteWrapper").parentsUntil("k-widget k-window")[0]).css("min-height", "30px");
    }
}

// Event ấn nút xóa của cửa sổ xóa lộ trình
VehicleOnlineManager.prototype.deleteInlineRoute = function () {
    this.routeMap.clearMarkers();
    $("#divDeleteWrapper").data("kendoWindow").close();
}

// Event ấn nút tắt của cửa sổ xóa lộ trình
VehicleOnlineManager.prototype.deleteInlineRouteOnClose = function () {
    this.routeMap.clearMarkers();
}

VehicleOnlineManager.prototype.deviceInfo = function () {
    var vehicleID = (this.currentVehicle != null && this.currentVehicle != undefined) ? this.currentVehicle.VehicleID : 0;
    //DeviceInfoManager.GetDeviceInfo(vehicleID);
    $("#divDeviceInfo").draggable({ cursor: "move", cancel: "#lblVehiclePlate,#tdDeviceInfo,#tdSimInfo,#tdSim,#tdPower,#tdCard" });
    deviceInfo.ShowOnline(vehicleID);
};

/* 
* $Author$		phongnc
* Xem ảnh camera
*/
VehicleOnlineManager.prototype.cameraImage = function () {
    var plate = (this.currentVehicle != null && this.currentVehicle != undefined) ? this.currentVehicle.VehiclePlate : '';
    if (plate != '') {
        //kendo.ui.progress($(".row-fluid"), true);
        $("#divCameraImgLoading").show();
        $.ajax({
            type: "Post",
            dataType: "html",
            contentType: 'application/json; charset=utf-8',
            url: "/CameraImage/GetCameraImageOnline",
            data: JSON.stringify({
                vehiclePlate: plate
            }),
            success: function (data) {
                if (data != undefined) {
                    $("#divCameraImgOnline").html(data);
                } else {
                    common.DisplayNotification(LanguageManager.getText("Common_EmptyData"), common.notification_type_error);
                }
                //kendo.ui.progress($(".row-fluid"), false);
                $("#divCameraImgLoading").hide();
            },
            error: function () {
                common.DisplayNotification(LanguageManager.getText("Common_ErrorProcessing"), common.notification_type_error);
                //kendo.ui.progress($(".row-fluid"), false);
                $("#divCameraImgLoading").hide();
            }
        });
    }
};

VehicleOnlineManager.prototype.createNewLandmark = function () {
    BaseRightMenuManager.createNewLandmark(this.rightMenuMap.latLng);
};

VehicleOnlineManager.prototype.showFormConfigMapOnline = function () {
    showFormConfigMapOnline(this.map, 'divConfigMap');
};

VehicleOnlineManager.prototype.openInputSubRoute = function () {
    var vehicleID = (this.currentVehicle != null && this.currentVehicle != undefined) ? this.currentVehicle.VehicleID : 0;
    var win = window.open('/InputSubscriberRoute/Add?vehicleId=' + vehicleID, '_blank');
    win.focus();
}

/* 
* $Author: Longtq
* Lái xe báo nghỉ
*/
VehicleOnlineManager.prototype.driverLeave = function () {
    var that = this;
    try {
        var vehicleID = (that.currentVehicle != null && that.currentVehicle != undefined) ? that.currentVehicle.VehicleID : 0;
        if (vehicleID != '') {
            $.ajax({
                dataType: "json",
                url: "/Online/DriverLeave",
                data: { vehicleId: vehicleID },
                success: function (result) {
                    if (result.result.success == true) {
                        // trungtq: Nếu có quyền báo xe nghỉ thì cập nhật lại trạng thái.
                        if (that.enableVehicleInactivity == true) {
                            // Lấy đối tượng trong từ điển ra theo ID xe
                            var objVehicle = that.dicMarkers.get(vehicleID);
                            // Nếu đã có trong từ điển
                            if (objVehicle != null) {
                                // Đặt lại trạng thái xe về -1 (Trạng thái nghỉ)
                                objVehicle.vehicle.OtherState = -1;

                                // trungtq: xử lý trong trường hợp xe thay đổi trạng thái => thêm hoặc loại bỏ xe khỏi danh sách
                                that.addOrRemoveRow(objVehicle);
                            }
                        }

                        common.DisplayNotification(LanguageManager.getText("Common_UpdateSuccess"), common.notification_type_success);
                    }
                    else {
                        common.DisplayNotification(result.result.msg, common.notification_type_error);
                    }
                },
                error: function () {
                    common.DisplayNotification(LanguageManager.getText("Common_ErrorProcessing"), common.notification_type_error);
                }
            });
        }
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.driverLeave:" + err);
    }
}

/* 
* $Author: Longtq
* Lái xe báo hoạt động lại
*/
VehicleOnlineManager.prototype.driverWakeup = function () {
    var that = this;
    try {
        var vehicleID = (that.currentVehicle != null && that.currentVehicle != undefined) ? that.currentVehicle.VehicleID : 0;
        if (vehicleID != '') {
            $.ajax({
                dataType: "json",
                url: "/Online/DriverWakeup",
                data: { vehicleId: vehicleID },
                success: function (result) {
                    if (result.result.success == true) {
                        // trungtq: Nếu có quyền báo xe nghỉ thì cập nhật lại trạng thái.
                        if (that.enableVehicleInactivity == true) {
                            // Lấy đối tượng trong từ điển ra theo ID xe
                            var objVehicle = that.dicMarkers.get(vehicleID);
                            // Nếu đã có trong từ điển
                            if (objVehicle != null) {
                                // Đặt lại trạng thái xe về 0 (Hoạt động lại).
                                objVehicle.vehicle.OtherState = 0;

                                // trungtq: xử lý trong trường hợp xe thay đổi trạng thái => thêm hoặc loại bỏ xe khỏi danh sách
                                that.addOrRemoveRow(objVehicle);
                            }
                        }
                        common.DisplayNotification(LanguageManager.getText("Common_UpdateSuccess"), common.notification_type_success);
                    }
                    else {
                        common.DisplayNotification(result.result.msg, common.notification_type_error);
                    }
                },
                error: function () {
                    common.DisplayNotification(LanguageManager.getText("Common_ErrorProcessing"), common.notification_type_error);
                }
            });
        }
    }
    catch (err) {
        console.log("VehicleOnlineManager.prototype.driverWakeup:" + err);
    }
}
;
/*
Class quản lý điểm trên trang giám sát online
*/
var LandmarkOnline = function (opt) {
    this.map = opt != undefined ? opt.map : null;
    this.mapStraction = opt != undefined ? opt.mapStraction : null;
    this.isUseClusterForLandmark = (opt != null && opt != undefined && opt.IsUseClusterForLandmark != undefined) ? opt.IsUseClusterForLandmark : false;
    this.lstLandmark = null;
    this.useLabel = null;
    this.configMapManager = new ConfigMapManager();  // Khởi tạo đối tượng quản lý cấu hình map theo người dùng
    this.landmarkCluster = null;
    this.listLandmarkMarker = [];
};

// Lấy thông tin cấu hình ẩn hiện đường bao của điểm
LandmarkOnline.prototype.isShowLandmarkBound = function () {
    return this.configMapManager.IsShowLandMarkBound();
}

// Khoi tao mac dinh
LandmarkOnline.prototype.initAll = function () {
    var that = this;
    var useGoogle = that.mapStraction.api === 'googlev3';//*sign
    if (that.mapStraction != null) {
        var i;
        if (that.lstLandmark != null && that.lstLandmark.length > 0) {
            for (i = 0; i < this.lstLandmark.length; i++) {
                if (!useGoogle) {
                    if (that.lstLandmark[i].PolygonOnMap != undefined) {
                        if (that.lstLandmark[i].isPolygon) {
                            that.mapStraction.removePolyline(that.lstLandmark[i].PolygonOnMap);
                        } else {
                            that.mapStraction.removeCircle(that.lstLandmark[i].PolygonOnMap);
                        }
                    }
                    that.mapStraction.removeMarker(that.lstLandmark[i].markerLm);
                } else {
                    that.lstLandmark[i].markerLm.setMap(null);
                    if (that.lstLandmark[i].PolygonOnMap != undefined)
                        that.lstLandmark[i].PolygonOnMap.setMap(null);
                }

            }
        }

        that.lstLandmark = [];
        that.listLandmarkMarker = [];
        that.init("", 0);
        if (that.isUseClusterForLandmark) {
            that.landmarkCluster = new mxn.MarkerClusterer({
                zoomToBoundsOnClick: true,
                minNumberSize: 10,
                maxClusterRadius: 160,
                maxZoom: 20,
                disableClusteringAtZoom: 24,
                color: 'white',
                bgColor: '#2672ec',
                height: 40,
                width: 40,
                bgUrl: '/images/Blue0.png',
                enableCustomIcon: true
            });

            that.mapStraction.addCluster(that.landmarkCluster);
            that.landmarkCluster.addMarkers(that.listLandmarkMarker);
        }
        else {
            $.each(that.listLandmarkMarker, function (idx,item) {
                that.mapStraction.addMarker(item);
            });
        }
        // trungtq: load vùng bao theo cấu hình ?? tại sao có chỗ này. Trong Init có vẻ có rồi mà
        if (that.lstLandmark != null && that.lstLandmark.length > 0) {
            var isShow = that.isShowLandmarkBound();
            //! Chỗ này đảm bảo nếu sử dụng Cluster cho điểm thì ẩn cái vùng bao của điểm đi
            if (that.isUseClusterForLandmark) {
                isShow = false;
            }
            for (i = 0; i < that.lstLandmark.length; i++) {
                if (that.lstLandmark[i].PolygonOnMap != undefined) {
                    if (!useGoogle) {
                        if (isShow) {
                            that.lstLandmark[i].PolygonOnMap.show();
                        } else {
                            that.lstLandmark[i].PolygonOnMap.hide();
                        }
                    } else {
                        that.lstLandmark[i].PolygonOnMap.setVisible(isShow);
                    }

                }
            }
        }

    }
};

LandmarkOnline.prototype.init = function (searchText, categoryId) {
    var self = this;
    if (self.mapStraction != null) {
        var lst = [];
        $.ajax({
            type: 'POST',
            url: "/Online/GetListLandmark",
            data: { 'searchText': searchText, 'categoryId': categoryId },
            dataType: 'json',
            async: false,
            success: function (data) {
                lst = data.landmarkResult;
                self.useLabel = data.useLabel;
            },
            error: function () { }
        });
        //remove landmark
        if (self.lstLandmark != null && self.lstLandmark.length > 0) {
            for (var a = 0; a < self.lstLandmark.length; a++) {
                if (self.lstLandmark[a].PolygonOnMap != undefined) {
                    if (self.lstLandmark[a].PolygonOnMap.isPolygon) {
                        self.map.removePolyline(self.lstLandmark[a].PolygonOnMap);
                    } else {
                        self.map.removeCircle(self.lstLandmark[a].PolygonOnMap);
                    }
                }

                if (self.lstLandmark[a].markerLm != undefined) {
                    self.map.removeMarker(self.lstLandmark[a].markerLm);
                }
            }
            self.lstLandmark = [];
        }
        var useGoogle = self.mapStraction.api === 'googlev3';//*sign
        var isShow = self.isShowLandmarkBound();
        //! Chỗ này đảm bảo nếu sử dụng Cluster cho điểm thì ẩn cái vùng bao của điểm đi
        if (self.isUseClusterForLandmark) {
            isShow = false;
        }
        if (lst != null && lst.length > 0) {
            for (var b = 0; b < lst.length; b++) {
                var landmarkInfo = lst[b];
                if (landmarkInfo.IsVisible) {


                    var markerOptions = {
                        icon: landmarkInfo.Icon,
                        iconSize: [20, 20],
                        iconAnchor: [12, 12],
                        zIndex: 1,
                        label: landmarkInfo.Name,
                        labelClass: "labellandmark",
                        labelAnchor: [10, 42],
                        labelZIndex: 2,
                        //-------------------------------
                        draggable: false,
                        labelStyle: { top: "-30px", left: "-3px" },
                        labelVisible: self.useLabel
                    };

                    var marker;
                    if (self.useLabel) {
                        marker = new mxn.MarkerLabel(new mxn.LatLonPoint(landmarkInfo.Latitude, landmarkInfo.Longitude));
                    } else {
                        marker = new mxn.Marker(new mxn.LatLonPoint(landmarkInfo.Latitude, landmarkInfo.Longitude));
                    }

                    marker.addData(markerOptions);
                    marker.mapstraction = self.mapStraction;
                    self.listLandmarkMarker.push(marker);
                    marker.hideWhenPopupClose = false;


                    self.registerLandmarkEvent(marker, landmarkInfo);

                    var lmOnMap = new LandmarkOnMap();
                    lmOnMap.info = landmarkInfo;
                    lmOnMap.Id = landmarkInfo.PK_LandmarkID;
                    lmOnMap.markerLm = marker;

                    if (isShow) {
                        // Vẽ vùng bao trên bản đồ
                        // Nếu là vẽ theo đa giác
                        var colors = self.convertIntToHexaColor(landmarkInfo.Color);
                        if (landmarkInfo.IsPolygon) {
                            if (landmarkInfo.Polygon !== '' && landmarkInfo.Polygon != undefined) {
                                var lstLatLngStr = landmarkInfo.Polygon.split(',');
                                var lstLatLng = [];
                                for (var i = 0; i < lstLatLngStr.length; i++) {
                                    var ll = lstLatLngStr[i].split(' ');
                                    if (ll.length === 2) {
                                        var lng = parseFloat(ll[0]);
                                        var lat = parseFloat(ll[1]);
                                        if (lng != undefined && lat != undefined) {
                                            var loc = new mxn.LatLonPoint(lat, lng);
                                            lstLatLng.push(loc);
                                        }
                                    }
                                }
                                var polygon = null;
                                if (useGoogle) {
                                    polygon = new window.google.maps.Polygon({
                                        paths: lstLatLng,
                                        strokeColor: colors,
                                        strokeOpacity: 0.8,
                                        strokeWeight: 3,
                                        fillColor: colors,
                                        fillOpacity: 0.35,
                                    });

                                    polygon.setMap(self.map);
                                } else {
                                    polygon = new mxn.Polyline();
                                    var po = {
                                        paths: lstLatLng,
                                        strokeColor: colors,
                                        strokeOpacity: 0.8,
                                        strokeWeight: 3,
                                        fillColor: colors,
                                        fillOpacity: 0.35,
                                        closed: true,
                                        color: colors
                                    };

                                    self.mapStraction.addPolylineWithData(polygon, po);
                                }

                                lmOnMap.PolygonOnMap = polygon;
                                //18112017 dang ky su kien luon o day
                            } else {
                                lmOnMap.PolygonOnMap = null;
                            }
                            lmOnMap.isPolygon = true;
                        } else {
                            // Vẽ theo đường tròn
                            var point = null;
                            if (useGoogle) {
                                point = new window.google.maps.LatLng(landmarkInfo.Latitude, landmarkInfo.Longitude);
                            } else {
                                point = new mxn.LatLonPoint(landmarkInfo.Latitude, landmarkInfo.Longitude);
                            }
                            var circleOptions = {
                                strokeColor: colors,
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillColor: colors,
                                fillOpacity: 0.35,
                                //map: self.map,
                                center: point,
                                radius: landmarkInfo.Radius
                            };
                            lmOnMap.radius = landmarkInfo.Radius;
                            // Add the circle for this city to the map.
                            var circle = null;
                            if (useGoogle) {
                                circle = new window.google.maps.Circle(circleOptions);
                                circle.setMap(self.map);
                            } else {
                                circle = new mxn.Circle(new mxn.LatLonPoint(landmarkInfo.Latitude, landmarkInfo.Longitude),
                                    landmarkInfo.Radius);
                                self.mapStraction.addCircleWithData(circle, circleOptions);

                            }

                            lmOnMap.PolygonOnMap = circle;
                            lmOnMap.isPolygon = false;
                            //18112017 dang ky su kien luon o day
                        }
                    }
                    else {
                        lmOnMap.PolygonOnMap = null;
                        lmOnMap.isPolygon = null;
                    }
                    self.lstLandmark.push(lmOnMap);
                }
            }
        }
    }
};


LandmarkOnline.prototype.registerLandmarkEvent = function (marker, landmarkInfo) {
    var that = this;
    marker.click.addHandler(function () {//eventName, eventSource, eventArgs
        //that.showInfoWindowImediate(landmarkInfo, marker);
        that.goToLandmarkPage(landmarkInfo.PK_LandmarkID);
    });

    marker.mouseover.addHandler(function () {//eventName, eventSource, eventArgs
        //setTimeout(function() {
        that.showInfoWindowImediate(landmarkInfo, marker);
        //},2000);

    });

    marker.mouseout.addHandler(function () {//eventName, eventSource, eventArgs
        that.hideInfoWindowImediate(marker);
    });
}

//An hien duong bao theo nhieu nhom
LandmarkOnline.prototype.showHideLandmark = function (isShow, isPolygon) {
    var that = this;
    var useGoogle = that.mapStraction.api === 'googlev3';//*sign

    if (that.mapStraction != null) {
        var i;
        if (isPolygon) {
            for (i = 0; i < that.lstLandmark.length; i++) {
                if (that.lstLandmark[i].info.IsPolygon) {
                    if (!useGoogle) {
                        if (isShow) {
                            that.lstLandmark[i].PolygonOnMap.show();
                            that.lstLandmark[i].markerLm.show();
                        } else {
                            that.lstLandmark[i].PolygonOnMap.hide();
                            that.lstLandmark[i].markerLm.hide();
                        }
                    } else {
                        if (that.lstLandmark[i].info.IsPolygon) {
                            that.lstLandmark[i].markerLm.setVisible(isShow);
                            that.lstLandmark[i].PolygonOnMap.setVisible(isShow);
                        }
                    }
                }
            }
        }
        else {
            for (i = 0; i < that.lstLandmark.length; i++) {
                if (!that.lstLandmark[i].info.IsPolygon) {
                    if (useGoogle) {
                        if (isShow) {
                            that.lstLandmark[i].PolygonOnMap.show();
                            that.lstLandmark[i].markerLm.show();
                        } else {
                            that.lstLandmark[i].PolygonOnMap.hide();
                            that.lstLandmark[i].markerLm.hide();
                        }
                    } else {
                        if (!that.lstLandmark[i].info.IsPolygon) {
                            that.lstLandmark[i].markerLm.setVisible(isShow);
                            that.lstLandmark[i].PolygonOnMap.setVisible(isShow);
                        }
                    }

                }
            }
        }
    }
};

//Hiện điểm , ranh giới là đường tròn
LandmarkOnline.prototype.showLandmarkPoint = function () {
    var that = this;
    that.showHideLandmark(true, false);
};

//Ẩn điểm , ranh giới là đường tròn
LandmarkOnline.prototype.hideLandmarkPoint = function () {
    var that = this;
    that.showHideLandmark(false, false);
};

//Ẩn vùng , ranh giới là đa giác
LandmarkOnline.prototype.showLandmarkArea = function () {
    var that = this;
    that.showHideLandmark(true, true);
};

// Ẩn vùng , ranh giới là đa giác
LandmarkOnline.prototype.hideLandmarkArea = function () {
    var that = this;
    that.showHideLandmark(false, true);
};

//Ẩn hiện đường bao vùng điểm
LandmarkOnline.prototype.showHideLandmarkBound = function (isShow) {
    var that = this;
    var useGoogle = that.mapStraction.api === 'googlev3';//*sign
    try {
        for (var i = 0; i < that.lstLandmark.length; i++) {
            try {
                if (useGoogle) {
                    that.lstLandmark[i].PolygonOnMap.setVisible(isShow);
                } else {
                    if (isShow) {
                        that.lstLandmark[i].PolygonOnMap.show();
                    } else {
                        that.lstLandmark[i].PolygonOnMap.hide();
                    }
                }
            }
            catch (ex) {
                //console.log(ex);
            }
        }

        // trungtq: Lưu lại thông tin cấu hình người dùng => lần sau chỉ đọc lại là ok
        that.onSaveLandmarkBoundary(!isShow);
    }
    catch (err) {
        console.log("LandmarkOnline.prototype.showHideLandmarkBound:" + err);
    }
};

/* 
* $Author$		trungtq
* Lưu lại cấu hình ẩn hiện đường bao
*/
LandmarkOnline.prototype.onSaveLandmarkBoundary = function (isShow) {
    var that = this;
    try {
        $.ajax({
            type: 'POST',
            url: "/Common/SaveLandmarkBoundary",
            data: { isShow: isShow },
            dataType: 'json',
            async: false,
            success: function (result) {
                // Khởi tạo lại đường bao
                that.initAll();
            },
            error: function (error) {
                console.log("LandMarkConfig.prototype.onSaveLandmarkBoundary" + error);
            }
        });
    }
    catch (ex) {
        console.log("LandMarkConfig.prototype.onSaveLandmarkBoundary" + ex);
    }
}



LandmarkOnline.prototype.showInfoWindow = function (landmarkInfo, marker) {
    var self = this;
    return function () {
        self.showInfoWindowImediate(landmarkInfo, marker);
    };
};

//Hanhth
LandmarkOnline.prototype.showInfoWindowImediate = function (landmarkInfo, marker) {
    var content = "<div style='width:100%;'>" +
        '<div style="white-space: nowrap">' +
        landmarkInfo.Name + (landmarkInfo.PrivateName == undefined ? "" : " ( " + landmarkInfo.PrivateName + " ) ") +
        "</div>" +

        "<div style='white-space: nowrap'>" +
        "<a href='javascript:void(0);'>" + LanguageManager.getText('Common_Address')
        + ' : ' + landmarkInfo.Address + '</a>' +
        '</div>' +
        '<div style="white-space: nowrap">' +
        LanguageManager.getText('ListLandmarks_Latitude') + ' : ' + landmarkInfo.Latitude.toFixed(6) + ' , ' +
        LanguageManager.getText('ListLandmarks_Longitude') + ' : ' + landmarkInfo.Longitude.toFixed(6) +
        '</div>' +
        '</div>';

    marker.setInfoBubble(content);
    marker.openBubble(content);
};

LandmarkOnline.prototype.hideInfoWindow = function (marker) {
    var self = this;
    return function () {
        self.hideInfoWindowImediate(marker);
    };
};

LandmarkOnline.prototype.hideInfoWindowImediate = function (marker) {
    marker.hideWhenPopupClose = false;
    return marker.closeBubble();
};

LandmarkOnline.prototype.hideShowLandmarks = function (isShow) {
    var self = this;
    var useGoogle = self.mapStraction.api === 'googlev3';//*sign
    if (isShow) {
    }
    if (self.lstLandmark != undefined && self.lstLandmark.length > 0) {
        for (var i = 0; i < self.lstLandmark.length; i++) {
            if (!useGoogle) {
                if (isShow) {
                    self.lstLandmark[i].markerLm.show();
                    if (self.lstLandmark[i].PolygonOnMap != null)
                        self.lstLandmark[i].PolygonOnMap.show();
                } else {
                    self.lstLandmark[i].markerLm.hide();
                    if (self.lstLandmark[i].PolygonOnMap != null)
                        self.lstLandmark[i].PolygonOnMap.hide();
                }
            } else {
                self.lstLandmark[i].markerLm.setVisible(isShow);
                self.lstLandmark[i].PolygonOnMap.setVisible(isShow);
            }

        }
    }
};

LandmarkOnline.prototype.convertIntToHexaColor = function (colorInt) {
    var colors = colorInt.toString(16);
    var count = 6 - colors.length;
    for (var i = 0; i < count; i++) {
        colors = "0" + colors;
    }

    return "#" + colors;
};

LandmarkOnline.prototype.goToLandmarkPage = function (landmarkId) {
    //return function () {
    window.open('/listlandmarks/Index?id=' + landmarkId, '_blank');
    //chuyen sang trang tao diem , center diem , bat khung va form sua
    //};
};

LandmarkOnline.prototype.panToAndShowInfo = function (id) {
    var that = this;
    if (that.lstLandmark != null) {
        $.each(that.lstLandmark, function (t) {
            if (this.Id.toString() == id) {
                that.showInfoWindowImediate(this.info, this.markerLm);
                return;
            }
        });
    }
}

var LandmarkOnMap = function () {
    this.markerLm = null;
    this.radius = 0;
    this.PolygonOnMap = null;
    this.isPolygon = false;
    this.Id = 0;
    this.info = null;
};

var SingletonLandmarkOnline = (function () {
    var instance = null; // Đối tượng quản lý
    return new function () {
        this.getInstance = function (opt) {
            if (instance == null) {
                instance = new LandmarkOnline(opt);
                instance.constructor = null;
            }
            return instance;
        };
    };
})();;
/* 
* $Author$		sonnl
* Class tìm xe trong vùng + tìm xe gần nhất
*/
var FindCar = function (opt) {
    this.listVehicles = null;                                                           // Hashtable lưu danh sách xe để xử lý
    this.userId = null;                                                                 // Id người dùng hiện tại , lưu cookie điều xe
    this.topFind = (opt != undefined && opt.topFind != undefined) ? opt.topFind : 5;    // Số lượng xe cần tìm, mặc định là 5 xe
    this.marker = null;                                                                 // Điểm trên bản đồ
    this.drawingManager = new mxn.DrawingManager("Polygon", false);                     // Manager vẽ polygon
    this.map = (opt != undefined && opt.map != undefined) ? opt.map : null;             // Đối tượng Map
    this.latlng = (opt != undefined && opt.latlng != undefined) ? opt.latlng : null;
    this.online = (opt != null && opt.online != undefined) ? opt.online : null;
    if (this.online != null) {
        this.online.findCarInAreaUpdateInPath = false;
    }
    this.polygon = null;

    this.windowNearest = null;                                                          // Khung cửa sổ tìm xe gần nhất
    this.windowArea = null;                                                             // Khung cửa sổ tìm xe trong vùng
    this.windowGara = null;                                                             // Khung cửa sổ tìm xe trong gara
    this.windowInOperateArea = null;                                                    // Khung cửa sổ tìm xe trong vùng điếu hành
    this.windowListDriverNotLogin = null;                                               // Khung cửa sổ danh sách lái xe chưa đăng nhập
    this.operateAreaID = 0;
    this.myTimer;
};

FindCar.prototype.initNearest = function () {
    if ($('#divNearestWrapper').length == 0) {
        var popup = $("<div id='divNearestWrapper' style='display: none;'>" +
        '<style type="text/css">#divCustomer, #divArea{max-height:400px;overflow-y:scroll;overflow-x:hidden;}' +
        '#divNearest table{max-height:400px;overflow-y:scroll;overflow-x:hidden;}' +
        '#divNearest table, #divCustomer table, #divArea table {width: 100%;}' +
            '#divNearest table tr td, #divCustomer table tr td, #divArea table tr td ' +
            '{border: 1px solid #D1D1D0;padding: 5px;text-align: center;}' +
            '#divNearest table tr:first-child, #divCustomer table tr:first-child, ' +
            '#divArea table tr:first-child {background-color: #F1F1F1;font-weight: bolder;}' +
            '#divNearest table tr:nth-child(2), #divCustomer table tr:nth-child(2) {font-weight: bolder;}</style>' +
        "<div id='divNearest'></div><br /><div id='divCustomer'></div></div>");
        $("body").append(popup);
    }
    var that = this;
    that.openWindowNearest();
};

//Tìm xe dừng đỗ trong vùng điều hành
FindCar.prototype.initVehiclesInOperateArea = function () {
    if ($('#divVehiclesInOperateAreaWrapper').length === 0) {
        var popup = $("<div id='divVehiclesInOperateAreaWrapper' style='display: none;max-height:400px;overflow-y:scroll;overflow-x:scroll;'>" +
        '<style type="text/css">#divCustomer, #divArea{max-height:400px;overflow-y:scroll;overflow-x:scroll;}' +
        '#divInOperateArea table{max-height:400px;overflow-y:scroll;overflow-x:scroll;}' +
        '#divInOperateArea table, #divCustomer table, #divArea table {width: 100%;}' +
            '#divInOperateArea table tr td, #divCustomer table tr td, #divArea table tr td ' +
            '{border: 1px solid #D1D1D0;padding: 5px;text-align: center;}' +
            '#divInOperateArea table tr:first-child, #divCustomer table tr:first-child, ' +
            '#divArea table tr:first-child {background-color: #F1F1F1;font-weight: bolder;}' +
            '#divInOperateArea table tr:nth-child(2), #divCustomer table tr:nth-child(2) {font-weight: bolder;}</style>' +
        "<div id='divInOperateArea' ></div><br /><div id='divCustomer'></div></div>");
        $("body").append(popup);
    }
    var that = this;
    that.openWindowInOperateArea();
};

//Danh sách xe có lái xe chưa đăng nhập
FindCar.prototype.initListDriverNotLogin = function () {
    if ($('#divListDriverNotLoginWrapper').length === 0) {
        var popup = $("<div id='divListDriverNotLoginWrapper' style='display: none;max-height:500px;min-height:400px'>" +
        '<style type="text/css">#divCustomer, #divListDriverNotLoginHead{max-height:500px;}' +
        '#divListDriverNotLogin {max-height:320px;overflow-y:scroll;}' +
        '#divListDriverNotLogin table, #divCustomer table, #divListDriverNotLoginHead table {width: 100%;}' +
            '#divListDriverNotLogin table tr td, #divCustomer table tr td, #divListDriverNotLoginHead table tr td ' +
            '{border: 1px solid #D1D1D0;padding: 5px;text-align: center;}' +
            '#divListDriverNotLogin table tr:first-child, #divCustomer table tr:first-child, ' +
            '#divListDriverNotLoginHead table tr:first-child {background-color: #F1F1F1;font-weight: normal;}' +
            '#divListDriverNotLogin table tr:nth-child(2), #divCustomer table tr:nth-child(2) {font-weight: normal;}</style>' +
        "<div id='divListDriverNotLoginHead' ></div><br/><div id='divListDriverNotLogin' ></div><div id='divCustomer'></div><br /></div>");
        $("body").append(popup);
    }
    var that = this;
    that.openWindowListDriverNotLogin();
};

FindCar.prototype.initNearestNew = function (lat, ln) {
    if ($('#divNearestWrapper').length == 0) {
        var popup = $("<div id='divNearestWrapper' style='display: none;'>" +
        '<style type="text/css">#divNearest, #divCustomer, #divArea{max-height:400px;overflow-y:scroll;overflow-x:hidden;}#divNearest table, #divCustomer table, #divArea table {width: 100%;}' +
            '#divNearest table tr td, #divCustomer table tr td, #divArea table tr td ' +
            '{border: 1px solid #D1D1D0;padding: 5px;text-align: center;}' +
            '#divNearest table tr:first-child, #divCustomer table tr:first-child, ' +
            '#divArea table tr:first-child {background-color: #F1F1F1;font-weight: bolder;}' +
            '#divNearest table tr:nth-child(2), #divCustomer table tr:nth-child(2) {font-weight: bolder;}</style>' +
        "<div id='divNearest' ></div><br /><div id='divCustomer'></div></div>");
        $("body").append(popup);
    }
    var that = this;
    that.openWindowNearestNew(lat, ln);
};

FindCar.prototype.initArea = function () {
    if ($('#divAreaWrapper').length === 0) {
        var popup = "<div id='divAreaWrapper' style='display: none;'>" +
            "<div id='divArea'>" +
            "</div>" +
            '<style type="text/css">#divNearest, #divCustomer, #divArea {max-height:400px;overflow-y:scroll;}' +
            '#divNearest table, #divCustomer table, #divArea table {width: 100%;}' +
            '#divNearest table tr td, #divCustomer table tr td, #divArea table tr td ' +
            '{border: 1px solid #D1D1D0;padding: 5px;text-align: center;}' +
            '#divNearest table tr:first-child, #divCustomer table tr:first-child, ' +
            '#divArea table tr:first-child {background-color: #F1F1F1;font-weight: bolder;}' +
            '#divNearest table tr:nth-child(2), #divCustomer table tr:nth-child(2) {font-weight: bolder;}</style>' +
            "</div>";
        // Bổ xung vào body.
        $("body").append(popup);
    }

    // trungtq: Gọi hàm đăng ký sự kiện tìm xe trong vùng ở đây.
    this.invokeEventsWindowArea();
};

/*Mở popup tìm xe trong vùng*/
FindCar.prototype.invokeEventsWindowArea = function () {
    var that = this;
    that.map.addDrawingManager(that.drawingManager);
    that.drawingManager.overlaycomplete.addHandler(function (eventName, eventSource, eventArgs) {
        that.polygon = eventArgs.e.layer == undefined ? eventArgs.e.overlay : eventArgs.e.layer;
        var paths = that.map.getPolygonPaths(that.polygon);
        that.findCarInArea(paths);
        that.windowArea = $("#divAreaWrapper").kendoWindow({
            title: "Tìm xe trong vùng",
            visible: false,
            width: "600px",
            open: function () {
                this.wrapper.css({ top: 100 });
            },
            close: function () {
                that.closePopUpArea();
            }
        }).data("kendoWindow");

        that.windowArea.center().open();
        that.map.removeDrawingManager(that.drawingManager);
    });
};

/* Hàm thực hiện khi đóng popup , xóa polygon trên bản đồ */
FindCar.prototype.closePopUpArea = function () {
    var that = this;
    if (that.polygon != undefined && that.polygon != null) {
        that.map.removePolygon(that.polygon);
    }
};

/* Lấy danh sách số hiệu xe trong vùng */
FindCar.prototype.findCarInArea = function (paths) {
    var that = this;
    try {
        var strPc = null;
        var mes = '';
        var total = 0;

        var lstLngLat = [];
        for (var a = 0; a < paths.length; a++) {
            lstLngLat.push(paths[a].lat + " " + paths[a].lon);
        }
        var strLatLng = lstLngLat.join(',');
        //remove xe o popup di tranh TH callback chay lau qua
        // ==> de tranh' hieu nham sang xe khac
        that.drawTableVehicleInArea(null, total);
        // trungtq: chuyển thành dạng callback cho nhẹ.
        that.findCarInAreaCallback(strLatLng, function (data) {
            if (data != null && data.listVehicle != null && data.listVehicle.length > 0) {
                var listVehicle = data.listVehicle;
                mes = data.message;
                total = data.total;
                if (listVehicle == null) return;
                if (mes != '') {
                    common.DisplayNotification(LanguageManager.getText('Common_ErrorProcessing') + " : " + mes, common.notification_type_error);
                    return;
                }
                that.drawTableVehicleInArea(listVehicle, total);

                setTimeout(function () {
                    if (!that.online.findCarInAreaUpdateInPath) {
                        that.online.updateInPath(paths);
                        that.online.findCarInAreaUpdateInPath = true;
                    }
                }, 2000);
            }
        });
    }
    catch (err) {
        console.log("FindCar.prototype.findCarInArea: " + err);
    }
};

FindCar.prototype.findCarInAreaCallback = function (strLatLng, callback) {
    $.ajax({
        type: 'GET',
        url: "/FindCar/FindCarInArea",
        data: { 'strLatLng': strLatLng },
        dataType: 'json',
        cache: false,
        success: function (data) {
            callback(data);
        },
        error: function (error) {
            common.DisplayNotification(LanguageManager.getText('Common_ErrorProcessing') + " : " + error, common.notification_type_error);
        }
    });
};

// Mở popup tìm xe gần nhất
FindCar.prototype.openWindowNearestNew = function (lat, lng) {
    var that = this;
    try {
        that.findNearestCallback(lat, lng, function (datas) {
            if (datas != null && datas.length > 0) {
                that.drawTableNearest(datas);
            }
        });

        // Render lại danh sách
        that.renderListVehicleCustomerFromCookie();

        if (!that.windowNearest) {
            that.windowNearest = $("#divNearestWrapper").kendoWindow({
                title: LanguageManager.getText('Online_FindNearestVehicles'),
                visible: false,
                width: "600px",
                close: function () {
                    that.closePopUp();
                }
            }).data("kendoWindow");
        }
        that.windowNearest.center().open();
    }
    catch (err) {
        console.log("FindCar.prototype.openWindowNearestNew:" + err);
    }
};

// Mở popup tìm xe gần nhất
FindCar.prototype.openWindowNearest = function () {
    var that = this;
    try {
        if (that.marker != null) {
            that.map.removeMarker(that.marker);
        }

        // Tạo marker.
        that.marker = new mxn.Marker(new mxn.LatLonPoint(that.latlng.lat, that.latlng.lng));

        // Add marker vào bản đồ
        that.map.addMarker(that.marker);

        that.findNearestCallback(that.latlng.lat, that.latlng.lng, function (datas) {
            if (datas != null && datas.length > 0) {
                that.drawTableNearest(datas);
            }
        });

        // Render lại table
        that.renderListVehicleCustomerFromCookie();

        if (!that.windowNearest) {
            that.windowNearest = $("#divNearestWrapper").kendoWindow({
                title: LanguageManager.getText('Online_FindNearestVehicles'),
                visible: false,
                width: "600px",
                close: function () {
                    that.closePopUp();
                }

            }).data("kendoWindow");
        }
        that.windowNearest.center().open();
    }
    catch (err) {
        console.log("FindCar.prototype.openWindowNearest: " + err);
    }
};

// Mở popup tìm xe trong vùng điều hành
FindCar.prototype.openWindowInOperateArea = function () {
    var that = this;
    that.operateAreaID = 0;
    try {
        if (that.marker != null) {
            that.map.removeMarker(that.marker);
        }

        // Tạo marker.
        that.marker = new mxn.Marker(new mxn.LatLonPoint(that.latlng.lat, that.latlng.lng));

        // Add marker vào bản đồ
        that.map.addMarker(that.marker);

        that.findVehiclesInOperateAreaCallback(that.latlng.lat, that.latlng.lng, function (datas) {
            if (datas != null && datas.length > 0) {
                that.drawTableInOperateArea(datas);
            }
        });

        //// Render lại table
        //that.renderListVehicleCustomerFromCookie();

        if (!that.windowInOperateArea) {
            that.windowInOperateArea = $("#divVehiclesInOperateAreaWrapper").kendoWindow({
                title: LanguageManager.getText('RIGHT_MENU_VEHICLE_IN_OPERATEAREA'),
                visible: false,
                width: "600px",
                resizable: false,
                close: function () {
                    that.closePopUp();
                }

            }).data("kendoWindow");
        }
        that.windowInOperateArea.center().open();
    }
    catch (err) {
        console.log("FindCar.prototype.openWindowInOperateArea: " + err);
    }
};

// Mở popup danh sách lái chưa đăng nhập
FindCar.prototype.openWindowListDriverNotLogin = function () {
    var that = this;
    try {
        // khởi tạo control cho form
        var groupHtml = '<table><tr><td>Nhóm đội: </td><td><div id="GroupDiv"></div></td><td>Số hiệu xe: </td><td><div id="VehicleDiv"></div></td></tr></table><br />';
        groupHtml += '<div id="divButton" style="margin-bottom:10px;text-align:center;"><input id="btnSearch" text="Tìm kiếm" onclick="FindCar.prototype.SearchDriverNotLogin()" type="button" class="btn btn-sm btn-primary" value="Cập nhật dữ liệu" />&nbsp;&nbsp;&nbsp;<input id="btnExportExcel" text="Xuất Excel" class="btn btn-sm btn-primary" value="Xuất Excel" type="button" onclick="FindCar.prototype.ExportExcelDriverNotLogin()" /><span id="TotalVehicle"></span> </div>';
        groupHtml += '<table><tr>';
        groupHtml += '<td style="width:38px">' + LanguageManager.getText('Common_Index') + '</td>';
        groupHtml += '<td style="width:89px">' + LanguageManager.getText('Vehicle_PrivateCode') + '</td>';
        groupHtml += '<td style="width:89px">' + LanguageManager.getText('Common_VehiclePlate') + '</td>';

        groupHtml += '<td style="width:108px">' + LanguageManager.getText('InputSubTrip_DriverName') + '</td>';
        groupHtml += '<td style="width:95px">' + LanguageManager.getText('Common_UpdateTime') + '</td>';

        groupHtml += '</tr>';
        groupHtml += '</table>';
        $('#divListDriverNotLoginHead').html(groupHtml);
        var configACM = new ConfigACPlusMultiSelectControl();
        configACM.acTextField = "DisplayText";

        //end



        if (kendoMultiSelectBoxHelper.InitTreeViewPlusACM(undefined, configACM, true) === true) {
            that.findDriverNotLoginCallback(function (datas) {
                if (datas != null && datas.length > 0) {
                    that.drawTableDriverNotLogin(datas);
                }
            });


            if (!that.windowListDriverNotLogin) {
                that.windowListDriverNotLogin = $("#divListDriverNotLoginWrapper").kendoWindow({
                    title: LanguageManager.getText('RIGHT_MENU_LIST_DRIVER_NOT_LOGIN'),
                    visible: false,
                    width: "600px",
                    resizable: false,
                    close: function () {
                        that.closePopUp();
                    }

                }).data("kendoWindow");
            }
            that.windowListDriverNotLogin.center().open();
        }
    }
    catch (err) {
        console.log("FindCar.prototype.openWindowListDriverNotLogin: " + err);
    }
};

/*Hàm tìm xe trong vùng điều hành , dùng khi refresh popup hoặc chuyển xe đi thì lấy lại - latlng : điểm bắt đầu tìm kiếm*/
FindCar.prototype.findVehiclesInOperateAreaCallback = function (lat, lng, callback) {
    var that = this;
    var cookieValue = $.cookie(this.userId + "_lstPrivateCode_VehicleCustomer");
    if (cookieValue == null || cookieValue == undefined) {
        cookieValue = '';
    }

    //Tìm xe trong vùng điều hành
    try {

        //Kiểm tra điểm có thuộc vùng đh nào hay không?
        $.ajax({
            type: 'GET',
            url: "/FindCar/CheckPointInOperateArea",
            data: { 'latStr': that.latlng.lat.toString().replace('.', ','), 'lngStr': that.latlng.lng.toString().replace('.', ',') },
            dataType: 'json',
            cache: false,
            success: function (data) {
                that.operateAreaID = data;
            },
            error: function (error) {
                alert(LanguageManager.getText('Common_ErrorProcessing') + " : " + error);
            }
        });

        $.ajax({
            type: 'GET',
            url: "/FindCar/FindVehiclesInOperateArea",
            data: { 'areaID': that.operateAreaID != undefined ? that.operateAreaID : 0, 'latStr': lat.toString().replace('.', ','), 'lngStr': lng.toString().replace('.', ','), 'strListHasCustomer': cookieValue, 'cbInOutOperateAreas': $('#cbInOutOperateAreas').is(':checked') },
            dataType: 'json',
            cache: false,
            success: function (data) {
                if (data != null && data.lstVehicleReturn != null && data.lstVehicleReturn.length > 0) {
                    callback(data.lstVehicleReturn);
                }
            },
            error: function (error) {
                alert(LanguageManager.getText('Common_ErrorProcessing') + " : " + error);
            }
        });
    }
    catch (err) {
        console.log("FindCar.prototype.findVehiclesInOperateAreaCallback:" + err);
    }
};

/*lấy dữ liệu của danh sách lái xe chưa đăng nhập*/
FindCar.prototype.findDriverNotLoginCallback = function (callback) {
    var that = this;
    var vehicles = $('#multiSelectVehicleId').length > 0 ? common.GetKendoMultiSelectBoxValue("multiSelectVehicleId", ",") : "";
    //Tìm danh sách lái xe chưa đăng nhập
    try {
        $.ajax({
            type: 'POST',
            url: "/FindCar/FindDriverNotLogin",
            data: { vehicleIDs: vehicles },
            dataType: 'json',
            cache: false,
            success: function (data) {
                if (data != null && data.lstVehicleReturn != null && data.lstVehicleReturn.length > 0) {
                    callback(data.lstVehicleReturn);
                }
            },
            error: function (error) {
                alert(LanguageManager.getText('Common_ErrorProcessing') + " : " + error);
            }
        });
    }
    catch (err) {
        console.log("FindCar.prototype.findDriverNotLoginCallback:" + err);
    }
};

/*Hàm tìm xe gần nhất theo điểm , dùng khi refresh popup hoặc chuyển xe đi thì lấy lại - latlng : điểm bắt đầu tìm kiếm*/
FindCar.prototype.findNearestCallback = function (lat, lng, callback) {
    var cookieValue = $.cookie(this.userId + "_lstPrivateCode_VehicleCustomer");
    if (cookieValue == null || cookieValue == undefined) {
        cookieValue = '';
    }
    try {
        $.ajax({
            type: 'GET',
            url: "/FindCar/FindNearestCar",
            data: { 'topFind': this.topFind, 'latStr': lat.toString().replace('.', ','), 'lngStr': lng.toString().replace('.', ','), 'strListHasCustomer': cookieValue },
            dataType: 'json',
            cache: false,
            success: function (data) {
                if (data != null && data.lstVehicleReturn != null && data.lstVehicleReturn.length > 0) {
                    callback(data.lstVehicleReturn);
                }
            },
            error: function (error) {
                alert(LanguageManager.getText('Common_ErrorProcessing') + " : " + error);
            }
        });
    }
    catch (err) {
        console.log("FindCar.prototype.findNearestCallback:" + err);
    }
};

/* Hàm lấy xe đã điều xe đón khách từ cookies */
FindCar.prototype.renderListVehicleCustomerFromCookie = function () {
    var that = this;
    var cookieValue = $.cookie(this.userId + "_lstPrivateCode_VehicleCustomer");
    var lstReturn = null;

    // trungtq: chuyển sang callback
    that.getListVehicleCustomerFromCookieCallback(cookieValue, function (data) {
        // Gán dữ liệu trả về
        lstReturn = data;

        var lstPc = [];

        if (lstReturn != undefined && lstReturn.length > 0) {
            for (var i = 0; i < lstReturn.length; i++) {
                lstPc.push(lstReturn[i].PrivateCode);
            }
            // render table
            that.drawTableCustomer(lstReturn);
        }
        cookieValue = lstPc.join(',');
        $.cookie(this.userId + "_lstPrivateCode_VehicleCustomer", cookieValue);
    });
};

FindCar.prototype.getListVehicleCustomerFromCookieCallback = function (cookieValue, callback) {
    $.ajax({
        type: 'GET',
        url: "/FindCar/GetDetailVehicleCustomer",
        data: { 'strListPrivateCode': cookieValue },
        dataType: 'json',
        cache: false,
        success: function (data) {
            if (data != null && data.lstVehicle != null && data.lstVehicle.length > 0) {
                callback(data.lstVehicle);
            }
        },
        error: function (error) {
            common.DisplayNotification(LanguageManager.getText('Common_ErrorProcessing') + " : " + error.toString(), common.notification_type_error);
        }
    });
};

/*Hàm vẽ table gần nhất*/
FindCar.prototype.drawTableNearest = function (lstVehicle) {
    var that = this;
    try {
        $('#divNearest').html('');
        var strHtml = '<div style="margin-bottom:10px">' + LanguageManager.getText('Common_Sort') + ' <input id="ddlSortCarNearest" value="1" /></div><table>';
        strHtml += '<tr>';
        strHtml += '<td colspan="6">' + LanguageManager.getText('Online_NearestFreeVehicles') + '</td>';
        strHtml += '</tr>';
        strHtml += '<tr>';
        strHtml += '<td>' + LanguageManager.getText('Vehicle_PrivateCode') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_Distance') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_TimeToCome') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_RevenueInDay') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('ReportStop_StopTime') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_AssignCustomer') + '</td>';
        strHtml += '</tr>';
        strHtml += '</table>';
        $('#divNearest').html(strHtml);
        that.drawTableContent(lstVehicle, that);
        var ddlData = [
            { text: LanguageManager.getText('Online_Distance'), value: "1" },
            { text: LanguageManager.getText('Online_RevenueInDay'), value: "2" }
        ];

        $("#ddlSortCarNearest").kendoDropDownList({ // Khởi tạo dropdown sort cho xe
            dataTextField: "text",
            dataValueField: "value",
            dataSource: ddlData,
            index: 0,
            change: that.ddlSortCarNearestChange
        });
        common.GetKendoDropDown("ddlSortCarNearest").currentGridData = lstVehicle;
        common.GetKendoDropDown("ddlSortCarNearest").findCarObj = that;
    }
    catch (err) {
        console.log("FindCar.prototype.drawTableNearest:" + err);
    }
};

/*Hàm vẽ table xe trong vùng điều hành*/
FindCar.prototype.drawTableInOperateArea = function (lstVehicle) {
    var that = this;
    try {
        $('#divInOperateArea').html('');
        var strHtml = '<div style="margin-bottom:10px">' + LanguageManager.getText('ReportRevenueByManagementLandmark_OperateArea') + ' <input id="ddlOperateAreas" /> <label> <input id="cbInOutOperateAreas" type="checkbox" onclick="CheckInOutOperateAreas(this)" />  Lọc theo thời gian ra vào </label> </div><table>';
        strHtml += '<tr>';
        strHtml += '<td>' + LanguageManager.getText('Vehicle_PrivateCode') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Common_VehiclePlate') + '</td>';
        //strHtml += '<td>' + LanguageManager.getText('Online_TimeToCome') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_RevenueInDay') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('ReportStop_StopTime').replace('giờ:', '') + '</td>';
        //strHtml += '<td>' + LanguageManager.getText('Online_AssignCustomer') + '</td>';
        strHtml += '</tr>';
        strHtml += '</table>';
        $('#divInOperateArea').html(strHtml);
        that.drawTableInOperateAreaContent(that.operateAreaID, lstVehicle, that);
        var cbData = common.ExcuteAjax_ReturnData("/FindCar/GetAllOperateAreas");

        //lấy cấu hình công ty có sử dụng tính năng tìm xe trong vùng ko (false là chỉ tìm xe dừng đỗ trong vùng)
        var checkInOutOperateAreas = common.ExcuteAjax_ReturnData("/FindCar/checkInOutOperateAreas");
        if (checkInOutOperateAreas.EnableInOut) {
            $('#cbInOutOperateAreas').prop('checked', true);
            //đổi tên cột cuối cùng của dòng đầu tiên
            $('#divInOperateArea table tr:first-child td:last-child').text('Thời gian xe trong vùng (phút)');
        }

        $("#ddlOperateAreas").kendoComboBox({ // Khởi tạo kendoComboBox cho chọn vùng
            dataTextField: "Name",
            dataValueField: "PK_LandmarkID",
            dataSource: cbData.Data,
            value: that.operateAreaID,
            change: that.ddlOperateAreaChange //sự kiện chọn vùng điều hành
        });
        common.GetKendoComboBox("ddlOperateAreas").currentGridData = lstVehicle;
        common.GetKendoComboBox("ddlOperateAreas").findCarObj = that;
    }
    catch (err) {
        console.log("FindCar.prototype.drawTableInOperateArea:" + err);
    }
};

/*Hàm vẽ table lái xe chưa đăng nhập*/
FindCar.prototype.drawTableDriverNotLogin = function (lstVehicle) {
    var that = this;
    try {


        //$('#divListDriverNotLogin').html('');
        //var strHtml = '';
        //$('#divListDriverNotLogin').html(strHtml);
        that.drawTableDriverNotLoginContent(lstVehicle, that);


    }
    catch (err) {
        console.log("FindCar.prototype.drawTableDriverNotLogin:" + err);
    }
};

function CheckInOutOperateAreas(checkbox) {
    if (checkbox.checked) {
        //đổi tên cột cuối cùng của dòng đầu tiên
        $('#divInOperateArea table tr:first-child td:last-child').text('Thời gian xe trong vùng (phút)');
    }
    else $('#divInOperateArea table tr:first-child td:last-child').text('Thời gian dừng đỗ (phút)');

}

//cập nhật dữ liệu lái xe chưa đăng nhập
FindCar.prototype.SearchDriverNotLogin = function () {
    var that = this;
    that.findDriverNotLoginCallback(function (datas) {
        //lúc nào cũng trả ra ít nhất 1 dòng dl - Phân biệt là dòng duy nhất đó có RowNumber = 0
        if (datas != null && datas.length > 0) {
            that.drawTableDriverNotLogin(datas);
        }
        if (datas[0].RowNumber == 0) common.DisplayNotification(LanguageManager.getText('Common_EmptyData'), common.notification_type_error);
        else common.DisplayNotification(LanguageManager.getText('UserPermission_AlertUpdateSuccess'), common.notification_type_success);
    });

}

// xuất excel lái xe chưa đăng nhập
FindCar.prototype.ExportExcelDriverNotLogin = function () {
    var vehicles = $('#multiSelectVehicleId').length > 0 ? common.GetKendoMultiSelectBoxValue("multiSelectVehicleId", ",") : "";
    var options = {
        data: {
            vehicleIDs: vehicles
        },
        createExcelUrl: "/FindCar/DoExportExcel",
        downloaExcelUrl: "/FindCar/ExportExcel",
        createPDFUrl: "",
        downloaPDFUrl: "",
        title: "ExportHelper"
    };
    // Khởi tạo đối tượng hỗ trợ Export
    var exportHelper = new ExportHelper(options);
    exportHelper.exportToExcel();
}

// vẽ table nội dung của tìm xe trong vùng điều hành
FindCar.prototype.drawTableInOperateAreaContent = function (operateAreaID, lstVehicle, findCarObj) {
    var that = this;
    try {
        var strHtml = '';
        strHtml += '<tr>';
        strHtml += '<td>' + LanguageManager.getText('Vehicle_PrivateCode') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Common_VehiclePlate') + '</td>';
        //strHtml += '<td>' + LanguageManager.getText('Online_TimeToCome') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_RevenueInDay') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('ReportStop_StopTime').replace('giờ:', '') + '</td>';
        strHtml += '</tr>';
        $('#divInOperateArea table tbody').html(strHtml);

        //Lọc theo từng vùng cụ thể
        if (operateAreaID > 0) {
            //lstVehicle = common.ExcuteAjax_ReturnData("/FindCar/FindVehiclesInOperateArea", { areaID: that.operateAreaID, latStr: that.latlng.lat.toString().replace('.', ','), lngStr: that.latlng.lng.toString().replace('.', ','), strListHasCustomer: '' });
            try {
                $.ajax({
                    type: 'GET',
                    url: "/FindCar/FindVehiclesInOperateArea",
                    data: { 'areaID': operateAreaID, 'latStr': that.latlng.lat.toString().replace('.', ','), 'lngStr': that.latlng.lng.toString().replace('.', ','), 'strListHasCustomer': null, 'cbInOutOperateAreas': $('#cbInOutOperateAreas').is(':checked') },
                    dataType: 'json',
                    cache: false,
                    success: function (data) {
                        if (data != null && data.lstVehicleReturn != null && data.lstVehicleReturn.length > 0) {
                            lstVehicle = data.lstVehicleReturn;
                            if (lstVehicle != null && lstVehicle.length > 0) {
                                for (var i = 0; i < lstVehicle.length; i++) {
                                    var money = lstVehicle[i].TotalMoney.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                                    money = money.substring(0, money.length - 2);
                                    money = money.replace(/,/g, '.');
                                    lstVehicle[i].Money = money;
                                    strHtml = '<tr>';
                                    strHtml += '<td><a href="javascript:void(0);" id="panto' + lstVehicle[i].PK_VehicleID + '">' + lstVehicle[i].PrivateCode + '</a></td>';
                                    strHtml += '<td>' + lstVehicle[i].VehiclePlate + '</td>';
                                    //strHtml += '<td>' + lstVehicle[i].MinutesToCome + '</td>';
                                    strHtml += '<td>' + money + '</td>';
                                    strHtml += '<td>' + lstVehicle[i].MinuteOfManchineOnWhenStop + '</td>';
                                    //strHtml += '<td>' + '<a href="javascript:void(0);" id="freeVehicle' + lstVehicle[i].PrivateCode + '">' +
                                    //    LanguageManager.getText('Online_Assign') + '</a>' + '</td>';
                                    strHtml += '</tr>';

                                    $('#divInOperateArea table tbody').append(strHtml);

                                    $('#freeVehicle' + lstVehicle[i].PrivateCode.replace('.', '')).unbind("click");
                                    $('#freeVehicle' + lstVehicle[i].PrivateCode.replace('.', '')).click(
                                        findCarObj.freeVehicleToHasCustomer('#freeVehicle' + lstVehicle[i].PrivateCode, lstVehicle[i].PrivateCode, lstVehicle[i].VehicleTime, lstVehicle[i].TotalMoney));

                                    $('#panto' + lstVehicle[i].PK_VehicleID).unbind("click");
                                    $('#panto' + lstVehicle[i].PK_VehicleID).click(
                                        findCarObj.pantoVehicle(lstVehicle[i].PK_VehicleID));
                                }
                            }


                        }
                    },
                    error: function (error) {
                        alert(LanguageManager.getText('Common_ErrorProcessing') + " : " + error);
                    }
                });
            }
            catch (err) {
                console.log("/FindCar/FindVehiclesInOperateArea" + err);
            }

            if ($('#cbInOutOperateAreas').is(':checked')) {
                //đổi tên cột cuối cùng của dòng đầu tiên
                $('#divInOperateArea table tr:first-child td:last-child').text('Thời gian xe trong vùng (phút)');
            }
            else $('#divInOperateArea table tr:first-child td:last-child').text('Thời gian dừng đỗ (phút)');
        }

        else if (lstVehicle != null && lstVehicle.length > 0) {
            for (var i = 0; i < lstVehicle.length; i++) {
                var money = lstVehicle[i].TotalMoney.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                money = money.substring(0, money.length - 2);
                money = money.replace(/,/g, '.');
                lstVehicle[i].Money = money;
                strHtml = '<tr>';
                strHtml += '<td><a href="javascript:void(0);" id="panto' + lstVehicle[i].PK_VehicleID + '">' + lstVehicle[i].PrivateCode + '</a></td>';
                strHtml += '<td>' + lstVehicle[i].VehiclePlate + '</td>';
                //strHtml += '<td>' + lstVehicle[i].MinutesToCome + '</td>';
                strHtml += '<td>' + money + '</td>';
                strHtml += '<td>' + lstVehicle[i].MinuteOfManchineOnWhenStop + '</td>';
                //strHtml += '<td>' + '<a href="javascript:void(0);" id="freeVehicle' + lstVehicle[i].PrivateCode + '">' +
                //    LanguageManager.getText('Online_Assign') + '</a>' + '</td>';
                strHtml += '</tr>';

                $('#divInOperateArea table tbody').append(strHtml);

                $('#freeVehicle' + lstVehicle[i].PrivateCode).unbind("click");
                $('#freeVehicle' + lstVehicle[i].PrivateCode).click(
                    findCarObj.freeVehicleToHasCustomer('#freeVehicle' + lstVehicle[i].PrivateCode, lstVehicle[i].PrivateCode, lstVehicle[i].VehicleTime, lstVehicle[i].TotalMoney));

                $('#panto' + lstVehicle[i].PK_VehicleID).unbind("click");
                $('#panto' + lstVehicle[i].PK_VehicleID).click(
                    findCarObj.pantoVehicle(lstVehicle[i].PK_VehicleID));
            }
        }

    }
    catch (err) {
        console.log("FindCar.prototype.drawTableInOperateAreaContent: " + err);
    }
}

// vẽ table nội dung của lái xe chưa đăng nhập
FindCar.prototype.drawTableDriverNotLoginContent = function (lstVehicle, findCarObj) {
    var that = this;
    try {

        //Xe ảo tạo ra cho đỡ lỗi
        if (lstVehicle[0].RowNumber == 0) $('#TotalVehicle').html('  Tổng: ' + 0 + ' xe')
        else $('#TotalVehicle').html('  Tổng: ' + lstVehicle.length + ' xe')

        $('#divListDriverNotLogin').html('');
        var strHtml = '';
        //
        if (lstVehicle != null && lstVehicle.length > 0) {
            for (var i = 0; i < lstVehicle.length; i++) {
                if (lstVehicle[i].RowNumber > 0) {
                    strHtml = '<table><tr>';
                    strHtml += '<td style="width:45px">' + lstVehicle[i].RowNumber + '</td>';
                    strHtml += '<td style="width:104px"><a href="#" onclick="onlineMap.panTo(' + lstVehicle[i].PK_VehicleID + ')">' + lstVehicle[i].PrivateCode + '</a></td>';
                    strHtml += '<td style="width:104px">' + lstVehicle[i].VehiclePlate + '</td>';
                    strHtml += '<td style="width:125px">' + lstVehicle[i].DriverName + '</td>';
                    strHtml += '<td style="width:95px">' + lstVehicle[i].UpdateTime + '</td>';
                    strHtml += '</tr>';
                    $('#divListDriverNotLogin').append(strHtml + '</table>');
                }
            }
        }

    }
    catch (err) {
        console.log("FindCar.prototype.drawTableDriverNotLoginContent: " + err);
    }
}

//sự kiện chọn vùng điều hành
FindCar.prototype.ddlOperateAreaChange = function () {
    var that = this;
    var sortedData = [];
    that.operateAreaID = this.value();
    //để 60s quét lại 1 lần
    that.myTimer = setInterval(that.findCarObj.drawTableInOperateAreaContent(that.operateAreaID, sortedData, that.findCarObj), 60000);

    // that.findCarObj.drawTableInOperateAreaContent(that.operateAreaID, sortedData, that.findCarObj);

}


FindCar.prototype.ddlSortCarNearestChange = function () {
    var sortedData = [];
    if (this.value() == '1') {
        sortedData = this.currentGridData.sort(function (a, b) {
            return a.Distance > b.Distance;
        })
    }
    if (this.value() == '2') {
        sortedData = this.currentGridData.sort(function (a, b) {
            return a.Money > b.Money;
        })
    }

    //LinhNX: Selection sort
    //Start begin =>
    if (sortedData != null) {
        if (this.value() == '1') {
            for (var i = 0; i < sortedData.length - 1 ; i++) {
                var indexMin = i;
                for (j = i + 1; j < sortedData.length; j++) {
                    if (parseFloat(sortedData[j].Distance) < parseFloat(sortedData[indexMin].Distance)) {
                        var hv = sortedData[indexMin];
                        sortedData[indexMin] = sortedData[j];
                        sortedData[j] = hv;
                        indexMin = j;
                    }
                }
            }
        }
        if (this.value() == '2') {
            for (var i = 0; i < sortedData.length - 1 ; i++) {
                var indexMin = i;
                for (j = i + 1; j < sortedData.length; j++) {
                    if (parseFloat(sortedData[j].Money) < parseFloat(sortedData[indexMin].Money)) {
                        var hv = sortedData[indexMin];
                        sortedData[indexMin] = sortedData[j];
                        sortedData[j] = hv;
                        indexMin = j;
                    }
                }
            }
        }
    }
    //End.
    this.findCarObj.drawTableContent(sortedData, this.findCarObj);
}

FindCar.prototype.drawTableContent = function (lstVehicle, findCarObj) {
    try {
        var strHtml = '';
        strHtml += '<tr>';
        strHtml += '<td colspan="6">' + LanguageManager.getText('Online_NearestFreeVehicles') + '</td>';
        strHtml += '</tr>';
        strHtml += '<tr>';
        strHtml += '<td>' + LanguageManager.getText('Vehicle_PrivateCode') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_Distance') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_TimeToCome') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_RevenueInDay') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('ReportStop_StopTime') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_AssignCustomer') + '</td>';
        strHtml += '</tr>';
        $('#divNearest table tbody').html(strHtml);

        if (lstVehicle != null && lstVehicle.length > 0) {
            for (var i = 0; i < lstVehicle.length; i++) {
                var money = lstVehicle[i].TotalMoney.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                money = money.substring(0, money.length - 2);
                money = money.replace(/,/g, '.');
                lstVehicle[i].Money = money;
                strHtml = '<tr>';
                strHtml += '<td><a href="javascript:void(0);" id="panto' + lstVehicle[i].PK_VehicleID + '">' + lstVehicle[i].PrivateCode + '</a></td>';
                strHtml += '<td>' + lstVehicle[i].Distance + '</td>';
                strHtml += '<td>' + lstVehicle[i].MinutesToCome + '</td>';
                strHtml += '<td>' + money + '</td>';
                strHtml += '<td>' + lstVehicle[i].MinuteOfManchineOnWhenStop + '</td>';
                strHtml += '<td>' + '<a href="javascript:void(0);" id="freeVehicle' + lstVehicle[i].PrivateCode + '">' +
                    LanguageManager.getText('Online_Assign') + '</a>' + '</td>';
                strHtml += '</tr>';

                $('#divNearest table tbody').append(strHtml);

                $('#freeVehicle' + lstVehicle[i].PrivateCode).unbind("click");
                $('#freeVehicle' + lstVehicle[i].PrivateCode).click(
                    findCarObj.freeVehicleToHasCustomer('#freeVehicle' + lstVehicle[i].PrivateCode, lstVehicle[i].PrivateCode, lstVehicle[i].VehicleTime, lstVehicle[i].TotalMoney));

                $('#panto' + lstVehicle[i].PK_VehicleID).unbind("click");
                $('#panto' + lstVehicle[i].PK_VehicleID).click(
                    findCarObj.pantoVehicle(lstVehicle[i].PK_VehicleID));
            }
        }
    }
    catch (err) {
        console.log("FindCar.prototype.drawTableContent: " + err);
    }
}

/*Hàm vẽ table xe di chuyển đón khách*/
FindCar.prototype.drawTableCustomer = function (lstVehicle) {
    var that = this;
    try {
        $('#divCustomer').html('');

        var strHtml = '<table>';
        strHtml += '<tr>';
        strHtml += '<td colspan="4"> ' + LanguageManager.getText('Online_AssignCustomer') + '</td>';
        strHtml += '</tr>';
        strHtml += '<tr>';
        strHtml += '<td>' + LanguageManager.getText('Vehicle_PrivateCode') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_UpdateTime') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_RevenueInDay') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Common_Delete') + '</td>';
        strHtml += '</tr>';
        strHtml += '</table>';
        $('#divCustomer').html(strHtml);

        if (lstVehicle != null && lstVehicle.length > 0) {
            for (var i = 0; i < lstVehicle.length; i++) {
                var money = lstVehicle[i].TotalMoney.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                money = money.substring(0, money.length - 2);
                money = money.replace(/,/g, '.');

                strHtml = '<tr>';
                strHtml += '<td>' + lstVehicle[i].PrivateCode + '</td>';
                strHtml += '<td>' + FormatHelper.formatDateTime(lstVehicle[i].VehicleTime) + '</td>';
                strHtml += '<td>' + money + '</td>';
                strHtml += '<td>' + '<a href="javascript:void(0);" id="Delete' + lstVehicle[i].PrivateCode + '">' + LanguageManager.getText('Common_Delete') + '</a>' + '</td>';
                strHtml += '</tr>';

                $('#divCustomer table tbody').append(strHtml);

                $('#Delete' + lstVehicle[i].PrivateCode).unbind("click");
                $('#Delete' + lstVehicle[i].PrivateCode).click(
                    that.deleteFromHasCutomer('#Delete' + lstVehicle[i].PrivateCode, lstVehicle[i].PrivateCode));
            }
        }
    }
    catch (err) {
        console.log("FindCar.prototype.drawTableCustomer:" + err);
    }
};

/* Hàm thực hiện chuyển xe từ trạng thái không khách sang di chuyển đón khách - click vào nút dc đón khách */
FindCar.prototype.freeVehicleToHasCustomer = function (obj, privateCode, vehicleTime, totalMoney) {
    var that = this;
    return function () {
        try {
            //Lưu vào cookie dính với người dùng hiện tại
            var cookieValue = $.cookie(that.userId + "_lstPrivateCode_VehicleCustomer");
            var lstPc = cookieValue.split(',');

            var index = lstPc.indexOf(privateCode);
            if (index < 0) {
                lstPc.push(privateCode);
            }

            cookieValue = lstPc.join(',');
            $.cookie(that.userId + "_lstPrivateCode_VehicleCustomer", cookieValue);

            var money = totalMoney.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            money = money.substring(0, money.length - 2);
            money = money.replace(/,/g, '.');

            var strHtml = '<tr>';
            strHtml += '<td>' + privateCode + '</td>';
            strHtml += '<td>' + FormatHelper.formatDateTime(vehicleTime) + '</td>';
            strHtml += '<td>' + money + '</td>';
            strHtml += '<td>' + '<a href="javascript:void(0);" id="Delete' + privateCode + '">' + LanguageManager.getText('Common_Delete') + '</a>' + '</td>';
            strHtml += '</tr>';

            $(obj).parent().parent().remove();
            $('#divCustomer tbody').append(strHtml);

            $('#Delete' + privateCode).unbind("click");
            $('#Delete' + privateCode).click(
                that.deleteFromHasCutomer('#Delete' + privateCode, privateCode));

            // trungtq: chuyển sang callback
            that.findNearestCallback(that.latlng.lat, that.latlng.lng, function (datas) {
                if (datas != null && datas.length > 0) {
                    that.drawTableNearest(datas);
                }
            });
        }
        catch (err) {
            console.log("FindCar.prototype.freeVehicleToHasCustomer:" + err);
        }
    };
};

FindCar.prototype.pantoVehicle = function (vehicleId) {
    var that = this;
    return function () {
        that.online.panTo(vehicleId);
    };
};

/* Hàm thực hiện xóa trong bảng di chuyển đón khách */
FindCar.prototype.deleteFromHasCutomer = function (id, privateCode) {
    var that = this;
    return function () {
        $(id).parent().parent().remove();
        var cookieValue = $.cookie(that.userId + "_lstPrivateCode_VehicleCustomer");

        var lstPc = cookieValue.split(',');

        var index = lstPc.indexOf(privateCode);
        if (index > -1) {
            lstPc.splice(index, 1);
        }

        cookieValue = lstPc.join(',');
        $.cookie(that.userId + "_lstPrivateCode_VehicleCustomer", cookieValue);

        that.findNearestCallback(that.latlng.lat, that.latlng.lng, function (datas) {
            if (datas != null && datas.length > 0) {
                that.drawTableNearest(datas);
            }
        });
    };
};

/* Hàm thực hiện khi đóng popup , xóa marker trên bản đồ */
FindCar.prototype.closePopUp = function () {
    var that = this;
    if (that.marker != undefined) {
        that.map.removeMarker(that.marker);
    }

    clearInterval(that.myTimer);

};

/* Hàm vẽ table xe di chuyển đón khách */
FindCar.prototype.drawTableVehicleInArea = function (listVehicle, total) {
    try {
        $('#divArea').html('');
        var strHtml = '<table style="max-height: 350px">';

        strHtml += '<tr>';
        strHtml += '<td colspan="5">' + LanguageManager.getText('Online_FindVehiclesInArea') + '</td>';
        strHtml += '</tr>';
        strHtml += '<tr>';
        strHtml += '<td>' + LanguageManager.getText('Common_Index') + '</td>';
        strHtml += '<td></td>';
        strHtml += '<td>' + LanguageManager.getText('VehiclePusleConfigurations_PrivateCode') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_Velocity') + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Common_Address') + '</td>';
        strHtml += '</tr>';
        if (listVehicle != null && listVehicle.length > 0) {
            for (var i = 0; i < listVehicle.length; i++) {
                var currentVehicle = listVehicle[i];
                strHtml += this.renderRowVehicleInArea(currentVehicle, i);
            }
        }
        strHtml += '</table>';
        $('#divArea').html(strHtml);
    }
    catch (err) {
        console.log("FindCar.prototype.drawTableVehicleInArea:" + err);
    }
};

FindCar.prototype.renderRowVehicleInArea = function (vehicle, i) {
    try {
        var td_index = $(document.createElement('td'));
        td_index.html(parseInt(i + 1));

        // Tạo table row
        var tr = $(document.createElement('tr'));
        tr.attr("id", "tr_" + vehicle.VehicleID);
        tr.css({ "display": "" });

        // td icon xe
        var td_Icon = $(document.createElement('td'));
        td_Icon.attr("role", "gridcell");
        var img = $(document.createElement('img'));
        img.attr("id", vehicle.VehicleID + "_icon");
        img.attr("src", onlineMap.parseVehicleIcon(vehicle));
        img.attr("alt", "");
        img.attr("width", "25px");
        img.attr("height", "25px");
        td_Icon.append(img);

        // td số hiệu xe
        var td_privateCode = $(document.createElement('td'));
        td_privateCode.attr("id", vehicle.VehicleID + "_plate");
        td_privateCode.addClass('text-center');
        td_privateCode.attr("role", "gridcell");
        td_privateCode.html(vehicle.PrivateCode);

        // td vận tốc
        var td_velocity = $(document.createElement('td'));
        td_velocity.attr('id', vehicle.VehicleID + "_velocity");
        td_velocity.addClass('text-center');
        td_velocity.attr("role", "gridcell");
        td_velocity.html(vehicle.VelocityGPS);

        // td điểm
        var td_address = $(document.createElement('td'));
        td_address.attr('id', vehicle.VehicleID + '_address');
        td_address.addClass('text-center');
        td_address.attr("role", "gridcell");
        td_address.html(vehicle.Address);      // Format lại đoạn này

        // Add vào tr
        tr.append(td_index);
        tr.append(td_Icon);
        tr.append(td_privateCode);
        tr.append(td_velocity);
        tr.append(td_address);

    }
    catch (err) {
        console.log("FindCar.prototype.renderRowVehicleInArea:" + err);
    }
    return '<tr onclick="onlineMap.panTo(' + vehicle.VehicleID + ')">' + tr.html() + '</tr>';
}

FindCar.prototype.gotoGoogleMaps = function (lat, lng) {
    return 'http://maps.google.com/maps?q=description+(name)+%40' + lat + ',' + lng;
};

FindCar.prototype.initGara = function () {
    if ($('#divGaraWrapper').length === 0) {
        var popup = "<div id='divGaraWrapper' style='display: none;'>" +
            "<div id='divGara'>" +
            "</div>" +
            '<style type="text/css">#divNearest, #divCustomer, #divArea , #divGara {max-height:400px;overflow-y:scroll;overflow-x:hidden;}' +
            '#divNearest table, #divCustomer table, #divArea table ,  #divGara table {width: 100%;}' +
            '#divNearest table tr td, #divCustomer table tr td, #divArea table tr td , #divGara table tr td' +
            '{border: 1px solid #D1D1D0;padding: 5px;text-align: center;}' +
            '#divNearest table tr:first-child, #divCustomer table tr:first-child, ' +
            '#divArea table tr:first-child , #divGara table tr:first-child {background-color: #F1F1F1;font-weight: bolder;}' +
            '#divNearest table tr:nth-child(2), #divCustomer table tr:nth-child(2) , #divGara table tr:nth-child(2) {font-weight: bolder;}</style>' +
            "</div>";
        $("body").append(popup);
    }
    this.openWindowGara();
};

/*Mở popup tìm xe trong gara*/
FindCar.prototype.openWindowGara = function () {
    var that = this;
    try {
        that.findCarInGara();
        if (!that.windowGara) {
            that.windowGara = $("#divGaraWrapper").kendoWindow({
                title: "Tìm xe trong gara",
                visible: false,
                width: "600px"
            }).data("kendoWindow");
        }

        that.windowGara.center().open();
    }
    catch (err) {
        console.log("FindCar.prototype.openWindowGara:" + err);
    }
};

/* Lấy danh sách số hiệu xe trong gara */
FindCar.prototype.findCarInGara = function (latlng, radius) {
    var that = this;
    try {
        var listVehicleGara = null;
        var message = '';
        var total = 0;

        // trungtq: chuyển thành callback cho nhẹ.
        that.findCarInGaraCallback(function (data) {
            if (data != null && data.listVehicleGara != null && data.listVehicleGara.length > 0) {
                listVehicleGara = data.listVehicleGara;
                message = data.message;

                if (listVehicleGara == null) return;

                if (message != '') common.DisplayNotification(LanguageManager.getText('Common_ErrorProcessing') + " : " + message, common.notification_type_error);

                that.drawTableVehicleInGara(listVehicleGara, total);
            }
        });
    }
    catch (err) {
        console.log("FindCar.prototype.findCarInGara:" + err);
    }
};

FindCar.prototype.findCarInGaraCallback = function (callback) {
    $.ajax({
        type: 'GET',
        url: "/FindCar/FindCarInGara",
        data: {},
        dataType: 'json',
        cache: false,
        success: function (data) {
            callback(data);
        },
        error: function (error) {
            common.DisplayNotification(LanguageManager.getText('Common_ErrorProcessing') + " : " + error, common.notification_type_error);
        }
    });
}

FindCar.prototype.drawTableVehicleInGara = function (listVehicleGara, total) {
    try {
        $('#divGara').html('');
        var strHtml = '<table style="max-height: 350px">';
        strHtml += '<tr>';
        strHtml += '<td colspan="3">' + LanguageManager.getText("RIGHT_MENU_VEHICLE_GARA") + '</td>';
        strHtml += '</tr>';
        strHtml += '<tr>';
        strHtml += '<td>' + LanguageManager.getText('Common_Name') + ' gara' + '</td>';
        strHtml += '<td>' + LanguageManager.getText('Online_ListVehicles') + '</td>';
        strHtml += '<td>' + 'Tổng' + '</td>';
        strHtml += '</tr>';

        if (listVehicleGara != null && listVehicleGara.length > 0) {
            var currentVehicleGara = null;
            for (var i = 0; i < listVehicleGara.length; i++) {
                currentVehicleGara = listVehicleGara[i];
                strHtml += this.renderRowVehicleInGara(currentVehicleGara);
            }
        }

        strHtml += '</table>';
        $('#divGara').html(strHtml);
    }
    catch (err) {
        console.log("FindCar.prototype.drawTableVehicleInGara:" + err);
    }
};

FindCar.prototype.renderRowVehicleInGara = function (vehicleGara) {
    try {
        // Tạo table row
        var tr = $(document.createElement('tr'));
        tr.css({ "display": "" });

        // td tên gara
        var td_garaName = $(document.createElement('td'));
        td_garaName.addClass('text-center');
        td_garaName.attr("role", "gridcell");
        td_garaName.html(vehicleGara.GaraName);

        // td private code
        var td_privateCodes = $(document.createElement('td'));
        td_privateCodes.addClass('text-center');
        td_privateCodes.attr("role", "gridcell");
        td_privateCodes.html(vehicleGara.VehiclePrivateCodes);

        // td tổng
        var td_total = $(document.createElement('td'));
        td_total.addClass('text-center');
        td_total.attr("role", "gridcell");
        td_total.html(vehicleGara.TotalVehicle);

        // Add vào tr
        tr.append(td_garaName);
        tr.append(td_privateCodes);
        tr.append(td_total);
        var strFunc = 'onlineMap.map.panTo(new mxn.LatLonPoint(' + vehicleGara.Latitude + ',' + vehicleGara.Longitude + ')';
    }
    catch (err) {
        console.log("FindCar.prototype.renderRowVehicleInGara:" + err);
    }
    return '<tr onclick="' + strFunc + '">' + tr.html() + '</tr>';
}

/* 
* $Author$	sonnl
* Singleton pattern for class FindCar
* Ten variable: chu_cai_thuong_co_dau_gach_chan
* Ten methods, properties: in-caps.
*/
var SingletonFindCar = (function () {
    var instance = null; // Đối tượng quản lý
    return new function () {
        this.getInstance = function (opt) {
            if (instance == null) {
                instance = new FindCar(opt);
                instance.constructor = null;
            }
            return instance;
        };
    };
})();;
/*
Author  Sonnl
Date    18-11-2014
Des     Class cập nhật thông tin cấu hình bản đồ
*/
var MapConfiguration = function (opts) {
    this.windowConfigOnline = null;                                                                     // Khung cửa sổ 
    this.map = (opts != null && opts.map != undefined) ? opts.map : null;                               // Đối tượng map quản lý
    this.mapStraction = (opts != null && opts.mapStraction != undefined) ? opts.mapStraction : null;    // Đối tượng map straction                                                                                                    
    this.zoom = (opts != null && opts.zoom != undefined) ? opts.zoom : 18;                              // Mức zoom
    this.currentLat = (opts != null && opts.latlng != undefined) ? opts.latlng.lat : 20.974035;         // Vĩ độ hiện tại
    this.currentLng = (opts != null && opts.latlng != undefined) ? opts.latlng.lng : 105.846848;        // Vĩ độ hiện tại
    this.configMapManager = null;                                                                       // Đối tượng quản lý cấu hình
    //this.mapProviderTypes = "googlev3";                                                               // Cấu hình mặc định là dùng google map

    /*Region Constant begin*/
    this.listMapTypes =
    {
        GoogleMap: 27,
        BinhAnhMap: 28,
        TrafficMap: 29,
        SatelliteMap: 30
    };

    this.listMapName =
    {
        BinhAnhMap: "binhanhnormal",
        TrafficMap: "binhanhhybrid",
    };
};

MapConfiguration.prototype.initWindow = function () {
    var that = this;
    var popup = $("#configOnlineDiv");
    if (popup.length == 0) {
        var popup = "<div id='configOnlineDiv'></div>";
        $("body").append(popup);
    }

    // Đăng ký sự kiện mở window
    if (!that.windowConfigOnline) {
        that.windowConfigOnline = $("#configOnlineDiv").kendoWindow({
            title: LanguageManager.getText('MapConfig_Title'),
            visible: false,
            width: "400px",
            modal: true
        }).data("kendoWindow");
    }

    that.windowConfigOnline.refresh({
        type: "GET",
        url: "/MapConfiguration/GetPartialViewConfigOnline"
    });
    $("#configOnlineDiv").css("visibility","visible");
}

MapConfiguration.prototype.initData = function () {
    try {

        $('#Zoom').data("kendoDropDownList").value(this.zoom);

        $("#txtLongitude1").data("kendoNumericTextBox").value(this.currentLng);
        $("#txtLatitude1").data("kendoNumericTextBox").value(this.currentLat);

        // ID của đối tượng map
        //var mapTypeId = this.mapStraction.getMapTypeEnum();
        var mapTypeId = this.configMapManager.getMapTypeEnum(this.configMapManager.configs.MapType);
        // Lấy ra loại bản đồ
        //var mapValue = this.configMapManager.getMapType(mapTypeId);

        $('#Map').data("kendoDropDownList").value(mapTypeId);
     
    }
    catch (ex) {
        console.log("MapConfiguration.prototype.initData: " + ex);
    }
};


MapConfiguration.prototype.init = function () {
    var that = this;

    //if (that.mapStraction.api == that.mapProviderTypes) {

        // Load Config
        that.configMapManager = new ConfigMapManager();     // Khởi tạo đối tượng quản lý cấu hình map theo người dùng
        that.configMapManager.getConfigs();
        // Khởi tạo khung popup
            that.initWindow();

        setTimeout(function () {
            // Khởi tạo dữ liệu
            that.initData();
            // Mở khung popup 
           
            that.windowConfigOnline.center();
            that.windowConfigOnline.open();
        },1000);
    //}
    //else {
    //    alert("Chức năng chỉ hỗ trợ cho API của Google, vui lòng liên hệ với quản trị để biết thêm chi tiết.");
    //}
};


// Chuyển loại bản đồ
MapConfiguration.prototype.changeMapType = function (e) {
    try {
        var dataItem = this.dataItem(e.item.index());

        var mapTypeId = parseInt(dataItem.Value);
        switch (mapTypeId) {
            case mapConfiguration.configMapManager.listMapTypes.GoogleMap:
                mapConfiguration.mapStraction.setMapType(mxn.Mapstraction.ROAD);
                break;
            case mapConfiguration.configMapManager.listMapTypes.SatelliteMap:
                mapConfiguration.mapStraction.setMapType(mxn.Mapstraction.SATELLITE);
                break;
            default:
                mapConfiguration.mapStraction.setMapType(mapConfiguration.configMapManager.baMap);
                break;
        }
    }
    catch (ex) {
        console.log("MapConfiguration.prototype.changeMapType:" + ex);
    }
};

// Nhập tay kinh độ vĩ độ
MapConfiguration.prototype.changeLatLng = function (obj) {
    common.TrimTextBoxValue(obj);
    var lng = parseFloat($("#txtLongitude1").data("kendoNumericTextBox").value());
    var lat = parseFloat($("#txtLatitude1").data("kendoNumericTextBox").value());
    if (lng !== 0 && lat !== 0) {
        mapConfiguration.map.panTo(new mxn.LatLonPoint(lat, lng));
    }
};

// Chọn lại mức zoom bản đồ
MapConfiguration.prototype.changeZoom = function (e) {
    var dataItem = this.dataItem(e.item.index());
    var zoomStr = dataItem.Value;
    var zoom = parseInt(zoomStr);
    if (zoom > 0) {
        mapConfiguration.map.setZoom(zoom);
    }
};

// Thông báo thành công.
MapConfiguration.prototype.updateSuccess = function () {
    common.DisplayNotification(LanguageManager.getText('Common_UpdateSuccess'), common.notification_type_success);
    $("#configOnlineDiv").data("kendoWindow").close();
};


// Khởi tạo đối tượng
var mapConfiguration = null;

$(document).ready(function () {
    $('#btnMapConfigSave').click(function () {
        if ($("#txtLongitude1").data("kendoNumericTextBox").value() == undefined) {
            common.DisplayNotificationById(LanguageManager.getText('UserConfiguration_InvalidLatitude'), common.notification_type_error);
            return false;
        }

        if ($("#txtLatitude1").data("kendoNumericTextBox").value() == undefined) {
            common.DisplayNotificationById(LanguageManager.getText('UserConfiguration_InvalidLongitude'), common.notification_type_error);
            return false;
        } else {
            $("#crudLandmarkPopup").submit();
            return true;
        }
    });

    $('#btnMapConfigCancel').click(function () {
        $("#configOnlineDiv").data("kendoWindow").close();
        return false;
    });

    //if (!common.isDisplayMapOption) {
    //    $('#Map').data("kendoDropDownList").wrapper.hide();
    //}
});






;
/*
* $Author:      trungtq
* $Date: 05/01/2014
* Class làm việc với phần cảnh báo SIM hết tiền
* Tên variable: chu_cai_thuong_co_dau_gach_chan
* Tên methods, properties: in-caps.
*/

function SimMoneyManager(opts) {
    this.table = (opts != null && opts.table != undefined) ? opts.table : 'tableSimMoney';                                  // ID của bảng
    this.enableAlertSimMoney = (opts != null && opts.enableAlertSimMoney != undefined) ? opts.enableAlertSimMoney : false;  // Có cảnh báo SIM tiền không? mặc định là không
    this.list = null;                                                                                                       // Danh sách cảnh báo lấy về.
    this.windowPopUp = null;                                                                                                // Khung cửa sổ 
};

/* 
* $Author$		trungtq
* Khởi tạo khung popup
*/
SimMoneyManager.prototype.initWindow = function () {
    var that = this;

    // Khai báo đối tượng popup
    var popup = $("<div id=\"alertSimMoneyWindow\"></div>");
    $("body").append(popup);

    // Đăng ký sự kiện mở window
    that.windowPopUp = $("#alertSimMoneyWindow").kendoWindow({
        title: "Cảnh báo SIM tiền.",
        visible: false,
        width: "600px",
        height: "300px"
    }).data("kendoWindow");

    // Mở khung đo khoảng cách
    that.windowPopUp.refresh({
        url: "/Online/RenderAlertSimMoneyPartialView"
    });
};


/*
$Author$    :    trungtq
Description :    Khởi tạo.
*/
SimMoneyManager.prototype.init = function () {
    var that = this;

    // Mở khung popup cảnh báo.
    that.initWindow();

    // Chờ 1 lúc để load dữ liệu
    setTimeout(function () {
        // Nếu công ty tự nạp SIM tiền thì mới cảnh báo.
        if (that.enableAlertSimMoney == true) {

            // Lấy ra table để render dòng
            var table = $('#' + that.table + ' tbody');

            // Xóa danh sách đang có trên form
            table.empty();

            // Lấy dữ liệu từ database.
            that.list = that.getList();

            // Nếu có dữ liệu thì mới hiển thị khung cảnh báo
            if (that.list != null && that.list.length > 0) {
                // Render lại table
                that.renderTable();

                // Hiện khung popup.
                that.windowPopUp.center().open();
            }
            else {
                // Nếu không có thì không hiển thị khung cảnh báo.
                $("#alertSimMoneyWindow").remove();
            }
        }
    }, 500);
};

/*
* $Author$      trungtq
* Create date : 05/01/2015
*/
SimMoneyManager.prototype.renderTable = function () {
    var that = this;
    if (that.list != null && that.list.length > 0) {
        var table = $('#' + that.table + ' tbody');
        // Duyệt qua danh sách cảnh báo và tạo dòng cảnh báo tương ứng.
        for (var i = 0; i < that.list.length; i++) {
            // Tạo các dòng tương ứng
            var row = that.renderRow(i + 1, that.list[i]);

            // Append vào table
            table.append(row);
        }
    }
};

/* 
* $Author$		trungtq
* Tạo một dòng trên bảng cảnh báo
*/
SimMoneyManager.prototype.renderRow = function (stt, entity) {
    var that = this;
    var tr = $(document.createElement('tr'));
    try {

        tr.attr("id", "tr_SimMoney" + entity.VehicleID);
        if (entity.read == true) {
            tr.removeClass().addClass('colorOver');
        }
        var td_stt = $(document.createElement('td'));
        td_stt.html(stt);
        td_stt.addClass('text-center');

        var td_code = $(document.createElement('td'));
        td_code.addClass('text-center');
        td_code.html(entity.PrivateCode);

        var td_plate = $(document.createElement('td'));
        td_plate.addClass('text-center');
        td_plate.html(entity.VehiclePlate);

        var td_phone = $(document.createElement('td'));
        td_phone.addClass('text-center');
        td_phone.html(entity.PhoneNumber);

        var td_money = $(document.createElement('td'));
        td_money.addClass('text-center');
        td_money.html(entity.Money);

        var td_update_time = $(document.createElement('td'));
        td_update_time.addClass('text-center');
        td_update_time.html(FormatHelper.formatDateTime(entity.UpdateDate));

        tr.append(td_stt);
        tr.append(td_code);
        tr.append(td_plate);
        tr.append(td_phone);
        tr.append(td_money);
        tr.append(td_update_time);
    }
    catch (err) {
        console.log("Lỗi SimMoneyManager.prototype.renderRow: " + err);
    }
    return tr;
};

/* 
* $Author$		trungtq
* Lấy danh sách cảnh báo sim gần hết tiền
*/
SimMoneyManager.prototype.getList = function () {
    var that = this;
    // Clear all old data;
    list = new Array();
    $.ajax({
        type: "GET",
        url: "/Online/GetGetSimMoneyAlertOnline",
        async: false,
        data: {},
        dataType: "json",
        success: function (result) {
            if (result != null && result != undefined) {
                if (result.length > 0) {
                    for (var i = 0; i < result.length; i++) {
                        list.push(result[i]);
                    }
                }
            }
        },
        error: function (err) {
            console.log("SimMoneyManager.prototype.getList có lỗi: " + err);
        }
    });

    return list;
};
;
/*
* $Author$      : longtq
* Create date   : 27/11/2014
* Description   : Hiển thị popup
*/
function PriceCheckManager() {
    this.windowPopUp = null;                                                        // Khung cửa sổ 
};

/* 
* $Author$		trungtq
* Khởi tạo khung popup
*/
PriceCheckManager.prototype.initWindow = function () {
    var that = this;

    // Khai báo đối tượng popup
    var popup = $("<div id=\"priceCheckWindow\"></div>");
    $("body").append(popup);

    var window = $("#priceCheckWindow");

    if (!window.data("kendoWindow")) {
        // Đăng ký sự kiện mở window
        that.windowPopUp = $("#priceCheckWindow").kendoWindow({
            title: LanguageManager.getText('PriceCheck_PriceCheck'),
            width: "420px",
            visible: false,
            modal: false,
            open: function () {
                this.wrapper.css({ top: "100px" });
            }
        }).data("kendoWindow");
    }
    // Mở khung đo khoảng cách
    that.windowPopUp.refresh({
        url: "/PriceCheck/LoadPriceCheckPatial"
    });

    // Đổi lại z-index khung popup để cho khung tìm kiếm nằm lên trên.
    $('#priceCheckWindow').parent().css({ "z-index": "0" });

    that.windowPopUp.center().open();
};


/*
* $Author$      : longtq
* Create date   : 27/11/2014
* Description   : Init
*/
PriceCheckManager.prototype.init = function (opts) {
    var me = this;
    $('#txtMoneyOfOneWay').val('');
    $('#txtMoneyOfTwoWays').val('');

    $("#ddlPriceCheckVehicleType").bind("change", function () {
        me.onVehicleTypeChange();
    });

    $("#ddlPriceCheckRoute").bind("change", function () {
        me.routeChange();
    });

    // Đăng ký sự kiện mở khung popup
    me.initWindow();
};

PriceCheckManager.prototype.routeChange = function () {
    $('#txtEnterKmNumber').val($('#ddlPriceCheckRoute').val());
    $('#txtMoneyOfOneWay').val('');
    $('#txtMoneyOfTwoWays').val('');
};

PriceCheckManager.prototype.onVehicleTypeChange = function () {
    $.ajax({
        type: 'POST',
        url: "/PriceCheck/LoadPriceListInfo",
        data: { 'vehicleTypeID': $('#ddlPriceCheckVehicleType').val() != "" ? $('#ddlPriceCheckVehicleType').val() : 0 },
        dataType: 'text',
        async: true,
        success: function (result) {
            if (result != null && result != -1) {
                $('#lblFormula').html(result).text();
            }
            else {
                $('#lblFormula').text(LanguageManager.getText('PriceCheck_NoPriceList'));
            }
            $('#txtMoneyOfOneWay').val('');
            $('#txtMoneyOfTwoWays').val('');
        },
        error: function (err) {
            $('#lblFormula').text(err);
            $('#txtMoneyOfOneWay').val('');
            $('#txtMoneyOfTwoWays').val('');
        }
    });
};

/*
* $Author$      : longtq
* Create date   : 27/11/2014
* Description   : Tính tiền
*/
PriceCheckManager.prototype.cash = function () {
    var me = this
    var vehicleType = $('#ddlPriceCheckVehicleType').val();
    if (vehicleType == null || vehicleType == '' || vehicleType == undefined) {
        alert('Bạn chưa chọn loại xe');
        return;
    }
    var EnterKmNumber = $('#txtEnterKmNumber').val();
    if (EnterKmNumber == null || EnterKmNumber == '' || EnterKmNumber == undefined || EnterKmNumber == '0') {
        alert('Bạn chưa nhập số km');
        return;
    }
    $.ajax({
        type: 'POST',
        url: "/PriceCheck/CashPrice",
        data: { 'vehicleTypeID': vehicleType, 'kmGo': EnterKmNumber },
        dataType: 'text',
        async: true,
        success: function (result) {
            if (result != null && result != -1) {
                var ArrPrice = result.split(',');
                $('#txtMoneyOfOneWay').val(me.formatNumber(ArrPrice[0]));
                $('#txtMoneyOfTwoWays').val(me.formatNumber(ArrPrice[1]));
            }
            else {
                $('#txtMoneyOfOneWay').val(0);
                $('#txtMoneyOfTwoWays').val(0);
            }
        },
        error: function (error) {
            $('#lblFormula').text(error);
        }
    });
};

/*
* $Author$      : longtq
* Create date   : 27/11/2014
* Description   : Nhập được nguyên số và đưa về định dạng 123.456
*/
PriceCheckManager.prototype.formatNumber = function (input) {
    var nStr = input.toString();
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    var Reg = /^[0-9.]{0,100}$/;
    if (Reg.test(nStr)) {
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }
    else return '';
};

PriceCheckManager.prototype.closeWindow = function () {
    this.windowPopUp.close();
};


/* 
* $Author$	trungtq
* Singleton pattern for class PriceCheckManager
*/
var SingletonPriceCheckManager = (function () {
    var that = this;
    var instance = null; // Đối tượng quản lý
    return new function () {
        this.getInstance = function () {
            if (instance == null) {
                instance = new PriceCheckManager();
                instance.constructor = null;
            }
            return instance;
        };
    };
})();;
/*
* $Author$      : longtq
* Create date   : 23/06/2015
* Description   : Quản lý form nhập thông tin xe cho TCĐB
*/
function VehicleDeclarationManager() {
    this.windowPopUp = null; // Khung cửa sổ 
    this.vehicleID = null;
    this.privateCode = null;
    this.vehiclePlate = null;
};

/* 
* $Author$	 : longtq	
* Khởi tạo khung popup
*/
VehicleDeclarationManager.prototype.initWindow = function () {
    var that = this;

    // Khai báo đối tượng popup
    var popup = $("<div id=\"vehicleDeclaration\"></div>");
    $("body").append(popup);

    var window = $("#vehicleDeclaration");

    if (!window.data("kendoWindow")) {
        // Đăng ký sự kiện mở window
        that.windowPopUp = $("#vehicleDeclaration").kendoWindow({
            title: 'Thông tin xe: ' + that.privateCode + ' - ' + that.vehiclePlate,
            width: "600px",
            visible: false,
            modal: false,
            resizable: false,
            open: function () {
                this.wrapper.css({ top: "100px" });
            }
        }).data("kendoWindow");
    }
    // Mở khung đo khoảng cách
    that.windowPopUp.refresh({
        url: "/VehicleDeclaration/LoadVehicleDeclarationPatial"
    });
    $("#vehicleDeclaration_wnd_title").text('Thông tin xe: ' + that.privateCode + ' - ' + that.vehiclePlate);
    // Đổi lại z-index khung popup để cho khung tìm kiếm nằm lên trên.
    $('#vehicleDeclaration').parent().css({ "z-index": "0" });

    that.windowPopUp.center().open();
};


/*
* $Author$      : longtq
* Create date   : 23/06/2015
* Description   : Init
*/
VehicleDeclarationManager.prototype.init = function (opts) {
    var me = this;
    //opts Truyền bên file \scripts\map\online\mapmanager.js
    //bao gồm id xe,số hiệu xe,biển số xe
    var arr = opts.split(',');
    me.vehicleID = arr[0];
    me.privateCode = arr[1];
    me.vehiclePlate = arr[2];
    // Đăng ký sự kiện mở khung popup
    me.initWindow();
};


/*
* $Author$      : longtq
* Create date   : 23/06/2015
* Description   : Chèn vào Database
*/
VehicleDeclarationManager.prototype.insertVehicleInfo = function () {
    var me = this;
    var branchID = $('#ddlVehicleDeclarationBranchs').val();
    var transportTypeID = $('#ddlVehicleDeclarationTransportType').val();
    var guestNumber = $('#GuestNumber').val();
    if (branchID == null || branchID == '' || branchID == undefined) {
        alert('Bạn chưa  chọn công ty');
        return;
    }
    if (transportTypeID == null || transportTypeID == '' || transportTypeID == undefined) {
        alert('Bạn chưa chọn loại hình vận tải');
        return;
    }
    if (guestNumber == null || guestNumber == '' || guestNumber == undefined) {
        alert('Bạn chưa nhập số khách');
        return;
    }
    if (isNaN(parseInt(guestNumber)) || parseInt(guestNumber) == 0) {
        alert('Số khách sai định dạng');
        return;
    }
    $.ajax({
        type: 'POST',
        url: "/VehicleDeclaration/InsertVehicleInfo",
        data: { 'vehicleID': me.vehicleID, 'branchID': branchID, 'transportTypeID': transportTypeID, 'guestNumber': guestNumber, 'isUrbanArea': $('#ckIsUrbanArea').is(":checked") },
        dataType: 'text',
        async: true,
        success: function (result) {
            if (result != null && result != -1) {
                //Xoa dong hien thoi render lai td
                var tr = $('#tr_' + me.vehicleID);
                var obj = onlineMap.dicMarkers.get(parseInt(me.vehicleID));
                if (tr != undefined && obj != null) {
                    tr.html('');
                    var vehicle = obj.vehicle;

                    var td_Icon = $(document.createElement('td'));
                    td_Icon.attr("role", "gridcell");

                    var img = $(document.createElement('img'));
                    img.attr("id", vehicle.VehicleID + "_icon");
                    img.attr("src", onlineMap.parseVehicleIcon(vehicle));
                    img.attr("alt", "");
                    img.attr("width", "25px");
                    img.attr("height", "25px");
                    td_Icon.append(img);

                    // td số hiệu xe
                    var td_privateCode = $(document.createElement('td'));
                    td_privateCode.attr("id", vehicle.VehicleID + "_plate");
                    td_privateCode.addClass('text-center');
                    td_privateCode.attr("role", "gridcell");
                    td_privateCode.html(vehicle.PrivateCode);


                    // td vận tốc
                    var td_velocity = $(document.createElement('td'));
                    td_velocity.attr('id', vehicle.VehicleID + "_velocity");
                    td_velocity.addClass('text-center');
                    td_velocity.attr("role", "gridcell");
                    td_velocity.html(vehicle.VelocityGPS);

                    // td thời gian GpsTime
                    var td_time = $(document.createElement('td'));
                    td_time.attr('id', vehicle.VehicleID + '_time');
                    td_time.addClass('text-center');
                    td_time.attr("role", "gridcell");
                    td_time.html(FormatHelper.formatTimeConfigs(vehicle.GpsTime, this.isDisplaySeconds));      // Format lại đoạn này
                    // Add vào tr
                    tr.append(td_Icon);
                    tr.append(td_privateCode);
                    tr.append(td_velocity);
                    tr.append(td_time);
                    vehicle.IsLostVehicleInfo = false;
                    tr.unbind("click");//xóa các sự kiện click
                    //add lại sự kiện click
                    tr.bind({
                        click: function (e) {
                            // Nếu chưa có  thông tin BGT
                            $('#tblVehicleList tbody tr').each(function () {
                                if ($(this).hasClass('colorActive')) {
                                    $(this).removeClass('colorActive');
                                }
                            });

                            // Active color
                            $(this).addClass('colorActive');

                            // Panto đến xe
                            onlineMap.panTo(vehicle.VehicleID);
                            $("#Online_Vehicles").data("kendoComboBox").text(vehicle.PrivateCode);
                        }
                    });
                }

                me.closeWindow();
                common.DisplayNotification('Cập nhật thành công', common.notification_type_success);
            }
            else {
                common.DisplayNotification('Cập nhật thất bại', common.notification_type_error);
            }
        },
        error: function (error) {
            common.DisplayNotification(error, common.notification_type_error);
        }
    });
};

/*
* $Author$      : longtq
* Create date   : 23/06/2015
* Description   : Nhập được nguyên số và đưa về định dạng 123.456
*/
VehicleDeclarationManager.prototype.formatNumber = function (input) {
    var nStr = input.toString();
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    var Reg = /^[0-9.]{0,100}$/;
    if (Reg.test(nStr)) {
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }
    else return '';
};

VehicleDeclarationManager.prototype.closeWindow = function () {
    this.windowPopUp.close();
};


/* 
* $Author$	trungtq
* Singleton pattern for class VehicleDeclarationManager
*/
var SingletonVehicleDeclarationManager = (function () {
    var that = this;
    var instance = null; // Đối tượng quản lý
    return new function () {
        this.getInstance = function () {
            if (instance == null) {
                instance = new VehicleDeclarationManager();
                instance.constructor = null;
            }
            return instance;
        };
    };
})();;
/// <summary>
/// Hỗ trợ định dạng dữ liệu cho các input 
/// </summary>
/// <Modified>
/// Name     Date         Comments
/// LongTQ  9/17/2014   created
/// </Modified>


// Nhập được nguyên số và đưa về định dạng 123,456
FormatOnlyNumber = function (input) {
    var nStr = input.value.trim() + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    var Reg = /^[0-9.]{0,100}$/;
    if (Reg.test(nStr)) {
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        input.value = x1 + x2;
    }
    else input.value = '';
};

//validate số điện thoại
ValidatePhoneNumber = function (input) {
    debugger;
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return vnf_regex.test(input.value);
}

// Nhập được nguyên số 
AllowOnlyNumber = function (input) {
    var nStr = input.value.trim() + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    var Reg = /^[0-9.]{0,100}$/;
    if (Reg.test(nStr)) {
        input.value = x1 + x2;
    }
    else input.value = '';
};

//Chỉ nhập được số nguyên 
AllowOnlyInteger = function (input) {
    var nStr = input.value.trim() + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    var Reg = /^[0-9]{0,100}$/;
    if (Reg.test(nStr)) {
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        input.value = x1 + x2;
    }
    else input.value = '';
};

//nhập được cả chữ
FormatWithLetter = function (input) {
    var nStr = input.value.trim() + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    input.value = x1 + x2;
};

// lọc bỏ khoảng trắng
TrimSpace = function (input) {
    input.value = input.value.trim();
}
//nhập được cả chữ và số
AllowNumberAndLetter = function (input) {
    var nStr = input.value.trim() + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    input.value = x1 + x2;
};

// Kiểm tra có phải phím mũi tên hướng đi ko
CheckIfNavigateKeyUp = function (event) {
    //Key: 37: back, 38: up, 39: forward, 40: down
    if (event.which >= 37 && event.which <= 40) {
        return true;
    }
}

// Nhận số, chữ, ký tự đặc biệt và cho phép dùng phím mũi tên
AllowNumberAndLetterNavigable = function (event, input) {
    if (CheckIfNavigateKeyUp(event)) return;
    var nStr = input.value.trim() + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    input.value = x1 + x2;
}

// Kiểm tra độ dài ký tự nhập vào và đưa thông báo và clear dữ liệu
CheckMaxLength = function (input, number) {
    if (input.value.length > number) {
        alert('Bạn không được nhập quá ' + number + ' ký tự');
        input.value = '';
    }
};

// Kiểm tra độ dài ký tự nhập vào và chỉ đưa thông báo
CheckMaxLengthAndAlert = function (input, number) {
    if (input.value.trim().length > number) {
        alert('Bạn không được nhập quá ' + number + ' ký tự');
    }
};

//Kiểm tra định dạng email
validateEmail = function (input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //alert(re.test(input.value));
    return re.test(input.value);
}

//Kiểm tra định dạng email
validateEmailButNotRequire = function (input) {
    if (input.value == null || input.value.trim() == '') return;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input.value);
}

//nhập được cả chữ và số và vài ký tự đặc biệt (!@#$%^&*()-+_=)
AllowNumberLetterSomeSpecialCharacters = function (input) {
    var nStr = input.value.trim() + '';
    nStr = nStr.replace(/\,/g, "");
    var regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
    if (!regex.test(nStr)) {
        input.value = '';
    }
}
//nhập được cả chữ và số và không cho nhập ký tự đặc biệt
AllowNumberAndLetterButNotSpecialCharacters = function (input) {
    var nStr = input.value.trim() + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var Reg = /^[a-zA-Z0-9-_]*$/;
    if (Reg.test(nStr)) {
        input.value = x1 + x2;
    }
    else input.value ='';
   // else input.value = input.value.substring(0, input.value.length - 1); //Remove đi ký tự không thích hợp (gõ thì ok nhưng nó paste vào gồm nhiều ký tự ko hợp lệ là toạch)
};
//nhập được cả chữ và số và dấu cách 
AllowNumberLetterSpace = function (input) {
    var nStr = input.value + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    input.value = x1 + x2;
};
//nhập được cả chữ và số không nhập dấu cách dấu cách 
AllowNumberLetterNoSpace = function (input) {
    var nStr = input.value + '';
    nStr = trimSpace(nStr);
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    input.value = x1 + x2;
};
// cắt khoảng trắng
trimSpace = function (str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};;
/* 
* $Author$		trungtq
* Class hỗ trợ ẩn hiện cột trên lưới
* Ten variable: chu_cai_thuong_co_dau_gach_chan
* Ten methods, properties: in-caps.
*/
function ReportColumOptionHelper(opts) {
    this.displayColumns = (opts != null && opts.displayColumns != undefined) ? opts.displayColumns : '';    // Danh sách các cột cần hiện
    this.gridName = (opts != null && opts.gridName != undefined) ? opts.gridName : '';                      // Tên của Grid
}

/* 
* $Author$		trungtq
* Ẩn hiện cột
*/
ReportColumOptionHelper.prototype.visibleColumn = function () {
    try {
        var that = this;

        if (that.displayColumns != null && that.displayColumns.length > 0) {
            var columns = that.displayColumns.split(',');
            if (columns.length > 0) {

                var grid = $("#" + that.gridName).data("kendoGrid");
                // Ẩn tất cả các cột.
                var gridColumns = grid.columns; // danh sách cột.
                for (var k = 1; k < gridColumns.length; k++) {
                    grid.hideColumn(k);
                }
            
                // Hiện cột theo tên
                for (var i = 0; i < columns.length; i++) {
                    grid.showColumn(columns[i]);
                }
            }
        }
    }
    catch (err) {
        console.log(err);
    }
};

;
//Thông tin thiết bị

var deviceInfo = new DeviceInfo();

function DeviceInfo() {
    var self = this;

    //dữ liệu tìm kiếm
    this.SearchData = function () {
        var arr = [];
        $.each($("#divError input[type=checkbox]"), function () {
            if ($(this).is(":checked")) {
                arr.push($(this).attr("value"));
                IsChoosenVehicle = true;
            }
        });
        return {
            txtSearch: $("#txtSearch").val(),
            arrErrors: arr.join()
        }
    };

    //thiết lập cho popup thông tin thiết bị
    this.ShowInfo = function (e) {
        //tite popup
        $("span.k-window-title").html(LanguageManager.getText('DeviceInfo_Title'));
        //nút close
        $("div.k-edit-form-container div.k-edit-buttons.k-state-default")
            .html('')
            .html('<a href="javascript:void(0)" class="k-button k-button-icontext k-grid-cancel"><span class="k-icon k-cancel"></span>' + LanguageManager.getText('Common_Close') + '</a>')
        //self.Show(e.model);
        $.ajax({
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            url: '/DeviceInfo/GetVehicleInfoByVehicleID',
            data:
            {
                vehicleID: e.model.VehicleID
            },
            success: function (re) {
                if (re != null) {
                    self.Show(re);
                }
                else common.DisplayNotification(LanguageManager.getText('Common_ErrorOccurred'), common.notification_type_success);
            }
        });
    }

    //show thông tin thiết bị trên trang online
    this.ShowOnline = function (vehicleID) {
        $.ajax({
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            url: '/DeviceInfo/GetVehicleInfoByVehicleID',
            data:
            {
                vehicleID: vehicleID
            },
            success: function (re) {
                if (re != null) {
                    self.Show(re);
                    $("#divDeviceInfo").show();
                }
                else common.DisplayNotification(LanguageManager.getText('Common_ErrorOccurred'), common.notification_type_success);
            }
        });
    }

    //show dữ liệu của model lên popup
    //cái này dùng chung cho cả popup show ở trang thiết bị độc lập
    //và popup ở trang online
    self.Show = function (model) {
        //title cho popup trang online
        if ($("#lblVehiclePlate") != null && $("#lblVehiclePlate") != undefined) {
            $("#lblVehiclePlate").html(model.VehiclePlate);
        }
        //ảnh hiển thị tình trạng thiết bị trang online
        if ($("#divImgInfoOnline") != null && $("#divImgInfoOnline") != undefined) {
            var imgstr = '';
            imgstr += "<img src='" + model.ImgGPS + "' style='margin-right: 5px;' width='15' height='15'/>"
                + "<img src='" + model.ImgSIM + "' style='margin-right: 5px;' width='9' height='15'/>"
                + "<img src='" + model.ImgPower + "' style='margin-right: 5px;' width='9' height='15'/>"
                + "<img src='" + model.ImgCard + "' style='margin-right: 5px;' width='15' height='15'/>";
            $("#divImgInfoOnline").html(imgstr);
        }

        if ($("#divImgInfo") != null && $("#divImgInfo") != undefined) {
            var imgstr = '';
            imgstr += "<img src='" + model.ImgGPS + "' style='margin-right: 5px;'/>" + "<img src='" + model.ImgSIM + "' style='margin-right: 5px;'/>" + "<img src='" + model.ImgPower + "' style='margin-right: 5px;'/>"
                + "<img src='" + model.ImgCard + "' style='margin-right: 5px;' width='25' height='25'/>";
            $("#divImgInfo").html(imgstr);
        }
        //thông tin thiết bị
        var deviceInfo = '';
        if (model.IMEI != null) {
            deviceInfo += '<label> IMEI: ' + model.IMEI + '</label><br />';
        } else {
            deviceInfo += '<label> IMEI: </label><br /><br/>';
        }
        deviceInfo += '<label>' + LanguageManager.getText('Common_PrivateCode') + ': ' + model.PrivateCode + '</label><br />';
        deviceInfo += '<label>' + LanguageManager.getText('Common_VehiclePlate') + ': ' + model.VehiclePlate + '</label><br />';
        if (model.VIN != null) {
            deviceInfo += '<label> VIN: ' + model.VIN + '</label><br />';
        } else {
            deviceInfo += '<label> VIN: </label><br />';
        }
        if (model.JoinSystemDate != null) {
            deviceInfo += '<label>' + LanguageManager.getText('DeviceInfo_BeginTime') + ': ' + model.JoinSystemDateStr + '</label><br />';
        } else {
            deviceInfo += '<label>' + LanguageManager.getText('DeviceInfo_BeginTime') + ': </label><br />';
        }
        if (model.LastTimeSend != null) {
            deviceInfo += '<label>' + LanguageManager.getText('DeviceInfo_LastestSendTime') + ': ' + model.LastTimeSendStr + '</label><br />';
        } else {
            deviceInfo += '<label>' + LanguageManager.getText('DeviceInfo_LastestSendTime') + ': </label><br />';
        }
        $("#tdDeviceInfo").html(deviceInfo);

        //thông tin GPS
        var gpsInfo = '';
        if (model.ErrorGps != 0) {
            gpsInfo += '<label>GPS: ' + LanguageManager.getText('DeviceInfo_LostGPS') + '</label><br />';
            if (model.GpsTime != null) {
                gpsInfo += '<label>' + LanguageManager.getText('DeviceInfo_TimeLostGPS') + ': ' + model.GpsTimeStr + '</label><br />';
            } else {
                gpsInfo += '<label>' + LanguageManager.getText('DeviceInfo_TimeLostGPS') + ': </label><br />';
            }
            //mất kết nối anten
            if (model.ErrorGps == 1) {
                gpsInfo += "<label style='color:red;'>" + LanguageManager.getText('DeviceInfo_ErrorGPSConnectAnten') + "</label><br />";
            } else if (model.ErrorGps == 2) {
                gpsInfo += "<label style='color:red;'>" + LanguageManager.getText('DeviceInfo_ErrorGPSConnectTemp') + "</label><br />";
            } else if (model.ErrorGps == 3) { //tín hiệu gps yếu
                gpsInfo += "<label style='color:red;'>" + LanguageManager.getText('DeviceInfo_ErrorGPSConnectWeak') + "</label><br />";
            }
        } else {
            gpsInfo += '<label>' + LanguageManager.getText('DeviceInfo_Normal') + '</label><br />';
        }
        $("#tdSimInfo").html(gpsInfo);

        //thông tin sim
        var simInfo = '';
        if (model.PhoneNumber != null && model.PhoneNumber != "") {
            simInfo = "<label>" + LanguageManager.getText("Common_PhoneNumber") + ': ' + model.PhoneNumber + "</label><br />";
            if (model.SIMType == 0) {
                simInfo += "<label>" + LanguageManager.getText("DeviceInfo_SubscriptionType") + ': ' + LanguageManager.getText("DeviceInfo_SubscriptionTypePrepay") + "</label><br />";
                if (model.Money == -1000000) simInfo += "<label>" + LanguageManager.getText("DeviceInfo_RemainMoney") + ': ' + LanguageManager.getText("DeviceInfo_NotUpdate") + " </label><br />";
                else {
                    var tg = model.UpdateDateSIM;
                    if (tg == null) {
                        simInfo += "<label style='color:red'>" + LanguageManager.getText("DeviceInfo_NotUpdateSimMoney") + "</label><br />";
                    } else {
                        simInfo += "<label>" + LanguageManager.getText("DeviceInfo_RemainMoney") + ': ' + model.Money + "</label><br />";
                        simInfo += "<label>" + LanguageManager.getText("DeviceInfo_UpdateTime") + ': ' + model.UpdateDateSIMStr + "</label><br />";
                        if (model.ErrorSim == 1) simInfo += "<label style='color:red;'>" + LanguageManager.getText("DeviceInfo_NotHaveSimMoney") + "</label><br />";
                        else if (model.ErrorSim == 2) simInfo += "<label style='color:red;'>" + LanguageManager.getText("DeviceInfo_SimPrepareNotHaveMoney") + "</label><br />";
                        else if (model.ErrorSim == 3) simInfo += "<label style='color:red;'>" + LanguageManager.getText("DeviceInfo_NotHaveSimMoney") + "</label><br />";
                        else if (model.ErrorSim == 4) simInfo += "<label style='color:red;'>" + LanguageManager.getText("DeviceInfo_SimProblem") + "</label><br />";
                    }
                }
            }
            else simInfo += "<label>" + LanguageManager.getText("DeviceInfo_SubscriptionType") + ': ' + LanguageManager.getText("DeviceInfo_SubscriptionTypePayAfter") + " </label><br />";
        }
        else simInfo = "<label style='color:red'>" + LanguageManager.getText("DeviceInfo_NotHaveSimInfo") + "</label><br />";
        $("#tdSim").html(simInfo);

        // nguồn
        var powerInfo = '';
        // Nếu mức acquy có giá trị.
        if (model.Battery != null && model.Battery != undefined) {
            if ((model.Battery > model.MinVoltage) && (model.Battery < model.MaxVoltage)) {
                powerInfo = "<label>" + LanguageManager.getText("DeviceInfo_PowerLevel") + ': ' + model.Battery.toFixed(3) + " v</label><br />";
            }
        }
        else {
            powerInfo = "";
        }
        if (model.ErrorPower != null && model.ErrorPower != undefined) {
            if (model.ErrorPower == 1) {
                powerInfo += "<div style='color:red'> " + "<label>" + LanguageManager.getText("DeviceInfo_PowerNotice1") + "</label><br />" + " </div>";
            }
            else if (model.ErrorPower == 2) {
                powerInfo += "<div style='color:red'> " + "<label>" + LanguageManager.getText("DeviceInfo_PowerNotice2") + "</label><br />" + " </div>";
            }
            else if (model.ErrorPower == 3) {
                powerInfo += "<label style='color:red;'>" + LanguageManager.getText("DeviceInfo_PowerNotice3") + " </label><br />";
            }
            else if (model.ErrorPower == 4) {
                powerInfo += "<label style='color:red;'>" + LanguageManager.getText("DeviceInfo_PowerNotice6") + "</label><br />";
            }
            else {
                powerInfo += "<label>" + LanguageManager.getText("DeviceInfo_PowerLevel") + ": " + model.Battery + "</label><br />";
                powerInfo += "<label>" + LanguageManager.getText("DeviceInfo_PowerNotice4") + "</label><br />";
            }
        }
        else {
            powerInfo = "";
        }

        $("#tdPower").html(powerInfo);

        //thẻ nhớ
        var cardInfo = '';
        if (model.ErrorCard == 1) {
            cardInfo = "<label style='color:red;'>" + LanguageManager.getText("DeviceInfo_Memory") + ": " + LanguageManager.getText("DeviceInfo_MemoryNotCreate") + "</label><br />";
        } else if (model.ErrorCard == 2) {
            cardInfo = "<label style='color:red;'>" + LanguageManager.getText("DeviceInfo_Memory") + ": " + LanguageManager.getText("DeviceInfo_MemoryNotHave") + "</label><br />";
        } else {
            cardInfo = "<label>" + LanguageManager.getText("DeviceInfo_Memory") + ": " + LanguageManager.getText("DeviceInfo_MemoryNormal") + "</label><br />";
        }
        $("#tdCard").html(cardInfo);

        //trường thông báo bên dưới
        var info = '';
        if (model.ErrorGpsState) {
            info = LanguageManager.getText("DeviceInfo_TimeLostGPS") + " : " + model.LastTimeSendStr;
            $("#idProcess").css("display", "inline");
            $("#idRouter").css("display", "inline");
            $("#idRouter").html("<a href='javascript:void(0);' onclick='javascript:window.open(\"" + "/Route/Index?fromDate=" + model.GpsTimeMinus10StrRoute + "&toDate=" + model.GpsTimeStrRoute + "&VehiclePlate=" + model.VehiclePlate + "\", \"_blank\")'>" + LanguageManager.getText("Common_Route") + "</a>");
        }
        else {
            $("#idProcess").css("display", "none");
            $("#idRouter").css("display", "none");
            $("#idContenProcess").css("display", "none");
        }
        $("#idSignalLost").html(info);
    }

    self.ShowHideProcess = function () {
        if ($("#idContenProcess").css('display') == 'none') {
            $("#idContenProcess").css("display", "inline");
        }
        else {
            $("#idContenProcess").css("display", "none");
        }
    }

    //hàm ready
    self.Ready = function () {
        setTimeout(function () { $("#txtSearch").focus() }, 500);
    }
};

function ZoneWarningManager() {
    this.windowPopUp = null;                                                        // Khung cửa sổ 
    this.tabIndex = 0;
};

ZoneWarningManager.prototype.initWindow = function () {
    var $this = this;

    // Khai báo đối tượng popup
    var popup = $("<div id=\"ZoneWarningWindow\"></div>");
    $("body").append(popup);

    var window = $("#ZoneWarningWindow");

    if (!window.data("kendoWindow")) {
        // Đăng ký sự kiện mở window
        $this.windowPopUp = $("#ZoneWarningWindow").kendoWindow({
            title: LanguageManager.getText("ZoneWarning_Title"),
            actions: ["Pin", "Minimize", "Close"],
            width: "800px",
            visible: false,
            modal: false,
            open: function () {
                this.wrapper.css({ top: "100px" });
            }
        }).data("kendoWindow");
    }
   
    // load khung partial
    $this.windowPopUp.refresh({
        url: "/ZoneWarning/LoadMainZoneWarningPartial?pIndex="+ $this.tabIndex
    });

    // Đổi lại z-index khung popup để cho khung tìm kiếm nằm lên trên.
    $('#ZoneWarningWindow').parent().css({ "z-index": "0" });

    $this.windowPopUp.center().open();
  
    //Load ra xe trong vùng
    var Timer = 30000;//30 giây
    setInterval(function () {
        setTimeout(function () {
            $this.loadListVehilceInZone();
        }, 1000);
    }, Timer);
    //Load ra xe trong sảnh!*sign
    setInterval(function () {
        setTimeout(function () {
            $this.loadListVehilceInHall();
        }, 1000);
    }, Timer);
    //Load ra xe ngoại thành
    setInterval(function () {
        setTimeout(function () {
            $this.loadListVehilceExtramural();
        }, 1000);
    }, Timer);
};

//lấy thông tin cảnh báo theo vùng
ZoneWarningManager.prototype.loadListVehilceInZone = function () {
    $.ajax({
        type: 'POST',
        url: "/ZoneWarning/LoadListVehilceInOperatingArea",
        dataType: 'json',
        async: true,
        success: function (result) {
            if (result != null && result != -1) {
                // chỗ này nó chưa khai báo grid nên chưa lấy đc 
                var zoneWarningGrid = common.GetKendoGrid("ZoneWarningGrid");
                if(zoneWarningGrid!=undefined)
                    zoneWarningGrid.dataSource.data(result.Data);
            }
            else {
                // alert something
            }
        },
        error: function (err) {
            // alert something
        }
    });
};

//lấy thông tin cảnh báo theo sảnh
ZoneWarningManager.prototype.loadListVehilceInHall = function () {
    var url = '/ZoneWarning/LoadListVehilceInHall_V2';
    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        async: true,
        success: function (result) {
            if (result != null && result != -1) {
                // chỗ này nó chưa khai báo grid nên chưa lấy đc 
                var hallWarningGrid = common.GetKendoGrid("HallWarningGrid");
                if(hallWarningGrid!=undefined)
                    hallWarningGrid.dataSource.data(result.Data);
            }
            else {
               // alert something
            }
        },
        error: function (err) {
            // alert something
        }
    });
};

//lấy thông tin cảnh báo xe ngoại thành
ZoneWarningManager.prototype.loadListVehilceExtramural = function () {
    $.ajax({
        type: 'POST',
        url: "/ZoneWarning/LoadListVehilceExtramural",
        dataType: 'json',
        async: true,
        success: function (result) {
            if (result != null && result != -1) {
                // chỗ này nó chưa khai báo grid nên chưa lấy đc 
                var extramuralWarningGrid = common.GetKendoGrid("ExtramuralWarningGrid");
                if(extramuralWarningGrid!=undefined)
                    extramuralWarningGrid.dataSource.data(result.Data);
            }
            else {
                // alert something
            }
        },
        error: function (err) {
            // alert something
        }
    });
};

ZoneWarningManager.prototype.init = function (opts) {
    var me = this;
    if (opts != undefined && opts === 1)
        me.tabIndex = opts;
    // Đăng ký sự kiện mở khung popup
    me.initWindow();
};

//thay đổi mầu cho dòng
ZoneWarningManager.prototype.DataBound = function (e) {
    var data = this.dataSource.view();
    for (var i = 0; i < data.length; i++) {
        var row = this.table.find("tr[data-uid='" + data[i].uid + "']");
        if (data[i].Color != null && data[i].Color != undefined) {
            row.css("color", data[i].Color);
        }

    }
}

/*
* $Author$      : longtq
* Create date   : 29/06/2015
* Description   : đọc lại dữ liệu khi cần
*/
ZoneWarningManager.prototype.reload = function () {
    var $this = this;
    $this.loadListVehilceInZone();
    $this.loadListVehilceInHall();
    $this.loadListVehilceExtramural();
    common.DisplayNotification(LanguageManager.getText("Common_UpdateSuccess"), common.notification_type_success);
};

ZoneWarningManager.prototype.closeWindow = function () {
    this.windowPopUp.close();
};

var SingletonZoneWarningManager = (function () {
    var $this = this;
    var instance = null; // Đối tượng quản lý
    return new function () {
        this.getInstance = function () {
            if (instance == null) {
                instance = new ZoneWarningManager();
                instance.constructor = null;
            }
            return instance;
        };
    };
})();;
/*!
	Colorbox 1.6.1
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-z-D,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-N-j,I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(S).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),M=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(S=n(se,"Title"),F=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),M),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),L=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(F).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,L))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){M.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=_.get("createImg"),t(U).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(U.style.cursor="pointer",t(U).bind("click."+Z,function(){J.next()})),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&L.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,I,L,M,S,F,R,K,P,B,O,_,j,D,N,z,A,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullScreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+z+D+"px",x[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(L.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),L.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),M.hide(),u(ne),_.get("onComplete")},S.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&F.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
/* 
* $Author$		trungtq
* Class export Excel
* Ten variable: chu_cai_thuong_co_dau_gach_chan
* Ten methods, properties: in-caps.
*/
function ExportHelper(opts) {
    this.data = (opts != null && opts.data != undefined) ? opts.data : null;
    this.createExcelUrl = (opts != null && opts.createExcelUrl != undefined) ? opts.createExcelUrl : '';
    this.downloaExcelUrl = (opts != null && opts.downloaExcelUrl != undefined) ? opts.downloaExcelUrl : '';
    this.createPDFUrl = (opts != null && opts.createPDFUrl != undefined) ? opts.createPDFUrl : '';
    this.downloaPDFUrl = (opts != null && opts.downloaPDFUrl != undefined) ? opts.downloaPDFUrl : '';
    this.title = (opts != null && opts.title != undefined) ? opts.title : '';

    this.reportWindowPopUp = null;                                                                                              // Khung cửa sổ 
    this.printUrl = (opts != null && opts.printUrl != undefined) ? opts.printUrl : '';                                          // Đường dẫn để in báo cáo
    this.iframeUrl = (opts != null && opts.iframeUrl != undefined) ? opts.iframeUrl : '';                                       // Đường dẫn IFrame của báo cáo
    this.iframeBlankUrl = (opts != null && opts.iframeBlankUrl != undefined) ? opts.iframeBlankUrl : '';                        // Đường dẫn IFrame của báo cáo
    this.titleWindowPopUp = (opts != null && opts.titleWindowPopUp != undefined) ? opts.titleWindowPopUp : 'In báo cáo';        // Đường dẫn IFrame của báo cáo
};


/* 
* $Author$		trungtq
* Export Excel
*/
ExportHelper.prototype.exportToExcel = function () {
    //Assign ExportHelper object to "var that" to use in anonymous funtion.
    var that = this;
    if (that.createExcelUrl != '') {
        $.blockUI({
            message: 'Đang lấy dữ liệu, vui lòng đợi ít phút.',
            css: { width: '500px', color: '#38474D', padding: '10px', backgroundColor: '#F8F8BC', border: '1px solid #F2C46C', '-webkit-border-radius': '5px', '-moz-border-radius': '5px', 'border-radius': '5px', cursor: 'wait' }
        });
        // Create the spreadsheet.
        return $.ajax({
            url: that.createExcelUrl,
            type: "Post",
            data: JSON.stringify(that.data),
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
                if (result.result.success == true) {
                    // Download the spreadsheet.
                    window.location.replace(kendo.format("{0}?title={1}",that.downloaExcelUrl, that.title));
                }
                else {
                    alert(result.result.msg);
                }
                $.unblockUI();
            },
            error: function () { alert('error'); $.unblockUI(); }
        });
    }
    else {
        alert("Bạn phải nhập đường dẫn Export Excel");
    }
};

/* 
* $Author$		phongnc
* Export Excel và chạy hàm fn khi kết thúc
*/
ExportHelper.prototype.exportToExcelWithFunctionSuccess = function (fn) {
    var that = this;   
    if (that.createExcelUrl != '') {
       
        // Create the spreadsheet.
        return $.ajax({
            url: that.createExcelUrl,
            type: "Post",
            data: JSON.stringify(that.data),
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
                if (result.result.success == true) {
                    // Download the spreadsheet.*sign
                    window.location.replace(kendo.format("{0}?title={1}",that.downloaExcelUrl, that.title));
                    fn();
                }
                else {
                    alert(result.result.msg);
                }
            },
            error: function () { alert('error');  }
        });
    }
    else {
        alert("Bạn phải nhập đường dẫn Export Excel");
    }
};

/* 
* $Author$		trungtq
* Export PDF
*/
ExportHelper.prototype.exportToPDF = function () {
    var that = this;
    if (that.createPDFlUrl != '') {
        // Create the PDF.
        $.ajax({
            url: that.createPDFUrl,
            type: "Post",
            data: JSON.stringify(that.data),
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
                if (result.result.success == true) {
                    //Download the PDF.
                    window.location.replace(kendo.format("{0}?title={1}",that.downloaPDFUrl, that.title));
                }
                else {
                    alert(result.result.msg);
                }
            },
            error: function () { alert('error'); }
        });
    }
    else {
        alert("Bạn phải nhập đường dẫn Export PDF");
    }
};

ExportHelper.prototype.getReportUrl = function () {
    return this.iframeUrl;
}

/* 
* $Author$		trungtq
* Khởi tạo khung popup
*/
ExportHelper.prototype.initWindow = function () {
    var that = this;

    // Khai báo đối tượng popup nếu chưa tồn tại.
    if ($("#reportWindow").length == 0) {
        var popup = $("<div id=\"reportWindow\"></div>");
        $("body").append(popup);
    }

    var maxHeight = parseInt($(window).height() * 0.9, 10);
    var maxWidth = parseInt($(window).width() * 0.9, 10);

    if (!that.reportWindowPopUp) {
        // Đăng ký sự kiện mở window
        that.reportWindowPopUp = $("#reportWindow").kendoWindow({
            title: that.titleWindowPopUp,
            iframe: true,
            visible: false,
            modal: true,
            width: maxWidth,
            height: maxHeight,
            content: that.iframeBlankUrl
        }).data("kendoWindow");
    }
};

/* 
* $Author$		trungtq
* In báo cáo sử dụng DevExpress
*/
ExportHelper.prototype.printReport = function () {
    var that = this;

    // Khởi tạo cửa sổ.
    that.initWindow();

    if (that.printUrl != '') {
        // Post thông tin tìm kiếm lên server
        return $.ajax({
            url: that.printUrl,
            type: "Post",
            data: JSON.stringify(that.data),
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
                if (result.result.success == true) {
                    $("#reportWindow iframe").attr('src', that.getReportUrl());
                    that.reportWindowPopUp.center().open();
                }
                else {
                    alert(result.result.msg);
                }
            },
            error: function () { alert('error'); }
        });
    }
    else {
        alert("Bạn phải nhập đường dẫn của báo cáo");
    }
};


;
/* 
* $Author$		trungtq
* Đối tượng quản lý hiện trạng hệ thống
* Tên variable: chu_cai_thuong_co_dau_gach_chan
* Tên methods, properties: in-caps.
*/

var SystemStatusManager = function (opts) {
    this.windowPopUp = null;     // Khung cửa sổ 
    this.isInit = false;         // Đã khởi tạo hệ thống
};

/* 
* $Author$		trungtq
* Khởi tạo form đo khoảng cách
*/
SystemStatusManager.prototype.init = function () {
    var that = this;

    if (that.isInit == false) {
        // Hiển thị khung popup đo khoảng cách
        that.initWindow();

        setTimeout(function () {
            $("#currentSystem").data("kendoDropDownList").select(0);

            // Bind dữ liệu lần đầu.
            that.currentSystemChange(0);

            that.windowPopUp.open();

        }, 1000);

        // Gán lại đã khởi tạo.
        that.isInit = true;
    }
};

/* 
* $Author$		trungtq
* Khởi tạo khung popup
*/
SystemStatusManager.prototype.initWindow = function () {
    var that = this;

    if (!that.windowPopUp) {
        // trungtq: thêm đoạn tính width theo độ rộng của màn hình
        var maxWidth = parseInt($(window).width() * 0.7, 10);

        // Đăng ký sự kiện mở window
        that.windowPopUp = $("#windowCurrentSystem").kendoWindow({
            title: LanguageManager.getText("Online_SystemStatus") + " : " + kendo.toString(SingletonServerTimeHelper.getInstance().getDateTime(), 'HH:mm dd/MM/yyyy'),
            visible: false,
            draggable: true,
            resizable: false,
            width: maxWidth,
            position: {
                top: 50,
                left: 100
            },
        }).data("kendoWindow");
    }

    // Setting some options
    that.windowPopUp.setOptions({
        title: LanguageManager.getText("Online_SystemStatus") + " : " + kendo.toString(SingletonServerTimeHelper.getInstance().getDateTime(), 'HH:mm dd/MM/yyyy')
    });

    setTimeout(function () {
        // Đăng ký sự kiện.
        that.invokeEvents();
    }, 1000);
};

// Đăng ký sự kiện thay đổi của combobox
SystemStatusManager.prototype.invokeEvents = function () {
    var that = this;
    //Sự kiện thay đổi combo hiện trạng hệ thống
    $("#currentSystem").unbind("change");
    $("#currentSystem").bind("change", function (e) {
        that.currentSystemChange(this.value);
    });

    $("#btnExportExcel").unbind("click");
    $("#btnExportExcel").bind("click", function () {
        that.exportExcel();
    });
}

// Sự kiện thay đổi => render lại khung tìm kiếm
SystemStatusManager.prototype.currentSystemChange = function (id) {
    this.currentSystemChangeCallback(id, function (data) {
        $("#contentCurrentSystem").empty().html(data);
    });
}

// Sự kiện thay đổi => render lại khung tìm kiếm
SystemStatusManager.prototype.currentSystemChangeCallback = function (id, callback) {
    try {
        $.ajax({
            cache: false,
            type: "GET",
            dataType: 'html',
            url: "/Online/LoadCurrentSystem",
            data: { "id": id },
            success: function (data) {
                callback(data);
            }
        });
    }
    catch (err) {
        console.log("SystemStatusManager.prototype.currentSystemChangeCallback:" + err);
    }
}

/* 
* $Author$		hanhth
* Sự kiện nút xuất excel
*/
SystemStatusManager.prototype.exportExcel = function () {
    var dropDown = common.GetKendoDropDown("currentSystem");
    var id = dropDown.dataSource.view()[dropDown.select()].Value;
    var rpDate = new Date();
    var createUrl = '';
    var downloadUrl = '';
    var content = '';
    var reportType = '';
    var kendoGrid = null;
    if (id != undefined) {
        switch (id) {
            case "0": {
                kendoGrid = common.GetKendoGrid("Passenger").dataSource.data();
                createUrl = '/Online/DoExportExcel';
                downloadUrl = '/Online/ExportExcel';
                reportType = 'CurrentSystem';
                content = LanguageManager.getText("Online_WithPasseger");
                break;
            };
            case "1": {
                kendoGrid = common.GetKendoGrid("EmptyPassenger").dataSource.data();
                createUrl = '/Online/DoExportExcel';
                downloadUrl = '/Online/ExportExcel';
                reportType = 'CurrentSystem';
                content = LanguageManager.getText("Online_EmptyPasseger");
                break;
            };
            case "2": {
                kendoGrid = common.GetKendoGrid("LostSignal").dataSource.data();
                createUrl = '/Online/DoExportExcel';
                downloadUrl = '/Online/ExportExcel';
                reportType = 'CurrentSystem';
                content = "Mất tín hiệu";
                break;
            };

            case "4": {
                kendoGrid = common.GetKendoGrid("ActiveList").dataSource.data();
                createUrl = '/Online/DoExportExcelActiveList';
                downloadUrl = '/Online/ExportExcelActiveList';
                content = LanguageManager.getText("Online_ActiveVehicleList");
                break;
            };
            case "5": {
                kendoGrid = common.GetKendoGrid("MachineOff").dataSource.data();
                createUrl = '/Online/DoExportExcel';
                downloadUrl = '/Online/ExportExcel';
                reportType = 'CurrentSystem';
                content = "Tắt máy";
                break;
            };
            case "6": {
                kendoGrid = common.GetKendoGrid("SpeedOver").dataSource.data();
                createUrl = '/Online/DoExportExcel';
                downloadUrl = '/Online/ExportExcel';
                reportType = 'CurrentSystem';
                content = "Quá tốc độ";
                break;
            };
            case "7": {
                kendoGrid = common.GetKendoGrid("LongStop").dataSource.data();
                createUrl = '/Online/DoExportExcel';
                downloadUrl = '/Online/ExportExcelLongStop';
                reportType = 'CurrentSystemLongStop';
                content = "Dừng đỗ lâu";
                break;
            };
            case "8": {
                kendoGrid = common.GetKendoGrid("StopAndMachineOn").dataSource.data();
                createUrl = '/Online/DoExportExcel';
                downloadUrl = '/Online/ExportExcelLongStop';
                reportType = 'CurrentSystemLongStop';
                content = "Dừng đỗ và nổ máy";
                break;
            };
            case "10": {
                kendoGrid = common.GetKendoGrid("LockMeter").dataSource.data();
                createUrl = '/Online/DoExportExcel';
                downloadUrl = '/Online/ExportExcel';
                reportType = 'CurrentSystem';
                content = "Khóa đồng hồ";
                break;
            };
            case "11": {
                kendoGrid = common.GetKendoGrid("LostConnectMeter").dataSource.data();
                createUrl = '/Online/DoExportExcel';
                downloadUrl = '/Online/ExportExcel';
                reportType = 'CurrentSystem';
                content = "Mất kết nối đồng hồ";
                break;
            };
        }
        var options = {
            data: {
                vehicle: kendoGrid,
                rpDate: rpDate,
                content: content,
                reportType: reportType
            },
            createExcelUrl: createUrl,
            downloaExcelUrl: downloadUrl,
            createPDFUrl: "",
            downloaPDFUrl: "",
            title: "ExportHelper"
        };

        // Khởi tạo đối tượng hỗ trợ Export
        var exportHelper = new ExportHelper(options);
        exportHelper.exportToExcel();
    }
};

/* 
* $Author$	trungtq
* Singleton pattern for class SystemStatusManager
* Tên variable: chu_cai_thuong_co_dau_gach_chan
* Tên methods, properties: in-caps.
*/
var SingletonSystemStatusManager = (function () {
    var that = this;
    var instance = null; // Đối tượng quản lý

    return new function () {
        this.getInstance = function () {
            if (instance == null) {
                instance = new SystemStatusManager();

                instance.constructor = null;
            }
            return instance;
        }
    }
    return that;
})();;
/**
 * Class xử lý cluster! Không sử dụng kế thừa với map!
 */
var HeatMapMobile = function (opts) {
    this.displayMap = null;
    this.showMap = null;
    this.dataCluster = [];
    this.listVehicle = [];// chua' rows table ben phai
    this.map = null;
    this.mapManager = null; //Chính là đối tượng allVehicle quản lý các marker!
    this.markerCluster = null;
    this.dicMarker = new Hashtable(); // Tam thoi k dung nua/* cai nay cua google cluster cu*/
    this.dicMarkerCluster = new Hashtable();
    this.gridNormalSizeCluster = 100;   //Bán kính của một cluster trong trạng thái zoom bình thường
    this.gridSmallSizeCluster = 20;     //Bán kính trong trạng thái zoom >15
    this.speedOver = (opts != null && opts.SpeedOver != undefined) ? opts.SpeedOver : 0;
    this.DistanceClusterVehicle = (opts != null && opts.DistanceClusterVehicle != undefined) ? opts.DistanceClusterVehicle : 40000;
    this.disableClusteringAtZoom = (opts != null && opts.disableClusteringAtZoom != undefined) ? opts.disableClusteringAtZoom : 17;
};

/**
 * MinhND
 * Hàm khởi tạo đối tương MarkerClusterer để quản lý tất cảc ác markers!
 */
HeatMapMobile.prototype.initMap = function () {
    var self = this;
    self.initMarkerCluster(); //Không cần khởi tạo control chỉ cần khởi tạo Marker là được!
};

HeatMapMobile.prototype.initMarkerCluster = function () {
    try {

        var self = this;
        //self.onMarkerClusterClear();
        /*self.markerCluster = new MarkerClusterer(self.map, [], {
            maxZoom: 24,            //Mức zoom cho phép hiển thị
            zoomOnClick: false,     //Có đăng kí sự kiện click vào nhóm cluster?
            minimumClusterSize: 1,  //Giới hạn gộp nhỏ nhất!
            mapManagerCluster: self.mapManager,
            imagePath: '/Images/MarkerClusters/m',   //Đường dẫn thư mục ghép file!
            distanceClusterVehicle: self.DistanceClusterVehicle   // Khoang cach de gom xe
        });
        */
        //LinhNX: su dung cluster MapStraction cua leaflet vi k dung dc google nua roi  ^ ^!
        self.markerCluster = new mxn.MarkerClusterer({
            zoomToBoundsOnClick: true,
            minNumberSize: 10,
            maxClusterRadius: 100,
            maxZoom: 24,
            disableClusteringAtZoom: self.disableClusteringAtZoom // LinhNX: If set, at this zoom level and below, markers will not be clustered. This defaults to disabled. 
        });
        self.map.addCluster(self.markerCluster);
    }
    catch (e) {
        console.log(e);
    }
};


///*LinhNX*/
//function delay() {
//    return new Promise(resolve => setTimeout(resolve, 0.1));
//}

/*LinhNX*/
function delayedLog(thread, self, value, index, lengthMarkerAdd, sw, lengthThread) {
    // notice that we can await a function
    // that returns a promise

    //console.log(item);
    //listData.forEach((value) => {
    //await delay();		  
    marker = new mxn.MarkerLabel(new mxn.LatLonPoint(value.Latitude, value.Longitude));

    var labelClassName = self.mapManager.getCssClass(value);
    var dataOfmarker = {
        labelVisible: true,
        labelClass: labelClassName,
        class: labelClassName,//copy ra thang nay de lay class name luc click marker
        label: value.PrivateCode,
        icon: self.mapManager.setIcon(value.Icon, value.Seat, value.VehicleState, value.GpsTime, value.VehicleDirection, value.VehicleTime),
        imagePath: '',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        //iconShadow: self.mapManager.setIcon(value.Icon, value.Seat, value.VehicleState, value.GpsTime, value.VehicleDirection, value.VehicleTime),
        //iconShadowSize: [48, 48],
        draggable: false,
        //infoBubble: 'Đây là Marker có đối tượng Options',
        id: value.VehicleID
    };
    marker.addData(dataOfmarker);

    var timeout_click = null;
    // Đăng ký sự kiện click chuột phải lên marker
    marker.mousedown.addHandler(function (event_name, event_source, event_args) {

        // Khi BAP == true và xe hết hạn + khóa dịch vụ
        if (self.mapManager.BAP_CONFIG && value.LevelID > self.mapManager.messageIds.Level1) return;

        self.mapManager.isMarkerClicked = false;

        timeout_click = setTimeout(function () {
            var e = e ? e : event_args.e;
            if (e.button == 2 || e.button == 3) {
                var x = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
                var y = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));

                self.mapManager.rightMenuVehicle.showAt({ x: x, y: y });

                // Set toa do hien tai.
                self.mapManager.currentLatLng = marker.location;
                self.mapManager.currentVehicle = value;//*sign Lấy xe hiện tại đúng nhất!
            }
            else {

                try {
                    if (self.mapManager.isMarkerClicked == false) {
                        self.mapManager.overlay = new google.maps.OverlayView();
                        self.mapManager.overlay.draw = function () { };

                        self.mapManager.overlay.setMap(self.map);

                        var coordinate = self.overlay.getProjection().fromLatLngToContainerPixel(e.latLng);

                        self.mapManager.rightMenuVehicle.showAt({ x: coordinate.x, y: coordinate.y });

                        self.mapManager.currentVehicle = value;
                    }
                    else {
                        self.mapManager.rightMenuVehicle.hide();
                    }
                }
                catch (ex1) {
                    //console.log("marker.mousedown.addHandler(function (event_name, event_source, event_args):" + ex1);
                    /*
                    if (!self.mapManager.isMarkerClicked) {
                        self.mapManager.rightMenuVehicle.showAt({ x: e.containerPoint.x, y: e.containerPoint.y });
                        self.mapManager.currentVehicle = value;
                    }
                    else {
                        self.mapManager.rightMenuVehicle.hide();
                    }
                    */
                }
            }

        }, 300);
    });

    // Đăng ký sự kiện click vào marker
    marker.click.addHandler(function (event_name, event_source, event_args) {
        // Clear timeout su kien "mousedown"
        clearTimeout(timeout_click);

        self.mapManager.isMarkerClicked = true; // Marker duoc click

        // Gán ID xe làm key để panto
        self.mapManager.keyPanTo = value.VehicleID;

        // Gọi hàm panto
        self.mapManager.panTo(value.VehicleID);

        // Gán ComboBox xe được chọn.
        $("#Online_Vehicles").data("kendoComboBox").text(value.PrivateCode + " - " + value.VehiclePlate);

        // Set toa do hien tai.
        self.mapManager.currentLatLng = event_args.e.location;
    });

    // nếu LevelID = 3, hoặc 128 => không cho hiển thị marker
    var isShowMarker = (value.LevelID == self.mapManager.messageIds.Level3 || value.LevelID == self.mapManager.messageIds.LevelLock) ? false : true;
    //listMarkers.push(marker);
    if (isShowMarker)
        self.markerCluster.addMarker(marker);

    if (index == lengthMarkerAdd - 1) {
        sw.stop();
        console.log("++ Marker: Create - thread : " + thread + ": " + (sw.stopTime - sw.startTime) / 1000);
    }

    //if (thread == lengthThread) {
    //    // Lấy ra table để render dòng
    //    var table = $('#tblVehicleList tbody');

    //    // Xóa nội dung cũ đi
    //    table.empty();

    //    for (var i = 0; i <= self.listVehicle.length; i++) {
    //        table.append(self.listVehicle[i]);
    //    };
    //    // lan dau de timer *2
    //    setTimeout(function () {
    //        $(document).everyTime(self.mapManager.secondConfigRequest, "SynVehicleList", function () {
    //            if (!self.mapManager.isRunning) {
    //                // Bật cờ đang chạy
    //                self.mapManager.isRunning = true;

    //                // Gọi lại hàm đồng bộ.
    //                self.mapManager.inits.refresh();
    //                // Tắt cờ đang chạy đi
    //                self.mapManager.isRunning = false;
    //            }
    //        });
    //    }, self.mapManager.secondConfigRequest * 2);
    //}
    index++;

    //});

}

/*LinhNX ini all xe tren ban do*/
HeatMapMobile.prototype.onMarkerClusterCreateMultiThread2 = function () {
    var self = this;
    var lengthThread = self.dicMarkerCluster.size();
    if (lengthThread > 0) {
        var sw = new StopWatch();
        sw.start();
        for (var i = 1; i <= lengthThread; i++) {
            var listData = self.dicMarkerCluster.get(i);
            var lengthMarkerAdd = listData.length;
            var index = -1;

            for (var j = 0; j < listData.length; j++) {
                delayedLog(i, self, listData[j], index, lengthMarkerAdd, sw, lengthThread);
                index++;
            }
            console.log('Done!');
        }


        //if (thread == lengthThread) {
            // Lấy ra table để render dòng
            var table = $('#tblVehicleList tbody');

            // Xóa nội dung cũ đi
            table.empty();

            for (var i = 0; i <= self.listVehicle.length; i++) {
                table.append(self.listVehicle[i]);
            };
            // lan dau de timer *2
            setTimeout(function () {
                $(document).everyTime(self.mapManager.secondConfigRequest, "SynVehicleList", function () {
                    if (!self.mapManager.isRunning) {
                        // Bật cờ đang chạy
                        self.mapManager.isRunning = true;

                        // Gọi lại hàm đồng bộ.
                        self.mapManager.inits.refresh();
                        // Tắt cờ đang chạy đi
                        self.mapManager.isRunning = false;
                    }
                });
            }, self.mapManager.secondConfigRequest * 2);
        //}
    }
}


/*LinhNX ini all xe tren ban do*/
HeatMapMobile.prototype.onMarkerClusterCreateMultiThread = function () {
    var self = this;

    //Fill data vào để hiển thị trên bản đồ

    if (self.dicMarkerCluster) {

        var listMarkers = [];
        //self.dicMarkerCluster.each(  function (thread, listData) {
        for (var i = 1; i <= self.dicMarkerCluster.size(); i++) {
            var sw = new StopWatch();
            sw.start();
            var listData = self.dicMarkerCluster.get(i);
            var lengthMarkerAdd = listData.length;
            //$.each(listData, function (index, value) {
            var index = 0;
            listData.forEach((value) => {

                marker = new mxn.MarkerLabel(new mxn.LatLonPoint(value.Latitude, value.Longitude));
                var labelClassName = self.mapManager.getCssClass(value);
                var dataOfmarker = {
                    labelVisible: true,
                    labelClass: labelClassName,
                    class: labelClassName,//copy ra thang nay de lay class name luc click marker
                    label: value.PrivateCode,
                    icon: self.mapManager.setIcon(value.Icon, value.Seat, value.VehicleState, value.GpsTime, value.VehicleDirection, value.VehicleTime),
                    imagePath: '',
                    iconSize: [20, 20],
                    iconAnchor: [12, 12],
                    iconShadow: self.mapManager.setIcon(value.Icon, value.Seat, value.VehicleState, value.GpsTime, value.VehicleDirection, value.VehicleTime),
                    iconShadowSize: [48, 48],
                    draggable: false,
                    //infoBubble: 'Đây là Marker có đối tượng Options',
                    id: value.VehicleID
                };
                marker.addData(dataOfmarker);

                var timeout_click = null;
                // Đăng ký sự kiện click chuột phải lên marker
                marker.mousedown.addHandler(function (event_name, event_source, event_args) {

                    // Khi BAP == true và xe hết hạn + khóa dịch vụ
                    if (self.mapManager.BAP_CONFIG && value.LevelID > self.mapManager.messageIds.Level1) return;

                    self.mapManager.isMarkerClicked = false;

                    timeout_click = setTimeout(function () {
                        var e = e ? e : event_args.e;
                        if (e.button == 2 || e.button == 3) {
                            var x = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
                            var y = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));

                            self.mapManager.rightMenuVehicle.showAt({ x: x, y: y });

                            // Set toa do hien tai.
                            self.mapManager.currentLatLng = marker.location;
                            self.mapManager.currentVehicle = value;//*sign Lấy xe hiện tại đúng nhất!
                        }
                        else {

                            try {
                                if (self.mapManager.isMarkerClicked == false) {
                                    self.mapManager.overlay = new google.maps.OverlayView();
                                    self.mapManager.overlay.draw = function () { };

                                    self.mapManager.overlay.setMap(self.map);

                                    var coordinate = self.overlay.getProjection().fromLatLngToContainerPixel(e.latLng);

                                    self.mapManager.rightMenuVehicle.showAt({ x: coordinate.x, y: coordinate.y });

                                    self.mapManager.currentVehicle = value;
                                }
                                else {
                                    self.mapManager.rightMenuVehicle.hide();
                                }
                            }
                            catch (ex1) {
                                //console.log("marker.mousedown.addHandler(function (event_name, event_source, event_args):" + ex1);
                                /*
                                if (!self.mapManager.isMarkerClicked) {
                                    self.mapManager.rightMenuVehicle.showAt({ x: e.containerPoint.x, y: e.containerPoint.y });
                                    self.mapManager.currentVehicle = value;
                                }
                                else {
                                    self.mapManager.rightMenuVehicle.hide();
                                }
                                */
                            }
                        }

                    }, 300);
                });

                // Đăng ký sự kiện click vào marker
                marker.click.addHandler(function (event_name, event_source, event_args) {

                    // Clear timeout su kien "mousedown"
                    clearTimeout(timeout_click);

                    self.mapManager.isMarkerClicked = true; // Marker duoc click

                    // Gán ID xe làm key để panto
                    self.mapManager.keyPanTo = value.VehicleID;

                    // Gọi hàm panto
                    self.mapManager.panTo(value.VehicleID);

                    // Gán ComboBox xe được chọn.
                    $("#Online_Vehicles").data("kendoComboBox").text(value.PrivateCode + " - " + value.VehiclePlate);

                    // Set toa do hien tai.
                    self.mapManager.currentLatLng = event_args.e.location;
                });

                // nếu LevelID = 3, hoặc 128 => không cho hiển thị marker
                var isShowMarker = (value.LevelID == self.mapManager.messageIds.Level3 || value.LevelID == self.mapManager.messageIds.LevelLock) ? false : true;
                //listMarkers.push(marker);
                if (isShowMarker)
                    self.markerCluster.addMarker(marker);

                if (index == lengthMarkerAdd - 1) {
                    sw.stop();
                    console.log("Marker: Create - thread : " + i + ": " + (sw.stopTime - sw.startTime) / 1000);
                }
                index++;

            });

            //self.markerCluster.addMarkers(listMarkers);//*sign 
            //});
        }

    }
    /*
    if (self.dataCluster) {
        var mkt = [];
        var markerImage = new google.maps.MarkerImage('/Images/MarkerClusters/FFFFFF-0.png', new google.maps.Size(10, 10));
        $.each(self.dataCluster, function (index, value) {
            var m = new google.maps.Marker({
                position: new google.maps.LatLng(value.Latitude, value.Longitude),
                labelClass: self.getCssClass(value),
                draggable: false,
                id: value.VehicleID,
                icon: markerImage,
                seat: value.Seat,
                state: value.VehicleState,
                gpsTime: value.GpsTime,
                direct: value.VehicleDirection,
                vehicleTime: value.VehicleTime,
                objView: value
            });
            mkt.push(m);
        });
        self.markerCluster.addMarkers(mkt);//*sign        
    }
	*/
    return true;
};

HeatMapMobile.prototype.onMarkerClusterCreate = function () {
    var self = this;
    //self.onMarkerClusterClear();

    /*   self.markerCluster.minClusterSize_ = 1;
        self.markerCluster.gridSize_ = self.gridNormalSizeCluster;//Bán kính nhóm! *sign 
    */

    //Fill data vào để hiển thị trên bản đồ
    var sw = new StopWatch();
    sw.start();

    if (self.dataCluster) {
        var lengthMarkerAdd = self.dataCluster.length;
        var listMarkers = [];
        $.each(self.dataCluster, function (index, value) {
            marker = new mxn.MarkerLabel(new mxn.LatLonPoint(value.Latitude, value.Longitude));
            var labelClassName = self.mapManager.getCssClass(value);
            var dataOfmarker = {
                labelVisible: true,
                labelClass: labelClassName,
                class: labelClassName,//copy ra thang nay de lay class name luc click marker
                label: value.PrivateCode,
                icon: self.mapManager.setIcon(value.Icon, value.Seat, value.VehicleState, value.GpsTime, value.VehicleDirection, value.VehicleTime),
                imagePath: '',
                iconSize: [20, 20],
                iconAnchor: [12, 12],
                iconShadow: self.mapManager.setIcon(value.Icon, value.Seat, value.VehicleState, value.GpsTime, value.VehicleDirection, value.VehicleTime),
                iconShadowSize: [48, 48],
                draggable: false,
                //infoBubble: 'Đây là Marker có đối tượng Options',
                id: value.VehicleID
            };
            marker.addData(dataOfmarker);

            var timeout_click = null;
            // Đăng ký sự kiện click chuột phải lên marker
            marker.mousedown.addHandler(function (event_name, event_source, event_args) {

                // Khi BAP == true và xe hết hạn + khóa dịch vụ
                if (self.mapManager.BAP_CONFIG && value.LevelID > self.mapManager.messageIds.Level1) return;

                self.mapManager.isMarkerClicked = false;

                timeout_click = setTimeout(function () {
                    var e = e ? e : event_args.e;
                    if (e.button == 2 || e.button == 3) {
                        var x = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
                        var y = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));

                        self.mapManager.rightMenuVehicle.showAt({ x: x, y: y });

                        // Set toa do hien tai.
                        self.mapManager.currentLatLng = marker.location;
                        self.mapManager.currentVehicle = value;//*sign Lấy xe hiện tại đúng nhất!
                    }
                    else {

                        try {
                            if (self.mapManager.isMarkerClicked == false) {
                                self.mapManager.overlay = new google.maps.OverlayView();
                                self.mapManager.overlay.draw = function () { };

                                self.mapManager.overlay.setMap(self.map);

                                var coordinate = self.overlay.getProjection().fromLatLngToContainerPixel(e.latLng);

                                self.mapManager.rightMenuVehicle.showAt({ x: coordinate.x, y: coordinate.y });

                                self.mapManager.currentVehicle = value;
                            }
                            else {
                                self.mapManager.rightMenuVehicle.hide();
                            }
                        }
                        catch (ex1) {
                            //console.log("marker.mousedown.addHandler(function (event_name, event_source, event_args):" + ex1);
                            /*
                            if (!self.mapManager.isMarkerClicked) {
                                self.mapManager.rightMenuVehicle.showAt({ x: e.containerPoint.x, y: e.containerPoint.y });
                                self.mapManager.currentVehicle = value;
                            }
                            else {
                                self.mapManager.rightMenuVehicle.hide();
                            }
							*/
                        }
                    }

                }, 300);
            });

            // Đăng ký sự kiện click vào marker
            marker.click.addHandler(function (event_name, event_source, event_args) {

                // Clear timeout su kien "mousedown"
                clearTimeout(timeout_click);

                self.mapManager.isMarkerClicked = true; // Marker duoc click

                // Gán ID xe làm key để panto
                self.mapManager.keyPanTo = value.VehicleID;

                // Gọi hàm panto
                self.mapManager.panTo(value.VehicleID);

                // Gán ComboBox xe được chọn.
                $("#Online_Vehicles").data("kendoComboBox").text(value.PrivateCode + " - " + value.VehiclePlate);

                // Set toa do hien tai.
                self.mapManager.currentLatLng = event_args.e.location;
            });

            //listMarkers.push(marker);
            self.markerCluster.addMarker(marker);
            if (index == lengthMarkerAdd - 1) {
                sw.stop();
                console.log("Create marker - cluster: " + (sw.stopTime - sw.startTime) / 1000);
            }
        });
        //self.markerCluster.addMarkers(listMarkers);//*sign 
    }
    /*
    if (self.dataCluster) {
        var mkt = [];
        var markerImage = new google.maps.MarkerImage('/Images/MarkerClusters/FFFFFF-0.png', new google.maps.Size(10, 10));
        $.each(self.dataCluster, function (index, value) {
            var m = new google.maps.Marker({
                position: new google.maps.LatLng(value.Latitude, value.Longitude),
                labelClass: self.getCssClass(value),
                draggable: false,
                id: value.VehicleID,
                icon: markerImage,
                seat: value.Seat,
                state: value.VehicleState,
                gpsTime: value.GpsTime,
                direct: value.VehicleDirection,
                vehicleTime: value.VehicleTime,
                objView: value
            });
            mkt.push(m);
        });
        self.markerCluster.addMarkers(mkt);//*sign        
    }
	*/
    return true;
};

HeatMapMobile.prototype.onMarkerClusterClear = function () {
    var self = this;
    if (self.markerCluster) {
        self.markerCluster.clearMarkers();
    }
};

/**
 * MinhND
 * Hàm lấy dữ liệu push từ server để hiển thị lên giao diện! *sign
 */
HeatMapMobile.prototype.refreshCluster = function (listPushVehicle) {
    var self = this;
    var arrDel = [];
    var arrInsert = [];

    var markerImage = new google.maps.MarkerImage('/Images/MarkerClusters/FFFFFF-0.png', new google.maps.Size(10, 10));

    if (listPushVehicle != null && listPushVehicle.length > 0) {
        var lengthPush = listPushVehicle.length;
        var lengthCluster = self.dataCluster.length;

        if (self.map.zoom > 15) self.markerCluster.gridSize_ = self.gridSmallSizeCluster;
        else self.markerCluster.gridSize_ = self.gridNormalSizeCluster;

        for (var i = 0; i < lengthPush; i++) {
            var item = listPushVehicle[i];
            var objectView = new Object();
            for (var j = 0; j < lengthCluster; j++) {
                var value = self.dataCluster[j];
                if (value.VehicleID == item.id) {
                    var m = new google.maps.Marker({
                        position: new google.maps.LatLng(value.Latitude, value.Longitude),
                        labelClass: self.getCssClass(value),
                        icon: markerImage,
                        draggable: false,
                        id: value.VehicleID,
                        seat: value.Seat,
                        state: value.VehicleState,
                        gpsTime: value.GpsTime,
                        direct: value.VehicleDirection,
                        vehicleTime: value.VehicleTime,
                        objView: value


                    });
                    arrDel.push(m);
                    objectView = self.mapManager.mapJsonVehicleToVehicleOnlineRefreshHeat(value, item);
                    break;
                }
            }
            var add = new google.maps.Marker({
                position: new google.maps.LatLng(item.Latitude, item.Longitude),
                labelClass: self.getCssClass(item),
                draggable: false,
                id: item.id,
                icon: markerImage,
                seat: objectView.Seat,
                state: item.VehicleState,
                gpsTime: kendo.parseDate(FormatHelper.formatDateTime(item.GpsTime)),
                direct: item.VehicleDirection,
                vehicleTime: kendo.parseDate(FormatHelper.formatDateTime(item.VehicleTime)),
                objView: objectView
            });

            arrInsert.push(add);



        }//End List Refresh


        self.markerCluster.removeMarkers(arrDel, false, true);
        self.markerCluster.addMarkers(arrInsert, false, true);


        // Làm mới trạng thái các xe trong lưới tìm kiếm sau khi đã hiển thị trên bản đồ       
        self.mapManager.refreshGridWithCluster(listPushVehicle);
    }
};

/* 
* $Author$		LinhNX
 * Copy code HanhTN
* Tra ve class css hien thi label 
*/
HeatMapMobile.prototype.getCssClass = function (vehicle) {
    // Dung xe va acc on    
    if ((vehicle.MinuteOfManchineOnWhenStop != 0) && (vehicle.VelocityGPS <= 3)) return "stoppedandaccon";
    // Dung xe
    else if (vehicle.VelocityGPS <= 3) return "stopped";
    // Xe di chuyen
    else if (vehicle.VelocityGPS > 3 && vehicle.VelocityGPS <= this.speedOver) return "moving";
    // Canh bao
    else if (vehicle.VelocityGPS > this.speedOver && vehicle.VelocityGPS <= 100) return "warning";
    // Bao dong
    else //if (vehicle.VelocityGPS > 100 && vehicle.VelocityGPS <= 150)
        return "error";
}


;
// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/maps/google_maps_api_v3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * @license
 * Copyright 2010 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'averageCenter': (boolean) Whether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 *       'iconAnchor': (Array) The anchor position of the icon x, y.
 * @constructor
 * @extends google.maps.OverlayView *class
 */
function MarkerClusterer(map, opt_markers, opt_options) {
    // MarkerClusterer implements google.maps.OverlayView interface. We use the
    // extend function to extend MarkerClusterer with google.maps.OverlayView
    // because it might not always be available when the code is defined so we
    // look for it at the last possible moment. If it doesn't exist now then
    // there is no point going ahead :)  
    var options = opt_options || {};
    this.extend(MarkerClusterer, google.maps.OverlayView);
    this.map_ = map;
    this.mapManagerCluster = options["mapManagerCluster"] || null;//Dùng để hiển thị bản đồ trong cluster *sign

    /**
     * @type {Array.<google.maps.Marker>}
     * @private
     */
    this.markers_ = [];

    /**
     *  @type {Array.<Cluster>}
     */
    this.clusters_ = [];

    this.sizes = [53, 56, 66, 78, 90];

    /**
     * @private
     */
    this.styles_ = [];

    /**
     * @type {boolean}
     * @private
     */
    this.ready_ = false;


    /**
     * @type {number}
     * @private
     */
    this.gridSize_ = options['gridSize'] || 60;

    /**
     * @private
     */
    this.minClusterSize_ = options['minimumClusterSize'] || 2;


    /**
     * @type {?number}
     * @private
     */
    this.maxZoom_ = options['maxZoom'] || null;

    this.styles_ = options['styles'] || [];

    /**
     * @type {string}
     * @private
     */
    this.imagePath_ = options['imagePath'] ||
        this.MARKER_CLUSTER_IMAGE_PATH_;

    /**
     * Author: LinhNX
     * <summary>
     * Khoang cach de gom xe (Km)
     * </summary>* @type {?number}
     * */
    this.distanceClusterVehicle_ = options['distanceClusterVehicle'] || this.DISTANCE_CLUSTER_VEHCILE_;

    /**
     * @type {string}
     * @private
     */
    this.imageExtension_ = options['imageExtension'] ||
        this.MARKER_CLUSTER_IMAGE_EXTENSION_;

    /**
     * @type {boolean}
     * @private
     */
    this.zoomOnClick_ = true;

    if (options['zoomOnClick'] != undefined) {
        this.zoomOnClick_ = options['zoomOnClick'];
    }

    /**
     * @type {boolean}
     * @private
     */
    this.averageCenter_ = false;

    if (options['averageCenter'] != undefined) {
        this.averageCenter_ = options['averageCenter'];
    }

    this.setupStyles_();

    this.setMap(map);

    /**
     * @type {number}
     * @private
     */
    this.prevZoom_ = this.map_.getZoom();

    // Add the map event listeners
    var that = this;
    google.maps.event.addListener(this.map_, 'zoom_changed', function () {
        var zoom = that.map_.getZoom();

        if (that.prevZoom_ != zoom) {
            that.prevZoom_ = zoom;
            that.resetViewport();
        }
    });

    google.maps.event.addListener(this.map_, 'idle', function () {
        that.redraw();
    });

    // Finally, add the markers
    if (opt_markers && opt_markers.length) {
        this.addMarkers(opt_markers, false);
    }
}//End MarkerClusterer constructor!

/**
 * Author: LinhNX
 * <Summary>
 * Khoang cach de gom xe
 * Neu khong co cau hinh mac dinh de gia tri 40000 Km
 * </Summary>
 * */
MarkerClusterer.prototype.DISTANCE_CLUSTER_VEHCILE_ = 40000;

/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = '../images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function (obj1, obj2) {
    return (function (object) {
        for (var property in object.prototype) {
            this.prototype[property] = object.prototype[property];
        }
        return this;
    }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function () {
    this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function () { };

/**
 * Sets up the styles object.*sign
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function () {
    if (this.styles_.length) {
        return;
    }

    for (var i = 0, size; size = this.sizes[i]; i++) {
        this.styles_.push({
            url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
            height: size,
            width: size
        });
    }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function () {
    var markers = this.getMarkers();
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, marker; marker = markers[i]; i++) {
        bounds.extend(marker.getPosition());
    }

    this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function (styles) {
    this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function () {
    return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function () {
    return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function () {
    return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function () {
    return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function () {
    return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function (maxZoom) {
    this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function () {
    return this.maxZoom_;
};

/* 
* $Author$		hanhth
* 0 -> khong khach mo may
* 1 -> Co khach mo may
* 2 -> Ko khach tat may
* 3 -> Co khach tat may 
* (sXe & 8) == 0 =>  may bat 
* (sXe & 3) == 0 => ko khach
*/
getVehicleStatus = function (status) {
    // May bat
    if ((status & 8) == 0) {
        if ((status & 3) == 0)
            return 0;
        else
            return 1;
    } else {
        if ((status & 3) == 0)
            return 2;
        else
            return 3;
    }
};

/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function (markers, numStyles) {
    var index = 0;
    var count = markers.length;
    var dv = count;
    var hasGuest = 0;
    var hasNotGuest = 0;

    while (dv !== 0) {
        dv = parseInt(dv / 10, 10);
        index++;
    }
    //*sign
    var state = 0;
    for (var i = 0; i < count; i++) {
        state = getVehicleStatus(markers[i].state);
        if (state == 0 || state == 2) {
            hasNotGuest++;
        }
        if (state == 1 || state == 3) {
            hasGuest++;
        }
    }

    index = Math.min(index, numStyles);

    //Trả kết quả về dạng Json! *sign
    return {
        text: count,
        index: index,
        hasGuest: hasGuest,
        hasNotGuest: hasNotGuest
    };
};


/**gridSize_
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function (calculator) {
    this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function () {
    return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function (markers, opt_nodraw) {
    for (var i = 0, marker; marker = markers[i]; i++) {
        this.pushMarkerTo_(marker);
    }
    if (!opt_nodraw) {
        this.redraw();
    }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function (marker) {
    marker.isAdded = false;
    if (marker['draggable']) {
        // If the marker is draggable add a listener so we update the clusters on
        // the drag end.
        var that = this;
        google.maps.event.addListener(marker, 'dragend', function () {
            marker.isAdded = false;
            that.repaint();
        });
    }
    this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function (marker, opt_nodraw) {
    this.pushMarkerTo_(marker);
    if (!opt_nodraw) {
        this.redraw();
    }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function (marker, opt_id) {
    var index = -1;
    if (opt_id) {
        for (var i = 0, m; m = this.markers_[i]; i++) {
            if (m.id == marker.id) {
                index = i;
                break;
            }
        }
    } else {
        if (this.markers_.indexOf) {
            index = this.markers_.indexOf(marker);
        } else {
            for (var i = 0, m; m = this.markers_[i]; i++) {
                if (m == marker) {
                    index = i;
                    break;
                }
            }
        }
    }

    if (index == -1) {
        // Marker is not in our list of markers.
        return false;
    }

    marker.setMap(null);

    this.markers_.splice(index, 1);

    return true;
};


/*
 * Remove a marker from the cluster.
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function (marker, opt_nodraw) {
    var removed = this.removeMarker_(marker);

    if (!opt_nodraw && removed) {
        this.resetViewport();
        this.redraw();
        return true;
    } else {
        return false;
    }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.Có vẽ lại một thể không?
 */
MarkerClusterer.prototype.removeMarkers = function (markers, opt_nodraw, opt_id) {
    var removed = false;

    for (var i = 0, marker; marker = markers[i]; i++) {
        var r = this.removeMarker_(marker, opt_id);
        removed = removed || r;
    }

    if (!opt_nodraw && removed) {
        this.resetViewport();
        this.redraw();
        return true;
    }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function (ready) {
    if (!this.ready_) {
        this.ready_ = ready;
        this.createClusters_();
    }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function () {
    return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function () {
    return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function (map) {
    this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function () {
    return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function (size) {
    this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function () {
    return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function (size) {
    this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function (bounds) {
    var projection = this.getProjection();

    // Turn the bounds into latlng.
    var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
    var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());

    // Convert the points to pixels and the extend out by the grid size.
    var trPix = projection.fromLatLngToDivPixel(tr);
    trPix.x += this.gridSize_;
    trPix.y -= this.gridSize_;

    var blPix = projection.fromLatLngToDivPixel(bl);
    blPix.x -= this.gridSize_;
    blPix.y += this.gridSize_;

    // Convert the pixel points back to LatLng
    var ne = projection.fromDivPixelToLatLng(trPix);
    var sw = projection.fromDivPixelToLatLng(blPix);

    // Extend the bounds to contain the new bounds.
    bounds.extend(ne);
    bounds.extend(sw);

    return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function (marker, bounds) {
    return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function () {
    this.resetViewport(true);

    // Set the markers a empty array.
    this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function (opt_hide) {
    // Remove all the clusters
    for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
        cluster.remove();
    }

    // Reset the markers to not be added and to be invisible.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
        marker.isAdded = false;
        if (opt_hide) {
            marker.setMap(null);
        }
    }

    this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function () {
    var oldClusters = this.clusters_.slice();
    this.clusters_.length = 0;
    this.resetViewport();
    this.redraw();

    // Remove the old clusters.
    // Do it in a timeout so the other clusters have been drawn first.
    window.setTimeout(function () {
        for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
            cluster.remove();
        }
    }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function () {
    this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function (p1, p2) {
    if (!p1 || !p2) {
        return 0;
    }

    var R = 6371; // Radius of the Earth in km
    var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
    var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function (marker) {
    var distance = this.distanceClusterVehicle_; // Some large number
    var clusterToAddTo = null;
    var pos = marker.getPosition();
    for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
        var center = cluster.getCenter();
        if (center) {
            var d = this.distanceBetweenPoints_(center, marker.getPosition());
            if (d < distance) {
                distance = d;
                clusterToAddTo = cluster;
            }
        }
    }

    if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
        clusterToAddTo.addMarker(marker);
    } else {
        var cluster = new Cluster(this);
        cluster.addMarker(marker);
        this.clusters_.push(cluster);
    }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function () {
    if (!this.ready_) {
        return;
    }

    // Get our current map view bounds.
    // Create a new bounds object so we don't affect the map.
    var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
        this.map_.getBounds().getNorthEast());
    var bounds = this.getExtendedBounds(mapBounds);

    for (var i = 0, marker; marker = this.markers_[i]; i++) {
        if (!this.isMarkerInBounds_(marker, bounds)) {
            //Các xe có tọa độ nằm ngoài bản đồ *sign
            //console.log('Vehicle Out Bound: '+ marker.objView.PrivateCode);
        }
        if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
            this.addToClosestCluster_(marker);
        }
    }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore *class
 */
function Cluster(markerClusterer) {
    this.markerClusterer_ = markerClusterer;
    this.map_ = markerClusterer.getMap();
    this.gridSize_ = markerClusterer.getGridSize();
    this.minClusterSize_ = markerClusterer.getMinClusterSize();
    this.averageCenter_ = markerClusterer.isAverageCenter();
    this.center_ = null;
    this.markers_ = [];
    this.bounds_ = null;
    this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(), markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function (marker) {
    if (this.markers_.indexOf) {
        return this.markers_.indexOf(marker) != -1;
    } else {
        for (var i = 0, m; m = this.markers_[i]; i++) {
            if (m == marker) {
                return true;
            }
        }
    }
    return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function (marker) {
    if (this.isMarkerAlreadyAdded(marker)) {
        return false;
    }

    if (!this.center_) {
        this.center_ = marker.getPosition();
        this.calculateBounds_();
    } else {
        if (this.averageCenter_) {
            var l = this.markers_.length + 1;
            var lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
            var lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
            this.center_ = new google.maps.LatLng(lat, lng);
            this.calculateBounds_();
        }
    }

    marker.isAdded = true;
    this.markers_.push(marker);

    var len = this.markers_.length;
    if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
        // Min cluster size not reached so show the marker.
        marker.setMap(this.map_);
    }

    if (len == this.minClusterSize_) {
        // Hide the markers that were showing.
        for (var i = 0; i < len; i++) {
            this.markers_[i].setMap(null);
        }
    }

    if (len >= this.minClusterSize_) {
        marker.setMap(null);
    }

    this.updateIcon();
    return true;
};


/*
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function () {
    return this.markerClusterer_;
};


/*
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function () {
    var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
    var markers = this.getMarkers();
    for (var i = 0, marker; marker = markers[i]; i++) {
        bounds.extend(marker.getPosition());
    }
    return bounds;
};


/*
 * Removes the cluster
 */
Cluster.prototype.remove = function () {
    this.clusterIcon_.remove();
    this.markers_.length = 0;
    delete this.markers_;
};


/*
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function () {
    return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function () {
    return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function () {
    return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function () {
    var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function (marker) {
    return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function () {
    return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function () {
    var zoom = this.map_.getZoom();
    var mz = this.markerClusterer_.getMaxZoom();

    if (mz && zoom > mz) {
        // The zoom is greater than our max zoom so show all the markers in cluster.
        for (var i = 0, marker; marker = this.markers_[i]; i++) {
            marker.setMap(this.map_);
        }
        return;
    }

    if (this.markers_.length < this.minClusterSize_) {
        // Min cluster size not yet reached.
        this.clusterIcon_.hide();
        return;
    }

    var numStyles = this.markerClusterer_.getStyles().length;
    var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
    this.clusterIcon_.setCenter(this.center_);
    this.clusterIcon_.setSums(sums);
    //*sign Thay đổi icon của xe
    if (sums.text == "1") {
        this.clusterIcon_.useSpecialStyle(this.markers_[0]);
    }
    this.clusterIcon_.show();
};



/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore *class
 */
function ClusterIcon(cluster, styles, opt_padding) {
    cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

    this.styles_ = styles;
    this.padding_ = opt_padding || 0;
    this.cluster_ = cluster;
    this.center_ = null;
    this.map_ = cluster.getMap();
    this.div_ = null;
    this.sums_ = null;
    this.visible_ = false;
    this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 *
 * @param {google.maps.MouseEvent} event The event to propagate
 */
ClusterIcon.prototype.triggerClusterClick = function (event) {
    var markerClusterer = this.cluster_.getMarkerClusterer();

    // Trigger the clusterclick event.
    google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_, event);
    //*sign
    if (this.cluster_.markers_.length == 1) {
        if (this.cluster_.markers_ != undefined && this.cluster_.markers_[0] != undefined) {
            var tempMarker = this.cluster_.markers_[0];




            // set key panto tren map
            markerClusterer.mapManagerCluster.keyPanTo = 0;
            markerClusterer.mapManagerCluster.keyPanToCluster = tempMarker.id;

            // Nhấp nháy báo hiệu chọn xe
            var currentLabel = tempMarker.labelClass;
            tempMarker.setOptions({ labelClass: currentLabel + ' onclickMarker' });
            //item.update();
            setTimeout(function () {
                tempMarker.setOptions({ labelClass: currentLabel });
                //item.update();
            }, 3000);

            // Show popup thong tin xe 
            markerClusterer.mapManagerCluster.showPopupVehicleDetailCluster(tempMarker.objView);

            // set active row 
            this.setActiveRow(tempMarker.objView);



        } else console.log('triggerClusterClick undefined');
    }

    if (markerClusterer.isZoomOnClick()) {
        this.map_.fitBounds(this.cluster_.getBounds());// Zoom into the cluster.
    }
};

/** 
 *  Author : LinhNX  06/12/2018   created
 *  copy code cua trungtq
* Đổi màu của active row và scroll tới
*/
ClusterIcon.prototype.setActiveRow = function (vehicle) {
    try {

        // Scroll tới vị trí dựa vào id;
        $("#tr_" + vehicle.VehicleID).scrollIntoView(true);
        //window.saveScroll();
        // Move all css active row
        $('#tblVehicleList tbody tr').each(function () {
            $(this).removeClass();
        });

        // Add class active.
        $("#tr_" + vehicle.VehicleID).addClass('colorActive');

        //Remove notify row by v and t
        var trNew = $("#tr_" + vehicle.VehicleID);
        if (this.BAP_CONFIG && vehicle.LevelID == this.messageIds.Level1 && trNew.find('.markID').length == 1) {
            //Turn on V and time
            trNew.find('.markID').remove();
            //VT
            var td_velocity = $(document.createElement('td'));
            td_velocity.attr('id', vehicle.VehicleID + "_velocity");
            td_velocity.addClass('text-center');
            td_velocity.attr("role", "gridcell");
            td_velocity.html(vehicle.VelocityGPS);
            // td thời gian GpsTime
            var td_time = $(document.createElement('td'));
            td_time.attr('id', vehicle.VehicleID + '_time');
            td_time.addClass('text-center');
            td_time.attr("role", "gridcell");
            //GpsTime > VehicleTime
            td_time.html(FormatHelper.formatTimeConfigs(vehicle.VehicleTime, this.isDisplaySeconds));      // Format lại đoạn này
            // Add vào tr
            trNew.append(td_velocity);
            trNew.append(td_time);
        }
    }
    catch (err) {
        console.log("Error: VehicleOnlineManager.prototype.setActiveRow():" + err);
    }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function () {
    this.div_ = document.createElement('DIV');
    if (this.visible_) {
        var pos = this.getPosFromLatLng_(this.center_);

        // get class trang thai xe de hien thi len lable
        var labelClass = this.marker_.labelClass;

        this.div_.style.cssText = this.createCss(pos);
        if (this.sums_.text != "1")
            this.div_.innerHTML = "<span style='color:lime'>" + this.sums_.hasGuest + "</span>" + "/" + "<span style ='color:white'>" + this.sums_.hasNotGuest + "<span>"; //this.sums_.text;
        else {
            this.div_.innerHTML = "<span style=' margin: 20px;' class='" + labelClass + "'>" + this.cluster_.markers_[0].objView.PrivateCode.substring(0, 8).replace(/[-+()\s]/g, '') + "</span>"; //*sign!
        }
    }

    var panes = this.getPanes();
    panes.overlayMouseTarget.appendChild(this.div_);

    var that = this;
    var isDragging = false;
    google.maps.event.addDomListener(this.div_, 'click', function (event) {
        // Only perform click when not preceded by a drag
        if (!isDragging) {
            console.log('click cluster');
            that.triggerClusterClick(event);
        }
    });
    google.maps.event.addDomListener(this.div_, 'mousedown', function () {
        console.log('Right click!');
        isDragging = false;
    });
    google.maps.event.addDomListener(this.div_, 'mousemove', function () {
        isDragging = true;
    });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function (latlng) {
    var pos = this.getProjection().fromLatLngToDivPixel(latlng);

    if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
        pos.x -= this.iconAnchor_[0];
        pos.y -= this.iconAnchor_[1];
    } else {
        pos.x -= parseInt(this.width_ / 2, 10);
        pos.y -= parseInt(this.height_ / 2, 10);
    }
    return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function () {
    if (this.visible_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = pos.y + 'px';
        this.div_.style.left = pos.x + 'px';
    }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function () {
    if (this.div_) {
        this.div_.style.display = 'none';
    }
    this.visible_ = false;

};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function () {
    if (this.div_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(pos);
        this.div_.style.display = '';
    }
    this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function () {
    this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function () {
    if (this.div_ && this.div_.parentNode) {
        this.hide();
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function (sums) {
    this.sums_ = sums;
    this.text_ = sums.text;
    this.index_ = sums.index;
    if (this.div_) {
        if (sums.text != "1")
            this.div_.innerHTML = "<span style='color:lime'>" + sums.hasGuest + "</span>" + "/" + "<span style ='color:white'>" + sums.hasNotGuest + "<span>";//sums.text;
    }
    if (sums.text != "1")
        this.useStyle();
};

/**
 * MinhND
 * Hàm thay icon của bản đồ cluster khi chỉ có một xe!  *sign
 */
ClusterIcon.prototype.setIcon = function (seat, status, gpsTime, direction, vehicleTime, privateCode) {
    if (privateCode == 426)
        var test = 0;
    var self = this;
    var markerClusterer = self.cluster_.getMarkerClusterer();
    var seats = seat < 7 ? 4 : 7;
    var wifi = markerClusterer.mapManagerCluster.getLostStatusVehicleCluster(gpsTime, vehicleTime);
    switch (wifi) {
        case 0:
            return "/Images/VehicleOnline/xe" + direction + seats + this.getVehicleStatus(status) + ".png";
        case -1:
            return "/Images/VehicleOnline/GPS_NO.png";
        default:
            return "/Images/VehicleOnline/Xe6" + seats + "01.png";
    }
};

/* 
* $Author$		hanhth
* 0 -> khong khach mo may
* 1 -> Co khach mo may
* 2 -> Ko khach tat may
* 3 -> Co khach tat may 
* (sXe & 8) == 0 =>  may bat 
* (sXe & 3) == 0 => ko khach
*/
ClusterIcon.prototype.getVehicleStatus = function (status) {
    // May bat
    if ((status & 8) == 0) {
        if ((status & 3) == 0)
            return 0;
        else
            return 1;
    }
    else {
        if ((status & 3) == 0)
            return 2;
        else
            return 3;
    }
};

/**
 * Style giành riêng cho hiển thị một xe! *sign
 */
ClusterIcon.prototype.useSpecialStyle = function (data) {
    var self = this;
    var index = Math.max(0, this.sums_.index - 1);
    index = Math.min(this.styles_.length - 1, index);
    var style = this.styles_[index];
    this.marker_ = data;
    this.url_ = this.setIcon(data.seat, data.state, data.gpsTime, data.direct, data.vehicleTime, data.objView.PrivateCode);
    this.height_ = 25;
    this.width_ = 25;
    this.textColor_ = style['textColor'];
    this.anchor_ = [-25];
    this.textSize_ = style['textSize'];
    this.backgroundPosition_ = style['backgroundPosition'];
    this.iconAnchor_ = data.objView.PrivateCode;
};
/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function () {
    var index = Math.max(0, this.sums_.index - 1);
    index = Math.min(this.styles_.length - 1, index);
    var style = this.styles_[index];
    this.url_ = style['url'];
    this.height_ = style['height'];
    this.width_ = style['width'];
    this.textColor_ = style['textColor'];
    this.anchor_ = style['anchor'];
    this.textSize_ = style['textSize'];
    this.backgroundPosition_ = style['backgroundPosition'];
    this.iconAnchor_ = style['iconAnchor'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function (center) {
    this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function (pos) {
    var style = [];
    style.push('background-image:url(' + this.url_ + ');');
    var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
    style.push('background-position:' + backgroundPosition + ';');

    if (typeof this.anchor_ === 'object') {

        if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 && this.anchor_[0] < this.height_) {
            style.push('height:' + (this.height_ - this.anchor_[0]) + 'px; padding-top:' + this.anchor_[0] + 'px;');
        } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 && -this.anchor_[0] <= this.height_) {
            style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) + 'px;');
        } else {
            style.push('height:' + this.height_ + 'px; line-height:' + this.height_ + 'px;');
        }

        if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 && this.anchor_[1] < this.width_) {
            style.push('width:' + (this.width_ - this.anchor_[1]) + 'px; padding-left:' + this.anchor_[1] + 'px;');
        } else {
            style.push('width:' + this.width_ + 'px; text-align:center;');
        }

    } else {
        style.push('height:' + this.height_ + 'px; line-height:' + this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
    }

    var txtColor = this.textColor_ ? this.textColor_ : 'black';
    var txtSize = this.textSize_ ? this.textSize_ : 11;

    style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
        pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
        txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
    return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] = MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] = MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] = MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] = MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] = MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] = MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] = MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] = MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] = MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] = MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] = MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] = MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] = MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] = MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;
;
/*
 * Leaflet.markercluster 1.4.1+master.37ab9a2,
 * Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.
 * https://github.com/Leaflet/Leaflet.markercluster
 * (c) 2012-2017, Dave Leaver, smartrak
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Leaflet = global.Leaflet || {}, global.Leaflet.markercluster = global.Leaflet.markercluster || {})));
}(this, (function (exports) { 'use strict';

/*
 * L.MarkerClusterGroup extends L.FeatureGroup by clustering the markers contained within
 */

var MarkerClusterGroup = L.MarkerClusterGroup = L.FeatureGroup.extend({

	options: {
		maxClusterRadius: 80, //A cluster will cover at most this many pixels from its center
		iconCreateFunction: null,
		clusterPane: L.Marker.prototype.options.pane,

		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: true,
		singleMarkerMode: false,

		disableClusteringAtZoom: null, // LinhNX: If set, at this zoom level and below, markers will not be clustered. This defaults to disabled. 

		// Setting this to false prevents the removal of any clusters outside of the viewpoint, which
		// is the default behaviour for performance reasons.
		removeOutsideVisibleBounds: true,

		// Set to false to disable all animations (zoom and spiderfy).
		// If false, option animateAddingMarkers below has no effect.
        // If L.DomUtil.TRANSITION is falsy, this option has no effect.
        animate: false,

		//Whether to animate adding markers after adding the MarkerClusterGroup to the map
		// If you are adding individual markers set to true, if adding bulk markers leave false for massive performance gains.
		animateAddingMarkers: false,

		//Increase to increase the distance away that spiderfied markers appear from the center
		spiderfyDistanceMultiplier: 1,

		// Make it possible to specify a polyline options on a spider leg
		spiderLegPolylineOptions: { weight: 1.5, color: '#222', opacity: 0.5 },

		// When bulk adding layers, adds markers in chunks. Means addLayers may not add all the layers in the call, others will be loaded during setTimeouts
		chunkedLoading: false,
		chunkInterval: 200, // process markers for a maximum of ~ n milliseconds (then trigger the chunkProgress callback)
		chunkDelay: 50, // at the end of each interval, give n milliseconds back to system/browser
		chunkProgress: null, // progress callback: function(processed, total, elapsed) (e.g. for a progress indicator)

		//Options to pass to the L.Polygon constructor
		polygonOptions: {}
	},

	initialize: function (options) {
		L.Util.setOptions(this, options);
		if (!this.options.iconCreateFunction) {
			this.options.iconCreateFunction = this._defaultIconCreateFunction;
		}

		this._featureGroup = L.featureGroup();
		this._featureGroup.addEventParent(this);

		this._nonPointGroup = L.featureGroup();
		this._nonPointGroup.addEventParent(this);

		this._inZoomAnimation = 0;
		this._needsClustering = [];
		this._needsRemoving = []; //Markers removed while we aren't on the map need to be kept track of
		//The bounds of the currently shown area (from _getExpandedVisibleBounds) Updated on zoom/move
		this._currentShownBounds = null;

		this._queue = [];

		this._childMarkerEventHandlers = {
			'dragstart': this._childMarkerDragStart,
			'move': this._childMarkerMoved,
			'dragend': this._childMarkerDragEnd,
		};

		// Hook the appropriate animation methods.
		var animate = L.DomUtil.TRANSITION && this.options.animate;
		L.extend(this, animate ? this._withAnimation : this._noAnimation);
		// Remember which MarkerCluster class to instantiate (animated or not).
		this._markerCluster = animate ? L.MarkerCluster : L.MarkerClusterNonAnimated;
	},

	addLayer: function (layer) {

		if (layer instanceof L.LayerGroup) {
			return this.addLayers([layer]);
		}

		//Don't cluster non point data
		if (!layer.getLatLng) {
			this._nonPointGroup.addLayer(layer);
			this.fire('layeradd', { layer: layer });
			return this;
		}

		if (!this._map) {
			this._needsClustering.push(layer);
			this.fire('layeradd', { layer: layer });
			return this;
		}

		if (this.hasLayer(layer)) {
			return this;
		}


		//If we have already clustered we'll need to add this one to a cluster

		if (this._unspiderfy) {
			this._unspiderfy();
		}

		this._addLayer(layer, this._maxZoom);
		this.fire('layeradd', { layer: layer });

		// Refresh bounds and weighted positions.
		this._topClusterLevel._recalculateBounds();

		this._refreshClustersIcons();

		//Work out what is visible
		var visibleLayer = layer,
		    currentZoom = this._zoom;
		if (layer.__parent) {
			while (visibleLayer.__parent._zoom >= currentZoom) {
				visibleLayer = visibleLayer.__parent;
			}
		}

		if (this._currentShownBounds.contains(visibleLayer.getLatLng())) {
			if (this.options.animateAddingMarkers) {
				this._animationAddLayer(layer, visibleLayer);
			} else {
				this._animationAddLayerNonAnimated(layer, visibleLayer);
			}
		}
		return this;
	},

	removeLayer: function (layer) {

		if (layer instanceof L.LayerGroup) {
			return this.removeLayers([layer]);
		}

		//Non point layers
		if (!layer.getLatLng) {
			this._nonPointGroup.removeLayer(layer);
			this.fire('layerremove', { layer: layer });
			return this;
		}

		if (!this._map) {
			if (!this._arraySplice(this._needsClustering, layer) && this.hasLayer(layer)) {
				this._needsRemoving.push({ layer: layer, latlng: layer._latlng });
			}
			this.fire('layerremove', { layer: layer });
			return this;
		}

		if (!layer.__parent) {
			return this;
		}

		if (this._unspiderfy) {
			this._unspiderfy();
			this._unspiderfyLayer(layer);
		}

		//Remove the marker from clusters
		this._removeLayer(layer, true);
		this.fire('layerremove', { layer: layer });

		// Refresh bounds and weighted positions.
		this._topClusterLevel._recalculateBounds();

		this._refreshClustersIcons();

		layer.off(this._childMarkerEventHandlers, this);

		if (this._featureGroup.hasLayer(layer)) {
			this._featureGroup.removeLayer(layer);
			if (layer.clusterShow) {
				layer.clusterShow();
			}
		}

		return this;
	},

	//Takes an array of markers and adds them in bulk
	addLayers: function (layersArray, skipLayerAddEvent) {
		if (!L.Util.isArray(layersArray)) {
			return this.addLayer(layersArray);
		}

		var fg = this._featureGroup,
		    npg = this._nonPointGroup,
		    chunked = this.options.chunkedLoading,
		    chunkInterval = this.options.chunkInterval,
		    chunkProgress = this.options.chunkProgress,
		    l = layersArray.length,
		    offset = 0,
		    originalArray = true,
		    m;

		if (this._map) {
			var started = (new Date()).getTime();
			var process = L.bind(function () {
				var start = (new Date()).getTime();
				for (; offset < l; offset++) {
					if (chunked && offset % 200 === 0) {
						// every couple hundred markers, instrument the time elapsed since processing started:
						var elapsed = (new Date()).getTime() - start;
						if (elapsed > chunkInterval) {
							break; // been working too hard, time to take a break :-)
						}
					}

					m = layersArray[offset];

					// Group of layers, append children to layersArray and skip.
					// Side effects:
					// - Total increases, so chunkProgress ratio jumps backward.
					// - Groups are not included in this group, only their non-group child layers (hasLayer).
					// Changing array length while looping does not affect performance in current browsers:
					// http://jsperf.com/for-loop-changing-length/6
					if (m instanceof L.LayerGroup) {
						if (originalArray) {
							layersArray = layersArray.slice();
							originalArray = false;
						}
						this._extractNonGroupLayers(m, layersArray);
						l = layersArray.length;
						continue;
					}

					//Not point data, can't be clustered
					if (!m.getLatLng) {
						npg.addLayer(m);
						if (!skipLayerAddEvent) {
							this.fire('layeradd', { layer: m });
						}
						continue;
					}

					if (this.hasLayer(m)) {
						continue;
					}

					this._addLayer(m, this._maxZoom);
					if (!skipLayerAddEvent) {
						this.fire('layeradd', { layer: m });
					}

					//If we just made a cluster of size 2 then we need to remove the other marker from the map (if it is) or we never will
					if (m.__parent) {
						if (m.__parent.getChildCount() === 2) {
							var markers = m.__parent.getAllChildMarkers(),
							    otherMarker = markers[0] === m ? markers[1] : markers[0];
							fg.removeLayer(otherMarker);
						}
					}
				}

				if (chunkProgress) {
					// report progress and time elapsed:
					chunkProgress(offset, l, (new Date()).getTime() - started);
				}

				// Completed processing all markers.
				if (offset === l) {

					// Refresh bounds and weighted positions.
					this._topClusterLevel._recalculateBounds();

					this._refreshClustersIcons();

					this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds);
				} else {
					setTimeout(process, this.options.chunkDelay);
				}
			}, this);

			process();
		} else {
			var needsClustering = this._needsClustering;

			for (; offset < l; offset++) {
				m = layersArray[offset];

				// Group of layers, append children to layersArray and skip.
				if (m instanceof L.LayerGroup) {
					if (originalArray) {
						layersArray = layersArray.slice();
						originalArray = false;
					}
					this._extractNonGroupLayers(m, layersArray);
					l = layersArray.length;
					continue;
				}

				//Not point data, can't be clustered
				if (!m.getLatLng) {
					npg.addLayer(m);
					continue;
				}

				if (this.hasLayer(m)) {
					continue;
				}

				needsClustering.push(m);
			}
		}
		return this;
	},

	//Takes an array of markers and removes them in bulk
	removeLayers: function (layersArray) {
		var i, m,
		    l = layersArray.length,
		    fg = this._featureGroup,
		    npg = this._nonPointGroup,
		    originalArray = true;

		if (!this._map) {
			for (i = 0; i < l; i++) {
				m = layersArray[i];

				// Group of layers, append children to layersArray and skip.
				if (m instanceof L.LayerGroup) {
					if (originalArray) {
						layersArray = layersArray.slice();
						originalArray = false;
					}
					this._extractNonGroupLayers(m, layersArray);
					l = layersArray.length;
					continue;
				}

				this._arraySplice(this._needsClustering, m);
				npg.removeLayer(m);
				if (this.hasLayer(m)) {
					this._needsRemoving.push({ layer: m, latlng: m._latlng });
				}
				this.fire('layerremove', { layer: m });
			}
			return this;
		}

		if (this._unspiderfy) {
			this._unspiderfy();

			// Work on a copy of the array, so that next loop is not affected.
			var layersArray2 = layersArray.slice(),
			    l2 = l;
			for (i = 0; i < l2; i++) {
				m = layersArray2[i];

				// Group of layers, append children to layersArray and skip.
				if (m instanceof L.LayerGroup) {
					this._extractNonGroupLayers(m, layersArray2);
					l2 = layersArray2.length;
					continue;
				}

				this._unspiderfyLayer(m);
			}
		}

		for (i = 0; i < l; i++) {
			m = layersArray[i];

			// Group of layers, append children to layersArray and skip.
			if (m instanceof L.LayerGroup) {
				if (originalArray) {
					layersArray = layersArray.slice();
					originalArray = false;
				}
				this._extractNonGroupLayers(m, layersArray);
				l = layersArray.length;
				continue;
			}

			if (!m.__parent) {
				npg.removeLayer(m);
				this.fire('layerremove', { layer: m });
				continue;
			}

			this._removeLayer(m, true, true);
			this.fire('layerremove', { layer: m });

			if (fg.hasLayer(m)) {
				fg.removeLayer(m);
				if (m.clusterShow) {
					m.clusterShow();
				}
			}
		}

		// Refresh bounds and weighted positions.
		this._topClusterLevel._recalculateBounds();

		this._refreshClustersIcons();

		//Fix up the clusters and markers on the map
		this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds);

		return this;
	},

	//Removes all layers from the MarkerClusterGroup
	clearLayers: function () {
		//Need our own special implementation as the LayerGroup one doesn't work for us

		//If we aren't on the map (yet), blow away the markers we know of
		if (!this._map) {
			this._needsClustering = [];
			this._needsRemoving = [];
			delete this._gridClusters;
			delete this._gridUnclustered;
		}

		if (this._noanimationUnspiderfy) {
			this._noanimationUnspiderfy();
		}

		//Remove all the visible layers
		this._featureGroup.clearLayers();
		this._nonPointGroup.clearLayers();

		this.eachLayer(function (marker) {
			marker.off(this._childMarkerEventHandlers, this);
			delete marker.__parent;
		}, this);

		if (this._map) {
			//Reset _topClusterLevel and the DistanceGrids
			this._generateInitialClusters();
		}

		return this;
	},

	//Override FeatureGroup.getBounds as it doesn't work
	getBounds: function () {
		var bounds = new L.LatLngBounds();

		if (this._topClusterLevel) {
			bounds.extend(this._topClusterLevel._bounds);
		}

		for (var i = this._needsClustering.length - 1; i >= 0; i--) {
			bounds.extend(this._needsClustering[i].getLatLng());
		}

		bounds.extend(this._nonPointGroup.getBounds());

		return bounds;
	},

	//Overrides LayerGroup.eachLayer
	eachLayer: function (method, context) {
		var markers = this._needsClustering.slice(),
			needsRemoving = this._needsRemoving,
			thisNeedsRemoving, i, j;

		if (this._topClusterLevel) {
			this._topClusterLevel.getAllChildMarkers(markers);
		}

		for (i = markers.length - 1; i >= 0; i--) {
			thisNeedsRemoving = true;

			for (j = needsRemoving.length - 1; j >= 0; j--) {
				if (needsRemoving[j].layer === markers[i]) {
					thisNeedsRemoving = false;
					break;
				}
			}

			if (thisNeedsRemoving) {
				method.call(context, markers[i]);
			}
		}

		this._nonPointGroup.eachLayer(method, context);
	},

	//Overrides LayerGroup.getLayers
	getLayers: function () {
		var layers = [];
		this.eachLayer(function (l) {
			layers.push(l);
		});
		return layers;
	},

	//Overrides LayerGroup.getLayer, WARNING: Really bad performance
	getLayer: function (id) {
		var result = null;

		id = parseInt(id, 10);

		this.eachLayer(function (l) {
			if (L.stamp(l) === id) {
				result = l;
			}
		});

		return result;
	},

	//Returns true if the given layer is in this MarkerClusterGroup
	hasLayer: function (layer) {
		if (!layer) {
			return false;
		}

		var i, anArray = this._needsClustering;

		for (i = anArray.length - 1; i >= 0; i--) {
			if (anArray[i] === layer) {
				return true;
			}
		}

		anArray = this._needsRemoving;
		for (i = anArray.length - 1; i >= 0; i--) {
			if (anArray[i].layer === layer) {
				return false;
			}
		}

		return !!(layer.__parent && layer.__parent._group === this) || this._nonPointGroup.hasLayer(layer);
	},

	//Zoom down to show the given layer (spiderfying if necessary) then calls the callback
	zoomToShowLayer: function (layer, callback) {

		if (typeof callback !== 'function') {
			callback = function () {};
		}

		var showMarker = function () {
			if ((layer._icon || layer.__parent._icon) && !this._inZoomAnimation) {
				this._map.off('moveend', showMarker, this);
				this.off('animationend', showMarker, this);

				if (layer._icon) {
					callback();
				} else if (layer.__parent._icon) {
					this.once('spiderfied', callback, this);
					layer.__parent.spiderfy();
				}
			}
		};

		if (layer._icon && this._map.getBounds().contains(layer.getLatLng())) {
			//Layer is visible ond on screen, immediate return
			callback();
		} else if (layer.__parent._zoom < Math.round(this._map._zoom)) {
			//Layer should be visible at this zoom level. It must not be on screen so just pan over to it
			this._map.on('moveend', showMarker, this);
			this._map.panTo(layer.getLatLng());
		} else {
			this._map.on('moveend', showMarker, this);
			this.on('animationend', showMarker, this);
			layer.__parent.zoomToBounds();
		}
	},

	//Overrides FeatureGroup.onAdd
	onAdd: function (map) {
		this._map = map;
		var i, l, layer;

		if (!isFinite(this._map.getMaxZoom())) {
			throw "Map has no maxZoom specified";
		}

		this._featureGroup.addTo(map);
		this._nonPointGroup.addTo(map);

		if (!this._gridClusters) {
			this._generateInitialClusters();
		}

		this._maxLat = map.options.crs.projection.MAX_LATITUDE;

		//Restore all the positions as they are in the MCG before removing them
		for (i = 0, l = this._needsRemoving.length; i < l; i++) {
			layer = this._needsRemoving[i];
			layer.newlatlng = layer.layer._latlng;
			layer.layer._latlng = layer.latlng;
		}
		//Remove them, then restore their new positions
		for (i = 0, l = this._needsRemoving.length; i < l; i++) {
			layer = this._needsRemoving[i];
			this._removeLayer(layer.layer, true);
			layer.layer._latlng = layer.newlatlng;
		}
		this._needsRemoving = [];

		//Remember the current zoom level and bounds
		this._zoom = Math.round(this._map._zoom);
		this._currentShownBounds = this._getExpandedVisibleBounds();

		this._map.on('zoomend', this._zoomEnd, this);
		this._map.on('moveend', this._moveEnd, this);

		if (this._spiderfierOnAdd) { //TODO FIXME: Not sure how to have spiderfier add something on here nicely
			this._spiderfierOnAdd();
		}

		this._bindEvents();

		//Actually add our markers to the map:
		l = this._needsClustering;
		this._needsClustering = [];
		this.addLayers(l, true);
	},

	//Overrides FeatureGroup.onRemove
	onRemove: function (map) {
		map.off('zoomend', this._zoomEnd, this);
		map.off('moveend', this._moveEnd, this);

		this._unbindEvents();

		//In case we are in a cluster animation
		this._map._mapPane.className = this._map._mapPane.className.replace(' leaflet-cluster-anim', '');

		if (this._spiderfierOnRemove) { //TODO FIXME: Not sure how to have spiderfier add something on here nicely
			this._spiderfierOnRemove();
		}

		delete this._maxLat;

		//Clean up all the layers we added to the map
		this._hideCoverage();
		this._featureGroup.remove();
		this._nonPointGroup.remove();

		this._featureGroup.clearLayers();

		this._map = null;
	},

	getVisibleParent: function (marker) {
		var vMarker = marker;
		while (vMarker && !vMarker._icon) {
			vMarker = vMarker.__parent;
		}
		return vMarker || null;
	},

	//Remove the given object from the given array
	_arraySplice: function (anArray, obj) {
		for (var i = anArray.length - 1; i >= 0; i--) {
			if (anArray[i] === obj) {
				anArray.splice(i, 1);
				return true;
			}
		}
	},

	/**
	 * Removes a marker from all _gridUnclustered zoom levels, starting at the supplied zoom.
	 * @param marker to be removed from _gridUnclustered.
	 * @param z integer bottom start zoom level (included)
	 * @private
	 */
	_removeFromGridUnclustered: function (marker, z) {
		var map = this._map,
		    gridUnclustered = this._gridUnclustered,
			minZoom = Math.floor(this._map.getMinZoom());

		for (; z >= minZoom; z--) {
			if (!gridUnclustered[z].removeObject(marker, map.project(marker.getLatLng(), z))) {
				break;
			}
		}
	},

	_childMarkerDragStart: function (e) {
		e.target.__dragStart = e.target._latlng;
	},

	_childMarkerMoved: function (e) {
		if (!this._ignoreMove && !e.target.__dragStart) {
			var isPopupOpen = e.target._popup && e.target._popup.isOpen();

			this._moveChild(e.target, e.oldLatLng, e.latlng);

			if (isPopupOpen) {
				e.target.openPopup();
			}
		}
	},

	_moveChild: function (layer, from, to) {
		layer._latlng = from;
		this.removeLayer(layer);

		layer._latlng = to;
		this.addLayer(layer);
	},

	_childMarkerDragEnd: function (e) {
		var dragStart = e.target.__dragStart;
		delete e.target.__dragStart;
		if (dragStart) {
			this._moveChild(e.target, dragStart, e.target._latlng);
		}		
	},


	//Internal function for removing a marker from everything.
	//dontUpdateMap: set to true if you will handle updating the map manually (for bulk functions)
	_removeLayer: function (marker, removeFromDistanceGrid, dontUpdateMap) {
		var gridClusters = this._gridClusters,
			gridUnclustered = this._gridUnclustered,
			fg = this._featureGroup,
			map = this._map,
			minZoom = Math.floor(this._map.getMinZoom());

		//Remove the marker from distance clusters it might be in
		if (removeFromDistanceGrid) {
			this._removeFromGridUnclustered(marker, this._maxZoom);
		}

		//Work our way up the clusters removing them as we go if required
		var cluster = marker.__parent,
			markers = cluster._markers,
			otherMarker;

		//Remove the marker from the immediate parents marker list
		this._arraySplice(markers, marker);

		while (cluster) {
			cluster._childCount--;
			cluster._boundsNeedUpdate = true;

			if (cluster._zoom < minZoom) {
				//Top level, do nothing
				break;
			} else if (removeFromDistanceGrid && cluster._childCount <= 1) { //Cluster no longer required
				//We need to push the other marker up to the parent
				otherMarker = cluster._markers[0] === marker ? cluster._markers[1] : cluster._markers[0];

				//Update distance grid
				gridClusters[cluster._zoom].removeObject(cluster, map.project(cluster._cLatLng, cluster._zoom));
				gridUnclustered[cluster._zoom].addObject(otherMarker, map.project(otherMarker.getLatLng(), cluster._zoom));

				//Move otherMarker up to parent
				this._arraySplice(cluster.__parent._childClusters, cluster);
				cluster.__parent._markers.push(otherMarker);
				otherMarker.__parent = cluster.__parent;

				if (cluster._icon) {
					//Cluster is currently on the map, need to put the marker on the map instead
					fg.removeLayer(cluster);
					if (!dontUpdateMap) {
						fg.addLayer(otherMarker);
					}
				}
			} else {
				cluster._iconNeedsUpdate = true;
			}

			cluster = cluster.__parent;
		}

		delete marker.__parent;
	},

	_isOrIsParent: function (el, oel) {
		while (oel) {
			if (el === oel) {
				return true;
			}
			oel = oel.parentNode;
		}
		return false;
	},

	//Override L.Evented.fire
	fire: function (type, data, propagate) {
		if (data && data.layer instanceof L.MarkerCluster) {
			//Prevent multiple clustermouseover/off events if the icon is made up of stacked divs (Doesn't work in ie <= 8, no relatedTarget)
			if (data.originalEvent && this._isOrIsParent(data.layer._icon, data.originalEvent.relatedTarget)) {
				return;
			}
			type = 'cluster' + type;
		}

		L.FeatureGroup.prototype.fire.call(this, type, data, propagate);
	},

	//Override L.Evented.listens
	listens: function (type, propagate) {
		return L.FeatureGroup.prototype.listens.call(this, type, propagate) || L.FeatureGroup.prototype.listens.call(this, 'cluster' + type, propagate);
	},

	//Default functionality
	_defaultIconCreateFunction: function (cluster) {
		var childCount = cluster.getChildCount();

		var c = ' marker-cluster-';
		if (childCount < 10) {
			c += 'small';
		} else if (childCount < 100) {
			c += 'medium';
		} else {
			c += 'large';
		}

		return new L.DivIcon({ html: '<div><span>' + childCount + '</span></div>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
	},

	_bindEvents: function () {
		var map = this._map,
		    spiderfyOnMaxZoom = this.options.spiderfyOnMaxZoom,
		    showCoverageOnHover = this.options.showCoverageOnHover,
		    zoomToBoundsOnClick = this.options.zoomToBoundsOnClick;

		//Zoom on cluster click or spiderfy if we are at the lowest level
		if (spiderfyOnMaxZoom || zoomToBoundsOnClick) {
			this.on('clusterclick', this._zoomOrSpiderfy, this);
		}

		//Show convex hull (boundary) polygon on mouse over
		if (showCoverageOnHover) {
			this.on('clustermouseover', this._showCoverage, this);
			this.on('clustermouseout', this._hideCoverage, this);
			map.on('zoomend', this._hideCoverage, this);
		}
	},

	_zoomOrSpiderfy: function (e) {
		var cluster = e.layer,
		    bottomCluster = cluster;

		while (bottomCluster._childClusters.length === 1) {
			bottomCluster = bottomCluster._childClusters[0];
		}

		if (bottomCluster._zoom === this._maxZoom &&
			bottomCluster._childCount === cluster._childCount &&
			this.options.spiderfyOnMaxZoom) {

			// All child markers are contained in a single cluster from this._maxZoom to this cluster.
			cluster.spiderfy();
		} else if (this.options.zoomToBoundsOnClick) {
			cluster.zoomToBounds();
		}

		// Focus the map again for keyboard users.
		if (e.originalEvent && e.originalEvent.keyCode === 13) {
			this._map._container.focus();
		}
	},

	_showCoverage: function (e) {
		var map = this._map;
		if (this._inZoomAnimation) {
			return;
		}
		if (this._shownPolygon) {
			map.removeLayer(this._shownPolygon);
		}
		if (e.layer.getChildCount() > 2 && e.layer !== this._spiderfied) {
			this._shownPolygon = new L.Polygon(e.layer.getConvexHull(), this.options.polygonOptions);
			map.addLayer(this._shownPolygon);
		}
	},

	_hideCoverage: function () {
		if (this._shownPolygon) {
			this._map.removeLayer(this._shownPolygon);
			this._shownPolygon = null;
		}
	},

	_unbindEvents: function () {
		var spiderfyOnMaxZoom = this.options.spiderfyOnMaxZoom,
			showCoverageOnHover = this.options.showCoverageOnHover,
			zoomToBoundsOnClick = this.options.zoomToBoundsOnClick,
			map = this._map;

		if (spiderfyOnMaxZoom || zoomToBoundsOnClick) {
			this.off('clusterclick', this._zoomOrSpiderfy, this);
		}
		if (showCoverageOnHover) {
			this.off('clustermouseover', this._showCoverage, this);
			this.off('clustermouseout', this._hideCoverage, this);
			map.off('zoomend', this._hideCoverage, this);
		}
	},

	_zoomEnd: function () {
		if (!this._map) { //May have been removed from the map by a zoomEnd handler
			return;
        }
        this._mergeSplitClusters();
		this._zoom = Math.round(this._map._zoom);
        this._currentShownBounds = this._getExpandedVisibleBounds();
	},

	_moveEnd: function () {
		if (this._inZoomAnimation) {
			return;
		}

		var newBounds = this._getExpandedVisibleBounds();

		this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, newBounds);
		this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), newBounds);

		this._currentShownBounds = newBounds;
		return;
	},

	_generateInitialClusters: function () {
		var maxZoom = Math.ceil(this._map.getMaxZoom()),
			minZoom = Math.floor(this._map.getMinZoom()),
			radius = this.options.maxClusterRadius,
			radiusFn = radius;

		//If we just set maxClusterRadius to a single number, we need to create
		//a simple function to return that number. Otherwise, we just have to
		//use the function we've passed in.
		if (typeof radius !== "function") {
			radiusFn = function () { return radius; };
		}

		if (this.options.disableClusteringAtZoom !== null) {
			maxZoom = this.options.disableClusteringAtZoom - 1;
		}
		this._maxZoom = maxZoom;
		this._gridClusters = {};
		this._gridUnclustered = {};

		//Set up DistanceGrids for each zoom
		for (var zoom = maxZoom; zoom >= minZoom; zoom--) {
			this._gridClusters[zoom] = new L.DistanceGrid(radiusFn(zoom));
			this._gridUnclustered[zoom] = new L.DistanceGrid(radiusFn(zoom));
		}

		// Instantiate the appropriate L.MarkerCluster class (animated or not).
		this._topClusterLevel = new this._markerCluster(this, minZoom - 1);
	},

	//Zoom: Zoom to start adding at (Pass this._maxZoom to start at the bottom)
	_addLayer: function (layer, zoom) {
		var gridClusters = this._gridClusters,
		    gridUnclustered = this._gridUnclustered,
			minZoom = Math.floor(this._map.getMinZoom()),
		    markerPoint, z;

		if (this.options.singleMarkerMode) {
			this._overrideMarkerIcon(layer);
		}

		layer.on(this._childMarkerEventHandlers, this);

		//Find the lowest zoom level to slot this one in
		for (; zoom >= minZoom; zoom--) {
			markerPoint = this._map.project(layer.getLatLng(), zoom); // calculate pixel position

			//Try find a cluster close by
			var closest = gridClusters[zoom].getNearObject(markerPoint);
			if (closest) {
				closest._addChild(layer);
				layer.__parent = closest;
				return;
			}

			//Try find a marker close by to form a new cluster with
			closest = gridUnclustered[zoom].getNearObject(markerPoint);
			if (closest) {
				var parent = closest.__parent;
				if (parent) {
					this._removeLayer(closest, false);
				}

				//Create new cluster with these 2 in it

				var newCluster = new this._markerCluster(this, zoom, closest, layer);
				gridClusters[zoom].addObject(newCluster, this._map.project(newCluster._cLatLng, zoom));
				closest.__parent = newCluster;
				layer.__parent = newCluster;

				//First create any new intermediate parent clusters that don't exist
				var lastParent = newCluster;
				for (z = zoom - 1; z > parent._zoom; z--) {
					lastParent = new this._markerCluster(this, z, lastParent);
					gridClusters[z].addObject(lastParent, this._map.project(closest.getLatLng(), z));
				}
				parent._addChild(lastParent);

				//Remove closest from this zoom level and any above that it is in, replace with newCluster
				this._removeFromGridUnclustered(closest, zoom);

				return;
			}

			//Didn't manage to cluster in at this zoom, record us as a marker here and continue upwards
			gridUnclustered[zoom].addObject(layer, markerPoint);
		}

		//Didn't get in anything, add us to the top
		this._topClusterLevel._addChild(layer);
		layer.__parent = this._topClusterLevel;
		return;
	},

	/**
	 * Refreshes the icon of all "dirty" visible clusters.
	 * Non-visible "dirty" clusters will be updated when they are added to the map.
	 * @private
	 */
	_refreshClustersIcons: function () {
		this._featureGroup.eachLayer(function (c) {
			if (c instanceof L.MarkerCluster && c._iconNeedsUpdate) {
				c._updateIcon();
			}
		});
	},

	//Enqueue code to fire after the marker expand/contract has happened
	_enqueue: function (fn) {
		this._queue.push(fn);
		if (!this._queueTimeout) {
			this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300);
		}
	},
	_processQueue: function () {
		for (var i = 0; i < this._queue.length; i++) {
			this._queue[i].call(this);
		}
		this._queue.length = 0;
		clearTimeout(this._queueTimeout);
		this._queueTimeout = null;
	},

	//Merge and split any existing clusters that are too big or small
	_mergeSplitClusters: function () {
		var mapZoom = Math.round(this._map._zoom);

		//In case we are starting to split before the animation finished
		this._processQueue();

		if (this._zoom < mapZoom && this._currentShownBounds.intersects(this._getExpandedVisibleBounds())) { //Zoom in, split
			this._animationStart();
			//Remove clusters now off screen
			this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds());

			this._animationZoomIn(this._zoom, mapZoom);

		} else if (this._zoom > mapZoom) { //Zoom out, merge
			this._animationStart();

			this._animationZoomOut(this._zoom, mapZoom);
		} else {
			this._moveEnd();
		}
	},

	//Gets the maps visible bounds expanded in each direction by the size of the screen (so the user cannot see an area we do not cover in one pan)
	_getExpandedVisibleBounds: function () {
		if (!this.options.removeOutsideVisibleBounds) {
			return this._mapBoundsInfinite;
		} else if (L.Browser.mobile) {
			return this._checkBoundsMaxLat(this._map.getBounds());
		}

		return this._checkBoundsMaxLat(this._map.getBounds().pad(1)); // Padding expands the bounds by its own dimensions but scaled with the given factor.
	},

	/**
	 * Expands the latitude to Infinity (or -Infinity) if the input bounds reach the map projection maximum defined latitude
	 * (in the case of Web/Spherical Mercator, it is 85.0511287798 / see https://en.wikipedia.org/wiki/Web_Mercator#Formulas).
	 * Otherwise, the removeOutsideVisibleBounds option will remove markers beyond that limit, whereas the same markers without
	 * this option (or outside MCG) will have their position floored (ceiled) by the projection and rendered at that limit,
	 * making the user think that MCG "eats" them and never displays them again.
	 * @param bounds L.LatLngBounds
	 * @returns {L.LatLngBounds}
	 * @private
	 */
	_checkBoundsMaxLat: function (bounds) {
		var maxLat = this._maxLat;

		if (maxLat !== undefined) {
			if (bounds.getNorth() >= maxLat) {
				bounds._northEast.lat = Infinity;
			}
			if (bounds.getSouth() <= -maxLat) {
				bounds._southWest.lat = -Infinity;
			}
		}

		return bounds;
	},

	//Shared animation code
	_animationAddLayerNonAnimated: function (layer, newCluster) {
		if (newCluster === layer) {
			this._featureGroup.addLayer(layer);
		} else if (newCluster._childCount === 2) {
			newCluster._addToMap();

			var markers = newCluster.getAllChildMarkers();
			this._featureGroup.removeLayer(markers[0]);
			this._featureGroup.removeLayer(markers[1]);
		} else {
			newCluster._updateIcon();
		}
	},

	/**
	 * Extracts individual (i.e. non-group) layers from a Layer Group.
	 * @param group to extract layers from.
	 * @param output {Array} in which to store the extracted layers.
	 * @returns {*|Array}
	 * @private
	 */
	_extractNonGroupLayers: function (group, output) {
		var layers = group.getLayers(),
		    i = 0,
		    layer;

		output = output || [];

		for (; i < layers.length; i++) {
			layer = layers[i];

			if (layer instanceof L.LayerGroup) {
				this._extractNonGroupLayers(layer, output);
				continue;
			}

			output.push(layer);
		}

		return output;
	},

	/**
	 * Implements the singleMarkerMode option.
	 * @param layer Marker to re-style using the Clusters iconCreateFunction.
	 * @returns {L.Icon} The newly created icon.
	 * @private
	 */
	_overrideMarkerIcon: function (layer) {
		var icon = layer.options.icon = this.options.iconCreateFunction({
			getChildCount: function () {
				return 1;
			},
			getAllChildMarkers: function () {
				return [layer];
			}
		});

		return icon;
	}
});

// Constant bounds used in case option "removeOutsideVisibleBounds" is set to false.
L.MarkerClusterGroup.include({
	_mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-Infinity, -Infinity), new L.LatLng(Infinity, Infinity))
});

L.MarkerClusterGroup.include({
	_noAnimation: {
		//Non Animated versions of everything
		_animationStart: function () {
			//Do nothing...
		},
		_animationZoomIn: function (previousZoomLevel, newZoomLevel) {
			this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), previousZoomLevel);
			this._topClusterLevel._recursivelyAddChildrenToMap(null, newZoomLevel, this._getExpandedVisibleBounds());

			//We didn't actually animate, but we use this event to mean "clustering animations have finished"
			this.fire('animationend');
		},
		_animationZoomOut: function (previousZoomLevel, newZoomLevel) {
			this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), previousZoomLevel);
			this._topClusterLevel._recursivelyAddChildrenToMap(null, newZoomLevel, this._getExpandedVisibleBounds());

			//We didn't actually animate, but we use this event to mean "clustering animations have finished"
			this.fire('animationend');
		},
		_animationAddLayer: function (layer, newCluster) {
			this._animationAddLayerNonAnimated(layer, newCluster);
		}
	},

	_withAnimation: {
		//Animated versions here
		_animationStart: function () {
			this._map._mapPane.className += ' leaflet-cluster-anim';
			this._inZoomAnimation++;
		},

		_animationZoomIn: function (previousZoomLevel, newZoomLevel) {
			var bounds = this._getExpandedVisibleBounds(),
			    fg = this._featureGroup,
				minZoom = Math.floor(this._map.getMinZoom()),
			    i;

			this._ignoreMove = true;

			//Add all children of current clusters to map and remove those clusters from map
			this._topClusterLevel._recursively(bounds, previousZoomLevel, minZoom, function (c) {
				var startPos = c._latlng,
				    markers  = c._markers,
				    m;

				if (!bounds.contains(startPos)) {
					startPos = null;
				}

				if (c._isSingleParent() && previousZoomLevel + 1 === newZoomLevel) { //Immediately add the new child and remove us
					fg.removeLayer(c);
					c._recursivelyAddChildrenToMap(null, newZoomLevel, bounds);
				} else {
					//Fade out old cluster
					c.clusterHide();
					c._recursivelyAddChildrenToMap(startPos, newZoomLevel, bounds);
				}

				//Remove all markers that aren't visible any more
				//TODO: Do we actually need to do this on the higher levels too?
				for (i = markers.length - 1; i >= 0; i--) {
					m = markers[i];
					if (!bounds.contains(m._latlng)) {
						fg.removeLayer(m);
					}
				}

			});

			this._forceLayout();

			//Update opacities
			this._topClusterLevel._recursivelyBecomeVisible(bounds, newZoomLevel);
			//TODO Maybe? Update markers in _recursivelyBecomeVisible
			fg.eachLayer(function (n) {
				if (!(n instanceof L.MarkerCluster) && n._icon) {
					n.clusterShow();
				}
			});

			//update the positions of the just added clusters/markers
			this._topClusterLevel._recursively(bounds, previousZoomLevel, newZoomLevel, function (c) {
				c._recursivelyRestoreChildPositions(newZoomLevel);
			});

			this._ignoreMove = false;

			//Remove the old clusters and close the zoom animation
			this._enqueue(function () {
				//update the positions of the just added clusters/markers
				this._topClusterLevel._recursively(bounds, previousZoomLevel, minZoom, function (c) {
					fg.removeLayer(c);
					c.clusterShow();
				});

				this._animationEnd();
			});
		},

		_animationZoomOut: function (previousZoomLevel, newZoomLevel) {
			this._animationZoomOutSingle(this._topClusterLevel, previousZoomLevel - 1, newZoomLevel);

			//Need to add markers for those that weren't on the map before but are now
			this._topClusterLevel._recursivelyAddChildrenToMap(null, newZoomLevel, this._getExpandedVisibleBounds());
			//Remove markers that were on the map before but won't be now
			this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), previousZoomLevel, this._getExpandedVisibleBounds());
		},

		_animationAddLayer: function (layer, newCluster) {
			var me = this,
			    fg = this._featureGroup;

			fg.addLayer(layer);
			if (newCluster !== layer) {
				if (newCluster._childCount > 2) { //Was already a cluster

					newCluster._updateIcon();
					this._forceLayout();
					this._animationStart();

					layer._setPos(this._map.latLngToLayerPoint(newCluster.getLatLng()));
					layer.clusterHide();

					this._enqueue(function () {
						fg.removeLayer(layer);
						layer.clusterShow();

						me._animationEnd();
					});

				} else { //Just became a cluster
					this._forceLayout();

					me._animationStart();
					me._animationZoomOutSingle(newCluster, this._map.getMaxZoom(), this._zoom);
				}
			}
		}
	},

	// Private methods for animated versions.
	_animationZoomOutSingle: function (cluster, previousZoomLevel, newZoomLevel) {
		var bounds = this._getExpandedVisibleBounds(),
			minZoom = Math.floor(this._map.getMinZoom());

		//Animate all of the markers in the clusters to move to their cluster center point
		cluster._recursivelyAnimateChildrenInAndAddSelfToMap(bounds, minZoom, previousZoomLevel + 1, newZoomLevel);

		var me = this;

		//Update the opacity (If we immediately set it they won't animate)
		this._forceLayout();
		cluster._recursivelyBecomeVisible(bounds, newZoomLevel);

		//TODO: Maybe use the transition timing stuff to make this more reliable
		//When the animations are done, tidy up
		this._enqueue(function () {

			//This cluster stopped being a cluster before the timeout fired
			if (cluster._childCount === 1) {
				var m = cluster._markers[0];
				//If we were in a cluster animation at the time then the opacity and position of our child could be wrong now, so fix it
				this._ignoreMove = true;
				m.setLatLng(m.getLatLng());
				this._ignoreMove = false;
				if (m.clusterShow) {
					m.clusterShow();
				}
			} else {
				cluster._recursively(bounds, newZoomLevel, minZoom, function (c) {
					c._recursivelyRemoveChildrenFromMap(bounds, minZoom, previousZoomLevel + 1);
				});
			}
			me._animationEnd();
		});
	},

	_animationEnd: function () {
		if (this._map) {
			this._map._mapPane.className = this._map._mapPane.className.replace(' leaflet-cluster-anim', '');
		}
		this._inZoomAnimation--;
		this.fire('animationend');
	},

	//Force a browser layout of stuff in the map
	// Should apply the current opacity and location to all elements so we can update them again for an animation
	_forceLayout: function () {
		//In my testing this works, infact offsetWidth of any element seems to work.
		//Could loop all this._layers and do this for each _icon if it stops working

		L.Util.falseFn(document.body.offsetWidth);
	}
});

L.markerClusterGroup = function (options) {
	return new L.MarkerClusterGroup(options);
};

var MarkerCluster = L.MarkerCluster = L.Marker.extend({
	options: L.Icon.prototype.options,

	initialize: function (group, zoom, a, b) {

		L.Marker.prototype.initialize.call(this, a ? (a._cLatLng || a.getLatLng()) : new L.LatLng(0, 0),
            { icon: this, pane: group.options.clusterPane });

		this._group = group;
		this._zoom = zoom;

		this._markers = [];
		this._childClusters = [];
		this._childCount = 0;
		this._iconNeedsUpdate = true;
		this._boundsNeedUpdate = true;

		this._bounds = new L.LatLngBounds();

		if (a) {
			this._addChild(a);
		}
		if (b) {
			this._addChild(b);
		}
	},

	//Recursively retrieve all child markers of this cluster
	getAllChildMarkers: function (storageArray, ignoreDraggedMarker) {
		storageArray = storageArray || [];

		for (var i = this._childClusters.length - 1; i >= 0; i--) {
			this._childClusters[i].getAllChildMarkers(storageArray);
		}

		for (var j = this._markers.length - 1; j >= 0; j--) {
			if (ignoreDraggedMarker && this._markers[j].__dragStart) {
				continue;
			}
			storageArray.push(this._markers[j]);
		}

		return storageArray;
	},

	//Returns the count of how many child markers we have
	getChildCount: function () {
		return this._childCount;
	},

	//Zoom to the minimum of showing all of the child markers, or the extents of this cluster
	zoomToBounds: function (fitBoundsOptions) {
		var childClusters = this._childClusters.slice(),
			map = this._group._map,
			boundsZoom = map.getBoundsZoom(this._bounds),
			zoom = this._zoom + 1,
			mapZoom = map.getZoom(),
			i;

		//calculate how far we need to zoom down to see all of the markers
		while (childClusters.length > 0 && boundsZoom > zoom) {
			zoom++;
			var newClusters = [];
			for (i = 0; i < childClusters.length; i++) {
				newClusters = newClusters.concat(childClusters[i]._childClusters);
			}
			childClusters = newClusters;
		}

		if (boundsZoom > zoom) {
			this._group._map.setView(this._latlng, zoom);
		} else if (boundsZoom <= mapZoom) { //If fitBounds wouldn't zoom us down, zoom us down instead
			this._group._map.setView(this._latlng, mapZoom + 1);
		} else {
			this._group._map.fitBounds(this._bounds, fitBoundsOptions);
		}
	},

	getBounds: function () {
		var bounds = new L.LatLngBounds();
		bounds.extend(this._bounds);
		return bounds;
	},

	_updateIcon: function () {
		this._iconNeedsUpdate = true;
		if (this._icon) {
			this.setIcon(this);
		}
	},

	//Cludge for Icon, we pretend to be an icon for performance
	createIcon: function () {
		if (this._iconNeedsUpdate) {
			this._iconObj = this._group.options.iconCreateFunction(this);
			this._iconNeedsUpdate = false;
		}
		return this._iconObj.createIcon();
	},
	createShadow: function () {
		return this._iconObj.createShadow();
	},


	_addChild: function (new1, isNotificationFromChild) {

		this._iconNeedsUpdate = true;

		this._boundsNeedUpdate = true;
		this._setClusterCenter(new1);

		if (new1 instanceof L.MarkerCluster) {
			if (!isNotificationFromChild) {
				this._childClusters.push(new1);
				new1.__parent = this;
			}
			this._childCount += new1._childCount;
		} else {
			if (!isNotificationFromChild) {
				this._markers.push(new1);
			}
			this._childCount++;
		}

		if (this.__parent) {
			this.__parent._addChild(new1, true);
		}
	},

	/**
	 * Makes sure the cluster center is set. If not, uses the child center if it is a cluster, or the marker position.
	 * @param child L.MarkerCluster|L.Marker that will be used as cluster center if not defined yet.
	 * @private
	 */
	_setClusterCenter: function (child) {
		if (!this._cLatLng) {
			// when clustering, take position of the first point as the cluster center
			this._cLatLng = child._cLatLng || child._latlng;
		}
	},

	/**
	 * Assigns impossible bounding values so that the next extend entirely determines the new bounds.
	 * This method avoids having to trash the previous L.LatLngBounds object and to create a new one, which is much slower for this class.
	 * As long as the bounds are not extended, most other methods would probably fail, as they would with bounds initialized but not extended.
	 * @private
	 */
	_resetBounds: function () {
		var bounds = this._bounds;

		if (bounds._southWest) {
			bounds._southWest.lat = Infinity;
			bounds._southWest.lng = Infinity;
		}
		if (bounds._northEast) {
			bounds._northEast.lat = -Infinity;
			bounds._northEast.lng = -Infinity;
		}
	},

	_recalculateBounds: function () {
		var markers = this._markers,
		    childClusters = this._childClusters,
		    latSum = 0,
		    lngSum = 0,
		    totalCount = this._childCount,
		    i, child, childLatLng, childCount;

		// Case where all markers are removed from the map and we are left with just an empty _topClusterLevel.
		if (totalCount === 0) {
			return;
		}

		// Reset rather than creating a new object, for performance.
		this._resetBounds();

		// Child markers.
		for (i = 0; i < markers.length; i++) {
			childLatLng = markers[i]._latlng;

			this._bounds.extend(childLatLng);

			latSum += childLatLng.lat;
			lngSum += childLatLng.lng;
		}

		// Child clusters.
		for (i = 0; i < childClusters.length; i++) {
			child = childClusters[i];

			// Re-compute child bounds and weighted position first if necessary.
			if (child._boundsNeedUpdate) {
				child._recalculateBounds();
			}

			this._bounds.extend(child._bounds);

			childLatLng = child._wLatLng;
			childCount = child._childCount;

			latSum += childLatLng.lat * childCount;
			lngSum += childLatLng.lng * childCount;
		}

		this._latlng = this._wLatLng = new L.LatLng(latSum / totalCount, lngSum / totalCount);

		// Reset dirty flag.
		this._boundsNeedUpdate = false;
	},

	//Set our markers position as given and add it to the map
	_addToMap: function (startPos) {
		if (startPos) {
			this._backupLatlng = this._latlng;
			this.setLatLng(startPos);
		}
		this._group._featureGroup.addLayer(this);
	},

	_recursivelyAnimateChildrenIn: function (bounds, center, maxZoom) {
		this._recursively(bounds, this._group._map.getMinZoom(), maxZoom - 1,
			function (c) {
				var markers = c._markers,
					i, m;
				for (i = markers.length - 1; i >= 0; i--) {
					m = markers[i];

					//Only do it if the icon is still on the map
					if (m._icon) {
						m._setPos(center);
						m.clusterHide();
					}
				}
			},
			function (c) {
				var childClusters = c._childClusters,
					j, cm;
				for (j = childClusters.length - 1; j >= 0; j--) {
					cm = childClusters[j];
					if (cm._icon) {
						cm._setPos(center);
						cm.clusterHide();
					}
				}
			}
		);
	},

	_recursivelyAnimateChildrenInAndAddSelfToMap: function (bounds, mapMinZoom, previousZoomLevel, newZoomLevel) {
		this._recursively(bounds, newZoomLevel, mapMinZoom,
			function (c) {
				c._recursivelyAnimateChildrenIn(bounds, c._group._map.latLngToLayerPoint(c.getLatLng()).round(), previousZoomLevel);

				//TODO: depthToAnimateIn affects _isSingleParent, if there is a multizoom we may/may not be.
				//As a hack we only do a animation free zoom on a single level zoom, if someone does multiple levels then we always animate
				if (c._isSingleParent() && previousZoomLevel - 1 === newZoomLevel) {
					c.clusterShow();
					c._recursivelyRemoveChildrenFromMap(bounds, mapMinZoom, previousZoomLevel); //Immediately remove our children as we are replacing them. TODO previousBounds not bounds
				} else {
					c.clusterHide();
				}

				c._addToMap();
			}
		);
	},

	_recursivelyBecomeVisible: function (bounds, zoomLevel) {
		this._recursively(bounds, this._group._map.getMinZoom(), zoomLevel, null, function (c) {
			c.clusterShow();
		});
	},

	_recursivelyAddChildrenToMap: function (startPos, zoomLevel, bounds) {
		this._recursively(bounds, this._group._map.getMinZoom() - 1, zoomLevel,
			function (c) {
				if (zoomLevel === c._zoom) {
					return;
				}

				//Add our child markers at startPos (so they can be animated out)
				for (var i = c._markers.length - 1; i >= 0; i--) {
					var nm = c._markers[i];

					if (!bounds.contains(nm._latlng)) {
						continue;
					}

					if (startPos) {
						nm._backupLatlng = nm.getLatLng();

						nm.setLatLng(startPos);
						if (nm.clusterHide) {
							nm.clusterHide();
						}
					}

					c._group._featureGroup.addLayer(nm);
				}
			},
			function (c) {
				c._addToMap(startPos);
			}
		);
	},

	_recursivelyRestoreChildPositions: function (zoomLevel) {
		//Fix positions of child markers
		for (var i = this._markers.length - 1; i >= 0; i--) {
			var nm = this._markers[i];
			if (nm._backupLatlng) {
				nm.setLatLng(nm._backupLatlng);
				delete nm._backupLatlng;
			}
		}

		if (zoomLevel - 1 === this._zoom) {
			//Reposition child clusters
			for (var j = this._childClusters.length - 1; j >= 0; j--) {
				this._childClusters[j]._restorePosition();
			}
		} else {
			for (var k = this._childClusters.length - 1; k >= 0; k--) {
				this._childClusters[k]._recursivelyRestoreChildPositions(zoomLevel);
			}
		}
	},

	_restorePosition: function () {
		if (this._backupLatlng) {
			this.setLatLng(this._backupLatlng);
			delete this._backupLatlng;
		}
	},

	//exceptBounds: If set, don't remove any markers/clusters in it
	_recursivelyRemoveChildrenFromMap: function (previousBounds, mapMinZoom, zoomLevel, exceptBounds) {
		var m, i;
		this._recursively(previousBounds, mapMinZoom - 1, zoomLevel - 1,
			function (c) {
				//Remove markers at every level
				for (i = c._markers.length - 1; i >= 0; i--) {
					m = c._markers[i];
					if (!exceptBounds || !exceptBounds.contains(m._latlng)) {
						c._group._featureGroup.removeLayer(m);
						if (m.clusterShow) {
							m.clusterShow();
						}
					}
				}
			},
			function (c) {
				//Remove child clusters at just the bottom level
				for (i = c._childClusters.length - 1; i >= 0; i--) {
					m = c._childClusters[i];
					if (!exceptBounds || !exceptBounds.contains(m._latlng)) {
						c._group._featureGroup.removeLayer(m);
						if (m.clusterShow) {
							m.clusterShow();
						}
					}
				}
			}
		);
	},

	//Run the given functions recursively to this and child clusters
	// boundsToApplyTo: a L.LatLngBounds representing the bounds of what clusters to recurse in to
	// zoomLevelToStart: zoom level to start running functions (inclusive)
	// zoomLevelToStop: zoom level to stop running functions (inclusive)
	// runAtEveryLevel: function that takes an L.MarkerCluster as an argument that should be applied on every level
	// runAtBottomLevel: function that takes an L.MarkerCluster as an argument that should be applied at only the bottom level
	_recursively: function (boundsToApplyTo, zoomLevelToStart, zoomLevelToStop, runAtEveryLevel, runAtBottomLevel) {
		var childClusters = this._childClusters,
		    zoom = this._zoom,
		    i, c;

		if (zoomLevelToStart <= zoom) {
			if (runAtEveryLevel) {
				runAtEveryLevel(this);
			}
			if (runAtBottomLevel && zoom === zoomLevelToStop) {
				runAtBottomLevel(this);
			}
		}

		if (zoom < zoomLevelToStart || zoom < zoomLevelToStop) {
			for (i = childClusters.length - 1; i >= 0; i--) {
				c = childClusters[i];
				if (c._boundsNeedUpdate) {
					c._recalculateBounds();
				}
				if (boundsToApplyTo.intersects(c._bounds)) {
					c._recursively(boundsToApplyTo, zoomLevelToStart, zoomLevelToStop, runAtEveryLevel, runAtBottomLevel);
				}
			}
		}
	},

	//Returns true if we are the parent of only one cluster and that cluster is the same as us
	_isSingleParent: function () {
		//Don't need to check this._markers as the rest won't work if there are any
		return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
	}
});

/*
* Extends L.Marker to include two extra methods: clusterHide and clusterShow.
* 
* They work as setOpacity(0) and setOpacity(1) respectively, but
* don't overwrite the options.opacity
* 
*/

L.Marker.include({
	clusterHide: function () {
		var backup = this.options.opacity;
		this.setOpacity(0);
		this.options.opacity = backup;
		return this;
	},
	
	clusterShow: function () {
		return this.setOpacity(this.options.opacity);
	}
});

L.DistanceGrid = function (cellSize) {
	this._cellSize = cellSize;
	this._sqCellSize = cellSize * cellSize;
	this._grid = {};
	this._objectPoint = { };
};

L.DistanceGrid.prototype = {

	addObject: function (obj, point) {
		var x = this._getCoord(point.x),
		    y = this._getCoord(point.y),
		    grid = this._grid,
		    row = grid[y] = grid[y] || {},
		    cell = row[x] = row[x] || [],
		    stamp = L.Util.stamp(obj);

		this._objectPoint[stamp] = point;

		cell.push(obj);
	},

	updateObject: function (obj, point) {
		this.removeObject(obj);
		this.addObject(obj, point);
	},

	//Returns true if the object was found
	removeObject: function (obj, point) {
		var x = this._getCoord(point.x),
		    y = this._getCoord(point.y),
		    grid = this._grid,
		    row = grid[y] = grid[y] || {},
		    cell = row[x] = row[x] || [],
		    i, len;

		delete this._objectPoint[L.Util.stamp(obj)];

		for (i = 0, len = cell.length; i < len; i++) {
			if (cell[i] === obj) {

				cell.splice(i, 1);

				if (len === 1) {
					delete row[x];
				}

				return true;
			}
		}

	},

	eachObject: function (fn, context) {
		var i, j, k, len, row, cell, removed,
		    grid = this._grid;

		for (i in grid) {
			row = grid[i];

			for (j in row) {
				cell = row[j];

				for (k = 0, len = cell.length; k < len; k++) {
					removed = fn.call(context, cell[k]);
					if (removed) {
						k--;
						len--;
					}
				}
			}
		}
	},

	getNearObject: function (point) {
		var x = this._getCoord(point.x),
		    y = this._getCoord(point.y),
		    i, j, k, row, cell, len, obj, dist,
		    objectPoint = this._objectPoint,
		    closestDistSq = this._sqCellSize,
		    closest = null;

		for (i = y - 1; i <= y + 1; i++) {
			row = this._grid[i];
			if (row) {

				for (j = x - 1; j <= x + 1; j++) {
					cell = row[j];
					if (cell) {

						for (k = 0, len = cell.length; k < len; k++) {
							obj = cell[k];
							dist = this._sqDist(objectPoint[L.Util.stamp(obj)], point);
							if (dist < closestDistSq ||
								dist <= closestDistSq && closest === null) {
								closestDistSq = dist;
								closest = obj;
							}
						}
					}
				}
			}
		}
		return closest;
	},

	_getCoord: function (x) {
		var coord = Math.floor(x / this._cellSize);
		return isFinite(coord) ? coord : x;
	},

	_sqDist: function (p, p2) {
		var dx = p2.x - p.x,
		    dy = p2.y - p.y;
		return dx * dx + dy * dy;
	}
};

/* Copyright (c) 2012 the authors listed at the following URL, and/or
the authors of referenced articles or incorporated external code:
http://en.literateprograms.org/Quickhull_(Javascript)?action=history&offset=20120410175256

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Retrieved from: http://en.literateprograms.org/Quickhull_(Javascript)?oldid=18434
*/

(function () {
	L.QuickHull = {

		/*
		 * @param {Object} cpt a point to be measured from the baseline
		 * @param {Array} bl the baseline, as represented by a two-element
		 *   array of latlng objects.
		 * @returns {Number} an approximate distance measure
		 */
		getDistant: function (cpt, bl) {
			var vY = bl[1].lat - bl[0].lat,
				vX = bl[0].lng - bl[1].lng;
			return (vX * (cpt.lat - bl[0].lat) + vY * (cpt.lng - bl[0].lng));
		},

		/*
		 * @param {Array} baseLine a two-element array of latlng objects
		 *   representing the baseline to project from
		 * @param {Array} latLngs an array of latlng objects
		 * @returns {Object} the maximum point and all new points to stay
		 *   in consideration for the hull.
		 */
		findMostDistantPointFromBaseLine: function (baseLine, latLngs) {
			var maxD = 0,
				maxPt = null,
				newPoints = [],
				i, pt, d;

			for (i = latLngs.length - 1; i >= 0; i--) {
				pt = latLngs[i];
				d = this.getDistant(pt, baseLine);

				if (d > 0) {
					newPoints.push(pt);
				} else {
					continue;
				}

				if (d > maxD) {
					maxD = d;
					maxPt = pt;
				}
			}

			return { maxPoint: maxPt, newPoints: newPoints };
		},


		/*
		 * Given a baseline, compute the convex hull of latLngs as an array
		 * of latLngs.
		 *
		 * @param {Array} latLngs
		 * @returns {Array}
		 */
		buildConvexHull: function (baseLine, latLngs) {
			var convexHullBaseLines = [],
				t = this.findMostDistantPointFromBaseLine(baseLine, latLngs);

			if (t.maxPoint) { // if there is still a point "outside" the base line
				convexHullBaseLines =
					convexHullBaseLines.concat(
						this.buildConvexHull([baseLine[0], t.maxPoint], t.newPoints)
					);
				convexHullBaseLines =
					convexHullBaseLines.concat(
						this.buildConvexHull([t.maxPoint, baseLine[1]], t.newPoints)
					);
				return convexHullBaseLines;
			} else {  // if there is no more point "outside" the base line, the current base line is part of the convex hull
				return [baseLine[0]];
			}
		},

		/*
		 * Given an array of latlngs, compute a convex hull as an array
		 * of latlngs
		 *
		 * @param {Array} latLngs
		 * @returns {Array}
		 */
		getConvexHull: function (latLngs) {
			// find first baseline
			var maxLat = false, minLat = false,
				maxLng = false, minLng = false,
				maxLatPt = null, minLatPt = null,
				maxLngPt = null, minLngPt = null,
				maxPt = null, minPt = null,
				i;

			for (i = latLngs.length - 1; i >= 0; i--) {
				var pt = latLngs[i];
				if (maxLat === false || pt.lat > maxLat) {
					maxLatPt = pt;
					maxLat = pt.lat;
				}
				if (minLat === false || pt.lat < minLat) {
					minLatPt = pt;
					minLat = pt.lat;
				}
				if (maxLng === false || pt.lng > maxLng) {
					maxLngPt = pt;
					maxLng = pt.lng;
				}
				if (minLng === false || pt.lng < minLng) {
					minLngPt = pt;
					minLng = pt.lng;
				}
			}
			
			if (minLat !== maxLat) {
				minPt = minLatPt;
				maxPt = maxLatPt;
			} else {
				minPt = minLngPt;
				maxPt = maxLngPt;
			}

			var ch = [].concat(this.buildConvexHull([minPt, maxPt], latLngs),
								this.buildConvexHull([maxPt, minPt], latLngs));
			return ch;
		}
	};
}());

L.MarkerCluster.include({
	getConvexHull: function () {
		var childMarkers = this.getAllChildMarkers(),
			points = [],
			p, i;

		for (i = childMarkers.length - 1; i >= 0; i--) {
			p = childMarkers[i].getLatLng();
			points.push(p);
		}

		return L.QuickHull.getConvexHull(points);
	}
});

//This code is 100% based on https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet
//Huge thanks to jawj for implementing it first to make my job easy :-)

L.MarkerCluster.include({

	_2PI: Math.PI * 2,
	_circleFootSeparation: 25, //related to circumference of circle
	_circleStartAngle: 0,

	_spiralFootSeparation:  28, //related to size of spiral (experiment!)
	_spiralLengthStart: 11,
	_spiralLengthFactor: 5,

	_circleSpiralSwitchover: 9, //show spiral instead of circle from this marker count upwards.
								// 0 -> always spiral; Infinity -> always circle

	spiderfy: function () {
		if (this._group._spiderfied === this || this._group._inZoomAnimation) {
			return;
		}

		var childMarkers = this.getAllChildMarkers(null, true),
			group = this._group,
			map = group._map,
			center = map.latLngToLayerPoint(this._latlng),
			positions;

		this._group._unspiderfy();
		this._group._spiderfied = this;

		//TODO Maybe: childMarkers order by distance to center

		if (childMarkers.length >= this._circleSpiralSwitchover) {
			positions = this._generatePointsSpiral(childMarkers.length, center);
		} else {
			center.y += 10; // Otherwise circles look wrong => hack for standard blue icon, renders differently for other icons.
			positions = this._generatePointsCircle(childMarkers.length, center);
		}

		this._animationSpiderfy(childMarkers, positions);
	},

	unspiderfy: function (zoomDetails) {
		/// <param Name="zoomDetails">Argument from zoomanim if being called in a zoom animation or null otherwise</param>
		if (this._group._inZoomAnimation) {
			return;
		}
		this._animationUnspiderfy(zoomDetails);

		this._group._spiderfied = null;
	},

	_generatePointsCircle: function (count, centerPt) {
		var circumference = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + count),
			legLength = circumference / this._2PI,  //radius from circumference
			angleStep = this._2PI / count,
			res = [],
			i, angle;

		legLength = Math.max(legLength, 35); // Minimum distance to get outside the cluster icon.

		res.length = count;

		for (i = 0; i < count; i++) { // Clockwise, like spiral.
			angle = this._circleStartAngle + i * angleStep;
			res[i] = new L.Point(centerPt.x + legLength * Math.cos(angle), centerPt.y + legLength * Math.sin(angle))._round();
		}

		return res;
	},

	_generatePointsSpiral: function (count, centerPt) {
		var spiderfyDistanceMultiplier = this._group.options.spiderfyDistanceMultiplier,
			legLength = spiderfyDistanceMultiplier * this._spiralLengthStart,
			separation = spiderfyDistanceMultiplier * this._spiralFootSeparation,
			lengthFactor = spiderfyDistanceMultiplier * this._spiralLengthFactor * this._2PI,
			angle = 0,
			res = [],
			i;

		res.length = count;

		// Higher index, closer position to cluster center.
		for (i = count; i >= 0; i--) {
			// Skip the first position, so that we are already farther from center and we avoid
			// being under the default cluster icon (especially important for Circle Markers).
			if (i < count) {
				res[i] = new L.Point(centerPt.x + legLength * Math.cos(angle), centerPt.y + legLength * Math.sin(angle))._round();
			}
			angle += separation / legLength + i * 0.0005;
			legLength += lengthFactor / angle;
		}
		return res;
	},

	_noanimationUnspiderfy: function () {
		var group = this._group,
			map = group._map,
			fg = group._featureGroup,
			childMarkers = this.getAllChildMarkers(null, true),
			m, i;

		group._ignoreMove = true;

		this.setOpacity(1);
		for (i = childMarkers.length - 1; i >= 0; i--) {
			m = childMarkers[i];

			fg.removeLayer(m);

			if (m._preSpiderfyLatlng) {
				m.setLatLng(m._preSpiderfyLatlng);
				delete m._preSpiderfyLatlng;
			}
			if (m.setZIndexOffset) {
				m.setZIndexOffset(0);
			}

			if (m._spiderLeg) {
				map.removeLayer(m._spiderLeg);
				delete m._spiderLeg;
			}
		}

		group.fire('unspiderfied', {
			cluster: this,
			markers: childMarkers
		});
		group._ignoreMove = false;
		group._spiderfied = null;
	}
});

//Non Animated versions of everything
L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
	_animationSpiderfy: function (childMarkers, positions) {
		var group = this._group,
			map = group._map,
			fg = group._featureGroup,
			legOptions = this._group.options.spiderLegPolylineOptions,
			i, m, leg, newPos;

		group._ignoreMove = true;

		// Traverse in ascending order to make sure that inner circleMarkers are on top of further legs. Normal markers are re-ordered by newPosition.
		// The reverse order trick no longer improves performance on modern browsers.
		for (i = 0; i < childMarkers.length; i++) {
			newPos = map.layerPointToLatLng(positions[i]);
			m = childMarkers[i];

			// Add the leg before the marker, so that in case the latter is a circleMarker, the leg is behind it.
			leg = new L.Polyline([this._latlng, newPos], legOptions);
			map.addLayer(leg);
			m._spiderLeg = leg;

			// Now add the marker.
			m._preSpiderfyLatlng = m._latlng;
			m.setLatLng(newPos);
			if (m.setZIndexOffset) {
				m.setZIndexOffset(1000000); //Make these appear on top of EVERYTHING
			}

			fg.addLayer(m);
		}
		this.setOpacity(0.3);

		group._ignoreMove = false;
		group.fire('spiderfied', {
			cluster: this,
			markers: childMarkers
		});
	},

	_animationUnspiderfy: function () {
		this._noanimationUnspiderfy();
	}
});

//Animated versions here
L.MarkerCluster.include({

	_animationSpiderfy: function (childMarkers, positions) {
		var me = this,
			group = this._group,
			map = group._map,
			fg = group._featureGroup,
			thisLayerLatLng = this._latlng,
			thisLayerPos = map.latLngToLayerPoint(thisLayerLatLng),
			svg = L.Path.SVG,
			legOptions = L.extend({}, this._group.options.spiderLegPolylineOptions), // Copy the options so that we can modify them for animation.
			finalLegOpacity = legOptions.opacity,
			i, m, leg, legPath, legLength, newPos;

		if (finalLegOpacity === undefined) {
			finalLegOpacity = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity;
		}

		if (svg) {
			// If the initial opacity of the spider leg is not 0 then it appears before the animation starts.
			legOptions.opacity = 0;

			// Add the class for CSS transitions.
			legOptions.className = (legOptions.className || '') + ' leaflet-cluster-spider-leg';
		} else {
			// Make sure we have a defined opacity.
			legOptions.opacity = finalLegOpacity;
		}

		group._ignoreMove = true;

		// Add markers and spider legs to map, hidden at our center point.
		// Traverse in ascending order to make sure that inner circleMarkers are on top of further legs. Normal markers are re-ordered by newPosition.
		// The reverse order trick no longer improves performance on modern browsers.
		for (i = 0; i < childMarkers.length; i++) {
			m = childMarkers[i];

			newPos = map.layerPointToLatLng(positions[i]);

			// Add the leg before the marker, so that in case the latter is a circleMarker, the leg is behind it.
			leg = new L.Polyline([thisLayerLatLng, newPos], legOptions);
			map.addLayer(leg);
			m._spiderLeg = leg;

			// Explanations: https://jakearchibald.com/2013/animated-line-drawing-svg/
			// In our case the transition property is declared in the CSS file.
			if (svg) {
				legPath = leg._path;
				legLength = legPath.getTotalLength() + 0.1; // Need a small extra length to avoid remaining dot in Firefox.
				legPath.style.strokeDasharray = legLength; // Just 1 length is enough, it will be duplicated.
				legPath.style.strokeDashoffset = legLength;
			}

			// If it is a marker, add it now and we'll animate it out
			if (m.setZIndexOffset) {
				m.setZIndexOffset(1000000); // Make normal markers appear on top of EVERYTHING
			}
			if (m.clusterHide) {
				m.clusterHide();
			}
			
			// Vectors just get immediately added
			fg.addLayer(m);

			if (m._setPos) {
				m._setPos(thisLayerPos);
			}
		}

		group._forceLayout();
		group._animationStart();

		// Reveal markers and spider legs.
		for (i = childMarkers.length - 1; i >= 0; i--) {
			newPos = map.layerPointToLatLng(positions[i]);
			m = childMarkers[i];

			//Move marker to new position
			m._preSpiderfyLatlng = m._latlng;
			m.setLatLng(newPos);
			
			if (m.clusterShow) {
				m.clusterShow();
			}

			// Animate leg (animation is actually delegated to CSS transition).
			if (svg) {
				leg = m._spiderLeg;
				legPath = leg._path;
				legPath.style.strokeDashoffset = 0;
				//legPath.style.strokeOpacity = finalLegOpacity;
				leg.setStyle({opacity: finalLegOpacity});
			}
		}
		this.setOpacity(0.3);

		group._ignoreMove = false;

		setTimeout(function () {
			group._animationEnd();
			group.fire('spiderfied', {
				cluster: me,
				markers: childMarkers
			});
		}, 200);
	},

	_animationUnspiderfy: function (zoomDetails) {
		var me = this,
			group = this._group,
			map = group._map,
			fg = group._featureGroup,
			thisLayerPos = zoomDetails ? map._latLngToNewLayerPoint(this._latlng, zoomDetails.zoom, zoomDetails.center) : map.latLngToLayerPoint(this._latlng),
			childMarkers = this.getAllChildMarkers(null, true),
			svg = L.Path.SVG,
			m, i, leg, legPath, legLength, nonAnimatable;

		group._ignoreMove = true;
		group._animationStart();

		//Make us visible and bring the child markers back in
		this.setOpacity(1);
		for (i = childMarkers.length - 1; i >= 0; i--) {
			m = childMarkers[i];

			//Marker was added to us after we were spiderfied
			if (!m._preSpiderfyLatlng) {
				continue;
			}

			//Close any popup on the marker first, otherwise setting the location of the marker will make the map scroll
			m.closePopup();

			//Fix up the location to the real one
			m.setLatLng(m._preSpiderfyLatlng);
			delete m._preSpiderfyLatlng;

			//Hack override the location to be our center
			nonAnimatable = true;
			if (m._setPos) {
				m._setPos(thisLayerPos);
				nonAnimatable = false;
			}
			if (m.clusterHide) {
				m.clusterHide();
				nonAnimatable = false;
			}
			if (nonAnimatable) {
				fg.removeLayer(m);
			}

			// Animate the spider leg back in (animation is actually delegated to CSS transition).
			if (svg) {
				leg = m._spiderLeg;
				legPath = leg._path;
				legLength = legPath.getTotalLength() + 0.1;
				legPath.style.strokeDashoffset = legLength;
				leg.setStyle({opacity: 0});
			}
		}

		group._ignoreMove = false;

		setTimeout(function () {
			//If we have only <= one child left then that marker will be shown on the map so don't remove it!
			var stillThereChildCount = 0;
			for (i = childMarkers.length - 1; i >= 0; i--) {
				m = childMarkers[i];
				if (m._spiderLeg) {
					stillThereChildCount++;
				}
			}


			for (i = childMarkers.length - 1; i >= 0; i--) {
				m = childMarkers[i];

				if (!m._spiderLeg) { //Has already been unspiderfied
					continue;
				}

				if (m.clusterShow) {
					m.clusterShow();
				}
				if (m.setZIndexOffset) {
					m.setZIndexOffset(0);
				}

				if (stillThereChildCount > 1) {
					fg.removeLayer(m);
				}

				map.removeLayer(m._spiderLeg);
				delete m._spiderLeg;
			}
			group._animationEnd();
			group.fire('unspiderfied', {
				cluster: me,
				markers: childMarkers
			});
		}, 200);
	}
});


L.MarkerClusterGroup.include({
	//The MarkerCluster currently spiderfied (if any)
	_spiderfied: null,

	unspiderfy: function () {
		this._unspiderfy.apply(this, arguments);
	},

	_spiderfierOnAdd: function () {
		this._map.on('click', this._unspiderfyWrapper, this);

		if (this._map.options.zoomAnimation) {
			this._map.on('zoomstart', this._unspiderfyZoomStart, this);
		}
		//Browsers without zoomAnimation or a big zoom don't fire zoomstart
		this._map.on('zoomend', this._noanimationUnspiderfy, this);

		if (!L.Browser.touch) {
			this._map.getRenderer(this);
			//Needs to happen in the pageload, not after, or animations don't work in webkit
			//  http://stackoverflow.com/questions/8455200/svg-animate-with-dynamically-added-elements
			//Disable on touch browsers as the animation messes up on a touch zoom and isn't very noticable
		}
	},

	_spiderfierOnRemove: function () {
		this._map.off('click', this._unspiderfyWrapper, this);
		this._map.off('zoomstart', this._unspiderfyZoomStart, this);
		this._map.off('zoomanim', this._unspiderfyZoomAnim, this);
		this._map.off('zoomend', this._noanimationUnspiderfy, this);

		//Ensure that markers are back where they should be
		// Use no animation to avoid a sticky leaflet-cluster-anim class on mapPane
		this._noanimationUnspiderfy();
	},

	//On zoom start we add a zoomanim handler so that we are guaranteed to be last (after markers are animated)
	//This means we can define the animation they do rather than Markers doing an animation to their actual location
	_unspiderfyZoomStart: function () {
		if (!this._map) { //May have been removed from the map by a zoomEnd handler
			return;
		}

		this._map.on('zoomanim', this._unspiderfyZoomAnim, this);
	},

	_unspiderfyZoomAnim: function (zoomDetails) {
		//Wait until the first zoomanim after the user has finished touch-zooming before running the animation
		if (L.DomUtil.hasClass(this._map._mapPane, 'leaflet-touching')) {
			return;
		}

		this._map.off('zoomanim', this._unspiderfyZoomAnim, this);
		this._unspiderfy(zoomDetails);
	},

	_unspiderfyWrapper: function () {
		/// <summary>_unspiderfy but passes no arguments</summary>
		this._unspiderfy();
	},

	_unspiderfy: function (zoomDetails) {
		if (this._spiderfied) {
			this._spiderfied.unspiderfy(zoomDetails);
		}
	},

	_noanimationUnspiderfy: function () {
		if (this._spiderfied) {
			this._spiderfied._noanimationUnspiderfy();
		}
	},

	//If the given layer is currently being spiderfied then we unspiderfy it so it isn't on the map anymore etc
	_unspiderfyLayer: function (layer) {
		if (layer._spiderLeg) {
			this._featureGroup.removeLayer(layer);

			if (layer.clusterShow) {
				layer.clusterShow();
			}
				//Position will be fixed up immediately in _animationUnspiderfy
			if (layer.setZIndexOffset) {
				layer.setZIndexOffset(0);
			}

			this._map.removeLayer(layer._spiderLeg);
			delete layer._spiderLeg;
		}
	}
});

/**
 * Adds 1 public method to MCG and 1 to L.Marker to facilitate changing
 * markers' icon options and refreshing their icon and their parent clusters
 * accordingly (case where their iconCreateFunction uses data of childMarkers
 * to make up the cluster icon).
 */


L.MarkerClusterGroup.include({
	/**
	 * Updates the icon of all clusters which are parents of the given marker(s).
	 * In singleMarkerMode, also updates the given marker(s) icon.
	 * @param layers L.MarkerClusterGroup|L.LayerGroup|Array(L.Marker)|Map(L.Marker)|
	 * L.MarkerCluster|L.Marker (optional) list of markers (or single marker) whose parent
	 * clusters need to be updated. If not provided, retrieves all child markers of this.
	 * @returns {L.MarkerClusterGroup}
	 */
	refreshClusters: function (layers) {
		if (!layers) {
			layers = this._topClusterLevel.getAllChildMarkers();
		} else if (layers instanceof L.MarkerClusterGroup) {
			layers = layers._topClusterLevel.getAllChildMarkers();
		} else if (layers instanceof L.LayerGroup) {
			layers = layers._layers;
		} else if (layers instanceof L.MarkerCluster) {
			layers = layers.getAllChildMarkers();
		} else if (layers instanceof L.Marker) {
			layers = [layers];
		} // else: must be an Array(L.Marker)|Map(L.Marker)
		this._flagParentsIconsNeedUpdate(layers);
		this._refreshClustersIcons();

		// In case of singleMarkerMode, also re-draw the markers.
		if (this.options.singleMarkerMode) {
			this._refreshSingleMarkerModeMarkers(layers);
		}

		return this;
	},

	/**
	 * Simply flags all parent clusters of the given markers as having a "dirty" icon.
	 * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
	 * @private
	 */
	_flagParentsIconsNeedUpdate: function (layers) {
		var id, parent;

		// Assumes layers is an Array or an Object whose prototype is non-enumerable.
		for (id in layers) {
			// Flag parent clusters' icon as "dirty", all the way up.
			// Dumb process that flags multiple times upper parents, but still
			// much more efficient than trying to be smart and make short lists,
			// at least in the case of a hierarchy following a power law:
			// http://jsperf.com/flag-nodes-in-power-hierarchy/2
			parent = layers[id].__parent;
			while (parent) {
				parent._iconNeedsUpdate = true;
				parent = parent.__parent;
			}
		}
	},

	/**
	 * Re-draws the icon of the supplied markers.
	 * To be used in singleMarkerMode only.
	 * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
	 * @private
	 */
	_refreshSingleMarkerModeMarkers: function (layers) {
		var id, layer;

		for (id in layers) {
			layer = layers[id];

			// Make sure we do not override markers that do not belong to THIS group.
			if (this.hasLayer(layer)) {
				// Need to re-create the icon first, then re-draw the marker.
				layer.setIcon(this._overrideMarkerIcon(layer));
			}
		}
	}
});

L.Marker.include({
	/**
	 * Updates the given options in the marker's icon and refreshes the marker.
	 * @param options map object of icon options.
	 * @param directlyRefreshClusters boolean (optional) true to trigger
	 * MCG.refreshClustersOf() right away with this single marker.
	 * @returns {L.Marker}
	 */
	refreshIconOptions: function (options, directlyRefreshClusters) {
		var icon = this.options.icon;

		L.setOptions(icon, options);

		this.setIcon(icon);

		// Shortcut to refresh the associated MCG clusters right away.
		// To be used when refreshing a single marker.
		// Otherwise, better use MCG.refreshClusters() once at the end with
		// the list of modified markers.
		if (directlyRefreshClusters && this.__parent) {
			this.__parent._group.refreshClusters(this);
		}

		return this;
	}
});

exports.MarkerClusterGroup = MarkerClusterGroup;
exports.MarkerCluster = MarkerCluster;

})));
//# sourceMappingURL=leaflet.markercluster-src.js.map
;
/*
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e.Leaflet = e.Leaflet || {},
        e.Leaflet.markercluster = e.Leaflet.markercluster || {}))
}(this, function (e) {
    "use strict";
    var t = L.MarkerClusterGroup = L.FeatureGroup.extend({
        options: {
            maxClusterRadius: 80,
            iconCreateFunction: null,
            clusterPane: L.Marker.prototype.options.pane,
            spiderfyOnMaxZoom: !0,
            showCoverageOnHover: !0,
            zoomToBoundsOnClick: !0,
            singleMarkerMode: !1,
            disableClusteringAtZoom: null,
            removeOutsideVisibleBounds: !0,
            animate: !0,
            animateAddingMarkers: !1,
            spiderfyDistanceMultiplier: 1,
            spiderLegPolylineOptions: {
                weight: 1.5,
                color: "#222",
                opacity: .5
            },
            chunkedLoading: !1,
            chunkInterval: 200,
            chunkDelay: 50,
            chunkProgress: null,
            polygonOptions: {}
        },
        initialize: function (e) {
            L.Util.setOptions(this, e),
                this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction),
                this._featureGroup = L.featureGroup(),
                this._featureGroup.addEventParent(this),
                this._nonPointGroup = L.featureGroup(),
                this._nonPointGroup.addEventParent(this),
                this._inZoomAnimation = 0,
                this._needsClustering = [],
                this._needsRemoving = [],
                this._currentShownBounds = null,
                this._queue = [],
                this._childMarkerEventHandlers = {
                    dragstart: this._childMarkerDragStart,
                    move: this._childMarkerMoved,
                    dragend: this._childMarkerDragEnd
                };
            var t = L.DomUtil.TRANSITION && this.options.animate;
            L.extend(this, t ? this._withAnimation : this._noAnimation),
                this._markerCluster = t ? L.MarkerCluster : L.MarkerClusterNonAnimated
        },
        addLayer: function (e) {
            if (e instanceof L.LayerGroup)
                return this.addLayers([e]);
            if (!e.getLatLng)
                return this._nonPointGroup.addLayer(e),
                    this.fire("layeradd", {
                        layer: e
                    }),
                    this;
            if (!this._map)
                return this._needsClustering.push(e),
                    this.fire("layeradd", {
                        layer: e
                    }),
                    this;
            if (this.hasLayer(e))
                return this;
            this._unspiderfy && this._unspiderfy(),
                this._addLayer(e, this._maxZoom),
                this.fire("layeradd", {
                    layer: e
                }),
                this._topClusterLevel._recalculateBounds(),
                this._refreshClustersIcons();
            var t = e
                , i = this._zoom;
            if (e.__parent)
                for (; t.__parent._zoom >= i;)
                    t = t.__parent;
            return this._currentShownBounds.contains(t.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(e, t) : this._animationAddLayerNonAnimated(e, t)),
                this
        },
        removeLayer: function (e) {
            return e instanceof L.LayerGroup ? this.removeLayers([e]) : e.getLatLng ? this._map ? e.__parent ? (this._unspiderfy && (this._unspiderfy(),
                this._unspiderfyLayer(e)),
                this._removeLayer(e, !0),
                this.fire("layerremove", {
                    layer: e
                }),
                this._topClusterLevel._recalculateBounds(),
                this._refreshClustersIcons(),
                e.off(this._childMarkerEventHandlers, this),
                this._featureGroup.hasLayer(e) && (this._featureGroup.removeLayer(e),
                    e.clusterShow && e.clusterShow()),
                this) : this : (!this._arraySplice(this._needsClustering, e) && this.hasLayer(e) && this._needsRemoving.push({
                    layer: e,
                    latlng: e._latlng
                }),
                    this.fire("layerremove", {
                        layer: e
                    }),
                    this) : (this._nonPointGroup.removeLayer(e),
                        this.fire("layerremove", {
                            layer: e
                        }),
                        this)
        },
        addLayers: function (e, t) {
            if (!L.Util.isArray(e))
                return this.addLayer(e);
            var i, n = this._featureGroup, r = this._nonPointGroup, s = this.options.chunkedLoading, o = this.options.chunkInterval, a = this.options.chunkProgress, h = e.length, l = 0, u = !0;
            if (this._map) {
                var _ = (new Date).getTime()
                    , d = L.bind(function () {
                        for (var c = (new Date).getTime(); h > l; l++) {
                            if (s && 0 === l % 200) {
                                var p = (new Date).getTime() - c;
                                if (p > o)
                                    break
                            }
                            if (i = e[l],
                                i instanceof L.LayerGroup)
                                u && (e = e.slice(),
                                    u = !1),
                                    this._extractNonGroupLayers(i, e),
                                    h = e.length;
                            else if (i.getLatLng) {
                                if (!this.hasLayer(i) && (this._addLayer(i, this._maxZoom),
                                    t || this.fire("layeradd", {
                                        layer: i
                                    }),
                                    i.__parent && 2 === i.__parent.getChildCount())) {
                                    var f = i.__parent.getAllChildMarkers()
                                        , m = f[0] === i ? f[1] : f[0];
                                    n.removeLayer(m)
                                }
                            } else
                                r.addLayer(i),
                                    t || this.fire("layeradd", {
                                        layer: i
                                    })
                        }
                        a && a(l, h, (new Date).getTime() - _),
                            l === h ? (this._topClusterLevel._recalculateBounds(),
                                this._refreshClustersIcons(),
                                this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(d, this.options.chunkDelay)
                    }, this);
                d()
            } else
                for (var c = this._needsClustering; h > l; l++)
                    i = e[l],
                        i instanceof L.LayerGroup ? (u && (e = e.slice(),
                            u = !1),
                            this._extractNonGroupLayers(i, e),
                            h = e.length) : i.getLatLng ? this.hasLayer(i) || c.push(i) : r.addLayer(i);
            return this
        },
        removeLayers: function (e) {
            var t, i, n = e.length, r = this._featureGroup, s = this._nonPointGroup, o = !0;
            if (!this._map) {
                for (t = 0; n > t; t++)
                    i = e[t],
                        i instanceof L.LayerGroup ? (o && (e = e.slice(),
                            o = !1),
                            this._extractNonGroupLayers(i, e),
                            n = e.length) : (this._arraySplice(this._needsClustering, i),
                                s.removeLayer(i),
                                this.hasLayer(i) && this._needsRemoving.push({
                                    layer: i,
                                    latlng: i._latlng
                                }),
                                this.fire("layerremove", {
                                    layer: i
                                }));
                return this
            }
            if (this._unspiderfy) {
                this._unspiderfy();
                var a = e.slice()
                    , h = n;
                for (t = 0; h > t; t++)
                    i = a[t],
                        i instanceof L.LayerGroup ? (this._extractNonGroupLayers(i, a),
                            h = a.length) : this._unspiderfyLayer(i)
            }
            for (t = 0; n > t; t++)
                i = e[t],
                    i instanceof L.LayerGroup ? (o && (e = e.slice(),
                        o = !1),
                        this._extractNonGroupLayers(i, e),
                        n = e.length) : i.__parent ? (this._removeLayer(i, !0, !0),
                            this.fire("layerremove", {
                                layer: i
                            }),
                            r.hasLayer(i) && (r.removeLayer(i),
                                i.clusterShow && i.clusterShow())) : (s.removeLayer(i),
                                    this.fire("layerremove", {
                                        layer: i
                                    }));
            return this._topClusterLevel._recalculateBounds(),
                this._refreshClustersIcons(),
                this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds),
                this
        },
        clearLayers: function () {
            return this._map || (this._needsClustering = [],
                this._needsRemoving = [],
                delete this._gridClusters,
                delete this._gridUnclustered),
                this._noanimationUnspiderfy && this._noanimationUnspiderfy(),
                this._featureGroup.clearLayers(),
                this._nonPointGroup.clearLayers(),
                this.eachLayer(function (e) {
                    e.off(this._childMarkerEventHandlers, this),
                        delete e.__parent
                }, this),
                this._map && this._generateInitialClusters(),
                this
        },
        getBounds: function () {
            var e = new L.LatLngBounds;
            this._topClusterLevel && e.extend(this._topClusterLevel._bounds);
            for (var t = this._needsClustering.length - 1; t >= 0; t--)
                e.extend(this._needsClustering[t].getLatLng());
            return e.extend(this._nonPointGroup.getBounds()),
                e
        },
        eachLayer: function (e, t) {
            var i, n, r, s = this._needsClustering.slice(), o = this._needsRemoving;
            for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(s),
                n = s.length - 1; n >= 0; n--) {
                for (i = !0,
                    r = o.length - 1; r >= 0; r--)
                    if (o[r].layer === s[n]) {
                        i = !1;
                        break
                    }
                i && e.call(t, s[n])
            }
            this._nonPointGroup.eachLayer(e, t)
        },
        getLayers: function () {
            var e = [];
            return this.eachLayer(function (t) {
                e.push(t)
            }),
                e
        },
        getLayer: function (e) {
            var t = null;
            return e = parseInt(e, 10),
                this.eachLayer(function (i) {
                    L.stamp(i) === e && (t = i)
                }),
                t
        },
        hasLayer: function (e) {
            if (!e)
                return !1;
            var t, i = this._needsClustering;
            for (t = i.length - 1; t >= 0; t--)
                if (i[t] === e)
                    return !0;
            for (i = this._needsRemoving,
                t = i.length - 1; t >= 0; t--)
                if (i[t].layer === e)
                    return !1;
            return !(!e.__parent || e.__parent._group !== this) || this._nonPointGroup.hasLayer(e)
        },
        zoomToShowLayer: function (e, t) {
            "function" != typeof t && (t = function () { }
            );
            var i = function () {
                !e._icon && !e.__parent._icon || this._inZoomAnimation || (this._map.off("moveend", i, this),
                    this.off("animationend", i, this),
                    e._icon ? t() : e.__parent._icon && (this.once("spiderfied", t, this),
                        e.__parent.spiderfy()))
            };
            e._icon && this._map.getBounds().contains(e.getLatLng()) ? t() : e.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", i, this),
                this._map.panTo(e.getLatLng())) : (this._map.on("moveend", i, this),
                    this.on("animationend", i, this),
                    e.__parent.zoomToBounds())
        },
        onAdd: function (e) {
            this._map = e;
            var t, i, n;
            if (!isFinite(this._map.getMaxZoom()))
                throw "Map has no maxZoom specified";
            for (this._featureGroup.addTo(e),
                this._nonPointGroup.addTo(e),
                this._gridClusters || this._generateInitialClusters(),
                this._maxLat = e.options.crs.projection.MAX_LATITUDE,
                t = 0,
                i = this._needsRemoving.length; i > t; t++)
                n = this._needsRemoving[t],
                    n.newlatlng = n.layer._latlng,
                    n.layer._latlng = n.latlng;
            for (t = 0,
                i = this._needsRemoving.length; i > t; t++)
                n = this._needsRemoving[t],
                    this._removeLayer(n.layer, !0),
                    n.layer._latlng = n.newlatlng;
            this._needsRemoving = [],
                this._zoom = Math.round(this._map._zoom),
                this._currentShownBounds = this._getExpandedVisibleBounds(),
                this._map.on("zoomend", this._zoomEnd, this),
                this._map.on("moveend", this._moveEnd, this),
                this._spiderfierOnAdd && this._spiderfierOnAdd(),
                this._bindEvents(),
                i = this._needsClustering,
                this._needsClustering = [],
                this.addLayers(i, !0)
        },
        onRemove: function (e) {
            e.off("zoomend", this._zoomEnd, this),
                e.off("moveend", this._moveEnd, this),
                this._unbindEvents(),
                this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""),
                this._spiderfierOnRemove && this._spiderfierOnRemove(),
                delete this._maxLat,
                this._hideCoverage(),
                this._featureGroup.remove(),
                this._nonPointGroup.remove(),
                this._featureGroup.clearLayers(),
                this._map = null
        },
        getVisibleParent: function (e) {
            for (var t = e; t && !t._icon;)
                t = t.__parent;
            return t || null
        },
        _arraySplice: function (e, t) {
            for (var i = e.length - 1; i >= 0; i--)
                if (e[i] === t)
                    return e.splice(i, 1),
                        !0
        },
        _removeFromGridUnclustered: function (e, t) {
            for (var i = this._map, n = this._gridUnclustered, r = Math.floor(this._map.getMinZoom()); t >= r && n[t].removeObject(e, i.project(e.getLatLng(), t)); t--)
                ;
        },
        _childMarkerDragStart: function (e) {
            e.target.__dragStart = e.target._latlng
        },
        _childMarkerMoved: function (e) {
            if (!this._ignoreMove && !e.target.__dragStart) {
                var t = e.target._popup && e.target._popup.isOpen();
                this._moveChild(e.target, e.oldLatLng, e.latlng),
                    t && e.target.openPopup()
            }
        },
        _moveChild: function (e, t, i) {
            e._latlng = t,
                this.removeLayer(e),
                e._latlng = i,
                this.addLayer(e)
        },
        _childMarkerDragEnd: function (e) {
            var t = e.target.__dragStart;
            delete e.target.__dragStart,
                t && this._moveChild(e.target, t, e.target._latlng)
        },
        _removeLayer: function (e, t, i) {
            var n = this._gridClusters
                , r = this._gridUnclustered
                , s = this._featureGroup
                , o = this._map
                , a = Math.floor(this._map.getMinZoom());
            t && this._removeFromGridUnclustered(e, this._maxZoom);
            var h, l = e.__parent, u = l._markers;
            for (this._arraySplice(u, e); l && (l._childCount-- ,
                l._boundsNeedUpdate = !0,
                !(l._zoom < a));)
                t && l._childCount <= 1 ? (h = l._markers[0] === e ? l._markers[1] : l._markers[0],
                    n[l._zoom].removeObject(l, o.project(l._cLatLng, l._zoom)),
                    r[l._zoom].addObject(h, o.project(h.getLatLng(), l._zoom)),
                    this._arraySplice(l.__parent._childClusters, l),
                    l.__parent._markers.push(h),
                    h.__parent = l.__parent,
                    l._icon && (s.removeLayer(l),
                        i || s.addLayer(h))) : l._iconNeedsUpdate = !0,
                    l = l.__parent;
            delete e.__parent
        },
        _isOrIsParent: function (e, t) {
            for (; t;) {
                if (e === t)
                    return !0;
                t = t.parentNode
            }
            return !1
        },
        fire: function (e, t, i) {
            if (t && t.layer instanceof L.MarkerCluster) {
                if (t.originalEvent && this._isOrIsParent(t.layer._icon, t.originalEvent.relatedTarget))
                    return;
                e = "cluster" + e
            }
            L.FeatureGroup.prototype.fire.call(this, e, t, i)
        },
        listens: function (e, t) {
            return L.FeatureGroup.prototype.listens.call(this, e, t) || L.FeatureGroup.prototype.listens.call(this, "cluster" + e, t)
        },
        _defaultIconCreateFunction: function (e) {
            var t = e.getChildCount()
                , i = " marker-cluster-";
            return i += 10 > t ? "small" : 100 > t ? "medium" : "large",
                new L.DivIcon({
                    html: "<div><span>" + t + "</span></div>",
                    className: "marker-cluster" + i,
                    iconSize: new L.Point(40, 40)
                })
        },
        _bindEvents: function () {
            var e = this._map
                , t = this.options.spiderfyOnMaxZoom
                , i = this.options.showCoverageOnHover
                , n = this.options.zoomToBoundsOnClick;
            (t || n) && this.on("clusterclick", this._zoomOrSpiderfy, this),
                i && (this.on("clustermouseover", this._showCoverage, this),
                    this.on("clustermouseout", this._hideCoverage, this),
                    e.on("zoomend", this._hideCoverage, this))
        },
        _zoomOrSpiderfy: function (e) {
            for (var t = e.layer, i = t; 1 === i._childClusters.length;)
                i = i._childClusters[0];
            i._zoom === this._maxZoom && i._childCount === t._childCount && this.options.spiderfyOnMaxZoom ? t.spiderfy() : this.options.zoomToBoundsOnClick && t.zoomToBounds(),
                e.originalEvent && 13 === e.originalEvent.keyCode && this._map._container.focus()
        },
        _showCoverage: function (e) {
            var t = this._map;
            this._inZoomAnimation || (this._shownPolygon && t.removeLayer(this._shownPolygon),
                e.layer.getChildCount() > 2 && e.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(e.layer.getConvexHull(), this.options.polygonOptions),
                    t.addLayer(this._shownPolygon)))
        },
        _hideCoverage: function () {
            this._shownPolygon && (this._map.removeLayer(this._shownPolygon),
                this._shownPolygon = null)
        },
        _unbindEvents: function () {
            var e = this.options.spiderfyOnMaxZoom
                , t = this.options.showCoverageOnHover
                , i = this.options.zoomToBoundsOnClick
                , n = this._map;
            (e || i) && this.off("clusterclick", this._zoomOrSpiderfy, this),
                t && (this.off("clustermouseover", this._showCoverage, this),
                    this.off("clustermouseout", this._hideCoverage, this),
                    n.off("zoomend", this._hideCoverage, this))
        },
        _zoomEnd: function () {
            this._map && (this._mergeSplitClusters(),
                this._zoom = Math.round(this._map._zoom),
                this._currentShownBounds = this._getExpandedVisibleBounds())
        },
        _moveEnd: function () {
            if (!this._inZoomAnimation) {
                var e = this._getExpandedVisibleBounds();
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, e),
                    this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), e),
                    this._currentShownBounds = e
            }
        },
        _generateInitialClusters: function () {
            var e = Math.ceil(this._map.getMaxZoom())
                , t = Math.floor(this._map.getMinZoom())
                , i = this.options.maxClusterRadius
                , n = i;
            "function" != typeof i && (n = function () {
                return i
            }
            ),
                null !== this.options.disableClusteringAtZoom && (e = this.options.disableClusteringAtZoom - 1),
                this._maxZoom = e,
                this._gridClusters = {},
                this._gridUnclustered = {};
            for (var r = e; r >= t; r--)
                this._gridClusters[r] = new L.DistanceGrid(n(r)),
                    this._gridUnclustered[r] = new L.DistanceGrid(n(r));
            this._topClusterLevel = new this._markerCluster(this, t - 1)
        },
        _addLayer: function (e, t) {
            var i, n, r = this._gridClusters, s = this._gridUnclustered, o = Math.floor(this._map.getMinZoom());
            for (this.options.singleMarkerMode && this._overrideMarkerIcon(e),
                e.on(this._childMarkerEventHandlers, this); t >= o; t--) {
                i = this._map.project(e.getLatLng(), t);
                var a = r[t].getNearObject(i);
                if (a)
                    return a._addChild(e),
                        e.__parent = a,
                        void 0;
                if (a = s[t].getNearObject(i)) {
                    var h = a.__parent;
                    h && this._removeLayer(a, !1);
                    var l = new this._markerCluster(this, t, a, e);
                    r[t].addObject(l, this._map.project(l._cLatLng, t)),
                        a.__parent = l,
                        e.__parent = l;
                    var u = l;
                    for (n = t - 1; n > h._zoom; n--)
                        u = new this._markerCluster(this, n, u),
                            r[n].addObject(u, this._map.project(a.getLatLng(), n));
                    return h._addChild(u),
                        this._removeFromGridUnclustered(a, t),
                        void 0
                }
                s[t].addObject(e, i)
            }
            this._topClusterLevel._addChild(e),
                e.__parent = this._topClusterLevel
        },
        _refreshClustersIcons: function () {
            this._featureGroup.eachLayer(function (e) {
                e instanceof L.MarkerCluster && e._iconNeedsUpdate && e._updateIcon()
            })
        },
        _enqueue: function (e) {
            this._queue.push(e),
                this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300))
        },
        _processQueue: function () {
            for (var e = 0; e < this._queue.length; e++)
                this._queue[e].call(this);
            this._queue.length = 0,
                clearTimeout(this._queueTimeout),
                this._queueTimeout = null
        },
        _mergeSplitClusters: function () {
            var e = Math.round(this._map._zoom);
            this._processQueue(),
                this._zoom < e && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(),
                    this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()),
                    this._animationZoomIn(this._zoom, e)) : this._zoom > e ? (this._animationStart(),
                        this._animationZoomOut(this._zoom, e)) : this._moveEnd()
        },
        _getExpandedVisibleBounds: function () {
            return this.options.removeOutsideVisibleBounds ? L.Browser.mobile ? this._checkBoundsMaxLat(this._map.getBounds()) : this._checkBoundsMaxLat(this._map.getBounds().pad(1)) : this._mapBoundsInfinite
        },
        _checkBoundsMaxLat: function (e) {
            var t = this._maxLat;
            return void 0 !== t && (e.getNorth() >= t && (e._northEast.lat = 1 / 0),
                e.getSouth() <= -t && (e._southWest.lat = -1 / 0)),
                e
        },
        _animationAddLayerNonAnimated: function (e, t) {
            if (t === e)
                this._featureGroup.addLayer(e);
            else if (2 === t._childCount) {
                t._addToMap();
                var i = t.getAllChildMarkers();
                this._featureGroup.removeLayer(i[0]),
                    this._featureGroup.removeLayer(i[1])
            } else
                t._updateIcon()
        },
        _extractNonGroupLayers: function (e, t) {
            var i, n = e.getLayers(), r = 0;
            for (t = t || []; r < n.length; r++)
                i = n[r],
                    i instanceof L.LayerGroup ? this._extractNonGroupLayers(i, t) : t.push(i);
            return t
        },
        _overrideMarkerIcon: function (e) {
            var t = e.options.icon = this.options.iconCreateFunction({
                getChildCount: function () {
                    return 1
                },
                getAllChildMarkers: function () {
                    return [e]
                }
            });
            return t
        }
    });
    L.MarkerClusterGroup.include({
        _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))
    }),
        L.MarkerClusterGroup.include({
            _noAnimation: {
                _animationStart: function () { },
                _animationZoomIn: function (e, t) {
                    this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), e),
                        this._topClusterLevel._recursivelyAddChildrenToMap(null, t, this._getExpandedVisibleBounds()),
                        this.fire("animationend")
                },
                _animationZoomOut: function (e, t) {
                    this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), e),
                        this._topClusterLevel._recursivelyAddChildrenToMap(null, t, this._getExpandedVisibleBounds()),
                        this.fire("animationend")
                },
                _animationAddLayer: function (e, t) {
                    this._animationAddLayerNonAnimated(e, t)
                }
            },
            _withAnimation: {
                _animationStart: function () {
                    this._map._mapPane.className += " leaflet-cluster-anim",
                        this._inZoomAnimation++
                },
                _animationZoomIn: function (e, t) {
                    var i, n = this._getExpandedVisibleBounds(), r = this._featureGroup, s = Math.floor(this._map.getMinZoom());
                    this._ignoreMove = !0,
                        this._topClusterLevel._recursively(n, e, s, function (s) {
                            var o, a = s._latlng, h = s._markers;
                            for (n.contains(a) || (a = null),
                                s._isSingleParent() && e + 1 === t ? (r.removeLayer(s),
                                    s._recursivelyAddChildrenToMap(null, t, n)) : (s.clusterHide(),
                                        s._recursivelyAddChildrenToMap(a, t, n)),
                                i = h.length - 1; i >= 0; i--)
                                o = h[i],
                                    n.contains(o._latlng) || r.removeLayer(o)
                        }),
                        this._forceLayout(),
                        this._topClusterLevel._recursivelyBecomeVisible(n, t),
                        r.eachLayer(function (e) {
                            e instanceof L.MarkerCluster || !e._icon || e.clusterShow()
                        }),
                        this._topClusterLevel._recursively(n, e, t, function (e) {
                            e._recursivelyRestoreChildPositions(t)
                        }),
                        this._ignoreMove = !1,
                        this._enqueue(function () {
                            this._topClusterLevel._recursively(n, e, s, function (e) {
                                r.removeLayer(e),
                                    e.clusterShow()
                            }),
                                this._animationEnd()
                        })
                },
                _animationZoomOut: function (e, t) {
                    this._animationZoomOutSingle(this._topClusterLevel, e - 1, t),
                        this._topClusterLevel._recursivelyAddChildrenToMap(null, t, this._getExpandedVisibleBounds()),
                        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), e, this._getExpandedVisibleBounds())
                },
                _animationAddLayer: function (e, t) {
                    var i = this
                        , n = this._featureGroup;
                    n.addLayer(e),
                        t !== e && (t._childCount > 2 ? (t._updateIcon(),
                            this._forceLayout(),
                            this._animationStart(),
                            e._setPos(this._map.latLngToLayerPoint(t.getLatLng())),
                            e.clusterHide(),
                            this._enqueue(function () {
                                n.removeLayer(e),
                                    e.clusterShow(),
                                    i._animationEnd()
                            })) : (this._forceLayout(),
                                i._animationStart(),
                                i._animationZoomOutSingle(t, this._map.getMaxZoom(), this._zoom)))
                }
            },
            _animationZoomOutSingle: function (e, t, i) {
                var n = this._getExpandedVisibleBounds()
                    , r = Math.floor(this._map.getMinZoom());
                e._recursivelyAnimateChildrenInAndAddSelfToMap(n, r, t + 1, i);
                var s = this;
                this._forceLayout(),
                    e._recursivelyBecomeVisible(n, i),
                    this._enqueue(function () {
                        if (1 === e._childCount) {
                            var o = e._markers[0];
                            this._ignoreMove = !0,
                                o.setLatLng(o.getLatLng()),
                                this._ignoreMove = !1,
                                o.clusterShow && o.clusterShow()
                        } else
                            e._recursively(n, i, r, function (e) {
                                e._recursivelyRemoveChildrenFromMap(n, r, t + 1)
                            });
                        s._animationEnd()
                    })
            },
            _animationEnd: function () {
                this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")),
                    this._inZoomAnimation-- ,
                    this.fire("animationend")
            },
            _forceLayout: function () {
                L.Util.falseFn(document.body.offsetWidth)
            }
        }),
        L.markerClusterGroup = function (e) {
            return new L.MarkerClusterGroup(e)
        }
        ;
    var i = L.MarkerCluster = L.Marker.extend({
        options: L.Icon.prototype.options,
        initialize: function (e, t, i, n) {
            L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0), {
                icon: this,
                pane: e.options.clusterPane
            }),
                this._group = e,
                this._zoom = t,
                this._markers = [],
                this._childClusters = [],
                this._childCount = 0,
                this._iconNeedsUpdate = !0,
                this._boundsNeedUpdate = !0,
                this._bounds = new L.LatLngBounds,
                i && this._addChild(i),
                n && this._addChild(n)
        },
        getAllChildMarkers: function (e, t) {
            e = e || [];
            for (var i = this._childClusters.length - 1; i >= 0; i--)
                this._childClusters[i].getAllChildMarkers(e);
            for (var n = this._markers.length - 1; n >= 0; n--)
                t && this._markers[n].__dragStart || e.push(this._markers[n]);
            return e
        },
        getChildCount: function () {
            return this._childCount
        },
        zoomToBounds: function (e) {
            for (var t, i = this._childClusters.slice(), n = this._group._map, r = n.getBoundsZoom(this._bounds), s = this._zoom + 1, o = n.getZoom(); i.length > 0 && r > s;) {
                s++;
                var a = [];
                for (t = 0; t < i.length; t++)
                    a = a.concat(i[t]._childClusters);
                i = a
            }
            r > s ? this._group._map.setView(this._latlng, s) : o >= r ? this._group._map.setView(this._latlng, o + 1) : this._group._map.fitBounds(this._bounds, e)
        },
        getBounds: function () {
            var e = new L.LatLngBounds;
            return e.extend(this._bounds),
                e
        },
        _updateIcon: function () {
            this._iconNeedsUpdate = !0,
                this._icon && this.setIcon(this)
        },
        createIcon: function () {
            return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this),
                this._iconNeedsUpdate = !1),
                this._iconObj.createIcon()
        },
        createShadow: function () {
            return this._iconObj.createShadow()
        },
        _addChild: function (e, t) {
            this._iconNeedsUpdate = !0,
                this._boundsNeedUpdate = !0,
                this._setClusterCenter(e),
                e instanceof L.MarkerCluster ? (t || (this._childClusters.push(e),
                    e.__parent = this),
                    this._childCount += e._childCount) : (t || this._markers.push(e),
                        this._childCount++),
                this.__parent && this.__parent._addChild(e, !0)
        },
        _setClusterCenter: function (e) {
            this._cLatLng || (this._cLatLng = e._cLatLng || e._latlng)
        },
        _resetBounds: function () {
            var e = this._bounds;
            e._southWest && (e._southWest.lat = 1 / 0,
                e._southWest.lng = 1 / 0),
                e._northEast && (e._northEast.lat = -1 / 0,
                    e._northEast.lng = -1 / 0)
        },
        _recalculateBounds: function () {
            var e, t, i, n, r = this._markers, s = this._childClusters, o = 0, a = 0, h = this._childCount;
            if (0 !== h) {
                for (this._resetBounds(),
                    e = 0; e < r.length; e++)
                    i = r[e]._latlng,
                        this._bounds.extend(i),
                        o += i.lat,
                        a += i.lng;
                for (e = 0; e < s.length; e++)
                    t = s[e],
                        t._boundsNeedUpdate && t._recalculateBounds(),
                        this._bounds.extend(t._bounds),
                        i = t._wLatLng,
                        n = t._childCount,
                        o += i.lat * n,
                        a += i.lng * n;
                this._latlng = this._wLatLng = new L.LatLng(o / h, a / h),
                    this._boundsNeedUpdate = !1
            }
        },
        _addToMap: function (e) {
            e && (this._backupLatlng = this._latlng,
                this.setLatLng(e)),
                this._group._featureGroup.addLayer(this)
        },
        _recursivelyAnimateChildrenIn: function (e, t, i) {
            this._recursively(e, this._group._map.getMinZoom(), i - 1, function (e) {
                var i, n, r = e._markers;
                for (i = r.length - 1; i >= 0; i--)
                    n = r[i],
                        n._icon && (n._setPos(t),
                            n.clusterHide())
            }, function (e) {
                var i, n, r = e._childClusters;
                for (i = r.length - 1; i >= 0; i--)
                    n = r[i],
                        n._icon && (n._setPos(t),
                            n.clusterHide())
            })
        },
        _recursivelyAnimateChildrenInAndAddSelfToMap: function (e, t, i, n) {
            this._recursively(e, n, t, function (r) {
                r._recursivelyAnimateChildrenIn(e, r._group._map.latLngToLayerPoint(r.getLatLng()).round(), i),
                    r._isSingleParent() && i - 1 === n ? (r.clusterShow(),
                        r._recursivelyRemoveChildrenFromMap(e, t, i)) : r.clusterHide(),
                    r._addToMap()
            })
        },
        _recursivelyBecomeVisible: function (e, t) {
            this._recursively(e, this._group._map.getMinZoom(), t, null, function (e) {
                e.clusterShow()
            })
        },
        _recursivelyAddChildrenToMap: function (e, t, i) {
            this._recursively(i, this._group._map.getMinZoom() - 1, t, function (n) {
                if (t !== n._zoom)
                    for (var r = n._markers.length - 1; r >= 0; r--) {
                        var s = n._markers[r];
                        i.contains(s._latlng) && (e && (s._backupLatlng = s.getLatLng(),
                            s.setLatLng(e),
                            s.clusterHide && s.clusterHide()),
                            n._group._featureGroup.addLayer(s))
                    }
            }, function (t) {
                t._addToMap(e)
            })
        },
        _recursivelyRestoreChildPositions: function (e) {
            for (var t = this._markers.length - 1; t >= 0; t--) {
                var i = this._markers[t];
                i._backupLatlng && (i.setLatLng(i._backupLatlng),
                    delete i._backupLatlng)
            }
            if (e - 1 === this._zoom)
                for (var n = this._childClusters.length - 1; n >= 0; n--)
                    this._childClusters[n]._restorePosition();
            else
                for (var r = this._childClusters.length - 1; r >= 0; r--)
                    this._childClusters[r]._recursivelyRestoreChildPositions(e)
        },
        _restorePosition: function () {
            this._backupLatlng && (this.setLatLng(this._backupLatlng),
                delete this._backupLatlng)
        },
        _recursivelyRemoveChildrenFromMap: function (e, t, i, n) {
            var r, s;
            this._recursively(e, t - 1, i - 1, function (e) {
                for (s = e._markers.length - 1; s >= 0; s--)
                    r = e._markers[s],
                        n && n.contains(r._latlng) || (e._group._featureGroup.removeLayer(r),
                            r.clusterShow && r.clusterShow())
            }, function (e) {
                for (s = e._childClusters.length - 1; s >= 0; s--)
                    r = e._childClusters[s],
                        n && n.contains(r._latlng) || (e._group._featureGroup.removeLayer(r),
                            r.clusterShow && r.clusterShow())
            })
        },
        _recursively: function (e, t, i, n, r) {
            var s, o, a = this._childClusters, h = this._zoom;
            if (h >= t && (n && n(this),
                r && h === i && r(this)),
                t > h || i > h)
                for (s = a.length - 1; s >= 0; s--)
                    o = a[s],
                        o._boundsNeedUpdate && o._recalculateBounds(),
                        e.intersects(o._bounds) && o._recursively(e, t, i, n, r)
        },
        _isSingleParent: function () {
            return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount
        }
    });
    L.Marker.include({
        clusterHide: function () {
            var e = this.options.opacity;
            return this.setOpacity(0),
                this.options.opacity = e,
                this
        },
        clusterShow: function () {
            return this.setOpacity(this.options.opacity)
        }
    }),
        L.DistanceGrid = function (e) {
            this._cellSize = e,
                this._sqCellSize = e * e,
                this._grid = {},
                this._objectPoint = {}
        }
        ,
        L.DistanceGrid.prototype = {
            addObject: function (e, t) {
                var i = this._getCoord(t.x)
                    , n = this._getCoord(t.y)
                    , r = this._grid
                    , s = r[n] = r[n] || {}
                    , o = s[i] = s[i] || []
                    , a = L.Util.stamp(e);
                this._objectPoint[a] = t,
                    o.push(e)
            },
            updateObject: function (e, t) {
                this.removeObject(e),
                    this.addObject(e, t)
            },
            removeObject: function (e, t) {
                var i, n, r = this._getCoord(t.x), s = this._getCoord(t.y), o = this._grid, a = o[s] = o[s] || {}, h = a[r] = a[r] || [];
                for (delete this._objectPoint[L.Util.stamp(e)],
                    i = 0,
                    n = h.length; n > i; i++)
                    if (h[i] === e)
                        return h.splice(i, 1),
                            1 === n && delete a[r],
                            !0
            },
            eachObject: function (e, t) {
                var i, n, r, s, o, a, h, l = this._grid;
                for (i in l) {
                    o = l[i];
                    for (n in o)
                        for (a = o[n],
                            r = 0,
                            s = a.length; s > r; r++)
                            h = e.call(t, a[r]),
                                h && (r-- ,
                                    s--)
                }
            },
            getNearObject: function (e) {
                var t, i, n, r, s, o, a, h, l = this._getCoord(e.x), u = this._getCoord(e.y), _ = this._objectPoint, d = this._sqCellSize, c = null;
                for (t = u - 1; u + 1 >= t; t++)
                    if (r = this._grid[t])
                        for (i = l - 1; l + 1 >= i; i++)
                            if (s = r[i])
                                for (n = 0,
                                    o = s.length; o > n; n++)
                                    a = s[n],
                                        h = this._sqDist(_[L.Util.stamp(a)], e),
                                        (d > h || d >= h && null === c) && (d = h,
                                            c = a);
                return c
            },
            _getCoord: function (e) {
                var t = Math.floor(e / this._cellSize);
                return isFinite(t) ? t : e
            },
            _sqDist: function (e, t) {
                var i = t.x - e.x
                    , n = t.y - e.y;
                return i * i + n * n
            }
        },
        function () {
            L.QuickHull = {
                getDistant: function (e, t) {
                    var i = t[1].lat - t[0].lat
                        , n = t[0].lng - t[1].lng;
                    return n * (e.lat - t[0].lat) + i * (e.lng - t[0].lng)
                },
                findMostDistantPointFromBaseLine: function (e, t) {
                    var i, n, r, s = 0, o = null, a = [];
                    for (i = t.length - 1; i >= 0; i--)
                        n = t[i],
                            r = this.getDistant(n, e),
                            r > 0 && (a.push(n),
                                r > s && (s = r,
                                    o = n));
                    return {
                        maxPoint: o,
                        newPoints: a
                    }
                },
                buildConvexHull: function (e, t) {
                    var i = []
                        , n = this.findMostDistantPointFromBaseLine(e, t);
                    return n.maxPoint ? (i = i.concat(this.buildConvexHull([e[0], n.maxPoint], n.newPoints)),
                        i = i.concat(this.buildConvexHull([n.maxPoint, e[1]], n.newPoints))) : [e[0]]
                },
                getConvexHull: function (e) {
                    var t, i = !1, n = !1, r = !1, s = !1, o = null, a = null, h = null, l = null, u = null, _ = null;
                    for (t = e.length - 1; t >= 0; t--) {
                        var d = e[t];
                        (i === !1 || d.lat > i) && (o = d,
                            i = d.lat),
                            (n === !1 || d.lat < n) && (a = d,
                                n = d.lat),
                            (r === !1 || d.lng > r) && (h = d,
                                r = d.lng),
                            (s === !1 || d.lng < s) && (l = d,
                                s = d.lng)
                    }
                    n !== i ? (_ = a,
                        u = o) : (_ = l,
                            u = h);
                    var c = [].concat(this.buildConvexHull([_, u], e), this.buildConvexHull([u, _], e));
                    return c
                }
            }
        }(),
        L.MarkerCluster.include({
            getConvexHull: function () {
                var e, t, i = this.getAllChildMarkers(), n = [];
                for (t = i.length - 1; t >= 0; t--)
                    e = i[t].getLatLng(),
                        n.push(e);
                return L.QuickHull.getConvexHull(n)
            }
        }),
        L.MarkerCluster.include({
            _2PI: 2 * Math.PI,
            _circleFootSeparation: 25,
            _circleStartAngle: 0,
            _spiralFootSeparation: 28,
            _spiralLengthStart: 11,
            _spiralLengthFactor: 5,
            _circleSpiralSwitchover: 9,
            spiderfy: function () {
                if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
                    var e, t = this.getAllChildMarkers(null, !0), i = this._group, n = i._map, r = n.latLngToLayerPoint(this._latlng);
                    this._group._unspiderfy(),
                        this._group._spiderfied = this,
                        t.length >= this._circleSpiralSwitchover ? e = this._generatePointsSpiral(t.length, r) : (r.y += 10,
                            e = this._generatePointsCircle(t.length, r)),
                        this._animationSpiderfy(t, e)
                }
            },
            unspiderfy: function (e) {
                this._group._inZoomAnimation || (this._animationUnspiderfy(e),
                    this._group._spiderfied = null)
            },
            _generatePointsCircle: function (e, t) {
                var i, n, r = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + e), s = r / this._2PI, o = this._2PI / e, a = [];
                for (s = Math.max(s, 35),
                    a.length = e,
                    i = 0; e > i; i++)
                    n = this._circleStartAngle + i * o,
                        a[i] = new L.Point(t.x + s * Math.cos(n), t.y + s * Math.sin(n))._round();
                return a
            },
            _generatePointsSpiral: function (e, t) {
                var i, n = this._group.options.spiderfyDistanceMultiplier, r = n * this._spiralLengthStart, s = n * this._spiralFootSeparation, o = n * this._spiralLengthFactor * this._2PI, a = 0, h = [];
                for (h.length = e,
                    i = e; i >= 0; i--)
                    e > i && (h[i] = new L.Point(t.x + r * Math.cos(a), t.y + r * Math.sin(a))._round()),
                        a += s / r + 5e-4 * i,
                        r += o / a;
                return h
            },
            _noanimationUnspiderfy: function () {
                var e, t, i = this._group, n = i._map, r = i._featureGroup, s = this.getAllChildMarkers(null, !0);
                for (i._ignoreMove = !0,
                    this.setOpacity(1),
                    t = s.length - 1; t >= 0; t--)
                    e = s[t],
                        r.removeLayer(e),
                        e._preSpiderfyLatlng && (e.setLatLng(e._preSpiderfyLatlng),
                            delete e._preSpiderfyLatlng),
                        e.setZIndexOffset && e.setZIndexOffset(0),
                        e._spiderLeg && (n.removeLayer(e._spiderLeg),
                            delete e._spiderLeg);
                i.fire("unspiderfied", {
                    cluster: this,
                    markers: s
                }),
                    i._ignoreMove = !1,
                    i._spiderfied = null
            }
        }),
        L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
            _animationSpiderfy: function (e, t) {
                var i, n, r, s, o = this._group, a = o._map, h = o._featureGroup, l = this._group.options.spiderLegPolylineOptions;
                for (o._ignoreMove = !0,
                    i = 0; i < e.length; i++)
                    s = a.layerPointToLatLng(t[i]),
                        n = e[i],
                        r = new L.Polyline([this._latlng, s], l),
                        a.addLayer(r),
                        n._spiderLeg = r,
                        n._preSpiderfyLatlng = n._latlng,
                        n.setLatLng(s),
                        n.setZIndexOffset && n.setZIndexOffset(1e6),
                        h.addLayer(n);
                this.setOpacity(.3),
                    o._ignoreMove = !1,
                    o.fire("spiderfied", {
                        cluster: this,
                        markers: e
                    })
            },
            _animationUnspiderfy: function () {
                this._noanimationUnspiderfy()
            }
        }),
        L.MarkerCluster.include({
            _animationSpiderfy: function (e, t) {
                var i, n, r, s, o, a, h = this, l = this._group, u = l._map, _ = l._featureGroup, d = this._latlng, c = u.latLngToLayerPoint(d), p = L.Path.SVG, f = L.extend({}, this._group.options.spiderLegPolylineOptions), m = f.opacity;
                for (void 0 === m && (m = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),
                    p ? (f.opacity = 0,
                        f.className = (f.className || "") + " leaflet-cluster-spider-leg") : f.opacity = m,
                    l._ignoreMove = !0,
                    i = 0; i < e.length; i++)
                    n = e[i],
                        a = u.layerPointToLatLng(t[i]),
                        r = new L.Polyline([d, a], f),
                        u.addLayer(r),
                        n._spiderLeg = r,
                        p && (s = r._path,
                            o = s.getTotalLength() + .1,
                            s.style.strokeDasharray = o,
                            s.style.strokeDashoffset = o),
                        n.setZIndexOffset && n.setZIndexOffset(1e6),
                        n.clusterHide && n.clusterHide(),
                        _.addLayer(n),
                        n._setPos && n._setPos(c);
                for (l._forceLayout(),
                    l._animationStart(),
                    i = e.length - 1; i >= 0; i--)
                    a = u.layerPointToLatLng(t[i]),
                        n = e[i],
                        n._preSpiderfyLatlng = n._latlng,
                        n.setLatLng(a),
                        n.clusterShow && n.clusterShow(),
                        p && (r = n._spiderLeg,
                            s = r._path,
                            s.style.strokeDashoffset = 0,
                            r.setStyle({
                                opacity: m
                            }));
                this.setOpacity(.3),
                    l._ignoreMove = !1,
                    setTimeout(function () {
                        l._animationEnd(),
                            l.fire("spiderfied", {
                                cluster: h,
                                markers: e
                            })
                    }, 200)
            },
            _animationUnspiderfy: function (e) {
                var t, i, n, r, s, o, a = this, h = this._group, l = h._map, u = h._featureGroup, _ = e ? l._latLngToNewLayerPoint(this._latlng, e.zoom, e.center) : l.latLngToLayerPoint(this._latlng), d = this.getAllChildMarkers(null, !0), c = L.Path.SVG;
                for (h._ignoreMove = !0,
                    h._animationStart(),
                    this.setOpacity(1),
                    i = d.length - 1; i >= 0; i--)
                    t = d[i],
                        t._preSpiderfyLatlng && (t.closePopup(),
                            t.setLatLng(t._preSpiderfyLatlng),
                            delete t._preSpiderfyLatlng,
                            o = !0,
                            t._setPos && (t._setPos(_),
                                o = !1),
                            t.clusterHide && (t.clusterHide(),
                                o = !1),
                            o && u.removeLayer(t),
                            c && (n = t._spiderLeg,
                                r = n._path,
                                s = r.getTotalLength() + .1,
                                r.style.strokeDashoffset = s,
                                n.setStyle({
                                    opacity: 0
                                })));
                h._ignoreMove = !1,
                    setTimeout(function () {
                        var e = 0;
                        for (i = d.length - 1; i >= 0; i--)
                            t = d[i],
                                t._spiderLeg && e++;
                        for (i = d.length - 1; i >= 0; i--)
                            t = d[i],
                                t._spiderLeg && (t.clusterShow && t.clusterShow(),
                                    t.setZIndexOffset && t.setZIndexOffset(0),
                                    e > 1 && u.removeLayer(t),
                                    l.removeLayer(t._spiderLeg),
                                    delete t._spiderLeg);
                        h._animationEnd(),
                            h.fire("unspiderfied", {
                                cluster: a,
                                markers: d
                            })
                    }, 200)
            }
        }),
        L.MarkerClusterGroup.include({
            _spiderfied: null,
            unspiderfy: function () {
                this._unspiderfy.apply(this, arguments)
            },
            _spiderfierOnAdd: function () {
                this._map.on("click", this._unspiderfyWrapper, this),
                    this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this),
                    this._map.on("zoomend", this._noanimationUnspiderfy, this),
                    L.Browser.touch || this._map.getRenderer(this)
            },
            _spiderfierOnRemove: function () {
                this._map.off("click", this._unspiderfyWrapper, this),
                    this._map.off("zoomstart", this._unspiderfyZoomStart, this),
                    this._map.off("zoomanim", this._unspiderfyZoomAnim, this),
                    this._map.off("zoomend", this._noanimationUnspiderfy, this),
                    this._noanimationUnspiderfy()
            },
            _unspiderfyZoomStart: function () {
                this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this)
            },
            _unspiderfyZoomAnim: function (e) {
                L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this),
                    this._unspiderfy(e))
            },
            _unspiderfyWrapper: function () {
                this._unspiderfy()
            },
            _unspiderfy: function (e) {
                this._spiderfied && this._spiderfied.unspiderfy(e)
            },
            _noanimationUnspiderfy: function () {
                this._spiderfied && this._spiderfied._noanimationUnspiderfy()
            },
            _unspiderfyLayer: function (e) {
                e._spiderLeg && (this._featureGroup.removeLayer(e),
                    e.clusterShow && e.clusterShow(),
                    e.setZIndexOffset && e.setZIndexOffset(0),
                    this._map.removeLayer(e._spiderLeg),
                    delete e._spiderLeg)
            }
        }),
        L.MarkerClusterGroup.include({
            refreshClusters: function (e) {
                return e ? e instanceof L.MarkerClusterGroup ? e = e._topClusterLevel.getAllChildMarkers() : e instanceof L.LayerGroup ? e = e._layers : e instanceof L.MarkerCluster ? e = e.getAllChildMarkers() : e instanceof L.Marker && (e = [e]) : e = this._topClusterLevel.getAllChildMarkers(),
                    this._flagParentsIconsNeedUpdate(e),
                    this._refreshClustersIcons(),
                    this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(e),
                    this
            },
            _flagParentsIconsNeedUpdate: function (e) {
                var t, i;
                for (t in e)
                    for (i = e[t].__parent; i;)
                        i._iconNeedsUpdate = !0,
                            i = i.__parent
            },
            _refreshSingleMarkerModeMarkers: function (e) {
                var t, i;
                for (t in e)
                    i = e[t],
                        this.hasLayer(i) && i.setIcon(this._overrideMarkerIcon(i))
            }
        }),
        L.Marker.include({
            refreshIconOptions: function (e, t) {
                var i = this.options.icon;
                return L.setOptions(i, e),
                    this.setIcon(i),
                    t && this.__parent && this.__parent._group.refreshClusters(this),
                    this
            }
        }),
        e.MarkerClusterGroup = t,
        e.MarkerCluster = i
});
//# sourceMappingURL=leaflet.markercluster.js.map



*/;
