const BLOODGROUP: readonly [string,string,string,string,string,string]=["O+","O-","A+","B+","AB+","B-"]
console.log(BLOODGROUP)
//BLOODGROUP.push("R+")
let NewBLOODGROUP:any[]=[]
/*BLOODGROUP.forEach(bg=>{
    NewBLOODGROUP.push(bg)
})*/
copyBloodGroups(BLOODGROUP)
function copyBloodGroups(...data){
    NewBLOODGROUP.push(data)
}
NewBLOODGROUP.push("R+")
console.log(NewBLOODGROUP)
