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
