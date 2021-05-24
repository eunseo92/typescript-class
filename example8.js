"use strict";
// static p
var Person8 = /** @class */ (function () {
    function Person8() {
    }
    Person8.prototype.hello = function () {
        console.log('안녕하세요', Person8.city);
    };
    Person8.prototype.change = function () {
        Person8.city = 'japan';
    };
    Person8.city = 'seoul';
    return Person8;
}());
var p8 = new Person8();
// p8.hello() // static 메서드 적용 시 사용 불가
p8.hello(); // res :안녕하세요 seoul
var p9 = new Person8();
p9.hello; // res : 안녕하세요 seoul
p8.change(); // seoul -> japan으로 변경 
p9.hello; // res : 안녕하세요 japan
//Person8.hello() //Person8.city //private 적용 시 외부에서 사용 불가
