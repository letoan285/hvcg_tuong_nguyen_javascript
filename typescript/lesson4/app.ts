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
// const myData: string = 'iphone';

// 2. number
// const myPrice: number = 78000;

// 2. boolean
// const isAvailable: boolean = true;

// 4. null
// let myStatus: null = null;
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
// enum DayOfWeek {
//     MON = 4,
//     TUE,
//     WED = 9,
//     TH,
//     FRI,
//     SAT = 'egege',
//     SUN= 9,
//     THA
// }
// interface, 
// type

// let x = DayOfWeek.SAT;
// console.log(x);

// type ProductActionTypes1 = {
//     price: number;
//     name: string;
//     name100?: string;
//     supplier: string;
//     promotion?: number;
//     getPrice?: (payload: number) => number;
// }

// type ProductActionTypes2 = {
//     price1: number;
//     name1: string;
//     supplier1: string;
// }

// type ProductActionTypes3 ={
//     name3: string;
//     name4: string;
// }

// type ProductActionTypes = ProductActionTypes2 | ProductActionTypes1;

// const myProduct: ProductActionTypes = {
//     name: 'ihphneee',
//     name1:' this is name 1',
//     // name3: 'name 2',
//     // name4: 'gegege',
//     price1:44,
//     price: 800,
//     supplier: 'Apple',
//     getPrice(x: number){
//         return 9000;
//     }
// }

// interface IProduct1 {
//     color: string;
//     inStock: number;
// }
// interface IProduct2 {
//     width: number;
//     height: number;
// }
// interface IProduct3 {
//     origin: number;
//     isAvailable: number;
// }

// interface IProduct extends IProduct1, IProduct2 {
//     name: string;
//     price: number | string;
//     supplier: string;
//     address?: string;
//     getPrice:(price: number) => number;
// }

// class Product implements IProduct, IProduct3 {
//     myPrice: string;
//     name = '123445';
//     price =  '900';
//     supplier: string;
//     getPrice(x: number): number {
//         return x + 456;
//     };
// }

// interface ILaptop extends Monitor {}

// interface IMonitor {
//     // sale_price: number;
// }

// class Laptop {}

// class Monitor implements IMonitor {}

// class MyLaptop implements ILaptop {}
// export interface Product {
//     price: number;
//     color: string;
//     name: string;
// }

// export class Product {}

// const iphone = new Product();
// iphone.color



// code leader viet
// interface IProduct {
//     name: string;
//     price: number;
//     // supplier: string;
//     [key: string]: number;
// }

// code em viet
// const mySamsung: IProduct  = {
//     name: 'samsung',
//     price: 1000,
//     myGod: 
// }


// code anh viet
// const myIpone: IProduct  = {
//     name: 'iphone',
//     price: 1800,
//     supplier: 'USA'
// }

// clean architecture;

// let myStr:any = 'hello';


// console.log((myStr as string).replace('', ''));

// myStr = 999;
// console.log((myStr as number).toFixed(2));

// // myStr.
// myStr = [];
// console.log((myStr as []).push('gegeg'));



// myStr.

// myStr.toFixed();
// console.log();

// type casting
// type assertion


// class MyProduct {
//     name: string = 'Iphone';
//     price: number = 9000;
// }

// interface IProduct {
//     name: string;
//     price: number;
// }

// interface IProduct1 {
//     color?: boolean;
//     address?: string;
// }


// const myProduct: IProduct = {
//     name: 'true',
//     price: 4000
// }

// myProduct.name = 'hello'

// (myProduct.)
// const (myProducts as IProduct1) = {}

// class, object , generic