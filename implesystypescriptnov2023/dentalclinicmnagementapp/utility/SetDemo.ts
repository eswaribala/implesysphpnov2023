
import {Patient} from "../models/Patient";
import {Gender} from "../models/Person";
import {Address} from "../models/Address";
import {Report} from "../models/Report";

// @ts-ignore
let doctorsSet=new Set();

for(let i=0;i<100;i++){
    doctorsSet.add(new Patient('A'+i,
        'p'+i, 'm'+i,
        new Date(1900+Math.random()*100,1+Math.random()*10,1+Math.random()*10),
        [9952032862],
        Gender.FEMALE, new Address(), new Report()))
}
let doctor=(new Patient('A'+100,
    'p'+100, 'm'+100,
    new Date(1900+Math.random()*100,1+Math.random()*10,1+Math.random()*10),
    [9952032862],
    Gender.FEMALE, new Address(), new Report()));
let doctorDup=doctor;

doctorsSet.add(doctor);
doctorsSet.add(doctorDup);

console.log(doctorsSet);


// @ts-ignore
let doctorSet1=new Set();
doctorSet1.add("Bala");
doctorSet1.add("Vignesh");
doctorSet1.add("Parameswari");
doctorSet1.add("Bala");



console.log(doctorSet1);
