import {Patient} from "../models/Patient";
import {Doctor} from "../models/Doctor";
import {Gender} from "../models/Person";
import {Address} from "../models/Address";
import {Report} from "../models/Report";

export class Register<T>{
    private _data: T;
    private _patients:Patient[]=[];
    private _doctors:Doctor[]=[];
    storeData(data:T):void{
        this._data=data;
        if(data instanceof Patient)
            this._patients.push(data)
        if(data instanceof Doctor)
            this._doctors.push(data)
    }


    get data(): T {
        return this._data;
    }


    get patients(): Patient[] {
        return this._patients;
    }

    get doctors(): Doctor[] {
        return this._doctors;
    }
}

let register1=new Register();
register1.storeData(new Patient('A'+1,
    'p'+1, 'm'+1,
    new Date(1900+Math.random()*100,1+Math.random()*10,1+Math.random()*10),
    [9952032862],
    Gender.FEMALE, new Address(), new Report()));
let register2=new Register()
register2.storeData(new Doctor('A'+2,
    'd'+2, 'm'+2,
    new Date(1900+Math.random()*100,1+Math.random()*10,1+Math.random()*10),
    [9952032862],
    Gender.FEMALE, new Address(),"",""));

console.log(register1.data)
console.log(register2.data)
console.log(register1.patients)
console.log(register2.doctors)
