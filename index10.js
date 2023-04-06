// Example 1 - Блоггер
// Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

// email - почта, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// topics - массив тем на которых специализируется блоггер
// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.

// Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts
// console.log(mango);

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
//
//
//
//
//
//
//
//Example 2 - Хранилище
// Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     this.items = this.items.filter((el) => el !== item)
//   };
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
//
//
///
//
//
//
//
//
// Example 3 - User
// Напиши класс User который создаёт объект со свойствами login и email. Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }

// get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

//
//
//
//
//
//
//
//

// Example 4 - Заметки
// Напиши класс Notes который управляет коллекцией заметок в свойстве items. Заметка это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(items = []) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     // const index = this.items.findIndex(({ text: noteText }) => text === noteText)
//     // this.items.splice(index, 1)

//     this.items = this.items.filter(({ text: noteText }) => text !== noteText);
//   }

//   updateNote(text, newPriority) {
//     const targetObj = this.items.find(
//       ({ text: noteText }) => text === noteText
//     );
//     console.log(targetObj);
//     targetObj.priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     this.blacklistedEmails.some(el => el === email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// function sumOfIntegers(num) {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }
//   return result;
// }
// console.log(sumOfIntegers(8));

// Создайте функцию, которая будет принимать массив чисел и возвращать новый массив, в котором будут только уникальные числа.

// const arr = [12, 23, 233, 12, 2323, 33];

// const uniqueArr = array => array.filter((el, i, ar) => ar.indexOf(el) === i);

// console.log(uniqueArr(arr));

// function unique(array) {
//   let uniqueNums = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!uniqueNums.includes(array[i])) {
//       uniqueNums.push(array[i]);
//     }
//   }
//   return uniqueNums;
// }

// console.log(unique([2,5,8,7,6,4,2,3]));

// function unique(array) {
//   let unique = [];
//   for (const arr of array) {
//     if (!unique.includes(arr)) {
//       unique.push(arr);
//     }
//   }
//   return unique;
// }

// console.log(unique([2, 5, 8, 7, 6, 4, 2, 3]));

// Создайте объект, который будет представлять банковский счет с полями "баланс", "владелец" и "номер счета". Добавьте в объект метод, который будет выводить информацию о банковском счете в консоль. Добавьте в объект метод, который будет позволять изменять баланс на счету. Создайте несколько объектов и вызовите методы для каждого из них.

// Создайте функцию, которая будет принимать массив строк и возвращать новый массив, в котором будут только те строки, которые начинаются с заданной буквы.
// const arr = ['sdsdsd', 'sdsdsdsd', 'aaaa']

// const filterByLetter = (array, letter) => array.filter(el => el[0] === letter);

// console.log(filterByLetter(arr, 's'))

// Создайте объект, который будет представлять библиотеку с полями "название", "авторы" и "количество книг". Добавьте в объект метод, который будет выводить информацию о библиотеке в консоль. Добавьте в объект метод, который будет позволять добавлять книги в библиотеку. Создайте несколько объектов и вызовите методы для каждого из них.

// const library = {
//   name: 'Ly4waya Bibla',
//   bookNames: [],
//   authors: [],
//   booksCount: 0,

//   getInfo() {
//     return `Название библиотеки: ${this.name}, Авторы: ${this.authors}, Книги:${this.bookNames} Количество книг: ${this.booksCount}`;
//   },

//   addBook({ bookName, author, quantity }) {
//     this.bookNames.push(bookName);
//     this.authors.push(author);
//     this.booksCount += quantity;
//   },
// };
// const book = {
//   bookName: 'Neznaika',
//   author: 'SDKMSLKn',
//   quantity: 1,
// };

// library.addBook(book);
// console.log(library.getInfo());
// console.log(library.authors)

// const library2 = Object.create(library);
// library2.name = 'NeLu4waya'

// const book2 = {
//   bookName: 'znaika',
//   author: 'MSLKn',
//   quantity: 12,
// };
// const book3 = {
//   bookName: 'aika',
//   author: 'SLKn',
//   quantity: 11,
// };
// library2.addBook(book2)

// console.log(library2.getInfo())

// library2.addBook(book3);

// console.log(library2.getInfo());

// Создайте функцию, которая будет принимать строку и возвращать новую строку, в которой все слова будут написаны задом наперед.

// let string = 'qwertyui';

// const reversString = str => str.split('').reverse().join('');

