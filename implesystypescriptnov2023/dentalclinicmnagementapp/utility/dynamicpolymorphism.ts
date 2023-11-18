import {Patient} from "../models/Patient";
import {Gender} from "../models/Person";
import {Doctor} from "../models/Doctor";
import {Address} from "../models/Address";
import {Report} from "../models/Report";

//run the file using
//npm install -g ts-node
//ts-node dynamicpolymorphism.ts
let personObj1=new Patient('', '', '', new Date(), [9952032862], Gender.FEMALE, new Address(), new Report());
let personObj2=new Doctor('', '', '', new Date(), [9952032862], Gender.FEMALE, new Address(), '',null);
//runtime polymorphism
personObj1.login();
personObj2.login();
