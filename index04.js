// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// function calcBMI(weight, height) {
//   let bmi;
//   if (weight.includes(',') || height.includes(',')) {
//     return (bmi = String(
//       Number(weight.split(',').join('.')) /
//         (Number(height.split(',').join('.')) *
//           Number(height.split(',').join('.')))
//     )).slice(0, 4);
//   }
//   return (bmi = String(
//     Number(weight) / (Number(height) * Number(height))
//   )).slice(0, 4);
// }
// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
//

// function calcBMI(weight, height) {
//   weight = convertToDecimal(weight);
//   height = convertToDecimal(height);

//   const result = weight / (height * height);

//   return getFixedNumber(result);
// }
// function convertToDecimal(str) {
//   return Number(str.replace(',', '.'));
// }
// function getFixedNumber(num) {
//   return Number(num).toFixed(1);
// }
// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//   const arr = [a, b]
//   arr.sort();
//   return arr[0];
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// function min(a, b) {
//   if (a < b) return a;
//   return b;
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//   const arr = dimensions.split(' ');
//   return arr[0] * arr[1];
// }

// console.log(getRectArea('8 11'));

// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//   const itemsArr = [];
//   for (let i = 0; i < items.length; i++) {
//     itemsArr.push(`${Number(i) + 1} : ${items[i]}`);
//   }
//   return itemsArr;
// }

// console.log(logItems(['Mango', 'Poly', 'Ajax']));
// console.log(logItems(['🍎', '🍇', '🍑', '🍌', '🍋']));

// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   console.log(namesArr);
//   const phonesArr = phones.split(',');
//   console.log(phonesArr);

//   const result = [];
//   for (let i = 0; i < namesArr.length; i++) {
//     result.push(namesArr[i] + ' : ' + phonesArr[i]);
//   }
//   return result;
// }

// console.log(
//   printContactsInfo(
//     'Jacob,William,Solomon,Artemis',
//     '89001234567,89001112233,890055566377,890055566300'
//   )
// );

// Наібільше число в масиві
// function findLagestNumber(numbers) {
//   let max = numbers[0];
//   for (const num of numbers) {
//     if (num > max) max = num;
//   } return max;
// }
// console.log(findLagestNumber([2, 3, 5, 20, 2, 0, 255]));

// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

// function calAverage() {
//   let sum = 0;
//   for (const argument of arguments) {
//     sum += argument;
//   }
//   return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое
//
//
//3 funcii
//
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log('Course already exist!!!!!!');
//     return;
//   }
//   courses.push(name);
// }

// function removeCourse(name) {
//   const index = courses.indexOf(name);
//   if (index === -1) {
//     console.log('Course dont exist');
//   } else courses.splice(index, 1);
// }

// function updateCourse(oldName, newName) {
//   const index = courses.indexOf(oldName);
//   if (courses.includes(newName)) {
//     console.log('Course already exist!!!!!!');
//     return;
//   }
//   else if (index === -1) {
//       console.log('Course do not exist!!!!!!!');
//     } courses[index] = newName;
//   }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'
// console.log(courses);
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
