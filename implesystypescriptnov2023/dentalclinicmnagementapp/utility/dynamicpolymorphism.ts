import {Patient} from "../models/Patient";
import {Gender} from "../models/Person";
import {Doctor} from "../models/Doctor";
import {Address} from "../models/Address";
import {Report} from "../models/Report";
import {DOBException} from "../exceptions/DOBException";


//run the file using
//npm install -g ts-node
//ts-node dynamicpolymorphism.ts
let personObj1=new Patient('', '', '', new Date(2024,12,2), [9952032862], Gender.FEMALE, new Address(), new Report());
let personObj2=new Doctor('', '', '', new Date(), [9952032862], Gender.FEMALE, new Address(), '',null);
console.log(new Date());
console.log(personObj1.dob);



try {
    if (personObj1.dob < new Date())
        console.log("DOB correct");
    else {
        throw new DOBException('Entered Date is the future');
    }
}
catch(error:unknown){
    //mandatory
    if (error instanceof DOBException) {
        console.error("DOB error:", error.message);
    }
}

let pattern=new RegExp( "[a-zA-Z]*")

if(pattern.test(personObj1.firstName))
    console.log("pattern matching");
else
    console.log("pattern not matching");


//runtime polymorphism
personObj1.login();
personObj2.login();
