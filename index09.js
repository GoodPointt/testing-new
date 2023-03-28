// Example 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

// VARIANT 2
// calcTotalPrice(stoneName) {
//   let stoneTotalPrice = 0;
//   this.stones.forEach(stone => {
//     if (stone.name === stoneName) {
//       stoneTotalPrice = stone.price * stone.quantity;
//     }
//   });
//   return stoneTotalPrice;
// },

// OTHER VARIANT
// calcTotalPrice(stoneName) {
//   const currentStone = this.stones.find(({ name }) => name === stoneName);
//   console.log(currentStone);
//   return currentStone.price * currentStone.quantity;
// },

// OTHER SHORTER VARIANT
//   calcTotalPrice(stoneName) {
//     const {price, quantity} = this.stones.find(({ name }) => name === stoneName);
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// Example 2 - Телефонная книга
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );
// console.log(phonebook);

// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(10, 20);
// console.log(calculator.add());
// console.log(calculator.mult());

// console.log(calculator);
//
//
//RAZBIRAEMSA
//
// const user = {
//   username: 'Alex',
//   sayHi() {
//     console.log(`Hello ${this.username}`);
//   },
// };
// const user2 = {
//   username: 'Olga',
//   foo: user.sayHi,
// };

// user.sayHi();
// user2.foo();
//
//
//
//
// function boo() {
//   console.log(this);
// }

// const user = {
//   username: 'Alex',
//   sayHi() {
//     const foo = () => console.log(this);
//     // foo.call({ username: 'Lena' });
//     const fooCopy = foo.bind({ username: 'Lena' });
//     fooCopy();
//     // boo();
//     console.log(`Hello ${this.username}`);
//   },
// };

// user.sayHi();
// // boo.call(user);
//
//
//
//
//
const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  console.log(callback);
  // callback() это вызов метода getFullName без объекта
  console.log(`Обрабатываем заявку от ${callback()}.`);
}

makeMessage(customer.getFullName.bind(customer)); // Будет ошибка при вызове функции
