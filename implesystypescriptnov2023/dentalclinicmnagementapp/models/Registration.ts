import {Patient} from "./Patient";

export class Registration{

    private static _registrationNo:number; //class variable
    private _dateOfRegn:Date; //instance variable
    private _regFee:number;
    private _patient:Patient;


    constructor(dateOfRegn: Date, regFee: number, patient: Patient) {
        this._dateOfRegn = dateOfRegn;
        this._regFee = regFee;
        this._patient = patient;
    }


    static get registrationNo(): number {
        return this._registrationNo;
    }

    static set registrationNo(value: number) {
        this._registrationNo = value;
    }

    get dateOfRegn(): Date {
        return this._dateOfRegn;
    }

    set dateOfRegn(value: Date) {
        this._dateOfRegn = value;
    }

    get regFee(): number {
        return this._regFee;
    }

    set regFee(value: number) {
        this._regFee = value;
    }

    get patient(): Patient {
        return this._patient;
    }

    set patient(value: Patient) {
        this._patient = value;
    }
}


