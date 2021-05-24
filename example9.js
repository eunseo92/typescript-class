"use strict";
// sington
var ClassName = /** @class */ (function () {
    function ClassName() {
    }
    ClassName.getInstance = function () {
        // ClassName으로부터 만든 object 가 있으면 return
        // 없으면, 생성 후 return
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    };
    ClassName.instance = null;
    return ClassName;
}());
// const aa = new ClassName()
// const ab = new ClassName()
var ab = ClassName.getInstance();
var ac = ClassName.getInstance();
