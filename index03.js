// FizzBuzz
// Потрібно перебрати усі числа  від 1 до n. Треба вивести у консоль числа, де n - це ціле число, з такими умовами:
// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizzbuzz замість чисел, кратних як 3, і 5.

// const n = 37;
// for (let i = 1; i <= n; i += 1) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log('fizzbuzz =', i);
//   }
//   else if (i % 3 === 0) {
//     console.log('buzz =', i);
//   } else if (i % 5 === 0) {
//     console.log('buzz =', i);
//   }
// }

// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.splice(0, 1)[0]);
// genres.splice(0, 0, 'Country', 'Reggae');
// console.log(genres);

// const moreGenres = ['Country', 'Reggae'];
// moreGenres.push(...genres);
// console.log(moreGenres);

// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';
// const valuesArr = values.split(' ');
// console.log(valuesArr);
// const rectangleArea = Number(valuesArr[0]) * Number(valuesArr[1]);
// console.log('Area of ​​a rectangle equal = ', rectangleArea);

// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}:${fruits[i]}`);
// }
// for (const i in fruits) {  //i - vsegda stroka!!!
//   console.log(`${Number(i)+1}:${fruits[i]}`);
// }

// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";
// const namesArr = names.split(",");
// const phonesArr = phones.split(",");
// const userId = Number(prompt("Enter userID to check phone number."));
// console.log(`Username:${namesArr[userId]}  Phone:${phonesArr[userId]}`);

// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = "Welcome to the future";
// const stringArr = string.split(" ");
// console.log(stringArr);
// const formatedStringArr = stringArr.slice(1, stringArr.length - 1);
// console.log(formatedStringArr);
// const formatedString = formatedStringArr.join(" ");
// console.log(formatedString);

// const string = 'Welcome to the future';
// console.log(
//   string
//     .split(' ')
//     .slice(1, string.length - 1)
//     .join(' ')
// );

// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';
// const reverseString = string.split('').reverse().join('');
// console.log(reverseString);

// const string = 'Welcome to the future';
// let newString = [];
// for (let i = string.length - 1; i >= 0; i -= 1) {
//   newString.push(string[i]);
// }
// newString = newString.join('');
// console.log(newString);

// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs.sort());

// КАК МЕНЯТЬ МЕСТАМИ ЄЛЕМЕНТІ В МАССИВЕ
// let temp = langs[1];
// langs[1] = langs[2];
// console.log(langs);
// langs[2] = temp;
// console.log(langs);
//------------------------------------
// Цикл в цикле, сортировка массива по алфавиту

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (let i = 0; i < langs.length - 1; i += 1) {
//   for (let j = i + 1; j < langs.length; j += 1) {
//     if (langs[i][0] > langs[j][0]) {      // [0] чтобы обратиться к первой букве
//       let temp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
// }
// console.log(langs);

// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }
// console.log(min);

// ========================================================================== //
// ============================ Автопроверки тесты ========================== //
// ========================================================================== //

//Создание slug строки
// slugify("QWWdsd dsds sdsds SDdsd");
// function slugify(title) {
//   const slug = title.toLowerCase().split(" ").join("-");
//   return slug;
// }

// // Функция суммы всех чисел до указанного числа
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i++) {
//     total += i;
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }
// calculateTotal(3);

// // Сумма всех чисел массива
// const order = [1, 2, 3];
// let total = 0;
// for (i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
// console.log(total);

// Сумма всех цифр массива для функции
// calculateTotalPrice([1, 2, 3, 4, 5, 6])
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
//   console.log(total);
// }

// Поиск самого длинного слова в строке

// let string = "The quick brown fox jumped over the lazy dog";
// const stringArr = string.split(' ');
// let longestString = stringArr[0];
// for (const word of stringArr) {
//   if (word.length > longestString.length) {
//     longestString = word;
//   }
// }
// console.log(longestString);

// Функция  поиска самого длинного слова в строке
// findLongestWord('QWEWWrs sdsdasd qweHJGDHJSF')
// function findLongestWord(string) {
//   const stringArr = string.split(' ');
//   let longestString = stringArr[0];
//   for (const word of stringArr) {
//     if (word.length > longestString.length) {
//       longestString = word;
//     }
//   }
//   return longestString;
// }

// Функция добавляет целые числа в массив от мин до макс
// createArrayOfNumbers(1, 3)
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   // Change code above this line
//   return numbers;
// }

// const array1 = [1, 3, 5];
// const array2 = [0, 8, 5, 3];
// const newArr = array1.concat(array2).sort();
// const newArrSort = [];
// console.log(newArr);
// for (let i = 0; i < newArr.length; i++) {
//   const newArrEl = newArr[i];
//   if (newArrEl === newArr[i + 1]) {
//     newArrSort.push(newArrEl);
//   }
// }
// console.log(newArrSort);

// ОБЩИЕ ЭЛЕМЕНТЫ МАССИВОВ
// function getCommonElements(array1, array2) {
//   const newArr = array1.concat(array2).sort();
//   const newArrSort = [];
//   // console.log(newArr);
//   for (let i = 0; i < newArr.length; i++) {
//     const newArrEl = newArr[i];
//     if (newArrEl === newArr[i + 1]) {
//       newArrSort.push(newArrEl);
//     }
//   }
//   return newArrSort;
// }

// ОБЩИЕ ЭЛЕМЕНТЫ МАССИВОВ
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArr = array1.concat(array2).sort();
//   const newArrSort = [];
//   if (array1 !== undefined && array2 !== undefined) {
//     for (let i = 0; i < newArr.length; i++) {
//       const newArrEl = newArr[i];
//       if (newArrEl === newArr[i + 1]) {
//         newArrSort.push(newArrEl);
//       }
//       newArrSort.includes();
//     }
//     return newArrSort;
//     // Change code above this line
//   }
// }

// ФУНКЦИЯ ОБЩИЕ ЭЛЕМЕНТЫ МАССИВОВ
// function getCommonElements(array1, array2) {
//   const newArr = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// МАСИИВ ЧЕТНЫХ ЧИСЕЛ от START to END
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenArr = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenArr.push(i);
//     }
//   }
//   return evenArr;

//   // Change code above this line
// }
// console.log(getEvenNumbers(1, 10));
