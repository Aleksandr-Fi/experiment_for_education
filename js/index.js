
// console.log(str);
// let txt = str.toLowerCase()
// console.log(txt);
// // let symb = txt[0]
// let map = {};
// // obj[txt[0]] = 1  //работает
// // console.log(obj);
// // let keys = Object.keys(obj);
// // console.log(keys);

// // console.log(keys[0] == txt[0]);
// // console.log(obj[txt[0]] > 0);

// function assignKey(obj, key) {
//     typeof obj[key] === 'undefined' ? obj[key] = 1 : obj[key]++;
// }
// for (let i = 0; i < txt.length; i++) {
//     assignKey(map, txt[i])
// }
// console.log(map);

// let i =0;
// let g = 0;
// while (i < txt.length) {
//     if (txt[i] == keys[g]) {
//         if (obj[txt[i]] > 0) {
//             obj[txt[i]]++
//         }
//     }
    
// }
// let str = 'zthj'
// const lettersCount = (str) => {
//     let txt = str.toLowerCase()
//     let map = {};
//     function assignKey(obj, key) {
//     typeof obj[key] == 'undefined' ? obj[key] = 1 : obj[key]++;
//     }
//     for (let i = 0; i < txt.length; i++) {
//         assignKey(map, txt[i])
//     }
//     return map
// };
// console.log(lettersCount(str));  //success!


// function finalGrade(exam, projects) {
//     // Ваше решение должно быть здесь
//     if (exam > 90 || projects > 10) {
//         console.log(projects > 10);
//         return 100
//     } else if (exam > 75 && projects >= 5) {
//         console.log(projects >= 5);
//         return 90
//     } else if (exam > 50 && projects >= 2) {
//         console.log(projects >= 2);
//         return 75
//     } else {return 0}
// }

// console.log(finalGrade(80, 3)); // success!

// const areBracketsBalanced = (str) => {
//     let c = 0;
//     for (let i = 0; i < str.length; i++) {
//         console.log(i);
//         if (c < 0) {
//             console.log('false');
//             return false
//         } else if (str[i] == '(') {
//             console.log('+1');
//             c++
//         } else if (str[i] == ')') {
//             console.log('-1');
//             c--
//         }
//         console.log(c);
//         console.log(i);
//     }
//     console.log(c);
//     if (c == 0) {
//         return true
//     } else return false

// };

// console.log(areBracketsBalanced('()')); //success!

// function findAllIdx(arr, value) {
//     let array =[];
//     for (let i = 0; i < arr.length; i++) {
//         if (value == arr[i] && typeof value == typeof arr[i]) {
//             array.push(i)
//         }
//     }
    
//     return array

// }

// console.log(findAllIdx([5, 2, 3, '5', 2, 5, 4], '5')); //success!



// let arr = ['1', 4, 3, 4, 1];

// function replaceItemsClear(arr, item, replaceItem) {
//     let array = [];
//     arr.forEach(element => {
//         if (element === item) {
//             array.push(replaceItem)
//         } else array.push(element)
//     });
//     return array
// }

// function replaceItemsMutate(arr, item, replaceItem) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             arr[i] = replaceItem
//         }
//     }
//     return arr
// } //success!

    // let arr = [1, 2, 3, 4, 5]
    // const moveToStart = (arr, n) => {
    //     let array1 = arr.slice(-n)
    //     let array2 = arr.slice(0, arr.length - n)
    //     return array1.concat(array2)
    // };
    // console.log('end', moveToStart(arr, 3)); //success!
// let map = [false, true, [1, 2], {}, [], 1, 0, NaN]
// console.log(typeof map);
// console.log(map[2]);
// console.log(Array.isArray(map[2]));

// const hasArrays = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         if (Array.isArray(arr[i]) == true) {
//             return true
//         }
//     }
//     return false
// };
// console.log(hasArrays(map));

// function getStringCount(object) {
//     //code here
//     let sum = 0
//     if (typeof object == 'string') {
//         console.log(object + ' str');
//         sum++
//     } else if (Array.isArray(object) == true) {
//         for (let i = 0; i<object.length; i++) {
//             sum += getStringCount(object[i])
//         }
//     } else if (typeof object == 'object') {
//         for (key in object) {
//             sum += getStringCount(object[key])
//         }
//     }
//     return sum
// }
// let obj = {  first: '1',  second: '2',  third: false,  fourth: ['anytime', 2, 3, 4 ],  fifth:  null}
// console.log(getStringCount(obj)); //success!!

