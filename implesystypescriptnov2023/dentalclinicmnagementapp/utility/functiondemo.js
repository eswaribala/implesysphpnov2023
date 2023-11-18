function getDoctorInfo(name, country) {
    if (country === void 0) { country = "India"; }
    var skills = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        skills[_i - 2] = arguments[_i];
    }
    var doctor = {
        "doctoName": name,
        "country": country,
        "skills": skills
    };
    return doctor;
}
console.log(getDoctorInfo("Dr.Vignesh", "UK", "BDS", "MDS", "DDS"));
console.log(getDoctorInfo("Dr.Kirti"));
