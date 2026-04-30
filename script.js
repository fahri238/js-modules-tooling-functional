//////////////////////////////////////////////
// EXPORTING & IMPORTING IN ES6 MODULES

// importing modules
// always put import modules at the top of the file
// this is strict by default, because it's modules
// import {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// & naming import
// addToCart('bread', 5)
// console.log(price, tq)
// console.log(shippingCost)

import * as ShoppingCart from './shoppingCart.js';
console.log('importing modules');

// it's will like an object
ShoppingCart.addToCart('Bread', 7);
console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);
import add, { cart } from './shoppingCart.js';
add('pizza', 90);
add('bread', 39);
add('spagetti', 30);

// modules with export & import have life connection
console.log(cart);

//////////////////////////////////////////////
// TOP LEVEL AWAIT ES2022

// console.log('START FETCHING');
// // top level await
// // await can work without async function, but it only inside module
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data)
// console.log('SOMETHING');

// real world example top level await
// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // not very clean
// lastPost.then(last => console.log(last));

// // not inside async function, but inside module (we can access it) = top level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2());

// top level await (without async function), will blocking execution code

//////////////////////////////////////////////
// THE MODULES PATTERN

// IFEE, Immediately invoked function expression
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrize = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost ${shippingCost})`,
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrize,
    totalQuantity,
  };
})();

// closure : we can acces the variable throug the function where the variable declared
// we cant acces the variable directly, but we can change it through the it's function
ShoppingCart2.addToCart('pizza', 20);
ShoppingCart2.addToCart('apple', 27);

console.log(ShoppingCart2.shippingCost);

////////////////////////////////////////////////////////
// COMMON JS MODULE

// Export
// exports.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (shipping cost ${shippingCost})`,
//   );
// };

// import
// const { addToCart } = require('./shoppingCart.js');

////////////////////////////////////////
// INTRODUCTION TO NPM
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

// nested object
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 7 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const statusDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(statusDeepClone);

if (module.hot) {
  module.hot.accept();
}