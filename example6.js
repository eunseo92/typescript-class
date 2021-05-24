"use strict";
// readonly properties
var Person6 = /** @class */ (function () {
    function Person6(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'Eunseo';
        this.country = 'Korea'; //초기화 되는 영역에서 값을 지정할 수 있음
    }
    Person6.prototype.hello = function () {
        this.country = 'Japan';
    };
    return Person6;
}());
var p7 = new Person6('eunseo', 30);
console.log(p7.name); //getter
p7.name = 'Sora'; //setter
console.log(p7.name);
