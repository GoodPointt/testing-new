// Перед вами змінна, що містить рядок. Напишіть код, який створює масив, який
//складатиметься з перших літер слів рядка str.

// const str = 'Каждый охотник желает знать, где сидит фазан.';

// function firstLettersOfWords(str) {
//   const array = str.split(' ');
//   return array.map(word => word[0]);
// }

// console.log(firstLettersOfWords(str)); // [К,о,ж,з,г,с,ф]

// Tutor 43 2:14 PM
//1 (map()) Потрібно отримати масив імен студентів та записати їх великими літерами.

// let studentRecords = [
//   { name: 'John', id: 123, marks: 98 },
//   { name: 'Baba', id: 101, marks: 23 },
//   { name: 'yaga', id: 200, marks: 45 },
//   { name: 'Wick', id: 115, marks: 75 },
// ];

// const recordsInUpperCase = studentRecords.map(({ name }) => name.toUpperCase());

// console.log(recordsInUpperCase);

// 2 (filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
// отримати детальну інформацію про студентів, які набрали більше 50 балів.

// let studentRecords = [
//   { name: 'John', id: 123, marks: 98 },
//   { name: 'Baba', id: 101, marks: 23 },
//   { name: 'yaga', id: 200, marks: 45 },
//   { name: 'Wick', id: 115, marks: 75 },
// ];

// const sttudentsByMarks = studentRecords.filter(({ marks }) => marks > 50);
// console.log(sttudentsByMarks);

// 3  (reduce()) Необхідно одержати загальну суму балів студентів.

// let studentRecords = [
//   { name: 'John', id: 123, marks: 98 },
//   { name: 'Baba', id: 101, marks: 23 },
//   { name: 'yaga', id: 200, marks: 45 },
//   { name: 'Wick', id: 115, marks: 75 },
// ];

// const marksSum = studentRecords.reduce((total, ({marks})) => total + marks, 0);
// console.log(marksSum)

// 4 (map(), filter()) Необхідно отримати лише імена студентів, які набрали більше 50 балів із того ж набору
// даних.

// let studentRecords = [
//   { name: 'John', id: 123, marks: 98 },
//   { name: 'Baba', id: 101, marks: 23 },
//   { name: 'yaga', id: 200, marks: 45 },
//   { name: 'Wick', id: 115, marks: 75 },
// ];

// const newArr = studentRecords
//   .filter(({marks}) => marks > 50)
//   .map(({ name }) => name);

//   console.log(newArr)

// 5 (filter(), reduce()) Необхідно отримати загальну суму балів студентів із id більше 120.

// let studentRecords = [
//   { name: 'John', id: 123, marks: 98 },
//   { name: 'Baba', id: 101, marks: 23 },
//   { name: 'yaga', id: 200, marks: 45 },
//   { name: 'Wick', id: 115, marks: 75 },
// ];

// const studentsScore = studentRecords
//   .filter(({ id }) => id > 120)
//   .reduce((sum, ({marks})) => sum + marks, 0);

//   console.log(studentsScore)

// Використовуючи метод map(), напишіть код, який отримує з масиву рядків новий масив, що містить їх довжини.

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// const newArr = vegetables.map(el => el.length);
// console.log(newArr);

// (map(), filter(), reduce()) Необхідно вивести загальну кількість студентів із балами
//більше 50, отриманими після нарахування заохочення до 15 балів.
//Використовуючи map(), додається заохочення до 15 балів студентам, які набрали менше 50 балів.
// Потім використовуємо filter() для масиву студентів, що повертається функцією map().
// Так ми знайдемо всіх студентів із відмітками понад 50.
// Нарешті ми використовували функцію reduce() для повертаного функцією filter()
// масиву студентів, щоб повернути суму оцінок.

// let studentRecords = [
//   { name: 'John', id: 123, marks: 98 },
//   { name: 'Baba', id: 101, marks: 23 },
//   { name: 'yaga', id: 200, marks: 45 },
//   { name: 'Wick', id: 115, marks: 75 },
// ];

// const totalMarksSum = studentRecords
//   .map(student => {
//     if (student.marks < 50) student.marks += 50;
//     return student;
//   })
//   .filter(student => student.marks > 50)
//   .reduce((total, student) => total + student.marks, 0);

// console.log(totalMarksSum);

//Напишіть код, який відсортує масив об'єктів litmir за значенням title.

// var litmir = [
//   { author: 'Хэленка', title: 'Улетела сказка' },
//   { author: 'Коул Кресли', title: 'Восстание Аркан' },
//   { author: 'Райчел Мид', title: 'Золотая лилия' },
// ];

