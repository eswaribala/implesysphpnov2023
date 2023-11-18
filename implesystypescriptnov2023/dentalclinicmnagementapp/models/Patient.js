import { Person } from "./Person";
//inherited relationship
export class Patient extends Person {
    constructor(adharCardNo, firstName, middleName, dob, contactNo, gender, address, patientHistory) {
        super(adharCardNo, firstName, middleName, dob, contactNo, gender, address);
        this._patientHistory = patientHistory;
    }
    get patientHistory() {
        return this._patientHistory;
    }
    set patientHistory(value) {
        this._patientHistory = value;
    }
    login() {
        console.log("Patient logged in");
    }
}