// function optionalChaining (obj, chain) {
//     //code here
//     console.log(chain[0]);
//     let key = chain[0]
//     let map = obj[key]
//     console.log(map);
//     if (map == undefined) {
//         return undefined
//     }
//     if (chain.length > 1) {
//         chain.shift();
//         map = optionalChaining (map, chain)
//     }
//     return map
//     }
//     let obj = {
//         a: {
//             b: {
//                 c: {
//                 d: 'Привет!'
//                 }
//             }
//             }
//         }
//     let chain = ["a", "b", "c", "d"]
//     console.log(optionalChaining (obj, chain));
//---            -----------
//    success!!
//--------------------------

// function partition (array, callback = (element) => Boolean(element)) {
//     //code here
//     let falseArray = []
//     let trueArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (Boolean(callback(array[i])) == true) {
//             trueArray.push(array[i])
//         }
//         if (Boolean(callback(array[i])) == false) {
//             falseArray.push(array[i])
//         }
//     }
//     let arr = [trueArray, falseArray]
//     return arr
// }
//     const numbers = [0, 1, 2, {}, false, "", "0"];
//     console.log(partition(numbers, (element) => element));
    //---            -----------
    //    success!!
    //--------------------------

// let value = false
// console.log(Boolean(value));
// console.log(typeof true);

// const once = fn => { 
//     //code here
//     let fun = fn();
//     return () => fun;
// };

//     const fn = () => console.log('hi!');
//     const onceFn = once(fn);
//     onceFn(); // hi!
//     onceFn(); // nothing
 //---            -----------
    //    success!!
    //--------------------------

    // const inRange = (a, b) => {
    //     //code here
    //     return function(el) {
    //         return (Number(el) > a && b > Number(el))
    //     }
    // };
    
    // const inArray = arr => {
    //     //code here
    //     function fn(el) {
    //         for(let i = 0; i<arr.length;i++) {
    //             if (el === arr[i]) {
    //             return true
    //             }
            
    //         }
    //     }
    //     return fn
    //     return false
    // };
    
    // const notInArray = arr =>  {
    //     //code here
    // };

    // let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];
// console.log(arr.filter(inRange(2, 6)));
// console.log(arr.filter(inRange(3, 7))); // [3, 4, 5, 6]
// console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
// console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]
// console.log(arr.filter(element => {
//     function fn() {
//         if (element < 3) {
//             arr.shift()
//             return true
//         }
//         return false
//     }
//     return fn
// }));

// const getField = (data, field) => {
//     //code here
//     return data.map(el => el[field]);
//   };
// const data = [
//     {
//       name: 'Denis',
//       age: 25,
//     },
//     {
//       name: 'Ivan',
//     },
//     {
//       name: 'Ann',
//       age: 18,
//     },
//   ];
  
//   console.log(getField(data, 'age'));
  // [25, undefined, 18]
    //---            -----------
    //    success!!
    //--------------------------

// const data = [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
//     ];

//     const createUsernames = users => {
//         //code here
//         return users.map(user => {
//             user.username = user.firstName.toLowerCase() + user.lastName[0].toLowerCase() + (2020 - user.age)
//             return user
//         })
//     };

// const processedData = createUsernames(data);
// console.log(processedData); // [
// { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//  username: 'emilyn1990' },
// { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//  username: 'nore2000' }
// ];
    //---            -----------
    //    success!!
    //--------------------------




// const data =[
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//     { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

// const getMostSenior = humans => {
//     //code here
//   let arr = humans.sort((prev, next) => next.age - prev.age)
//   return arr.filter((man) => man.age == arr[0].age)
//   };

// const result = getMostSenior(data);
// console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
    //---            -----------
    //    success!!
    //--------------------------
// let arr1 = [1,2,3,4,5]
// let arr2 = [4,5,3,2,1]
// console.log(typeof arr1);

// const firstObject = {
//     a: {
//       b: {
//         c: 1,
//         d: 'string',
//         e: {
//           num: 1
//         }
//       }
//     }
//   };
// //   console.log(typeof firstObject !== 'object');
//   const secondObject = {
//     a: {
//       b: {
//         e: {
//           num: 1,
//         },
//         d: 'string',
//         c: 1,
//       }
//     }
//   };

// function deepEqual (obj1, obj2) {
    
//     function checkArr(arr1, arr2) {
//         return arr1.every(el => arr2.some(a => a==el))
//     };
    
