import {Patient} from "../models/Patient";
import {Gender} from "../models/Person";
import {Address} from "../models/Address";
import {Report} from "../models/Report";
//list of patients
let patients:Patient[]=[];
for(let i=0;i<100;i++){
    patients.push(new Patient('A'+i,
        'p'+i, 'm'+i,
        new Date(1900+Math.random()*100,1+Math.random()*10,1+Math.random()*10),
        [9952032862],
        Gender.FEMALE, new Address(), new Report()))
}
patients.push(new Patient('A'+100,
    'p'+100, 'm'+100,
    new Date(1900+Math.random()*100,1+Math.random()*10,1+Math.random()*10),
    [9952032862],
    Gender.FEMALE, new Address(), new Report()))
//iterate over the collection
patients.forEach(p=>{
    console.log(p)
})
