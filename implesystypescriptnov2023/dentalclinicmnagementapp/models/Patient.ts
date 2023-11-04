import {Gender, Person} from "./Person";
import {History} from "./History";
import {Address} from "./Address";
//inherited relationship
export class Patient extends Person{

    private _patientHistory:History


    constructor(adharCardNo: string, firstName: string, middleName: string, dob: Date, contactNo: number[],
                gender: Gender, address: Address, patientHistory: History) {
        //invokes the super class constructor
        super(adharCardNo, firstName, middleName, dob, contactNo, gender, address);
        this._patientHistory = patientHistory;
    }


    get patientHistory(): History {
        return this._patientHistory;
    }

    set patientHistory(value: History) {
        this._patientHistory = value;
    }
}
