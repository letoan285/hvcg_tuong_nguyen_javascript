/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import { product } from '../product';\r\n// arrow function\r\n// function myFunc(){\r\n//     return 40;\r\n// }\r\n\r\n// let myFunc1 = function(){\r\n//     return 40;\r\n// };\r\n\r\n\r\n// let myFunc2 = () => {\r\n//     return 40;\r\n// };\r\n\r\n// const func = () => 9;\r\n\r\n// console.log(myFunc());\r\n// console.log(myFunc2());\r\n// console.log(func());\r\n\r\n// function getName(){\r\n\r\n// }\r\n\r\n// let obj = {}\r\n\r\n// camelCase; PascalCase; snake_case; kebab-case\r\n// 1. constructor\r\n// 2.\r\n// function myPerson(){\r\n//     return {\r\n//         name: 'tuong',\r\n//         age: 30,\r\n//         retire: function(){\r\n//             return 2050\r\n//         }\r\n//     }\r\n// }\r\n\r\n// const you = myPerson();\r\n// const me = myPerson();\r\n// console.log(you);\r\n// console.log(me);\r\n// function MyPerson(name, age, address){\r\n//     console.log(this);\r\n//     this.name = name;\r\n//     this.age = age;\r\n//     this.address = address;\r\n//     setTimeout(function(){\r\n//         console.log('name: ', this.name);\r\n//     }, 2000);\r\n// }\r\n\r\n// const you = new MyPerson('Tuong', 30, 'USA');\r\n// // const me = new MyPerson('Toan', 35, 'VN');\r\n// console.log(you);\r\n// console.log(me);\r\n\r\n// function getInfo(){\r\n//     setTimeout(function(){\r\n\r\n//     });\r\n// }\r\n\r\n\r\n// const person = {\r\n//     name: 'Tuong',\r\n//     getName(){\r\n//         console.log(this);\r\n//        setTimeout(() => {\r\n//            console.log(this);\r\n//         return this.name;\r\n//        }, 2000);\r\n//     }\r\n// }\r\n\r\n// person.getName();\r\n\r\n// rest, spread\r\n// function getParams(x, ...args){\r\n//     console.log(x, args);\r\n//     // return x+y+z;\r\n// }\r\n\r\n// getParams(9, 8, 7,4,5,6,7);\r\n\r\n// const obj = {name: 'Toan', age: 40, props: {name: 'My Props'}};\r\n\r\n// const ob = {...obj, address: 'Hanoi'};\r\n// ob.age = 100;\r\n// ob.name  = 'Tuong';\r\n// ob.props.name  = 'Your Props';\r\n\r\n// console.log(obj);\r\n// console.log(ob);\r\n\r\n// const arr = [1,2,3];\r\n// const arr1 = [6,7,8];\r\n// // const arr2 = [...arr, 4, 5];\r\n// // console.log(arr2);\r\n// // const arr3 = arr.concat(arr1);\r\n// const arr3 = [...arr, ...arr1, 99,90];\r\n// console.log(arr3);\r\n\r\n// const product = {\r\n//     name: 'Iphone',\r\n//     price: 2000,\r\n//     original: 'USA',\r\n//     stock: 30,\r\n//     props: {\r\n//         names: 'Black and white',\r\n//         refunc: false\r\n//     }\r\n// };\r\n\r\n// function getProduct(product){\r\n//     return {\r\n//         ...product,\r\n//         name: 'Samsung',\r\n//         price: 5000,\r\n//         original: 'Korea',\r\n//         color: 'Yello',\r\n//         props: {\r\n//             ...product.props,\r\n//             name: 'Red and Yellow'\r\n//         }\r\n//     }\r\n// }\r\n\r\n// const myIphone = getProduct(product);\r\n// console.log(myIphone);\r\n// console.log(product);\r\n\r\n// function getProps({name: myName, price, stock, props: {names}}){\r\n\r\n//     console.log(myName);\r\n//     console.log(stock);\r\n//     console.log(price);\r\n//     console.log(names);\r\n// }\r\n\r\n\r\n\r\n// getProps(product);\r\n\r\n// document.getElementById('main').addEventListener('click', () => alert('Thank for clicking me'));\r\n\r\n// function callMe(x, callback){\r\n//     callback();\r\n//     console.log(x);\r\n// }\r\n\r\n\r\n// callMe(200, () => {\r\n//     console.log('this is call back function');\r\n// });\r\n\r\n// map, filter, reduce, sort;\r\n\r\n// const myArr = [1,11,99, 33, 77,2,3,4,5,6,7,8,9,77];\r\n\r\n// const rs = myArr.filter(item => item % 2 != 0);\r\n// const rs = myArr.map((item) => {\r\n//     return item+3;\r\n// });\r\n\r\n// const rs = myArr.reduce((acc, curr) => acc + curr);\r\n// accumulator\r\n// const rs = myArr.sort((a, b) => a -b);\r\n\r\n// console.log(rs);\r\n\r\n// const myObj = {name: 'my name', age: 40};\r\n// const newObje = Object.keys(myObj).map((item, idx) => {\r\n//     console.log(item, idx);\r\n//    return {\r\n//        name: 'new name',\r\n//        age: item\r\n//    }\r\n// });\r\n// console.log(newObje);\r\n// function getRs1(){\r\n//     setTimeout(() => {\r\n//         console.log('This is order 1');\r\n//     }, 1000)\r\n// }\r\n\r\n// function getRs5(){\r\n//     console.log('This is order 5');\r\n// }\r\n\r\n\r\n// function getRs2(){\r\n//     setTimeout(() => {\r\n//         console.log('This is order 2');\r\n//     })\r\n// }\r\n\r\n// function getRs3(){\r\n//     let x = 10;\r\n//     setTimeout(() => {\r\n//         console.log('This is order 3');\r\n//     }, 20);\r\n// }\r\n\r\n\r\n// function getRs4(){\r\n//     setTimeout(() => {\r\n//         console.log('This is order 4');\r\n//         console.log(x+8);\r\n\r\n//     }, 0);\r\n// }\r\n\r\n// 5->2->4->3->1;\r\n\r\n// getRs1();\r\n// getRs3();\r\n// getRs4();\r\n// getRs5();\r\n// getRs2();\r\n\r\n// callback,\r\n// Promise;\r\n// async/await\r\n// observable\r\n// generator\r\n\r\n// const products = [\r\n//     {id: 1, name: 'Product 1', price: 1200},\r\n//     {id: 2, name: 'Product 2', price: 1900}\r\n// ];\r\n\r\n// function getProducts(products){\r\n//     let output ='';\r\n//     products.forEach(item => {\r\n//         output += `<li>name: ${item.name} -- price: ${item.price}</li>`\r\n//     });\r\n\r\n//     document.body.innerHTML = output;\r\n\r\n// }\r\n\r\n// function createProduct(product){\r\n//     // return new \r\n   \r\n    \r\n//     return new Promise((resolve, reject) => {\r\n        \r\n//         setTimeout(() => {\r\n            \r\n//             products.push(product);\r\n//                 resolve('success');\r\n//             }, 3000);\r\n//             })\r\n  \r\n// }\r\n\r\n\r\n// createProduct({id: 3, name: 'product 3', price: 2300}).then(() => {\r\n//     getProducts(products);\r\n\r\n// })\r\n\r\n\r\n// function getPromise(){\r\n//     // let error = true;\r\n//     // if(!error){\r\n//     //     return Promise.resolve(9999);\r\n//     // } else {\r\n//     //     return Promise.reject('Something wrong');\r\n//     // }\r\n//     return new Promise((resolve, reject) => {\r\n//         let error = false;\r\n//         if(!error){\r\n//         resolve(9999);\r\n//     } else {\r\n//        reject('Something wrong');\r\n//     }\r\n//     })\r\n// }\r\n\r\n// getPromise().then((res) => {\r\n//     console.log(res);\r\n// }).catch(err => console.log(err));\r\n\r\n// async function getName(){\r\n//     let x = await 9999;\r\n//     return 9999;\r\n// }\r\n// let x = getName();\r\n// x.then((res) => {console.log(res);})\r\n\r\n\r\n// function getAsync(){\r\n//     let y = getName();\r\n//     return y;\r\n\r\n// }\r\n\r\n// getAsync().then((res) => {\r\n//     console.log('res', res);\r\n// })\r\n// console.log('Hello ES6 Webpack !!!');\r\n\r\n// function asyncDemo(){\r\n//     return new Promise((resolve, reject) => {\r\n//         setTimeout(() => {\r\n//             let posts =  fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());\r\n\r\n//             resolve(posts);\r\n            \r\n//         }, 2000)\r\n//     })\r\n// }\r\n\r\n// let posts = asyncDemo().then((res) => {\r\n\r\n//     console.log(res);\r\n// });\r\n\r\n// async function getPosts(){\r\n//     let p = await asyncDemo();\r\n//     return p;\r\n// }\r\n// getPosts().then((res) => {\r\n//     console.log(res);\r\n// })\r\n\r\n// async function getAsyncFunc(){\r\n//     let x = await 999;\r\n//     return x;\r\n// }\r\n\r\n// getAsyncFunc();\r\n\r\n\r\n// let x = await 999;\r\n\r\n\r\n// Generator function\r\n// function* myGen(){\r\n//     // while(true){\r\n//     //     console.log('you are right');\r\n//     //     yield 1;\r\n//     // }\r\n//     // return 999;\r\n//     yield 1;\r\n//     console.log('aggaewg');\r\n//     yield 2;\r\n//     console.log('aggaewg');\r\n//     yield 3;\r\n//     console.log('aggaewg');\r\n//     yield 4;\r\n//     yield 5;\r\n// }\r\n\r\n// myGen();\r\n\r\n// const generatorFunc = myGen();\r\n\r\n// generatorFunc.next();\r\n// generatorFunc.next();\r\n// generatorFunc.next();\r\n// generatorFunc.next();\r\n// generatorFunc.next();\r\n// redux-saga\r\n\r\n// export name, export default\r\n\r\n// import  bestSellerProduct from './products';\r\n\r\n// console.log(products);\r\n// console.log('best seller', bestSellerProduct);\r\n\r\n// const myName = require('./products/list');\r\n// console.log(myName);\r\n// let x = 4;\r\n// class Apple {\r\n//     x = 4;\r\n//     // 1. properties\r\n//     // 2. method\r\n\r\n//     getX(){\r\n//         x = 5;\r\n//         return x;\r\n//     }\r\n// }\r\n// // car --> class\r\n// // mer --> object\r\n\r\n// myName = \"Tuyen Nguyen\";\r\n\r\n// // const app = new Apple();\r\n// console.log(myName);\r\n\r\nlet names = 'Heelo vietname';\r\nconsole.log(names);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });