import {Address} from "./Address";
enum Gender{MALE,FEMALE,TRANSGENDER}
class Person{
    protected _adharCardNo:string;
    protected _firstName:string
    protected _middleName:string
    protected _dob:Date;
    protected _contactNo:number[]
    protected _gender:Gender
    protected _address:Address; //has relationship


    constructor(adharCardNo: string, firstName: string, middleName: string, dob: Date, contactNo: number[], gender: Gender, address: Address) {
        this._adharCardNo = adharCardNo;
        this._firstName = firstName;
        this._middleName = middleName;
        this._dob = dob;
        this._contactNo = contactNo;
        this._gender = gender;
        this._address = address;
    }


    get adharCardNo(): string {
        return this._adharCardNo;
    }

    set adharCardNo(value: string) {
        this._adharCardNo = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get middleName(): string {
        return this._middleName;
    }

    set middleName(value: string) {
        this._middleName = value;
    }

    get dob(): Date {
        return this._dob;
    }

    set dob(value: Date) {
        this._dob = value;
    }

    get contactNo(): number[] {
        return this._contactNo;
    }

    set contactNo(value: number[]) {
        this._contactNo = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get address(): Address {
        return this._address;
    }

    set address(value: Address) {
        this._address = value;
    }
}
