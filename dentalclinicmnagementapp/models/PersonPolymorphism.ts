class Person{
    public constructor(contactNo:number) ;
    public constructor(adharCardNo: string, firstName: string, middleName: string,contactNo:number) ;
    public constructor(adharCardNo: string, firstName: string, middleName: string) ;
    public constructor(adharCardNo: string, firstName: string) ;
    public constructor() ;

    public constructor(...arr:any[]) {

        if(arr.length>0){
            console.log(arr);
        }

    }



}

let personObj1=new Person();
let personObj2=new Person('A3234535','Parameswari','Bala',9952032862)
let personObj3=new Person(9952032862);
