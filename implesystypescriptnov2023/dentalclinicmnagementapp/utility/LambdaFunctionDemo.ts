//method 1
let totalBill=($bill1,$bill2)=> $bill1+$bill2;

console.log(totalBill(438658,3956936));

//method 2
let bills=[35,2,6,12];

let total=bills.map((data)=>data*data);
console.log(total);

//method3
let totalBill1=function (data){
    let sum=0;
    data.forEach(d=>{
        sum+=d;
    })
    return sum;
};

console.log(totalBill1(bills));
