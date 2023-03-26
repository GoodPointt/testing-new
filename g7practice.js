// Напишите функцию, которая принимает на вход две строки, представляющие двоичные числа, и возвращает их сумму в виде двоичного числа.

// const foo = (a, b) => {};

// console.log(foo('0101', '111'));

// Напишите функцию, которая принимает на вход массив объектов, содержащих информацию о студентах (имя, возраст, оценки), и возвращает новый массив, содержащий только тех студентов, у которых хотя бы одна оценка выше 8.

// const students = [
//   {
//     name: 'Dhon',
//     age: 18,
//     mark: [1, 2, 3, 4, 8, 2],
//   },
//   {
//     name: 'Jhon',
//     age: 18,
//     mark: [1, 2, 3, 4, 3, 2],
//   },
//   {
//     name: 'Shon',
//     age: 18,
//     mark: [1, 2, 3, 4, 1, 2],
//   },
//   {
//     name: 'Khon',
//     age: 18,
//     mark: [11, 10, 10, 9, 8, 2],
//   },
// ];

// const higherMark = students =>
//   students.filter(student => student.mark.filter(mark => mark > 8));

// console.table(higherMark(students));

// Напишите функцию, которая принимает на вход массив объектов, содержащих информацию о покупках (название товара, цена, количество), и возвращает общую стоимость всех покупок.

// const purchases = [
//   {
//     name: 'Товар 1',
//     price: 100,
//     quantity: 2,
//   },
//   {
//     name: 'Товар 2',
//     price: 50,
//     quantity: 3,
//   },
//   {
//     name: 'Товар 3',
//     price: 200,
//     quantity: 1,
//   },
// ];

// const getTotalPrice = purchases => {
//   // Напишите ваш код здесь
//   return purchases.reduce(
//     (total, purchase) => total + purchase.price * purchase.quantity,
//     0
//   );
// };

// console.log(getTotalPrice(purchases));

// Напишите функцию, которая принимает на вход два массива объектов, содержащих информацию о фильмах (название, год выпуска, рейтинг), и возвращает новый массив, содержащий только те фильмы, которые выпущены после 2000 года и имеют рейтинг выше 8.
// const movies = [
//   {
//     title: 'Matrix',
//     year: 1999,
//     rating: 8.7,
//   },
//   {
//     title: 'The Lord of the Rings',
//     year: 2001,
//     rating: 8.9,
//   },
//   {
//     title: 'Harry Potter',
//     year: 2003,
//     rating: 8.2,
//   },
//   {
//     title: 'Interstellar',
//     year: 2014,
//     rating: 8.6,
//   },
// ];

// const newMovies = [
//   {
//     title: 'John Wick',
//     year: 2014,
//     rating: 8.1,
//   },
//   {
//     title: 'Inception',
//     year: 2010,
//     rating: 8.8,
//   },
//   {
//     title: 'The Avengers',
//     year: 2012,
//     rating: 8.1,
//   },
// ];

// const getHighRatedMovies = (movies, newMovies) => {
//   // Напишите ваш код здесь
//   return [...movies, ...newMovies].filter(
//     movie => movie.year > 2000 && movie.rating > 8
//   );
// };

// Напишите функцию, которая принимает на вход строку и возвращает количество уникальных символов в этой строке.

// const getUniqueSymbols = str => {
//   // Напишите ваш код здесь
//   const str = 'qweqeqweqwe'
//   const newArr = str.split('')
//   const
// };

// Напишите функцию, которая принимает на вход массив строк и возвращает новый массив, содержащий только те строки, которые являются палиндромами (читаются одинаково как с начала, так и с конца).

// const strings = ['abacaba', 'aa', 'zzz', 'a', 'madam', 'qwerty'];

// const getPalindromes = strings => {
//   return strings.filter(string => {
//     return string === string.split('').reverse().join('');
//   });
// };

// Напишите функцию, которая принимает на вход два массива чисел и возвращает новый массив, содержащий только те элементы, которые есть только в одном из массивов.

//  Напишите функцию, которая принимает на вход массив чисел и возвращает новый массив, содержащий только те числа, которые повторяются в исходном массиве более одного раза.
// const numbers1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6];
