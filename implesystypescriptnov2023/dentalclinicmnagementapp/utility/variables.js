//The training focuses on HC application development
//# The Training uses OOPS concepts
/*
 * Author Parameswari Balasubramaniam
 * Data 04/11/2023
 * Version 1.0
 */
var clinicName = "Smile Clinic";
var address = "Chennai";
var openStatus = true;
var gender;
(function (gender) {
    gender[gender["MALE"] = 0] = "MALE";
    gender[gender["FEMALE"] = 1] = "FEMALE";
    gender[gender["TRANSGENDEDR"] = 2] = "TRANSGENDEDR";
})(gender || (gender = {}));
var contactNumbers = [9952032862, 8056050425];
var patient = {
    name: "Parameswari",
    dob: "02/12/1970",
    phoneNo: contactNumbers,
    caseHistory: true,
    genderValue: gender[gender.FEMALE]
};
var BLOODGROUP = "AB+";
//show the data
console.log("Clinic Name=" + clinicName);
console.log("Address=" + address);
console.log("Blood Group" + BLOODGROUP);
console.log(patient);
