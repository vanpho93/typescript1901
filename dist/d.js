"use strict";
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.talk = function () {
        console.log('Hello, I am ' + this.name);
    };
    return Person2;
}());
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.talk = function () {
        console.log('Ohhhh');
    };
    return Cow;
}());
function listen(obj) {
    obj.talk();
}
var p = new Person2('Teo');
var c = new Cow();
listen(p);
listen(c);
