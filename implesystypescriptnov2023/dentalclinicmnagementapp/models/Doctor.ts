import {Gender, Person} from "./Person";
import {Address} from "./Address";
//inherited relationship
export class Doctor extends Person{
    private _licenseNo:string;
    private _digitalSignature:any;

    constructor(adharCardNo: string, firstName: string, middleName: string, dob: Date, contactNo: number[], gender: Gender, address: Address, licenseNo: string, digitalSignature: any) {
        super(adharCardNo, firstName, middleName, dob, contactNo, gender, address);
        this._licenseNo = licenseNo;
        this._digitalSignature = digitalSignature;
    }

    get licenseNo(): string {
        return this._licenseNo;
    }

    set licenseNo(value: string) {
        this._licenseNo = value;
    }

    get digitalSignature(): any {
        return this._digitalSignature;
    }

    set digitalSignature(value: any) {
        this._digitalSignature = value;
    }

    login(): void {
        console.log("Doctor logged in")
    }
}