//     function checkEl(arrKeys, object1, object2) {
//         let arr = arrKeys.map(key => deepEqual(object1[key], object2[key]))
//         console.log(arr);
//         if (arr.some(el => el == false)) {
//             console.log('елементы не равны');
//             return false
//         } 
//         console.log('елементы равны');
//         return true
//     };
    
//     if (obj1 == null || obj2 == null) {
//         if (obj1 == null && obj2 == null) {
//             return true
//         } return false
//         // if (typeof obj2 == 'object') {
//         //     return false
//         // }
//     }
    
//     if (typeof obj1 == typeof obj2) {
//         console.log('typeof ' + typeof obj1);
//         console.log(obj1);
//         console.log(obj2);
//         if (typeof obj1 !== 'object') {
//             console.log('не object');
//             if (obj1 ===  obj2) {
//                 console.log('равны - true');
//                 return true
//             }
//             console.log('not равны ');
//             return false
//         }
//         console.log('он объект');
//         let keys1 = Object.keys(obj1)
//         let keys2 = Object.keys(obj2)
//         if (!checkArr(keys1, keys2)) {
//             console.log(checkArr(keys1, keys2));
//             console.log('checkArr');
//             return false
//         }
//         if (keys1.length !== keys2.length) {
//             return false
//         }
//         console.log('ключи равны');
//         console.log('перебираем эл');
//         if (!checkEl(keys1, obj1, obj2)) {
//             console.log('итог ' + checkEl(keys1, obj1, obj2));
//             console.log('El не равны');
//             return false
//         } 
//             console.log('итог ' + checkEl(keys1, obj1, obj2));
//             console.log('иначе');
//             return true
//     }
//     return false
// }

//   console.log(deepEqual(firstObject, secondObject)); // true
  // console.log(deepEqual({ a:1, b: 3 }, { b: 2, a: 1})); // false
//   console.log(deepEqual(1, 2)); // false
//   console.log(deepEqual(null , null )); // true
//   {"name":"Misha","order":{"price":20}};
//   - b = {"name":"Misha","order":{"price":20,"extraField":null}} (1ms)
//   console.log(deepEqual({"name":"Misha","order":{"price":20}} , {"name":"Misha","order":{"price":20,"extraField":null}} ));
//   {"name":"Misha","order":{"price":20}};
//         - b = null (2ms)
// console.log(deepEqual({"name":"Misha","order":{"price":20}}, null));

// --------------------

// const sum = (...arg) => {
//   return arg.reduce((a, i) => {
//       if (!isNaN(i)) {
//           return a+Number(i)
//       } else return a
//   },0)
// };

// console.log(
//   sum(1, 2, 3, 4, 5, 6),
// ); // 21
// console.log(
//   sum(-10, 15, 100),
// ); // 105
// console.log(
//   sum(),
// ); // 0
// console.log(
//   sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),
// ); // 11. Прим: true было приведено к 1 (см. преобразование типов в js)

// _____________________________________

// const merge = (...arg) => {
//   return Object.assign({}, ...arg)
// };

// console.log(
//   merge(
//     {
//       name: 'John',
//       age: 22,
//     },
//     {
//       surname: 'Klein',
//       age: 20,
//       profession: 'student',
//     },
//     {
//       profession: 'frontend developer',
//       country: 'USA',
//     }
//   )
// );
// {
//   name: 'John',
//   surname: 'Klein',
//   age: 20,
//   profession: 'frontend developer',
//   country: 'USA',
// }
// ------------------------------------------------------------

// { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 }


// const data = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
//   { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
// ];

// const getLanguagesStatistic = (feedbacks) => {
//   // code here
//   return feedbacks.filter(obj => obj.year === 2019).reduce((acc,el) => {
//     acc[el.language] ? (acc[el.language]++) : (acc[el.language] = 1);
//     return acc
//   },{})
  
//   // return feedbacks.filter(obj => obj.year === 2019).reduce((acc,el) => {
//   //   !acc[el.language] ? (acc[el.language] = 1) : (acc[el.language]++);
//   //   return acc
//   // },{})
// };

// const result = getLanguagesStatistic(data);

// console.log(result);
// { 
//   C: 1, 
//   JavaScript: 2 
// }
// console.log(Boolean(undefined));
// ------------------------------------------

// const getArraysCounts = (arr) => {
//   //code here
//   return arr.reduce((map, el) => {
//     map.get(el) ? map.set(el, map.get(el)+1) : map.set(el, 1)
//     return map
//   }, new Map())

// };

