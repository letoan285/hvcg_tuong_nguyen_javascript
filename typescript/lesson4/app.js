// function getBill(x: number){
//     return x + 1200;
// }
// const weight_to_by =  2900;
// let myBill = getBill(weight_to_by);
// console.log(myBill);
// 28 001 200
// npm i -g typescript
// let x = 30;
// x = 50;
// let x = 4;
// console.log(x);
// x = 6;
// let str ;
// str = 999;
// 1. string
var myData = 'iphone';
// 2. number
var myPrice = 78000;
// 2. boolean
var isAvailable = true;
// 4. null
var myStatus = null;
// myStatus = null;
// 5. undefined
// 6. void
// function getName(): void {
//     // return 2222;
//     let x = 'gaegaega';
//     console.log(x);
//     return x;
// }
// bool getName(){}
// let arr: Array<number>;
// let arr1: string[];
// arr = ['a', 'b', 'c']
// let arr = Array(3);
// console.log(arr[0] = 'gaega');
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[5]);
// let x = [1,2,3, 'hello', false, [], {}];
// tuple
// let price: number | string | boolean = 500; // union
// price = '300';
// price = true;
// never
// Never type: - always throw error
// - forever loop
// function getNever(): never {
//     // throw Error('this is error');
//     while(true){
//         console.log('hello');
//     }
// }
// object, class, enum, interface, type
// enum,
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["MON"] = 0] = "MON";
    DayOfWeek[DayOfWeek["TUE"] = 1] = "TUE";
    DayOfWeek[DayOfWeek["WED"] = 2] = "WED";
    DayOfWeek[DayOfWeek["TH"] = 3] = "TH";
    DayOfWeek[DayOfWeek["FRI"] = 4] = "FRI";
    DayOfWeek[DayOfWeek["SAT"] = 5] = "SAT";
    DayOfWeek["SUN"] = "SUN";
})(DayOfWeek || (DayOfWeek = {}));
// interface, 
// type
var x = DayOfWeek.SAT;
console.log(x);
