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

const createProduct = (obj, callback) => {
  const product = { id: Date.now(), ...obj };
  console.log(product);
  callback(product);
};

logProduct = product => {
  console.log(product);
};

logTotalPrice = product => {
  console.log(product.price * product.quantity);
};

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
