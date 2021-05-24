"use strict";
//Getter & Setter
var Person5 = /** @class */ (function () {
    function Person5(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(Person5.prototype, "name", {
        get: function () {
            //
            console.log('get');
            return this._name + 'Park';
        },
        set: function (n) {
            console.log('set');
            this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    return Person5;
}());
var p6 = new Person5('eunseo', 30);
console.log(p6.name); //getter
p6.name = 'Sora'; //setter
console.log(p6.name);
