import {Patient} from "./Patient";

export interface Treatment{
    //abstract function
   treatmentPlan:(patient:Patient)=>string;
   display:Function;
}
