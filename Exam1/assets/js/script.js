//console.log('Hello World!');

// // одинарний коментар
//
// /*
// * коментар
// * в декілька
// * рядків
// */
//
// // крапка з комою
// // правильний запис
// console.log(1);
// console.log(2);
//
// // не правильний запис
// console.log(1)
// console.log(2)
//
// // Змінні
// let a = 'a';
// var b = 123;
// const ENV_DEV = true;
//
// // Оператори + - / * і т.д.
// console.log(1 + 2);
//
// // Ключові слова/вирази let, var, alert і т.д.
// let name = 'Aj';
// alert(name);
//
// // Блок інструкцій
// function sum() {
//     let num1 = 1;
//     let num2 = 5;
//     console.log(num1 + num2);
// }
// sum();
//
// // пробіли, регіст, назви
// let variable;
// let variable123;
// let $variable;
// let _variable;
//
// let variable, variable123, $variable, _variable;
//
// let variable,
//     variable123,
//     $variable,
//     _variable;

// string = 'text'
// console.log(string) //ERROR
// var string;

// let age;
// let myAge;
//
// let var;
// let for;
// let break;

// let a = 1;
//  a = 2;
//  a = 3;
// console.log(a);
//
// let age = 21;
// let myAge;
// myAge = 18;
// myAge = age;
// console.log(myAge)
//

//  if (1 === 1) {
//      var variable = 'value';
//  }
//
// console.log (variable); //ERROR
//
// const BLOCK_SIZE = 360;
//
// const OBJ = {
//     name: 'Name',
//     age: 23,
// }
 
//
//
//


//typeof variable;

// let myVar;
// console.log(typeof myVar)
//
// myVar = null;
// console.log(typeof myVar)
//
// myVar = true;
// console.log(typeof myVar)
//
// myVar = 0.1;  // 123; 0.1; infinity, NaN
// console.log(typeof myVar)
//
// myVar = 12345678901234567890123456789n;
// console.log(typeof myVar)
//
// myVar = 'string';
// console.log(typeof myVar)
//
// myVar = function sum(){
//     return 123;
// };
//  console.log(typeof myVar)
//
// myVar = Symbol('id');
// console.log(typeof myVar)
//

// myVar = 123;
// console.log(typeof myVar);
// myVar = String(myVar);

// let a = 5000;
//
// let b = '10';
//
// console.log('10' / 5000);

// console.log((5000/100) * b);
//
// console.log(myVar);

// String(), Number()






// let num = 1;

// while (num <= 10) {
//  console.log(num);
//  num++;
// }

// do {
//  console.log(num);
//  num++;
// } while (num < 10);
//
// for (let i = 0; i < 10; i++) {
//  console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//  if (i === 3) break;
//  console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//  if (i === 3) continue;
//  console.log(i);
// }

// function myFunction () {
//  console.log('Hello!');
// }
// myFunction ()

// function myDeclaration () {
//  console.log('Hello!1');
// }
// myDeclaration ()
//
// let myExpression = function () {
//  console.log('Hello!2');
// }
// myExpression ()

// function myFunction () {
//  function logNum() {
//   console.log(123);
//  }
//  logNum();
// }
//
// logNum();
// myFunction ()

// function calc (num1, num2) {
//  console.log(num1 + num2);
// }
// calc (123, 1);

// function calc (num1, num2) {
//  return num1 + num2;
// }
// let sum = calc (123, 1);
// console.log(sum);
//  let showMessage = (string1,string2) => {
//   return string1 + ' ' + string2 + '!';
//  }
//  console.log(showMessage('Hello', 'world'));

// function print (param) {
//  if (param === null) {
//   console.error('Error');
//  }
//  else if (param == 1) {
//   console.log('Hello');
//  }
//  else {
//   console.log(param);
//   }
// }
//
// print ()

// let showMessage = (string1,string2) => {
//  let text = string1 + ' ' + string2 + '!';
//  return text;
// }
// console.log(showMessage('Hello', 'world'));

//let obj = new Object();
// let obj = {};

//console.log(obj);

// let user = {
//  name: 'Name',
//  age: 18,
//  'i have hobby': true,
// }
// console.log(user);
// console.log(user['age']);
// console.log(user['i have hobby']);

// let id = Symbol('id');
// let user = {
//  name: 'Name',
//  age: 18,
//  [id]: 123,
// }

// let user = {
//  name: 'Name',
//  age: 18,
// }
// console.log(user);
// delete user.age;
// console.log(user);

// let user = {
//  name: 'Name',
//  age: 18,
// }
// user.info = 'test';
// user.age = 30;
// console.log(user);


