//The training focuses on HC application development
//# The Training uses OOPS concepts
/*
 * Author Parameswari Balasubramaniam
 * Data 04/11/2023
 * Version 1.0
 */

let clinicName:string="Smile Clinic";
let address:string="Chennai";
let openStatus:boolean=true;
enum gender{MALE,FEMALE, TRANSGENDEDR}
let contactNumbers:number[]=[9952032862, 8056050425]

let patient:any={
    name:"Parameswari",
    dob:"02/12/1970",
    phoneNo:contactNumbers,
    caseHistory:true,
    genderValue:gender[gender.FEMALE]
}


const BLOODGROUP:string="AB+"


//show the data
console.log("Clinic Name="+clinicName);

console.log("Address="+address);
console.log("Blood Group"+BLOODGROUP)
console.log(patient)