// const obj = { name: 123 };
// const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
// const counts = getArraysCounts(data); // экземпляр Map
// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2
// let mip = new Map()
// mip.set(1, 1)
// mip.set(2,3)
// console.log(mip.get(2));
// console.log(mip[2]);
// ------------------------------------------

// const getDaysBetweenDates = (...arg) => {
//   //code here
//   if (arg.length != 2) return 'Error'
//   let a = new Date(arg[0])
//   let b = new Date(arg[1])
//   if (a == null || b == null) return NaN
//   if (a == 'Invalid Date' || b == 'Invalid Date') return NaN
//     const oneDay = 1000 * 60 * 60 * 24;
//     const diffInTime = b.getTime() - a.getTime();
//     console.log('pro ' + (diffInTime / oneDay));
//     let res = diffInTime / oneDay
//     if (res > 0) res = Math.floor(res)
//     if (res < 0) res = Math.ceil(res)
//     return res;
// };

// console.log(getDaysBetweenDates('1-1-2020', '1-2-2020'));
// console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)));
// console.log(getDaysBetweenDates(1409839200006, 1409925600000));
// console.log(getDaysBetweenDates(1409925600000, 1409796000000));
// console.log(getDaysBetweenDates('1-1-2020', 'дата'));
// console.log(getDaysBetweenDates(null));

// const isLeap = year => new Date(year, 1, 29).getDate() === 29;
// console.log(isLeap(1970));
// console.log(new Date(null));
// console.log(Math.floor( 0.95)); //  45)
// console.log(1000*60*60*24-1409925600000);


// const b = new Date('4-23-2021')
// console.log(b);
// console.log(b.getFullYear());
// console.log(b.getMonth());
// console.log(b.getDate());


// ====================================================

// console.log(Boolean(null));
// function Book(name, author, year) {
//   this.name = name;
//   this.author = author;
//   this.year = year;
//   this.reader = null;

// }

// Book.prototype = {
//   isAvailable() {
//       if (this.reader) {
//           return false
//       } return true
//   },
//   takeBook(readerName) {
//       if (this.isAvailable()) {
//           this.reader = readerName
//           return true
//       } return false
//   },
//   returnBook() {
//       if (!this.isAvailable()) {
//           this.reader = null
//           return true
//       } return false
//   },
//   changeBookName(newBookName) {
//       if (this.name !== newBookName) {
//           this.name = newBookName
//           return true
//       } return false
//   },
//   changeAuthorName(newAuthorName) {
//       if (this.author !== newAuthorName) {
//           this.author = newAuthorName
//           return true
//       } return false
//   },
//   getCurrentReader() {
//       return this.reader
//   }
// }
// const book = new Book('testName', 'testAuthor', 2020);
// console.log(Book.prototype.hasOwnProperty('isAvaliable'));

// ==========================================


//   Object.create = function(proto, propertiesObject) {
//     if (arguments.length == 0) {return TypeError}
//     if (proto == undefined) {return TypeError}
//     let obj = {
//         __proto__: proto
//     }
//     if (!propertiesObject) {
//     return obj
//     }
//     return Object.defineProperties(obj, propertiesObject)
// };
// const A = {
//     objectName: 'Object A',
//     getObjectName: function() {
//       return `This is ${this.objectName}!`;
//     },
//   };

//   const B = Object.create(undefined)
// //   A, {
// //     objectName: {
// //       value: 'Object B',
// //     },
// //   });
//   console.log(B);

//   console.log(A.getObjectName()); // This is Object A!
//   console.log(B.getObjectName()); // This is Object B!

//   console.log(A.hasOwnProperty('getObjectName')); // true
//   console.log(A.hasOwnProperty('objectName')); // true

//   console.log(B.hasOwnProperty('getObjectName')); // false
//   console.log(B.hasOwnProperty('objectName')); // true


//   console.log(Boolean(null));
//   const C = null;
//   if (!C && C != null) console.log('dhdh');

// ==============================================

// class Calc {
//     constructor(arg = 0) {
//         this.res = arg
//     }
//     result() {
//         return this.res
//     }
//     add(x) {
//         return new Calc(this.res + x)
//     }
//     sub(x) {
//         return new Calc(this.res - x)
//     }
// }

// const calc = new Calc();
// calc.result(); // 0
// console.log(calc.result());
// calc.add(5)
// console.log(calc.result());
// calc.add(5).result(); // 0 + 5 = 5
// console.log(calc.add(5).result());
// calc.add(3).sub(10).result(); // 0 + 3 - 10 = -7

// const ten = calc.add(10);
// ten.sub(5).result(); // 10 - 5 = 5
// ten.result(); // 10

// ====================================================


// class Addition {
//     constructor (num) {
//     	this.num = num;
//     }

//     add (...nums) {
//     	const sum = (a, b) => a + b;
//     	return this.num + nums.reduce(sum);
//     }
// }
// // Write you code here
// function dec(func) {
//   return function() {
//     console.log('called')
//     let result = func.apply(this, arguments); // теперь 'this' передаётся правильно
//     return result;
//   };
// }

// Addition.prototype.add = dec(Addition.prototype.add)
// // End of code

// const startedValue = new Addition(5);
// const result = startedValue.add(3,5,6) //В консоль выводится "called"
// console.log(startedValue.add(3,5,6));
// console.log(result) //В консоль выводится 19
// console.log(result) //В консоль выводится 19

// ==============================================================

// class Person {
//     constructor(firstName, lastName, bithd) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.bithd = new Date(bithd)
//     }
//     get fullName() { 
//         return `${this.firstName} ${this.lastName}`
//     } 
//     getAge() {
//         let data = new Date('2019-05-23')
//         let res = Math.floor((data.getTime() - this.bithd.getTime())/1000/3600/24/366)
//         if (data.getMonth() > this.bithd.getMonth() || (data.getMonth() == this.bithd.getMonth() && data.getDate() > this.bithd.getDate())) {
//             return res+1
//         } return res
//     }
// }

// class Account {
//     constructor(person, money) {
//         this.person = person
//         this.money = money
//         this.accountHistory = []
//     }
//     addMoney(amount, description) {
//         this.money += amount
//         const data = new Date();
//         this.accountHistory.push({
//             timestamp: data.getTime(),
//             target: 'in',
//             amount: amount,
//             description: description
//         })
//     }
//     withdrawMoney(amount, description) {
//         this.money -= amount
//         const data = new Date();
//         this.accountHistory.push({
//             timestamp: data.getTime(),
//             target: 'out',
//             amount: amount,
//             description: description
//         })
//     }
//     getAmount() {
//         return this.money
//     }
//     getAccountHistory() {
//         return this.accountHistory
//     }
//     static transfer(fromAccount, toAccount, amount) {
//         fromAccount.withdrawMoney(amount, 'transfer')
//         toAccount.addMoney(amount, 'transfer')
//     }
// }

// const alex = new Person('Alexey', 'Petrov', '1992-05-21');
// console.log(alex.getAge());

// const alexAccount = new Account(alex, 1000);
// const helen = new Person('Helen', 'Smith', '1990-06-06');
// const helenAccount = new Account(helen, 400);

// alexAccount.addMoney(1000, 'Зарплата');
// const amount = alexAccount.getAmount();
// alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
// Account.transfer(alexAccount, helenAccount, 100);
// helenAccount.getAmount(); // 500
// alexAccount.getAmount(); // 1700
// console.log(helenAccount.getAmount());
// console.log(alexAccount.getAmount());
// console.log(alexAccount.getAccountHistory());

// ================================================================

// function arrayToCsv(data) {
//     try {
//         console.log(data);
//         let i = 0
//         if (Array.isArray(data)) {
//             if (i === 0) {
//                 console.log(i);
//                 i++
//                 return data.map(el => arrayToCsv(el)).join('\\n')
//             } else {
//                 console.log(i);
//                 return data.map(el => arrayToCsv(el)).join(',')
//             }
//         } else {
//             // console.log('или');
//             if (typeof data === 'string') {
//                 if (data.match(/(,|"|\n)/)) {
//                     data = data.replace(/"/g, '""');
//                     data = `"${data}"`;
//                 }
//                 return data;
//             } else if (typeof data === 'number') {
//                 return data;
//             }
//             return false
//         }
//         return res
        // error
        // console.log('ошибка');
        // throw Error
        // console.log('после ошибки');
    // }
    // catch (e) {
        // throw new Error('Unexpected value')
    // }
// }

// console.log(arrayToCsv([[1, 2], ['a', 'b']])); // '1,2\na,b'
// console.log(arrayToCsv([[1, 2], ['a,b', 'c,d']])); // '1,2\n"a,b","c,d"'
// const data1 = [['"text"', 'other "long" text']];
// console.log(arrayToCsv([['"text"', 'other "long" text']])); //'"""text""","other ""long"" text"'

// ========================================================================================================