// let user = {
//  name: 'Name',
//  age: 100,
// }
// let userInfo = Object.assign({}, user);
//
// userInfo.age = 30;
// console.log(user);
// console.log(userInfo);

// let user = {
//  name: 'Name',
//  age: 18,
//  address: {
//   street: 'Voli',
//  }
// }
//console.log(user.age);
//console.log(user.address.street);
//console.log(user?.address?.street);

// let user = {
//  name: null,
//  age: 18,
// }
//
// if (user.name == null) {
//  console.log(true);
// }

//
// let user = {
//  name: 'Name',
//  age: 18,
//  address: {
//    street: 'Voli',
//   }
// }
// for (let key in user) {
//  if (typeof user[key] === 'object') {
//   for (let key2 in user[key]) {
//    console.log(key2 + ': ' + user[key][key2]);
//   }
//  } else {
//   console.log(key + ': ' + user[key]);
//  }
// }
//
// let user = {
//  name: 'Name',
//  age: 18,
//  info: function () {
//   console.log('my age ' + user.age);
//  }
// }
// user.info();


// let user = {
//  name: 'Name',
//  age: 18,
//  info: function () {
//   console.log('my age' + this.age);
//  }
// }
// user.info();

// function user (name) {
//  this.age = 30;
//  this.name = name;
// }
//
//  console.log(new user('name'));
//  console.log(new user('name2'));


// let arr = new Array();
// let arr2 = [];

 // let arr = ['String 1', 'String 2', 'String 3'];
//
// arr = [
//     'String',
//     123,
//     true,
//     {},
//     function arr() {
//      console.log('Hello world!');
//     },
//     [1,2,3,4,['str', 123]],
// ]
 // console.log(arr[5][4][0]);

// console.log(arr[5][4].length)
//
// let arr2 = [];
//    arr2 = arr;
// console.log(arr2);

// let arr = ['String 1', 'String 2', 'String 3'];
// console.log(arr[1]);
// arr[1] = 'Test';
// console.log(arr[1]);
//
// arr['test'] = 123;
// arr[4] = 444;
// console.log(arr)

// arr = ['String 1', 'String 2', 'String 3'];
// arr.push('qwerty');
// console.log(arr);

// let test = arr.shift();
// console.log(test);
// console.log(arr);

// arr.pop();
// console.log(arr);
//
// arr.unshift('test');
// console.log(arr);

// let str = 'string 1,string 2,string 3';
// arr = str.split(',');
// console.log(arr);
// str = arr.join(',');
// console.log(str);

// let arr = ['String 1', 'String 2', 'String 3', 'String 4', 'String 5'];
//
// for (let i = 0;  i < arr.length ; i++) {
//  console.log('index: ' + i + ' item:' + arr[i] );
// }
//
// arr.forEach((item, index, array) => console.log('index: ' + index + ' item:' + item ))

 //
 // let age = prompt("Ваш рік народження","");
 // alert('Ваш вік' + (Number(new Date().getFullYear()) - Number(age)));

// let name;
// let lastName;
// let age;
//
// function start () {
//  name = prompt("Name","");
//  lastName = prompt("Last Name","");
//  age = prompt("Age","");
//  if (name && lastName && age) {
//   showUser(name, lastName, age);
//  } else {
//   alert('Error');
//   start ();
//  }
// }
//
// function showUser (name, lastName, age) {
//  let lineTop = '';
//  let lineBottom = '';
//  let header;
//  header = '|      ' + name + '      |      ' + lastName + '      |      ' + age + '      |';
//  for (let i = 0; i < 52; i++) {
//   lineTop = lineTop + '-';
//  }
//  lineBottom = lineTop;
//  console.log(lineTop);
//  console.log(header);
//  console.log(lineBottom);
// }
// start ();

// let myString = ' ';
// let myNumber = -123;
// let myBoolean = true;
// let myUndefined = undefined;
// let empty = null;
// let myObject = {};
// let myArray = [];
// let mySymbol = Symbol('id');
// let myFunction = function myFynction () {
//     console.log('Hello world');
// }
//
// if ((age <= 1) && (age >= 0)) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// let number;
// do {
//     number = parseInt(window.prompt("Please enter a number from 100 to 999", ""));
// } while(isNaN(number) || number > 999 || number < 100);
// let result = 0;
// while (number) {
//     result *= 10;
//     result += number % 10;
//     number = Math.floor(number / 10);
// }
// console.log(result);

