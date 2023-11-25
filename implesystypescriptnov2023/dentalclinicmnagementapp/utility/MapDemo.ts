import {Patient} from "../models/Patient";
import {Gender} from "../models/Person";
import {Address} from "../models/Address";
import {Report} from "../models/Report";
// @ts-ignore
let patientsMap=new Map();

for(let i=0;i<100;i++) {
    patientsMap.set("995203286"+i, new Patient('A' + i,
        'p'+i, 'm'+i,
        new Date(1900 + Math.random() * 100, 1 + Math.random() * 10, 1 + Math.random() * 10),
        [9952032862],
        Gender.FEMALE, new Address(), new Report()))
}

//retrieve only keys
// @ts-ignore
for(let key of patientsMap.keys()){
    console.log("Keys="+key)
}
//retrieve only values
// @ts-ignore
for(let value of patientsMap.values()){
    console.log("Values="+value)
}

//retrieve only entries
// @ts-ignore
for(let entry of patientsMap.entries()){
    console.log(entry[0],entry[1])
}

//search and retrieve
console.log(patientsMap.get("9952032860"))
let patient={

}
