/*
 * Напиши скрипт, який, для об'єкта user, послідовно:
 * додає поле mood зі значенням 'happy'
 * замінює значення hobby на 'skydiving'
 * замінює значення premium на false
 * виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'sydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (let key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
 */

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1490,
// };
// let sum = 0;
// // const totalSalary = Object.values(salaries);
// // for (let value of totalSalary)  sum += value
// // console.log(sum)
// for (let salary in salaries) {
//   if (salaries.hasOwnProperty(salary)) sum += salaries[salary];
// }
// console.log(sum);

// *
//  * Напишіть ф-цію calcTotalPrice(array, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
//  */

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 6 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 150, quantity: 100 },
// ];

//Створіть об'єкт calculator із трьома методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//mult() перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(5, 6);
// console.log(calculator.sum())
// console.log(calculator.mult())
// console.log(calculator);

// Напишіть деструктуруюче присвоєння, яке:

// значення властивості name додати змінній name.
// значення властивості years додати змінній age.
// властивість isAdmin присвоює змінну isAdmin (false, якщо немає такої властивості)

// let user = {
//   name: 'John',
//   years: 30,
// };

// const { name, years, isAdmin = false } = user;
// console.log(name)
// console.log(years)
// console.log(isAdmin)

//Напишіть функцію updateObject, яка приймає об'єкт та повертає
//новий об'єкт без зазначеного параметра
//Очікуваний результат updateObject({a: 1. b: 2}, 'b') => {a: 1}

// function updateObject(obj, key) {
//   const newObj = { ...obj };
//   for (let item in newObj) {
//     if (item === key) {
//       delete newObj[item];
//     }
//   }
//   return newObj;
// }

// console.log(updateObject({ a: 1, b: 2 }, 'b'));

// function updateObject(obj, key) {
//   const newObj = {};
//   for (let item in obj) {
//     if (item !== key) {
//       newObj[item] = obj[item];
//     }
//   }
//   return newObj;
// }

// console.log(updateObject({ a: 1, b: 2 }, 'b'));

//Напишіть функцію copyArr(arr), яка копіює масив, не змінюючи оригінал.

// let vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морква'];
// function arrayClone(arr) {
//   // Ваш код
//   // return [...arr];

//   //metod 2
//   return arr.slice();
// }

// console.log(arrayClone(vegetables));

// Напишіть код, який перетворює та поєднує всі елементи масиву в одне рядкове
// значення. Елементи масиву будуть розділені комою. Отримайте результат двома різними
// методами.

// var vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морква'];

// console.log(vegetables.join(', '));

// var vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морква'];

// let products = '';
// const lastWord = vegetables[vegetables.length - 1];
// for (let vegetable of vegetables) {
//   if (vegetable !== lastWord)
//     products += vegetable + ', ';
//   else {
//     products += vegetable;
//   }
// }
// console.log(products);

// Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалено
// повторювані елементи з масиву arr (ігноруйте чутливість до регістру).

var arr = [
  'php',
  'php',
  'css',
  'css',
  'script',
  'script',
  'html',
  'html',
  'java',
];

// function removeDuplicates(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (i === arr.indexOf(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeDuplicates(arr));

// function removeDuplicates(arr) {
//   return [...new Set(arr)]
// }
// console.log(removeDuplicates(arr));

//Напишіть функцію, яка перевіряє, чи є елемент саме простим об'єктом, а не масивом, null тощо.

// function isPlainObject(a) {
//   return typeof a === 'object' && !Array.isArray(a) && a !== null;
// }

// console.log(isPlainObject({ a: 1 })); // true
// console.log(isPlainObject([])); // false
// console.log(isPlainObject(null)); // false
// console.log(isPlainObject(undefined));

// Опис завдання: Напишіть функцію, яка повертає вкладений масив виду `[[key, value], [key, value]]`.
// Очікуваний результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

//
// console.log(makePairs(data)); // [['a', 1], ['b', 2]]

// RESHENIE!!!!!
// variant1
// const data = { a: 1, b: 2 };
// function makePairs(data) {
//   return Object.entries(data)
// }
// console.log(makePairs(data)); // [['a', 1], ['b', 2]]

// const data = { a: 1, b: 2 };
// function makePairs(data) {
//   const newArr = [];
//   const keys = Object.keys(data);
//   for (let key of keys) {
//     // const childArr = [];
//     // childArr.push(key, data[key]);
//     // console.log(childArr);
//     newArr.push([key, data[key]]);
//   }
// }
// console.log(makePairs(data));

// const data = { a: 1, b: 2 };

// function makePairs(obj) {
//   return Object.entries(obj);
// }
//
//
//
// VAariant 2**
function makePairs(obj) {
  const newArr = [];

  const keys = Object.keys(obj);

  for (let key of keys) {
    // const childArr = [];
    // childArr.push(key, obj[key]);

    newArr.push([key, obj[key]]);
  }
  return newArr;
}

console.log(makePairs(data)); // [['a', 1], ['b', 2]]