// console.log(reversString('qWeasdzxcvbnfghfrTy'));

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greeting() {
//     return `Hello my name is ${this.name} i am ${this.age} years old`;
//   }
// }

// const vanek = new Person({ name: 'Vanek', age: '52' });

// console.log(vanek.greeting());

// Создайте класс Rectangle, который будет иметь свойства width и height, а также методы getArea() (возвращает площадь прямоугольника) и getPerimeter() (возвращает периметр прямоугольника).

// Напишите функцию, которая принимает на вход два аргумента: массив объектов и строку, содержащую название свойства. Функция должна возвращать новый массив, содержащий значения указанного свойства из каждого объекта в исходном массиве.

// const films = [
//   {
//     name: 'Pila',
//     genre: 'horror',
//     rating: 8.5,
//   },
//   {
//     name: 'Pila-2',
//     genre: 'horror',
//     rating: 8.7,
//   },
//   {
//     name: 'Pila-3',
//     genre: 'horror',
//     rating: 8.1,
//   },
// ];

// function fx(arr, key) {
//   return arr.map(el => el[key]);
// }

// console.log(fx(films, 'name'));

// Напишите функцию, которая принимает на вход строку и возвращает true, если эта строка является палиндромом (читается одинаково в обоих направлениях), и false в противном случае.

// function palindrom(string) {
//   const reverseString = string.split('').reverse().join('');

//   return (
//     reverseString.toUpperCase().replace(/[^a-zA-Z0-9]/g, '') ===
//     string.toUpperCase().replace(/[^a-zA-Z0-9]/g, '')
//   );
// }

// console.log(palindrom('"Not New York", – Roy went on'));

// Напишите функцию, которая принимает на вход массив объектов и строку, содержащую название свойства. Функция должна возвращать новый массив, содержащий только те объекты из исходного массива, у которых значение указанного свойства является уникальным в рамках всего массива.

// const films = [
//   {
//     name: 'Pila',
//     genre: 'horror',
//     rating: 8.5,
//   },
//   {
//     name: 'Pila-2',
//     genre: 'horror',
//     rating: 8.7,
//   },
//   {
//     name: 'Pila-3',
//     genre: 'horror',
//     rating: 8.1,
//   },
// ];

// function fx(arr, string) {
//   arr.filter(film => film[string]);
// }

// function getUniqueObjectsByPropertyValue(array, propertyName) {
//   var seenValues = {};

// фильтруем массив, оставляя только те объекты, у которых значение свойства является уникальным
//   return array.filter(function (obj) {
//     if (seenValues.hasOwnProperty(obj[propertyName])) {
//       seenValues[obj[propertyName]]++; // увеличиваем счетчик, если значение уже встречалось ранее
//       return false;
//     } else {
//       seenValues[obj[propertyName]] = 1; // добавляем новое уникальное значение в объект
//       return true;
//     }
//   });
// }

// Напишите функцию, которая принимает на вход массив объектов и строку, содержащую название свойства. Функция должна возвращать новый массив, содержащий только те объекты из исходного массива, у которых значение указанного свойства является уникальным в рамках всего массива.

// const films = [
//   {
//     name: 'Pila',
//     genre: 'horror',
//     rating: 8.5,
//   },
//   {
//     name: 'Pila-2',
//     genre: 'horror',
//     rating: 8.7,
//   },
//   {
//     name: 'American-Pie',
//     genre: 'comedy',
//     rating: 8.1,
//   },
// ];

// function fx(arr, str) {
//   return arr
//     .map(el => el[str])
//     .filter(
//       (elem, index, array) =>
//         array.indexOf(elem) === index && array.lastIndexOf(elem) === index
//     );
// }

// console.log(fx(films, 'genre'));

// Напишите функцию, которая принимает на вход массив объектов и две строки, содержащие названия свойств. Функция должна возвращать новый массив, содержащий объекты, отсортированные по значениям указанных свойств в порядке возрастания или убывания (в зависимости от переданного флага сортировки).

// const movies = [
//   {
//     title: 'The Shawshank Redemption',
//     director: 'Frank Darabont',
//     year: 1994,
//   },
//   {
//     title: 'The Godfather',
//     director: 'Francis Ford Coppola',
//     year: 1972,
//   },
//   {
//     title: 'The Dark Knight',
//     director: 'Christopher Nolan',
//     year: 2008,
//   },
// ];

// Напишите функцию, которая принимает на вход строку и возвращает новую строку, в которой все слова развернуты в обратном порядке, но сохранен порядок слов в предложении. Например, для входной строки "Hello world" функция должна вернуть строку "olleH dlrow"

// const string = 'Hello world';

// const reverseString = str =>
//   str.split('').reverse().join('').split(' ').reverse().join(' ');

// console.log(reverseString(string));

// Напишите функцию, которая принимает на вход массив чисел и возвращает новый массив, состоящий из квадратов этих чисел.

// const array = [1, 2, 3, 4, 5, 6, 7];

// const fx = arr => arr.map(a => a * a);

// console.log(fx(array));

// Напишите функцию, которая принимает на вход строку и возвращает ее в обратном порядке.

// const str = 'Sveta jgi';

// function words(str1) {
//   return str1.split('').reverse().join('');
// }
// console.log(words(str));

// Напишите функцию, которая принимает на вход массив чисел и возвращает новый массив, состоящий из всех возможных комбинаций элементов исходного массива. Например, для массива [1, 2, 3] функция должна вернуть новый массив, содержащий все возможные комбинации элементов: [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]].

// const arr = [1, 2, 3];

// function getAllCombinations(arr) {
//   if (arr.length === 0) {
//     // базовый случай
//     return [[]]; // возвращаем пустой массив в виде начальной комбинации
//   } else {
//     const [first, ...rest] = arr;
//     const restCombinations = getAllCombinations(rest); // рекурсивный вызов для оставшихся элементов
//     const merged = restCombinations.flatMap(comb => [comb, [...comb, first]]); // объединяем текущий элемент с каждой комбинацией
//     return merged;
//   }
// }

// function getCombinations(arr) {
//   const result = [];
//   const generateCombinations = (curArr, startIndex) => {
//     result.push(curArr);
//     for (let i = startIndex; i < arr.length; i++) {
//       generateCombinations(curArr.concat(arr[i]), i + 1);
//     }
//   };
//   generateCombinations([], 0);
//   return result;
// }

// Напишите функцию, которая принимает на вход массив чисел и возвращает новый массив, состоящий из элементов исходного массива, удовлетворяющих следующему условию: значение элемента больше среднего значения элементов исходного массива. Например, для массива [1, 2, 3, 4, 5] функция должна вернуть новый массив [4, 5].

// const array = [1, 2, 3, 4, 5];

// function bigestNumbersInArr(arr) {
//   return arr.filter(a => {return a > arr.reduce((total, num) => num + total, 0) / arr.length;});
// }
// console.log(bigestNumbersInArr(array));

// const arra = [3, 4, 6, 7, 5, 9];

// const filtredAverageArr = arr =>
//   [...arr].filter(
//     (el, arr) => el > arr.reduce((acc, num) => acc + num, 0) / arr.length
// );

// Answer: Напишіть функцію, яка приймає два масиви цілих чисел та повертає масив, який містить тільки ті числа, які зустрічаються у обох масивах.

// const arr1 = [1, 2, 8, 4, 5];
// const arr2 = [6, 7, 8, 9, 1, 23, 11];

// function fundNum(array1, array2) {
//   return array1.filter((num) => array2.includes(num))
// }

// console.log(fundNum(arr1, arr2));

// Answer: Напишіть функцію, яка приймає два масиви цілих чисел та повертає масив, який містить тільки ті числа, які зустрічаються у обох масивах, але порядок цих чисел в масиві співпадає з порядком цих чисел у першому маси

// const arr1 = [1, 2, 8, 4, 5];
// const arr2 = [6, 7, 8, 2, 1, 23, 11];

// function findNum(arr2, arr1) {
//   const dsd = arr2.filter(num => arr1.includes(num));
//   return dsd
// }

// console.log(findNum(arr2, arr1))

// Answer: Напишіть функцію, яка приймає два масиви цілих чисел та повертає масив, який містить тільки ті числа, які зустрічаються у обох масивах, але порядок цих чисел в масиві залежить від порядку цих чисел у першому масиві. Тобто якщо перший масив містить числа [2, 3, 4] та другий масив містить числа [3, 4, 5], то результуючий масив буде містити числа [2, 3, 4, 5].

// Напишіть функцію, яка приймає масив цілих чисел та повертає масив, який містить пари чисел, які дорівнюють заданому числу.

// const arr2 = [6, 7, 8, 2, 1, 23, 11];

// function findSumOfNums(sum, arr2) {
//   const sumArr = [];
//   for (let i = 0; i < arr2.length; i++) {
//     for (let k = i + 1; k < arr2.length; k++) {
//       if (arr2[i] + arr2[k] === sum) sumArr.push(arr2[i] + arr2[k]);
//     }
//   }
//   return sumArr;
// }

// console.log(findSumOfNums(12, arr2));

// задачу
//  Answer: Напишіть функцію, яка приймає масив цілих чисел та повертає масив, який містить тільки ті числа, які дорівнюють найбільшому числу в масиві.

// const arr = [6, 7, 23, 2, 1, 23, 11];

// function findBiggestNum(arr) {
//   return arr.filter(el => el === Math.max(...arr));
// }

// console.log(findBiggestNum(arr));
