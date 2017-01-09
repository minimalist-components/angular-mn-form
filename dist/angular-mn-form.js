"use strict";function MnFormDirective(){function link(scope,element,attributes){attributes.submit&&(element[0].onSubmit=function(){scope.$eval(attributes.submit)})}return{restrict:"E",link:link}}angular.module("mn-form",[]),angular.module("mn-form").directive("mnForm",MnFormDirective);
//# sourceMappingURL=angular-mn-form.js.map