// const pruvObj = {
//     oneName: 3,
//     twoName: 6
// }
// // localStorage.clear()
//         // localStorage.setItem("counters", JSON.stringify(pruvObj))
//         console.log(JSON.parse(localStorage.getItem("counters")));


// function incrementCounter(counterName){
//     // console.log(counterName);
//     let obj = {}
//     try {
//         obj = JSON.parse(localStorage.getItem("counters"))
//         counterName.forEach((name)=>{
//             console.log(obj[name]);
//             if (obj[name]) {
//                 obj[name]++
//             } else {
//                 obj[name] = 1
//             }
//         })
//         // localStorage.setItem("counters", JSON.stringify(obj))
//         // return counterName.reduce((acc,name)=>acc[name]=JSON.parse(localStorage.getItem("counters"))[name],{})
//     }
//     catch (e) {
//         counterName.forEach((name)=>obj[name]=1)
//     }
//     console.log(obj);
//     localStorage.setItem("counters", JSON.stringify(obj))
//     return counterName.reduce((acc,name)=>acc[name]=JSON.parse(localStorage.getItem("counters"))[name],{})
// }

// const arrOne = ['oneName']
// const arrTwo = ['oneName','twoName']
// // arrTwo.forEach((el)=>console.log(el))
// // console.log(incrementCounter(arrOne));
// console.log(incrementCounter(arrTwo));

// ================================================================


// class AttemptsLimitExceeded extends Error {
//     constructor(){
//       super('Max attempts limit exceed');
//       this.name = 'AttemptsLimitExceeded';
//     }
//   }
  
//   class NotFoundError extends Error {
//     constructor(){
//       super('Not found');
//       this.name = 'NotFoundError';
//     }
//   }
  
//   class TemporaryError extends Error {
//     constructor(){
//       super('TemporaryError');
//       this.name = 'TemporaryError';
//     }
//   }
  
//   function getRepeatableData(getData, key, maxRequestsNumber) {
//    //ваш код здесь
//       try {
//           console.log('1-p: ' + maxRequestsNumber);
//           return getData(key)
          
//       } catch (e) {
//           if (e.name === 'NotFoundError') {
//               throw new NotFoundError('NotFoundError')
//           }
//           if (e.name === 'TemporaryError') {
//               console.log('TemporaryError');
//               if (!maxRequestsNumber && maxRequestsNumber != 0) {
//                   console.log('one');
//                   return getRepeatableData(getData, key, maxRequestsNumber)
//               }
//               if (maxRequestsNumber > 0) {
//                   console.log('two');
//                   const val = maxRequestsNumber - 1
//                   return getRepeatableData(getData, key, val)
//               }
//               console.log('AttemptsLimitExceeded');
//               throw new AttemptsLimitExceeded('AttemptsLimitExceeded')
//           }
//       }
//   }
//   const getData = (key, maxRequestsNumber) => {
//           throw new TemporaryError(e)
//   };
// const res = getRepeatableData(getData, '1', 3); 
// console.log(res); // 'hello1'

// =================================================================================


// class ExecutionError extends Error {
//     // getArgData() => {
        
//     // }
// }

// function applyFn(dataArr, callback) {
//     const suc = []
//     const err = []
//     dataArr.map((el)=>{
//             try {
//                 suc.push(callback(el))
//             } catch (e) {
//                 err.push(e.name)
//             }
//         })
//     return {suc, err}
// }

// // const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
// //   succeeded: [2, 3, 4],
// //   errors: [],
// console.log(applyFn([1, 2, 3], (arg) => arg + 1));
// const dataArr = ['{"login":"login","password":"password"}', '{{}'];
// const callback = JSON.parse;
// const { succeeded, errors } = applyFn(dataArr, callback);
// //   succeeded: [{ login: 'login', password: "password" }],
// //   errors: [ExecutionError],
// errors[0].getArgData(); // '{}'

// ================================================================================

// class ExecutionError extends Error {
//     constructor(element, num) {
//         super(element, num)
//         this.element = element
//         this.stack = `${num}`
//     }
//     getArgData() {
//         return this.element
//     }
// }

// function applyFn(dataArr, callback) {
//     const succeeded = []
//     const errors = []
//     dataArr.map((el)=>{
//             try {
//                 succeeded.push(callback(el))
//             } catch (e) {
//                 const num = dataArr.indexOf(el)
//                 errors.push(new ExecutionError(el, num))
//             }
//         })
//     return {succeeded, errors}
// }

// const check = applyFn([1, 2, 3], (arg) => arg + 1);
// //   succeeded: [2, 3, 4],
// //   errors: [],
// // console.log(check);

