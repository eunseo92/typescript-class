"use strict";
// index signiture
var Students = /** @class */ (function () {
    function Students() {
        //eunseo = 'male' //Error
        this.eunseo = 'male';
    }
    return Students;
}());
var a = new Students();
a.eunseo = 'male';
a.sora = 'male';
console.log(a);
var b = new Students();
b.sori = 'female';
b.yuzu = 'female';
console.log(b);
