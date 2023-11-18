function getDoctorInfo(name:string,country:string="India", ...skills:string[]):object{
 var doctor={
     "doctoName":name,
     "country":country,
     "skills":skills
 }
 return doctor
}


console.log(getDoctorInfo("Dr.Vignesh","UK","BDS","MDS","DDS"));
console.log(getDoctorInfo("Dr.Kirti"));