// const dataArr = ['{"login":"login","password":"password"}', '{{}'];
// const callback = (el) => {return JSON.parse(el)};
// const obj = applyFn(dataArr, callback);
// //   succeeded: [{ login: 'login', password: "password" }],
// //   errors: [ExecutionError],
// // errors[0].getArgData(); // '{}'
// console.log(obj);
// // console.log(obj.errors[0].getArgData());
// console.log(obj.errors[0].stack);
// console.log(typeof obj.errors[0].stack);

// ==========================================================================================


// let fileSizes = {
//     testFile1: 65,
//     testFile2: 48,
//   }
  
//   function getFileSize(filename, cb) {
//       console.log(11);
//       console.log(cb(fileSizes[filename]));
//     return setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
//   }
  
//   function sumFileSizes(filename1, filename2, cb) {
//     //Ваш код...
//     let res = 0
//     console.log(res);
//     getFileSize(filename1, (arg)=>res+=arg)
//     console.log(res);
//     getFileSize(filename2, (arg)=>res+=arg)
//     console.log(res);
//     console.log(cb(res));
//     console.log(22);
//     return setTimeout(cb(res), 505)
//   }

//   const cid = (arg) => arg
//   console.log('00');
//   console.log(sumFileSizes('testFile1', 'testFile2', cid));

// ===================================================================================

// const data = {
//   id2: {name: 'Alex', age: 70},
//   id6: {name: 'Elon'},
//   id3: {"lastName": "Ivanov",
//     "name": "Pavel",
//     "profession": "programmer",
//   },
//   id4: {
//     "name": "Petr",
//   },
//   id5: {
//     "city": "St. Petersburg",
//     "name": "Lena",
//   },
//   id7: {
//     "age": 25,
//     "hobbys": [
//       "traveling",
//       "macrame"
//     ],
//     "name": "Olesya",
//   }
// };

// const getUsersIds = function(id, cb) {
//   cb(data[id])
// }

// const getUserInfo = function(data,cb) {
//   cb(Object.keys(data))
// }

// function getUsersInfo(onLoad) {
    
//   let res = []
  
//   const makeUserInfo = (arr) => {
//       if (arr.length !== 0) { 
//           getUsersIds(arr.shift(), (userInfo) => {
//               res.push(userInfo)
//               if (arr.length !== 0) {
//                   makeUserInfo(arr)
//               }
//           });
//       }
//       return onLoad(res)
//   }
//   getUserInfo(() => makeUserInfo)
// }

// const ausers = [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]

// getUsersInfo((users) => {
//   console.log(users); // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]
// });

// ===============================================================================================

// console.log(Math.min(['id1', 2][1], ['id2', 23][1]));


// function increaseSalary() {
//     // Write your code here
//     return new Promise((resolve) => {
//         const res = api.getEmployees()
//           .then(employeesData => {
//               const employee = employeesData.reduce(([minId, minSalary], employee) => {
//                   return (employee.salary > minSalary
//                       ? [minId, minSalary]
//                       : [employee.id, employee.salary]
//                   )
//               }, [null, Infinity])
//               return employee
//           })
//           .then(([idMinSal, minSal]) => api.setEmployeeSalary(idMinSal, minSal*1.2))
//           .then(employee => api.notifyEmployee(employee.id, `Hello, ${employee.name}! Congratulations, your new salary is ${employee.salary}!`))
//           .catch(e => api.notifyAdmin(e))
//           resolve(res)
//       })
//   }

//   const api = {
//     _employees: [
//       { id: 1, name: 'Alex', salary: 120000 },
//       { id: 2, name: 'Fred', salary: 110000 },
//       { id: 3, name: 'Bob', salary: 80000 },
//     ],
  
//     getEmployees() {
//       return new Promise((resolve) => {
//         resolve(this._employees.slice());
//       });
//     },
  
//     setEmployeeSalary(employeeId, newSalary) {
//       return new Promise((resolve) => {
//         this._employees = this._employees.map((employee) =>
//           employee.id !== employeeId
//             ? employee
//             : {
//               ...employee,
//               salary: newSalary,
//             }
//         );
//         resolve(this._employees.find(({ id }) => id === employeeId));
//       });
//     },
  
//     notifyEmployee(employeeId, text) {
//       return new Promise((resolve) => {
//         resolve(true);
//       });
//     },
  
//     notifyAdmin(error) {
//       return new Promise((resolve) => {
//         resolve(true);
//       });
//     },
  
