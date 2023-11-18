export var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["TRANSGENDER"] = 2] = "TRANSGENDER";
})(Gender || (Gender = {}));
export class Person {
    constructor(adharCardNo, firstName, middleName, dob, contactNo, gender, address) {
        this._adharCardNo = adharCardNo;
        this._firstName = firstName;
        this._middleName = middleName;
        this._dob = dob;
        this._contactNo = contactNo;
        this._gender = gender;
        this._address = address;
    }
    get adharCardNo() {
        return this._adharCardNo;
    }
    set adharCardNo(value) {
        this._adharCardNo = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get middleName() {
        return this._middleName;
    }
    set middleName(value) {
        this._middleName = value;
    }
    get dob() {
        return this._dob;
    }
    set dob(value) {
        this._dob = value;
    }
    get contactNo() {
        return this._contactNo;
    }
    set contactNo(value) {
        this._contactNo = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
}
