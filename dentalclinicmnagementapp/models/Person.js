"use strict";
exports.__esModule = true;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["TRANSGENDER"] = 2] = "TRANSGENDER";
})(Gender || (Gender = {}));
var Person = /** @class */ (function () {
    function Person() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length > 0) {
            console.log(arr);
        }
    }
    return Person;
}());
var personObj1 = new Person();
var personObj2 = new Person('A3234535', 'Parameswari', 'Bala', 9952032862);
var personObj3 = new Person(9952032862);
