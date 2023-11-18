import { Person } from "./Person";
//inherited relationship
export class Doctor extends Person {
    constructor(adharCardNo, firstName, middleName, dob, contactNo, gender, address, licenseNo, digitalSignature) {
        super(adharCardNo, firstName, middleName, dob, contactNo, gender, address);
        this._licenseNo = licenseNo;
        this._digitalSignature = digitalSignature;
    }
    get licenseNo() {
        return this._licenseNo;
    }
    set licenseNo(value) {
        this._licenseNo = value;
    }
    get digitalSignature() {
        return this._digitalSignature;
    }
    set digitalSignature(value) {
        this._digitalSignature = value;
    }
    login() {
        console.log("Doctor logged in");
    }
}