//     setEmployees(newEmployees) {
//       return new Promise((resolve) => {
//         this._employees = newEmployees;
//         resolve();
//       });
//     },
//   };
  
//   console.log(increaseSalary(api));
//   console.log(api._employees[2]);
//   console.log('должно быть ' + api._employees[2].salary*1.2);

// ===========================================================================================

// async function increaseSalary() {
//     //Ваш код...
//       let count = 0
//       let sumSalaries = 0

//       const sendRequestSalary = async (pers, salary) => {
//         try {
//           await api.setEmployeeSalary(pers.id, salary);
//           let text = `Hello, ${pers.name}! Congratulations, your new salary is ${salary}!`;
//           await api.notifyEmployee(pers.id, text);
//           pers.salary = salary
//           count++;
//           sumSalaries += salary
//         } catch (e) {
//           await api.notifyAdmin(e);
//         }
//       }

//       let employeesData = await api.getEmployees()
//       const averSalary = employeesData.reduce((acc, el) => acc += el.salary, 0) / employeesData.length
//       try {
//           for (employee of employeesData) {
//             if (employee.salary > averSalary) {
//               newSalary = employee.salary * 1.1
//               await sendRequestSalary(employee, newSalary);
//             } else if (employee.salary < averSalary) {
//               newSalary = employee.salary * 1.2
//               await sendRequestSalary(employee, newSalary);
//             }
//           }
//       } catch (e) {
//           await api.notifyAdmin(e);
//       }

//       console.log(sumSalaries);
//       await api.sendBudgetToAccounting(sumSalaries)
//       return count
//   }
  
//   const api = {
//     _employees: [
//       { id: 1, name: 'Alex', salary: 120000 },
//       { id: 2, name: 'Fred', salary: 110000 },
//       { id: 3, name: 'Bob', salary: 80000 },
//       // { id: 4, name: 'Boky', salary: 'error' }
//     ],
  
//     getEmployees() {
//       return new Promise((resolve) => {
//         resolve(this._employees.slice());
//       });
//     },
  
//     setEmployeeSalary(employeeId, newSalary) {
//       return new Promise((resolve) => {
//         const updatedEmployees = this._employees.map((employee) =>
//           employee.id !== employeeId
//             ? employee
//             : {
//               ...employee,
//               salary: newSalary,
//             }
//         );
//         this._employees = updatedEmployees;
//         resolve(this._employees.find(({ id }) => id === employeeId));
//       });
//     },
  
//     notifyEmployee(employeeId, text) {
//       return new Promise((resolve) => {
//           console.log('employee: ' + text);
//         resolve(true);
//       });
//     },
  
//     notifyAdmin(error) {
//       return new Promise((resolve) => {
//         console.log('Admin: ' + error);
//         resolve();
//       });
//     },
  
//     setEmployees(newEmployees) {
//       return new Promise((resolve) => {
//         this._employees = newEmployees;
//         resolve();
//       });
//     },
  
//     sendBudgetToAccounting(newBudget) {
//       return new Promise((resolve) => {
//         resolve(newBudget);
//       });
//     },
//   };

//   console.log(increaseSalary(api));

// -------------------------------------------------------------------------------------------------------------

// async function promisesInSeries(asyncFns) {
//   const res = []
  
//   for (const prom of asyncFns) {
//       res.push(await prom(res[res.length-1]))
//   }
  
//   return res[res.length-1]
// }

// const firstPromise = () =>
//   new Promise((resolve) => setTimeout(() => resolve(300)), 300);

// const secondPromise = () =>
//   new Promise((resolve) => setTimeout(() => resolve(200)), 200);

// const thirdPromise = () =>
//   new Promise((resolve) => setTimeout(() => resolve(100)), 100);


// console.log(promisesInSeries([firstPromise, secondPromise, thirdPromise]));

// -----------

const throttle = (fn, throttleTime) => {
    let waiting = false
    return function(...args) {
        if (waiting) {
            return
        }
        
        fn.apply(this, args)
        
        waiting = true
        setTimeout(() => waiting = false, throttleTime)
    }
};
let counter = 0;
const fn = () => {
  counter++;
};
const throttledFn = throttle(fn, 500); // функция может быть вызвана не чаще, чем раз в 500 мс

const intervalId = setInterval(throttledFn, 100);
setTimeout(() => clearInterval(intervalId), 1000); // удаляем интервал через 10 вызовов

console.log(counter); // 3
// -----------------------------------------------------------------------------------------------------------------
