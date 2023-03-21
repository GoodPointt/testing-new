// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }
//   return totalPrice;
// }

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//  orderedItems.forEach(order => totalPrice += order)
//  return totalPrice;
// }

//  calculateTotalPrice([1, 20, 150, 29]);
//  console.log(calculateTotalPrice([1, 20, 150, 29]));
//
//
//
//
//
// Example 1 - Коллбек функции
// Напишите следующие функции:

// createProduct(obj, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль
// Решение

// const createProduct = (obj, callback) => {
//   const newProduct = { id: Date.now(), ...obj };
//   console.log(newProduct);
//   callback(newProduct);
// };

// logProduct = product => {
//   console.log(product);
// };

// logTotalPrice = ({ price, quantity }) => {
//   console.log(price * quantity);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Example 2 - Коллбек функции
// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.

// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.

// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount should not exceed ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount should be more then 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// console.log(account.balance);

// Example 3 - Коллбек функции
// Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

// function each(array, callback) {
//   const newArray = [];
//   array.forEach(el => {
//     newArray.push(callback(el));
//   });
//   return newArray;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// Example 4 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// const logProduct = product => {
//   console.log(product);
// };

// const logTotalPrice = ({price, quantity}) => {
//   console.log(price * quantity);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Example 5 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// handleSuccess = message => {
//   console.log(`✅ Success! ${message}`);
// };
// handleError = message => {
//   console.log(`❌ Error! ${message}`);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 6 - Инлайн стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const newArray = [];

// function each(array, callback) {
//   array.forEach(el => {
//     newArray.push(callback(el));
//   });
//   return newArray;
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// console.log(each([64, 49, 36, 25, 16], value => value - 10));

// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// Example 8 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// OOOOOriginal
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// RRRRRRrefactored:
// printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(',');
//   console.log(nameList);
//   const phoneList = phones.split(',');

//   nameList.forEach((name, i) => {
//     console.log(`${name}: ${phoneList[i]}`);
//   });
// };
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 9 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// calculateAverage = (...args) => {
//   let total = 0;

//   args.forEach(el => {
//     total += el;
//   });

//   return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
