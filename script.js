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
import add, {cart} from './shoppingCart.js';
add('pizza', 90);
add('bread', 39);
add('spagetti', 30);

// modules with export & import have life connection
console.log(cart)