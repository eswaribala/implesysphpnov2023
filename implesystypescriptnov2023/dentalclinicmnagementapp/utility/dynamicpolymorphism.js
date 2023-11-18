import { Patient } from "../models/Patient";
import { Doctor } from "../models/Doctor";
let personObj1 = new Patient('', '', '', null, null, null, null, null);
let personObj2 = new Doctor('', '', '', null, null, null, null, null, null);
//runtime polymorphism
personObj1.login();
personObj2.login();