// let a = 2 + 2;
//
// switch (a) {
//     case 3:
//         alert( 'Маловато' );
//         break;
//     case 4:
//         alert( 'В точку!' );
//         break;
//     case 5:
//         alert( 'Перебор' );
//         break;
//     default:
//         alert( "Нет таких значений" );
// }

// $('.tabs__buttons').on('click', 'div:not(.field-tab__item_active)', function() {
//     $(this).addClass('field-tab__item_active').siblings().removeClass('field-tab__item_active')
//         .closest('div.tabs').find('div.field-content__item').removeClass('field-content__item_active')
//         .eq($(this).index()).addClass('field-content__item_active');
// })

// let random = confirm('Ваше число дорівнює ' + Math.round(Math.random() * 100));
//
// if (random) {
//     alert('Ура я вгадав');
// } else {
//     let b = confirm('Ваше число менше N')
//     if (b) {
//         random /
//     } else {
//         confirm('Ваше число більше N')
//     }
// }
//
// let arr = [1,2,3,4,5,6,7,8,9,10]
//
// function binarySearch(value, list) {
//     let first = 0;    //left endpoint
//     let last = list.length - 1;   //right endpoint
//     let position = -1;
//     let found = false;
//     let middle;
//
//     while (found === false && first <= last) {
//         middle = Math.floor((first + last)/2);
//         if (list[middle] == value) {
//             found = true;
//             position = middle;
//         } else if (list[middle] > value) {  //if in lower half
//             last = middle - 1;
//         } else {  //in in upper half
//             first = middle + 1;
//         }
//     }
//     return position;
// }
//
// let a = confirm('Ваше число менше 5')
// if (a) {
//     arr = arr.slice(0,5)
// } else {
//     arr = arr.slice(5,10)
// }

// while (arr) {
//     let a = confirm('Ваше число менше 5')
//     if (a) {
//         arr = arr.slice(0,5)
//         console.log(arr);
//     } else {
//         arr = arr.slice(5,10)
//         console.log(arr);
//     }
// }


// let result = binarySearch(12, arr)
//
// console.log(result);


// switch (a) {
//     case 3:
//         alert( 'Маловато' );
//         break;
//     case 4:
//         alert( 'В точку!' );
//         break;
//     case 5:
//         alert( 'Перебор' );
//         break;
//     default:
//         alert( "Нет таких значений" );
// }

// let a = confirm('Ваше число дорівнює N')
// let b = confirm('Ваше число менше N')
// let c = confirm('Ваше число більше N')





// } else if (50 > num) {
//     console.log('< 50');
// }
// else if (100 > num) {
//     console.log('< 100');
// }
// else if (150 > num) {
//     console.log('< 150');
// } else {
//     console.log(false);
// }
let htmlDOM = document.documentElement;
let htmlHead = document.head;
let htmlBody = document.body;
//console.log(htmlDOM);
//console.log(htmlHead);
//console.log(htmlBody);
//
// let firstElement = htmlBody.firstChild;
// let lastElement = htmlBody.lastChild;
// console.log(firstElement);
// console.log(lastElement);
// console.log(htmlBody.childNodes);

// let h1 = document.querySelectorAll('h1');
// console.log(h1);

// let h1 = document.querySelector('h1');
// console.log(h1);

// let h1 = document.getElementById('title');
// console.log(h1);

// let h1 = document.getElementsByTagName('h1');
// console.log(h1);

// let h1 = document.getElementsByClassName('title');
// console.log(h1);

// let h1 = document.getElementsByName('title');
// console.log(h1);

// let h1 = document.getElementById('title');
// let closest = h1.closest('#title');
// console.log(closest);

// let h1 = document.getElementById('title');
// let text = h1.innerHTML;
// //console.log(text);
//  h1.innerHTML = '<p>1</p>';

// let newTag = document.createElement('div');
// newTag.innerHTML = '<p>Text</p>';
// console.log(newTag);
//
// let h1 = document.getElementById('title');
// //h1.before(newTag);
// // h1.after(newTag);
// // h1.prepend(newTag);
// // h1.append(newTag);

// let h1 = document.getElementById('title');
// h1.insertAdjacentHTML(
//     'afterend',
//     '<p>Text</p>'
// );

// let h1 = document.getElementById('title');
// h1.remove();

// let h1 = document.querySelector('.title');
// let elementClass = h1.className;
// console.log(elementClass);

// let h1 = document.querySelector('.title');
// h1.classList.add('test');
// h1.classList.remove('test');
// h1.classList.toggle('test');
// h1.classList.contains('test');

// let h1 = document.querySelector('.title');
// h1.style.color = 'red';

// let h1 = document.querySelector('.title');
// h1.style.cssText = 'color: red; font-size: 50px';



