// arrow function
// function myFunc(){
//     return 40;
// }

// let myFunc1 = function(){
//     return 40;
// };


// let myFunc2 = () => {
//     return 40;
// };

// const func = () => 9;

// console.log(myFunc());
// console.log(myFunc2());
// console.log(func());

// function getName(){

// }

// let obj = {}

// camelCase; PascalCase; snake_case; kebab-case
// 1. constructor
// 2.
// function myPerson(){
//     return {
//         name: 'tuong',
//         age: 30,
//         retire: function(){
//             return 2050
//         }
//     }
// }

// const you = myPerson();
// const me = myPerson();
// console.log(you);
// console.log(me);
// function MyPerson(name, age, address){
//     console.log(this);
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     setTimeout(function(){
//         console.log('name: ', this.name);
//     }, 2000);
// }

// const you = new MyPerson('Tuong', 30, 'USA');
// // const me = new MyPerson('Toan', 35, 'VN');
// console.log(you);
// console.log(me);

// function getInfo(){
//     setTimeout(function(){

//     });
// }


// const person = {
//     name: 'Tuong',
//     getName(){
//         console.log(this);
//        setTimeout(() => {
//            console.log(this);
//         return this.name;
//        }, 2000);
//     }
// }

// person.getName();

// rest, spread
// function getParams(x, ...args){
//     console.log(x, args);
//     // return x+y+z;
// }

// getParams(9, 8, 7,4,5,6,7);

// const obj = {name: 'Toan', age: 40, props: {name: 'My Props'}};

// const ob = {...obj, address: 'Hanoi'};
// ob.age = 100;
// ob.name  = 'Tuong';
// ob.props.name  = 'Your Props';

// console.log(obj);
// console.log(ob);

// const arr = [1,2,3];
// const arr1 = [6,7,8];
// // const arr2 = [...arr, 4, 5];
// // console.log(arr2);
// // const arr3 = arr.concat(arr1);
// const arr3 = [...arr, ...arr1, 99,90];
// console.log(arr3);

// const product = {
//     name: 'Iphone',
//     price: 2000,
//     original: 'USA',
//     stock: 30,
//     props: {
//         names: 'Black and white',
//         refunc: false
//     }
// };

// function getProduct(product){
//     return {
//         ...product,
//         name: 'Samsung',
//         price: 5000,
//         original: 'Korea',
//         color: 'Yello',
//         props: {
//             ...product.props,
//             name: 'Red and Yellow'
//         }
//     }
// }

// const myIphone = getProduct(product);
// console.log(myIphone);
// console.log(product);

// function getProps({name: myName, price, stock, props: {names}}){

//     console.log(myName);
//     console.log(stock);
//     console.log(price);
//     console.log(names);
// }



// getProps(product);

// document.getElementById('main').addEventListener('click', () => alert('Thank for clicking me'));

// function callMe(x, callback){
//     callback();
//     console.log(x);
// }


// callMe(200, () => {
//     console.log('this is call back function');
// });

// map, filter, reduce, sort;

// const myArr = [1,11,99, 33, 77,2,3,4,5,6,7,8,9,77];

// const rs = myArr.filter(item => item % 2 != 0);
// const rs = myArr.map((item) => {
//     return item+3;
// });

// const rs = myArr.reduce((acc, curr) => acc + curr);
// accumulator
// const rs = myArr.sort((a, b) => a -b);

// console.log(rs);

// const myObj = {name: 'my name', age: 40};
// const newObje = Object.keys(myObj).map((item, idx) => {
//     console.log(item, idx);
//    return {
//        name: 'new name',
//        age: item
//    }
// });
// console.log(newObje);
// function getRs1(){
//     setTimeout(() => {
//         console.log('This is order 1');
//     }, 1000)
// }

// function getRs5(){
//     console.log('This is order 5');
// }


// function getRs2(){
//     setTimeout(() => {
//         console.log('This is order 2');
//     })
// }

// function getRs3(){
//     let x = 10;
//     setTimeout(() => {
//         console.log('This is order 3');
//     }, 20);
// }


// function getRs4(){
//     setTimeout(() => {
//         console.log('This is order 4');
//         console.log(x+8);

//     }, 0);
// }

// 5->2->4->3->1;

// getRs1();
// getRs3();
// getRs4();
// getRs5();
// getRs2();

// callback,
// Promise;
// async/await
// observable
// generator

const products = [
    {id: 1, name: 'Product 1', price: 1200},
    {id: 2, name: 'Product 2', price: 1900}
];

function getProducts(products){
    let output ='';
    products.forEach(item => {
        output += `<li>name: ${item.name} -- price: ${item.price}</li>`
    });

    document.body.innerHTML = output;

}

function createProduct(product, cb){
    setTimeout(() => {
        products.push(product);
        cb(products);

    }, 5000);
}


createProduct({id: 3, name: 'product 3', price: 2300}, getProducts );

// getProducts(products);
