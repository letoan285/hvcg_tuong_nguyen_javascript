// import { myProduct as product} from './Product';
// import { myProduct as category} from './Category';
// import { MyRpdocut } from './Product';
// import {product} from './Product';
// import * as category from './Category';
// console.log('Your Iphone', youIphone);
// console.log('myIphone', myIphone);
// // 1. inheritance
// 2. encapsulation
// 3. abstraction
// 4. polimophism

// access modifier
// class Car {
//     public name: string = 'For';
//     public color: string ='Yellow';
//     public miror: number;
//     protected break: boolean; // some cars have, other dont have;
//     protected wheel: number = 4;
//     private speed: string = 'very fast';
//     getName(){
//         return 'Tuong';
//         // return this.name;
//     }
//     getColor(){
//         return this.color;
//     }
//     getBreak(){
//         return this.break;
//     }
//     getSpeed(){
//         return this.speed;
//     }
// }
// class Ford extends Car {
//     getWheel(){
//         return this.speed;
//     }
// }

// const myFord = new Ford();
// console.log(myFord.getWheel());
// console.log(myFord.getName());


// Techlead code
// class Bank {
//     private account: number = 2000;
//     private withdraw(acc: number){
//         if(acc >= this.account){
//             return 'Ong rut so tien vuot qua tai khoan hien co';
//         }
//         return acc;
//     }
// }


// // member code
// const myAccount = new Bank();

// const myMoney = myAccount.withdraw(3000);
// console.log(myMoney);

// class Animal {
//     public weight: number;
//     public height: number;
//     eat(kg: number){
//         console.log('');
        
//     }
// }
// class Dog extends Animal {
//     eat(kg: number){
//         this.height = kg+5;
//         this.weight = kg+2;
//     }
// }
// class Cat extends Animal {
//     eat(kg: number){
//         this.height = kg*5;
//         this.weight = kg*2;
//     }
// }

// const dog = new Dog();
// dog.eat(4);


// const cat = new Cat();
// cat.eat(4);

// console.log(cat);
// console.log(dog);

// interface IProduct {
//     name: string;
//     price: number;
//     getPrice(price: number): number;
// }

// abstract class Product implements IProduct {
//     name: string;
//     price: number;
//     abstract getColor();
//     getPrice(price: number): number {
//         return price;
//     };
// }
// class Shirt extends Product {
//     // abstract getBranch();
//     getColor(){}
// }
// // const product = new Product();
// // console.log(product);

// const myproduct = new Shirt();
// console.log(myproduct);


// function getName<T>(myName: T): T {
//     return myName;
// }

// interface IName {
//     name: string;
//     address: string;
//     age: number;
// }



// const myNumber = getName<IName>({name: 'Toan', address: 'vietname', age: 20});

// console.log(myNumber);

// @MyDecortor();
// class MyProduct<T, S, D, V> {
//     price: T;
//     name: S;
//     original: D;
//     stock: V;
//     constructor(price: T, name: S, original: D, stock: V){
//         this.price = price;
//         this.name = name;
//         this.original = original;
//         this.stock = stock;
//     }
// }

// interface IOrigin {
//     store: number;
//     brand: string;
// }


// const myIphone = new MyProduct<number, string, string, number>(2000, 'Iphone 7', 'USA', 20);


// const youIphone = new MyProduct<number, string[], IOrigin, boolean>(3000, ['iphone', 'bphone'], {store: 2, brand: 'Apple'}, true);



// console.log(product);
// console.log(category);
// namespace NameSpace1 {
//     export const product = {name: 'product 1'};

// }

// namespace NameSpace2 {
//     export const product = {name: 'product 2'};

// }

// const myProduct = {product1: NameSpace1.product, product2: NameSpace2.product};

// console.log(myProduct);

// 5kg cam, gia 45000, 
// 6kg chuoi, 30000,
// 8 thanh long, 27000;

// chaining method
// getCamPrice(5).getChuoiPrice(6).bill; // 9290000;


class Bill {
    protected orangePrice: number = 45000; // don gia
    protected bananaPrice: number = 30000;
    protected dragonFruit: number =  27000;
    public bill: number = 0;
    getOrangePrice(weight: number){
        this.bill += this.orangePrice*weight;
        return this;
    }
    getBananaPrice(weight: number){
   
        this.bill += this.bananaPrice*weight;
        return this;
    }
    getDragonFruitPrice(weight: number){
        this.bill += this.dragonFruit*weight;
        return this;
    }
}

const myBill = new Bill();
const bill = myBill.getOrangePrice(6).getBananaPrice(9).getDragonFruitPrice(4).bill; 
// const bill2 = myBill.getOrangePrice(3); 
// const bill3 = myBill.getDragonFruitPrice(8); 
// console.log(myBill.getBananaPrice(3));
// console.log(myBill.getOrangePrice(3));
// console.log(myBill.getDragonFruitPrice(3));
// console.log(bill);
// scss, not css 
