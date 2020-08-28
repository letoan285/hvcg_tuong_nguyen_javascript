// var , let, const
// var x;
// const x = '';
// x = 9;

// let xx = 1; // 10/9 i code this line
// scope

// let x = 7;
// 12/09 you coded this line
// for(x = 0; x < 20; x++){
//     let y = x;
//     let xx = 9000;
// }



// 15/9 i code this line;
// console.log('value of xx '+xx);

// template literal.
// ``````````````````````
//~~~~~``````````````````````````````````````````````backtick;
// let name = "Vietname";
// console.log(`Hello ${name}`);
// const id = 5;
// const url = `http://google.com/api/products/${id}`;

// destructuring;
let obj = {
    name: 'Tuong',
    age: 20,
    isMerried: false,
    members: ['dad', 'momy', 'sister'],
    bod: function(){
        return 2020-20;
    },
    getRetired: function(age){
        return 2020+(60-this.age);
    },
    address: 'USA'
};

// let color = 'yellow';
// let city = 'Hanoi';
// let company = 'Google';

// const data = {
//     color,
//     city,
//     company: {
//     staff: {
//         age: 434
//     }
// }
// };

// goToHell(data);

// let { name,  address, color, compay } = obj; //--> let name = obj.name, let addres = obj.address, let color = obj.color



// console.log(data);
// let arr = ['Hanoi', true, 40, 'GOOOD'];

// let city = arr[0];
// let isMerrired = arr[1];
// let age = arr[2];
// let score = arr[3];
// console.log(score);

// let [city,,age] = arr;
// let myName = arr[4];
// console.log(arr[4]);
// console.log(age);

// let myObj = {
//     name: 'toan',
//     age: undefined,
//     add: 'hanoi'
// };

// delete myObj.age;
// const user = 'select * from users where id = 2';
// delete user.password;
// console.log(myObj);
// RAM, 4 vung nho, (heap, stack);
// let x = 6; // primative type , combile time

// let y = function(){ // reference type --> run time
//     return 6;
// }

// console.log(x);
// console.log(y());

// let x = 5;
// let y = x;
// y = 9;
// console.log(x); // 11xxy233. 99

// let x = { name: 'Tuong' };
// let y = x;

// y.name = 'Toan';

// x = new myCla();
// y = x;

// x.add = 'haoi';


// console.log(x);

// let x = 5;
// x = 6;

// const y = 8;
// y = 10;

const person = {
    name: 'le van toan',
    age: 30
}

// person.name = "nguyeh tuong";
// person.age = 20;
// person = {
//     name: 'nguyen tuong',
//     age: 20
// }

// deep copy vs shalow copy

let person1 = JSON.parse(JSON.stringify(person)); // deep copy

person1.name = 'new name';
person1.age = 99;

console.log(person);