// const newArr = [...litmir].sort((a, b) => a.title.localeCompare(b.title));

// console.table(newArr);

/*
  Аналог map
  Напишіть функцію myMap(array, callback), яка першим параметром приймає масив, а другим - функцію, яка застосовується до кожного елемента масиву.
  Функція myMap повинна повернути новий масив, елементами якого будуть результати виклику колббека.
  Вирішуємо за допомогою for of.
*/

// const numbers = [64, 49, 36, 25, 16];
// const myMap = (array, callback) => {
//   const newArr = [];
//   for (const number of array) {
//     newArr.push(callback(number));
//   }
//   return newArr;
// };

// const sum = num => (num += 10);
// console.log(myMap(numbers, sum));

// Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//       console.log(this.price);
//     },
//   };

//   function callAction(action) {
//     action();
//   }

// callAction(product.showPrice.bind(product))

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

//Ми вже реалізували цю функцію, але коли ми фактично запускаємо код, властивість
//«name» доступна, але «firstName» і «lastName» недоступні. Усі властивості мають
//бути доступними. Ви можете знайти, що з ним не так? Також доступний тестовий
//пристрій

// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;

//   return {
//     name: this.firstName + ' ' + this.lastName,
//     firstName: this.firstName,
//     lastName: this.lastName,
//   };
// }

// var n = new NameMe('John', 'Doe');
// console.log(n.firstName); //Expected: John
// console.log(n.lastName); //Expected: Doe
// console.log(n.name); //Expected: John Doe

//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }

//   get FullName() {
//     return this.name + ' ' + this.surname;
//   }
// }

// const worker = new Worker('Іван', 'Іванов', 10, 31);

// console.log(worker.name); //Виведе 'Іван'
// console.log(worker.surname); //Виведе 'Іванов'
// console.log(worker.FullName); //Виведе 'Іванов Іван'
// console.log(worker.rate); //Виведе 10
// console.log(worker.days); //Виведе 31
// console.log(worker.getSalary()); //Виведе 310 - тобто 10 * 31

//Напишіть новий клас Boss, цей клас успадковується від класу Worker та минулого
//завдання. З'являється нові властивості: workers - кількість працівників.
//І зарплата вважається інакше: добуток (множення) ставки rate на кількість
//відпрацьованих днів і кількість працівників.
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }

//   get FullName() {
//     return this.name + ' ' + this.surname;
//   }
// }

// class Boss extends Worker {
//   constructor(name, surname, rate, days, workers) {
//     super(name, surname, rate, days);
//     this.workers = workers;
//   }

//   getSalary() {
//     return this.workers * this.rate * this.days;
//   }
// }

// const boss = new Boss('Іван', 'Іванов', 10, 31, 10);
// console.log(boss.name); //Виведе 'Іван'
// console.log(boss.surname); //Виведе 'Іванов'
// console.log(boss.getFullName); //Виведе 'Іванов Іван'
// console.log(boss.rate); //Виведе 10
// console.log(boss.days); //Виведе 31
// console.log(boss.workers); //Виведе 10
// console.log(boss.getSalary()); //Виведе 3100 - тобто 10 * 31 * 10

/*
  Клієнт
  Напиши клас Client який створює об'єкт із властивостями login та email.
  login має бути суспільною властивістю, а email приватним.
  Доступ до email зроби через геттер та сетер.
  Перед тим як змінити емейл, у сеттері потрібно викликати приватний метод, який валідуватиме імейл (наявність собачки та крапки).
  Якщо імейл невалідний – нічого не робити і вивести в консоль 'Email is not valid!'
*/

// class Client {
//   #email;
//   constructor(login, email) {
//     this.login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (newEmail.includes('@')) { this.#email = newEmail }
//     else { 'Email is not valid!' };
//   }
// }

// const client = new Client('Natros', 'natros@gmail.com');
// console.log(client.email);
// console.log(client);
// client.email = 'sdsdasdada'
// console.log(client.email)
//
//
//
/*
 * Створіть об'єкт calculator із трьома методами:
 * read(firstValue, secondValue)- приймає два значення та зберігає їх як властивості об'єкта.
 * add() - повертає суму збережених значень.
 * mult() - перемножує збережені значення та повертає результат.
 */

// calculator = {
//   read(firstValue, secondValue) {
//     this.a = firstValue;
//     this.b = secondValue;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(10, 20);
// console.log(calculator);
// console.log(calculator.mult());
// console.log(calculator.add());
