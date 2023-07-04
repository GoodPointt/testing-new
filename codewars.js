// function findAverage(array) {
//   if (array.length) {
//     let result = 0;
//     for (let i = 0; i < array.length; i += 1) {
//       result += array[i];
//     }
//     return result / array.length;
//   }

//   return 0;
// }

// console.log(findAverage([21, 212, 212, 2121, 2]));
//www.codewars.com/users/leaderboard

// function points(games) {
//   return games.reduce((acc, game) => {
//     console.log(game[0]);
//     console.log(game[2]);
//     if (game[0] > game[2]) return 3 + acc;
//     if (game[0] < game[2]) return 0 + acc;
//     if (game[0] === game[2]) return 1 + acc;
//   }, 0);

//   //   return 0
// }

// const points = games =>
//   games.reduce((acc, [teamA, _, teamB]) => {
//     if (teamA > teamB) return acc + 3;
//     if (teamA < teamB) return acc;
//     return acc + 1;
//   }, 0);

// console.log(
//   points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
// );

// function getGrade(s1, s2, s3) {
//   let score = (s1 + s2 + s3) / 3;
//   if (90 <= score && score <= 100) return 'A';
//   else if (80 <= score && score < 90) return 'B';
//   else if (70 <= score && score < 80) return 'C';
//   else if (60 <= score && score < 70) return 'D';
//   else if (0 <= score && score < 60) return 'F';
// }

// console.log(getGrade(70, 70, 100));

// function hero(bullets, dragons) {
//   return bullets / dragons >= 2 ? true : false;
// }

// console.log(hero(10, 5));

// function reverseWords(str) {
//   return str
//     .split(' ')
//     .map(word => word.split('').reverse().join(''))
//     .join(' ');
// }

// console.log(reverseWords('double  spaced  words'));

// function litres(time) {
//   return Math.floor(time * 0.5);
// }

// console.log(litres(12.3));

// function oddOrEven(array) {
//   return array.reduce((acc, n) => acc + n, 0) % 2 === 0 ? 'even' : 'odd';
// }

// function highAndLow(numbers) {
//   const numbersArr = numbers.split(' ').map(Number);
//   const minNum = Math.min(...numbersArr);
//   const maxNum = Math.max(...numbersArr);
//   return `${maxNum} ${minNum}`;
// }

// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')); //'42 -9';

// function paperwork(n, m) {
//   if (n < 0 || m < 0) return 0;
//   return n * m;
// }

// console.log(paperwork(-5, 5));

// const summation = num => {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// };

// summation(8);

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// console.log(removeChar('abvgd'));

// function sumArray(array) {
//   if (array === null || array.length > 2 || array === undefined) return 0;

//   return [...array]
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, el) => acc + el, 0);
// }

// console.log(sumArray([6, 2, 1, 8, 10]));

// const reverseSeq = n => {
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     let num = 0;
//     num += i;
//     arr.push(num);
//   }
//   return arr.reverse();
// };

// console.log(reverseSeq(5));

// function smash(words) {
//   return words.join(' ');
// }

// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

// const isSquare = n => (Math.sqrt(n) % 1 === 0 ? true : false);

// console.log(isSquare(25));

// function findNextSquare(sq) {
//   const sqrt = Math.sqrt(sq);
//   return sqrt % 1 === 0 ? (sqrt + 1) ** 2 : -1;
// }

// console.log(findNextSquare(121));

// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) return [];
//   const positiveArr = [];
//   const negativeArr = [];

//   input.filter(el => (el > 0 ? positiveArr.push(el) : negativeArr.push(el)));

//   return [positiveArr.length, negativeArr.reduce((acc, el) => acc + el, 0)];
// }

// console.log(countPositivesSumNegatives([1, 2, 3, -2, -100]));

// function bmi(weight, height) {
//   let bmi = weight / height ** 2;

//   if (bmi <= 18.5) return 'Underweight';

//   if (bmi <= 25.0) return 'Normal';

//   if (bmi <= 30.0) return 'Overweight';

//   if (bmi > 30) return 'Obese';
// }

// console.log(bmi(75, 1.78));

// function filter_list(l) {
//   return l.filter(el => typeof el === 'number');
// }

// // filter_list([1, 2, 'a', 'b']) == [1, 2];
// // filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15];
// // filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123];
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

// function digitize(n) {
//   return n
//     .toString()
//     .split('')
//     .reverse()
//     .map(el => Number(el));
// }

// console.log(digitize(123456));

// function getSum(a, b) {
//   if (a === b) return a;
//   let sum = 0;
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//   }
//   if (a > b) {
//     for (let i = b; i <= a; i++) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getSum(-1, 2));

// function removeSmallest(numbers) {
//   if (!numbers.length) return [];

//   min = Math.min(...numbers);
//   index = numbers.indexOf(min);
//   filteredArr = numbers.filter((_, i) => i !== index);
//   return filteredArr;
// }

// console.log(removeSmallest([1, 2, 3, 4, 5]));
